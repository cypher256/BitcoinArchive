#!/usr/bin/env node
/**
 * Fetch context posts (3 posts before each Satoshi post + quoted posts)
 * from BitcoinTalk threads.
 *
 * Usage:
 *   node scripts/fetch-context-posts.mjs                    # dry-run: show what would be fetched
 *   node scripts/fetch-context-posts.mjs --write            # write md files
 *   node scripts/fetch-context-posts.mjs --topic=1735       # single topic (dry-run)
 *   node scripts/fetch-context-posts.mjs --topic=1735 --write
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const ENTRIES_EN = 'src/data/entries/en/forum/bitcointalk';
const TRANSLATIONS_JA = 'src/data/translations/ja/forum/bitcointalk';
const BEFORE_COUNT = 3;
const DELAY_MS = 2000; // polite delay between requests

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const doWrite = args.includes('--write');
const topicArg = args.find(a => a.startsWith('--topic='));
const singleTopic = topicArg ? topicArg.split('=')[1] : null;

// ---------------------------------------------------------------------------
// Read existing entries
// ---------------------------------------------------------------------------
function readFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*"?([^"]*)"?$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  fm._body = content.slice(m[0].length).trim();
  fm._raw = content;
  return fm;
}

function getAllEntries(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ file: f, ...readFrontmatter(join(dir, f)) }))
    .filter(Boolean);
}

/** Extract msg ID from sourceUrl */
function extractMsgId(url) {
  const m = url?.match(/msg(\d+)/);
  return m ? m[1] : null;
}

/** Extract topic number from sourceUrl */
function extractTopic(url) {
  const m = url?.match(/topic=(\d+)/);
  return m ? m[1] : null;
}

/** Extract quoted msg IDs and their topics from markdown body */
function extractQuotedMsgIds(body) {
  if (!body) return [];
  const ids = [];
  // Match both external URLs and internal anchors
  const re1 = /\[Quote from:.*?\]\(https?:\/\/bitcointalk\.org\/index\.php\?topic=(\d+)\.msg(\d+)/g;
  const re2 = /\[Quote from:.*?\]\(#msg(\d+)/g;
  let m;
  while ((m = re1.exec(body)) !== null) {
    ids.push({ msgId: m[2], topic: m[1] });
  }
  while ((m = re2.exec(body)) !== null) {
    ids.push({ msgId: m[1], topic: null });
  }
  return ids;
}

// ---------------------------------------------------------------------------
// BitcoinTalk scraping
// ---------------------------------------------------------------------------
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BitcoinArchive/1.0 (historical research)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

/**
 * Parse all posts from a BitcoinTalk HTML page.
 * Returns array of { msgId, author, date, dateISO, bodyHtml }
 */
function parsePostsFromHtml(html) {
  const posts = [];

  // Split by message anchors — each post has <a name="msgNNNN">
  // We use the windowbg/windowbg2 post containers
  const postRegex = /<td[^>]*class="td_headerandpost"[^>]*>[\s\S]*?<a\s+name="msg(\d+)"[\s\S]*?<\/td>\s*<\/tr>\s*<\/table>\s*<\/td>/gi;

  // Simpler approach: find each message div
  const msgDivRegex = /<div\s+id="subject_(\d+)"[\s\S]*?(?=<div\s+id="subject_\d+"|<td\s+class="catbg"\s+colspan)/gi;

  // Actually let's use a more reliable approach based on the structure
  // Each post has: <a name="msgNNNN"> and <div id="messageNNNN">
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

    // Author: <a href="...action=profile;u=..." title="...">USERNAME</a>
    const authorMatch = chunk.match(/action=profile;u=\d+[^>]*title="[^"]*"[^>]*>([^<]+)<\/a>/i)
      || chunk.match(/action=profile;u=\d+[^>]*>([^<]+)<\/a>/i);
    const author = authorMatch ? authorMatch[1].trim() : 'Unknown';

    // Date: appears after "on: " or in the headerandpost area
    // Format: "Month DD, YYYY, HH:MM:SS AM/PM"
    const dateMatch = chunk.match(/(?:on:|class="smalltext"[^>]*>)\s*(?:<b>)?\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4},\s+\d{1,2}:\d{2}:\d{2}\s+(?:AM|PM))/i);
    const dateStr = dateMatch ? dateMatch[1].trim() : '';
    const dateISO = parseForumDate(dateStr);

    // Body: <div class="post">CONTENT</div>
    // The post body is in a div with class="post", one per post chunk
    const bodyMatch = chunk.match(/<div\s+class="post">([\s\S]*?)<\/div>\s*<\/td>/i);
    const bodyHtml = bodyMatch ? bodyMatch[1].trim() : '';

    posts.push({ msgId, author, date: dateStr, dateISO, bodyHtml });
  }

  return posts;
}

function parseForumDate(str) {
  if (!str) return '';
  try {
    // "December 05, 2010, 09:08:08 AM" -> ISO
    // BitcoinTalk displays times in UTC
    const cleaned = str.replace(/,\s*(\d{1,2}:\d{2}:\d{2})/, ' $1');
    const d = new Date(cleaned + ' UTC');
    if (isNaN(d.getTime())) return '';
    return d.toISOString();
  } catch { return ''; }
}

function htmlToMarkdown(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    // BitcoinTalk quote blocks: <div class="quoteheader">...<div class="quote">...</div>
    .replace(/<div\s+class="quoteheader">\s*<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>\s*<\/div>\s*<div\s+class="quote">([\s\S]*?)<\/div>/gi,
      (_, url, header, body) => {
        const cleanHeader = header.replace(/<[^>]+>/g, '').trim();
        const cleanBody = body.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
        const lines = cleanBody.split('\n').map(l => `> ${l}`).join('\n');
        return `\n> [${cleanHeader}](${url})\n${lines}\n\n`;
      })
    // Fallback for simple blockquotes
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
      const lines = inner.trim().split('\n').map(l => `> ${l}`).join('\n');
      return `\n${lines}\n\n`;
    })
    // Strip remaining quote divs
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

/**
 * Fetch all posts for a topic, across pages.
 * Returns Map<msgId, post>
 */
async function fetchThreadPosts(topicNum, neededMsgIds) {
  const allPosts = new Map();
  const neededSet = new Set(neededMsgIds);

  // First, figure out which pages contain our needed messages
  // BitcoinTalk pages: topic=N.0, topic=N.20, topic=N.40 ...
  // A msg URL like topic=1735.msg26999 loads the page containing that message
  // We can fetch each needed message's page directly

  const pagesToFetch = new Set();
  for (const msgId of neededMsgIds) {
    pagesToFetch.add(`https://bitcointalk.org/index.php?topic=${topicNum}.msg${msgId}#msg${msgId}`);
  }

  for (const url of pagesToFetch) {
    console.log(`  Fetching: ${url}`);
    const html = await fetchPage(url);
    const posts = parsePostsFromHtml(html);
    for (const post of posts) {
      allPosts.set(post.msgId, post);
    }
    await sleep(DELAY_MS);
  }

  return allPosts;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log('Reading existing entries...');
  const enEntries = getAllEntries(ENTRIES_EN);
  const jaEntries = getAllEntries(TRANSLATIONS_JA);

  // Index existing entries by msgId
  const existingMsgIds = new Set();
  for (const e of enEntries) {
    const msgId = extractMsgId(e.sourceUrl);
    if (msgId) existingMsgIds.add(msgId);
  }

  // Group Satoshi posts by topic
  const satoshiByTopic = new Map(); // topicNum -> [{ msgId, threadId, quotedMsgIds }]
  for (const e of enEntries) {
    if (e.isSatoshi !== 'true') continue;
    const topic = extractTopic(e.sourceUrl);
    const msgId = extractMsgId(e.sourceUrl);
    if (!topic || !msgId) continue;
    if (singleTopic && topic !== singleTopic) continue;

    const quotedMsgIds = extractQuotedMsgIds(e._body);
    if (!satoshiByTopic.has(topic)) satoshiByTopic.set(topic, []);
    satoshiByTopic.get(topic).push({
      msgId,
      threadId: e.threadId,
      quotedMsgIds,
      file: e.file,
    });
  }

  console.log(`Found ${satoshiByTopic.size} topic(s) to process\n`);

  let totalNeeded = 0;
  let totalSkipped = 0;
  let totalWritten = 0;

  for (const [topicNum, satoshiPosts] of satoshiByTopic) {
    console.log(`\n=== Topic ${topicNum} (${satoshiPosts.length} Satoshi posts) ===`);

    // Derive thread title from existing entries (strip "Re: " prefix)
    const threadTitle = (() => {
      const threadId = satoshiPosts[0]?.threadId;
      if (!threadId) return '';
      const threadEntries = enEntries.filter(e => e.threadId === threadId);
      // Find the first non-"Re:" title, or strip "Re:" from the first one
      const original = threadEntries.find(e => e.title && !e.title.startsWith('Re:'));
      if (original) return original.title;
      const first = threadEntries[0];
      return first?.title?.replace(/^Re:\s*/, '') || '';
    })();

    // Collect all msg IDs we need to check (for "3 before" we need the page)
    // Also collect quoted msg IDs, tracking cross-topic quotes separately
    const quotedMsgIds = new Set();
    const crossTopicQuotes = new Map(); // msgId -> topicNum (for quotes from other topics)
    for (const sp of satoshiPosts) {
      for (const q of sp.quotedMsgIds) {
        if (!existingMsgIds.has(q.msgId)) {
          quotedMsgIds.add(q.msgId);
          if (q.topic && q.topic !== topicNum) {
            crossTopicQuotes.set(q.msgId, q.topic);
          }
        }
      }
    }

    // Fetch pages containing Satoshi's posts to find "3 before"
    const satoshiMsgIds = satoshiPosts.map(sp => sp.msgId);
    const sameTopicMsgIds = [...satoshiMsgIds, ...[...quotedMsgIds].filter(id => !crossTopicQuotes.has(id))];
    const threadPosts = await fetchThreadPosts(topicNum, sameTopicMsgIds);

    // Fetch cross-topic quoted posts
    for (const [msgId, quoteTopic] of crossTopicQuotes) {
      const crossPosts = await fetchThreadPosts(quoteTopic, [msgId]);
      for (const [id, post] of crossPosts) {
        threadPosts.set(id, post);
      }
    }

    // Build ordered list of all posts we found
    const orderedPosts = [...threadPosts.values()]
      .sort((a, b) => {
        // Sort by msgId numerically (reliable ordering)
        return parseInt(a.msgId) - parseInt(b.msgId);
      });

    // For each Satoshi post, find the 3 posts before it + quoted posts
    const neededPosts = new Map(); // msgId -> { post, reason }

    for (const sp of satoshiPosts) {
      const idx = orderedPosts.findIndex(p => p.msgId === sp.msgId);
      if (idx < 0) {
        console.log(`  WARNING: Satoshi msg${sp.msgId} not found in fetched data`);
        continue;
      }

      // 3 before
      for (let j = Math.max(0, idx - BEFORE_COUNT); j < idx; j++) {
        const post = orderedPosts[j];
        if (!existingMsgIds.has(post.msgId) && post.author.toLowerCase() !== 'satoshi') {
          neededPosts.set(post.msgId, { post, reason: `before msg${sp.msgId}` });
        }
      }

      // Quoted posts
      for (const q of sp.quotedMsgIds) {
        if (existingMsgIds.has(q.msgId)) continue;
        const post = threadPosts.get(q.msgId);
        if (post) {
          neededPosts.set(q.msgId, { post, reason: `quoted by msg${sp.msgId}`, quoteTopic: q.topic || topicNum });
        } else {
          console.log(`  WARNING: Quoted msg${q.msgId} not found (may be on different page)`);
        }
      }
    }

    console.log(`  Need ${neededPosts.size} new context posts`);

    for (const [msgId, { post, reason }] of neededPosts) {
      if (existingMsgIds.has(msgId)) {
        totalSkipped++;
        continue;
      }

      const body = htmlToMarkdown(post.bodyHtml);
      if (!body || !post.dateISO || post.author === 'Unknown') {
        console.log(`  SKIP msg${msgId}: ${!body ? 'empty body' : !post.dateISO ? 'no date' : 'unknown author'}`);
        continue;
      }

      // Determine threadId from the Satoshi post it's associated with
      const threadId = satoshiPosts[0]?.threadId || '';

      // Generate filename
      const datePrefix = post.dateISO ? post.dateISO.slice(0, 10) : 'unknown-date';
      const slug = post.author.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const fileName = `${datePrefix}-${slug}-msg${msgId}.md`;

      // Generate frontmatter
      const displayTitle = threadTitle ? `Re: ${threadTitle}` : `Re: (context post by ${post.author})`;
      const md = `---
title: "${displayTitle.replace(/"/g, '\\"')}"
date: ${post.dateISO || '2010-01-01T00:00:00Z'}
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=${topicNum}.msg${msgId}#msg${msgId}"
author: "${post.author}"
participants:
  - name: "${post.author}"
    slug: "${post.author.toLowerCase().replace(/\s+/g, '-')}"
description: "Context post by ${post.author} in BitcoinTalk topic ${topicNum}. ${reason}."
isSatoshi: false
threadId: "${threadId}"
tags: []
---

${body}
`;

      console.log(`  ${doWrite ? 'WRITE' : 'DRY-RUN'}: ${fileName} (${reason})`);

      if (doWrite) {
        const enPath = join(ENTRIES_EN, fileName);
        if (!existsSync(enPath)) {
          writeFileSync(enPath, md, 'utf8');
          totalWritten++;
          existingMsgIds.add(msgId);
        }
      }

      totalNeeded++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total new context posts needed: ${totalNeeded}`);
  console.log(`Skipped (already exist): ${totalSkipped}`);
  if (doWrite) console.log(`Written: ${totalWritten}`);
  if (!doWrite) console.log(`(dry-run mode — use --write to create files)`);
}

main().catch(e => { console.error(e); process.exit(1); });
