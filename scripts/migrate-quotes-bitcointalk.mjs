/**
 * migrate-quotes-bitcointalk.mjs — Migrate BitcoinTalk attribution lines
 *
 * Transforms [Quote from: NAME on DATE](URL) attribution lines into
 * structured quotes[] frontmatter + <!-- quote: ID --> body markers.
 *
 * What changes:
 *   - Frontmatter: adds quotes[] array
 *   - Body: replaces [Quote from:...](URL) with <!-- quote: qN -->
 *   - JA files: also wraps blockquote with <!-- tone-skip --> / <!-- /tone-skip -->
 *   - Quote TEXT (> lines) is NEVER modified
 *
 * Usage:
 *   node scripts/migrate-quotes-bitcointalk.mjs --dry-run          # preview only
 *   node scripts/migrate-quotes-bitcointalk.mjs --dry-run --limit 10  # first 10
 *   node scripts/migrate-quotes-bitcointalk.mjs --apply               # apply changes
 *   node scripts/migrate-quotes-bitcointalk.mjs --apply --limit 10    # apply first 10
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en/forum/bitcointalk');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja/forum/bitcointalk');

// ---------------------------------------------------------------------------
// Pattern
// ---------------------------------------------------------------------------

// Matches: [Quote from: NAME on DATE](URL)
// May be preceded by > chars (nested quotes)
const BT_QUOTE_LINE_RE = /^(>{0,}\s*)\[Quote from: (.+?) on (.+?)\]\((.+?)\)$/;

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

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: match[1], body: match[2] };
}

function extractSourceEntryId(url) {
  return url
    .replace(/^\/BitcoinArchive\/entries\//, '')
    .replace(/^\/BitcoinArchive\/ja\/entries\//, '')
    .replace(/\/$/, '')
    .replace(/^#msg\d+$/, '') || null;
}

/**
 * Parse a BitcoinTalk date string into ISO format.
 * Input: "August 15, 2010, 10:59:04 PM"
 */
function parseBtDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    return d.toISOString();
  } catch {
    return null;
  }
}

/**
 * Check if a frontmatter already has a quotes field.
 */
function hasQuotesField(frontmatter) {
  return /^quotes:/m.test(frontmatter);
}

/**
 * Generate YAML for quotes[] frontmatter.
 */
function generateQuotesYaml(quotes) {
  if (quotes.length === 0) return '';

  let yaml = 'quotes:\n';
  for (const q of quotes) {
    yaml += `  - id: "${q.id}"\n`;
    yaml += `    person: ${JSON.stringify(q.person)}\n`;
    if (q.personSlug) yaml += `    personSlug: "${q.personSlug}"\n`;
    if (q.date) yaml += `    date: "${q.date}"\n`;
    if (q.sourceEntryId) yaml += `    sourceEntryId: "${q.sourceEntryId}"\n`;
    if (q.parent) yaml += `    parent: "${q.parent}"\n`;
  }
  return yaml;
}

/**
 * Find the end of a blockquote section starting at lineIndex.
 * Returns the index of the last > line (inclusive).
 */
function findBlockquoteEnd(lines, startIndex, minDepth) {
  let endIndex = startIndex;
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    // Continue as long as the line is part of the blockquote
    // (starts with > at the right depth, or is empty within the quote)
    if (line.match(new RegExp(`^>{${minDepth}}`))) {
      endIndex = i;
    } else if (line.trim() === '' && i > startIndex) {
      // Check if next non-empty line continues the blockquote
      let nextNonEmpty = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim()) {
          nextNonEmpty = lines[j];
          break;
        }
      }
      if (nextNonEmpty.match(new RegExp(`^>{${minDepth}}`))) {
        endIndex = i; // empty line within blockquote
      } else {
        break; // end of blockquote
      }
    } else {
      break;
    }
  }
  return endIndex;
}

// ---------------------------------------------------------------------------
// Migration logic
// ---------------------------------------------------------------------------

function migrateFile(enFilePath, dryRun) {
  const enContent = readFileSync(enFilePath, 'utf-8');
  const enParsed = parseFrontmatter(enContent);
  if (!enParsed) return null;

  // Skip if already migrated
  if (hasQuotesField(enParsed.frontmatter)) return null;

  const enLines = enParsed.body.split('\n');
  const quotes = [];
  let quoteCounter = 0;
  const lineReplacements = []; // { lineIndex, oldLine, newLines, quoteId, depth }

  // Pass 1: Find all attribution lines
  for (let i = 0; i < enLines.length; i++) {
    const line = enLines[i];
    const match = line.match(BT_QUOTE_LINE_RE);
    if (!match) continue;

    const prefix = match[1]; // leading > chars
    const person = match[2];
    const dateStr = match[3];
    const url = match[4];
    const depth = (prefix.match(/>/g) || []).length + 1;

    quoteCounter++;
    const id = `q${quoteCounter}`;
    const sourceEntryId = extractSourceEntryId(url);
    const isoDate = parseBtDate(dateStr);

    quotes.push({
      id,
      person,
      personSlug: null, // Will be resolved later if needed
      date: isoDate,
      sourceEntryId,
      depth,
      parent: null,
    });

    lineReplacements.push({
      lineIndex: i,
      oldLine: line,
      quoteId: id,
      prefix: prefix.trimEnd(),
      depth,
    });
  }

  if (quotes.length === 0) return null;

  // Compute parent relationships
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].depth > 1) {
      for (let j = i - 1; j >= 0; j--) {
        if (quotes[j].depth === quotes[i].depth - 1) {
          quotes[i].parent = quotes[j].id;
          break;
        }
      }
    }
  }

  // Pass 2: Build new EN body
  const newEnLines = [...enLines];
  // Process replacements from bottom to top to preserve line indices
  for (let r = lineReplacements.length - 1; r >= 0; r--) {
    const rep = lineReplacements[r];
    const marker = rep.prefix
      ? `${rep.prefix} <!-- quote: ${rep.quoteId} -->`
      : `<!-- quote: ${rep.quoteId} -->`;
    newEnLines[rep.lineIndex] = marker;
  }

  // Build new EN content
  const quotesYaml = generateQuotesYaml(quotes);
  const newEnFrontmatter = enParsed.frontmatter + '\n' + quotesYaml.trimEnd();
  const newEnContent = `---\n${newEnFrontmatter}\n---\n${newEnLines.join('\n')}`;

  // Process JA file
  const relPath = path.relative(enDir, enFilePath);
  const jaFilePath = path.join(jaDir, relPath);
  let newJaContent = null;

  if (existsSync(jaFilePath)) {
    const jaContent = readFileSync(jaFilePath, 'utf-8');
    const jaParsed = parseFrontmatter(jaContent);

    if (jaParsed && !hasQuotesField(jaParsed.frontmatter)) {
      const jaLines = jaParsed.body.split('\n');

      // Find [Quote from:] lines in JA (same pattern, kept in English)
      const jaReplacements = [];
      let jaQuoteCounter = 0;
      for (let i = 0; i < jaLines.length; i++) {
        const match = jaLines[i].match(BT_QUOTE_LINE_RE);
        if (!match) continue;
        jaQuoteCounter++;
        const prefix = match[1].trimEnd();
        const id = `q${jaQuoteCounter}`;
        const depth = (prefix.match(/>/g) || []).length + 1;

        jaReplacements.push({ lineIndex: i, prefix, quoteId: id, depth });
      }

      if (jaReplacements.length === quotes.length) {
        // Process from bottom to top
        for (let r = jaReplacements.length - 1; r >= 0; r--) {
          const rep = jaReplacements[r];
          const marker = rep.prefix
            ? `${rep.prefix} <!-- quote: ${rep.quoteId} -->`
            : `<!-- quote: ${rep.quoteId} -->`;

          // For JA, add tone-skip around the blockquote
          // But only for top-level markers (depth=1 and not inside >)
          if (rep.depth === 1) {
            // Check if tone-skip already exists
            const nextLine = jaLines[rep.lineIndex + 1] || '';
            const hasToneSkip = /<!--\s*tone-skip\s*-->/.test(nextLine);

            if (!hasToneSkip) {
              // Find the blockquote end
              const bqStart = rep.lineIndex + 1;
              const bqEnd = findBlockquoteEnd(jaLines, bqStart, 1);

              // Insert <!-- /tone-skip --> after blockquote
              jaLines.splice(bqEnd + 1, 0, '<!-- /tone-skip -->');
              // Insert <!-- tone-skip --> before blockquote
              jaLines.splice(bqStart, 0, '<!-- tone-skip -->');
              // Replace attribution line with marker
              jaLines[rep.lineIndex] = marker;

              // Adjust subsequent replacement indices
              for (let s = r - 1; s >= 0; s--) {
                if (jaReplacements[s].lineIndex > rep.lineIndex) {
                  jaReplacements[s].lineIndex += 2; // +2 for tone-skip pair
                }
              }
            } else {
              jaLines[rep.lineIndex] = marker;
            }
          } else {
            // Nested quote: just replace attribution, no tone-skip
            // (parent's tone-skip covers inner content)
            jaLines[rep.lineIndex] = marker;
          }
        }

        const newJaFrontmatter = jaParsed.frontmatter + '\n' + quotesYaml.trimEnd();
        newJaContent = `---\n${newJaFrontmatter}\n---\n${jaLines.join('\n')}`;
      } else {
        console.warn(`  WARNING: EN has ${quotes.length} quotes but JA has ${jaQuoteCounter} — skipping JA: ${relPath}`);
      }
    }
  }

  if (dryRun) {
    return { enFilePath, jaFilePath, quotes: quotes.length, jaProcessed: !!newJaContent };
  }

  // Write files
  writeFileSync(enFilePath, newEnContent, 'utf-8');
  if (newJaContent) {
    writeFileSync(jaFilePath, newJaContent, 'utf-8');
  }

  return { enFilePath, jaFilePath, quotes: quotes.length, jaProcessed: !!newJaContent };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const dryRun = !args.includes('--apply');
const limit = args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : Infinity;

const enFiles = walkDir(enDir).sort();
let processed = 0;
let skipped = 0;
let totalQuotes = 0;
let jaProcessed = 0;
let jaSkipped = 0;

console.log(`Mode: ${dryRun ? 'DRY RUN' : 'APPLY'}`);
console.log(`Limit: ${limit === Infinity ? 'none' : limit}`);
console.log();

for (const enFile of enFiles) {
  if (processed >= limit) break;

  const result = migrateFile(enFile, dryRun);
  if (!result) {
    skipped++;
    continue;
  }

  processed++;
  totalQuotes += result.quotes;
  if (result.jaProcessed) jaProcessed++;
  else jaSkipped++;

  const rel = path.relative(process.cwd(), result.enFilePath);
  console.log(`${dryRun ? '[DRY]' : '[OK]'} ${rel} (${result.quotes} quotes, JA: ${result.jaProcessed ? 'OK' : 'SKIP'})`);
}

console.log();
console.log(`=== Summary ===`);
console.log(`Processed: ${processed} files (${totalQuotes} quotes)`);
console.log(`Skipped (no quotes or already migrated): ${skipped}`);
console.log(`JA processed: ${jaProcessed}`);
console.log(`JA skipped: ${jaSkipped}`);

if (dryRun && processed > 0) {
  console.log();
  console.log('Run with --apply to write changes.');
}
