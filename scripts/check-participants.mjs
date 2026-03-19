import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entriesDir = path.resolve(__dirname, '../src/data/entries/en');

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
      if (currentKey && currentArray) {
        fm[currentKey] = currentArray;
      }
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
      currentArray.push(line.trim().replace(/^-\s*/, ''));
    }
  }
  if (currentKey && currentArray) {
    fm[currentKey] = currentArray;
  }
  return fm;
}

const issues = [];
let checked = 0;

for (const file of walkMarkdownFiles(entriesDir)) {
  const content = readFileSync(file, 'utf8');
  const fm = parseFrontmatter(content);
  checked += 1;

  const author = fm.author || '';
  const hasParticipants = Array.isArray(fm.participants) && fm.participants.length > 0;

  // Skip entries where missing participants is expected
  if (author === '[deleted]') continue;

  if (!hasParticipants) {
    const rel = path.relative(entriesDir, file);
    issues.push(rel);
  }
}

if (issues.length > 0) {
  console.warn(`Participants check: ${issues.length} EN file(s) with author but no participants:`);
  for (const f of issues) {
    console.warn(`  - ${f}`);
  }
  // Warn only, do not block build
  console.warn(`\nThese entries should have at least one participant listed.`);
}

console.log(`Participants check done. ${checked} files checked, ${issues.length} warning(s).`);
