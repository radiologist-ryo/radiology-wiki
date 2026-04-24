// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..', '..');
const DOCS = path.join(ROOT, 'src', 'content', 'docs', 'diseases');
const BASE = '/radiology-wiki';

const diseasesPath = path.join(__dirname, 'diseases.json');
if (!fs.existsSync(diseasesPath)) {
	console.error('diseases.json が見つかりません:', diseasesPath);
	process.exit(1);
}
const data = JSON.parse(fs.readFileSync(diseasesPath, 'utf-8'));

const PROTECTED_DIRS = new Set([]);

let createdFiles = 0;
let createdDirs = 0;
let skippedExisting = 0;

/** @type {Map<string, string>} */
const segmentLabelMap = new Map();

/**
 * @param {string} dir
 */
function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
		createdDirs++;
	}
}

/**
 * ファイルが .md または .mdx のいずれかで既に存在する場合、作成しない
 * 新規作成する場合は .mdx で作る
 * @param {string} filePathWithoutExt 拡張子抜きのパス
 * @param {string} content
 */
function writeIfAbsent(filePathWithoutExt, content) {
	const mdxPath = filePathWithoutExt + '.mdx';
	const mdPath = filePathWithoutExt + '.md';
	if (fs.existsSync(mdxPath) || fs.existsSync(mdPath)) {
		skippedExisting++;
		return;
	}
	fs.writeFileSync(mdxPath, content, { encoding: 'utf-8' });
	createdFiles++;
}

/**
 * @param {string} title
 * @param {string} description
 */
function stubContent(title, description) {
	return `---
title: ${title}
description: ${description}
---

## 概要

執筆予定。

---

## 画像所見

執筆予定。

---

## 鑑別診断

執筆予定。

---

## 参考文献

執筆予定。
`;
}

/**
 * @param {string} title
 * @param {string} description
 * @param {{title: string, href: string, description: string}[]} cards
 */
function indexContent(title, description, cards) {
	const cardLines = cards
		.map(
			(c) =>
				`  <LinkCard title="${c.title}" href="${c.href}" description="${c.description}" />`
		)
		.join('\n');
	return `---
title: ${title}
description: ${description}
---

import { LinkCard, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
${cardLines}
</CardGrid>
`;
}

/**
 * @param {any} child
 */
function isGroup(child) {
	return Array.isArray(child.items);
}

/**
 * @param {any} node
 * @param {string[]} pathSegments
 * @returns {any}
 */
function buildSidebar(node, pathSegments) {
	const slug = ['diseases', ...pathSegments].join('/');
	if (!node.items || node.items.length === 0) {
		throw new Error('empty group: ' + slug);
	}
	const children = node.items.map((child) => {
		if (isGroup(child)) {
			return buildSidebar(child, [...pathSegments, child.dir]);
		}
		return {
			label: child.label,
			slug: ['diseases', ...pathSegments, child.slug].join('/'),
		};
	});
	return {
		label: node.label,
		collapsed: true,
		items: [{ label: '__group_index__', slug }, ...children],
	};
}

/**
 * @param {any} node
 * @param {string[]} pathSegments
 */
function writeTree(node, pathSegments) {
	const dir = path.join(DOCS, ...pathSegments);
	if (pathSegments.length > 0 && PROTECTED_DIRS.has(pathSegments[0])) {
		throw new Error('protected dir touched: ' + pathSegments[0]);
	}
	ensureDir(dir);

	const currentDir = pathSegments[pathSegments.length - 1];
	if (currentDir) {
		segmentLabelMap.set(currentDir, node.label);
	}

	const cards = node.items.map((child) => {
		if (isGroup(child)) {
			return {
				title: child.label,
				href: `${BASE}/diseases/${[...pathSegments, child.dir].join('/')}/`,
				description: child.description || '',
			};
		}
		return {
			title: child.label,
			href: `${BASE}/diseases/${[...pathSegments, child.slug].join('/')}/`,
			description: child.description || '',
		};
	});
	// index は常に .mdx
	const indexPath = path.join(dir, 'index');
	writeIfAbsent(
		indexPath,
		indexContent(node.label, node.description || '', cards)
	);

	for (const child of node.items) {
		if (isGroup(child)) {
			writeTree(child, [...pathSegments, child.dir]);
		} else {
			segmentLabelMap.set(child.slug, child.label);
			const diseasePathWithoutExt = path.join(dir, child.slug);
			writeIfAbsent(
				diseasePathWithoutExt,
				stubContent(child.label, child.description || `${child.label}の画像診断まとめ`)
			);
		}
	}
}

// === 実行 ===
ensureDir(DOCS);

const sidebarItems = [];
for (const organ of data.organs) {
	writeTree(organ, [organ.dir]);
	sidebarItems.push(buildSidebar(organ, [organ.dir]));
}

const sidebarOutPath = path.join(__dirname, 'sidebar-output.mjs');
const sidebarJs =
	'// 生成結果: astro.config.mjs の sidebar 配列内、「鑑別診断」ブロックの直前に挿入してください\n' +
	'export const generatedSidebar = ' +
	JSON.stringify(sidebarItems, null, '\t') +
	';\n';
fs.writeFileSync(sidebarOutPath, sidebarJs, { encoding: 'utf-8' });

const segmentEntries = Array.from(segmentLabelMap.entries())
	.sort((a, b) => a[0].localeCompare(b[0]))
	.map(([dir, label]) => {
		const needsQuote = !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(dir);
		const key = needsQuote ? `'${dir}'` : dir;
		return `  ${key}: '${label.replace(/'/g, "\\'")}',`;
	})
	.join('\n');

const segmentLabelsOutPath = path.join(__dirname, 'segment-labels-output.txt');
fs.writeFileSync(
	segmentLabelsOutPath,
	`// PageTitle.astro の segmentLabels に追加するエントリ(既存と重複するキーは既存を優先)\n${segmentEntries}\n`,
	{ encoding: 'utf-8' }
);

const organSwitchBranches = data.organs
	.map((organ) => {
		return `} else if (pathname.includes('/diseases/${organ.dir}/') || pathname.endsWith('/diseases/${organ.dir}')) {\n\tfiltered = filterTopLevel('${organ.label}');`;
	})
	.join('\n');

const sidebarBranchOutPath = path.join(__dirname, 'sidebar-branches-output.txt');
fs.writeFileSync(
	sidebarBranchOutPath,
	`// Sidebar.astro の if/else if チェーンに追加する分岐\n${organSwitchBranches}\n`,
	{ encoding: 'utf-8' }
);

console.log('------------------------------------------------------------');
console.log('スタブ生成完了');
console.log(`  作成ファイル数: ${createdFiles}`);
console.log(`  作成ディレクトリ数: ${createdDirs}`);
console.log(`  既存スキップ数: ${skippedExisting}`);
console.log(`  サイドバー出力: ${sidebarOutPath}`);
console.log(`  segmentLabels 出力: ${segmentLabelsOutPath}`);
console.log(`  Sidebar.astro 分岐出力: ${sidebarBranchOutPath}`);
console.log('------------------------------------------------------------');