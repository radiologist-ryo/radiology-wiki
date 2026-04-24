// @ts-check
// 今回の再構成で古くなったディレクトリを削除する
// 1) 前回の長い dir 名（すでに前回実行で削除済みのはずだが念のため残す）
// 2) 独立トップレベルにあった bone/ と soft-tissue/ を消し、musculoskeletal/ 配下に集約する準備
// 3) musculoskeletal/ 直下の古い index.mdx を消す（新構造で再生成するため）

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..', '..');
const DOCS = path.join(ROOT, 'src', 'content', 'docs', 'diseases');

// 削除対象ディレクトリ（既に移動済みであれば存在しない）
const TO_DELETE_DIRS = [
	// 前回の古い dir 名
	'central-nervous-system',
	'respiratory-mediastinum',
	'hepatobiliary-pancreas',
	'gi-peritoneum',
	'urogenital',
	'interventional-radiology',
	'nuclear-medicine',
];

// 削除対象ファイル（ディレクトリ再生成前に消しておく index.mdx）
const TO_DELETE_FILES = [
	path.join(DOCS, 'musculoskeletal', 'index.mdx'),
];

let deletedDirCount = 0;
let deletedFileCount = 0;

for (const dir of TO_DELETE_DIRS) {
	const full = path.join(DOCS, dir);
	if (fs.existsSync(full)) {
		fs.rmSync(full, { recursive: true, force: true });
		console.log(`ディレクトリ削除: ${full}`);
		deletedDirCount++;
	} else {
		console.log(`スキップ（存在しない）: ${full}`);
	}
}

for (const file of TO_DELETE_FILES) {
	if (fs.existsSync(file)) {
		fs.rmSync(file, { force: true });
		console.log(`ファイル削除: ${file}`);
		deletedFileCount++;
	}
}

console.log('------------------------------------------------------------');
console.log(`ディレクトリ削除: ${deletedDirCount}`);
console.log(`ファイル削除: ${deletedFileCount}`);
console.log('------------------------------------------------------------');