#!/usr/bin/env node
/**
 * audit-seo.mjs — SEO / AIO / human-readability audit for all entries
 *
 * Read-only inspection. Does not modify any files.
 *
 * Reports:
 *   - title too long (SERP truncation risk)
 *   - description missing / too short / too long
 *   - description duplicates across entries (templated copy-paste)
 *
 * Thresholds tuned for both EN and JA:
 *   - title chars > 80      (covers EN ~60 chars and JA mixed)
 *   - description chars < 50  (too short, weak SERP snippet)
 *   - description chars > 200 (too long, gets truncated; lead keywords lost)
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

const TITLE_MAX = 80;
const DESC_MIN = 50;
const DESC_MAX = 200;

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

console.log('=== SEO / AIO Audit ===\n');
for (const lang of ['en', 'ja']) {
  const r = reportByLang[lang];
  console.log(`--- Locale: ${lang} (${r.total} files) ---`);
  console.log(`  Title too long  (> ${TITLE_MAX} chars): ${pad(r.issues.titleTooLong.length)}`);
  console.log(`  Description missing            : ${pad(r.issues.descMissing.length)}`);
  console.log(`  Description too short (< ${DESC_MIN}) : ${pad(r.issues.descTooShort.length)}`);
  console.log(`  Description too long  (> ${DESC_MAX}): ${pad(r.issues.descTooLong.length)}`);
  console.log(`  Description duplicate clusters : ${pad(r.descDuplicates.length)}`);
  console.log('');
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
