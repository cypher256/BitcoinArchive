#!/usr/bin/env node
/**
 * check-inline-link-coverage.mjs — Inline-link coverage reporter
 *
 * Goal: ensure analysis and biography pages are surfaced from the body
 * text of related entries, not just from `relatedEntries` frontmatter.
 *
 * Mechanism: each analysis/biography entry can declare
 *   inlineLinkKeywords: [...]
 * in its frontmatter. For every other entry in the SAME locale (en or ja),
 * if the body mentions any of those keywords but does not contain a
 * link to the source entry, this script reports it as an inline-link gap.
 *
 * The report is informational by default (always exits 0). Pass --strict
 * to exit non-zero when any gap is found (useful for CI gating later).
 *
 * Why this is not the same as relatedEntries:
 *   - relatedEntries surfaces a "see also" sidebar, not a body link.
 *   - Body inline links are what readers actually click while reading.
 *   - Adding analysis/biography to the body sweep is a recurring task.
 *
 * Per-locale handling:
 *   - EN entries are scanned against EN inlineLinkKeywords.
 *   - JA entries are scanned against JA inlineLinkKeywords.
 * The two collections do not cross-contaminate.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const COLLECTIONS = [
  {
    name: 'en',
    base: path.join(ROOT, 'src/data/entries/en'),
    linkPrefix: '/BitcoinArchive/entries/',
  },
  {
    name: 'ja',
    base: path.join(ROOT, 'src/data/translations/ja'),
    linkPrefix: '/BitcoinArchive/ja/entries/',
  },
];

const STRICT = process.argv.includes('--strict');

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

function splitFrontmatter(content) {
  if (!content.startsWith('---\n')) return { fm: '', body: content };
  const end = content.indexOf('\n---\n', 4);
  if (end < 0) return { fm: '', body: content };
  return { fm: content.slice(4, end), body: content.slice(end + 5) };
}

function parseInlineLinkKeywords(fm) {
  // Minimal YAML extraction — only what we need from inlineLinkKeywords.
  // Supports a list of double-quoted strings under `inlineLinkKeywords:`.
  const lines = fm.split('\n');
  const out = [];
  let inBlock = false;
  for (const line of lines) {
    if (/^inlineLinkKeywords\s*:\s*$/.test(line)) {
      inBlock = true;
      continue;
    }
    if (inBlock) {
      const m = line.match(/^\s*-\s*"((?:[^"\\]|\\.)*)"\s*$/) ||
                line.match(/^\s*-\s*'((?:[^'\\]|\\.)*)'\s*$/);
      if (m) {
        out.push(m[1]);
        continue;
      }
      // First non-list line ends the block
      if (/^\s*-\s/.test(line) || /^\s*$/.test(line)) continue;
      inBlock = false;
    }
  }
  return out;
}

function entryIdFromPath(absPath, base) {
  const rel = path.relative(base, absPath);
  return rel.replace(/\.md$/, '');
}

function maskNonProse(body) {
  // Blank out fenced code blocks and inline code so keyword hits inside
  // them don't trigger gap reports.
  let out = body.replace(/```[\s\S]*?```/g, (m) => ' '.repeat(m.length));
  out = out.replace(/`[^`\n]*`/g, (m) => ' '.repeat(m.length));
  return out;
}

function bodyLinksTo(body, entryId, linkPrefix) {
  // Match either trailing-slash or no-trailing-slash, with or without
  // outer href quoting. Use string includes for simplicity.
  return body.includes(linkPrefix + entryId + '/') ||
         body.includes(linkPrefix + entryId + ')') ||
         body.includes(linkPrefix + entryId + '#') ||
         body.includes(linkPrefix + entryId + '"');
}

function makeKeywordPattern(kw) {
  // Word-boundary anchoring: only enforce on sides whose terminal
  // character is ASCII alphanumeric. This prevents "5-day gap" from
  // matching inside "75-day gap" (digit-prefix collision) while still
  // allowing JA keywords like "脱帰属設計" to match without a Latin \b.
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefix = /[A-Za-z0-9]/.test(kw[0]) ? '(?<![A-Za-z0-9])' : '';
  const suffix = /[A-Za-z0-9]/.test(kw[kw.length - 1]) ? '(?![A-Za-z0-9])' : '';
  return new RegExp(prefix + escaped + suffix);
}

let totalSources = 0;
let totalGaps = 0;
const gapsByLocale = { en: 0, ja: 0 };

for (const { name, base, linkPrefix } of COLLECTIONS) {
  const files = walk(base);
  // First pass: gather sources (entries with inlineLinkKeywords)
  const sources = [];
  const fileToBody = new Map();
  const fileToType = new Map();

  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const { fm, body } = splitFrontmatter(content);
    fileToBody.set(file, maskNonProse(body));
    const typeMatch = fm.match(/^type\s*:\s*"([^"]+)"\s*$/m);
    if (typeMatch) fileToType.set(file, typeMatch[1]);
    const kw = parseInlineLinkKeywords(fm);
    if (kw.length > 0) {
      sources.push({
        file,
        id: entryIdFromPath(file, base),
        keywords: kw,
        keywordPatterns: kw.map((k) => ({ kw: k, re: makeKeywordPattern(k) })),
      });
    }
  }
  totalSources += sources.length;

  if (sources.length === 0) continue;

  console.log(`\n=== Locale: ${name} (${sources.length} source entries with inlineLinkKeywords) ===`);

  for (const src of sources) {
    const gaps = [];
    for (const file of files) {
      if (file === src.file) continue;
      const body = fileToBody.get(file);
      if (bodyLinksTo(body, src.id, linkPrefix)) continue;
      const matched = src.keywordPatterns
        .filter((kp) => kp.re.test(body))
        .map((kp) => kp.kw);
      if (matched.length === 0) continue;
      gaps.push({
        targetId: entryIdFromPath(file, base),
        targetFile: path.relative(ROOT, file),
        keywords: matched,
      });
    }
    if (gaps.length === 0) continue;
    console.log(`\n  Source: ${src.id}`);
    console.log(`    keywords: ${src.keywords.map((k) => JSON.stringify(k)).join(', ')}`);
    console.log(`    gaps: ${gaps.length}`);
    for (const g of gaps) {
      console.log(`      - ${g.targetFile}`);
      console.log(`          matched: ${g.keywords.map((k) => JSON.stringify(k)).join(', ')}`);
    }
    totalGaps += gaps.length;
    gapsByLocale[name] += gaps.length;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Sources: ${totalSources} (entries with inlineLinkKeywords)`);
console.log(`Gaps: ${totalGaps} total (en=${gapsByLocale.en}, ja=${gapsByLocale.ja})`);

if (totalGaps === 0) {
  console.log('✓ No inline-link gaps detected.');
}

if (STRICT && totalGaps > 0) {
  console.error('\nFAIL: --strict was set and gaps exist.');
  process.exit(1);
}
process.exit(0);
