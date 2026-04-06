/**
 * extract-quotes.mjs — Read-only quote attribution extraction script
 *
 * Scans EN markdown files for attribution patterns and outputs proposed
 * quotes[] frontmatter + body markers. Does NOT modify any files.
 *
 * Usage:
 *   node scripts/extract-quotes.mjs                     # dry-run all files
 *   node scripts/extract-quotes.mjs --source bitcointalk # specific source
 *   node scripts/extract-quotes.mjs --file path/to/file  # single file
 *   node scripts/extract-quotes.mjs --stats              # summary only
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en');

// ---------------------------------------------------------------------------
// Attribution patterns
// ---------------------------------------------------------------------------

// BitcoinTalk: [Quote from: NAME on DATE](URL)
const BT_QUOTE_RE = /^\[Quote from: (.+?) on (.+?)\]\((.+?)\)$/;

// Mailing list / correspondence: NAME wrote:
// Must be at start of line (possibly after > chars), NAME is non-empty
const WROTE_RE = /^(>{0,})\s*(.+?) wrote:$/;

// Hushmail (Malmi early): Quoting NAME:
const QUOTING_RE = /^(>{0,})\s*Quoting (.+?):$/;

// On DATE, NAME wrote: (rare variant)
const ON_DATE_WROTE_RE = /^(>{0,})\s*On .+?, (.+?) wrote:$/;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (full.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function countLeadingQuotes(line) {
  const match = line.match(/^(>+)/);
  return match ? match[1].length : 0;
}

function getSourceType(filePath) {
  const rel = path.relative(enDir, filePath);
  if (rel.startsWith('forum/bitcointalk/')) return 'bitcointalk';
  if (rel.startsWith('forum/p2pfoundation/')) return 'p2pfoundation';
  if (rel.startsWith('emails/')) return 'emails';
  if (rel.startsWith('correspondence/')) return 'correspondence';
  if (rel.startsWith('bip/')) return 'bip';
  if (rel.startsWith('aftermath/')) return 'aftermath';
  return 'other';
}

// ---------------------------------------------------------------------------
// Extraction
// ---------------------------------------------------------------------------

function extractQuotes(filePath) {
  const content = readFileSync(filePath, 'utf-8');

  // Split frontmatter and body
  const parts = content.split('---');
  if (parts.length < 3) return null;
  const body = parts.slice(2).join('---').trim();
  const lines = body.split('\n');

  const quotes = [];
  let quoteCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) continue;

    // Pattern A: BitcoinTalk [Quote from: NAME on DATE](URL)
    // May be inside blockquote: > [Quote from: ...]
    const strippedLine = line.replace(/^>+\s*/, '');
    const btMatch = strippedLine.match(BT_QUOTE_RE);
    if (btMatch) {
      const depth = countLeadingQuotes(line);
      quoteCounter++;
      const sourceEntryId = btMatch[3]
        .replace(/^\/BitcoinArchive\/entries\//, '')
        .replace(/^\/BitcoinArchive\/ja\/entries\//, '')
        .replace(/\/$/, '')
        .replace(/^#msg\d+$/, ''); // anchor-only links have no entry ID

      quotes.push({
        id: `q${quoteCounter}`,
        person: btMatch[1],
        date: btMatch[2],
        sourceUrl: btMatch[3],
        sourceEntryId: sourceEntryId || null,
        depth: depth + 1,
        line: i,
        pattern: 'bitcointalk',
      });
      continue;
    }

    // Pattern B: NAME wrote:
    const wroteMatch = strippedLine.match(WROTE_RE);
    if (wroteMatch && !ON_DATE_WROTE_RE.test(strippedLine)) {
      // Skip lines that are clearly not attributions (e.g., "Satoshi wrote:" inside prose)
      // Heuristic: next non-empty line should start with >
      let nextContentLine = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim()) {
          nextContentLine = lines[j];
          break;
        }
      }

      const depth = countLeadingQuotes(line);
      const isAttribution = nextContentLine.trim().startsWith('>') ||
        nextContentLine.trim().startsWith('<!-- tone-skip');

      if (isAttribution) {
        quoteCounter++;
        quotes.push({
          id: `q${quoteCounter}`,
          person: wroteMatch[2] || wroteMatch[1],
          date: null,
          sourceUrl: null,
          sourceEntryId: null,
          depth: depth + 1,
          line: i,
          pattern: 'wrote',
        });
      }
      continue;
    }

    // Pattern C: Quoting NAME:
    const quotingMatch = strippedLine.match(QUOTING_RE);
    if (quotingMatch) {
      const depth = countLeadingQuotes(line);
      quoteCounter++;
      quotes.push({
        id: `q${quoteCounter}`,
        person: quotingMatch[2],
        date: null,
        sourceUrl: null,
        sourceEntryId: null,
        depth: depth + 1,
        line: i,
        pattern: 'quoting',
      });
      continue;
    }

    // Pattern D: On DATE, NAME wrote:
    const onDateMatch = strippedLine.match(ON_DATE_WROTE_RE);
    if (onDateMatch) {
      let nextContentLine = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim()) {
          nextContentLine = lines[j];
          break;
        }
      }
      const depth = countLeadingQuotes(line);
      if (nextContentLine.trim().startsWith('>')) {
        quoteCounter++;
        quotes.push({
          id: `q${quoteCounter}`,
          person: onDateMatch[2],
          date: null,
          sourceUrl: null,
          sourceEntryId: null,
          depth: depth + 1,
          line: i,
          pattern: 'on-date-wrote',
        });
      }
      continue;
    }
  }

  // Compute parent relationships from depth
  for (let i = 0; i < quotes.length; i++) {
    const q = quotes[i];
    if (q.depth > 1) {
      // Find the nearest preceding quote with depth = q.depth - 1
      for (let j = i - 1; j >= 0; j--) {
        if (quotes[j].depth === q.depth - 1) {
          q.parent = quotes[j].id;
          break;
        }
      }
    }
    if (!q.parent) q.parent = null;
  }

  return quotes.length > 0 ? { filePath, quotes } : null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const statsOnly = args.includes('--stats');
const sourceFilter = args.includes('--source') ? args[args.indexOf('--source') + 1] : null;
const fileFilter = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;

let files;
if (fileFilter) {
  files = [path.resolve(fileFilter)];
} else {
  files = walkDir(enDir);
}

const results = [];
const stats = { bitcointalk: 0, wrote: 0, quoting: 0, 'on-date-wrote': 0, total: 0, files: 0 };

for (const file of files) {
  if (sourceFilter && getSourceType(file) !== sourceFilter) continue;

  const result = extractQuotes(file);
  if (result) {
    results.push(result);
    stats.files++;
    for (const q of result.quotes) {
      stats[q.pattern] = (stats[q.pattern] || 0) + 1;
      stats.total++;
    }
  }
}

// Output
console.log('=== Quote Attribution Extraction Report ===\n');
console.log(`Files with quotes: ${stats.files}`);
console.log(`Total attributions: ${stats.total}`);
console.log(`  BitcoinTalk [Quote from:]: ${stats.bitcointalk || 0}`);
console.log(`  NAME wrote: ${stats.wrote || 0}`);
console.log(`  Quoting NAME: ${stats.quoting || 0}`);
console.log(`  On DATE, NAME wrote: ${stats['on-date-wrote'] || 0}`);
console.log();

if (!statsOnly) {
  for (const result of results) {
    const rel = path.relative(process.cwd(), result.filePath);
    console.log(`--- ${rel} ---`);
    console.log('quotes:');
    for (const q of result.quotes) {
      console.log(`  - id: "${q.id}"`);
      console.log(`    person: "${q.person}"`);
      if (q.date) console.log(`    date: "${q.date}"`);
      if (q.sourceEntryId) console.log(`    sourceEntryId: "${q.sourceEntryId}"`);
      if (q.parent) console.log(`    parent: "${q.parent}"`);
      console.log(`    # depth=${q.depth} line=${q.line} pattern=${q.pattern}`);
    }
    console.log();
  }
}
