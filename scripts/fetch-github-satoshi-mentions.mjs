#!/usr/bin/env node
/**
 * fetch-github-satoshi-mentions.mjs — Fetch GitHub Issue/PR comments
 * that mention Satoshi from bitcoin/bitcoin repository.
 *
 * Follows the same pattern as the BitcoinTalk fetch scripts:
 *   1. Thread starter (Issue/PR body)
 *   2. Comments that mention "satoshi" (case-insensitive, person not unit)
 *   3. N comments before and after each mention comment (context)
 *
 * Output directory: src/data/entries/en/forum/github/issue-{N}/ or pr-{N}/
 * Thread system in threads.ts auto-detects forum/github/* directories.
 *
 * SAFETY GUARANTEES:
 * - safeWrite() refuses to overwrite any existing file
 * - safeWrite() whitelists write paths by pattern
 * - --apply is opt-in; default is dry-run
 * - MAX_FILES_PER_RUN limits batch size
 *
 * Requires: GITHUB_TOKEN env var or `gh` CLI authenticated.
 *
 * Usage:
 *   node scripts/fetch-github-satoshi-mentions.mjs                      # dry-run all
 *   node scripts/fetch-github-satoshi-mentions.mjs --issues=7,108       # dry-run specific
 *   node scripts/fetch-github-satoshi-mentions.mjs --apply              # write changes
 *   node scripts/fetch-github-satoshi-mentions.mjs --apply --max=100    # cap batch
 *   node scripts/fetch-github-satoshi-mentions.mjs --context=3          # context window (default: 3)
 */

import { writeFileSync, existsSync, readdirSync, readFileSync, mkdirSync } from 'fs';
import { join, relative } from 'path';
import { execSync } from 'child_process';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const REPO = 'bitcoin/bitcoin';
const ENTRIES_DIR = 'src/data/entries/en/forum/github';
const DEFAULT_CONTEXT = 3;
const DEFAULT_MAX_FILES = 200;
const DELAY_MS = 1000; // polite delay between API calls

// Whitelist for safeWrite — only files matching this pattern can be created
const ALLOWED_WRITE_PATTERN = /^src\/data\/entries\/en\/forum\/github\/(?:issue|pr)-\d+\/\d{4}-\d{2}-\d{2}-[a-z0-9_.-]+\.md$/;

// Target Issues/PRs with known Satoshi mentions by early committers.
// Format: { number, type: 'issue'|'pr' }
// Discovered via GitHub search of comments by gavinandresen, jgarzik, sipa, laanwj
const TARGETS = [
  // Gavin Andresen mentions
  { number: 7,    type: 'issue' },  // Block-header-only — "Notes from Satoshi"
  { number: 108,  type: 'issue' },  // Improve -rescan — "Idea from Satoshi"
  { number: 117,  type: 'pr'    },  // Rate-limit free transactions — "Original code from Satoshi"
  { number: 173,  type: 'pr'    },  // Accept non-standard on testnet — "Satoshi suggested"
  { number: 241,  type: 'issue' },  // .conf file path — "Satoshi re-wrote my implementation"
  { number: 1042, type: 'pr'    },  // Remove USE_SSL — "Satoshi and I couldn't figure out"
  { number: 2161, type: 'pr'    },  // Remove fClient — "code snippet I got from Satoshi"
  // Jeff Garzik mentions
  { number: 91,   type: 'pr'    },  // Log timestamp — Satoshi's privacy concern via IRC
  { number: 1367, type: 'pr'    },  // BDB DB_PRIVATE — "satoshi removed DB_PRIVATE at my urging"
  // Pieter Wuille mentions
  { number: 122,  type: 'pr'    },  // Spent per txout — "written by Satoshi"
  // Wladimir van der Laan mentions
  { number: 1620, type: 'pr'    },  // Change window titles — "it's 'Satoshi'"
  { number: 4067, type: 'pr'    },  // Encapsulate coin balances — "Years after Satoshi left"
  { number: 4641, type: 'pr'    },  // Remove satoshi's naming style
  { number: 7512, type: 'issue' },  // Misattributed authorship — Satoshi commits
];

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const doApply = args.includes('--apply');
const issuesArg = args.find(a => a.startsWith('--issues='));
const targetFilter = issuesArg ? new Set(issuesArg.split('=')[1].split(',').map(Number)) : null;
const maxArg = args.find(a => a.startsWith('--max='));
const MAX_FILES_PER_RUN = maxArg ? parseInt(maxArg.split('=')[1]) : DEFAULT_MAX_FILES;
const ctxArg = args.find(a => a.startsWith('--context='));
const CONTEXT_COUNT = ctxArg ? parseInt(ctxArg.split('=')[1]) : DEFAULT_CONTEXT;

// ---------------------------------------------------------------------------
// Safe write (same pattern as fetch-replies-to-satoshi.mjs)
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
// GitHub API via gh CLI
// ---------------------------------------------------------------------------

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function ghApi(endpoint) {
  try {
    const result = execSync(
      `gh api "${endpoint}" --paginate`,
      { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
    );
    return JSON.parse(result);
  } catch (e) {
    // --paginate may concatenate multiple JSON arrays; try to fix
    try {
      const result = execSync(
        `gh api "${endpoint}" --paginate`,
        { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
      );
      // gh --paginate concatenates JSON arrays: [{...}][{...}] -> merge
      const fixed = '[' + result.replace(/\]\s*\[/g, ',') + ']';
      return JSON.parse(fixed);
    } catch {
      throw new Error(`gh api failed for ${endpoint}: ${e.message}`);
    }
  }
}

function ghApiSingle(endpoint) {
  const result = execSync(
    `gh api "${endpoint}"`,
    { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
  );
  return JSON.parse(result);
}

// ---------------------------------------------------------------------------
// Fetch Issue/PR data
// ---------------------------------------------------------------------------

async function fetchIssueOrPr(number) {
  console.log(`  Fetching issue/PR #${number}...`);
  const data = ghApiSingle(`/repos/${REPO}/issues/${number}`);
  await sleep(DELAY_MS);
  return data;
}

async function fetchComments(number) {
  console.log(`  Fetching comments for #${number}...`);
  // Issues and PRs share the same comments endpoint for regular comments
  const comments = ghApi(`/repos/${REPO}/issues/${number}/comments?per_page=100`);
  await sleep(DELAY_MS);

  // For PRs, also fetch review comments (inline code comments)
  let reviewComments = [];
  try {
    reviewComments = ghApi(`/repos/${REPO}/pulls/${number}/comments?per_page=100`);
    await sleep(DELAY_MS);
  } catch {
    // Not a PR, or no review comments — that's fine
  }

  return { comments, reviewComments };
}

// ---------------------------------------------------------------------------
// Satoshi mention detection
// ---------------------------------------------------------------------------

/**
 * Check if text mentions Satoshi as a person (not as a unit "satoshi").
 * Returns true for person references, false for unit references.
 */
function mentionsSatoshiAsPerson(text) {
  if (!text) return false;
  const lower = text.toLowerCase();

  // Must contain "satoshi" somewhere
  if (!lower.includes('satoshi')) return false;

  // Patterns that indicate person reference (case-insensitive)
  const personPatterns = [
    /\bsatoshi\s+nakamoto\b/i,
    /\bsatoshi'?s?\s+(?:code|email|suggestion|idea|implementation|design|style|naming|variable|commit|work|departure|disappear|left|wrote|said|suggested|removed|asked|added|put|re-?wrote|original|notes?|snippet|blessing|format|branch|patch|approach|logic|method)\b/i,
    /\bfrom\s+satoshi\b/i,
    /\bby\s+satoshi\b/i,
    /\bsatoshi\s+(?:wrote|said|suggested|removed|asked|added|put|did|had|was|has|wanted|thought|designed|implemented|started|created|used|never|would|could|should|might|may|sent|gave|made|pulled|pushed|re-?wrote|mentioned|noted|proposed|intended|envisioned|planned|built|chose|preferred|decided|accepted|rejected|merged|committed)\b/i,
    /\bsatoshi\s+and\s+(?:i|me|we|gavin|jeff)\b/i,
    /\bwith\s+satoshi\b/i,
    /\bsatoshi\s+client\b/i,  // "Satoshi client" = the original Bitcoin client
    /\bquote\s+from[:\s]+satoshi\b/i,
    /\b(?:after|before|when|since|until)\s+satoshi\b/i,
    /\bsatoshi\s*$/im, // "it's 'Satoshi'" at end of line
  ];

  for (const pat of personPatterns) {
    if (pat.test(text)) return true;
  }

  // Unit patterns (negative match — these are NOT person references)
  const unitPatterns = [
    /\d+\s*satoshi/i,
    /satoshi\s*(?:per|\/)/i,
    /(?:micro|milli|nano)\s*satoshi/i,
    /in\s+(?:decimal|binary|hexadecimal|base)\b.*satoshi/i,
    /btc\/.*satoshi/i,
  ];

  for (const pat of unitPatterns) {
    if (pat.test(text)) return false;
  }

  // Capitalized "Satoshi" alone is more likely a person reference
  if (/\bSatoshi\b/.test(text)) return true;

  return false;
}

// ---------------------------------------------------------------------------
// Markdown conversion
// ---------------------------------------------------------------------------

function githubMarkdownClean(body) {
  if (!body) return '';
  // GitHub comments are already in markdown, just clean up
  return body
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// Existing entries detection
// ---------------------------------------------------------------------------

function getExistingEntryIds(dir) {
  const ids = new Set();
  if (!existsSync(dir)) return ids;
  for (const subdir of readdirSync(dir, { withFileTypes: true })) {
    if (!subdir.isDirectory()) continue;
    const subPath = join(dir, subdir.name);
    for (const f of readdirSync(subPath)) {
      if (f.endsWith('.md')) {
        // Read sourceUrl to detect existing entries
        try {
          const content = readFileSync(join(subPath, f), 'utf8');
          const urlMatch = content.match(/sourceUrl:\s*"([^"]*)"/);
          if (urlMatch) ids.add(urlMatch[1]);
        } catch { /* skip */ }
      }
    }
  }
  return ids;
}

// ---------------------------------------------------------------------------
// Generate markdown files
// ---------------------------------------------------------------------------

function generateThreadStarter(issue, threadType) {
  const date = new Date(issue.created_at);
  const dateStr = date.toISOString();
  const datePrefix = dateStr.slice(0, 10);
  const authorSlug = slugify(issue.user.login);
  const fileName = `${datePrefix}-${threadType}-${issue.number}-${slugify(issue.title).slice(0, 50)}.md`;
  const isPr = !!issue.pull_request;
  const typeLabel = isPr ? 'PR' : 'Issue';

  const body = githubMarkdownClean(issue.body);

  const md = `---
title: "${issue.title.replace(/"/g, '\\"')}"
date: ${dateStr}
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/${REPO}/${isPr ? 'pull' : 'issues'}/${issue.number}"
author: "${issue.user.login}"
participants:
  - name: "${issue.user.login}"
    slug: "${authorSlug}"
description: "${typeLabel} #${issue.number} thread starter by ${issue.user.login} in ${REPO}."
isSatoshi: false
tags:
  - "github"
  - "${isPr ? 'pull-request' : 'issue'}"
---

${body}
`;

  return { fileName, md };
}

function generateComment(comment, issue, threadType, reason) {
  const date = new Date(comment.created_at);
  const dateStr = date.toISOString();
  const datePrefix = dateStr.slice(0, 10);
  const authorSlug = slugify(comment.user.login);
  const fileName = `${datePrefix}-${authorSlug}-comment-${comment.id}.md`;
  const isPr = !!issue.pull_request;
  const displayTitle = `Re: ${issue.title}`;

  const body = githubMarkdownClean(comment.body);

  const md = `---
title: "${displayTitle.replace(/"/g, '\\"')}"
date: ${dateStr}
type: "forum-post"
source: "github"
sourceUrl: "${comment.html_url}"
author: "${comment.user.login}"
participants:
  - name: "${comment.user.login}"
    slug: "${authorSlug}"
description: "Comment by ${comment.user.login} in ${REPO} ${isPr ? 'PR' : 'issue'} #${issue.number}. ${reason}."
isSatoshi: false
tags:
  - "github"
---

${body}
`;

  return { fileName, md };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Mode: ${doApply ? 'APPLY' : 'DRY RUN'}`);
  console.log(`Max files per run: ${MAX_FILES_PER_RUN}`);
  console.log(`Context window: ${CONTEXT_COUNT} before + ${CONTEXT_COUNT} after`);
  if (targetFilter) console.log(`Target issues: ${[...targetFilter].join(', ')}`);
  console.log();

  // Check existing entries
  const existingUrls = getExistingEntryIds(ENTRIES_DIR);
  console.log(`Existing GitHub entries: ${existingUrls.size}`);

  const targets = targetFilter
    ? TARGETS.filter(t => targetFilter.has(t.number))
    : TARGETS;

  let totalWritten = 0;
  let totalNeeded = 0;
  let totalSkipped = 0;

  for (const target of targets) {
    if (totalWritten >= MAX_FILES_PER_RUN) {
      console.log(`\nSTOP: reached max files per run (${MAX_FILES_PER_RUN})`);
      break;
    }

    const { number, type: threadType } = target;
    const dirName = `${threadType}-${number}`;
    const threadDir = join(ENTRIES_DIR, dirName);

    console.log(`\n=== ${threadType.toUpperCase()} #${number} ===`);

    // Fetch issue/PR data
    let issue;
    try {
      issue = await fetchIssueOrPr(number);
    } catch (e) {
      console.error(`  ERROR fetching #${number}: ${e.message}`);
      continue;
    }

    console.log(`  Title: ${issue.title}`);
    console.log(`  Author: ${issue.user.login}`);
    console.log(`  Created: ${issue.created_at}`);

    // Fetch all comments
    let comments;
    try {
      const result = await fetchComments(number);
      comments = result.comments;
      // Merge review comments if any, with a marker
      for (const rc of result.reviewComments) {
        rc._isReview = true;
        comments.push(rc);
      }
      // Sort all by date
      comments.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } catch (e) {
      console.error(`  ERROR fetching comments for #${number}: ${e.message}`);
      continue;
    }

    console.log(`  Total comments: ${comments.length}`);

    // Find Satoshi-mention comments
    const mentionIndices = [];
    for (let i = 0; i < comments.length; i++) {
      if (mentionsSatoshiAsPerson(comments[i].body)) {
        mentionIndices.push(i);
      }
    }

    // Also check if the issue title or body mentions Satoshi
    const issueBodyMentions = mentionsSatoshiAsPerson(issue.body) || mentionsSatoshiAsPerson(issue.title);

    console.log(`  Satoshi mentions: ${mentionIndices.length} comments${issueBodyMentions ? ' + issue body/title' : ''}`);

    if (mentionIndices.length === 0 && !issueBodyMentions) {
      console.log(`  SKIP: no Satoshi mentions found`);
      continue;
    }

    // Collect needed comment indices: mentions + context window
    const neededIndices = new Set();
    for (const idx of mentionIndices) {
      // The mention itself
      neededIndices.add(idx);
      // Context before
      for (let j = Math.max(0, idx - CONTEXT_COUNT); j < idx; j++) {
        neededIndices.add(j);
      }
      // Context after
      for (let j = idx + 1; j <= Math.min(comments.length - 1, idx + CONTEXT_COUNT); j++) {
        neededIndices.add(j);
      }
    }

    const neededComments = [...neededIndices].sort((a, b) => a - b).map(i => ({
      comment: comments[i],
      isMention: mentionIndices.includes(i),
    }));

    console.log(`  Need: 1 starter + ${neededComments.length} comments`);

    // --- Generate thread starter ---
    const isPr = !!issue.pull_request;
    const starterUrl = `https://github.com/${REPO}/${isPr ? 'pull' : 'issues'}/${number}`;
    if (existingUrls.has(starterUrl)) {
      console.log(`  SKIP starter: already exists`);
      totalSkipped++;
    } else {
      const { fileName, md } = generateThreadStarter(issue, threadType);
      console.log(`  ${doApply ? 'WRITE' : 'DRY-RUN'}: ${fileName} (thread starter)`);

      if (doApply) {
        mkdirSync(threadDir, { recursive: true });
        try {
          safeWrite(join(threadDir, fileName), md);
          totalWritten++;
          existingUrls.add(starterUrl);
        } catch (e) {
          console.error(`  ${e.message}`);
        }
      }
      totalNeeded++;
    }

    // --- Generate comment entries ---
    for (const { comment, isMention } of neededComments) {
      if (totalWritten >= MAX_FILES_PER_RUN) break;

      if (existingUrls.has(comment.html_url)) {
        totalSkipped++;
        continue;
      }

      const reason = isMention ? 'mentions Satoshi' : 'context for Satoshi mention';
      const { fileName, md } = generateComment(comment, issue, threadType, reason);
      console.log(`  ${doApply ? 'WRITE' : 'DRY-RUN'}: ${fileName} (${reason})`);

      if (doApply) {
        mkdirSync(threadDir, { recursive: true });
        try {
          safeWrite(join(threadDir, fileName), md);
          totalWritten++;
          existingUrls.add(comment.html_url);
        } catch (e) {
          console.error(`  ${e.message}`);
        }
      }
      totalNeeded++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Targets processed: ${targets.length}`);
  if (doApply) {
    console.log(`Files written: ${totalWritten}`);
  } else {
    console.log(`Files needed: ${totalNeeded}`);
  }
  console.log(`Skipped (already exist): ${totalSkipped}`);
  if (!doApply) {
    console.log('\nRun with --apply to write files.');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
