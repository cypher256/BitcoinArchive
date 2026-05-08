import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findJaSectionLineRanges, lineInJaSection } from './lib/astro-ja-section.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const targets = [
  path.resolve(repoRoot, 'src/data/translations/ja'),
  path.resolve(repoRoot, 'src/components'),
];

const JA_CHAR_RE = /[぀-ゟ゠-ヿ一-鿿]/;

function walkFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else if (fullPath.endsWith('.md') || fullPath.endsWith('.astro')) {
      files.push(fullPath);
    }
  }
  return files;
}

const violations = [];
let checkedFiles = 0;

for (const root of targets) {
  for (const file of walkFiles(root)) {
    const isAstro = file.endsWith('.astro');
    const rawText = readFileSync(file, 'utf8');
    const jaRanges = isAstro ? findJaSectionLineRanges(rawText) : [];
    let text = rawText;
    // For .astro: strip JS line and block comments so identifiers / commentary
    // referencing block numbers are not flagged. JA prose lives in TS string
    // literals, which we keep visible.
    if (isAstro) {
      text = text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
      text = text.replace(/\/\/[^\n]*/g, (m) => ' '.repeat(m.length));
    }
    const lines = text.split('\n');
    let inCodeBlock = false;
    checkedFiles += 1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      if (/^```/.test(line)) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      // For .astro: a line is in scope if it falls inside `labels.ja: {…}`
      // (catches English-only values like `block1: 'Block 1'` that ship to
      // JA UI readers) OR contains a JA character (catches JA prose
      // elsewhere). EN labels and unrelated code lines fall through.
      if (isAstro && !lineInJaSection(lineNum, jaRanges) && !JA_CHAR_RE.test(line)) continue;
      // Strip inline code spans before scanning
      const stripped = line.replace(/`[^`]+`/g, '');
      // English form "Block N" (Block followed by digits) anywhere outside code
      const engMatches = [...stripped.matchAll(/\bBlock (\d+)/g)];
      // No-space カタカナ "ブロックN" (also a violation — should be "ブロック N")
      const noSpaceMatches = [...stripped.matchAll(/ブロック(\d+)/g)];
      for (const m of engMatches) {
        violations.push({ file, line: i + 1, found: m[0], suggested: `ブロック ${m[1]}` });
      }
      for (const m of noSpaceMatches) {
        violations.push({ file, line: i + 1, found: m[0], suggested: `ブロック ${m[1]}` });
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`JA block-notation check: ${violations.length} violation(s).`);
  console.error(`  JA prose should use 「ブロック N」 (katakana + half-width space + digits),`);
  console.error(`  not 「Block N」 (English) or 「ブロックN」 (no space).`);
  console.error(`  Code blocks (\`\`\`) and inline code (\`...\`) are exempt.\n`);
  for (const v of violations) {
    const rel = path.relative(repoRoot, v.file);
    console.error(`  ${rel}:${v.line}`);
    console.error(`    "${v.found}" → "${v.suggested}"`);
  }
  process.exit(1);
}

console.log(
  `JA block-notation check done. ${checkedFiles} files scanned, all use 「ブロック N」 form.`,
);
