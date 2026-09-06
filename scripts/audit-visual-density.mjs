#!/usr/bin/env node
/**
 * audit-visual-density.mjs — visual-density audit for editorial entries
 *
 * Computes the visual-density ratio defined in STYLE_GUIDE_VISUAL.md
 * § Visual Representation:
 *
 *   density = (mermaid-block lines + markdown-table lines + d3-component lines)
 *           / total body lines (excluding frontmatter and code blocks other
 *             than mermaid)
 *
 * Scope: editorial entry types only — analysis, article, biography, design.
 * Primary-source types (forum-post, mailing-list, correspondence, whitepaper,
 * bip, tweet, court-document) are out of scope per the style guide.
 *
 * `guide` entries use a separate formula and threshold (STYLE_GUIDE_VISUAL.md
 * § `guide` density target): markdown tables do not count toward the ratio
 * (a lookup glossary is not the kind of visual explanation a zero-knowledge
 * reader needs), and `<!-- visual: NAME -->` metaphor-illustration markers
 * count instead. A `visual` marker is a single source line whose rendered
 * illustration occupies far more visual area than one line -- VISUAL_MARKER_WEIGHT
 * below is a deliberate, documented calibration (not a measured value) standing
 * in for that area, chosen against this corpus's existing Mermaid diagrams'
 * typical line count.
 *
 * Targets EN entries by default (visual elements are shared with the JA
 * mirror via structural symmetry, so the ratio is essentially identical).
 *
 * Thresholds (per style guide):
 *   ≥ 30%   design target for new editorial pages (non-`guide` types)
 *   ≥ 20%   floor; below should be reviewed (non-`guide` types)
 *   < 15%   flag; add at least one structural visual (non-`guide` types)
 *   `guide` uses a single flat 50% target instead of these three tiers.
 *
 * Usage:
 *   npm run audit:visual-density                  # summary + < 15% flagged list (EN)
 *   npm run audit:visual-density -- --all         # show every editorial entry
 *   npm run audit:visual-density -- --kind=analysis    # filter by entry type
 *   npm run audit:visual-density -- --threshold=20     # show <= 20% (percent)
 *   npm run audit:visual-density -- --lang=ja     # audit JA mirror instead
 *   npm run audit:visual-density -- --json        # machine-readable output
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const EN_ROOT = path.join(REPO_ROOT, 'src/data/entries/en');
const JA_ROOT = path.join(REPO_ROOT, 'src/data/translations/ja');

const EDITORIAL_TYPES = new Set(['analysis', 'article', 'biography', 'design', 'guide']);
// See the file header comment for what this stands in for and why it is a
// calibration choice, not a measured constant.
const VISUAL_MARKER_WEIGHT = 12;

const args = process.argv.slice(2);
const arg = (prefix) => {
  const hit = args.find((a) => a.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : null;
};
const kindFilter = arg('--kind=');
const thresholdPct = parseFloat(arg('--threshold=') ?? '15');
const langFlag = arg('--lang=') ?? 'en';
const showAll = args.includes('--all');
const jsonOut = args.includes('--json');
const ROOT = langFlag === 'ja' ? JA_ROOT : EN_ROOT;

function walkMd(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const entry of entries) {
    const full = path.join(dir, entry);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) walkMd(full, out);
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { fm: null, body: content };
  const fmText = m[1];
  const fm = {};
  for (const line of fmText.split('\n')) {
    const mm = line.match(/^([\w-]+):\s*['"]?([^'"\n]*)['"]?\s*$/);
    if (mm) fm[mm[1]] = mm[2].trim();
  }
  return { fm, body: content.slice(m[0].length) };
}

function computeDensity(body, isGuide) {
  const lines = body.split('\n');
  let visualLines = 0;
  let bodyLines = 0;
  let inMermaid = false;
  let inCodeBlock = false;
  for (const raw of lines) {
    const trim = raw.trim();
    if (!inMermaid && trim.startsWith('```mermaid')) {
      inMermaid = true;
      visualLines++;
      bodyLines++;
      continue;
    }
    if (inMermaid) {
      visualLines++;
      bodyLines++;
      if (trim.startsWith('```')) inMermaid = false;
      continue;
    }
    if (trim.startsWith('```')) {
      // Non-mermaid code fence: excluded from denominator per STYLE_GUIDE_VISUAL.md
      // § Visual Representation ("excluding frontmatter and code blocks other
      // than mermaid"). Toggle state without counting the fence line itself.
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) {
      // Non-mermaid code body: excluded from denominator (same rule).
      continue;
    }
    bodyLines++;
    if (isGuide) {
      // guide: tables do not count (STYLE_GUIDE_VISUAL.md § `guide` density
      // target -- a lookup glossary is not the visual explanation this
      // ratio is meant to reward). `<!-- visual: NAME -->` markers count
      // instead, weighted per VISUAL_MARKER_WEIGHT above.
      if (/^<!--\s*visual:\s*\S+\s*-->/.test(trim)) { visualLines += VISUAL_MARKER_WEIGHT; continue; }
      continue;
    }
    if (/^\|.*\|\s*$/.test(trim)) { visualLines++; continue; }
    if (/^<[A-Z][\w]*/.test(trim)) { visualLines++; continue; }
  }
  return {
    bodyLines,
    visualLines,
    ratio: bodyLines > 0 ? visualLines / bodyLines : 0,
  };
}

function classify(ratio, isGuide) {
  if (isGuide) {
    return ratio >= 0.50
      ? { mark: '✓', label: '目標達成 (>=50%)' }
      : { mark: '✗', label: 'フラグ (<50%)' };
  }
  if (ratio >= 0.30) return { mark: '✓', label: '目標達成 (>=30%)' };
  if (ratio >= 0.20) return { mark: '○', label: '床 (20-30%)' };
  if (ratio >= 0.15) return { mark: '△', label: '注意 (15-20%)' };
  if (ratio > 0)     return { mark: '✗', label: 'フラグ (<15%)' };
  return                     { mark: '✗', label: 'ゼロ (視覚要素なし)' };
}

const allFiles = walkMd(ROOT);
const results = [];

for (const file of allFiles) {
  let content;
  try { content = readFileSync(file, 'utf-8'); } catch { continue; }
  const { fm, body } = parseFrontmatter(content);
  if (!fm || !EDITORIAL_TYPES.has(fm.type)) continue;
  if (kindFilter && fm.type !== kindFilter) continue;
  const isGuide = fm.type === 'guide';
  const d = computeDensity(body, isGuide);
  const c = classify(d.ratio, isGuide);
  results.push({
    file: path.relative(REPO_ROOT, file),
    type: fm.type,
    bodyLines: d.bodyLines,
    visualLines: d.visualLines,
    ratio: d.ratio,
    classification: c.label,
    mark: c.mark,
  });
}

results.sort((a, b) => a.ratio - b.ratio);

if (jsonOut) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

const byType = {};
for (const r of results) {
  byType[r.type] ??= { total: 0, target: 0, floor: 0, caution: 0, flag: 0, zero: 0 };
  byType[r.type].total++;
  if (r.type === 'guide') {
    // guide has one flat 50% target, not the three-tier scale below --
    // bucket it into target/flag only, leaving floor/caution at 0.
    if (r.ratio >= 0.50) byType[r.type].target++;
    else if (r.ratio > 0) byType[r.type].flag++;
    else byType[r.type].zero++;
    continue;
  }
  if (r.ratio >= 0.30) byType[r.type].target++;
  else if (r.ratio >= 0.20) byType[r.type].floor++;
  else if (r.ratio >= 0.15) byType[r.type].caution++;
  else if (r.ratio > 0)     byType[r.type].flag++;
  else                      byType[r.type].zero++;
}

console.log(`=== 視覚密度監査結果 (言語: ${langFlag.toUpperCase()}) ===\n`);
console.log('タイプ別分布:');
console.log('  タイプ        | 全件 | 目標達成 | 床    | 注意  | フラグ | ゼロ');
console.log('  -------------+------+----------+-------+-------+--------+------');
for (const [type, c] of Object.entries(byType)) {
  const pad = (s, n) => String(s).padEnd(n);
  const padNum = (n, w) => String(n).padStart(w);
  console.log(
    `  ${pad(type, 12)} | ${padNum(c.total, 4)} | ${padNum(c.target, 8)} | ${padNum(c.floor, 5)} | ${padNum(c.caution, 5)} | ${padNum(c.flag, 6)} | ${padNum(c.zero, 4)}`,
  );
}
console.log();

const threshold = thresholdPct / 100;
const filtered = showAll ? results : results.filter((r) => r.ratio < threshold);

if (filtered.length === 0) {
  if (showAll) {
    console.log('対象ファイルなし。');
  } else {
    console.log(`✓ 閾値 ${thresholdPct}% 未満のファイルなし。`);
  }
  process.exit(0);
}

console.log(`${showAll ? '全件' : `閾値 ${thresholdPct}% 未満`} (${filtered.length} 件、 密度の低い順):\n`);
for (const r of filtered) {
  const pct = (r.ratio * 100).toFixed(1).padStart(5);
  console.log(
    `  ${r.mark} ${pct}%  [${r.type.padEnd(9)}]  ${r.file}  (視覚 ${r.visualLines}/${r.bodyLines} 行)`,
  );
}

// Exit code 1 if any flagged entries -- guide's own 50% floor, everything
// else the general 15% floor (surfaces as a violation when run in CI).
const flagged = results.filter((r) => (r.type === 'guide' ? r.ratio < 0.50 : r.ratio < 0.15)).length;
process.exit(flagged > 0 ? 1 : 0);
