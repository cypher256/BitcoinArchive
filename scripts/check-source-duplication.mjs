#!/usr/bin/env node
/**
 * check-source-duplication.mjs — Detect entries where `sourceUrl`
 * is duplicated inside the entry's own `secondarySources[].url` list.
 *
 * The two fields play different roles in `<SourceCitation />`:
 *   - `sourceUrl` is the single canonical primary reference, rendered
 *     under "Related source" / 「関連ソース」.
 *   - `secondarySources[]` is the list of additional references,
 *     rendered under "Other related sources" / 「その他の関連ソース」.
 *
 * If the same URL appears in both, the citation block lists the same
 * external link twice. Ban the duplication and force the editor to
 * pick which role the URL plays. See STYLE_GUIDE.md
 * "Source Citation: sourceUrl vs secondarySources".
 *
 * Scope:
 *   - Walks every `*.md` under `src/data/entries/en` and
 *     `src/data/translations/ja`.
 *   - Compares the `sourceUrl` frontmatter value against each
 *     `secondarySources[].url` value in the same file.
 *
 * Usage:
 *   node scripts/check-source-duplication.mjs           # report only (exit 0 always)
 *   node scripts/check-source-duplication.mjs --strict  # exit 1 if any duplicates
 *
 * Exit codes:
 *   0 — no duplicates, or `--strict` not set
 *   1 — `--strict` set and at least one duplicate found
 *
 * Wired into `npm run check` once the existing duplicate backlog
 * has been cleared to zero.
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import path from 'path';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const STRICT = process.argv.includes('--strict');

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir)) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.md')) out.push(p);
  }
  return out;
}

function extractFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : null;
}

function parseSourceUrl(fm) {
  const m = fm.match(/^sourceUrl:\s*"?([^"\n]+?)"?\s*$/m);
  return m ? m[1].trim() : null;
}

// Collects every `url:` value that appears under a `secondarySources:`
// block. The frontmatter is YAML, but a regex is enough here: any
// `^  - name: ...\n    url: ...` pair is treated as a secondarySource
// entry. Other top-level lists in the frontmatter (`participants:`,
// `relatedEntries:`, etc.) do not carry `url:` keys, so the extraction
// is unambiguous.
function parseSecondarySourceUrls(fm) {
  const lines = fm.split('\n');
  const urls = [];
  let inBlock = false;
  for (const line of lines) {
    if (/^secondarySources:/.test(line)) {
      inBlock = true;
      continue;
    }
    if (inBlock) {
      // Exit the block on any new top-level key.
      if (/^[a-zA-Z]/.test(line)) {
        inBlock = false;
        continue;
      }
      const m = line.match(/^\s+url:\s*"?([^"\n]+?)"?\s*$/);
      if (m) urls.push(m[1].trim());
    }
  }
  return urls;
}

const allFiles = [...walk(EN_DIR), ...walk(JA_DIR)];
const dups = [];

for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8');
  const fm = extractFrontmatter(content);
  if (!fm) continue;
  const sourceUrl = parseSourceUrl(fm);
  if (!sourceUrl) continue;
  const ssUrls = parseSecondarySourceUrls(fm);
  if (ssUrls.includes(sourceUrl)) {
    dups.push({ file: path.relative(process.cwd(), file), url: sourceUrl });
  }
}

if (dups.length === 0) {
  console.log('✓ No sourceUrl ↔ secondarySources URL duplicates found.');
  process.exit(0);
}

console.error(`✗ Found ${dups.length} entries where sourceUrl is duplicated in secondarySources:\n`);
for (const d of dups) {
  console.error(`  ${d.file}`);
  console.error(`    ${d.url}`);
}
console.error(`\nFix: keep the URL in only one of sourceUrl or secondarySources[].url.`);
console.error(`See STYLE_GUIDE.md "Source Citation: sourceUrl vs secondarySources".`);

process.exit(STRICT ? 1 : 0);
