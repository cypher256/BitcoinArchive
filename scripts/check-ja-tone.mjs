/**
 * check-ja-tone.mjs — Japanese tone (口調) linter for Bitcoin Archive
 *
 * Design philosophy:
 *   This script is a **coarse lint pass**, not an infallible judge.
 *   It flags lines where the detected tone (だ/である vs ですます) does not
 *   match the character rule. False positives are expected — quoted text,
 *   forwarded emails, reposted content, and editorial narrative can all
 *   trigger violations that are not real errors.
 *
 *   The intended workflow is:
 *     1. Run `npm run check:ja-tone` to get a list of flagged lines.
 *     2. A human or AI reviews each flag and decides whether it is a
 *        genuine tone violation or a false positive.
 *     3. Genuine violations → fix the translation.
 *     4. False positives   → add a `<!-- tone-skip -->` annotation in the
 *        markdown file so the line is permanently excluded.
 *
 *   The checker deliberately avoids complex heuristics to guess whether
 *   a line is quoted or editorial. Instead, it relies on:
 *     - Structural markdown patterns (>, ```, #, etc.) — always skipped
 *     - Platform-specific quote formats ([Quote from:], etc.) — always skipped
 *     - Explicit annotations in markdown files — human/AI-curated overrides
 *
 *   This keeps the checker simple, predictable, and maintainable at any
 *   document count.
 *
 * Annotations (HTML comments in markdown body):
 *   <!-- tone-skip -->      Start skipping lines (tone check disabled)
 *   <!-- /tone-skip -->     Stop skipping (resume checking)
 *   <!-- speaker: Name -->  Override speaker for subsequent lines
 *   <!-- speaker: reset --> Reset speaker to frontmatter author
 *
 * ⚠ CAUTION: tone-skip suppresses violations silently. It is easy to
 *   misuse it to hide genuine errors. Every tone-skip annotation should
 *   have a clear, legitimate reason (forwarded email, third-party quote,
 *   editorial narrative, documentation excerpt, etc.). When reviewing a
 *   PR that adds tone-skip, always verify that the skipped lines are
 *   truly non-author content — not a shortcut to silence a real violation.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

// ---------------------------------------------------------------------------
// Character tone rules
//   Source of truth: bitcoin-novel_キャラ設定.md (private repo)
//   "da"   = だ・である調 — flags ですます as a violation
//   "desu" = ですます調   — flags だ・である as a violation
// ---------------------------------------------------------------------------

const CHARACTER_RULES = {
  'Satoshi Nakamoto': {
    tone: 'da',
    notes: '冷静・淡々・技術的。感情を表に出さない。個人的な話はしない',
  },
  'Hal Finney': {
    tone: 'da',
    notes: '温かい楽観主義者。「〜だと思うんだ」「〜じゃないか」「〜だね」',
  },
  'Ray Dillinger': {
    tone: 'da',
    notes: '皮肉屋でぶっきらぼう。「〜だろうが」「要するに」',
  },
  'James Donald': {
    tone: 'da',
    notes: '攻撃的な懐疑論者。「〜ではないのか」「〜を説明してくれ」',
  },
  'Gavin Andresen': {
    tone: 'da',
    notes: '穏やかな実務家。「〜しよう」「〜だね」「任せてくれ」',
  },
  'Adam Back': {
    tone: 'da',
    notes: '極めて簡潔。「〜だ」「〜した方がいい」',
  },
  'Nick Szabo': {
    tone: 'da',
    notes: '学者口調。「〜というわけだ」「〜なのだよ」',
  },
  'Mike Hearn': {
    tone: 'da',
    notes: '情熱的で論理的。「〜すべきだ」「〜は間違っている」',
  },
  'Cøbra': {
    tone: 'da',
    notes: '反骨精神。「〜だぜ」「〜してやる」',
  },
  'Craig Wright': {
    tone: 'da',
    notes: '尊大。「〜なのだ」「〜に決まっている」',
  },
  'Laszlo Hanyecz': {
    tone: 'da',
    notes: 'カジュアル。「〜じゃん」「〜だろ」「〜してさ」',
  },
  'Martti Malmi': {
    tone: 'desu',
    notes: '丁寧で控えめ。「〜ですよね」「〜しましょうか」',
  },
  'Wei Dai': {
    tone: 'desu',
    notes: '丁寧・事務的・分析的。「〜です」「〜と考えます」「〜ではないでしょうか」',
  },
  'Dustin Trammell': {
    tone: 'da',
    notes: 'カジュアル。技術者同士の会話',
  },
};

// ---------------------------------------------------------------------------
// Tone detection patterns
// ---------------------------------------------------------------------------

const DESU_MASU_PATTERNS = [
  /ます[。？?！!）」』\s,、]/,
  /ました[。？?！!）」』\s,、]/,
  /ません[。？?！!）」』\s,、]/,
  /です[。？?！!）」』\s,、]/,
  /でした[。？?！!）」』\s,、]/,
  /でしょう[。？?！!）」』\s,、]/,
  /ございます/,
  /いただき/,
  /ます$/,
  /ました$/,
  /ません$/,
  /です$/,
  /でした$/,
  /でしょう$/,
];

const DA_DEARU_PATTERNS = [
  /だ[。？?！!\s,、]/,
  /である[。？?！!\s,、]/,
  /だった[。？?！!\s,、]/,
  /だろう[。？?！!\s,、]/,
  /ないか[。？?！!\s,、]/,
  /だ$/,
  /である$/,
  /だった$/,
  /だろう$/,
];

// ---------------------------------------------------------------------------
// File walking
// ---------------------------------------------------------------------------

function walkMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// ---------------------------------------------------------------------------
// Frontmatter parser (minimal)
// ---------------------------------------------------------------------------

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { meta: {}, body: '' };

  const raw = m[1];
  const meta = {};

  const authorMatch = raw.match(/^author:\s*"(.+?)"/m);
  if (authorMatch) meta.author = authorMatch[1];

  if (/^isSatoshi:\s*true/m.test(raw)) meta.isSatoshi = true;

  const srcMatch = raw.match(/^source:\s*(.+)/m);
  if (srcMatch) meta.source = srcMatch[1].trim().replace(/^"|"$/g, '');

  const participants = [];
  const partSection = raw.match(/^participants:\n((?:\s+-.*\n?)*)/m);
  if (partSection) {
    for (const nm of partSection[1].matchAll(/name:\s*"(.+?)"/g)) {
      participants.push(nm[1]);
    }
  }
  meta.participants = participants;

  const body = content.slice(m[0].length).trim();
  return { meta, body };
}

// ---------------------------------------------------------------------------
// Line labeling — annotation-driven
//
// Supported annotations (HTML comments in markdown body):
//
//   <!-- tone-skip -->      Start skipping lines (tone check disabled)
//   <!-- /tone-skip -->     Stop skipping lines (resume checking)
//   <!-- speaker: Name -->  Set speaker for subsequent lines
//   <!-- speaker: reset --> Reset speaker to frontmatter author
//
// Structural rules (markdown semantics, not heuristics):
//   - Code blocks (``` ... ```)      → skip
//   - Headings (# ...)               → skip
//   - Images (![ ... ])              → skip
//   - Standalone links ([]())        → skip
//   - HTML tags (< ... >)            → skip
//   - Empty lines                    → skip
//   - Horizontal rules (----)        → skip
//   - Blockquotes (> ...)            → strip prefix, check content
//                                      (translated speech lives in blockquotes)
//   - Bold-only lines (** ... **)    → skip
//   - Editorial notes (*[ ... ]*)    → skip
//   - Source notes (*出典: ... *)     → skip
//
// Platform-specific quote formats (structural, not heuristic):
//   - [Quote from: ...]              → skip (BitcoinTalk quote header)
//   - [xxxの投稿より引用]              → skip (Japanese quote reference)
//   - Quote from: / Quote: / 引用:   → skip (quote label lines)
//
// Everything else → check against the current speaker's tone rule.
// ---------------------------------------------------------------------------

const ANNOTATION_TONE_SKIP = /^<!--\s*tone-skip\s*-->$/;
const ANNOTATION_TONE_RESUME = /^<!--\s*\/tone-skip\s*-->$/;
const ANNOTATION_SPEAKER = /^<!--\s*speaker:\s*(.+?)\s*-->$/;

function labelLines(body, meta) {
  const lines = body.split('\n');
  const labeled = [];
  const defaultSpeaker = meta.author || null;

  let currentSpeaker = defaultSpeaker;
  let toneSkip = false;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const lineNum = i + 1;
    let trimmed = line.trim();

    // --- Annotations ---
    if (ANNOTATION_TONE_SKIP.test(trimmed)) {
      toneSkip = true;
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'annotation' });
      continue;
    }
    if (ANNOTATION_TONE_RESUME.test(trimmed)) {
      toneSkip = false;
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'annotation' });
      continue;
    }
    const speakerMatch = trimmed.match(ANNOTATION_SPEAKER);
    if (speakerMatch) {
      currentSpeaker = speakerMatch[1] === 'reset' ? defaultSpeaker : speakerMatch[1];
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'annotation' });
      continue;
    }

    // --- Tone-skip active ---
    if (toneSkip) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'tone-skip' });
      continue;
    }

    // --- Code blocks ---
    if (/^```/.test(trimmed)) {
      inCodeBlock = !inCodeBlock;
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'code-block' });
      continue;
    }
    if (inCodeBlock) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'code-block' });
      continue;
    }

    // --- Structural skips ---
    if (!trimmed) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'empty' });
      continue;
    }
    // Blockquotes: strip '> ' prefix and check content (translated speech lives here).
    // Use <!-- tone-skip --> to exclude quoted text from other speakers.
    if (line.startsWith('>')) {
      const stripped = line.replace(/^>+\s?/, '');
      const strippedTrimmed = stripped.trim();
      if (!strippedTrimmed) {
        labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'empty-blockquote' });
        continue;
      }
      // Re-process stripped line through remaining structural checks below
      line = stripped;
      trimmed = strippedTrimmed;
      // fall through to further checks
    }
    if (/^#+\s/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'heading' });
      continue;
    }
    if (/^!\[/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'image' });
      continue;
    }
    if (/^\[.*\]\(.*\)$/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'link' });
      continue;
    }
    if (/^<.*>$/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'html' });
      continue;
    }
    if (/^\*\*.*\*\*[:：]?\s*$/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'bold-header' });
      continue;
    }
    if (/^\*\[.*\]\*/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'editorial-note' });
      continue;
    }
    if (/^\*出典[:：]/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'source-note' });
      continue;
    }
    if (/^-{4,}/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'separator' });
      continue;
    }
    if (/^投稿日[:：]/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'post-date' });
      continue;
    }

    // --- Platform-specific quote formats ---
    if (
      /^\[Quote\s/i.test(trimmed) ||
      /^\[.*の.*投稿より引用\]/.test(trimmed) ||
      /^Quote\s*from:/i.test(trimmed) ||
      /^Quote[:：\s]/i.test(trimmed) ||
      /^引用[:：「]/.test(trimmed)
    ) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'quote-label' });
      continue;
    }

    // --- Content line → check against current speaker ---
    labeled.push({ lineNum, text: line, speaker: currentSpeaker, skip: false, reason: 'body' });
  }

  return labeled;
}

// ---------------------------------------------------------------------------
// Tone checking
// ---------------------------------------------------------------------------

function hasDesuMasu(text) {
  return DESU_MASU_PATTERNS.some((p) => p.test(text));
}

function hasDaDearu(text) {
  return DA_DEARU_PATTERNS.some((p) => p.test(text));
}

/** Mask non-speaker content before tone detection. */
function preprocessLine(text) {
  let t = text;
  t = t.replace(/^>\s*/, '');
  t = t.replace(/https?:\/\/\S+/g, '');
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  t = t.replace(/`[^`]+`/g, '');
  t = t.replace(/\*\*[^*]+\*\*/g, '');
  t = t.replace(/「[^」]*」/g, '');
  t = t.replace(/[A-Za-z0-9_\-./]+/g, '');
  // Mask conjunctions/adverbs that end in だ (not the copula)
  t = t.replace(/ただ[、,。\s]/g, '');
  t = t.replace(/まだ[、,。\s]/g, '');
  t = t.replace(/いまだ[、,。\s]/g, '');
  t = t.replace(/未だ[、,。\s]/g, '');
  // Mask formulaic greetings (register-neutral, used in both styles)
  t = t.replace(/よろしくお願い(いた)?します/g, '');
  t = t.replace(/お疲れさまです/g, '');
  return t;
}

function checkLine(text, rule) {
  const processed = preprocessLine(text);
  if (!processed.trim()) return null;

  if (rule.tone === 'da' && hasDesuMasu(processed)) {
    return 'ですます調が検出されました（だ・である調であるべき）';
  }
  if (rule.tone === 'desu' && hasDaDearu(processed)) {
    return 'だ・である調が検出されました（ですます調であるべき）';
  }
  return null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const files = walkMarkdownFiles(jaDir);
const violations = [];
let checkedFiles = 0;
let skippedFiles = 0;
let checkedLines = 0;
let skippedLines = 0;

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const { meta, body } = parseFrontmatter(content);

  const hasKnownAuthor = meta.author && CHARACTER_RULES[meta.author];
  const hasKnownParticipant = (meta.participants || []).some((p) => CHARACTER_RULES[p]);
  if (!hasKnownAuthor && !hasKnownParticipant) {
    skippedFiles++;
    continue;
  }

  checkedFiles++;
  const labeled = labelLines(body, meta);

  for (const entry of labeled) {
    if (entry.skip || !entry.speaker) {
      skippedLines++;
      continue;
    }

    const rule = CHARACTER_RULES[entry.speaker];
    if (!rule) {
      skippedLines++;
      continue;
    }

    checkedLines++;
    const violation = checkLine(entry.text, rule);
    if (violation) {
      const relPath = path.relative(path.resolve(__dirname, '..'), filePath);
      violations.push({
        file: relPath,
        line: entry.lineNum,
        speaker: entry.speaker,
        rule: rule.notes,
        reason: entry.reason,
        violation,
        text: entry.text.trim().slice(0, 120),
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log('=== JA口調チェック結果 ===\n');
console.log(`チェック対象: ${checkedFiles} ファイル / ${checkedLines} 行`);
console.log(`スキップ: ${skippedFiles} ファイル / ${skippedLines} 行`);
console.log(`違反件数: ${violations.length}\n`);

if (violations.length > 0) {
  const byFile = {};
  for (const v of violations) {
    if (!byFile[v.file]) byFile[v.file] = [];
    byFile[v.file].push(v);
  }

  for (const [file, vs] of Object.entries(byFile)) {
    console.log(`\n📄 ${file}`);
    for (const v of vs) {
      console.log(`   L${v.line} [${v.speaker}] (${v.reason}): ${v.violation}`);
      console.log(`         ${v.text}`);
    }
  }

  console.log(`\n❌ ${violations.length} 件の口調違反が見つかりました。`);
  process.exit(1);
} else {
  console.log('✅ 口調違反なし');
}
