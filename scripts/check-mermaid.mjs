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
 *      mermaid-cli (mmdc) which parses and reports syntax errors. mmdc
 *      renders through a headless-browser instance per call, so it's the
 *      slow part; blocks render through a bounded-concurrency pool
 *      (POOL_SIZE) instead of one at a time — at ~300 blocks in this
 *      corpus, serial spawnSync made this script (not the rest of `npm
 *      run check`) the dominant cost of the whole run.
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
import { spawn } from 'child_process';

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

// Bounded concurrency: each mmdc call launches its own headless-browser
// instance, so unbounded parallelism (~300 at once) would thrash memory.
// Capped at the core count (and 8 as a ceiling) balances wall-clock time
// against not overwhelming the machine.
const POOL_SIZE = Math.max(2, Math.min(os.cpus().length, 8));

async function renderBlock(tmpDir, index, item) {
  const { file, startLine, code } = item;
  const inputFile = path.join(tmpDir, `block-${index}.mmd`);
  const outputFile = path.join(tmpDir, `block-${index}.svg`);
  writeFileSync(inputFile, code);

  const result = await new Promise((resolve) => {
    const child = spawn('npx', ['--no-install', 'mmdc', '-i', inputFile, '-o', outputFile, '-q']);
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill('SIGKILL'), 30000);
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (status) => {
      clearTimeout(timer);
      resolve({ status, stdout, stderr });
    });
    child.on('error', (err) => {
      clearTimeout(timer);
      resolve({ status: 1, stdout: '', stderr: String(err) });
    });
  });

  try { unlinkSync(outputFile); } catch (_) {}
  try { unlinkSync(inputFile); } catch (_) {}

  if (result.status === 0) return null;
  return {
    file: path.relative(process.cwd(), file),
    line: startLine,
    blockIndex: item.blockIndex,
    stderr: (result.stderr || result.stdout || '').slice(0, 500),
  };
}

// Simple bounded-concurrency pool: POOL_SIZE workers each pull the next
// unclaimed index until the queue is empty.
async function runPool(items, worker, size) {
  const results = new Array(items.length);
  let next = 0;
  async function pullNext() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(i + 1, items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, pullNext));
  return results;
}

const allFiles = [...walk(EN_DIR), ...walk(JA_DIR)];

const allBlocks = [];
for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8');
  const blocks = extractMermaidBlocks(content);
  blocks.forEach((b, i) => allBlocks.push({ file, startLine: b.startLine, code: b.code, blockIndex: i + 1 }));
}

const totalBlocks = allBlocks.length;
let totalFailures = 0;
let failures = [];

if (totalBlocks > 0) {
  const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'mermaid-check-'));
  const results = await runPool(allBlocks, (index, item) => renderBlock(tmpDir, index, item), POOL_SIZE);
  rmSync(tmpDir, { recursive: true, force: true });
  failures = results.filter(Boolean);
  totalFailures = failures.length;
}

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
