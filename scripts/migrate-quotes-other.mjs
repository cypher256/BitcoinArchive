/**
 * migrate-quotes-other.mjs — Migrate non-BitcoinTalk attribution lines
 *
 * Handles: NAME wrote:, Quoting NAME:, On DATE NAME wrote:
 * Sources: emails/, correspondence/, forum/p2pfoundation/
 *
 * JA patterns handled:
 *   - NAME wrote: (untranslated)
 *   - NAMEの投稿：
 *   - NAMEの書き込み：
 *   - NAMEの引用：
 *   - NAMEは次のように書いた：
 *   - Quoting NAME: (untranslated)
 *
 * Usage:
 *   node scripts/migrate-quotes-other.mjs --dry-run
 *   node scripts/migrate-quotes-other.mjs --dry-run --limit 10
 *   node scripts/migrate-quotes-other.mjs --apply
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enBase = path.resolve(__dirname, '../src/data/entries/en');
const jaBase = path.resolve(__dirname, '../src/data/translations/ja');

const SOURCE_DIRS = [
  'emails',
  'correspondence',
  'forum/p2pfoundation',
];

// ---------------------------------------------------------------------------
// EN Patterns
// ---------------------------------------------------------------------------
// NAME wrote:  (at any > depth)
const WROTE_RE = /^(>{0,}\s*)(.+?) wrote:$/;
// Quoting NAME <email>:  or  Quoting NAME:
const QUOTING_RE = /^(>{0,}\s*)Quoting (.+?):$/;
// On DATE, NAME wrote:
const ON_DATE_WROTE_RE = /^(>{0,}\s*)On .+?,\s*(.+?) wrote:$/;

// ---------------------------------------------------------------------------
// JA Patterns (translated attributions)
// ---------------------------------------------------------------------------
const JA_WROTE_RE = /^(>{0,}\s*)(.+?) wrote:$/;
const JA_NO_TOUSHO_RE = /^(>{0,}\s*)(.+?)の投稿[：:]$/;
const JA_NO_KAKIKOMI_RE = /^(>{0,}\s*)(.+?)の書き込み[：:]$/;
const JA_NO_INYOU_RE = /^(>{0,}\s*)(.+?)の引用[：:]$/;
// Variant: NAME <email>の引用：
const JA_NO_INYOU_EMAIL_RE = /^(>{0,}\s*)(.+?\s*<[^>]+>)の引用[：:]$/;
const JA_KAITA_RE = /^(>{0,}\s*)(.+?)は次のように書いた[：:]$/;
const JA_QUOTING_RE = /^(>{0,}\s*)Quoting (.+?):$/;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walkDir(dir) {
  if (!existsSync(dir)) return [];
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

function hasQuotesField(frontmatter) {
  return /^quotes:/m.test(frontmatter);
}

function generateQuotesYaml(quotes) {
  if (quotes.length === 0) return '';
  let yaml = 'quotes:\n';
  for (const q of quotes) {
    yaml += `  - id: "${q.id}"\n`;
    yaml += `    person: ${JSON.stringify(q.person)}\n`;
    if (q.parent) yaml += `    parent: "${q.parent}"\n`;
  }
  return yaml;
}

function countLeadingQuotes(line) {
  const m = line.match(/^(>+)/);
  return m ? m[1].length : 0;
}

function isAttributionLine(line) {
  const stripped = line.replace(/^>+\s*/, '');
  if (WROTE_RE.test(stripped)) return true;
  if (QUOTING_RE.test(stripped)) return true;
  if (ON_DATE_WROTE_RE.test(stripped)) return true;
  return false;
}

function isJaAttributionLine(line) {
  const stripped = line.replace(/^>+\s*/, '');
  if (JA_WROTE_RE.test(stripped)) return true;
  if (JA_NO_TOUSHO_RE.test(stripped)) return true;
  if (JA_NO_KAKIKOMI_RE.test(stripped)) return true;
  if (JA_NO_INYOU_RE.test(stripped)) return true;
  if (JA_NO_INYOU_EMAIL_RE.test(stripped)) return true;
  if (JA_KAITA_RE.test(stripped)) return true;
  if (JA_QUOTING_RE.test(stripped)) return true;
  return false;
}

function nextNonEmptyLine(lines, startIdx) {
  for (let i = startIdx; i < lines.length; i++) {
    if (lines[i].trim()) return lines[i];
  }
  return '';
}

// ---------------------------------------------------------------------------
// EN extraction
// ---------------------------------------------------------------------------

function extractEnQuotes(lines) {
  const quotes = [];
  let counter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const stripped = line.replace(/^>+\s*/, '');
    const depth = countLeadingQuotes(line) + 1;
    let person = null;
    let pattern = null;

    const wroteMatch = stripped.match(WROTE_RE);
    const quotingMatch = stripped.match(QUOTING_RE);
    const onDateMatch = stripped.match(ON_DATE_WROTE_RE);

    if (onDateMatch) {
      person = onDateMatch[2];
      pattern = 'on-date-wrote';
    } else if (quotingMatch) {
      person = quotingMatch[2];
      pattern = 'quoting';
    } else if (wroteMatch) {
      person = wroteMatch[2];
      pattern = 'wrote';
    }

    if (!person) continue;

    // Verify next content line starts with > (is a blockquote)
    const nextLine = nextNonEmptyLine(lines, i + 1);
    if (!nextLine.trimStart().startsWith('>') && !nextLine.includes('tone-skip')) continue;

    // Skip if person looks like prose (contains common non-name words)
    if (/\b(that|this|which|where|when|also|then|because|however)\b/i.test(person)) continue;
    // Skip "Satoshi wrote:" that appears in narrative prose
    if (person.length > 100) continue;

    counter++;
    quotes.push({
      id: `q${counter}`,
      person: person.replace(/<[^>]+>/g, '').trim(), // remove email addresses
      depth,
      line: i,
      pattern,
      parent: null,
    });
  }

  // Compute parents
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

  return quotes;
}

// ---------------------------------------------------------------------------
// Migration
// ---------------------------------------------------------------------------

function migrateFile(enFilePath, dryRun) {
  const enContent = readFileSync(enFilePath, 'utf-8');
  const enParsed = parseFrontmatter(enContent);
  if (!enParsed) return null;
  if (hasQuotesField(enParsed.frontmatter)) return null;

  const enLines = enParsed.body.split('\n');
  const quotes = extractEnQuotes(enLines);
  if (quotes.length === 0) return null;

  // Build new EN body
  const newEnLines = [...enLines];
  for (let r = quotes.length - 1; r >= 0; r--) {
    const q = quotes[r];
    const prefix = q.depth > 1 ? '>'.repeat(q.depth - 1) + ' ' : '';
    newEnLines[q.line] = `${prefix}<!-- quote: ${q.id} -->`;
  }

  const quotesYaml = generateQuotesYaml(quotes);
  const newEnFrontmatter = enParsed.frontmatter + '\n' + quotesYaml.trimEnd();
  const newEnContent = `---\n${newEnFrontmatter}\n---\n${newEnLines.join('\n')}`;

  // Process JA file
  const relPath = path.relative(enBase, enFilePath);
  const jaFilePath = path.join(jaBase, relPath);
  let newJaContent = null;

  if (existsSync(jaFilePath)) {
    const jaContent = readFileSync(jaFilePath, 'utf-8');
    const jaParsed = parseFrontmatter(jaContent);

    if (jaParsed && !hasQuotesField(jaParsed.frontmatter)) {
      const jaLines = jaParsed.body.split('\n');

      // Find JA attribution lines
      const jaAttributions = [];
      for (let i = 0; i < jaLines.length; i++) {
        if (isJaAttributionLine(jaLines[i])) {
          const nextLine = nextNonEmptyLine(jaLines, i + 1);
          if (nextLine.trimStart().startsWith('>') || nextLine.includes('tone-skip')) {
            jaAttributions.push(i);
          }
        }
      }

      if (jaAttributions.length === quotes.length) {
        // Replace JA attributions from bottom to top
        for (let r = jaAttributions.length - 1; r >= 0; r--) {
          const lineIdx = jaAttributions[r];
          const q = quotes[r];
          const jaDepth = countLeadingQuotes(jaLines[lineIdx]);
          const prefix = jaDepth > 0 ? '>'.repeat(jaDepth) + ' ' : '';
          const marker = `${prefix}<!-- quote: ${q.id} -->`;

          // Check if tone-skip already follows
          const nextLine = (jaLines[lineIdx + 1] || '').trim();
          if (nextLine.includes('tone-skip')) {
            // tone-skip already exists, just replace attribution
            jaLines[lineIdx] = marker;
          } else if (jaDepth === 0) {
            // Top-level: add tone-skip wrapper
            // Find blockquote end
            let bqEnd = lineIdx + 1;
            for (let j = lineIdx + 1; j < jaLines.length; j++) {
              if (jaLines[j].startsWith('>')) {
                bqEnd = j;
              } else if (jaLines[j].trim() === '') {
                const after = nextNonEmptyLine(jaLines, j + 1);
                if (after.startsWith('>')) {
                  bqEnd = j;
                } else {
                  break;
                }
              } else {
                break;
              }
            }
            jaLines.splice(bqEnd + 1, 0, '<!-- /tone-skip -->');
            jaLines.splice(lineIdx + 1, 0, '<!-- tone-skip -->');
            jaLines[lineIdx] = marker;

            // Adjust subsequent indices
            for (let s = r - 1; s >= 0; s--) {
              if (jaAttributions[s] > lineIdx) {
                jaAttributions[s] += 2;
              }
            }
          } else {
            // Nested: just replace, parent tone-skip covers
            jaLines[lineIdx] = marker;
          }
        }

        const newJaFrontmatter = jaParsed.frontmatter + '\n' + quotesYaml.trimEnd();
        newJaContent = `---\n${newJaFrontmatter}\n---\n${jaLines.join('\n')}`;
      } else {
        console.warn(`  WARNING: EN has ${quotes.length} quotes but JA has ${jaAttributions.length} attributions — skipping JA: ${relPath}`);
      }
    }
  }

  if (dryRun) {
    return { enFilePath, jaFilePath, quotes: quotes.length, jaProcessed: !!newJaContent };
  }

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

let allFiles = [];
for (const dir of SOURCE_DIRS) {
  allFiles.push(...walkDir(path.join(enBase, dir)));
}
allFiles.sort();

let processed = 0;
let skipped = 0;
let totalQuotes = 0;
let jaProcessed = 0;
let jaSkipped = 0;
const warnings = [];

console.log(`Mode: ${dryRun ? 'DRY RUN' : 'APPLY'}`);
console.log(`Limit: ${limit === Infinity ? 'none' : limit}`);
console.log();

for (const enFile of allFiles) {
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
console.log(`Skipped: ${skipped}`);
console.log(`JA processed: ${jaProcessed}`);
console.log(`JA skipped: ${jaSkipped}`);

if (dryRun && processed > 0) {
  console.log();
  console.log('Run with --apply to write changes.');
}
