#!/usr/bin/env node
/**
 * fix-speaker-in-blockquote.mjs — One-shot fix.
 *
 * In JA correspondence files, `<!-- speaker: ... -->` comments sit at the
 * root markdown level (outside blockquotes). That splits what should be a
 * single multi-level blockquote into multiple separate blockquotes as far
 * as the markdown AST is concerned, which breaks remark-quote-blocks.mjs
 * (expects the quote-marker comment and the blockquote body to be inside
 * the same parent blockquote).
 *
 * This script moves each `<!-- speaker: ... -->` line INTO the blockquote
 * whose first `>` line follows it, by prefixing the speaker line with the
 * same `>`-depth as that blockquote.
 *
 * Idempotent: lines that already start with `>` are left alone.
 */

import { readFileSync, writeFileSync } from 'fs';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node fix-speaker-in-blockquote.mjs <file> [<file>...]');
  process.exit(1);
}

const SPEAKER_RE = /^<!-- speaker: .* -->\s*$/;
// Match tight (`>>>>`) and space-separated (`> > > >`) deep-quote prefixes.
// Capture the full prefix including its trailing spaces so we can reuse it
// verbatim (preserves the file's existing convention on that line).
const QUOTE_BQ_RE = /^((?:>\s*)+)/;

let totalChanges = 0;
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const out = [];
  let changes = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (SPEAKER_RE.test(line)) {
      // Look ahead for the next non-empty line that starts a blockquote.
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      const next = lines[j];
      const bqMatch = next ? next.match(QUOTE_BQ_RE) : null;
      if (bqMatch) {
        // bqMatch[1] may or may not end with space depending on whether the
        // blockquote line is tight (">>>>") or space-sep ("> > > > "). Ensure
        // exactly one space between the prefix and the speaker comment so the
        // rendered nesting depth is preserved.
        const prefix = bqMatch[1].endsWith(' ') ? bqMatch[1] : bqMatch[1] + ' ';
        out.push(`${prefix}${line}`);
        changes++;
        continue;
      }
    }
    out.push(line);
  }

  if (changes > 0) {
    writeFileSync(file, out.join('\n'), 'utf8');
    console.log(`  ${file}: ${changes} speaker line(s) indented`);
    totalChanges += changes;
  }
}

console.log(`\n✓ Total: ${totalChanges} speaker lines moved into their following blockquote`);
