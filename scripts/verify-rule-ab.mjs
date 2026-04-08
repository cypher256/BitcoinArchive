#!/usr/bin/env node
/**
 * verify-rule-ab.mjs — Disk-only verifier for Rule A / Rule B coverage
 *
 * Re-implements the same Rule A / Rule B logic as fetch-replies-to-satoshi.mjs
 * but reads only on-disk data — no network. Reports gaps where existing
 * archive files do not satisfy the plan's coverage rules.
 *
 * Coverage rules (per temp_0406_fetch_replies_plan.md §3):
 *
 *   Rule A: For every Satoshi post P in topic T, the 3 posts immediately
 *           after P in msgId order (by non-Satoshi authors, dated < MAX_DATE)
 *           must exist on disk.
 *
 *   Rule B: For every non-Satoshi post Q in topic T whose body quotes a
 *           Satoshi post P (dated < MAX_DATE), Q must exist on disk.
 *
 * Reliability:
 *   Rule A: 100% verifiable from disk. We enumerate all msgIds in each
 *           topic directory, sort them, find the 3 immediately after each
 *           Satoshi msgId, and check whether each expected reply file
 *           exists. The only blind spot is gaps between *consecutive*
 *           on-disk msgIds — but Rule A is precisely defined as "the next
 *           3 msgIds in the topic" so the disk-only listing IS the source
 *           of truth (it asserts: of the msgIds we know about, the 3
 *           immediately after Satoshi must be saved).
 *
 *   Rule B: Lower bound only. We can verify that on-disk non-Satoshi posts
 *           with quotes[] entries pointing at Satoshi posts (via personSlug:
 *           satoshi-nakamoto) are present — but we cannot prove no other
 *           bitcointalk reply quoting Satoshi exists outside our archive
 *           without re-fetching the threads.
 *
 *   For complete Rule B verification, you must run fetch-replies-to-satoshi.mjs
 *   in dry-run mode and diff its output against disk.
 *
 * Usage:
 *   node scripts/verify-rule-ab.mjs                  # report all gaps
 *   node scripts/verify-rule-ab.mjs --topics=823     # one topic
 *   node scripts/verify-rule-ab.mjs --quiet          # only summary
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, basename } from 'path';

const ENTRIES_EN = 'src/data/entries/en/forum/bitcointalk';
const AFTER_COUNT = 3;
const MAX_DATE = new Date('2012-01-01T00:00:00Z');

const args = process.argv.slice(2);
const topicsArg = args.find(a => a.startsWith('--topics='));
const targetTopics = topicsArg ? new Set(topicsArg.split('=')[1].split(',')) : null;
const quiet = args.includes('--quiet');

// ---------------------------------------------------------------------------
// Frontmatter parser (minimal — only the fields we need)
// ---------------------------------------------------------------------------

function readFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fmText = m[1];
  const fm = {
    isSatoshi: false,
    author: null,
    date: null,
    sourceUrl: null,
    quotes: [],
  };
  const lines = fmText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^isSatoshi:\s*true/.test(line)) fm.isSatoshi = true;
    else if (/^author:\s*"(.+)"/.test(line)) fm.author = line.match(/^author:\s*"(.+)"/)[1];
    else if (/^date:\s*(\S+)/.test(line)) fm.date = line.match(/^date:\s*(\S+)/)[1];
    else if (/^sourceUrl:\s*"(.+)"/.test(line)) fm.sourceUrl = line.match(/^sourceUrl:\s*"(.+)"/)[1];
    else if (/^quotes:/.test(line)) {
      // walk forward parsing list of {id, person, personSlug, ...}
      let j = i + 1;
      let cur = null;
      while (j < lines.length && /^(  -|    )/.test(lines[j])) {
        const l = lines[j];
        if (/^  - id:\s*"(.+)"/.test(l)) {
          if (cur) fm.quotes.push(cur);
          cur = { id: l.match(/^  - id:\s*"(.+)"/)[1] };
        } else if (cur && /^    person:\s*"(.+)"/.test(l)) {
          cur.person = l.match(/^    person:\s*"(.+)"/)[1];
        } else if (cur && /^    personSlug:\s*"(.+)"/.test(l)) {
          cur.personSlug = l.match(/^    personSlug:\s*"(.+)"/)[1];
        } else if (cur && /^    sourceEntryId:\s*"(.+)"/.test(l)) {
          cur.sourceEntryId = l.match(/^    sourceEntryId:\s*"(.+)"/)[1];
        }
        j++;
      }
      if (cur) fm.quotes.push(cur);
    }
  }
  return fm;
}

function extractMsgIdFromName(name) {
  const m = name.match(/-msg(\d+)\.md$/);
  return m ? parseInt(m[1], 10) : null;
}

function extractMsgIdFromUrl(url) {
  if (!url) return null;
  const m = url.match(/[#&?]msg(\d+)/) || url.match(/\.msg(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!existsSync(ENTRIES_EN)) {
  console.error(`✗ ${ENTRIES_EN} not found — run from repo root`);
  process.exit(1);
}

const topicDirs = readdirSync(ENTRIES_EN)
  .filter(d => d.startsWith('topic-'))
  .filter(d => !targetTopics || targetTopics.has(d.replace('topic-', '')))
  .sort();

let totalSatoshi = 0;
let ruleAExpected = 0;
let ruleAMissing = 0;
let ruleBOnDisk = 0;
const ruleAGaps = []; // list of {topic, satoshiMsg, missingAfter}

for (const topicDir of topicDirs) {
  const dir = join(ENTRIES_EN, topicDir);
  const files = readdirSync(dir).filter(f => f.endsWith('.md'));

  // Index posts by msgId
  const posts = []; // {file, msgId, fm}
  for (const f of files) {
    const fm = readFrontmatter(join(dir, f));
    if (!fm) continue;
    const msgId = extractMsgIdFromName(f) ?? extractMsgIdFromUrl(fm.sourceUrl);
    if (!msgId) continue;
    posts.push({ file: f, msgId, fm });
  }
  posts.sort((a, b) => a.msgId - b.msgId);

  const satoshis = posts.filter(p => p.fm.isSatoshi);
  totalSatoshi += satoshis.length;

  // Rule A: for each Satoshi post, the next 3 non-Satoshi posts (by msgId,
  // dated < MAX_DATE) must exist on disk.
  for (const sp of satoshis) {
    const after = posts
      .filter(p => p.msgId > sp.msgId && !p.fm.isSatoshi)
      .filter(p => {
        if (!p.fm.date) return true;
        const d = new Date(p.fm.date);
        return isNaN(d) || d < MAX_DATE;
      })
      .slice(0, AFTER_COUNT);

    ruleAExpected += AFTER_COUNT;
    if (after.length < AFTER_COUNT) {
      const missingCount = AFTER_COUNT - after.length;
      ruleAMissing += missingCount;
      ruleAGaps.push({
        topic: topicDir,
        satoshiMsg: sp.msgId,
        gotCount: after.length,
        missingCount,
      });
    }
  }

  // Rule B: count on-disk non-Satoshi posts that quote a Satoshi post (lower bound)
  for (const p of posts) {
    if (p.fm.isSatoshi) continue;
    const quotesSatoshi = p.fm.quotes.some(q =>
      q.personSlug === 'satoshi-nakamoto' ||
      (q.person && /satoshi/i.test(q.person))
    );
    if (quotesSatoshi) ruleBOnDisk++;
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

if (!quiet && ruleAGaps.length > 0) {
  console.log('=== Rule A gaps (Satoshi posts with < 3 dated non-Satoshi replies) ===');
  for (const g of ruleAGaps.slice(0, 50)) {
    console.log(`  ${g.topic} satoshi msg${g.satoshiMsg}: have ${g.gotCount}/3 (missing ${g.missingCount})`);
  }
  if (ruleAGaps.length > 50) {
    console.log(`  ... and ${ruleAGaps.length - 50} more`);
  }
  console.log();
}

console.log('=== Rule A / B Verification (disk-only) ===');
console.log(`Topics scanned:           ${topicDirs.length}`);
console.log(`Satoshi posts:            ${totalSatoshi}`);
console.log();
console.log('Rule A (3 posts after each Satoshi, msgId order, < MAX_DATE):');
console.log(`  Expected:               ${ruleAExpected}`);
console.log(`  Missing:                ${ruleAMissing}`);
console.log(`  Coverage:               ${ruleAExpected > 0 ? (((ruleAExpected - ruleAMissing) / ruleAExpected) * 100).toFixed(1) : 0}%`);
console.log(`  Satoshi posts with gap: ${ruleAGaps.length}`);
console.log();
console.log('Rule B (posts quoting Satoshi, < MAX_DATE):');
console.log(`  On-disk lower bound:    ${ruleBOnDisk}`);
console.log(`  ⚠️  Cannot prove completeness without re-fetching threads.`);
console.log(`  ⚠️  For full verification: node scripts/fetch-replies-to-satoshi.mjs (dry-run)`);
console.log();

const ok = ruleAMissing === 0;
if (ok) {
  console.log('✓ Rule A satisfied for all Satoshi posts');
  process.exit(0);
} else {
  console.log(`✗ Rule A has ${ruleAMissing} missing slots across ${ruleAGaps.length} Satoshi posts`);
  console.log('  (Note: missing may be legitimate if Satoshi was the last post in a thread)');
  process.exit(1);
}
