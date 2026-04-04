#!/usr/bin/env node
/**
 * Fetch missing quoted posts from BitcoinTalk.
 * Scans all context posts (-msg*.md) for [Quote from:] links pointing
 * to posts not yet in the archive, then fetches and creates them.
 *
 * Usage:
 *   node scripts/fetch-quoted-posts.mjs           # dry-run
 *   node scripts/fetch-quoted-posts.mjs --write   # write files
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const ENTRIES_EN = 'src/data/entries/en/forum/bitcointalk';
const DELAY_MS = 2000;

const doWrite = process.argv.includes('--write');

// --- Reuse parser from fetch-context-posts.mjs ---

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BitcoinArchive/1.0 (historical research)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function parsePostsFromHtml(html) {
  const posts = [];
  const anchorRegex = /<a\s+name="msg(\d+)"/g;
  const msgIds = [];
  let match;
  while ((match = anchorRegex.exec(html)) !== null) {
    msgIds.push({ msgId: match[1], offset: match.index });
  }

  for (let i = 0; i < msgIds.length; i++) {
    const { msgId, offset } = msgIds[i];
    const endOffset = i + 1 < msgIds.length ? msgIds[i + 1].offset : html.length;
    const chunk = html.slice(offset, endOffset);

    const authorMatch = chunk.match(/action=profile;u=\d+[^>]*title="[^"]*"[^>]*>([^<]+)<\/a>/i)
      || chunk.match(/action=profile;u=\d+[^>]*>([^<]+)<\/a>/i)
      || chunk.match(/class="poster_info">\s*<b>([^<]+)<\/b>/i);
    const author = authorMatch ? authorMatch[1].trim().replace(/&#\d+;/g, '') : 'Unknown';

    const dateMatch = chunk.match(/(?:on:|class="smalltext"[^>]*>)\s*(?:<b>|<span[^>]*>)?\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4},\s+\d{1,2}:\d{2}:\d{2}\s+(?:AM|PM))/i);
    const dateStr = dateMatch ? dateMatch[1].trim() : '';
    const dateISO = parseForumDate(dateStr);

    const bodyMatch = chunk.match(/<div\s+class="post">([\s\S]*?)<\/div>\s*<\/td>/i);
    const bodyHtml = bodyMatch ? bodyMatch[1].trim() : '';

    posts.push({ msgId, author, date: dateStr, dateISO, bodyHtml });
  }
  return posts;
}

function parseForumDate(str) {
  if (!str) return '';
  try {
    const cleaned = str.replace(/,\s*(\d{1,2}:\d{2}:\d{2})/, ' $1');
    const d = new Date(cleaned + ' UTC');
    if (isNaN(d.getTime())) return '';
    return d.toISOString();
  } catch { return ''; }
}

// Import convertQuoteBlocks and htmlToMarkdown from fetch-context-posts
// For simplicity, inline them here
function convertQuoteBlocks(html, depth = 0) {
  const prefix = '> '.repeat(depth);
  let result = html;

  while (true) {
    const headerMatch = result.match(/<div\s+class="quoteheader">\s*<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>\s*<\/div>\s*<div\s+class="quote">/i);
    if (!headerMatch) break;

    const url = headerMatch[1];
    const headerText = headerMatch[2].replace(/<[^>]+>/g, '').trim();
    const startOfQuoteBody = headerMatch.index + headerMatch[0].length;

    let nestLevel = 1;
    let pos = startOfQuoteBody;
    while (pos < result.length && nestLevel > 0) {
      const nextOpen = result.indexOf('<div', pos);
      const nextClose = result.indexOf('</div>', pos);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        nestLevel++;
        pos = nextOpen + 4;
      } else {
        nestLevel--;
        if (nestLevel === 0) {
          const quoteBody = result.slice(startOfQuoteBody, nextClose);
          const innerConverted = convertQuoteBlocks(quoteBody, depth + 1);
          const innerPrefix = '> '.repeat(depth + 1);
          const cleanBody = innerConverted
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, ' ')
            .trim();
          const lines = cleanBody.split('\n').map(l => {
            if (l.startsWith('> ')) return `${prefix}${l}`;
            return `${prefix}> ${l}`;
          }).join('\n');

          const attribution = `${prefix}[${headerText}](${url})`;
          const replacement = `\n${attribution}\n${lines}\n\n`;
          result = result.slice(0, headerMatch.index) + replacement + result.slice(nextClose + 6);
          break;
        }
        pos = nextClose + 6;
      }
    }
    if (nestLevel > 0) break;
  }

  return result;
}

function htmlToMarkdown(html) {
  if (!html) return '';
  let result = convertQuoteBlocks(html);
  return result
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
      const lines = inner.trim().split('\n').map(l => `> ${l}`).join('\n');
      return `\n${lines}\n\n`;
    })
    .replace(/<div\s+class="quote(?:header)?"[^>]*>[\s\S]*?<\/div>/gi, '')
    .replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '$1')
    .replace(/<pre[^>]*>(.*?)<\/pre>/gis, '\n```\n$1\n```\n')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#\d+;/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// --- Main ---

async function main() {
  // Build existing msg index (recursive walk)
  const existing = new Set();
  const allFiles = []; // { path, relPath }
  function walkDir(dir, rel = '') {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      if (item.isDirectory()) {
        walkDir(join(dir, item.name), rel ? `${rel}/${item.name}` : item.name);
      } else if (item.name.endsWith('.md')) {
        allFiles.push({ path: join(dir, item.name), relPath: rel ? `${rel}/${item.name}` : item.name });
      }
    }
  }
  walkDir(ENTRIES_EN);

  for (const { path } of allFiles) {
    const content = readFileSync(path, 'utf8');
    const m = content.match(/sourceUrl:.*msg(\d+)#msg\1/);
    if (m) existing.add(m[1]);
  }

  // Find missing quoted msgs across ALL entries
  const missing = new Map(); // msgId -> { topic, sourcePath }
  for (const { path, relPath } of allFiles) {
    const content = readFileSync(path, 'utf8');
    const body = content.slice(content.indexOf('---', 4) + 3);

    const re = /\[Quote from:.*?\]\(https:\/\/bitcointalk\.org\/index\.php\?topic=(\d+)\.msg(\d+)/g;
    let m;
    while ((m = re.exec(body)) !== null) {
      if (!existing.has(m[2]) && !missing.has(m[2])) {
        missing.set(m[2], { topic: m[1], sourcePath: path });
      }
    }
  }

  console.log(`Missing quoted posts: ${missing.size}`);

  // Group by topic+page for efficient fetching
  const byPage = new Map(); // "topic.msgId" -> Set of needed msgIds
  for (const [msgId, info] of missing) {
    const key = `${info.topic}.${msgId}`;
    if (!byPage.has(key)) byPage.set(key, new Set());
    byPage.get(key).add(msgId);
  }

  let totalWritten = 0;

  // Fetch each page
  for (const [key, needed] of byPage) {
    const [topic, refMsgId] = key.split('.');
    const url = `https://bitcointalk.org/index.php?topic=${topic}.msg${refMsgId}#msg${refMsgId}`;

    try {
      console.log(`Fetching: ${url}`);
      const html = await fetchPage(url);
      const posts = parsePostsFromHtml(html);

      for (const post of posts) {
        if (!needed.has(post.msgId)) continue;
        if (existing.has(post.msgId)) continue;
        if (!post.dateISO || post.author === 'Unknown') {
          console.log(`  SKIP msg${post.msgId}: ${!post.dateISO ? 'no date' : 'unknown author'}`);
          continue;
        }

        const body = htmlToMarkdown(post.bodyHtml);
        if (!body) {
          console.log(`  SKIP msg${post.msgId}: empty body`);
          continue;
        }

        const info = missing.get(post.msgId);
        const datePrefix = post.dateISO.slice(0, 10);
        const slug = post.author.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const fileName = `${datePrefix}-${slug}-msg${post.msgId}.md`;

        const md = `---
title: "Re: (quoted post by ${post.author})"
date: ${post.dateISO}
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=${topic}.msg${post.msgId}#msg${post.msgId}"
author: "${post.author}"
participants:
  - name: "${post.author}"
    slug: "${slug}"
description: "Quoted post by ${post.author} in BitcoinTalk topic ${topic}."
isSatoshi: false
tags: []
---

${body}
`;

        console.log(`  ${doWrite ? 'WRITE' : 'DRY-RUN'}: ${fileName}`);

        if (doWrite) {
          const topicDir = join(ENTRIES_EN, `topic-${topic}`);
          mkdirSync(topicDir, { recursive: true });
          const outPath = join(topicDir, fileName);
          if (!existsSync(outPath)) {
            writeFileSync(outPath, md, 'utf8');
            existing.add(post.msgId);
            totalWritten++;
          }
        }
      }

      await sleep(DELAY_MS);
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  console.log(`\nTotal: ${totalWritten} written`);
}

main().catch(e => { console.error(e); process.exit(1); });
