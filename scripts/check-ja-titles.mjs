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
// Report
// -------------------------------------------------------------------------
if (violations.length === 0) {
  console.log('✓ No English context post titles found in JA files.');
  process.exit(0);
} else {
  console.error(`✗ Found ${violations.length} English context post title(s) in JA files:\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    ${v.title}`);
    console.error();
  }
  process.exit(1);
}
