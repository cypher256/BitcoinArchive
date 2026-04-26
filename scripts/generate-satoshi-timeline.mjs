#!/usr/bin/env node
/**
 * generate-satoshi-timeline.mjs
 *
 * Walks src/data/entries/en/, filters entries authored by Satoshi
 * (isSatoshi: true), extracts {date, channel, title, slug} for each,
 * and writes src/data/satoshi-timeline/timeline.json — consumed by
 * the SatoshiActivityTimeline component.
 *
 * The "channel" classification is derived from the entry's path:
 *   correspondence/<recipient>      -> 'private-email'
 *   emails/cryptography             -> 'cryptography-ml'
 *   emails/bitcoin-list             -> 'bitcoin-list-ml'
 *   emails/p2p-research             -> 'p2p-research-ml'
 *   forum/bitcointalk               -> 'bitcointalk'
 *   forum/p2pfoundation             -> 'p2pfoundation'
 *   forum/github                    -> 'github'
 *   sourceforge                     -> 'sourceforge'
 *   other                           -> 'other'
 */
import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const ENTRIES_DIR = path.join(ROOT, 'src/data/entries/en');
const OUT_DIR = path.join(ROOT, 'src/data/satoshi-timeline');
const OUT_FILE = path.join(OUT_DIR, 'timeline.json');

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (st.isFile() && name.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---\n', 4);
  if (end < 0) return null;
  const fmText = content.slice(4, end);
  const fm = {};
  for (const line of fmText.split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9_]*)\s*:\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    fm[m[1]] = val;
  }
  return fm;
}

function classifyChannel(relPath) {
  if (relPath.startsWith('correspondence/')) return 'private-email';
  if (relPath.startsWith('emails/cryptography')) return 'cryptography-ml';
  if (relPath.startsWith('emails/bitcoin-list')) return 'bitcoin-list-ml';
  if (relPath.startsWith('emails/p2p-research')) return 'p2p-research-ml';
  if (relPath.startsWith('forum/bitcointalk')) return 'bitcointalk';
  if (relPath.startsWith('forum/p2pfoundation')) return 'p2pfoundation';
  if (relPath.startsWith('forum/github')) return 'github';
  if (relPath.startsWith('sourceforge/')) return 'sourceforge';
  if (relPath.startsWith('aftermath/')) return 'other';
  if (relPath.startsWith('analysis/')) return 'other';
  return 'other';
}

const files = walk(ENTRIES_DIR);
const events = [];
let skippedNoDate = 0;
let skippedNotSatoshi = 0;

for (const fullPath of files) {
  const content = readFileSync(fullPath, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) continue;
  if (fm.isSatoshi !== true) { skippedNotSatoshi++; continue; }
  if (!fm.date) { skippedNoDate++; continue; }

  const relPath = path.relative(ENTRIES_DIR, fullPath).replace(/\.md$/, '');
  const channel = classifyChannel(relPath);
  const dateIso = new Date(fm.date).toISOString();

  events.push({
    date: dateIso,
    channel,
    title: fm.title || '',
    slug: relPath,
  });
}

events.sort((a, b) => a.date.localeCompare(b.date));

const channelCounts = {};
for (const e of events) channelCounts[e.channel] = (channelCounts[e.channel] || 0) + 1;

const output = {
  generated: new Date().toISOString(),
  total: events.length,
  channelCounts,
  events,
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));

console.log(`✓ Wrote ${events.length} Satoshi events to ${path.relative(ROOT, OUT_FILE)}`);
console.log(`  date range: ${events[0]?.date} → ${events[events.length - 1]?.date}`);
console.log('  by channel:');
for (const [c, n] of Object.entries(channelCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${c.padEnd(20)} ${n}`);
}
console.log(`  skipped (not Satoshi): ${skippedNotSatoshi}`);
console.log(`  skipped (no date):     ${skippedNoDate}`);
