import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const jaDir = path.resolve(repoRoot, 'src/data/translations/ja');
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

function loadJaSlugMapKeys() {
  const src = readFileSync(participantsTsPath, 'utf8');
  const m = src.match(/participantDisplayNamesJaBySlug[^=]+=\s*\{([\s\S]*?)\n\};/);
  if (!m) {
    throw new Error('Failed to parse participantDisplayNamesJaBySlug from participants.ts');
  }
  const keys = new Set();
  for (const km of m[1].matchAll(/^\s*'([^']+)':\s*'/gm)) {
    keys.add(km[1]);
  }
  return keys;
}

function extractParticipantSlugs(frontmatter) {
  const slugs = [];
  let inParticipants = false;
  for (const line of frontmatter.split('\n')) {
    if (/^participants:/.test(line)) {
      inParticipants = true;
      continue;
    }
    if (inParticipants && /^[a-zA-Z]/.test(line)) {
      inParticipants = false;
    }
    if (inParticipants) {
      const m = line.match(/^\s*slug:\s*["']([^"']+)["']/);
      if (m) slugs.push(m[1]);
    }
  }
  return slugs;
}

const jaSlugKeys = loadJaSlugMapKeys();

const usageBySlug = new Map();
let checkedFiles = 0;

for (const file of walkMarkdownFiles(jaDir)) {
  const content = readFileSync(file, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;
  checkedFiles += 1;
  for (const slug of extractParticipantSlugs(fmMatch[1])) {
    if (!usageBySlug.has(slug)) usageBySlug.set(slug, []);
    usageBySlug.get(slug).push(path.relative(jaDir, file));
  }
}

const missing = [];
for (const [slug, files] of usageBySlug) {
  if (jaSlugKeys.has(slug)) continue;
  missing.push({ slug, count: files.length, sample: files.slice(0, 3) });
}

missing.sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));

if (missing.length > 0) {
  console.error(`JA participant-slug check: ${missing.length} slug(s) lack a JA mapping.`);
  console.error(`  (Add them to participantDisplayNamesJaBySlug in src/i18n/participants.ts.`);
  console.error(`   Real names get a katakana form; forum handles get identity-mapped to`);
  console.error(`   their canonical EN form so the registration is explicit.)\n`);
  for (const { slug, count, sample } of missing) {
    console.error(`  - "${slug}"  (used in ${count} JA entry/entries)`);
    for (const f of sample) console.error(`      e.g. ${f}`);
  }
  process.exit(1);
}

console.log(
  `JA participant-slug check done. ${checkedFiles} JA files scanned, ${usageBySlug.size} unique slug(s) — all mapped.`,
);
