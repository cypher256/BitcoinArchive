#!/usr/bin/env node
/**
 * check-tweet-metadata.mjs — validate tweet primary-source entries.
 *
 * Enforces three invariants on every `type: tweet` entry:
 *   1. xHandle is present (required for the EntryMeta @handle badge
 *      and for the chip / commentary surfaces).
 *   2. xHandle format: bare handle (no leading "@"), [A-Za-z0-9_]{1,15}
 *      per X's own handle constraints.
 *   3. xHandle agrees with sourceUrl: the URL must be of the form
 *      https://(x|twitter).com/<handle>/status/<id> and the <handle>
 *      portion must equal xHandle (case-insensitive — X handles are
 *      case-insensitive identifiers).
 *
 * Runs over both EN (src/data/entries/en) and JA (src/data/translations/ja)
 * collections. Exits non-zero on any violation so `npm run check`
 * (and the CI build) fail visibly.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const COLLECTIONS = [
  join(REPO_ROOT, 'src/data/entries/en'),
  join(REPO_ROOT, 'src/data/translations/ja'),
];

const TWEET_URL_RE = /^https:\/\/(?:x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/\d+/;
const HANDLE_RE = /^[A-Za-z0-9_]{1,15}$/;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      out.push(...walk(full));
    } else if (st.isFile() && name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---\n', 4);
  if (end < 0) return null;
  const body = text.slice(4, end);
  const fm = {};
  for (const line of body.split('\n')) {
    const m = line.match(/^([a-zA-Z][a-zA-Z0-9]*):\s*"?(.*?)"?\s*$/);
    if (!m) continue;
    fm[m[1]] = m[2];
  }
  return fm;
}

const violations = [];

for (const root of COLLECTIONS) {
  const files = walk(root);
  for (const path of files) {
    const text = readFileSync(path, 'utf8');
    const fm = parseFrontmatter(text);
    if (!fm) continue;
    if (fm.type !== 'tweet') continue;

    const rel = relative(REPO_ROOT, path);

    if (!fm.xHandle || fm.xHandle === '') {
      violations.push(`${rel}: type=tweet but xHandle is missing`);
      continue;
    }
    if (!HANDLE_RE.test(fm.xHandle)) {
      violations.push(`${rel}: xHandle "${fm.xHandle}" is not a valid X handle (expected [A-Za-z0-9_]{1,15})`);
      continue;
    }
    const m = fm.sourceUrl && fm.sourceUrl.match(TWEET_URL_RE);
    if (!m) {
      violations.push(`${rel}: type=tweet but sourceUrl "${fm.sourceUrl}" is not a tweet URL (expected https://(x|twitter).com/<handle>/status/<id>)`);
      continue;
    }
    const handleInUrl = m[1];
    if (handleInUrl.toLowerCase() !== fm.xHandle.toLowerCase()) {
      violations.push(`${rel}: xHandle "${fm.xHandle}" does not match handle in sourceUrl "${handleInUrl}"`);
      continue;
    }
  }
}

if (violations.length > 0) {
  console.error(`Tweet metadata check: ${violations.length} violation(s).`);
  for (const v of violations) console.error(`  ${v}`);
  process.exit(1);
}

console.log('Tweet metadata check: all type=tweet entries have valid xHandle matching sourceUrl.');
