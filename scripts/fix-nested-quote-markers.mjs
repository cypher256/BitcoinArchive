/**
 * fix-nested-quote-markers.mjs
 *
 * For files where quotes[] has 2+ entries but body has fewer top-level
 * blockquotes than markers, the structure is nested:
 *
 * Body looks like:
 *   >
 *   > > inner quoted text (q2)
 *   >
 *   > outer text (q1)
 *
 * Expected structure:
 *   <!-- quote: q1 -->
 *   > <!-- quote: q2 -->
 *   > > inner quoted text
 *   >
 *   > outer text
 *
 * This script identifies the pattern: blockquote contains nested `> >` lines.
 * It inserts q1 marker before the outer block, and q2 marker before the
 * first nested `> >` line (with `> ` prefix).
 *
 * Usage:
 *   node scripts/fix-nested-quote-markers.mjs --dry-run
 *   node scripts/fix-nested-quote-markers.mjs --apply
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
  if (quoteIds.length < 2) return null; // only handle nested case

  const existingMarkers = (parsed.body.match(/<!-- quote: q\d+ -->/g) || [])
    .map(m => m.match(/q\d+/)[0]);
  const missing = quoteIds.filter(id => !existingMarkers.includes(id));
  if (missing.length === 0) return null;

  const lines = parsed.body.split('\n');

  // Find first top-level blockquote (lines starting with `> `)
  let bqStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^>(\s|$)/.test(lines[i])) { bqStart = i; break; }
  }
  if (bqStart === -1) return { filePath, error: 'no blockquote' };

  // Find first nested blockquote (`> >` or `>>`)
  let nestedBqStart = -1;
  for (let i = bqStart; i < lines.length; i++) {
    if (/^>\s*>(\s|$)/.test(lines[i])) { nestedBqStart = i; break; }
    // stop at end of outer blockquote
    if (i > bqStart && !/^>(\s|$)/.test(lines[i]) && lines[i].trim() !== '') break;
  }

  // For 2-quote case: q1 (outer) + q2 (nested)
  if (missing.length === 2 && nestedBqStart !== -1) {
    const newLines = [...lines];
    // Insert q2 marker before nested line (with > prefix)
    newLines.splice(nestedBqStart, 0, `> <!-- quote: ${missing[1]} -->`);
    // Insert q1 marker before outer blockquote start
    newLines.splice(bqStart, 0, `<!-- quote: ${missing[0]} -->`);

    const newContent = `---\n${parsed.fmText}\n---\n${newLines.join('\n')}`;
    if (doApply) writeFileSync(filePath, newContent, 'utf-8');
    return { filePath, fixed: true, count: 2 };
  }

  // For 1-quote case (top-level only)
  if (missing.length === 1) {
    const newLines = [...lines];
    newLines.splice(bqStart, 0, `<!-- quote: ${missing[0]} -->`);
    const newContent = `---\n${parsed.fmText}\n---\n${newLines.join('\n')}`;
    if (doApply) writeFileSync(filePath, newContent, 'utf-8');
    return { filePath, fixed: true, count: 1 };
  }

  return { filePath, error: `${missing.length} markers, no clear pattern` };
}

const allFiles = [...walkMd(enDir), ...walkMd(jaDir)];
let fixed = 0;
let errors = 0;
let skipped = 0;
const errorList = [];

for (const f of allFiles) {
  const result = fixFile(f, doApply);
  if (!result) { skipped++; continue; }
  if (result.error) {
    errors++;
    errorList.push(`${path.relative(process.cwd(), f)} — ${result.error}`);
  } else if (result.fixed) {
    fixed++;
  }
}

console.log(`Mode: ${doApply ? 'APPLY' : 'DRY RUN'}`);
console.log(`Fixed: ${fixed}`);
console.log(`Errors: ${errors}`);
console.log(`Skipped: ${skipped}`);

if (errorList.length > 0 && errorList.length <= 20) {
  console.log('\nErrors:');
  for (const e of errorList) console.log(`  ${e}`);
}
