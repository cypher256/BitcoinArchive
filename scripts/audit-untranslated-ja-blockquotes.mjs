#!/usr/bin/env node
/**
 * audit-untranslated-ja-blockquotes.mjs
 *
 * Surveys JA translations for blockquote lines that look untranslated.
 *
 * NOTE: This is an audit/survey tool, not a build gate. Output is a list of
 * **review candidates**, NOT a list of confirmed translation defects.
 *
 * The detection heuristic is intentionally coarse (no CJK + English word
 * present) and will surface many lines that are correctly left in English:
 *   - URL-only quoted lines, code snippets, RPC names, config examples
 *   - Email headers, signature blocks, citation references
 *   - Proper-noun-only lines (e.g. `> Bitcoin Core`)
 *   - Command output, logs, error messages
 *   - Nested-quote fragments whose surrounding lines carry the JA context
 *
 * Each surfaced line MUST be classified by a human into one of:
 *   翻訳対象      — should be translated to JA
 *   原文保持      — must stay in EN for fidelity / structural reasons
 *   対象外        — code / URL / log / signature / etc.
 *
 * The `<!-- audit:quote-skip -->` HTML comment that may precede such lines
 * is NOT proof of "translation required". It has been used for multiple
 * purposes: monitoring-bypass, original-preservation flags, structural
 * exceptions. Treat each occurrence on its own merits.
 *
 * Detection rules (intentionally coarse):
 *   - File: any `.md` under `src/data/translations/ja/`
 *   - Line starts with "> " (markdown blockquote prefix)
 *   - Line is NOT inside a ``` fenced code block
 *   - Body (after "> ") contains NO CJK character (hiragana / katakana / kanji)
 *   - Body contains at least one run of 4+ consecutive ASCII letters
 *
 * Output:
 *   - Default: human-readable summary + per-file counts
 *   - With `--json`: emits machine-readable JSON to stdout
 *
 * Exit code: 0 always (audit is informational; gating is done by other scripts).
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const jaRoot = path.join(repoRoot, 'src/data/translations/ja');

const args = process.argv.slice(2);
const emitJson = args.includes('--json');

const cjkRe = /[぀-ゟ゠-ヿ一-鿿]/;
const englishWordRe = /[A-Za-z]{4,}/;
const fenceRe = /^```/;
const quoteRe = /^>\s/;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      out.push(...walk(full));
    } else if (st.isFile() && name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(jaRoot);
const findings = [];

for (const filePath of files) {
  const text = readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  let inCode = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (fenceRe.test(line.trim())) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (!quoteRe.test(line)) continue;
    const body = line.replace(/^>\s/, '').trim();
    if (!body) continue;
    if (cjkRe.test(body)) continue;
    if (!englishWordRe.test(body)) continue;
    findings.push({
      path: path.relative(repoRoot, filePath),
      line: i + 1,
      text: line,
    });
  }
}

if (emitJson) {
  process.stdout.write(JSON.stringify(findings, null, 2) + '\n');
  process.exit(0);
}

const byFile = new Map();
for (const f of findings) {
  byFile.set(f.path, (byFile.get(f.path) || 0) + 1);
}

const sortedFiles = [...byFile.entries()].sort((a, b) => b[1] - a[1]);

console.log('audit-untranslated-ja-blockquotes — review candidates (NOT confirmed defects)');
console.log('');
console.log(`Scanned: ${files.length} JA files under ${path.relative(repoRoot, jaRoot)}`);
console.log(`Candidates: ${findings.length} lines across ${byFile.size} files`);
console.log('');
console.log('Each candidate must be classified by a human into:');
console.log('  翻訳対象 / 原文保持 / 対象外 (code / URL / log / signature / etc.)');
console.log('');
console.log('Top 20 files by candidate count:');
for (const [p, n] of sortedFiles.slice(0, 20)) {
  console.log(`  ${String(n).padStart(4)}  ${p}`);
}

if (sortedFiles.length > 20) {
  console.log(`  ... and ${sortedFiles.length - 20} more files (run with --json for full list)`);
}

process.exit(0);
