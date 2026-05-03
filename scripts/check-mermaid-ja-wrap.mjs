#!/usr/bin/env node
/**
 * check-mermaid-ja-wrap.mjs — flag long unbroken Japanese spans inside
 * Mermaid block labels that would overflow the rendered column box.
 *
 * Why this script exists:
 *   Mermaid wraps labels only at ASCII whitespace (U+0020). Japanese has
 *   no natural inter-word spaces, so a label like
 *   "サトシ最有力候補と名指される" cannot wrap and overflows narrower
 *   columns. `・` (middle dot) and `、` (full-width comma) are NOT
 *   recognized as wrap points by Mermaid.
 *
 *   `check-mermaid.mjs` validates syntax. `check-bios-rendering.mjs`
 *   captures visual screenshots. This script catches the layout problem
 *   statically — fast, no browser, runs in CI.
 *
 * Detection:
 *   1. Walk all .md files under entries/translations.
 *   2. Extract every ```mermaid ... ``` block.
 *   3. For each non-keyword line in the block:
 *      a. Tokenize on ASCII whitespace `[ \t]+`.
 *      b. For each token, count Unicode code points.
 *      c. If token contains CJK and exceeds threshold, flag it.
 *
 * Exempt lines (Mermaid syntax keywords, not rendered as column labels):
 *   - title <text>             — title bar layout has more width
 *   - flowchart, graph, etc.   — diagram-type declarations
 *   - %% ...                   — comments
 *   - section <text>           — Gantt/timeline section header
 *
 * CJK ranges checked:
 *   - U+3040–U+309F (Hiragana)
 *   - U+30A0–U+30FF (Katakana)
 *   - U+3400–U+4DBF (CJK Unified Ideographs Ext A)
 *   - U+4E00–U+9FFF (CJK Unified Ideographs)
 *
 * Usage:
 *   node scripts/check-mermaid-ja-wrap.mjs
 *   node scripts/check-mermaid-ja-wrap.mjs --threshold 15
 *   node scripts/check-mermaid-ja-wrap.mjs --quiet
 *
 * Exit codes:
 *   0 — no overflow risks detected
 *   1 — at least one Japanese span exceeds the threshold
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import path from 'path';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const args = process.argv.slice(2);

function flag(name, fallback) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return fallback;
  return args[idx + 1];
}

const THRESHOLD = parseInt(flag('--threshold', '12'), 10);
const QUIET = args.includes('--quiet');

const CJK_RE = /[぀-ゟ゠-ヿ㐀-䶿一-鿿]/;
const KEYWORD_RE = /^(title|flowchart|graph|classDiagram|sequenceDiagram|stateDiagram|gantt|gitGraph|pie|journey|erDiagram|mindmap|timeline|requirementDiagram|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment|theme|section|%%)\b/;

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

function extractMermaidBlocks(content) {
  const blocks = [];
  const lines = content.split('\n');
  let inBlock = false;
  let startLine = 0;
  let buffer = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inBlock && /^```mermaid\s*$/.test(line)) {
      inBlock = true;
      startLine = i + 1;
      buffer = [];
    } else if (inBlock && /^```\s*$/.test(line)) {
      blocks.push({ startLine, lines: buffer });
      inBlock = false;
    } else if (inBlock) {
      buffer.push(line);
    }
  }
  return blocks;
}

function codePointLength(str) {
  return [...str].length;
}

// Strip Mermaid syntax characters that do not render as label text, so
// the unbroken-span length reflects the rendered label width rather than
// the raw source. Brackets, parentheses, braces, quotes, and edge arrows
// are syntax — they are not part of the label that the renderer wraps.
function stripMermaidSyntax(line) {
  return line
    .replace(/-->|---|-\.->|==>|~~~/g, ' ')
    .replace(/[\[\]\(\)\{\}"']/g, ' ');
}

function findOverflowTokens(line) {
  const stripped = line.trim();
  if (!stripped || KEYWORD_RE.test(stripped)) return [];
  const cleaned = stripMermaidSyntax(stripped);
  const tokens = cleaned.split(/[ \t]+/);
  const hits = [];
  for (const tok of tokens) {
    if (!tok) continue;
    if (!CJK_RE.test(tok)) continue;
    const len = codePointLength(tok);
    if (len > THRESHOLD) hits.push({ token: tok, length: len });
  }
  return hits;
}

const files = [...walk(EN_DIR), ...walk(JA_DIR)];
const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const blocks = extractMermaidBlocks(content);
  for (const block of blocks) {
    for (let j = 0; j < block.lines.length; j++) {
      const lineNumber = block.startLine + 1 + j;
      const hits = findOverflowTokens(block.lines[j]);
      for (const h of hits) {
        violations.push({
          file: path.relative(process.cwd(), file),
          line: lineNumber,
          token: h.token,
          length: h.length,
        });
      }
    }
  }
}

if (violations.length === 0) {
  if (!QUIET) {
    console.log(`✓ Mermaid JA wrap check passed. ${files.length} files scanned, threshold ${THRESHOLD} zenkaku.`);
  }
  process.exit(0);
}

console.error(`✗ Found ${violations.length} unbroken Japanese span(s) exceeding ${THRESHOLD} chars in Mermaid labels:\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}`);
  console.error(`    "${v.token}" (${v.length} chars)`);
  console.error(`    Insert an ASCII space at a semantic break point so the label can wrap.`);
}
console.error(`\nSee STYLE_GUIDE_JA.md § II.3 "Mermaid timeline labels — Japanese line wrapping".`);
process.exit(1);
