#!/usr/bin/env node
/**
 * check-mermaid.mjs — validate every ```mermaid code block in the archive's
 * markdown content and fail if any block has a syntax error.
 *
 * Why this script exists:
 *   The astro.config.mjs rehype-mermaid plugin renders Mermaid blocks to
 *   inline SVG at build time. A syntax error there fails the full build,
 *   which is heavy. This script extracts and validates blocks in seconds
 *   so editors can iterate without waiting for full builds.
 *
 *   Common JA-content failure modes (see STYLE_GUIDE.md "Mermaid Diagrams"):
 *     - Full-width punctuation (：、（）、「」) inside Mermaid syntax
 *       positions instead of inside quoted node labels
 *     - Brackets, colons, or semicolons in node labels without `""` wrapping
 *     - Stray `→` arrow character used as syntax instead of `-->`
 *     - Tab/space indentation inconsistency
 *
 * Implementation:
 *   1. Walk all .md files under src/data/entries and src/data/translations.
 *   2. Extract every ```mermaid ... ``` block.
 *   3. For each block, write to a temp file and pipe through @mermaid-js/
 *      mermaid-cli (mmdc) which parses and reports syntax errors.
 *   4. Aggregate failures, print {file, line, error}, exit 1 if any.
 *
 * Usage:
 *   node scripts/check-mermaid.mjs                     # validate all
 *   node scripts/check-mermaid.mjs --quiet             # only print failures
 *
 * Exit codes:
 *   0 — every block parses
 *   1 — at least one block has a syntax error
 */

import { readdirSync, readFileSync, statSync, writeFileSync, unlinkSync, mkdtempSync, rmSync } from 'fs';
import path from 'path';
import os from 'os';
import { spawnSync } from 'child_process';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const QUIET = process.argv.includes('--quiet');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

// Extract every ```mermaid ... ``` block. Returns [{ source, startLine, code }].
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
      startLine = i + 1; // 1-indexed line of the opening fence
      buffer = [];
    } else if (inBlock && /^```\s*$/.test(line)) {
      blocks.push({ startLine, code: buffer.join('\n') });
      inBlock = false;
    } else if (inBlock) {
      buffer.push(line);
    }
  }
  return blocks;
}

const allFiles = [...walk(EN_DIR), ...walk(JA_DIR)];
const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'mermaid-check-'));

let totalBlocks = 0;
let totalFailures = 0;
const failures = [];

for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8');
  const blocks = extractMermaidBlocks(content);
  if (blocks.length === 0) continue;

  for (let i = 0; i < blocks.length; i++) {
    totalBlocks++;
    const { startLine, code } = blocks[i];
    // Strip `click ID href "URL"` directives before validation. They are
    // handled by the remark-mermaid-extract-click / rehype-mermaid-inject-click
    // pipeline at build time and the mermaid source proper would crash mmdc
    // when click is combined with `:milestone, ID, ...` (Mermaid 11.14 bug:
    // "Cannot read properties of undefined (reading 'type')"). Keeping the
    // directives in the .md is correct; we just hide them from the parser
    // here so the rest of the syntax can be validated.
    const validatable = code.replace(
      /^[ \t]*click[ \t]+\S+[ \t]+href[ \t]+"[^"]+"(?:[ \t]+"[^"]*")?[ \t]*$/gm,
      ''
    );
    const inputFile = path.join(tmpDir, `block-${totalBlocks}.mmd`);
    const outputFile = path.join(tmpDir, `block-${totalBlocks}.svg`);
    writeFileSync(inputFile, validatable);

    const result = spawnSync(
      'npx',
      ['--no-install', 'mmdc', '-i', inputFile, '-o', outputFile, '-q'],
      { encoding: 'utf-8', timeout: 30000 }
    );

    // Clean up output file if it exists.
    try { unlinkSync(outputFile); } catch (_) {}
    try { unlinkSync(inputFile); } catch (_) {}

    if (result.status !== 0) {
      totalFailures++;
      failures.push({
        file: path.relative(process.cwd(), file),
        line: startLine,
        blockIndex: i + 1,
        stderr: (result.stderr || result.stdout || '').slice(0, 500),
      });
    }
  }
}

rmSync(tmpDir, { recursive: true, force: true });

if (totalBlocks === 0) {
  if (!QUIET) console.log('✓ No Mermaid blocks found.');
  process.exit(0);
}

if (totalFailures === 0) {
  if (!QUIET) console.log(`✓ All ${totalBlocks} Mermaid blocks parsed.`);
  process.exit(0);
}

console.error(`✗ ${totalFailures} of ${totalBlocks} Mermaid blocks failed to parse:\n`);
for (const f of failures) {
  console.error(`  ${f.file}:${f.line} (block #${f.blockIndex})`);
  const firstErrorLine = f.stderr.split('\n').find(l => l.toLowerCase().includes('error') || l.includes('Parse error') || l.includes('SyntaxError')) || f.stderr.split('\n').slice(0, 3).join(' | ');
  console.error(`    ${firstErrorLine.trim().slice(0, 300)}`);
  console.error();
}
process.exit(1);
