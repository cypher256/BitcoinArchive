#!/usr/bin/env node
// check-styleguide-counts — gate: keep machine-countable numbers written
// into the style guides from silently drifting away from the real corpus.
//
// The style guides are hand-maintained prose; a count like "Current
// callouts (14 biographies)" is accurate only at the moment someone counts
// it, then rots as entries are added. This check recomputes each such
// number from the actual entry files and compares it to the number stated
// in the guide.
//
// Add a new entry to CLAIMS below for each future machine-countable number
// introduced into a style guide, instead of writing a new check script.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function frontmatterOf(content) {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  return match ? match[0] : '';
}

function countFilesWithFrontmatterField(dir, field) {
  const re = new RegExp(`^${field}:`, 'm');
  let count = 0;
  for (const name of readdirSync(dir, { recursive: true })) {
    if (!name.endsWith('.md')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) continue;
    if (re.test(frontmatterOf(readFileSync(p, 'utf8')))) count++;
  }
  return count;
}

const CLAIMS = [
  {
    file: 'STYLE_GUIDE_REFERENCE.md',
    // "### Current callouts (14 biographies)"
    heading: /^### Current callouts \((\d+) biographies\)$/m,
    actual: () => countFilesWithFrontmatterField(join(root, 'src/data/entries/en'), 'callout'),
    describe: (n) => `${n} biographies`,
  },
];

const errors = [];
const reported = [];

for (const claim of CLAIMS) {
  const path = join(root, claim.file);
  const text = readFileSync(path, 'utf8');
  const m = text.match(claim.heading);
  if (!m) {
    errors.push(`${claim.file}: expected heading pattern not found (${claim.heading}) — did the heading text change?`);
    continue;
  }
  const stated = parseInt(m[1], 10);
  const actual = claim.actual();
  const ok = stated === actual;
  reported.push({ file: claim.file, stated: claim.describe(stated), actual: claim.describe(actual), ok });
  if (!ok) errors.push(`${claim.file}: heading states "${claim.describe(stated)}", actual = ${claim.describe(actual)}`);
}

console.log('Style guide numeric-claim check');
const w = (s, n) => String(s).padEnd(n);
for (const r of reported) {
  console.log(`  ${r.ok ? 'OK   ' : 'DRIFT'} ${w(r.file, 32)} stated=${w(r.stated, 20)} actual=${r.actual}`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} style guide count issue(s):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`\n✓ Style guide numeric claims consistent with the corpus.`);
