/**
 * check-bitcointalk-thread-coherence.mjs
 *
 * Audits BitcoinTalk thread title cascades and classifies anomalies into
 * four categories:
 *
 *   A. Retroactive overwrite — starter title/body was overwritten on
 *      BitcoinTalk via the normal edit feature (junk like "dasg" /
 *      "adg" / "asdf"). Replies preserve the original subject in
 *      "Re: <subject>" titles. Recovery requires restoring the starter
 *      title from the replies and adding an editor's note.
 *
 *   B. Title-edit — OP edited the starter title later. Replies retain
 *      the older subject as "Re: <old subject>". The starter body is
 *      intact (unlike A). Fix: align starter to the historical Subject
 *      and add editor's note documenting the rename.
 *
 *   C. Subject-deviation — subject changed mid-thread by the OP for a
 *      specific reply. STYLE_GUIDE.md § Forum threads — recognized
 *      cascade exceptions (b). No fix required.
 *
 *   D. Cosmetic — surface-level differences (HTML entities, whitespace,
 *      casing, truncation). Low priority; mostly scraper artifacts.
 *
 * Output: temp/bitcointalk-thread-issues-YYYYMMDD.md (overwritten each run)
 *
 * Run: npm run audit:bitcointalk-threads
 *
 * Not part of CI — manual audit tool. Output is a Markdown report
 * intended to be reviewed by hand.
 */

import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const enForumDir = path.join(repoRoot, 'src/data/entries/en/forum/bitcointalk');
const tempDir = path.join(repoRoot, 'temp');

// -------------------------------------------------------------------------
// Junk title heuristic
// -------------------------------------------------------------------------
// Titles ≤ 5 chars with no word characters (≥ 2 letters in a row) are
// considered junk. This catches placeholder strings like "dasg", "adg",
// "sdfh", "dfg" without false-positiving short legitimate titles like
// "Porn", "Bug?".
function isJunkTitle(title) {
  const trimmed = title.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.length > 7) return false;
  // Reject if it looks like real English (vowel + consonant pattern)
  // or contains punctuation suggesting structure.
  if (/[?!.,:;]/.test(trimmed)) return false;
  // Junk pattern: short, all lowercase or mixed, no vowels OR no
  // consonant clusters that form readable words.
  const hasVowel = /[aeiou]/i.test(trimmed);
  const hasReadableShape = /^[A-Z][a-z]+$/.test(trimmed); // e.g., "Porn"
  if (hasReadableShape) return false;
  if (!hasVowel) return true;
  // Length 4-7 with vowels: heuristic — junk if no real word shape
  // (e.g., "dasg" "sdfh" "asdf" — vowel position random).
  // Real short titles in this corpus tend to be capitalized or have
  // recognizable English bigrams.
  const lower = trimmed.toLowerCase();
  const knownWords = ['help', 'porn', 'idea', 'bug', 'test', 'wow', 'fix', 'mac', 'rpc'];
  if (knownWords.includes(lower)) return false;
  return trimmed.length <= 5;
}

const JUNK_LIST = new Set([
  'dasg', 'adg', 'sdfh', 'dfg', 'asdf', 'sg', 'sfg', 'adf',
  'dsag', 'adgf', 'sdfgsfhg', 'adgadg',
]);

function looksLikeJunk(title) {
  return JUNK_LIST.has(title.trim()) || isJunkTitle(title);
}

// -------------------------------------------------------------------------
// Frontmatter parsing
// -------------------------------------------------------------------------
function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const yaml = m[1];
  const body = m[2];
  const fields = {};
  const lines = yaml.split('\n');
  for (const line of lines) {
    const fm = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (fm) {
      let val = fm[2];
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      fields[fm[1]] = val;
    }
  }
  return { fields, body: body.trim() };
}

// -------------------------------------------------------------------------
// Extract msgID from sourceUrl
// -------------------------------------------------------------------------
function getMsgId(sourceUrl) {
  if (!sourceUrl) return null;
  const m = sourceUrl.match(/msg(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// -------------------------------------------------------------------------
// Cosmetic-equivalence check: titles differ only by HTML entity decode,
// whitespace, casing, or trailing truncation
// -------------------------------------------------------------------------
function htmlDecode(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function unescapeYamlQuotes(s) {
  // Frontmatter parser leaves `\"` intact when it's inside a
  // double-quoted YAML scalar. Convert back to a real ".
  return s.replace(/\\"/g, '"').replace(/\\'/g, "'");
}

function normalizeTitle(s) {
  return unescapeYamlQuotes(htmlDecode(s)).replace(/\s+/g, ' ').trim().toLowerCase();
}

function stripTrailingEllipsis(s) {
  return s.replace(/(\.\.\.|…)\s*$/, '').trim();
}

function isCosmeticDifference(starter, replySubject) {
  const a = normalizeTitle(starter);
  const b = normalizeTitle(replySubject);
  if (a === b) return true;
  // Trailing truncation: one ends with "..." and the prefix portion
  // matches the other's prefix
  const aTrunc = stripTrailingEllipsis(a);
  const bTrunc = stripTrailingEllipsis(b);
  if (aTrunc !== a && b.startsWith(aTrunc)) return true;
  if (bTrunc !== b && a.startsWith(bTrunc)) return true;
  // Prefix: one is a strict prefix of the other (caused by column
  // truncation without the "..." marker)
  if (a.length > 12 && b.length > 12) {
    if (a.startsWith(b) || b.startsWith(a)) return true;
  }
  return false;
}

// -------------------------------------------------------------------------
// Walk topic dirs
// -------------------------------------------------------------------------
function listTopicDirs(forumDir) {
  if (!existsSync(forumDir)) return [];
  return readdirSync(forumDir)
    .filter((name) => name.startsWith('topic-'))
    .map((name) => path.join(forumDir, name))
    .filter((p) => statSync(p).isDirectory());
}

function listTopicFiles(topicDir) {
  return readdirSync(topicDir)
    .filter((n) => n.endsWith('.md'))
    .map((n) => path.join(topicDir, n));
}

// -------------------------------------------------------------------------
// Recognized cascade exceptions (STYLE_GUIDE § Forum threads)
// -------------------------------------------------------------------------
// (a) Context-post / quoted-post titles: "Re: (context post by NAME)"
//     and "Re: (quoted post by NAME)".
const CONTEXT_POST_PATTERN = /^Re:\s*\((context|quoted) post by /;

// -------------------------------------------------------------------------
// Classify a single thread
// -------------------------------------------------------------------------
function classifyThread(topicDir) {
  const files = listTopicFiles(topicDir);
  const entries = [];

  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const parsed = parseFrontmatter(content);
    if (!parsed) continue;
    const { fields, body } = parsed;
    const msgId = getMsgId(fields.sourceUrl);
    const isTopicRootUrl = /\?topic=\d+\.0(?:$|#)/.test(fields.sourceUrl || '');
    entries.push({
      file,
      title: fields.title || '',
      author: fields.author || '',
      msgId,
      body,
      tags: fields.tags || '',
      isTopicRootUrl,
    });
  }

  if (entries.length < 2) return null;

  // Identify starter. Order of preference:
  //   1. An entry whose sourceUrl is the topic-root form (`?topic=N.0`)
  //      — the canonical Archive marker for the actual topic starter.
  //   2. Otherwise, the entry with the lowest msgId.
  // A "Re:" prefix is a strong negative signal — non-Re: entries are
  // preferred starter candidates.
  const rootUrlEntry = entries.find((e) => e.isTopicRootUrl && !e.title.startsWith('Re:') && !e.title.startsWith('返信:'));
  let starter;
  if (rootUrlEntry) {
    starter = rootUrlEntry;
  } else {
    const sorted = [...entries].sort((a, b) => (a.msgId ?? Infinity) - (b.msgId ?? Infinity));
    starter = sorted[0];
  }
  const replies = entries.filter((e) => e !== starter);

  // Already-fixed threads (with retroactive-overwrite tag) are excluded
  // from re-classification — they have been handled.
  if (/retroactive-overwrite/.test(starter.tags)) {
    return null;
  }

  // Skip starters whose own title is a context-post form
  // (rare — would be a misfile). Also skip if no replies.
  if (CONTEXT_POST_PATTERN.test(starter.title)) return null;

  // Skip topics where the lowest-msgId entry's title starts with
  // "Re:" — indicates this topic dir doesn't contain the actual
  // topic starter (likely a thread fragment / split thread). Cannot
  // run the cascade check meaningfully without the true starter.
  if (starter.title.startsWith('Re:') || starter.title.startsWith('返信:')) {
    return null;
  }

  // Collect reply subjects (strip "Re: " prefix and skip exception (a))
  const replySubjects = [];
  for (const r of replies) {
    if (CONTEXT_POST_PATTERN.test(r.title)) continue;
    if (!r.title.startsWith('Re: ')) continue;
    replySubjects.push(r.title.slice(4));
  }

  if (replySubjects.length === 0) return null;

  // Detection logic
  const starterTitle = starter.title;
  const starterBody = starter.body
    .replace(/^\*\[Editor:[\s\S]*$/m, '') // strip editor's note if any
    .trim();

  // Category A: retroactive overwrite
  const isStarterJunk = looksLikeJunk(starterTitle);
  const isBodyShort = starterBody.length < 8;
  const isAuthorAnon = ['Unknown', 'Anonymous'].includes(starter.author);
  if (isStarterJunk && (isBodyShort || isAuthorAnon)) {
    // Verify replies preserve a non-junk subject
    const nonJunkReplies = replySubjects.filter((s) => !looksLikeJunk(s));
    if (nonJunkReplies.length > 0) {
      // Find the modal subject
      const counts = new Map();
      for (const s of nonJunkReplies) counts.set(s, (counts.get(s) || 0) + 1);
      const [modalSubject] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
      return {
        category: 'A',
        topic: path.basename(topicDir),
        starter: { title: starterTitle, body: starterBody, author: starter.author, file: starter.file },
        modalSubject,
        replyCount: replies.length,
      };
    }
  }

  // Find unique reply subjects (after exception filtering)
  const uniqueReplies = [...new Set(replySubjects)];

  // All replies match starter exactly: no anomaly
  if (uniqueReplies.length === 1 && uniqueReplies[0] === starterTitle) return null;

  // Category B candidate: 2+ replies all use a single non-starter
  // subject. Single-reply deviations are Subject-deviation per
  // STYLE_GUIDE.md § Forum threads — recognized cascade exceptions
  // (b), not Title-edit, because B implies the OP edited the starter
  // title (which would leave a population of historical replies
  // pointing at the old subject — not a single reply).
  if (uniqueReplies.length === 1 && uniqueReplies[0] !== starterTitle) {
    const replySubj = uniqueReplies[0];
    if (isCosmeticDifference(starterTitle, replySubj)) {
      return {
        category: 'D',
        topic: path.basename(topicDir),
        starter: { title: starterTitle, file: starter.file },
        replySubject: replySubj,
      };
    }
    if (replySubjects.length >= 2) {
      return {
        category: 'B',
        topic: path.basename(topicDir),
        starter: { title: starterTitle, file: starter.file },
        replySubject: replySubj,
        replyCount: replies.length,
      };
    }
    // Single non-exception reply with deviant subject: treat as C
    return {
      category: 'C',
      topic: path.basename(topicDir),
      starter: { title: starterTitle, file: starter.file },
      replySubjects: [replySubj],
    };
  }

  // Category C: multiple distinct subjects (subject-deviation)
  if (uniqueReplies.length > 1) {
    return {
      category: 'C',
      topic: path.basename(topicDir),
      starter: { title: starterTitle, file: starter.file },
      replySubjects: uniqueReplies,
    };
  }

  return null;
}

// -------------------------------------------------------------------------
// Run audit
// -------------------------------------------------------------------------
const topicDirs = listTopicDirs(enForumDir);
const results = { A: [], B: [], C: [], D: [] };

for (const topicDir of topicDirs) {
  const result = classifyThread(topicDir);
  if (result) results[result.category].push(result);
}

// -------------------------------------------------------------------------
// Generate report
// -------------------------------------------------------------------------
function pad2(n) {
  return String(n).padStart(2, '0');
}
const today = new Date();
const yyyymmdd = `${today.getFullYear()}${pad2(today.getMonth() + 1)}${pad2(today.getDate())}`;

const lines = [];
lines.push(`# BitcoinTalk スレッドタイトル整合性監査`);
lines.push('');
lines.push(`実行日時: ${today.toISOString()}`);
lines.push(`対象スレッド数: ${topicDirs.length}`);
lines.push('');
lines.push('## サマリー');
lines.push('');
lines.push(`| カテゴリ | 件数 | 性質 |`);
lines.push(`|---|---:|---|`);
lines.push(`| A. Retroactive overwrite | ${results.A.length} | 起点タイトル/本文がジャンク (BitcoinTalk 事後上書き) |`);
lines.push(`| B. Title-edit | ${results.B.length} | OP がタイトルを後から編集、返信は旧 subject を保持 |`);
lines.push(`| C. Subject-deviation | ${results.C.length} | スレッド途中で subject 変更 (許容例外) |`);
lines.push(`| D. Cosmetic | ${results.D.length} | HTML entity / 句読点等の表面差異 |`);
lines.push('');

function renderCategoryA() {
  if (results.A.length === 0) {
    lines.push('対象なし。');
    return;
  }
  lines.push('| topic | 起点タイトル | 著者 | 元 subject (返信から復元) | 返信数 |');
  lines.push('|---|---|---|---|---:|');
  for (const r of results.A) {
    lines.push(`| ${r.topic} | \`${r.starter.title}\` | ${r.starter.author} | \`${r.modalSubject}\` | ${r.replyCount} |`);
  }
}
function renderCategoryB() {
  if (results.B.length === 0) {
    lines.push('対象なし。');
    return;
  }
  lines.push('| topic | 現在の起点タイトル | 返信が保持する元 subject | 返信数 |');
  lines.push('|---|---|---|---:|');
  for (const r of results.B) {
    lines.push(`| ${r.topic} | \`${r.starter.title}\` | \`${r.replySubject}\` | ${r.replyCount} |`);
  }
}
function renderCategoryC() {
  if (results.C.length === 0) {
    lines.push('対象なし。');
    return;
  }
  lines.push('| topic | 起点タイトル | 返信の subject 一覧 |');
  lines.push('|---|---|---|');
  for (const r of results.C) {
    lines.push(`| ${r.topic} | \`${r.starter.title}\` | ${r.replySubjects.map((s) => `\`${s}\``).join(', ')} |`);
  }
}
function renderCategoryD() {
  if (results.D.length === 0) {
    lines.push('対象なし。');
    return;
  }
  lines.push('| topic | 起点タイトル | 返信側 subject |');
  lines.push('|---|---|---|');
  for (const r of results.D) {
    lines.push(`| ${r.topic} | \`${r.starter.title}\` | \`${r.replySubject}\` |`);
  }
}

lines.push('## A. Retroactive overwrite (要対応)');
lines.push('');
renderCategoryA();
lines.push('');
lines.push('## B. Title-edit (要対応)');
lines.push('');
renderCategoryB();
lines.push('');
lines.push('## C. Subject-deviation (許容例外)');
lines.push('');
lines.push('STYLE_GUIDE.md § Forum threads — recognized cascade exceptions (b) で公認。対応不要。');
lines.push('');
renderCategoryC();
lines.push('');
lines.push('## D. Cosmetic (低優先)');
lines.push('');
lines.push('HTML entity decode、空白、大文字小文字、末尾切り詰め等の表面差異。多くは scraper 由来。');
lines.push('');
renderCategoryD();
lines.push('');

if (!existsSync(tempDir)) {
  mkdirSync(tempDir, { recursive: true });
}
const reportPath = path.join(tempDir, `bitcointalk-thread-issues-${yyyymmdd}.md`);
writeFileSync(reportPath, lines.join('\n'), 'utf-8');

console.log(`Report written: ${path.relative(repoRoot, reportPath)}`);
console.log(`A: ${results.A.length}  B: ${results.B.length}  C: ${results.C.length}  D: ${results.D.length}`);

// Exit 0 always — this is an audit tool, not a gate
process.exit(0);
