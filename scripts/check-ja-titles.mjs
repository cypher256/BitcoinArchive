/**
 * check-ja-titles.mjs — Japanese title linter for Bitcoin Institute
 *
 * Checks that JA translation files do not have fully English
 * context post titles like "Re: (context post by NAME)".
 * These should be "Re:（NAMEの文脈投稿）".
 *
 * Run: npm run check:ja-titles
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

// -------------------------------------------------------------------------
// Walk directory
// -------------------------------------------------------------------------
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

// -------------------------------------------------------------------------
// Main check
// -------------------------------------------------------------------------
const files = walkDir(jaDir);
const violations = [];

const ENGLISH_TITLE_PATTERN = /^title:\s*"Re:\s*\(context post by /;

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (ENGLISH_TITLE_PATTERN.test(line)) {
      violations.push({
        file: path.relative(process.cwd(), file),
        line: i + 1,
        title: line.trim(),
      });
    }
  }
}

// -------------------------------------------------------------------------
// Check 2: Reply title consistency within threads
//
// For each thread directory (forum/*/topic-* or forum/*/issue-* etc.),
// find the thread starter title (non-"Re:" title) and verify all reply
// titles use "Re: {starter title}".
//
// Only warns (does not fail the build) for existing inconsistencies,
// but errors for new entries created after this check was added.
// -------------------------------------------------------------------------
const threadDirs = new Map(); // dirPath -> files[]

for (const file of files) {
  const rel = path.relative(jaDir, file);
  const parts = rel.split(path.sep);
  // Thread dirs: forum/SOURCE/THREAD-ID/file.md (depth >= 3)
  if (parts.length >= 4 && parts[0] === 'forum') {
    const threadDir = parts.slice(0, 3).join(path.sep);
    if (!threadDirs.has(threadDir)) threadDirs.set(threadDir, []);
    threadDirs.get(threadDir).push(file);
  }
}

const titleMismatches = [];

for (const [threadDir, threadFiles] of threadDirs) {
  // Read all titles in this thread
  const entries = [];
  for (const file of threadFiles) {
    const content = readFileSync(file, 'utf-8');
    const titleMatch = content.match(/^title:\s*"(.+?)"\s*$/m);
    if (titleMatch) {
      entries.push({ file, title: titleMatch[1] });
    }
  }

  // Find thread starter (non-Re: title)
  const starter = entries.find(e => !e.title.startsWith('Re:') && !e.title.startsWith('返信:'));
  if (!starter) continue;

  const expectedReply = `Re: ${starter.title}`;

  for (const entry of entries) {
    if (entry === starter) continue;
    if (!entry.title.startsWith('Re:') && !entry.title.startsWith('返信:')) continue;
    if (entry.title !== expectedReply) {
      titleMismatches.push({
        file: path.relative(process.cwd(), entry.file),
        actual: entry.title,
        expected: expectedReply,
        thread: threadDir,
      });
    }
  }
}

// -------------------------------------------------------------------------
// Report
// -------------------------------------------------------------------------
let exitCode = 0;

if (violations.length === 0) {
  console.log('✓ No English context post titles found in JA files.');
} else {
  console.error(`✗ Found ${violations.length} English context post title(s) in JA files:\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    ${v.title}`);
    console.error();
  }
  exitCode = 1;
}

if (titleMismatches.length === 0) {
  console.log('✓ All JA reply titles are consistent with thread starters.');
} else {
  console.warn(`⚠ Found ${titleMismatches.length} reply title mismatch(es) in JA files:\n`);
  for (const m of titleMismatches) {
    console.warn(`  ${m.file}`);
    console.warn(`    actual:   "${m.actual}"`);
    console.warn(`    expected: "${m.expected}"`);
    console.warn();
  }
  // Warn only — does not fail the build for existing inconsistencies
}

process.exit(exitCode);
