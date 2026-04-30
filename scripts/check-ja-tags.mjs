import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const entriesDir = path.resolve(repoRoot, 'src/data/entries/en');
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

console.log(
  `JA tag translation check done. ${checkedFiles} files scanned, ${usageByTag.size} unique tag(s) — all translated.`,
);
