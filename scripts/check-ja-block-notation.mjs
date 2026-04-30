import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const jaDir = path.resolve(repoRoot, 'src/data/translations/ja');

function walkMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const violations = [];
let checkedFiles = 0;

for (const file of walkMarkdownFiles(jaDir)) {
  const text = readFileSync(file, 'utf8');
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
  `JA block-notation check done. ${checkedFiles} JA files scanned, all use 「ブロック N」 form.`,
);
