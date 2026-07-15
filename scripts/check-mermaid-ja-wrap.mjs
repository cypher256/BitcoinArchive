#!/usr/bin/env node
/**
 * check-mermaid-ja-wrap.mjs — flag long unbroken Japanese spans inside
 * Mermaid block labels that would overflow the rendered column box.
 *
 * Why this script exists:
 *   Long unbroken Japanese spans in Mermaid labels overflow narrower
 *   columns at render time. Mermaid wraps a label only at an explicit
 *   break point. The mechanism depends on the diagram type:
 *     - flowchart / graph node labels: `<br/>` (preferred) or ASCII
 *       space. ASCII space wraps but the space remains visible in the
 *       rendered text as a mid-word gap ("待機中の トランザクション"),
 *       which reads as unnatural to JA readers. Use `<br/>`.
 *     - timeline event labels: ASCII space is the ONLY mechanism that
 *       works — Mermaid timeline does NOT honor `<br/>`. The space is
 *       a semantic break; existing biographies all follow this pattern.
 *     - gantt task/milestone labels: same as timeline. Gantt renders
 *       labels as plain SVG <text> (not the HTML foreignObject that
 *       flowchart/classDiagram/stateDiagram use), so `<br/>` is never
 *       interpreted -- it shows up as a literal "<br/>" string in the
 *       rendered label instead of a line break. Confirmed by rendering
 *       (2026-07-15): a milestone label with `<br/>` rendered the raw
 *       tag text in the SVG. ASCII space is the only wrap point here too.
 *     - sequenceDiagram messages: messages render on auto-expanding
 *       arrows; no wrap is needed. This script exempts the diagram type.
 *     - subgraph titles: render full-width and auto-expand to fit;
 *       neither break is needed. `<br/>` is not honored here either
 *       (the second line clips). This script exempts those lines.
 *   `・` (middle dot) and `、` (full-width comma) are NOT recognized
 *   as wrap points by Mermaid in any diagram type.
 *
 *   `check-mermaid.mjs` validates syntax. `check-bios-rendering.mjs`
 *   captures visual screenshots. This script catches the layout problem
 *   statically — fast, no browser, runs in CI.
 *
 * Detection:
 *   1. Walk all .md files under entries/translations.
 *   2. Extract every ```mermaid ... ``` block.
 *   3. Detect the diagram type from the first non-empty line.
 *   4. For each non-keyword line in the block (sequenceDiagram message
 *      lines exempted — see below):
 *      a. Normalize `<br/>`, `<br>`, `<br />` to ASCII whitespace so
 *         explicit line breaks count as wrap points.
 *      b. Strip Mermaid syntax characters (brackets, arrows).
 *      c. Tokenize on ASCII whitespace `[ \t]+`.
 *      d. For each token, count Unicode code points.
 *      e. If token contains CJK and exceeds threshold, flag it.
 *
 * Exempt lines (Mermaid syntax keywords, not rendered as column labels):
 *   - title <text>             — title bar layout has more width
 *   - subgraph ID[<text>]      — subgraph title bar spans the full
 *                                 subgraph box width, which auto-expands
 *                                 to fit contents; the column-overflow
 *                                 assumption does not apply. Also, in
 *                                 practice Mermaid does not honor `<br/>`
 *                                 inside subgraph titles (the second line
 *                                 gets clipped), so the only safe form is
 *                                 a single line.
 *   - flowchart, graph, etc.   — diagram-type declarations
 *   - %% ...                   — comments
 *   - section <text>           — Gantt/timeline section header
 *   - click ID href "URL"      — click directives carry URLs, not labels;
 *                                 also handled at the rehype layer (the
 *                                 directives are stripped before mermaid
 *                                 renders, see remark-mermaid-extract-click)
 *
 * Exempt diagram type:
 *   - sequenceDiagram          — messages render on arrows that auto-
 *                                 expand horizontally; the fixed-width-
 *                                 column overflow assumption does not
 *                                 apply. JA messages should still avoid
 *                                 mid-text ASCII spaces (use `<br/>` if a
 *                                 line break is desired), but this is a
 *                                 display preference, not a layout-break
 *                                 risk, so it is not enforced here.
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
const KEYWORD_RE = /^(title|subgraph|flowchart|graph|classDiagram|sequenceDiagram|stateDiagram|gantt|gitGraph|pie|journey|erDiagram|mindmap|timeline|requirementDiagram|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment|theme|section|click|%%)\b/;

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
      blocks.push({ startLine, lines: buffer, type: detectDiagramType(buffer) });
      inBlock = false;
    } else if (inBlock) {
      buffer.push(line);
    }
  }
  return blocks;
}

function detectDiagramType(lines) {
  for (const line of lines) {
    const stripped = line.trim();
    if (!stripped) continue;
    const m = stripped.match(/^(sequenceDiagram|flowchart|graph|classDiagram|stateDiagram|gantt|gitGraph|pie|journey|erDiagram|mindmap|timeline|requirementDiagram|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)\b/);
    if (m) return m[1];
    return null;
  }
  return null;
}

function codePointLength(str) {
  return [...str].length;
}

// Strip Mermaid syntax characters that do not render as label text, so
// the unbroken-span length reflects the rendered label width rather than
// the raw source. Brackets, parentheses, braces, quotes, and edge arrows
// are syntax — they are not part of the label that the renderer wraps.
// `<br/>`, `<br>`, `<br />` are explicit line breaks → count as wrap points.
function stripMermaidSyntax(line) {
  return line
    .replace(/<br\s*\/?>/gi, ' ')
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
    // sequenceDiagram messages render on arrows that auto-expand
    // horizontally — the fixed-width-column overflow assumption does not
    // apply. Skip the wrap check for this diagram type.
    if (block.type === 'sequenceDiagram') continue;
    for (let j = 0; j < block.lines.length; j++) {
      const lineNumber = block.startLine + 1 + j;
      const hits = findOverflowTokens(block.lines[j]);
      for (const h of hits) {
        violations.push({
          file: path.relative(process.cwd(), file),
          line: lineNumber,
          token: h.token,
          length: h.length,
          diagramType: block.type,
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
  if (v.diagramType === 'timeline' || v.diagramType === 'gantt') {
    console.error(`    Insert an ASCII space at a semantic break point.`);
    console.error(`    (${v.diagramType} renders labels as plain SVG text, not honoring <br/>; a literal`);
    console.error(`    "<br/>" string shows up in the rendered label. ASCII space is the wrap point.)`);
  } else {
    console.error(`    Insert <br/> at a semantic break point so the label wraps.`);
    console.error(`    (Avoid mid-text ASCII space in flowchart/graph labels — it renders as a mid-word gap.)`);
  }
}
console.error(`\nSee STYLE_GUIDE_JA.md § II.3 "Mermaid labels — Japanese line wrapping".`);
process.exit(1);
