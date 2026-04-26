#!/usr/bin/env node
/**
 * audit-seo.mjs — SEO / AIO / human-readability audit for all entries
 *
 * Read-only inspection. Does not modify any files.
 *
 * ## Policy (per maintainer guidance, 2026)
 *
 * Description:
 *   - Length per se is NOT a SEO concern. Modern search engines weight
 *     description as a snippet hint, not a ranking signal; SERP
 *     truncation is purely cosmetic. Long or short descriptions on
 *     this archive are acceptable.
 *   - Duplicate descriptions across entries are acceptable when the
 *     entries are genuinely variations of the same thing (thread
 *     replies, bulk-imported records of one event, etc.). Templated
 *     copy is an integrity question, not an SEO one.
 *   - INACCURATE description content IS a real defect — the page
 *     describes itself wrongly. That is a page-level correctness
 *     issue, not an SEO issue, and must be fixed when found. This
 *     audit cannot detect inaccuracy; manual review per entry.
 *
 * Title:
 *   - Length per se is NOT a SEO concern. Search engines read the
 *     full title regardless of SERP truncation.
 *   - BUT: the portion that survives SERP truncation (~roughly the
 *     first 30 full-width JA chars or first 60 half-width EN chars)
 *     MUST carry enough information for a human to know what the
 *     entry is about. If the essence (who / what / which event) only
 *     arrives in trailing tokens, the truncated SERP card becomes
 *     unparseable, and a Japanese reader who does not parse English
 *     loses the whole identification. This is the real bar.
 *   - That bar is a human judgment call this audit cannot enforce
 *     mechanically. The length report below is left in as an
 *     informational signal — it surfaces titles that may need a
 *     manual front-loading review, not titles that need shortening.
 *
 * The numeric thresholds below are therefore informational only.
 * They are NOT violation lines. Treat the report as a list of
 * candidates for manual review, not as a list of bugs to fix.
 *
 * Reports (informational, no exit code change):
 *   - title length signals (long titles to spot-check for front-loading)
 *   - description length signals (very short / very long, for sanity)
 *   - description duplicate clusters (for integrity spot-check)
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const COLLECTIONS = [
  { lang: 'en', base: path.join(ROOT, 'src/data/entries/en') },
  { lang: 'ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

// Informational thresholds — see file header. NOT violation lines.
// These exist to surface candidates for manual review, not bugs.
const TITLE_MAX = 80;   // EN/JA mixed; flags titles that likely truncate in SERP
const DESC_MIN = 50;    // very short descriptions worth spot-checking for accuracy
const DESC_MAX = 200;   // very long descriptions worth spot-checking for content drift

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
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---\n', 4);
  if (end < 0) return null;
  return content.slice(4, end);
}

function parseScalar(fm, key) {
  // Match: key: "value" with escaped quotes, or 'value', or bare value on same line
  const reD = new RegExp(`^${key}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*$`, 'm');
  const reS = new RegExp(`^${key}\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'\\s*$`, 'm');
  const reB = new RegExp(`^${key}\\s*:\\s*([^\\n]+?)\\s*$`, 'm');
  const m = fm.match(reD) || fm.match(reS);
  if (m) return m[1].replace(/\\"/g, '"').replace(/\\'/g, "'");
  const m2 = fm.match(reB);
  if (m2 && !m2[1].includes(':')) return m2[1];
  return null;
}

function chars(s) {
  return [...(s || '')].length;
}

const reportByLang = {};

for (const { lang, base } of COLLECTIONS) {
  const files = walk(base);
  const issues = {
    titleTooLong: [],
    descMissing: [],
    descTooShort: [],
    descTooLong: [],
  };
  const descToFiles = new Map();

  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const fm = splitFrontmatter(content);
    if (!fm) continue;
    const title = parseScalar(fm, 'title') || '';
    const description = parseScalar(fm, 'description') || '';
    const rel = path.relative(ROOT, file);
    const titleLen = chars(title);
    const descLen = chars(description);

    if (titleLen > TITLE_MAX) {
      issues.titleTooLong.push({ rel, len: titleLen, value: title });
    }
    if (!description) {
      issues.descMissing.push({ rel });
    } else {
      if (descLen < DESC_MIN) issues.descTooShort.push({ rel, len: descLen, value: description });
      if (descLen > DESC_MAX) issues.descTooLong.push({ rel, len: descLen, value: description });
      const norm = description.trim();
      if (!descToFiles.has(norm)) descToFiles.set(norm, []);
      descToFiles.get(norm).push(rel);
    }
  }

  const descDuplicates = [];
  for (const [d, fs] of descToFiles) {
    if (fs.length > 1) descDuplicates.push({ count: fs.length, sample: d.slice(0, 80), files: fs });
  }

  reportByLang[lang] = {
    total: files.length,
    issues,
    descDuplicates,
  };
}

function pad(n, w = 5) {
  return String(n).padStart(w, ' ');
}

console.log('=== SEO / AIO Audit (informational; not violations) ===');
console.log('See file header for policy. Length is not a defect; review for');
console.log('content accuracy and front-loading of titles.\n');
for (const lang of ['en', 'ja']) {
  const r = reportByLang[lang];
  console.log(`--- Locale: ${lang} (${r.total} files) ---`);
  console.log(`  Long titles    (> ${TITLE_MAX} chars, review for front-loading): ${pad(r.issues.titleTooLong.length)}`);
  console.log(`  Description missing                                 : ${pad(r.issues.descMissing.length)}`);
  console.log(`  Description very short (< ${DESC_MIN}, spot-check accuracy)  : ${pad(r.issues.descTooShort.length)}`);
  console.log(`  Description very long  (> ${DESC_MAX}, spot-check content) : ${pad(r.issues.descTooLong.length)}`);
  console.log(`  Description duplicate clusters (integrity spot-check): ${pad(r.descDuplicates.length)}`);
  console.log('');
}

// --check-titles: front-loading review mode for long titles.
// Splits each long title at the SERP-truncation point (EN ~60 half-width,
// JA ~30 full-width) and shows the visible portion + the tail. Lets a
// reviewer judge whether the essence is in the visible portion.
const CHECK_TITLES = process.argv.includes('--check-titles');
if (CHECK_TITLES) {
  const SERP_EN = 60;
  const SERP_JA = 30;
  for (const lang of ['en', 'ja']) {
    const r = reportByLang[lang];
    if (r.issues.titleTooLong.length === 0) continue;
    const cut = lang === 'en' ? SERP_EN : SERP_JA;
    console.log(`\n========== Title front-loading review: ${lang} (${r.issues.titleTooLong.length} titles, cut at ~${cut} chars) ==========`);
    for (const x of r.issues.titleTooLong.sort((a,b)=>b.len-a.len)) {
      const cps = [...x.value];
      const visible = cps.slice(0, cut).join('');
      const tail = cps.slice(cut).join('');
      console.log(`\n  ${x.rel}  (len=${x.len})`);
      console.log(`    VISIBLE  : ${visible}`);
      console.log(`    TRUNCATED: ${tail}`);
    }
  }
  process.exit(0);
}

const VERBOSE = process.argv.includes('--verbose') || process.argv.includes('-v');
if (VERBOSE) {
  for (const lang of ['en', 'ja']) {
    const r = reportByLang[lang];
    console.log(`\n========== Detailed: ${lang} ==========\n`);
    if (r.issues.titleTooLong.length) {
      console.log(`-- Title too long (${r.issues.titleTooLong.length}) --`);
      for (const x of r.issues.titleTooLong.sort((a,b)=>b.len-a.len).slice(0, 30)) {
        console.log(`  [${x.len}]  ${x.rel}`);
        console.log(`         ${x.value}`);
      }
      if (r.issues.titleTooLong.length > 30) console.log(`  ... and ${r.issues.titleTooLong.length - 30} more`);
      console.log('');
    }
    if (r.issues.descMissing.length) {
      console.log(`-- Description missing (${r.issues.descMissing.length}) --`);
      for (const x of r.issues.descMissing.slice(0, 30)) console.log(`  ${x.rel}`);
      if (r.issues.descMissing.length > 30) console.log(`  ... and ${r.issues.descMissing.length - 30} more`);
      console.log('');
    }
    if (r.issues.descTooShort.length) {
      console.log(`-- Description too short (${r.issues.descTooShort.length}) --`);
      for (const x of r.issues.descTooShort.sort((a,b)=>a.len-b.len).slice(0, 30)) {
        console.log(`  [${x.len}]  ${x.rel}`);
        console.log(`         ${x.value}`);
      }
      if (r.issues.descTooShort.length > 30) console.log(`  ... and ${r.issues.descTooShort.length - 30} more`);
      console.log('');
    }
    if (r.issues.descTooLong.length) {
      console.log(`-- Description too long (${r.issues.descTooLong.length}) --`);
      for (const x of r.issues.descTooLong.sort((a,b)=>b.len-a.len).slice(0, 30)) {
        console.log(`  [${x.len}]  ${x.rel}`);
        console.log(`         ${x.value}`);
      }
      if (r.issues.descTooLong.length > 30) console.log(`  ... and ${r.issues.descTooLong.length - 30} more`);
      console.log('');
    }
    if (r.descDuplicates.length) {
      console.log(`-- Description duplicate clusters (${r.descDuplicates.length}) --`);
      for (const c of r.descDuplicates.sort((a,b)=>b.count-a.count).slice(0, 20)) {
        console.log(`  count=${c.count}  sample: ${c.sample}`);
        for (const f of c.files.slice(0, 3)) console.log(`         ${f}`);
        if (c.files.length > 3) console.log(`         ... and ${c.files.length - 3} more`);
      }
      if (r.descDuplicates.length > 20) console.log(`  ... and ${r.descDuplicates.length - 20} more clusters`);
      console.log('');
    }
  }
}
