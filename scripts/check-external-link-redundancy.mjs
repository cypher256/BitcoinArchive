#!/usr/bin/env node
/**
 * check-external-link-redundancy.mjs — flags external links in entry bodies
 * that point to a URL the archive already covers as an internal entry.
 *
 * Each entry's `sourceUrl` is the canonical external reference for that
 * entry. When another entry's body markdown links to that exact URL using
 * `[text](https://...)`, the reader is sent out to the external source
 * even though the archive itself has a dedicated internal entry. Those
 * body links should be redirected to the internal entry path.
 *
 * Reports each finding with the source file, the file-relative line number,
 * the link text, the external URL, and the internal entry id that should
 * replace it. Same-language preference: a JA body links to the JA mirror,
 * an EN body to EN. When multiple internal entries share the same
 * sourceUrl, all candidates are listed and the human picks; the script
 * never silently auto-selects across distinct entries.
 *
 * Excludes:
 *   - Frontmatter links (only body markdown is scanned)
 *   - Self-links (an entry's body using its own sourceUrl)
 *   - Biography entries (routed via /participants/{slug}/, not /entries/)
 *   - URLs in EXCLUDE_URLS (known false positives — generic Wikipedia
 *     biographies that happen to be reused as a sourceUrl, root-level
 *     incidental matches, etc.)
 *
 * Usage:
 *   node scripts/check-external-link-redundancy.mjs           # informational
 *   node scripts/check-external-link-redundancy.mjs --strict  # exit 1 on findings
 *
 * Exit codes:
 *   0 — no findings (or running without --strict)
 *   1 — at least one finding (only when --strict is passed)
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import path from 'path';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';

// Known false positives. Each URL listed here is a sourceUrl that
// other entries also link to as a generic external reference, where
// redirecting the body link to the matched internal entry would be
// semantically misleading. Add a comment explaining why each is here.
const EXCLUDE_URLS = new Set([
  // Wikipedia biography pages reused as sourceUrl by aftermath entries
  // about specific events involving that person. The body links from
  // analysis entries that just want a generic Wikipedia bio link are
  // not asking to be redirected to an event-specific aftermath.
  'https://en.wikipedia.org/wiki/Gavin_Andresen',
  'https://en.wikipedia.org/wiki/Len_Sassaman',
  'https://en.wikipedia.org/wiki/Satoshi_Nakamoto',
  // BitcoinTalk root URL — too generic; matches any entry whose
  // sourceUrl is bitcointalk.org/ exactly (not a specific thread).
  'https://bitcointalk.org/',
  // Bas van Dorst's "Where is Satoshi?" repository is the sourceUrl for
  // both the aftermath entry (the primary record of the project's release)
  // and the Bitcoin Institute reanalysis entry (which analyzes the same
  // project's published data). Body links from the aftermath to the GitHub
  // page should remain external (linking out to the source).
  'https://github.com/basvandorst/where-is-satoshi',
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walk(dir) {
  const out = [];
  if (!statSync(dir, { throwIfNoEntry: false })) return out;
  for (const e of readdirSync(dir)) {
    const full = path.join(dir, e);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

function getFrontmatterField(fmText, field) {
  const re = new RegExp(`^${field}:\\s*"([^"]+)"`, 'm');
  const m = fmText.match(re);
  return m ? m[1] : null;
}

function entryIdFromFile(file) {
  const baseDir = file.startsWith(JA_DIR) ? JA_DIR : EN_DIR;
  return path.relative(baseDir, file).replace(/\.md$/, '');
}

// ---------------------------------------------------------------------------
// Build sourceUrl → entry index
// ---------------------------------------------------------------------------

const allFiles = [...walk(EN_DIR), ...walk(JA_DIR)];

// Map<url, [{ id, lang, file }, ...]>
const urlIndex = new Map();
for (const f of allFiles) {
  const c = readFileSync(f, 'utf-8');
  const fmMatch = c.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const sourceUrl = getFrontmatterField(fm, 'sourceUrl');
  if (!sourceUrl) continue;

  // Biographies route via /participants/{slug}/, not /entries/{id}/, so
  // a body link to the biography sourceUrl can't sensibly be redirected
  // to an /entries/ path.
  const type = getFrontmatterField(fm, 'type');
  if (type === 'biography') continue;

  const lang = f.startsWith(JA_DIR) ? 'ja' : 'en';
  const id = entryIdFromFile(f);

  if (!urlIndex.has(sourceUrl)) urlIndex.set(sourceUrl, []);
  urlIndex.get(sourceUrl).push({ id, lang, file: f });
}

// ---------------------------------------------------------------------------
// Scan all bodies for external markdown links matching any indexed URL
// ---------------------------------------------------------------------------

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

const findings = [];
for (const f of allFiles) {
  const c = readFileSync(f, 'utf-8');
  const fmEnd = c.indexOf('\n---\n', 4);
  const bodyStart = fmEnd > 0 ? fmEnd + 5 : 0;
  const body = c.slice(bodyStart);

  const lang = f.startsWith(JA_DIR) ? 'ja' : 'en';
  const selfId = entryIdFromFile(f);

  LINK_RE.lastIndex = 0;
  let m;
  while ((m = LINK_RE.exec(body)) !== null) {
    const text = m[1];
    const url = m[2];
    if (EXCLUDE_URLS.has(url)) continue;
    if (!urlIndex.has(url)) continue;

    // Drop self-links from candidates first, then pick same-language preference
    // from what remains. If multiple distinct entries share this sourceUrl,
    // we report all of them — the human chooses, the script does not guess.
    const all = urlIndex.get(url).filter(e => e.id !== selfId);
    if (all.length === 0) continue;
    const sameLang = all.filter(e => e.lang === lang);
    const targets = sameLang.length > 0 ? sameLang : all;

    // File-relative line number (not body-relative): so that grep / editors /
    // GitHub line links land on the actual line in the file.
    const absIndex = bodyStart + m.index;
    const lineNo = c.slice(0, absIndex).split('\n').length;

    findings.push({
      file: path.relative(process.cwd(), f),
      line: lineNo,
      text,
      url,
      candidates: targets.map(t => t.id),
      ambiguous: targets.length > 1,
      lang,
    });
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const strict = process.argv.includes('--strict');

if (findings.length === 0) {
  console.log(`✓ No external-link redundancies. ${urlIndex.size} sourceUrls indexed.`);
  process.exit(0);
}

console.error(`⚠ Found ${findings.length} external link(s) where an internal archive entry exists:\n`);
for (const f of findings) {
  console.error(`  ${f.file}:${f.line}`);
  console.error(`    text: "${f.text.slice(0, 80)}"`);
  console.error(`    external: ${f.url}`);
  if (f.ambiguous) {
    console.error(`    ambiguous — multiple internal entries share this sourceUrl, pick one:`);
    for (const c of f.candidates) console.error(`      - ${c}`);
  } else {
    console.error(`    should link to: ${f.candidates[0]}`);
  }
  console.error();
}

if (strict) {
  console.error(`✗ ${findings.length} redundant external link(s) (strict mode).`);
  process.exit(1);
}

console.error(`(informational; pass --strict to fail on findings, or add a URL to EXCLUDE_URLS to suppress)`);
process.exit(0);
