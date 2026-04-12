#!/usr/bin/env node
/**
 * check-internal-links.mjs — Internal link checker for markdown bodies
 *
 * Scans all entry / translation markdown files for internal links
 * ](/BitcoinArchive/...) and verifies that each link target corresponds
 * to an entry, participant, source, thread, or static asset that will
 * exist at build time.
 *
 * Detects broken links caused by:
 *   - Entry file renames (slug changed)
 *   - Deleted entries still referenced in other bodies
 *   - Typos in hand-written links
 *   - Mixed lang links (EN body linking to /ja/... or vice versa)
 *
 * URL patterns recognized:
 *   /BitcoinArchive/[ja/]entries/{...}/        — entry individual page
 *   /BitcoinArchive/[ja/]entries/threads/{...}/ — thread collection page
 *   /BitcoinArchive/[ja/]participants/{slug}/   — participant collection page
 *   /BitcoinArchive/[ja/]sources/{source}/      — source collection page
 *   /BitcoinArchive/documents/{file}            — static document (public/)
 *   /BitcoinArchive/images/{file}               — static image (public/)
 *
 * Usage:
 *   node scripts/check-internal-links.mjs
 *
 * Exit codes:
 *   0 — all internal links resolve
 *   1 — at least one broken link found
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import path from 'path';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const PUBLIC_DIR = 'public';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (full.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = { participants: [], tags: [], relatedEntries: [] };
  const fmText = m[1];
  const lines = fmText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const simple = line.match(/^(\w[\w-]*):\s*"?([^"\n]*?)"?\s*$/);
    if (simple) {
      const key = simple[1];
      const val = simple[2].trim();
      if (key === 'type' || key === 'source' || key === 'author' || key === 'title') {
        fm[key] = val;
      }
    }
    if (/^participants:/.test(line)) {
      let j = i + 1;
      let cur = null;
      while (j < lines.length && /^(  -|    )/.test(lines[j])) {
        const l = lines[j];
        if (/^  - name:/.test(l)) {
          if (cur) fm.participants.push(cur);
          cur = { name: null, slug: null };
          const nm = l.match(/^  - name:\s*"(.+?)"/);
          if (nm) cur.name = nm[1];
        } else if (cur && /^    slug:/.test(l)) {
          const sm = l.match(/^    slug:\s*"(.+?)"/);
          if (sm) cur.slug = sm[1];
        }
        j++;
      }
      if (cur) fm.participants.push(cur);
    }
    if (/^relatedEntries:/.test(line)) {
      let j = i + 1;
      while (j < lines.length && /^  - /.test(lines[j])) {
        const m = lines[j].match(/^  -\s*"?([^"\s]+)"?\s*$/);
        if (m) fm.relatedEntries.push(m[1]);
        j++;
      }
    }
  }
  return fm;
}

// Mimic Astro's slug generation for content collections with glob loader.
// Astro uses the filename (without .md) as the slug, but collapses dots.
// Directory structure becomes the hierarchical part of the id.
// Entry id = relativePath without trailing .md, with dots removed from basename.
function computeEntryId(relPath) {
  // relPath like "forum/bitcointalk/topic-202/2010-07-01-llama-msg1920.md"
  const withoutExt = relPath.replace(/\.md$/, '');
  const parts = withoutExt.split(path.sep);
  const basename = parts.pop();
  // Dots in basename are removed (Astro behavior we saw in algolia-index.mjs)
  const cleanBasename = basename.replaceAll('.', '');
  return [...parts, cleanBasename].join('/');
}

// ---------------------------------------------------------------------------
// Build set of valid URLs and relatedEntries index
// ---------------------------------------------------------------------------

const validPaths = new Set();
// Map<entryId, { file, relatedEntries, threadId, lang }>
// Keyed by entryId (lang-agnostic). We store one entry per id per lang.
const enEntries = new Map();  // id -> { file, relatedEntries, threadId }
const jaEntries = new Map();

function resolveThreadIdFromEntryId(id) {
  const idParts = id.split('/');
  if (idParts[0] === 'forum' && idParts.length >= 4) {
    return idParts.slice(0, 3).join('/');
  }
  if (idParts[0] === 'emails' && idParts.length >= 4) {
    return idParts.slice(0, 3).join('/');
  }
  if (idParts[0] === 'correspondence' && idParts.length >= 3) {
    if (idParts.length >= 4) return idParts.slice(0, 3).join('/');
    return idParts.slice(0, 2).join('/');
  }
  return null;
}

function addEntry(baseDir, lang) {
  const files = walk(baseDir);
  const langPrefix = lang === 'ja' ? '/ja' : '';
  const store = lang === 'ja' ? jaEntries : enEntries;

  for (const file of files) {
    const rel = path.relative(baseDir, file);
    const id = computeEntryId(rel);

    const content = readFileSync(file, 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm) {
      validPaths.add(`${langPrefix}/entries/${id}/`);
      continue;
    }

    // Biography entries are NOT routed at /entries/{id}/ — they live at
    // /participants/{slug}/ only. See entries/[...slug].astro which filters
    // out type === 'biography'. So we do not add the /entries/ path for
    // biography entries; validators must route them via /participants/.
    const isBiography = fm.type === 'biography';
    if (!isBiography) {
      validPaths.add(`${langPrefix}/entries/${id}/`);
    }

    for (const p of fm.participants) {
      if (p.slug) validPaths.add(`${langPrefix}/participants/${p.slug}/`);
    }
    if (fm.source) validPaths.add(`${langPrefix}/sources/${fm.source}/`);

    const threadId = resolveThreadIdFromEntryId(id);
    if (threadId) {
      validPaths.add(`${langPrefix}/entries/threads/${threadId}/`);
    }

    store.set(id, {
      file: path.relative(process.cwd(), file),
      relatedEntries: fm.relatedEntries || [],
      threadId,
      type: fm.type,
      isBiography,
    });
  }
}

console.log('Building valid URL index...');
addEntry(EN_DIR, 'en');
addEntry(JA_DIR, 'ja');

// Also add static assets under public/
function walkPublic(dir, prefix = '') {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const rel = prefix ? `${prefix}/${entry}` : `/${entry}`;
    if (statSync(full).isDirectory()) {
      validPaths.add(`${rel}/`);
      walkPublic(full, rel);
    } else {
      validPaths.add(rel);
    }
  }
}
walkPublic(PUBLIC_DIR);

console.log(`  ${validPaths.size} valid paths indexed`);

// ---------------------------------------------------------------------------
// Scan all markdown files for internal links
// ---------------------------------------------------------------------------

const BASE_PATTERN = /\]\(\/BitcoinArchive(\/[^)#]*?)(#[^)]*)?\)/g;

function scanLinks() {
  const broken = [];
  const mixedLang = [];
  const allFiles = [
    ...walk(EN_DIR).map(f => ({ file: f, lang: 'en' })),
    ...walk(JA_DIR).map(f => ({ file: f, lang: 'ja' })),
  ];
  let totalLinks = 0;

  for (const { file, lang } of allFiles) {
    const content = readFileSync(file, 'utf-8');
    // Strip frontmatter — only check body
    const bodyStart = content.indexOf('\n---\n', 4);
    const body = bodyStart > 0 ? content.slice(bodyStart + 5) : content;

    let match;
    BASE_PATTERN.lastIndex = 0;
    while ((match = BASE_PATTERN.exec(body)) !== null) {
      totalLinks++;
      const target = match[1];
      const upto = body.slice(0, match.index);
      const lineNum = upto.split('\n').length;
      const relFile = path.relative(process.cwd(), file);

      // Rule 1: target must exist in validPaths
      if (!validPaths.has(target)) {
        broken.push({ file: relFile, line: lineNum, target });
        continue;
      }

      // Rule 2: locale must match the file's language.
      // - EN files may only link to paths NOT starting with /ja/
      //   (allowed: /entries/..., /participants/..., /documents/..., /images/...)
      // - JA files may only link to paths starting with /ja/ OR to locale-agnostic
      //   static assets (/documents/..., /images/...)
      const isJaPath = target.startsWith('/ja/');
      const isStaticAsset = target.startsWith('/documents/') || target.startsWith('/images/');

      if (lang === 'en' && isJaPath) {
        mixedLang.push({
          file: relFile,
          line: lineNum,
          target,
          reason: 'EN file linking to /ja/... — use EN path instead',
        });
      } else if (lang === 'ja' && !isJaPath && !isStaticAsset) {
        mixedLang.push({
          file: relFile,
          line: lineNum,
          target,
          reason: 'JA file linking to EN path — use /ja/... instead',
        });
      }
    }
  }

  return { broken, mixedLang, totalLinks };
}

console.log('Scanning markdown bodies for internal links...');
const { broken, mixedLang, totalLinks } = scanLinks();
console.log(`  ${totalLinks} internal links scanned`);
console.log();

// ---------------------------------------------------------------------------
// Validate relatedEntries frontmatter (EN drives, JA must mirror)
// ---------------------------------------------------------------------------
// Rules:
//   1. Target entry id must exist in EN collection
//   2. No self-reference
//   3. Bidirectional: if A lists B, B must list A
//   4. No thread-internal relations
//   5. Max 10 per file
//   6. JA file must declare the same relatedEntries as its EN mirror

const MAX_RELATED = 10;
const relatedIssues = [];

console.log('Validating relatedEntries frontmatter...');

for (const [id, entry] of enEntries) {
  const related = entry.relatedEntries;
  if (related.length === 0) continue;

  if (related.length > MAX_RELATED) {
    relatedIssues.push({
      file: entry.file,
      issue: `relatedEntries has ${related.length} items (max ${MAX_RELATED}). Use tags for broader grouping.`,
    });
  }

  for (const target of related) {
    if (!enEntries.has(target)) {
      relatedIssues.push({
        file: entry.file,
        issue: `relatedEntries target does not exist: "${target}"`,
      });
      continue;
    }
    if (target === id) {
      relatedIssues.push({
        file: entry.file,
        issue: `relatedEntries contains self-reference: "${target}"`,
      });
      continue;
    }
    const targetEntry = enEntries.get(target);
    if (!targetEntry.relatedEntries.includes(id)) {
      relatedIssues.push({
        file: entry.file,
        issue: `relatedEntries not bidirectional: "${target}" does not list "${id}" back`,
      });
    }
    if (entry.threadId && targetEntry.threadId && entry.threadId === targetEntry.threadId) {
      relatedIssues.push({
        file: entry.file,
        issue: `relatedEntries points within the same thread ("${entry.threadId}"): "${target}". Use threads instead.`,
      });
    }
  }
}

for (const [id, jaEntry] of jaEntries) {
  const enEntry = enEntries.get(id);
  if (!enEntry) continue;
  const enSet = new Set(enEntry.relatedEntries);
  const jaSet = new Set(jaEntry.relatedEntries);
  if (enSet.size !== jaSet.size || [...enSet].some(x => !jaSet.has(x))) {
    relatedIssues.push({
      file: jaEntry.file,
      issue: `JA relatedEntries does not match EN mirror. EN: [${[...enSet].join(', ')}] JA: [${[...jaSet].join(', ')}]`,
    });
  }
}

const totalRelated = [...enEntries.values()].reduce((s, e) => s + e.relatedEntries.length, 0);
console.log(`  ${totalRelated} relatedEntries references validated`);
console.log();

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

let exitCode = 0;

if (broken.length > 0) {
  console.error(`✗ Found ${broken.length} broken internal link(s):\n`);
  for (const b of broken) {
    console.error(`  ${b.file}:${b.line}`);
    console.error(`    ${b.target}`);
    console.error();
  }
  exitCode = 1;
}

if (mixedLang.length > 0) {
  console.error(`✗ Found ${mixedLang.length} mixed-language link(s):\n`);
  for (const m of mixedLang) {
    console.error(`  ${m.file}:${m.line}`);
    console.error(`    ${m.target}`);
    console.error(`    ${m.reason}`);
    console.error();
  }
  exitCode = 1;
}

if (relatedIssues.length > 0) {
  console.error(`✗ Found ${relatedIssues.length} relatedEntries issue(s):\n`);
  for (const r of relatedIssues) {
    console.error(`  ${r.file}`);
    console.error(`    ${r.issue}`);
    console.error();
  }
  exitCode = 1;
}

if (exitCode === 0) {
  console.log(`✓ All ${totalLinks} internal links resolve and match file locale`);
  if (totalRelated > 0) {
    console.log(`✓ All ${totalRelated} relatedEntries references valid (bidirectional, non-self, non-thread, ≤${MAX_RELATED})`);
  }
} else {
  console.error(`Total: ${broken.length} broken, ${mixedLang.length} mixed-lang, ${relatedIssues.length} related-issue / ${totalLinks} links`);
}

process.exit(exitCode);
