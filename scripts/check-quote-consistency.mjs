#!/usr/bin/env node
/**
 * Check that quoted text in JA translations matches the source post's translation.
 * Exits with code 1 if mismatches are found.
 *
 * Usage:
 *   node scripts/check-quote-consistency.mjs          # check only
 *   node scripts/check-quote-consistency.mjs --fix    # auto-fix mismatches
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const JA_DIR = 'src/data/translations/ja';
const doFix = process.argv.includes('--fix');

// Build msg -> file mapping
const msgToFile = new Map();

function walkDir(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      walkDir(join(dir, item.name));
    } else if (item.name.endsWith('.md')) {
      const path = join(dir, item.name);
      const content = readFileSync(path, 'utf8');
      const m = content.match(/sourceUrl:.*msg(\d+)/);
      if (m) msgToFile.set(m[1], path);
    }
  }
}

walkDir(JA_DIR);

// Check all quotes
let mismatches = 0;
let fixed = 0;
let checked = 0;

function walkAndCheck(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      walkAndCheck(join(dir, item.name));
    } else if (item.name.endsWith('.md')) {
      const path = join(dir, item.name);
      let content = readFileSync(path, 'utf8');
      const lines = content.split('\n');
      let newLines = [...lines];
      let fileChanged = false;

      let i = 0;
      while (i < lines.length) {
        const m = lines[i].match(/\[Quote from:.*#msg(\d+)\)/);
        if (!m) { i++; continue; }

        const msgId = m[1];
        checked++;
        const quoteStart = i + 1;
        let quoteEnd = quoteStart;

        while (quoteEnd < lines.length) {
          const line = lines[quoteEnd];
          if (line.startsWith('>')) {
            quoteEnd++;
          } else if (line.trim() === '' && quoteEnd + 1 < lines.length && lines[quoteEnd + 1].startsWith('>')) {
            quoteEnd++;
          } else {
            break;
          }
        }

        if (!msgToFile.has(msgId)) { i = quoteEnd; continue; }

        // Skip self-referencing or circular quotes
        const selfMsgM = readFileSync(path, 'utf8').match(/sourceUrl:.*msg(\d+)/);
        if (selfMsgM && selfMsgM[1] === msgId) { i = quoteEnd; continue; }
        if (msgToFile.get(msgId) === path) { i = quoteEnd; continue; }

        // Skip circular references (source quotes this file back)
        const sourcePath = msgToFile.get(msgId);
        const sourceText = readFileSync(sourcePath, 'utf8');
        if (selfMsgM && sourceText.includes(`#msg${selfMsgM[1]}`)) {
          // Source file references this file's msg — circular
          i = quoteEnd; continue;
        }

        const sourceContent = readFileSync(msgToFile.get(msgId), 'utf8');
        const fmMatch = sourceContent.match(/^---\n[\s\S]*?\n---\n([\s\S]*)/);
        if (!fmMatch) { i = quoteEnd; continue; }

        const sourceBody = fmMatch[1].trim();
        const expected = sourceBody.split('\n').map(sl => sl.trim() ? '> ' + sl : '>');
        const actual = lines.slice(quoteStart, quoteEnd);

        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          mismatches++;
          if (doFix) {
            newLines.splice(quoteStart, quoteEnd - quoteStart, ...expected);
            const diff = expected.length - (quoteEnd - quoteStart);
            // Rebuild lines for continued processing
            for (let j = 0; j < lines.length; j++) lines[j] = newLines[j];
            if (diff !== 0) {
              lines.length = newLines.length;
              for (let j = 0; j < newLines.length; j++) lines[j] = newLines[j];
            }
            fileChanged = true;
            fixed++;
            i = quoteStart + expected.length;
          } else {
            console.log(`  ${path}:${i + 1} msg${msgId} — quote does not match source`);
            i = quoteEnd;
          }
        } else {
          i = quoteEnd;
        }
      }

      if (fileChanged && doFix) {
        writeFileSync(path, newLines.join('\n'), 'utf8');
      }
    }
  }
}

walkAndCheck(JA_DIR);

console.log(`Quote consistency check: ${checked} quotes checked, ${mismatches} mismatches`);
if (doFix && fixed > 0) {
  console.log(`Auto-fixed: ${fixed}`);
}

if (mismatches > 0 && !doFix) {
  console.error(`\n❌ ${mismatches} quote translation mismatches found. Run with --fix to auto-fix.`);
  process.exit(1);
} else {
  console.log('\n✅ All quotes consistent');
}
