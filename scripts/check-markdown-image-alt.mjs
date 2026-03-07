import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../src/data');

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

function maskFencedCode(text) {
  return text.replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\n]/g, ' '));
}

function lineNumberForIndex(text, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (text[i] === '\n') line += 1;
  }
  return line;
}

const markdownImagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
const htmlImagePattern = /<img\b[\s\S]*?>/gi;

const issues = [];
let imageCount = 0;

for (const file of walkMarkdownFiles(dataDir)) {
  const raw = readFileSync(file, 'utf8');
  const text = maskFencedCode(raw);

  for (const match of text.matchAll(markdownImagePattern)) {
    imageCount += 1;
    const alt = (match[1] || '').trim();
    if (alt.length === 0) {
      issues.push({
        file,
        line: lineNumberForIndex(text, match.index ?? 0),
        message: 'Markdown image is missing alt text.',
      });
    }
  }

  for (const match of text.matchAll(htmlImagePattern)) {
    imageCount += 1;
    const tag = match[0];
    const before = text.slice(Math.max(0, (match.index ?? 0) - 40), match.index ?? 0);
    if (before.includes('HTML Code:') || before.includes('HTMLコード:')) {
      continue;
    }
    if (!/\balt\s*=/i.test(tag)) {
      issues.push({
        file,
        line: lineNumberForIndex(text, match.index ?? 0),
        message: 'HTML <img> tag is missing an alt attribute.',
      });
    }
  }
}

if (issues.length > 0) {
  console.error(`Image alt check failed with ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- ${issue.file}:${issue.line} ${issue.message}`);
  }
  process.exit(1);
}

console.log(`Image alt check passed. Checked ${imageCount} image reference(s) across Markdown content.`);
