#!/usr/bin/env node
/**
 * check-external-body-links.mjs — keep editor-selected external URLs out of
 * entry bodies while preserving historical source text.
 *
 * Editorial body URLs belong in sourceUrl / secondarySources[]. URLs in
 * verbatim primary records and editorial blockquotes are source text and are
 * allowed to remain, but the renderer removes their clickability. Editor
 * notes are never an exception: an external URL there is a hard failure.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCALE_ROOTS = [
  path.join(ROOT, 'src/data/entries/en'),
  path.join(ROOT, 'src/data/translations/ja'),
];

const VERBATIM_DIRS = [
  '/forum/',
  '/correspondence/',
  '/emails/',
  '/blog/',
  '/bip/',
  '/tweets/',
  '/tweet/',
  '/whitepaper/',
  '/court-document/',
];

const VERBATIM_TYPES = new Set([
  'forum-post',
  'mailing-list',
  'correspondence',
  'blog-post',
  'bip',
  'whitepaper',
  'court-document',
  'tweet',
]);

const EDITORIAL_MARKER = /^\s*\*\[(?:Editor:\s|Context:\s|編者注[：:]|補足[：:])/;
const EXTERNAL_URL = /https?:\/\/[^\s<>'"`]+/gi;

function displayUrl(rawUrl) {
  const markdownClose = rawUrl.indexOf(')');
  if (markdownClose >= 0 && !rawUrl.slice(0, markdownClose).includes('(')) {
    return rawUrl.slice(0, markdownClose);
  }
  return rawUrl.replace(/[\]\}>.,;:!?、。！？）」』】〉》）]+$/u, '');
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = statSync(file);
    if (stat.isDirectory()) walk(file, out);
    else if (stat.isFile() && name.endsWith('.md')) out.push(file);
  }
  return out;
}

function splitEntry(content) {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  if (!match) return { frontmatter: '', body: content, bodyStart: 0 };
  return {
    frontmatter: match[0],
    body: content.slice(match[0].length),
    bodyStart: match[0].length,
  };
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?([^\\s"']+)["']?\\s*$`, 'm'));
  return match?.[1] ?? null;
}

function isVerbatim(file, type) {
  const normalized = file.replaceAll(path.sep, '/');
  return VERBATIM_DIRS.some((dir) => normalized.includes(dir)) || VERBATIM_TYPES.has(type);
}

function maskInlineCode(line) {
  let masked = '';
  let index = 0;
  while (index < line.length) {
    if (line[index] !== '`') {
      masked += line[index];
      index += 1;
      continue;
    }
    let end = index;
    while (line[end] === '`') end += 1;
    const fence = line.slice(index, end);
    const close = line.indexOf(fence, end);
    if (close === -1) {
      masked += line.slice(index);
      break;
    }
    masked += ' '.repeat(close + fence.length - index);
    index = close + fence.length;
  }
  return masked;
}

function stripHtmlComments(line, state) {
  let next = line;
  while (state.inComment) {
    const end = next.indexOf('-->');
    if (end === -1) return '';
    next = next.slice(end + 3);
    state.inComment = false;
  }
  while (true) {
    const start = next.indexOf('<!--');
    if (start === -1) return next;
    const end = next.indexOf('-->', start + 4);
    if (end === -1) {
      state.inComment = true;
      return next.slice(0, start);
    }
    next = `${next.slice(0, start)}${next.slice(end + 3)}`;
  }
}

function isFenceLine(line) {
  return /^\s*(?:```+|~~~+)/.test(line);
}

function isBlockquoteLine(line, state) {
  if (/^\s*>/.test(line)) {
    state.inBlockquote = true;
    return true;
  }
  if (/^\s*$/.test(line)) {
    state.inBlockquote = false;
    return false;
  }
  return state.inBlockquote;
}

function lineNumber(content, bodyStart, bodyLine) {
  return content.slice(0, bodyStart).split(/\r?\n/).length + bodyLine;
}

function main() {
  const files = LOCALE_ROOTS.flatMap((dir) => walk(dir));
  const violations = [];
  let preservedUrls = 0;
  let scannedUrls = 0;

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const { frontmatter, body, bodyStart } = splitEntry(content);
    const type = scalar(frontmatter, 'type');
    const wholeFileVerbatim = isVerbatim(file, type);
    const lines = body.split(/\r?\n/);
    const commentState = { inComment: false };
    const blockquoteState = { inBlockquote: false };
    let fence = false;
    let editorNote = false;

    lines.forEach((rawLine, index) => {
      if (isFenceLine(rawLine)) {
        fence = !fence;
        return;
      }
      if (fence) return;

      if (!editorNote && EDITORIAL_MARKER.test(rawLine)) editorNote = true;
      const inEditorNote = editorNote;
      const inBlockquote = isBlockquoteLine(rawLine, blockquoteState);
      const line = maskInlineCode(stripHtmlComments(rawLine, commentState));
      const matches = [...line.matchAll(EXTERNAL_URL)];
      if (matches.length === 0) {
        if (editorNote && /\]\*\s*$/.test(rawLine)) editorNote = false;
        return;
      }

      for (const match of matches) {
        scannedUrls += 1;
        const url = displayUrl(match[0]);
        const historical = wholeFileVerbatim || inBlockquote;
        if (inEditorNote) {
          violations.push({ file, line: lineNumber(content, bodyStart, index + 1), url, reason: 'editor-note' });
        } else if (!historical) {
          violations.push({ file, line: lineNumber(content, bodyStart, index + 1), url, reason: 'editorial-body' });
        } else {
          preservedUrls += 1;
        }
      }

      if (editorNote && /\]\*\s*$/.test(rawLine)) editorNote = false;
    });
  }

  console.log(`External body-link check: ${files.length} entries scanned, ${scannedUrls} body URL(s) found, ${preservedUrls} historical URL(s) allowed.`);
  if (violations.length === 0) {
    console.log('External body-link check: no editor-selected external URLs remain in entry bodies.');
    return;
  }

  console.error(`External body-link check FAILED: ${violations.length} prohibited URL(s).`);
  for (const violation of violations.slice(0, 120)) {
    const relative = path.relative(ROOT, violation.file);
    console.error(`- ${relative}:${violation.line} [${violation.reason}] ${violation.url}`);
  }
  if (violations.length > 120) {
    console.error(`- ... ${violations.length - 120} more`);
  }
  process.exitCode = 1;
}

main();
