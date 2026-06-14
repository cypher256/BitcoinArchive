#!/usr/bin/env node
// check-llms-counts — gate: keep the entry counts written in public/llms.txt
// and public/llms-full.txt from silently drifting away from the real corpus.
//
// These two files are hand-curated (prose descriptions, key facts) and are
// NOT auto-generated, so their category counts go stale as the archive grows.
// This check recomputes the per-type entry counts from src/data/entries/en
// and compares them to the numbers stated in the two files.
//
// It is a GATE (per scripts/CHECKS.md): it stops the build on a real drift,
// but tolerates small natural growth so it does not fail on every entry add.
//   - per-category number: fail if |stated - actual| > max(3, 5% of actual)
//   - missing category:    fail if a type with >= 3 entries has no line in
//                          public/llms.txt
//   - total floor ("N+"):  fail if actual < floor or actual >= floor + 1000
//
// The prose (descriptions, the illustrative Analysis list, key facts) is left
// to humans; only the numbers are guarded.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRIES_DIR = join(root, 'src/data/entries/en');
const FILES = ['public/llms.txt', 'public/llms-full.txt'];

// Category label (as written in the .txt files) -> frontmatter `type`.
const LABEL_TO_TYPE = {
  'Forum Posts': 'forum-post',
  'Correspondence': 'correspondence',
  'Articles': 'article',
  'Mailing List': 'mailing-list',
  'Mailing List Emails': 'mailing-list',
  'Biographies': 'biography',
  'BIPs': 'bip',
  'Bitcoin Improvement Proposals': 'bip',
  'Analysis': 'analysis',
  'Court Documents': 'court-document',
  'Whitepapers': 'whitepaper',
  'Design': 'design',
  'Tweets': 'tweet',
  'Blog posts': 'blog-post',
};

// --- count actual entries per type ---
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

const counts = {};
let total = 0;
for (const file of walk(ENTRIES_DIR)) {
  const m = readFileSync(file, 'utf8').match(/^type:\s*"?([a-z-]+)"?/m);
  if (!m) continue;
  counts[m[1]] = (counts[m[1]] || 0) + 1;
  total++;
}

const tol = (actual) => Math.max(3, Math.round(actual * 0.05));
const errors = [];
const reported = [];

// --- check each file's stated category numbers ---
for (const rel of FILES) {
  let text;
  try { text = readFileSync(join(root, rel), 'utf8'); } catch { continue; }
  for (const [label, type] of Object.entries(LABEL_TO_TYPE)) {
    // Match `**Label** (1,234` or `Label (1,234` (optionally `entries|posts|emails`)
    const re = new RegExp('\\*?\\*?' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\*?\\*? \\((\\d[\\d,]*)', 'g');
    let m;
    while ((m = re.exec(text)) !== null) {
      const stated = parseInt(m[1].replace(/,/g, ''), 10);
      const actual = counts[type] || 0;
      const ok = Math.abs(stated - actual) <= tol(actual);
      reported.push({ rel, label, type, stated, actual, ok });
      if (!ok) errors.push(`${rel}: "${label}" states ${stated}, actual ${type} = ${actual} (tolerance +/-${tol(actual)})`);
    }
  }
  // total floor — only enforced on the concise llms.txt
  if (rel.endsWith('llms.txt')) {
    const tm = text.match(/([\d,]+)\+\s+entries/);
    if (tm) {
      const floor = parseInt(tm[1].replace(/,/g, ''), 10);
      if (total < floor) errors.push(`${rel}: total floor "${floor}+" but actual total is ${total} (below floor)`);
      else if (total >= floor + 1000) errors.push(`${rel}: total floor "${floor}+" is stale; actual total is ${total} (raise the floor)`);
      reported.push({ rel, label: 'TOTAL (floor)', type: '*', stated: floor + '+', actual: total, ok: total >= floor && total < floor + 1000 });
    }
  }
}

// --- missing-category check (concise llms.txt only) ---
const llms = (() => { try { return readFileSync(join(root, 'public/llms.txt'), 'utf8'); } catch { return ''; } })();
const labelsByType = {};
for (const [label, type] of Object.entries(LABEL_TO_TYPE)) (labelsByType[type] ||= []).push(label);
for (const [type, actual] of Object.entries(counts)) {
  if (actual < 3) continue;
  const labels = labelsByType[type] || [];
  const present = labels.some((l) => llms.includes('**' + l + '**') || new RegExp('\\b' + l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(llms));
  if (labels.length && !present) errors.push(`public/llms.txt: type "${type}" has ${actual} entries but no category line (missing category)`);
}

// --- report ---
console.log('llms.txt / llms-full.txt entry-count check');
const w = (s, n) => String(s).padEnd(n);
for (const r of reported) {
  console.log(`  ${r.ok ? 'OK  ' : 'DRIFT'} ${w(r.rel.replace('public/', ''), 14)} ${w(r.label, 26)} stated=${w(r.stated, 7)} actual=${r.actual}`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} llms count issue(s):`);
  for (const e of errors) console.error('  - ' + e);
  console.error('\nUpdate public/llms.txt and public/llms-full.txt to the actual counts.');
  process.exit(1);
}
console.log(`\n✓ llms counts consistent with the corpus (${total} entries).`);
