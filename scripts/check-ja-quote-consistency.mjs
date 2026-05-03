#!/usr/bin/env node
/**
 * check-ja-quote-consistency.mjs — find divergent JA translations of same EN quote.
 *
 * Scans all EN entries for blockquotes (consecutive lines starting with `> `),
 * groups blockquotes whose EN text is identical (after light normalization)
 * across multiple files, and compares the corresponding JA translations.
 *
 * Matching strategy:
 *   - EN side: extract blockquote text, normalize (collapse whitespace,
 *     unify smart quotes). Group occurrences by normalized EN text.
 *   - JA side: for each EN file, locate the JA mirror file at the same
 *     relative path under src/data/translations/ja/. Look at the JA
 *     blockquote at the SAME ordinal index as the EN occurrence
 *     (assumption: translation pairs preserve blockquote order).
 *   - Compare: if 2+ distinct files share the same EN quote and their
 *     paired JA translations differ (by normalized text), flag as
 *     inconsistency.
 *
 * Report: same EN text → divergent JA → file paths + line numbers.
 *
 * Limitations:
 *   - Quote-range mismatches (one file has a partial quote, another has
 *     the full quote) are NOT detected — only exact EN matches.
 *   - Positional JA lookup assumes translation pairs preserve ordering;
 *     if a translator splits or merges blockquotes, the script may
 *     compare unrelated translations. Visual inspection still required.
 *
 * Run: node scripts/check-ja-quote-consistency.mjs
 *      node scripts/check-ja-quote-consistency.mjs --strict   # exit 1 on any issue
 *      node scripts/check-ja-quote-consistency.mjs --json     # machine-readable output
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

const STRICT = process.argv.includes('--strict');
const JSON_OUT = process.argv.includes('--json');
const MIN_LEN = 30; // ignore quotes shorter than this many chars (after normalization)

// ---------------------------------------------------------------------------

function walkDir(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkDir(p));
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function stripFrontmatter(text) {
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---\n', 4);
    if (end >= 0) return text.slice(end + 5);
  }
  return text;
}

// Extract blockquotes. A blockquote runs from the first `> ` line until
// the next non-`>` line. Blank `>` lines (just `>`) continue the block.
// Returns: [{ idxInFile, lineStart, lineEnd, text }]
function extractBlockquotes(text) {
  const body = stripFrontmatter(text);
  const lines = body.split('\n');
  const blocks = [];
  let current = null;

  // Account for frontmatter offset to give correct file line numbers
  const frontmatterLines = text.split('\n').length - body.split('\n').length;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isBlockquote = /^>(\s|$)/.test(line);
    if (isBlockquote) {
      if (!current) {
        current = {
          idxInFile: blocks.length,
          lineStart: frontmatterLines + i + 1,
          lines: [],
        };
      }
      current.lines.push(line.replace(/^>\s?/, ''));
      current.lineEnd = frontmatterLines + i + 1;
    } else if (current) {
      blocks.push({
        ...current,
        text: current.lines.join('\n').trim(),
      });
      current = null;
    }
  }
  if (current) {
    blocks.push({
      ...current,
      text: current.lines.join('\n').trim(),
    });
  }
  return blocks.filter(b => b.text.length > 0);
}

// Normalize EN quote text for cross-file matching
function normalizeEn(text) {
  return text
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/^["']|["']$/g, '')
    .trim();
}

// Normalize JA quote text for divergence detection.
// Strip whitespace, all 「」『』 brackets (since 「」 presence is governed
// by a separate style rule), markdown bold/italic markers (** and _),
// and trailing sentence-end punctuation (。｡ .) so that minor formatting
// variants do not produce false positives.
function normalizeJa(text) {
  return text
    .replace(/\s+/g, '')
    .replace(/[「」『』]/g, '')
    .replace(/\*+/g, '')
    .replace(/_+/g, '')
    .replace(/[。｡.]+$/, '')
    .trim();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const enFiles = walkDir(enDir);
const enQuotes = new Map(); // normalized EN → [{ enFile, idx, raw, lineStart }]

for (const enFile of enFiles) {
  const text = readFileSync(enFile, 'utf-8');
  const blocks = extractBlockquotes(text);
  for (const b of blocks) {
    const norm = normalizeEn(b.text);
    if (norm.length < MIN_LEN) continue;
    if (!enQuotes.has(norm)) enQuotes.set(norm, []);
    enQuotes.get(norm).push({
      enFile,
      idx: b.idxInFile,
      raw: b.text,
      lineStart: b.lineStart,
    });
  }
}

const issues = [];

for (const [norm, occurrences] of enQuotes) {
  if (occurrences.length < 2) continue;
  // Need 2+ DISTINCT files
  const distinctFiles = new Set(occurrences.map(o => o.enFile));
  if (distinctFiles.size < 2) continue;

  // For each occurrence, look up JA mirror at same blockquote index
  const jaResolved = [];
  for (const occ of occurrences) {
    const rel = path.relative(enDir, occ.enFile);
    const jaFile = path.join(jaDir, rel);
    if (!existsSync(jaFile)) {
      jaResolved.push({ ...occ, jaFile: null, jaText: null });
      continue;
    }
    const jaText = readFileSync(jaFile, 'utf-8');
    const jaBlocks = extractBlockquotes(jaText);
    if (jaBlocks.length <= occ.idx) {
      jaResolved.push({ ...occ, jaFile, jaText: null, jaLine: null });
      continue;
    }
    jaResolved.push({
      ...occ,
      jaFile,
      jaText: jaBlocks[occ.idx].text,
      jaLine: jaBlocks[occ.idx].lineStart,
    });
  }

  // Filter to those with a JA translation found
  const validJa = jaResolved.filter(t => t.jaText !== null);
  if (validJa.length < 2) continue;

  const distinctJa = new Set(validJa.map(t => normalizeJa(t.jaText)));
  if (distinctJa.size < 2) continue;

  issues.push({ en: norm, raw: occurrences[0].raw, occurrences: jaResolved });
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

if (JSON_OUT) {
  console.log(JSON.stringify({
    total: issues.length,
    issues: issues.map(iss => ({
      en: iss.raw.slice(0, 200),
      occurrences: iss.occurrences.map(o => ({
        enFile: path.relative(process.cwd(), o.enFile),
        enLine: o.lineStart,
        jaFile: o.jaFile ? path.relative(process.cwd(), o.jaFile) : null,
        jaLine: o.jaLine,
        jaText: o.jaText,
      })),
    })),
  }, null, 2));
} else {
  if (issues.length === 0) {
    console.log('✓ No JA quote-translation divergences detected.');
  } else {
    console.log(`Found ${issues.length} EN quote(s) with divergent JA translations across files:\n`);
    for (const iss of issues) {
      console.log('---');
      const enPreview = iss.raw.length > 120 ? iss.raw.slice(0, 120) + '…' : iss.raw;
      console.log(`EN: ${enPreview}`);
      for (const occ of iss.occurrences) {
        const jaPath = occ.jaFile
          ? path.relative(process.cwd(), occ.jaFile)
          : '(no JA mirror)';
        const jaLine = occ.jaLine ?? '?';
        const jaPreview = occ.jaText
          ? (occ.jaText.length > 120 ? occ.jaText.slice(0, 120) + '…' : occ.jaText)
          : '(missing)';
        console.log(`  ${jaPath}:${jaLine}`);
        console.log(`    JA: ${jaPreview}`);
      }
      console.log();
    }
    console.log(`Total: ${issues.length} divergent EN quote(s).`);
  }
}

if (STRICT && issues.length > 0) {
  process.exit(1);
}
process.exit(0);
