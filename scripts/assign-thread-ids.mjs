#!/usr/bin/env node
/**
 * Assign threadId and threadPosition to BitcoinTalk posts
 * Groups posts by base thread title (strips "Re: " prefix)
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BT_DIR = join(import.meta.dirname, '..', 'src', 'data', 'entries', 'en', 'forum', 'bitcointalk');

function slugifyThread(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
}

function getBaseTitle(title) {
  return title.replace(/^Re:\s*/i, '').replace(/^\[OLD THREAD\]\s*/i, '').replace(/^Repost:\s*/i, '').trim();
}

const files = readdirSync(BT_DIR).filter(f => f.endsWith('.md')).sort();
console.log(`Found ${files.length} BitcoinTalk files`);

// Parse all files
const entries = [];
for (const f of files) {
  const path = join(BT_DIR, f);
  const content = readFileSync(path, 'utf8');

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.warn(`  No frontmatter in ${f}`);
    continue;
  }

  const fm = fmMatch[1];
  const titleMatch = fm.match(/^title:\s*"(.+?)"\s*$/m) || fm.match(/^title:\s*'(.+?)'\s*$/m) || fm.match(/^title:\s*(.+?)\s*$/m);
  const dateMatch = fm.match(/^date:\s*(.+?)\s*$/m);

  if (!titleMatch || !dateMatch) {
    console.warn(`  Missing title/date in ${f}`);
    continue;
  }

  const title = titleMatch[1].replace(/^["']|["']$/g, '');
  const date = dateMatch[1];
  const hasThreadId = fm.includes('threadId:');

  entries.push({ file: f, path, title, date, content, fm, hasThreadId });
}

// Group by base thread title
const threadGroups = new Map();
for (const entry of entries) {
  const base = getBaseTitle(entry.title);
  if (!threadGroups.has(base)) {
    threadGroups.set(base, []);
  }
  threadGroups.get(base).push(entry);
}

// Only process groups with 2+ messages
let totalUpdated = 0;
let totalThreads = 0;
for (const [baseTitle, group] of threadGroups) {
  if (group.length < 2) continue;

  // Skip if all already have threadId
  const needsUpdate = group.filter(e => !e.hasThreadId);
  if (needsUpdate.length === 0) continue;

  totalThreads++;
  const threadId = `bt-${slugifyThread(baseTitle)}`;

  // Sort by date, then by filename for same-date entries
  group.sort((a, b) => {
    const dateComp = a.date.localeCompare(b.date);
    if (dateComp !== 0) return dateComp;
    return a.file.localeCompare(b.file);
  });

  for (let i = 0; i < group.length; i++) {
    const entry = group[i];
    if (entry.hasThreadId) continue;

    // Add threadId and threadPosition before the closing ---
    const newFm = entry.fm + `\nthreadId: "${threadId}"\nthreadTitle: "${baseTitle.replace(/"/g, '\\"')}"\nthreadPosition: ${i + 1}`;
    const newContent = entry.content.replace(/^---\n[\s\S]*?\n---/, `---\n${newFm}\n---`);

    writeFileSync(entry.path, newContent, 'utf8');
    totalUpdated++;
  }

  if (group.length >= 3) {
    console.log(`  Thread "${baseTitle}" (${group.length} posts) -> ${threadId}`);
  }
}

console.log(`\nDone: ${totalThreads} threads identified, ${totalUpdated} files updated`);
