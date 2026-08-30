#!/usr/bin/env node
/**
 * audit-ja-dash-usage.mjs — JA dash-character usage audit for BitcoinArchive
 *
 * Two independent checks, both purely mechanical (no AI judgment, no
 * "too many dashes reads AI-ish" framing):
 *
 *   1. Wrong glyph: `─` (U+2500, box-drawing horizontal) or `―`
 *      (U+2015, horizontal bar) used as a prose dash. `─` has no
 *      legitimate prose use (only ASCII tree-diagram connectors inside
 *      fenced code blocks); `―` should be normalized to `—`
 *      (em dash, U+2014) per STYLE_GUIDE_JA.md § 禁止句読点 > ダッシュ類の字種.
 *   2. Density: 3+ combined `—`/`―` occurrences within a single prose
 *      paragraph (blank-line- and line-kind-delimited — see below), a
 *      signal the paragraph may be leaning on the same construction
 *      repeatedly.
 *
 * Scope: src/data/translations/ja/**\/*.md. Frontmatter, fenced code
 * blocks (``` or ~~~), HTML comments, and inline code spans (`` `...` ``)
 * are stripped before scanning. Blockquote lines (`> ...`) are INCLUDED —
 * translated primary-source quotes are exactly where the wrong-glyph bug
 * was found in practice (2026-07-29).
 *
 * Paragraph boundaries (for the density check) break on blank lines AND
 * on crossing between heading / list-item / table-row / blockquote /
 * plain-text line kinds, so a heading or a table isn't merged into the
 * prose paragraph next to it.
 *
 * This is a candidate queue for human review, not an auto-fixer.
 * `─` in particular sometimes has a legitimate fenced-code-block use
 * (ASCII tree diagrams) — those are already excluded by stripping code
 * blocks before scanning, but any surviving match should still be
 * read in context before editing.
 *
 * Usage:
 *   npm run audit:ja-dash-usage                  # scan all JA prose files
 *   npm run audit:ja-dash-usage -- <file>...     # scan specific files
 *   npm run audit:ja-dash-usage -- --summary     # console counts only, no per-line detail
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const JA_ROOT = 'src/data/translations/ja';
const DENSITY_THRESHOLD = 3;

function keepNewlines(m) {
  return '\n'.repeat((m.match(/\n/g) || []).length);
}

// Assumes LF line endings and single-backtick code spans, matching this
// archive's actual content (verified 2026-07-29: zero CRLF files, zero
// double-backtick spans, zero 4+-backtick fences under src/data/translations/ja).
// Revisit if that ever changes.
function stripNonProse(content) {
  return content
    .replace(/^---\n[\s\S]*?\n---\n/, keepNewlines)
    .replace(/^(`{3,}|~{3,})[\s\S]*?^\1[`~]*[ \t]*$/gm, keepNewlines)
    .replace(/<!--[\s\S]*?-->/g, keepNewlines)
    .replace(/`[^`\n]*`/g, (m) => ' '.repeat(m.length));
}

const HEADING_RE = /^#{1,6}\s/;
const LIST_ITEM_RE = /^\s*([-*+]|\d+\.)\s/;
const TABLE_ROW_RE = /^\s*\|/;
const BLOCKQUOTE_RE = /^\s*>/;

function paragraphBreaksBefore(line, prevLine) {
  if (prevLine === null) return false;
  const kind = (l) => {
    if (HEADING_RE.test(l)) return 'heading';
    if (LIST_ITEM_RE.test(l)) return 'list';
    if (TABLE_ROW_RE.test(l)) return 'table';
    if (BLOCKQUOTE_RE.test(l)) return 'quote';
    return 'text';
  };
  const prevKind = kind(prevLine);
  const curKind = kind(line);
  // Crossing between kinds (text/heading/list/table/quote) starts a new
  // paragraph; a heading always starts its own paragraph even amid a
  // run of headings.
  return prevKind !== curKind || curKind === 'heading';
}

async function walkMdFiles(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walkMdFiles(full, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function auditFile(filePath, content) {
  const prose = stripNonProse(content);
  const lines = prose.split('\n');
  const wrongGlyph = [];

  lines.forEach((line, idx) => {
    if (line.includes('─')) {
      wrongGlyph.push({ line: idx + 1, char: '─', text: line.trim() });
    }
    if (line.includes('―')) {
      wrongGlyph.push({ line: idx + 1, char: '―', text: line.trim() });
    }
  });

  // Density: split into blank-line-delimited paragraphs, count —/― per paragraph.
  const denseParagraphs = [];
  let paraStart = 1;
  let paraLines = [];
  let lineNo = 0;

  function flushParagraph() {
    if (paraLines.length === 0) return;
    const joined = paraLines.join('\n');
    const count = (joined.match(/[—―]/g) || []).length;
    if (count >= DENSITY_THRESHOLD) {
      denseParagraphs.push({ startLine: paraStart, count, excerpt: paraLines[0].trim().slice(0, 80) });
    }
    paraLines = [];
  }

  let prevNonBlankLine = null;
  for (const line of lines) {
    lineNo += 1;
    if (line.trim() === '') {
      flushParagraph();
      paraStart = lineNo + 1;
      prevNonBlankLine = null;
    } else {
      if (paragraphBreaksBefore(line, prevNonBlankLine)) {
        flushParagraph();
        paraStart = lineNo;
      }
      if (paraLines.length === 0) paraStart = lineNo;
      paraLines.push(line);
      prevNonBlankLine = line;
    }
  }
  flushParagraph();

  return { wrongGlyph, denseParagraphs };
}

async function main() {
  const args = process.argv.slice(2);
  const summaryOnly = args.includes('--summary');
  const explicitFiles = args.filter((a) => a !== '--summary');

  const files = explicitFiles.length > 0 ? explicitFiles : await walkMdFiles(JA_ROOT);

  let totalWrongGlyph = 0;
  let totalDense = 0;
  const filesWithIssues = [];

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    const { wrongGlyph, denseParagraphs } = auditFile(file, content);
    if (wrongGlyph.length === 0 && denseParagraphs.length === 0) continue;

    totalWrongGlyph += wrongGlyph.length;
    totalDense += denseParagraphs.length;
    filesWithIssues.push({ file, wrongGlyph, denseParagraphs });

    if (!summaryOnly) {
      console.log(`\n${relative(process.cwd(), file)}`);
      for (const w of wrongGlyph) {
        console.log(`  [誤字種 ${w.char}] L${w.line}: ${w.text.slice(0, 100)}`);
      }
      for (const d of denseParagraphs) {
        console.log(`  [多用 ${d.count}件] L${d.startLine}: ${d.excerpt}...`);
      }
    }
  }

  console.log(`\n--- audit:ja-dash-usage 集計 ---`);
  console.log(`対象ファイル数: ${files.length}`);
  console.log(`誤字種 (─/―) 検出件数: ${totalWrongGlyph}`);
  console.log(`段落内多用 (—/― 合計 ${DENSITY_THRESHOLD} 件以上) 検出件数: ${totalDense}`);
  console.log(`該当ファイル数: ${filesWithIssues.length}`);

  if (filesWithIssues.length > 0) process.exitCode = 0; // audit tier: report only, never fail the build
}

main();
