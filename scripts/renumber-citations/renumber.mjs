// scripts/renumber-citations/renumber.mjs
//
// 使い方:
//   node scripts/renumber-citations/renumber.mjs --dry-run    （変更内容を出力するだけ、ファイルは書き換えない）
//   node scripts/renumber-citations/renumber.mjs --apply      （実際に書き換える）
//
// 動作:
//   - src/content/docs/ 配下の全 .mdx をスキャン
//   - frontmatter の references 配列と本文の <Cite id={N} /> を解析
//   - 本文中の出現順に新番号を割り当て
//   - frontmatter の references を新順序に並び替え
//   - 本文中の <Cite id={N} /> を新番号で書き換え
//   - 本文に出現しない references は削除（警告ログ出力）

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DOCS_ROOT = path.join(REPO_ROOT, 'src', 'content', 'docs');

const DRY_RUN = process.argv.includes('--dry-run');
const APPLY = process.argv.includes('--apply');

if (!DRY_RUN && !APPLY) {
  console.error('Usage: node renumber.mjs --dry-run | --apply');
  process.exit(1);
}

// ---------- ユーティリティ ----------

/** mdx を frontmatter ブロックと本文に分割 */
function splitFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  return { fm: match[1], body: match[2] };
}

/** frontmatter の references 配列を抽出（YAML パーサーは使わず、ブロック単位で正規表現抽出） */
function extractReferences(fm) {
  // references: で始まり、次のトップレベルキーまでをブロックとして拾う
  const lines = fm.split(/\r?\n/);
  let inRefs = false;
  let block = [];
  let beforeBlock = [];
  let afterBlock = [];
  let blockEnded = false;
  for (const line of lines) {
    if (!inRefs) {
      if (/^references:\s*$/.test(line)) {
        inRefs = true;
        block.push(line);
      } else {
        beforeBlock.push(line);
      }
    } else if (inRefs && !blockEnded) {
      // インデントのある行 or 空行は references ブロック内
      if (/^\s/.test(line) || line === '') {
        block.push(line);
      } else {
        // トップレベルキー出現 → ブロック終了
        blockEnded = true;
        afterBlock.push(line);
      }
    } else {
      afterBlock.push(line);
    }
  }
  return { beforeBlock, block, afterBlock, hasRefs: inRefs };
}

/** references ブロックを構造化（id でキー化）。
 *  各 entry は元の YAML 行群をそのまま保持し、id だけ書き換えて再出力できるようにする */
function parseReferenceBlock(block) {
  // block[0] は "references:"
  const items = [];
  let current = null;
  for (let i = 1; i < block.length; i++) {
    const line = block[i];
    // "  - id: N" の形で entry が始まる
    const startMatch = line.match(/^(\s+)- id:\s*(\d+)\s*$/);
    if (startMatch) {
      if (current) items.push(current);
      current = {
        indent: startMatch[1],          // "  "
        id: parseInt(startMatch[2], 10),
        rawLines: [line],               // 元の行群
      };
    } else if (current) {
      current.rawLines.push(line);
    }
  }
  if (current) items.push(current);
  return items;
}

/** 本文中の <Cite id={N} /> を出現順に列挙 */
function findCiteOccurrences(body) {
  // <Cite id={N} /> パターン（属性順序や空白の揺らぎに対応）
  const re = /<Cite\s+id=\{(\d+)\}\s*\/>/g;
  const occurrences = [];
  let m;
  while ((m = re.exec(body)) !== null) {
    occurrences.push({ index: m.index, oldId: parseInt(m[1], 10) });
  }
  return occurrences;
}

/** 出現順に oldId → newId のマッピングを作成（同じ oldId は同じ newId に） */
function buildIdMapping(occurrences) {
  const map = new Map(); // oldId -> newId
  let next = 1;
  for (const o of occurrences) {
    if (!map.has(o.oldId)) {
      map.set(o.oldId, next);
      next++;
    }
  }
  return map;
}

/** 本文の <Cite id={N} /> を新番号に書き換え */
function rewriteBody(body, idMap) {
  return body.replace(/<Cite\s+id=\{(\d+)\}\s*\/>/g, (_, id) => {
    const oldId = parseInt(id, 10);
    const newId = idMap.get(oldId);
    if (newId === undefined) {
      // 出現したのに mapping にない（理論上ありえないが安全側で）
      return `<Cite id={${oldId}} />`;
    }
    return `<Cite id={${newId}} />`;
  });
}

/** references ブロックを新順序で再構築 */
function rebuildReferenceBlock(refItems, idMap) {
  // idMap: oldId -> newId
  // 1. 本文に出現している reference のみを対象に new id 順で並べ替え
  // 2. 出現しないものは削除（呼び出し側で警告出力済み）
  const newItems = [];
  for (const [oldId, newId] of idMap.entries()) {
    const original = refItems.find((r) => r.id === oldId);
    if (!original) {
      // 本文に <Cite id={N} /> があるが references に N が定義されていない
      // → 警告対象（呼び出し側で扱う）
      continue;
    }
    // id 行を newId で置き換え
    const rewrittenLines = original.rawLines.map((line) => {
      const m = line.match(/^(\s+)- id:\s*(\d+)\s*$/);
      if (m) return `${m[1]}- id: ${newId}`;
      return line;
    });
    newItems.push({ newId, rawLines: rewrittenLines });
  }
  newItems.sort((a, b) => a.newId - b.newId);

  const lines = ['references:'];
  for (const item of newItems) {
    lines.push(...item.rawLines);
  }
  return lines;
}

// ---------- メイン処理 ----------

/**
 * 単一ファイル処理
 * 戻り値: { changed, warnings: [], errors: [], newContent }
 */
async function processFile(absPath) {
  const original = await readFile(absPath, 'utf8');
  const split = splitFrontmatter(original);
  if (!split) {
    return { changed: false, warnings: [], errors: [], newContent: original, skipped: 'no-frontmatter' };
  }
  const { fm, body } = split;
  const { beforeBlock, block, afterBlock, hasRefs } = extractReferences(fm);
  if (!hasRefs) {
    // references が無い → Cite を使っていない記事
    return { changed: false, warnings: [], errors: [], newContent: original, skipped: 'no-references' };
  }

  const occurrences = findCiteOccurrences(body);
  const refItems = parseReferenceBlock(block);

  // <Cite id={N} /> が本文に1つも無いが references がある場合は何もしない（警告のみ）
  if (occurrences.length === 0) {
    return {
      changed: false,
      warnings: [`${absPath}: references はあるが本文に <Cite> が無い`],
      errors: [],
      newContent: original,
      skipped: 'no-cite-in-body',
    };
  }

  const idMap = buildIdMapping(occurrences);

  // 警告: 本文に出現したのに references に定義されていない id
  const warnings = [];
  for (const oldId of idMap.keys()) {
    if (!refItems.find((r) => r.id === oldId)) {
      warnings.push(`${absPath}: 本文に <Cite id={${oldId}} /> があるが references に id ${oldId} が定義されていない`);
    }
  }
  // 警告: references に定義されているが本文で使われていない id
  const unused = refItems.filter((r) => !idMap.has(r.id)).map((r) => r.id);
  if (unused.length > 0) {
    warnings.push(`${absPath}: references の id [${unused.join(', ')}] が本文で引用されていない（削除されます）`);
  }

  // 既に整列されているか判定
  const isAlreadySorted = [...idMap.entries()].every(([oldId, newId]) => oldId === newId)
    && refItems.length === idMap.size
    && refItems.every((r, i) => r.id === i + 1);
  if (isAlreadySorted) {
    return { changed: false, warnings, errors: [], newContent: original, skipped: 'already-sorted' };
  }

  const newRefBlockLines = rebuildReferenceBlock(refItems, idMap);
  const newBody = rewriteBody(body, idMap);

  // frontmatter 再構築
  const newFmLines = [...beforeBlock, ...newRefBlockLines, ...afterBlock];
  const newFm = newFmLines.join('\n');
  const newContent = `---\n${newFm}\n---\n${newBody}`;

  return { changed: true, warnings, errors: [], newContent, skipped: null };
}

/** 全 .mdx を再帰的に列挙 */
async function* walkMdx(dir) {
  const fs = await import('node:fs/promises');
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkMdx(full);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      yield full;
    }
  }
}

async function main() {
  const summary = {
    total: 0,
    changed: 0,
    skipped: { 'already-sorted': 0, 'no-references': 0, 'no-frontmatter': 0, 'no-cite-in-body': 0 },
    warnings: [],
    errors: [],
    changedFiles: [],
  };

  for await (const filePath of walkMdx(DOCS_ROOT)) {
    summary.total++;
    let result;
    try {
      result = await processFile(filePath);
    } catch (e) {
      summary.errors.push(`${filePath}: ${e.message}`);
      continue;
    }
    summary.warnings.push(...result.warnings);
    if (result.skipped) {
      summary.skipped[result.skipped] = (summary.skipped[result.skipped] || 0) + 1;
      continue;
    }
    if (result.changed) {
      summary.changed++;
      const rel = path.relative(REPO_ROOT, filePath);
      summary.changedFiles.push(rel);
      if (APPLY) {
        await writeFile(filePath, result.newContent, 'utf8');
      }
    }
  }

  // レポート出力
  console.log('\n========== Renumber Citations Report ==========');
  console.log(`Mode: ${DRY_RUN ? 'DRY-RUN (no files written)' : 'APPLY (files were written)'}`);
  console.log(`Total .mdx scanned:   ${summary.total}`);
  console.log(`Changed (or would-change): ${summary.changed}`);
  console.log(`Skipped:`);
  for (const [k, v] of Object.entries(summary.skipped)) {
    console.log(`  - ${k}: ${v}`);
  }
  if (summary.changedFiles.length > 0) {
    console.log(`\nChanged files (${summary.changedFiles.length}):`);
    for (const f of summary.changedFiles) console.log(`  - ${f}`);
  }
  if (summary.warnings.length > 0) {
    console.log(`\nWarnings (${summary.warnings.length}):`);
    for (const w of summary.warnings) console.log(`  ! ${w}`);
  }
  if (summary.errors.length > 0) {
    console.log(`\nErrors (${summary.errors.length}):`);
    for (const e of summary.errors) console.log(`  X ${e}`);
    process.exit(2);
  }
  console.log('\n================================================\n');
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
