#!/usr/bin/env node
/**
 * check-ja-glossary.mjs — Japanese terminology consistency checker
 *
 * Enforces the canonical JA forms listed in STYLE_GUIDE_JA.md "用語集" section.
 * Detects deprecated/alternative forms of the same term and fails the build
 * so translations stay consistent across all entries.
 *
 * Special handling for trailing long-vowel (末尾長音符) rules:
 *   Uses negative lookahead so that "コンピュータ" is flagged as a violation
 *   but "コンピューター" is not (the former is a substring of the latter).
 *
 * Exit codes:
 *   0 — all JA files use canonical terminology
 *   1 — at least one deprecated form found
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import path from 'path';

// Accept optional target directory via CLI argument.
// Default: Archive's JA translations. Other repos (e.g. NovelBitCoin) can
// invoke this script with their own JA directory as argument.
//
// Optional ignore file: a plain-text file listing terms that must not be
// treated as deprecated within this target (one per line). Useful when the
// target contains intentional domain-specific wording that overlaps with
// a glossary rule (e.g. "量子コンピュータ" is a protected 改禁 term in
// the novel, despite "コンピュータ" being a general deprecated form).
//
// Ignore file format (one rule per line):
//   # Comment
//   量子コンピュータ           # Skip violations where the matched span
//                              # starts with this string
//   採掘者                     # Skip this exact term
//
// Usage:
//   node check-ja-glossary.mjs
//   node check-ja-glossary.mjs ../NovelBitCoin/src
//   node check-ja-glossary.mjs ../NovelBitCoin/src --ignore-file .ja-glossary-ignore
const args = process.argv.slice(2);
const JA_DIR = args.find((a) => !a.startsWith('--')) || 'src/data/translations/ja';
let IGNORE_FILE = null;
const ignoreIdx = args.indexOf('--ignore-file');
if (ignoreIdx !== -1 && args[ignoreIdx + 1]) IGNORE_FILE = args[ignoreIdx + 1];

// Rule types:
//   'literal' — plain substring match
//   'trailing-choon' — flag "short" unless followed by "ー" (末尾長音符省略の検出)
const RULES = [
  // --- 末尾長音符 (内閣告示 第2号, 2008) ---
  // 3音以上のカタカナ語は末尾に長音符を付ける
  { type: 'trailing-choon', deprecated: 'コンピュータ', canonical: 'コンピューター' },
  { type: 'trailing-choon', deprecated: 'サーバ', canonical: 'サーバー' },
  { type: 'trailing-choon', deprecated: 'ユーザ', canonical: 'ユーザー' },
  { type: 'trailing-choon', deprecated: 'メモリ', canonical: 'メモリー' },
  { type: 'trailing-choon', deprecated: 'プロセッサ', canonical: 'プロセッサー' },
  { type: 'trailing-choon', deprecated: 'パラメータ', canonical: 'パラメーター' },
  { type: 'trailing-choon', deprecated: 'エディタ', canonical: 'エディター' },
  { type: 'trailing-choon', deprecated: 'フォルダ', canonical: 'フォルダー' },
  { type: 'trailing-choon', deprecated: 'ブラウザ', canonical: 'ブラウザー' },
  { type: 'trailing-choon', deprecated: 'アダプタ', canonical: 'アダプター' },
  { type: 'trailing-choon', deprecated: 'ヘッダ', canonical: 'ヘッダー' },
  { type: 'trailing-choon', deprecated: 'フィルタ', canonical: 'フィルター' },
  { type: 'trailing-choon', deprecated: 'レジスタ', canonical: 'レジスター' },
  { type: 'trailing-choon', deprecated: 'コンパイラ', canonical: 'コンパイラー' },
  { type: 'trailing-choon', deprecated: 'デバッガ', canonical: 'デバッガー' },
  { type: 'trailing-choon', deprecated: 'センサ', canonical: 'センサー' },
  { type: 'trailing-choon', deprecated: 'カウンタ', canonical: 'カウンター' },
  { type: 'trailing-choon', deprecated: 'コネクタ', canonical: 'コネクター' },
  { type: 'trailing-choon', deprecated: 'ルータ', canonical: 'ルーター' },
  { type: 'trailing-choon', deprecated: 'プロバイダ', canonical: 'プロバイダー' },

  // --- 訳語統一 ---
  { type: 'literal', deprecated: '暗号技術メーリングリスト', canonical: '暗号学メーリングリスト', reason: '"cryptography mailing list" の訳は「暗号学」で統一' },
  { type: 'literal', deprecated: '二重支出', canonical: '二重支払い' },
  { type: 'literal', deprecated: '二重使用', canonical: '二重支払い' },
  { type: 'literal', deprecated: '採掘者', canonical: 'マイナー' },
  { type: 'literal', deprecated: '財布', canonical: 'ウォレット', reason: 'Bitcoin の文脈では「ウォレット」で統一' },
  { type: 'literal', deprecated: 'インタフェース', canonical: 'インターフェース' },
  { type: 'literal', deprecated: 'インターフェイス', canonical: 'インターフェース' },
  { type: 'literal', deprecated: 'ブロックの高さ', canonical: 'ブロック高', reason: '"block height" の訳は「ブロック高」で統一' },
];

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (full.endsWith('.md')) results.push(full);
  }
  return results;
}

// Load ignore patterns (one per line, # for comments)
const ignorePatterns = [];
if (IGNORE_FILE && existsSync(IGNORE_FILE)) {
  const raw = readFileSync(IGNORE_FILE, 'utf8');
  for (const line of raw.split('\n')) {
    const trimmed = line.replace(/#.*$/, '').trim();
    if (trimmed) ignorePatterns.push(trimmed);
  }
}

function findViolations(content, rule) {
  const hits = [];
  const lines = content.split('\n');
  let pattern;
  if (rule.type === 'trailing-choon') {
    // Match deprecated NOT followed by ー, and not preceded by a
    // katakana letter (which would mean the match is a substring of a
    // longer unrelated word — e.g. センサ inside コンセンサス).
    pattern = new RegExp('(?<![\\u30A0-\\u30FF])' + rule.deprecated + '(?!ー)', 'g');
  } else {
    pattern = new RegExp(rule.deprecated.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  }
  lines.forEach((line, i) => {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(line)) !== null) {
      const matchStart = m.index;
      const matchEnd = matchStart + rule.deprecated.length;
      // Skip if any ignore pattern occurs in the line and overlaps with
      // the current match position. An occurrence of `ig` covers
      // [igIdx, igIdx + ig.length). It overlaps the match iff the match
      // interval [matchStart, matchEnd) lies inside that span.
      const skip = ignorePatterns.some((ig) => {
        let igIdx = line.indexOf(ig);
        while (igIdx !== -1) {
          if (igIdx <= matchStart && matchEnd <= igIdx + ig.length) return true;
          igIdx = line.indexOf(ig, igIdx + 1);
        }
        return false;
      });
      if (!skip) hits.push(i + 1);
    }
  });
  return hits;
}

const files = walk(JA_DIR);
const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  for (const rule of RULES) {
    const lineNums = findViolations(content, rule);
    for (const ln of lineNums) violations.push({ file, line: ln, rule });
  }
}

if (violations.length === 0) {
  console.log(`✓ JA glossary check passed. ${files.length} files scanned, ${RULES.length} rule(s) enforced.`);
  process.exit(0);
}

console.error(`✗ Found ${violations.length} deprecated term usage(s):\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}`);
  console.error(`    "${v.rule.deprecated}" → "${v.rule.canonical}"`);
  if (v.rule.reason) console.error(`    Reason: ${v.rule.reason}`);
}
console.error(`\nSee STYLE_GUIDE_JA.md "用語集" section.`);
process.exit(1);
