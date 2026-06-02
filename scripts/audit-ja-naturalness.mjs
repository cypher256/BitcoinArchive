#!/usr/bin/env node
/**
 * audit-ja-naturalness.mjs — JA prose naturalness audit for BitcoinArchive
 *
 * Invokes a headless Claude (`claude -p`) per file to evaluate whether
 * the Japanese prose reads naturally or shows literal-translation patterns.
 *
 * Why this lives in `audit:` and not in `check:` or in a hook:
 * - Each verification takes ~30 s – 2 min (headless Claude call).
 * - Running this on every file change (PostToolUse hook) produces
 *   unbounded edit-feedback loops: 100 edits ≈ 200 min of blocking.
 * - The right tier is explicit, user-invoked audit — same shape as
 *   audit:external-links, audit:bitcointalk-threads, etc.
 *
 * Usage:
 *   npm run audit:ja-naturalness                  # scan recently-edited JA files (git status + last commit)
 *   npm run audit:ja-naturalness -- <file>...     # scan specific files
 *   npm run audit:ja-naturalness -- --all         # scan every JA prose file (very slow; not recommended)
 */
import { execSync, spawnSync } from 'node:child_process';
import { readFileSync, statSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const JA_PATH_HINTS = ['/translations/ja/', '_JA.md', '_ja.md', '/ja/'];
const CJK_RE = /[぀-ゟ゠-ヿ一-鿿]/;
const MIN_PROSE_CHARS = 100;

function isJaProseFile(file) {
  if (!file) return false;
  if (!/\.(md|mdx|markdown)$/.test(file)) return false;
  return JA_PATH_HINTS.some((hint) => file.includes(hint));
}

function extractProse(content) {
  return content
    .replace(/\A---\n[\s\S]*?\n---\n/, '')
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
}

function walkJaFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walkJaFiles(full, out);
    else if (/\.(md|mdx|markdown)$/.test(full)) out.push(full);
  }
  return out;
}

function gitRecentlyChangedJa() {
  // Combine: working-tree changes + last commit's changes. Falls back
  // to last-commit-only if neither produces JA prose files.
  const sets = [];
  try {
    sets.push(execSync('git diff --name-only HEAD', { encoding: 'utf-8' }));
  } catch {}
  try {
    sets.push(execSync('git diff --name-only HEAD~1..HEAD', { encoding: 'utf-8' }));
  } catch {}
  const files = new Set();
  for (const s of sets) {
    for (const line of s.split('\n')) {
      const f = line.trim();
      if (f && isJaProseFile(f)) files.add(path.join(REPO_ROOT, f));
    }
  }
  return [...files];
}

const VERIFIER_PROMPT = `以下は BitcoinArchive 等の日本語ページに書き込まれた JA 散文。 直訳調 (英語の語順・構造をそのまま日本語に写し取った不自然な文) になっていないかを native 視点で評価してください。

評価観点:
- 「型」「いずれの〜も」「〜を前提にしている」「N 領域に展開」 等、 STYLE_GUIDE_JA.md §9 で禁止された直訳パターンが入っていないか
- 一文ごとに「日本語ネイティブが読み上げて違和感がないか」 を問う
- 英文の語順・指示詞・抽象名詞・否定の重ね方をそのまま JA に持ち込んでいないか
- 漢語の連続で硬すぎる箇所はないか
- 「である」 調と「だ」 調の混在がないか
- 不要な冗長表現 (「ものであり」「ことになる」 等の過剰使用) がないか

出力形式 (JSON only、 説明なし):
{
  "natural": true|false,
  "issues": [
    {"phrase": "問題箇所の引用", "issue": "何が不自然か (1 文)", "suggestion": "自然な書き換え案"}
  ]
}

issues が 0 件なら natural=true、 1 件以上なら natural=false。 軽微な揺れ (好みの差) は issue にしない。 明確に直訳調のものだけを issue にする。

---

評価対象 JA 散文:

`;

function callVerifier(prose) {
  const result = spawnSync(
    'claude',
    ['-p', VERIFIER_PROMPT + prose, '--output-format', 'json'],
    {
      encoding: 'utf-8',
      env: { ...process.env, CLAUDE_HOOK_DISABLE: '1' },
      timeout: 180_000,
    },
  );
  if (result.status !== 0) return null;
  let cli;
  try { cli = JSON.parse(result.stdout); } catch { return null; }
  const text = cli.result || cli.response || '';
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}

function selectTargets(args) {
  if (args.includes('--all')) {
    const root = path.join(REPO_ROOT, 'src/data/translations/ja');
    return walkJaFiles(root).filter(isJaProseFile);
  }
  const explicit = args.filter((a) => !a.startsWith('--')).map((a) => path.resolve(a));
  if (explicit.length) return explicit.filter(isJaProseFile);
  return gitRecentlyChangedJa();
}

const args = process.argv.slice(2);
const targets = selectTargets(args);
if (!targets.length) {
  console.log('ℹ️  対象 JA ファイルなし (引数指定 / git 直近変更 / --all のいずれかを指定)。');
  process.exit(0);
}

console.log(`🔍 ${targets.length} 件の JA ファイルを直訳調検査します (1 件あたり 30 秒〜2 分)。`);

let totalFlagged = 0;
const reports = [];
for (let i = 0; i < targets.length; i++) {
  const file = targets[i];
  const rel = path.relative(REPO_ROOT, file);
  process.stdout.write(`[${i + 1}/${targets.length}] ${rel} ... `);
  let content;
  try { content = readFileSync(file, 'utf-8'); }
  catch { console.log('読み取り失敗、 スキップ'); continue; }
  const prose = extractProse(content);
  if (prose.length < MIN_PROSE_CHARS || !CJK_RE.test(prose)) {
    console.log('散文短すぎ or 非 JA、 スキップ');
    continue;
  }
  const verdict = callVerifier(prose);
  if (!verdict) { console.log('検証エージェント失敗、 スキップ'); continue; }
  if (verdict.natural) { console.log('✓ 自然'); continue; }
  const issues = (verdict.issues || []).slice(0, 10);
  console.log(`✗ ${issues.length} 件の直訳調候補`);
  totalFlagged += issues.length;
  reports.push({ file: rel, issues });
}

if (!reports.length) {
  console.log('\n✓ 全件 自然な日本語と判定されました。');
  process.exit(0);
}

console.log('\n=== 直訳調候補レポート ===\n');
for (const r of reports) {
  console.log(`📄 ${r.file}`);
  for (const it of r.issues) {
    console.log(`  • 「${it.phrase}」`);
    console.log(`    → ${it.issue}`);
    if (it.suggestion) console.log(`    💡 ${it.suggestion}`);
  }
  console.log();
}
console.log(`計 ${totalFlagged} 件の直訳調候補 (${reports.length} ファイル)。`);
process.exit(totalFlagged > 0 ? 1 : 0);
