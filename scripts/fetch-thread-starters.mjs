#!/usr/bin/env node
/**
 * Fetch the first post (thread starter) for BitcoinTalk threads
 * that are missing their original post.
 *
 * Usage:
 *   node scripts/fetch-thread-starters.mjs              # dry-run
 *   node scripts/fetch-thread-starters.mjs --write      # write files
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const ENTRIES_EN = 'src/data/entries/en/forum/bitcointalk';
const DELAY_MS = 2000;

const args = process.argv.slice(2);
const doWrite = args.includes('--write');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BitcoinArchive/1.0 (historical research)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = await res.arrayBuffer();
  return new TextDecoder('utf-8', { fatal: false }).decode(buf);
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

function parseFirstPost(html) {
  // Find first message anchor
  const anchorM = html.match(/<a\s+name="msg(\d+)"/);
  if (!anchorM) return null;
  const msgId = anchorM[1];

  // Get chunk from this anchor to the next (or end)
  const startIdx = anchorM.index;
  const nextAnchor = html.indexOf('<a name="msg', startIdx + 1);
  const chunk = nextAnchor > 0 ? html.slice(startIdx, nextAnchor) : html.slice(startIdx, startIdx + 10000);

  // Title from page
  const titleM = html.match(/<title>\s*(.*?)\s*<\/title>/s);
  const title = titleM ? titleM[1].replace(/ - Bitcoin Forum$/, '').trim() : '';

  // Author
  const authorM = chunk.match(/action=profile;u=\d+[^>]*title="[^"]*"[^>]*>([^<]+)<\/a>/i)
    || chunk.match(/action=profile;u=\d+[^>]*>([^<]+)<\/a>/i);
  const author = authorM ? authorM[1].trim().replace(/&#\d+;/g, '') : 'Unknown';

  // Date
  const dateM = chunk.match(/(?:on:|class="smalltext"[^>]*>)\s*(?:<b>|<span[^>]*>)?\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4},\s+\d{1,2}:\d{2}:\d{2}\s+(?:AM|PM))/i);
  const dateISO = dateM ? parseForumDate(dateM[1].trim()) : '';

  // Body
  const bodyM = chunk.match(/<div\s+class="post">([\s\S]*?)<\/div>\s*<\/td>/i);
  let body = bodyM ? bodyM[1].trim() : '';

  // Convert HTML to markdown-ish text
  body = body
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return { msgId, author, dateISO, title, body };
}

async function main() {
  const topicDirs = readdirSync(ENTRIES_EN)
    .filter(d => d.startsWith('topic-') && existsSync(join(ENTRIES_EN, d)));

  const missing = [];

  for (const topicDir of topicDirs) {
    const topicPath = join(ENTRIES_EN, topicDir);
    const files = readdirSync(topicPath).filter(f => f.endsWith('.md'));
    if (files.length < 2) continue;

    let hasOriginal = false;
    const existingMsgs = new Set();

    for (const f of files) {
      const content = readFileSync(join(topicPath, f), 'utf8');
      const titleM = content.match(/title:\s*"([^"]*)"/);
      if (titleM && !titleM[1].startsWith('Re:')) {
        hasOriginal = true;
      }
      const msgM = content.match(/msg(\d+)#msg\1/);
      if (msgM) existingMsgs.add(msgM[1]);
    }

    if (!hasOriginal) {
      missing.push({ topicNum: topicDir.replace('topic-', ''), topicDir, existingMsgs });
    }
  }

  console.log(`Threads missing original post: ${missing.length}`);
  if (!doWrite) console.log('(dry-run mode — use --write to create files)\n');

  let fetched = 0;
  let skipped = 0;
  let errors = 0;

  for (const { topicNum, topicDir, existingMsgs } of missing) {
    const url = `https://bitcointalk.org/index.php?topic=${topicNum}.0`;

    try {
      const html = await fetchPage(url);
      const post = parseFirstPost(html);

      if (!post || !post.msgId) {
        console.log(`Topic ${topicNum}: ERROR — could not parse first post`);
        errors++;
        await sleep(DELAY_MS);
        continue;
      }

      if (existingMsgs.has(post.msgId)) {
        console.log(`Topic ${topicNum}: SKIP — msg${post.msgId} already exists`);
        skipped++;
        await sleep(DELAY_MS);
        continue;
      }

      const datePrefix = post.dateISO ? post.dateISO.slice(0, 10) : 'unknown-date';
      const slug = post.author.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      const fileName = `${datePrefix}-${slug}-msg${post.msgId}.md`;
      const title = post.title || `Topic ${topicNum}`;

      console.log(`Topic ${topicNum}: ${doWrite ? 'WRITE' : 'DRY-RUN'} — ${fileName} — "${title}" by ${post.author}`);

      if (doWrite) {
        const md = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${post.dateISO || '2010-01-01T00:00:00Z'}
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=${topicNum}.msg${post.msgId}#msg${post.msgId}"
author: "${post.author}"
participants:
  - name: "${post.author}"
    slug: "${slug}"
description: "Thread starter by ${post.author} in BitcoinTalk topic ${topicNum}."
isSatoshi: false
tags: []
---

${post.body}
`;
        const outPath = join(ENTRIES_EN, topicDir, fileName);
        if (!existsSync(outPath)) {
          writeFileSync(outPath, md, 'utf8');
          fetched++;
        }
      }

      await sleep(DELAY_MS);
    } catch (e) {
      console.log(`Topic ${topicNum}: ERROR — ${e.message}`);
      errors++;
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total missing: ${missing.length}`);
  console.log(`Fetched: ${fetched}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
}

main().catch(e => { console.error(e); process.exit(1); });
