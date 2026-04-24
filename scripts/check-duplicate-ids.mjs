#!/usr/bin/env node
/**
 * check-duplicate-ids.mjs — Real duplicate-id detector for content collections
 *
 * Astro 5.17's glob-loader emits "Duplicate id" warnings as a false positive
 * whenever a file's content changes between syncs (incremental cache hit on
 * the previous entry vs. the freshly-loaded new entry). See
 * STYLE_GUIDE.md "Review Rule: Duplicate ID Warnings" for the root cause.
 *
 * Because that noise is indistinguishable from real id collisions, this
 * script independently verifies that, *within a single collection*, no two
 * source files normalize to the same id under Astro's id rules:
 *
 *   id = path/segment/.../githubSlug(filename-without-ext)
 *
 * github-slugger strips dots and other special chars, so e.g.
 *   sourceforge/2009-01-09-bitcoin-v0.1-released.md
 *   sourceforge/2009-01-09-bitcoin-v01-released.md
 * would resolve to the same id and silently overwrite each other.
 *
 * Collections checked (mirrors src/content.config.ts):
 *   - entries     -> src/data/entries/en
 *   - entries_ja  -> src/data/translations/ja
 *
 * Exits non-zero when any collection contains two files with the same id.
 */
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slug as githubSlug } from 'github-slugger';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const COLLECTIONS = [
  { name: 'entries', base: path.join(ROOT, 'src/data/entries/en') },
  { name: 'entries_ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

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

function computeId(absPath, base) {
  const rel = path.relative(base, absPath);
  const noExt = rel.replace(new RegExp(path.extname(rel) + '$'), '');
  const segments = noExt.split(path.sep).map(githubSlug);
  return segments.join('/').replace(/\/index$/, '');
}

let totalFiles = 0;
let collisionCount = 0;

for (const { name, base } of COLLECTIONS) {
  const files = walk(base);
  totalFiles += files.length;

  const idToFiles = new Map();
  for (const file of files) {
    const id = computeId(file, base);
    if (!idToFiles.has(id)) idToFiles.set(id, []);
    idToFiles.get(id).push(file);
  }

  for (const [id, members] of idToFiles) {
    if (members.length > 1) {
      collisionCount++;
      console.error(
        `Duplicate id "${id}" in collection "${name}" — ${members.length} files:`,
      );
      for (const m of members) {
        console.error(`  - ${path.relative(ROOT, m)}`);
      }
    }
  }
}

if (collisionCount > 0) {
  console.error(
    `\nFAIL: ${collisionCount} real id collision(s) found across ${totalFiles} file(s).`,
  );
  console.error(
    'These are NOT the Astro glob-loader incremental-cache false positive.',
  );
  console.error(
    'Two source files in the same collection normalize to the same id,',
  );
  console.error(
    'which will cause one to silently overwrite the other at build time.',
  );
  process.exit(1);
}

console.log(
  `✓ No real duplicate ids. Checked ${totalFiles} file(s) across ${COLLECTIONS.length} collection(s).`,
);
