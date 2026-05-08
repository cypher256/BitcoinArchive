import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
    let text = readFileSync(file, 'utf8');
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
      if (/^```/.test(line)) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      // For .astro: only check lines containing JA prose. EN-side labels and
      // pure-code lines (no JA characters) are out of scope for this rule.
      if (isAstro && !JA_CHAR_RE.test(line)) continue;
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
