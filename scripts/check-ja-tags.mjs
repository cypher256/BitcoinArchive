import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const entriesDir = path.resolve(repoRoot, 'src/data/entries/en');
const jaEntriesDir = path.resolve(repoRoot, 'src/data/translations/ja');
const tagsTsPath = path.resolve(repoRoot, 'src/i18n/tags.ts');
const participantsTsPath = path.resolve(repoRoot, 'src/i18n/participants.ts');

function walkMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  let currentKey = null;
  let currentArray = null;
  for (const line of match[1].split('\n')) {
    const kvMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (kvMatch) {
      if (currentKey && currentArray) fm[currentKey] = currentArray;
      currentKey = kvMatch[1];
      currentArray = null;
      const val = kvMatch[2].trim();
      if (val === '' || val === '[]') {
        fm[currentKey] = val === '[]' ? [] : undefined;
        currentArray = val === '' ? [] : null;
      } else {
        fm[currentKey] = val.replace(/^["']|["']$/g, '');
      }
    } else if (line.match(/^\s+-\s/) && currentKey) {
      if (!currentArray) currentArray = [];
      currentArray.push(line.trim().replace(/^-\s*/, '').replace(/^["']|["']$/g, ''));
    }
  }
  if (currentKey && currentArray) fm[currentKey] = currentArray;
  return fm;
}

function extractKeysFromTagTranslations() {
  const src = readFileSync(tagsTsPath, 'utf8');
  const keys = new Set();
  for (const m of src.matchAll(/^\s*'([^']+)':\s*'/gm)) {
    keys.add(m[1]);
  }
  return keys;
}

function extractParticipantSlugs() {
  let src;
  try {
    src = readFileSync(participantsTsPath, 'utf8');
  } catch {
    return new Set();
  }
  const slugs = new Set();
  for (const m of src.matchAll(/^\s*'([^']+)':\s*'/gm)) {
    slugs.add(m[1]);
  }
  return slugs;
}

const tagTranslationKeys = extractKeysFromTagTranslations();
const participantSlugs = extractParticipantSlugs();

const usageByTag = new Map();
let checkedFiles = 0;

for (const file of walkMarkdownFiles(entriesDir)) {
  const content = readFileSync(file, 'utf8');
  const fm = parseFrontmatter(content);
  checkedFiles += 1;
  if (!Array.isArray(fm.tags)) continue;
  for (const tag of fm.tags) {
    if (!usageByTag.has(tag)) usageByTag.set(tag, []);
    usageByTag.get(tag).push(path.relative(entriesDir, file));
  }
}

const missing = [];
for (const [tag, files] of usageByTag) {
  if (tagTranslationKeys.has(tag)) continue;
  if (participantSlugs.has(tag)) continue;
  missing.push({ tag, count: files.length, sample: files.slice(0, 3) });
}

missing.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));

if (missing.length > 0) {
  console.error(`JA tag translation check: ${missing.length} tag(s) lack a Japanese translation.`);
  console.error(`  (Define them in src/i18n/tags.ts → tagTranslations.)\n`);
  for (const { tag, count, sample } of missing) {
    console.error(`  - "${tag}"  (used in ${count} file${count === 1 ? '' : 's'})`);
    for (const f of sample) console.error(`      e.g. ${f}`);
  }
  process.exit(1);
}

// --- EN/JA per-entry tag parity -------------------------------------------
// Tags are locale-independent identifiers: the same raw strings must
// appear in an entry's EN file and its JA mirror (only the display label
// is translated, via tags.ts). Drift breaks page generation asymmetric-
// ally -- a tag present only in JA display entries produced a JA tag page
// whose EN counterpart 404'd from the language switch, and a tag present
// only on the EN side left the JA listing linking at a page that was
// never generated (production crawl, 2026-09-01: 3 drifted entries, 2
// broken links). Same class of gap, and same fix, as the
// inlineLinkKeywords EN/JA parity check in generate-keyword-index.mjs.
const tagDrift = [];
for (const enFile of walkMarkdownFiles(entriesDir)) {
  const rel = path.relative(entriesDir, enFile);
  const jaFile = path.join(jaEntriesDir, rel);
  let jaContent;
  try {
    jaContent = readFileSync(jaFile, 'utf8');
  } catch {
    continue; // missing JA mirror is a translation-coverage concern, not tag drift
  }
  const enTags = parseFrontmatter(readFileSync(enFile, 'utf8')).tags;
  const jaTags = parseFrontmatter(jaContent).tags;
  const enList = Array.isArray(enTags) ? enTags : [];
  const jaList = Array.isArray(jaTags) ? jaTags : [];
  const jaSet = new Set(jaList);
  const enSet = new Set(enList);
  const onlyEn = enList.filter((t) => !jaSet.has(t));
  const onlyJa = jaList.filter((t) => !enSet.has(t));
  if (onlyEn.length || onlyJa.length) tagDrift.push({ rel, onlyEn, onlyJa });
}

if (tagDrift.length > 0) {
  console.error(`\nEN/JA tag parity check: ${tagDrift.length} entr${tagDrift.length === 1 ? 'y has' : 'ies have'} drifted tag arrays.`);
  console.error(`  (An entry's EN file and its JA mirror must declare the same tag strings.)\n`);
  for (const { rel, onlyEn, onlyJa } of tagDrift) {
    console.error(`  - ${rel}`);
    if (onlyEn.length) console.error(`      EN only: ${onlyEn.map((t) => `"${t}"`).join(', ')}`);
    if (onlyJa.length) console.error(`      JA only: ${onlyJa.map((t) => `"${t}"`).join(', ')}`);
  }
  process.exit(1);
}

console.log(
  `JA tag translation check done. ${checkedFiles} files scanned, ${usageByTag.size} unique tag(s) — all translated, EN/JA parity OK.`,
);
