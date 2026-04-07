/**
 * fix-missing-quote-markers.mjs
 *
 * fetch-replies-to-satoshi.mjs had a bug where the HTML-stripping regex
 * accidentally removed `<!-- quote: qN -->` markers from the body. The
 * frontmatter quotes[] is correct, but the body markers are missing.
 *
 * This script:
 * 1. Reads files where quotes[] exists but body has no <!-- quote: qN --> markers
 * 2. Inserts the marker before each top-level blockquote in the body
 * 3. Order matters: q1 → first blockquote, q2 → second, etc.
 *
 * This is a deterministic structural fix per STYLE_GUIDE_JA.
 *
 * Usage:
 *   node scripts/fix-missing-quote-markers.mjs --dry-run  # preview
 *   node scripts/fix-missing-quote-markers.mjs --apply    # apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en/forum/bitcointalk');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja/forum/bitcointalk');

const args = process.argv.slice(2);
const doApply = args.includes('--apply');

function walkMd(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walkMd(full));
    else if (full.endsWith('.md')) results.push(full);
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { fmText: match[1], body: match[2] };
}

function extractQuoteIds(fmText) {
  const ids = [];
  const lines = fmText.split('\n');
  let inQuotes = false;
  for (const line of lines) {
    if (line === 'quotes:') { inQuotes = true; continue; }
    if (inQuotes && !/^\s/.test(line)) break;
    if (inQuotes) {
      const m = line.match(/^  - id:\s*"(\w+)"/);
      if (m) ids.push(m[1]);
    }
  }
  return ids;
}

function fixFile(filePath, doApply) {
  const content = readFileSync(filePath, 'utf-8');
  const parsed = parseFrontmatter(content);
  if (!parsed) return null;

  const quoteIds = extractQuoteIds(parsed.fmText);
  if (quoteIds.length === 0) return null;

  // Check if body already has all markers
  const existingMarkers = (parsed.body.match(/<!-- quote: q\d+ -->/g) || [])
    .map(m => m.match(/q\d+/)[0]);

  // If all expected markers exist, skip
  const missing = quoteIds.filter(id => !existingMarkers.includes(id));
  if (missing.length === 0) return null;

  // Find top-level blockquotes (lines starting with `> ` not nested).
  // Two consecutive `>` blocks separated by blank line(s) count as
  // separate blockquotes (Markdown spec).
  const lines = parsed.body.split('\n');
  const blockquoteStartIndices = [];
  let inBq = false;
  for (let i = 0; i < lines.length; i++) {
    const isQuote = /^>(\s|$)/.test(lines[i]);
    const isEmpty = lines[i].trim() === '';
    if (isQuote && !inBq) {
      blockquoteStartIndices.push(i);
      inBq = true;
    } else if (isEmpty) {
      // Blank line ends the current blockquote (Markdown rule).
      // Even if the next non-empty line starts with `>`, that's a NEW blockquote.
      inBq = false;
    } else if (!isQuote) {
      inBq = false;
    }
  }

  if (blockquoteStartIndices.length === 0) {
    return { filePath, missing, error: 'no blockquotes found' };
  }

  if (blockquoteStartIndices.length < missing.length) {
    return { filePath, missing, error: `${missing.length} markers needed but only ${blockquoteStartIndices.length} blockquotes found` };
  }

  // Insert markers before each blockquote (in reverse to preserve indices)
  const newLines = [...lines];
  for (let i = missing.length - 1; i >= 0; i--) {
    const insertIdx = blockquoteStartIndices[i];
    const marker = `<!-- quote: ${missing[i]} -->`;
    newLines.splice(insertIdx, 0, marker);
  }

  const newContent = `---\n${parsed.fmText}\n---\n${newLines.join('\n')}`;

  if (doApply) {
    writeFileSync(filePath, newContent, 'utf-8');
  }

  return { filePath, missing, fixed: true };
}

// Main
const allFiles = [...walkMd(enDir), ...walkMd(jaDir)];
let fixed = 0;
let skipped = 0;
let errors = 0;

for (const f of allFiles) {
  const result = fixFile(f, doApply);
  if (!result) { skipped++; continue; }
  if (result.error) {
    errors++;
    console.error(`ERROR: ${path.relative(process.cwd(), f)} — ${result.error}`);
  } else if (result.fixed) {
    fixed++;
    if (fixed <= 5) {
      console.log(`${doApply ? 'FIXED' : 'WOULD FIX'}: ${path.relative(process.cwd(), f)} (${result.missing.length} markers)`);
    }
  }
}

console.log();
console.log(`Mode: ${doApply ? 'APPLY' : 'DRY RUN'}`);
console.log(`Fixed: ${fixed}`);
console.log(`Errors: ${errors}`);
console.log(`Skipped (no fix needed): ${skipped}`);
