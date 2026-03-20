import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

// ---------------------------------------------------------------------------
// キャラクター口調ルール定義
//   source: bitcoin-novel_キャラ設定.md
// ---------------------------------------------------------------------------

// ですます調の検出パターン（文末・句点前）
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

// だ・である調の検出パターン
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

/**
 * キャラクタールール
 *
 * tone: "da"  = だ・である調 → ですます調を検出したら違反
 * tone: "desu" = ですます調 → だ・である調を検出したら違反
 */
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

// 人名の日本語→英語マッピング（aftermath記事の発話者推定用）
const JA_NAME_TO_EN = {
  サトシ: 'Satoshi Nakamoto',
  'サトシ・ナカモト': 'Satoshi Nakamoto',
  ナカモト: 'Satoshi Nakamoto',
  ハル: 'Hal Finney',
  'ハル・フィニー': 'Hal Finney',
  フィニー: 'Hal Finney',
  レイ: 'Ray Dillinger',
  ディリンジャー: 'Ray Dillinger',
  ジェームズ: 'James Donald',
  ドナルド: 'James Donald',
  ギャビン: 'Gavin Andresen',
  アンドレセン: 'Gavin Andresen',
  マルッティ: 'Martti Malmi',
  マルミ: 'Martti Malmi',
  アダム: 'Adam Back',
  'アダム・バック': 'Adam Back',
  バック: 'Adam Back',
  'ウェイ・ダイ': 'Wei Dai',
  サボ: 'Nick Szabo',
  'ニック・サボ': 'Nick Szabo',
  マイク: 'Mike Hearn',
  'マイク・ハーン': 'Mike Hearn',
  ハーン: 'Mike Hearn',
  ラズロ: 'Laszlo Hanyecz',
  ライト: 'Craig Wright',
  ダスティン: 'Dustin Trammell',
  トランメル: 'Dustin Trammell',
  フラン: null, // Fran Finney — ルール未定義
};

// 英語名からの推定用（テキスト中に英語名が出る場合）
const EN_NAME_PATTERNS = Object.keys(CHARACTER_RULES).map((name) => ({
  pattern: new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
  name,
}));

// ---------------------------------------------------------------------------
// ファイル走査
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Frontmatter パーサ（簡易）
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

  // participants 抽出
  const participants = [];
  const partSection = raw.match(/^participants:\n((?:\s+-.*\n?)*)/m);
  if (partSection) {
    const nameMatches = partSection[1].matchAll(/name:\s*"(.+?)"/g);
    for (const nm of nameMatches) {
      participants.push(nm[1]);
    }
  }
  meta.participants = participants;

  const body = content.slice(m[0].length).trim();
  return { meta, body };
}

// ---------------------------------------------------------------------------
// 行レベルの発話者推定（Speaker Detection）
// ---------------------------------------------------------------------------

/**
 * 行の種類を判定し、発話者ラベルを付与する。
 *
 * 返り値:
 *   { speaker: string|null, text: string, skip: boolean }
 *   speaker: CHARACTER_RULES のキー名、または null（不明/スキップ）
 *   skip: true ならチェック対象外
 */

// 「〜は述べた」「〜は語った」「〜は回想する」等のパターン
const ATTRIBUTION_PATTERN =
  /(?:([^\s「」、。]+?)(?:は|が|も)(?:述べた|語った|言った|回想する|指摘した|付け加えた|説明した|答えた|返信した|書いた|投稿した|主張した|話す|続けた|振り返る|コメントした))/;

function labelLines(body, meta) {
  const lines = body.split('\n');
  const labeled = [];
  const defaultSpeaker = meta.author || null;
  const isAftermath = meta.source === 'aftermath';
  const isCorrespondence = meta.source === 'correspondence';

  let inCodeBlock = false;
  let repostCurrentSpeaker = null; // repost記事内の現在の発話者
  let lastAttributedSpeaker = null; // aftermath で直前に帰属された人物

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    const trimmed = line.trim();

    // --- コードブロック ---
    if (/^```/.test(trimmed)) {
      inCodeBlock = !inCodeBlock;
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'code-block' });
      continue;
    }
    if (inCodeBlock) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'code-block' });
      continue;
    }

    // --- 常にスキップする行 ---
    if (!trimmed) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'empty' });
      continue;
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

    // --- Repost: ユーザー名ヘッダー（"username:<br>"）---
    const repostHeader = trimmed.match(/^([A-Za-z0-9_.-]+):<br>$/);
    if (repostHeader) {
      // 発話者切り替え。participantsから一致するものを探す
      const handle = repostHeader[1].toLowerCase();
      repostCurrentSpeaker = null; // リセット

      // participantsのslugやnameと照合
      for (const p of meta.participants || []) {
        if (p.toLowerCase().includes(handle) || handle.includes(p.toLowerCase().split(' ')[0])) {
          repostCurrentSpeaker = p;
          break;
        }
      }
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'repost-header' });
      continue;
    }

    // --- 引用行の処理 ---

    // >> 二重引用（メール返信の返信）→ 常にスキップ
    if (/^>>/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'double-quote' });
      continue;
    }

    // > 引用行
    if (line.startsWith('>')) {
      if (isAftermath) {
        // aftermath: 引用は人物の発言。発話者を推定
        const speaker = lastAttributedSpeaker || guessSpeakerFromParticipants(meta);
        labeled.push({ lineNum, text: line, speaker, skip: false, reason: 'aftermath-quote' });
      } else if (isCorrespondence) {
        // correspondence: > 行は返信元の別人の発言 → スキップ
        labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'reply-quote' });
      } else {
        // forum 等: > 行は他人の引用 → スキップ
        labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'forum-quote' });
      }
      continue;
    }

    // --- 引用ラベル行 ---
    if (/^引用[:：]/.test(trimmed) || /^\[Quote from:/.test(trimmed)) {
      labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'quote-label' });
      continue;
    }

    // --- aftermath: 地の文で発話者帰属を検出 ---
    if (isAftermath) {
      // 帰属パターンを検出し、次の引用の発話者を設定
      const attr = detectAttribution(trimmed);
      if (attr) {
        lastAttributedSpeaker = attr;
      }

      // 地の文に「」がある場合、その中身をチェック（発話者は帰属から推定）
      if (/「[^」]+」/.test(trimmed)) {
        const speaker = lastAttributedSpeaker || guessSpeakerFromParticipants(meta);
        labeled.push({ lineNum, text: line, speaker, skip: false, reason: 'aftermath-inline-quote' });
      } else {
        // 地の文（エディターのナレーション）→ スキップ
        labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'aftermath-narrative' });
      }
      continue;
    }

    // --- correspondence: 非引用行 ---
    if (isCorrespondence) {
      // 引用ヘッダー行（"Satoshi Nakamoto <...>の引用："等）→ スキップ
      if (/の引用[:：]/.test(trimmed) || /引用[:：]$/.test(trimmed)) {
        labeled.push({ lineNum, text: line, speaker: null, skip: true, reason: 'quote-header' });
        continue;
      }
      // 本文 → author の発言
      labeled.push({ lineNum, text: line, speaker: defaultSpeaker, skip: false, reason: 'correspondence-body' });
      continue;
    }

    // --- forum / email / sourceforge: 非引用行 ---
    // repost内なら現在の発話者を使う
    const speaker = repostCurrentSpeaker || defaultSpeaker;
    labeled.push({ lineNum, text: line, speaker, skip: false, reason: 'body' });
  }

  return labeled;
}

/**
 * テキストから発話者帰属を検出
 * 「サトシは述べた」「ウェイ・ダイは指摘した」等 → CHARACTER_RULESの名前を返す
 */
function detectAttribution(text) {
  const attrMatch = text.match(ATTRIBUTION_PATTERN);
  if (attrMatch) {
    const name = attrMatch[1];
    // 日本語名から英語名を引く
    if (JA_NAME_TO_EN[name] !== undefined) {
      return JA_NAME_TO_EN[name]; // null の場合はルール未定義
    }
    // 部分一致を試す
    for (const [ja, en] of Object.entries(JA_NAME_TO_EN)) {
      if (name.includes(ja) || ja.includes(name)) {
        return en;
      }
    }
  }
  // 英語名パターンも検出
  for (const { pattern, name } of EN_NAME_PATTERNS) {
    if (pattern.test(text) && ATTRIBUTION_PATTERN.test(text)) {
      return name;
    }
  }
  return null;
}

/**
 * participantsから唯一のキャラクターを推定（ルール定義済みの人物が1人だけの場合）
 */
function guessSpeakerFromParticipants(meta) {
  const knownParticipants = (meta.participants || []).filter((p) => CHARACTER_RULES[p]);
  if (knownParticipants.length === 1) {
    return knownParticipants[0];
  }
  // 複数いる場合は推定できない → null
  return null;
}

// ---------------------------------------------------------------------------
// 口調チェック
// ---------------------------------------------------------------------------

function hasDesuMasu(text) {
  return DESU_MASU_PATTERNS.some((p) => p.test(text));
}

function hasDaDearu(text) {
  return DA_DEARU_PATTERNS.some((p) => p.test(text));
}

/**
 * テキスト前処理：チェック対象外の部分をマスク
 */
function preprocessLine(text) {
  let t = text;
  // 引用マーカー除去
  t = t.replace(/^>\s*/, '');
  // URL除去
  t = t.replace(/https?:\/\/\S+/g, '');
  // Markdownリンク除去
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // コード片除去
  t = t.replace(/`[^`]+`/g, '');
  // 太字ラベル除去（**メール1：** 等）
  t = t.replace(/\*\*[^*]+\*\*/g, '');
  // 英語のみの部分除去
  t = t.replace(/[A-Za-z0-9_\-./]+/g, '');
  return t;
}

function checkLine(text, rule) {
  const processed = preprocessLine(text);
  if (!processed.trim()) return null;

  if (rule.tone === 'da') {
    if (hasDesuMasu(processed)) {
      return 'ですます調が検出されました（だ・である調であるべき）';
    }
  } else if (rule.tone === 'desu') {
    if (hasDaDearu(processed)) {
      return 'だ・である調が検出されました（ですます調であるべき）';
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// メイン
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

  const author = meta.author;

  // author がルール未定義で、participantsにもルール定義者がいなければスキップ
  const hasKnownAuthor = author && CHARACTER_RULES[author];
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
// レポート出力
// ---------------------------------------------------------------------------

console.log('=== JA口調チェック結果 ===\n');
console.log(`チェック対象: ${checkedFiles} ファイル / ${checkedLines} 行`);
console.log(`スキップ: ${skippedFiles} ファイル / ${skippedLines} 行`);
console.log(`違反件数: ${violations.length}\n`);

if (violations.length > 0) {
  // ファイルごとにグループ化
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
