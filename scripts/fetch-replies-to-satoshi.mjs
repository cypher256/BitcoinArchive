#!/usr/bin/env node
/**
 * fetch-replies-to-satoshi.mjs — Fetch replies to Satoshi posts from BitcoinTalk
 *
 * Fetches two categories of context posts that are missing from the archive:
 *   A. Posts immediately after each Satoshi post (3 by msgId order)
 *   B. Posts that quote Satoshi (anywhere in the same thread)
 *
 * Output is written in structured form (frontmatter quotes[] + body markers),
 * matching the post-Phase-3 quote normalization format. No legacy
 * `[Quote from:]` text is written to body.
 *
 * SAFETY GUARANTEES (per STYLE_GUIDE_JA "Existing File Preservation Guarantee"):
 * - safeWrite() refuses to overwrite any existing file
 * - safeWrite() whitelists write paths by pattern
 * - --apply is opt-in; default is dry-run
 * - MAX_FILES_PER_RUN limits batch size
 * - Helpers from fetch-context-posts.mjs are duplicated here, not imported
 *   (existing scripts must not be edited)
 *
 * Usage:
 *   node scripts/fetch-replies-to-satoshi.mjs                       # dry-run all topics
 *   node scripts/fetch-replies-to-satoshi.mjs --topics=823          # dry-run single topic
 *   node scripts/fetch-replies-to-satoshi.mjs --topics=12,17,55     # dry-run multiple
 *   node scripts/fetch-replies-to-satoshi.mjs --apply               # write changes
 *   node scripts/fetch-replies-to-satoshi.mjs --apply --max=200     # cap batch size
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, statSync } from 'fs';
import { join, relative, basename } from 'path';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ENTRIES_EN = 'src/data/entries/en/forum/bitcointalk';
const AFTER_COUNT = 3;
const DELAY_MS = 2000;
const DEFAULT_MAX_FILES = 200;

// Filter out posts after Satoshi's disappearance + 1 year buffer.
// Satoshi's last public activity was December 2010. Posts from 2012 onwards
// are typically by later users replying to old Satoshi posts and are not
// historically relevant context for Satoshi's communications.
const MAX_DATE = new Date('2012-01-01T00:00:00Z');

// Maximum pages to fetch per thread.
// Some threads grow into hundreds or thousands of pages over the years
// (e.g. topic-1976 has 1,154 pages as of 2026). Without a limit, fetching
// all pages takes hours and most pages are post-MAX_DATE garbage anyway.
//
// 50 pages = 1,000 posts, which covers Satoshi's active period (2010-2011)
// for any thread he participated in. We also early-terminate when we hit
// posts past MAX_DATE (BitcoinTalk threads are time-ordered).
const MAX_PAGES_PER_THREAD = 50;

// Whitelist for safeWrite — only files matching this pattern can be created
const ALLOWED_WRITE_PATTERN = /^src\/data\/entries\/en\/forum\/bitcointalk\/topic-\d+\/\d{4}-\d{2}-\d{2}-[a-z0-9_.-]+-msg\d+\.md$/;

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const doApply = args.includes('--apply');
const topicsArg = args.find(a => a.startsWith('--topics='));
const targetTopics = topicsArg ? topicsArg.split('=')[1].split(',') : null;
const maxArg = args.find(a => a.startsWith('--max='));
const MAX_FILES_PER_RUN = maxArg ? parseInt(maxArg.split('=')[1]) : DEFAULT_MAX_FILES;

// ---------------------------------------------------------------------------
// Safe write
// ---------------------------------------------------------------------------

function safeWrite(filePath, content) {
  const rel = relative(process.cwd(), filePath);

  // Guard 1: whitelist
  if (!ALLOWED_WRITE_PATTERN.test(rel)) {
    throw new Error(`REFUSED: write target outside allowed pattern: ${rel}`);
  }

  // Guard 2: never overwrite
  if (existsSync(filePath)) {
    throw new Error(`REFUSED: existing file would be overwritten: ${rel}`);
  }

  writeFileSync(filePath, content, 'utf8');
}

// ---------------------------------------------------------------------------
// Frontmatter helpers
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
  return fm;
}

function getAllEntries(dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  function walk(d) {
    for (const item of readdirSync(d, { withFileTypes: true })) {
      if (item.isDirectory()) {
        walk(join(d, item.name));
      } else if (item.name.endsWith('.md')) {
        const fm = readFrontmatter(join(d, item.name));
        if (fm) results.push({ file: item.name, fullPath: join(d, item.name), ...fm });
      }
    }
  }
  walk(dir);
  return results;
}

function extractMsgId(url) {
  const m = url?.match(/msg(\d+)/);
  return m ? m[1] : null;
}

function extractTopic(url) {
  const m = url?.match(/topic=(\d+)/);
  return m ? m[1] : null;
}

// ---------------------------------------------------------------------------
// BitcoinTalk scraping (helpers duplicated from fetch-context-posts.mjs)
// Per style guide: existing scripts must not be edited; duplicate instead.
// ---------------------------------------------------------------------------

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchPage(url, retries = 5) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        },
      });
      if (res.status === 429 || res.status >= 500) {
        const backoff = Math.pow(2, attempt) * 2000;
        console.error(`  HTTP ${res.status}, backing off ${backoff}ms (attempt ${attempt + 1}/${retries})`);
        await sleep(backoff);
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return res.text();
    } catch (e) {
      if (attempt === retries - 1) throw e;
      const backoff = Math.pow(2, attempt) * 2000;
      console.error(`  Fetch error: ${e.message}, backing off ${backoff}ms`);
      await sleep(backoff);
    }
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
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

/**
 * Get total page count for a topic from its first page HTML.
 * BitcoinTalk uses 20 posts per page.
 */
function extractPageCount(html) {
  // Look for pagination links: topic=N.M where M is a multiple of 20
  const re = /topic=\d+\.(\d+)/g;
  let maxOffset = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    const offset = parseInt(m[1]);
    if (offset > maxOffset) maxOffset = offset;
  }
  return Math.floor(maxOffset / 20) + 1;
}

/**
 * Fetch all posts for a topic across all pages.
 * Returns Map<msgId, post>
 */
async function fetchAllPagesOfTopic(topicNum) {
  const allPosts = new Map();

  // First page
  const firstUrl = `https://bitcointalk.org/index.php?topic=${topicNum}.0`;
  console.log(`  Fetching: ${firstUrl}`);
  const firstHtml = await fetchPage(firstUrl);
  const firstPosts = parsePostsFromHtml(firstHtml);
  for (const post of firstPosts) {
    allPosts.set(post.msgId, post);
  }
  await sleep(DELAY_MS);

  const totalPages = extractPageCount(firstHtml);
  const pagesToFetch = Math.min(totalPages, MAX_PAGES_PER_THREAD);
  if (totalPages > MAX_PAGES_PER_THREAD) {
    console.log(`  Total pages: ${totalPages} (limiting to ${MAX_PAGES_PER_THREAD})`);
  } else {
    console.log(`  Total pages: ${totalPages}`);
  }

  // Remaining pages (with date-based early termination)
  for (let page = 1; page < pagesToFetch; page++) {
    const offset = page * 20;
    const url = `https://bitcointalk.org/index.php?topic=${topicNum}.${offset}`;
    console.log(`  Fetching: ${url}`);
    const html = await fetchPage(url);
    const posts = parsePostsFromHtml(html);
    for (const post of posts) {
      allPosts.set(post.msgId, post);
    }
    await sleep(DELAY_MS);

    // Early termination: if all posts on this page are past MAX_DATE,
    // subsequent pages will be too (BitcoinTalk threads are time-ordered).
    const allPastMaxDate = posts.length > 0 && posts.every(p =>
      p.dateISO && new Date(p.dateISO) >= MAX_DATE
    );
    if (allPastMaxDate) {
      console.log(`  Stopped at page ${page}: all posts past MAX_DATE (${MAX_DATE.toISOString().slice(0,10)})`);
      break;
    }
  }

  return allPosts;
}

// ---------------------------------------------------------------------------
// Quote extraction (output in structured form)
// ---------------------------------------------------------------------------

/**
 * Extract structured quote data from a BitcoinTalk post HTML.
 * Returns { quotes[], bodyMarkdown } where bodyMarkdown uses
 * <!-- quote: qN --> markers instead of legacy [Quote from:] text.
 */
function extractStructuredQuotes(html) {
  const quotes = [];
  let counter = 0;

  // Recursively process quotes
  function processQuotes(input, depth = 0) {
    let result = input;

    while (true) {
      const headerMatch = result.match(/<div\s+class="quoteheader">\s*<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>\s*<\/div>\s*<div\s+class="quote">/i);
      if (!headerMatch) break;

      const url = headerMatch[1];
      const headerText = headerMatch[2].replace(/<[^>]+>/g, '').trim();
      const startOfQuoteBody = headerMatch.index + headerMatch[0].length;

      // Find matching </div>
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
            counter++;
            const quoteId = `q${counter}`;
            const quoteBody = result.slice(startOfQuoteBody, nextClose);

            // Parse "Quote from: NAME on DATE"
            const parsed = headerText.match(/^Quote from:\s+(.+?)\s+on\s+(.+?)$/i);
            const person = parsed ? parsed[1].trim() : null;
            const date = parsed ? parseForumDate(parsed[2].trim()) : null;

            // Resolve sourceEntryId from URL
            let sourceEntryId = null;
            const urlMatch = url.match(/topic=(\d+)\.msg(\d+)/);
            if (urlMatch) {
              const topic = urlMatch[1];
              const msgId = urlMatch[2];
              sourceEntryId = `forum/bitcointalk/topic-${topic}/?msg=${msgId}`; // placeholder, will be resolved later
            }

            quotes.push({ id: quoteId, person, date, sourceEntryId });

            // Recursively process inner content
            const innerProcessed = processQuotes(quoteBody, depth + 1);

            // Build replacement: marker + blockquote with > prefix
            const cleanInner = innerProcessed
              .replace(/<br\s*\/?>/gi, '\n')
              .replace(/<[^>]+>/g, '')
              .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, ' ')
              .trim();
            const prefix = '> '.repeat(depth);
            const innerLines = cleanInner.split('\n').map(l => {
              if (l.startsWith('> ') || l.startsWith('<!-- quote:')) return `${prefix}${l}`;
              return `${prefix}> ${l}`;
            }).join('\n');

            const marker = `${prefix}<!-- quote: ${quoteId} -->`;
            const replacement = `\n${marker}\n${innerLines}\n\n`;
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

  const processed = processQuotes(html);

  // Convert remaining HTML to markdown
  // BUG FIX: protect <!-- quote: qN --> markers before stripping HTML tags
  const bodyMarkdown = processed
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
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
    // Strip remaining HTML tags but PRESERVE <!-- ... --> comments
    .replace(/<(?!!--)([^>]+)>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&#\d+;/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return { quotes, bodyMarkdown };
}

/**
 * Check if a post quotes Satoshi (case-insensitive).
 */
function postQuotesSatoshi(bodyHtml) {
  return /<div\s+class="quoteheader">\s*<a[^>]*>Quote from:\s+satoshi\s+on/i.test(bodyHtml);
}

// ---------------------------------------------------------------------------
// Resolve sourceEntryId by looking up existing entries
// ---------------------------------------------------------------------------

function buildMsgIdToSlugMap(entries) {
  const map = new Map();
  for (const e of entries) {
    const msgId = extractMsgId(e.sourceUrl);
    const topic = extractTopic(e.sourceUrl);
    if (!msgId || !topic) continue;
    const slug = e.file.replace(/\.md$/, '');
    map.set(msgId, `forum/bitcointalk/topic-${topic}/${slug}`);
  }
  return map;
}

// ---------------------------------------------------------------------------
// Generate output file content
// ---------------------------------------------------------------------------

function generateMarkdown(post, threadTitle, topicNum, reason, msgIdToSlug) {
  const { quotes, bodyMarkdown } = extractStructuredQuotes(post.bodyHtml);

  // Resolve sourceEntryId for each quote
  for (const q of quotes) {
    if (q.sourceEntryId?.includes('?msg=')) {
      const msgId = q.sourceEntryId.match(/\?msg=(\d+)/)[1];
      const resolved = msgIdToSlug.get(msgId);
      q.sourceEntryId = resolved || null;
    }
  }

  const slug = post.author.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const fileName = `${post.dateISO.slice(0, 10)}-${slug}-msg${post.msgId}.md`;
  const displayTitle = threadTitle ? `Re: ${threadTitle}` : `Re: (context post by ${post.author})`;
  const personSlugForAuthor = post.author.toLowerCase().replace(/\s+/g, '-');

  let frontmatter = `---
title: "${displayTitle.replace(/"/g, '\\"')}"
date: ${post.dateISO}
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=${topicNum}.msg${post.msgId}#msg${post.msgId}"
author: "${post.author}"
participants:
  - name: "${post.author}"
    slug: "${personSlugForAuthor}"
description: "Context post by ${post.author} in BitcoinTalk topic ${topicNum}. ${reason}."
isSatoshi: false
tags: []`;

  if (quotes.length > 0) {
    frontmatter += '\nquotes:';
    for (const q of quotes) {
      frontmatter += `\n  - id: "${q.id}"`;
      if (q.person) frontmatter += `\n    person: "${q.person.replace(/"/g, '\\"')}"`;
      if (q.date) frontmatter += `\n    date: "${q.date}"`;
      if (q.sourceEntryId) frontmatter += `\n    sourceEntryId: "${q.sourceEntryId}"`;
    }
  }

  return `${frontmatter}\n---\n\n${bodyMarkdown}\n`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Mode: ${doApply ? 'APPLY' : 'DRY RUN'}`);
  console.log(`Max files per run: ${MAX_FILES_PER_RUN}`);
  if (targetTopics) console.log(`Target topics: ${targetTopics.join(', ')}`);
  console.log();

  console.log('Reading existing entries...');
  const enEntries = getAllEntries(ENTRIES_EN);
  console.log(`  ${enEntries.length} EN entries found`);

  // Build msg ID set and map
  const existingMsgIds = new Set();
  for (const e of enEntries) {
    const msgId = extractMsgId(e.sourceUrl);
    if (msgId) existingMsgIds.add(msgId);
  }
  console.log(`  ${existingMsgIds.size} existing msg IDs`);

  const msgIdToSlug = buildMsgIdToSlugMap(enEntries);

  // Group Satoshi posts by topic
  const satoshiByTopic = new Map();
  for (const e of enEntries) {
    if (e.isSatoshi !== 'true') continue;
    const topic = extractTopic(e.sourceUrl);
    const msgId = extractMsgId(e.sourceUrl);
    if (!topic || !msgId) continue;
    if (targetTopics && !targetTopics.includes(topic)) continue;

    if (!satoshiByTopic.has(topic)) satoshiByTopic.set(topic, []);
    satoshiByTopic.get(topic).push({ msgId, file: e.file });
  }

  console.log(`  ${satoshiByTopic.size} topic(s) to process\n`);

  let totalNeeded = 0;
  let totalWritten = 0;
  let totalSkipped = 0;

  outer:
  for (const [topicNum, satoshiPosts] of satoshiByTopic) {
    if (totalWritten >= MAX_FILES_PER_RUN) {
      console.log(`\nSTOP: reached max files per run (${MAX_FILES_PER_RUN})`);
      break;
    }

    console.log(`\n=== Topic ${topicNum} (${satoshiPosts.length} Satoshi posts) ===`);

    // Derive thread title
    const threadTitle = (() => {
      const topicEntries = enEntries.filter(e => extractTopic(e.sourceUrl) === topicNum);
      const original = topicEntries.find(e => e.title && !e.title.startsWith('Re:'));
      if (original) return original.title;
      const first = topicEntries[0];
      return first?.title?.replace(/^Re:\s*/, '') || '';
    })();

    let allPosts;
    try {
      allPosts = await fetchAllPagesOfTopic(topicNum);
    } catch (e) {
      console.error(`  ERROR fetching topic ${topicNum}: ${e.message}`);
      continue;
    }

    const orderedPosts = [...allPosts.values()].sort((a, b) => parseInt(a.msgId) - parseInt(b.msgId));
    console.log(`  Total posts in thread: ${orderedPosts.length}`);

    const needed = new Map(); // msgId -> { post, reason }

    // Rule A: 3 posts after each Satoshi post (msgId order)
    // Filter: must be before MAX_DATE
    for (const sp of satoshiPosts) {
      const idx = orderedPosts.findIndex(p => p.msgId === sp.msgId);
      if (idx < 0) {
        console.log(`  WARNING: Satoshi msg${sp.msgId} not found in fetched data`);
        continue;
      }
      for (let j = idx + 1; j <= Math.min(idx + AFTER_COUNT, orderedPosts.length - 1); j++) {
        const post = orderedPosts[j];
        if (existingMsgIds.has(post.msgId)) continue;
        if (post.author.toLowerCase() === 'satoshi') continue;
        if (post.dateISO && new Date(post.dateISO) >= MAX_DATE) continue;
        if (!needed.has(post.msgId)) {
          needed.set(post.msgId, { post, reason: `after msg${sp.msgId}` });
        }
      }
    }

    // Rule B: Posts that quote Satoshi anywhere in the thread
    // Filter: must be before MAX_DATE (Satoshi disappearance + 1 year buffer)
    for (const post of orderedPosts) {
      if (existingMsgIds.has(post.msgId)) continue;
      if (post.author.toLowerCase() === 'satoshi') continue;
      if (post.dateISO && new Date(post.dateISO) >= MAX_DATE) continue;
      if (postQuotesSatoshi(post.bodyHtml)) {
        if (!needed.has(post.msgId)) {
          needed.set(post.msgId, { post, reason: `quotes Satoshi` });
        } else {
          // Already in (from Rule A); merge reason
          const existing = needed.get(post.msgId);
          existing.reason = `${existing.reason}, quotes Satoshi`;
        }
      }
    }

    console.log(`  Needed: ${needed.size} new posts`);

    for (const [msgId, { post, reason }] of needed) {
      if (totalWritten >= MAX_FILES_PER_RUN) {
        console.log(`  STOP: reached max files per run`);
        break outer;
      }

      if (!post.dateISO || post.author === 'Unknown' || !post.bodyHtml) {
        console.log(`  SKIP msg${msgId}: ${!post.dateISO ? 'no date' : post.author === 'Unknown' ? 'unknown author' : 'empty body'}`);
        totalSkipped++;
        continue;
      }

      const md = generateMarkdown(post, threadTitle, topicNum, reason, msgIdToSlug);
      const slug = post.author.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const fileName = `${post.dateISO.slice(0, 10)}-${slug}-msg${msgId}.md`;
      const topicDir = join(ENTRIES_EN, `topic-${topicNum}`);
      const enPath = join(topicDir, fileName);

      console.log(`  ${doApply ? 'WRITE' : 'DRY-RUN'}: ${fileName} (${reason})`);

      if (doApply) {
        mkdirSync(topicDir, { recursive: true });
        try {
          safeWrite(enPath, md);
          totalWritten++;
          existingMsgIds.add(msgId);
        } catch (e) {
          console.error(`  ${e.message}`);
        }
      } else {
        totalNeeded++;
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Topics processed: ${satoshiByTopic.size}`);
  if (doApply) {
    console.log(`Files written: ${totalWritten}`);
  } else {
    console.log(`Files needed: ${totalNeeded}`);
  }
  console.log(`Skipped: ${totalSkipped}`);
  if (!doApply) {
    console.log('\nRun with --apply to write files.');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
