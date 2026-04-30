#!/usr/bin/env node
/**
 * fix-ja-reply-titles.mjs — Unify JA reply titles within threads
 *
 * For each thread directory, finds the thread starter's JA title and
 * rewrites all reply titles to "Re: {starter title}".
 *
 * SAFETY:
 * - Only modifies the `title:` line in frontmatter
 * - Body text is never touched
 * - Dry-run by default; use --apply to write
 * - SHA-1 verification recommended (see STYLE_GUIDE_JA_OPS.md § 1)
 *
 * Usage:
 *   node scripts/fix-ja-reply-titles.mjs              # dry-run
 *   node scripts/fix-ja-reply-titles.mjs --apply       # write changes
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import path from 'path';

const JA_DIR = 'src/data/translations/ja';
const args = process.argv.slice(2);
const doApply = args.includes('--apply');

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (full.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// Group files by thread directory
const files = walkDir(JA_DIR);
const threadDirs = new Map(); // dirPath -> files[]

for (const file of files) {
  const rel = path.relative(JA_DIR, file);
  const parts = rel.split(path.sep);
  // Thread dirs: forum/SOURCE/THREAD-ID/file.md (depth >= 4 parts)
  if (parts.length >= 4 && parts[0] === 'forum') {
    const threadDir = parts.slice(0, 3).join(path.sep);
    if (!threadDirs.has(threadDir)) threadDirs.set(threadDir, []);
    threadDirs.get(threadDir).push(file);
  }
}

let totalFixed = 0;
let totalSkipped = 0;
let totalThreads = 0;

for (const [threadDir, threadFiles] of threadDirs) {
  // Read titles
  const entries = [];
  for (const file of threadFiles) {
    const content = readFileSync(file, 'utf-8');
    const titleMatch = content.match(/^title:\s*"(.+?)"\s*$/m);
    if (titleMatch) {
      entries.push({ file, title: titleMatch[1], content });
    }
  }

  // Find thread starter (non-Re: title)
  const starter = entries.find(e =>
    !e.title.startsWith('Re:') && !e.title.startsWith('返信:')
  );
  if (!starter) continue;

  const expectedReply = `Re: ${starter.title}`;
  let threadFixed = 0;

  for (const entry of entries) {
    if (entry === starter) continue;
    if (!entry.title.startsWith('Re:') && !entry.title.startsWith('返信:')) continue;
    if (entry.title === expectedReply) continue;

    const rel = path.relative(process.cwd(), entry.file);
    console.log(`${doApply ? 'FIX' : 'DRY-RUN'}: ${rel}`);
    console.log(`  "${entry.title}" → "${expectedReply}"`);

    if (doApply) {
      // Replace only the title line in frontmatter
      const oldLine = `title: "${entry.title}"`;
      const newLine = `title: "${expectedReply}"`;
      const newContent = entry.content.replace(oldLine, newLine);

      if (newContent === entry.content) {
        console.log(`  WARNING: replacement failed (title line not found exactly)`);
        totalSkipped++;
        continue;
      }

      // Verify body unchanged
      const oldBody = entry.content.slice(entry.content.indexOf('\n---', 4));
      const newBody = newContent.slice(newContent.indexOf('\n---', 4));
      if (oldBody !== newBody) {
        console.log(`  REFUSED: body would change — skipping`);
        totalSkipped++;
        continue;
      }

      writeFileSync(entry.file, newContent, 'utf-8');
      threadFixed++;
      totalFixed++;
    } else {
      threadFixed++;
      totalFixed++;
    }
  }

  if (threadFixed > 0) totalThreads++;
}

console.log(`\n=== Summary ===`);
console.log(`Threads with fixes: ${totalThreads}`);
console.log(`Titles ${doApply ? 'fixed' : 'to fix'}: ${totalFixed}`);
console.log(`Skipped: ${totalSkipped}`);
if (!doApply) console.log('\nRun with --apply to write changes.');
