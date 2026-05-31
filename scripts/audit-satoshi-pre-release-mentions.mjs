#!/usr/bin/env node
/**
 * audit-satoshi-pre-release-mentions.mjs
 *
 * Surveys EN + JA entries for mentions of Satoshi Nakamoto's pre-release
 * (pre-2009-01-09) activity: when he started, what he did, in what order
 * (code vs paper), how long it took, and what evidence supports each claim.
 *
 * NOTE: This is an audit/survey tool, not a build gate. Output is a list of
 * **review candidates**, NOT a list of confirmed defects.
 *
 * The detection heuristic is intentionally coarse — it casts a wide net and
 * surfaces many lines that mention Satoshi or development activity in
 * post-release contexts (false positives). Each candidate MUST be classified
 * by a human into one of:
 *   A. true mention — self-statement (Satoshi's own email/post body)
 *   B. true mention — editorial (Archive prose interpreting pre-release period)
 *   C. true mention — secondary-source citation (Lerner / Andresen / press)
 *   D. false positive — post-release (2009-01-09 or later)
 *   E. false positive — unrelated to Satoshi's own activity
 *
 * Detection rules:
 *   - File: any `.md` under `src/data/entries/en/` or `src/data/translations/ja/`
 *   - Line is NOT inside a ``` fenced code block
 *   - Line contains at least one match from the pattern groups below
 *
 * Output:
 *   - Default: per-file counts + summary to stdout, full table written to
 *     `temp/satoshi-pre-release-mentions.md` (Markdown table for manual review)
 *   - With `--json`: emits machine-readable JSON to stdout (no file write)
 *
 * Exit code: 0 always (audit is informational; gating is done by other scripts).
 */

import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const enRoot = path.join(repoRoot, 'src/data/entries/en');
const jaRoot = path.join(repoRoot, 'src/data/translations/ja');
const tempDir = path.join(repoRoot, 'temp');
const outMd = path.join(tempDir, 'satoshi-pre-release-mentions.md');

const args = process.argv.slice(2);
const emitJson = args.includes('--json');

// Pattern groups — each candidate line matches at least one of these.
// Patterns are intentionally over-broad; classification happens downstream.
const patternGroups = [
  {
    key: 'satoshi-activity-verb',
    re: /(サトシ[^\n]{0,40}(書い|執筆|開発|作業|設計|コード|実装|構築))|(Satoshi[^\n]{0,40}\b(wrote|writing|developed|developing|coded|coding|designed|designing|implemented|implementing|worked on|working on|built|building))/i,
  },
  {
    key: 'development-period',
    re: /(開発期間|開発中|執筆期間|構想期間)|\b(development period|during development|while developing|spent.{0,20}(year|month|week)s?.{0,20}(develop|writ|cod|design))/i,
  },
  {
    key: 'before-whitepaper',
    re: /(論文より前|論文以前|論文(公開|発表)前|ホワイトペーパー(公開|発表|より)前|公開前|リリース前|公開以前)|\b(before.{0,30}(whitepaper|white paper|paper was|paper went|paper came))|preceded the (paper|whitepaper)/i,
  },
  {
    key: 'duration-eighteen-months',
    // Canonical Satoshi self-statements:
    //   2008-11-17 cryptography list: "last year and a half while coding it"
    //   2009-07-21 to Malmi: "after 18 months development"
    re: /(1\s*年半|一年半|18\s*(?:か月|ヶ月|カ月)|十八(?:か月|ヶ月|カ月))|\byear and a half\b|\b(1\.5\s*years?|one and a half years?|eighteen\s+months|18\s+months)/i,
  },
  {
    key: 'duration-two-years',
    // Canonical Satoshi self-statements (added 2026-05 after audit miss):
    //   2010-07-18 BitcoinTalk SHA-256: "When I wrote it more than 2 years ago"
    //   2011-01-10 to Hearn: "2 years of development before release"
    //   2010-06-17 BitcoinTalk: "transaction types that I designed years ago"
    // These are all Satoshi utterances using "2 years" or "years ago" framing.
    re: /(2\s*年(?:の|間|の開発|の作業|前)|二\s*年(?:の|間)?|二年前|何年も前)|\b(2\s*years?\b(?:\s+(?:ago|of|before))?|two\s*years?\b(?:\s+(?:ago|of|before))?|years\s*ago|years\s*of\s*development|more than 2 years)/i,
  },
  {
    key: 'since-anchor',
    // Canonical Satoshi self-statement:
    //   2010-06-18 BitcoinTalk to Laszlo: "Since 2007. ..."
    // Plus general "since YYYY" / "started in YYYY" forms.
    re: /(20(07|08)\s*年(?:から|以来|以降|の半ば)|2007\s*年半ば|2007\s*年央|2007\s*年初)|\b(since\s+(?:mid-?)?20(0[7-8]|07|08)\b|started.{0,30}(?:in|since|around)\s+20(0[7-8])|began.{0,30}(?:in|since|around)\s+20(0[7-8]))/i,
  },
  {
    key: 'reverse-order',
    // Canonical Satoshi self-statement (2008-11-10 to Finney):
    //   "I actually did this kind of backwards. I had to write all the code
    //    before I could convince myself that I could solve every problem,
    //    then I wrote the paper."
    re: /(逆順|コード(?:が|を)?先|論文(?:が|を)?後|順序が逆|逆の順)|\b(reverse order|coded.{0,20}first|wrote.{0,40}before.{0,30}(paper|whitepaper)|finished.{0,40}before.{0,30}(paper|whitepaper)|code.{0,20}before.{0,20}(the\s+)?(paper|whitepaper)|did this.{0,10}backwards|kind of backwards|had to write.{0,20}(all the )?code.{0,20}before|wrote the (paper|whitepaper).{0,40}(after|later)|code.{0,40}before.{0,40}paper)/i,
  },
  {
    key: 'pre-launch-period',
    re: /(リリース(?:以)?前(?:に|の|期間)|公開前(?:に|の|期間)|発表前(?:に|の|期間))|\b(pre-?release|pre-?launch|before (the )?(launch|release|announcement))/i,
  },
  {
    key: 'start-of-work',
    re: /(2007年(?:の)?(?:半ば|央|頃|中頃|中期)|構想を始めた|着手|考え始めた)|\b(started (working|writing|developing|building).{0,30}(in|since|around)\s+(2007|2008)|began.{0,30}(in|since|around)\s+(2007|2008)|since (mid-)?(2007|2008))/i,
  },
];

const fenceRe = /^```/;

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

const enFiles = walk(enRoot);
const jaFiles = walk(jaRoot);
const allFiles = [...enFiles, ...jaFiles];

const findings = [];

for (const filePath of allFiles) {
  const text = readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  let inCode = false;
  let inFrontmatter = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip frontmatter block
    if (i === 0 && line.trim() === '---') {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (line.trim() === '---') inFrontmatter = false;
      continue;
    }
    if (fenceRe.test(line.trim())) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const hits = patternGroups.filter((g) => g.re.test(line));
    if (hits.length === 0) continue;
    findings.push({
      path: path.relative(repoRoot, filePath),
      line: i + 1,
      patterns: hits.map((h) => h.key),
      text: line.trim().slice(0, 280),
      lang: filePath.startsWith(enRoot) ? 'en' : 'ja',
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

// Write detailed markdown table to temp/
mkdirSync(tempDir, { recursive: true });

const mdLines = [];
mdLines.push('# Satoshi pre-release mentions — audit candidates');
mdLines.push('');
mdLines.push('検出時刻: ' + new Date().toISOString());
mdLines.push('');
mdLines.push(`総候補行: ${findings.length} 件 / ${byFile.size} ファイル / 全 ${allFiles.length} md scanned`);
mdLines.push('');
mdLines.push('## 注意');
mdLines.push('');
mdLines.push('本リストは「pre-release 期間サトシ活動に言及している可能性がある行」 の機械検出結果。');
mdLines.push('A〜E の 5 軸に人手で分類すること:');
mdLines.push('');
mdLines.push('- **A**: 真の言及 (本人発言: サトシ本人メール/投稿本文内)');
mdLines.push('- **B**: 真の言及 (編集記述: Archive editorial が pre-release 期間を解釈/要約)');
mdLines.push('- **C**: 真の言及 (二次資料引用: Lerner / Andresen / 報道等)');
mdLines.push('- **D**: 偽陽性 (リリース後 = 2009-01-09 以降の話)');
mdLines.push('- **E**: 偽陽性 (サトシ本人の活動と無関係)');
mdLines.push('');
mdLines.push('## ファイル別件数 (降順)');
mdLines.push('');
mdLines.push('| 件数 | file |');
mdLines.push('|---:|---|');
for (const [p, n] of sortedFiles) {
  mdLines.push(`| ${n} | ${p} |`);
}
mdLines.push('');
mdLines.push('## 全候補行');
mdLines.push('');
mdLines.push('| # | lang | file | line | patterns | 分類 | text |');
mdLines.push('|---:|---|---|---:|---|---|---|');
findings.forEach((f, idx) => {
  const safeText = f.text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  mdLines.push(
    `| ${idx + 1} | ${f.lang} | ${f.path} | ${f.line} | ${f.patterns.join(', ')} |  | ${safeText} |`,
  );
});

writeFileSync(outMd, mdLines.join('\n') + '\n', 'utf8');

console.log('audit-satoshi-pre-release-mentions — review candidates (NOT confirmed defects)');
console.log('');
console.log(`Scanned: ${allFiles.length} md files (EN entries + JA translations)`);
console.log(`Candidates: ${findings.length} lines across ${byFile.size} files`);
console.log('');
console.log('Pattern hit counts:');
const byPattern = new Map();
for (const f of findings) {
  for (const p of f.patterns) byPattern.set(p, (byPattern.get(p) || 0) + 1);
}
for (const [k, n] of [...byPattern.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${k}`);
}
console.log('');
console.log('Top 20 files by candidate count:');
for (const [p, n] of sortedFiles.slice(0, 20)) {
  console.log(`  ${String(n).padStart(4)}  ${p}`);
}
if (sortedFiles.length > 20) {
  console.log(`  ... and ${sortedFiles.length - 20} more files`);
}
console.log('');
console.log(`Full table written to: ${path.relative(repoRoot, outMd)}`);

process.exit(0);
