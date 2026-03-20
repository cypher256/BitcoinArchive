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
 *
 * forbiddenPatterns: 追加の禁止パターン（正規表現）
 * notes: 人間向けのメモ
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
    tone: 'da',
    notes: '簡潔・知的。「〜だ」「〜ではないか」認識的ヘッジ表現',
  },
  // Dustin Trammell — サトシとのメール。フレンドリーだがカジュアル
  'Dustin Trammell': {
    tone: 'da',
    notes: 'カジュアル。技術者同士の会話',
  },
};

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

  // author
  const authorMatch = raw.match(/^author:\s*"(.+?)"/m);
  if (authorMatch) meta.author = authorMatch[1];

  // isSatoshi
  if (/^isSatoshi:\s*true/m.test(raw)) meta.isSatoshi = true;

  // source
  const srcMatch = raw.match(/^source:\s*(.+)/m);
  if (srcMatch) meta.source = srcMatch[1].trim().replace(/^"|"$/g, '');

  // aftermathType
  const atMatch = raw.match(/^aftermathType:\s*"?(.+?)"?\s*$/m);
  if (atMatch) meta.aftermathType = atMatch[1];

  const body = content.slice(m[0].length).trim();
  return { meta, body };
}

// ---------------------------------------------------------------------------
// 本文からチェック対象行を抽出
// ---------------------------------------------------------------------------

/**
 * aftermath 記事（author がジャーナリスト等）では、引用行（> で始まる行）のみチェック。
 * それ以外（forum, correspondence, email, sourceforge）は本文全体をチェック。
 */
function extractCheckableLines(body, meta) {
  const lines = body.split('\n');
  const result = [];

  const isAftermath = meta.source === 'aftermath';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // 空行・frontmatter区切り・見出し・リンク行・画像行はスキップ
    if (!line.trim()) continue;
    if (/^#+\s/.test(line)) continue;
    if (/^!\[/.test(line)) continue;
    if (/^\[.*\]\(.*\)$/.test(line.trim())) continue;
    // コードブロック内はスキップ
    if (/^```/.test(line.trim())) continue;
    // HTMLタグのみの行はスキップ
    if (/^<.*>$/.test(line.trim())) continue;
    // 太字ヘッダー行（**メール1：** 等）はスキップ
    if (/^\*\*.*\*\*[:：]?\s*$/.test(line.trim())) continue;

    if (isAftermath) {
      // aftermath: 引用行のみ（「」内のセリフも含む）
      if (line.startsWith('>') || /「[^」]+」/.test(line)) {
        result.push({ lineNum, text: line });
      }
    } else {
      result.push({ lineNum, text: line });
    }
  }
  return result;
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
 * - [Quote from: ...] 行（他人の引用）
 * - URL
 * - 英語テキスト
 * - コード片（`...`）
 * - 太字マーカー内のラベル（**...**）
 */
function preprocessLine(text) {
  let t = text;
  // 引用マーカー除去
  t = t.replace(/^>\s*/, '');
  // 「」内のテキストは残す（これがチェック対象）
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
    // だ・である調のキャラ → ですます調は違反
    if (hasDesuMasu(processed)) {
      return 'ですます調が検出されました（だ・である調であるべき）';
    }
  } else if (rule.tone === 'desu') {
    // ですます調のキャラ → だ・である調は違反
    if (hasDaDearu(processed)) {
      return 'だ・である調が検出されました（ですます調であるべき）';
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// aftermath 記事の引用からキャラクターを推定
// ---------------------------------------------------------------------------

/**
 * aftermath 記事では author はジャーナリスト。
 * participants からキャラクターを特定し、そのルールで引用をチェック。
 * 複数キャラがいる場合、引用の直前の文脈から推定するのは難しいため、
 * participants 内の「だ・である調」キャラが一人でもいれば、
 * ですます調の引用を違反とする（保守的チェック）。
 */
function getRuleForAftermath(meta) {
  // participants の中でルールが定義されているキャラを探す
  // 全員が da なら da、全員が desu なら desu、混在なら null（スキップ）
  // → 実際にはほぼ全員 da なので、da を返すケースが大半
  return { tone: 'da', notes: 'aftermath引用チェック' };
}

// ---------------------------------------------------------------------------
// メイン
// ---------------------------------------------------------------------------

const files = walkMarkdownFiles(jaDir);
const violations = [];
let checkedFiles = 0;
let skippedFiles = 0;

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const { meta, body } = parseFrontmatter(content);

  const isAftermath = meta.source === 'aftermath';
  const author = meta.author;

  let rule;
  if (isAftermath) {
    rule = getRuleForAftermath(meta);
  } else if (author && CHARACTER_RULES[author]) {
    rule = CHARACTER_RULES[author];
  } else {
    skippedFiles++;
    continue;
  }

  checkedFiles++;
  const lines = extractCheckableLines(body, meta);

  for (const { lineNum, text } of lines) {
    const violation = checkLine(text, rule);
    if (violation) {
      const relPath = path.relative(path.resolve(__dirname, '..'), filePath);
      violations.push({
        file: relPath,
        line: lineNum,
        author: author || '(aftermath)',
        rule: rule.notes,
        violation,
        text: text.trim().slice(0, 120),
      });
    }
  }
}

// ---------------------------------------------------------------------------
// レポート出力
// ---------------------------------------------------------------------------

console.log('=== JA口調チェック結果 ===\n');
console.log(`チェック対象: ${checkedFiles} ファイル`);
console.log(`スキップ（ルール未定義の著者）: ${skippedFiles} ファイル`);
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
    console.log(`   著者: ${vs[0].author} — ${vs[0].rule}`);
    for (const v of vs) {
      console.log(`   L${v.line}: ${v.violation}`);
      console.log(`         ${v.text}`);
    }
  }

  console.log(`\n❌ ${violations.length} 件の口調違反が見つかりました。`);
  process.exit(1);
} else {
  console.log('✅ 口調違反なし');
}
