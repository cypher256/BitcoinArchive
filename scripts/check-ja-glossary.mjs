#!/usr/bin/env node
/**
 * check-ja-glossary.mjs — Japanese terminology consistency checker
 *
 * Enforces the canonical JA forms listed in STYLE_GUIDE_JA.md § II.3 "Terminology Glossary".
 * Detects deprecated/alternative forms of the same term and fails the build
 * so translations stay consistent across all entries.
 *
 * Special handling for trailing long-vowel (末尾長音符) rules:
 *   Uses negative lookahead so that "コンピュータ" is flagged as a violation
 *   but "コンピューター" is not (the former is a substring of the latter).
 *
 * Exit codes:
 *   0 — all JA files use canonical terminology
 *   1 — at least one deprecated form found
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import path from 'path';

// Accept optional target directory via CLI argument.
// Default: Archive's JA translations. Other repos (e.g. NovelBitCoin) can
// invoke this script with their own JA directory as argument.
//
// Optional ignore file: a plain-text file listing terms that must not be
// treated as deprecated within this target (one per line). Useful when the
// target contains intentional domain-specific wording that overlaps with
// a glossary rule (e.g. "量子コンピュータ" is a protected 改禁 term in
// the novel, despite "コンピュータ" being a general deprecated form).
//
// Ignore file format (one rule per line):
//   # Comment
//   量子コンピュータ           # Skip violations where the matched span
//                              # starts with this string
//   採掘者                     # Skip this exact term
//
// Usage:
//   node check-ja-glossary.mjs
//   node check-ja-glossary.mjs ../NovelBitCoin/src
//   node check-ja-glossary.mjs ../NovelBitCoin/src --ignore-file .ja-glossary-ignore
const args = process.argv.slice(2);
const JA_DIR = args.find((a) => !a.startsWith('--')) || 'src/data/translations/ja';
let IGNORE_FILE = null;
const ignoreIdx = args.indexOf('--ignore-file');
if (ignoreIdx !== -1 && args[ignoreIdx + 1]) IGNORE_FILE = args[ignoreIdx + 1];

// Rule types:
//   'literal' — plain substring match
//   'trailing-choon' — flag "short" unless followed by "ー" (末尾長音符省略の検出)
const RULES = [
  // --- 末尾長音符 (内閣告示 第2号, 2008) ---
  // 3音以上のカタカナ語は末尾に長音符を付ける
  { type: 'trailing-choon', deprecated: 'コンピュータ', canonical: 'コンピューター' },
  { type: 'trailing-choon', deprecated: 'サーバ', canonical: 'サーバー' },
  { type: 'trailing-choon', deprecated: 'ユーザ', canonical: 'ユーザー' },
  { type: 'trailing-choon', deprecated: 'メモリ', canonical: 'メモリー' },
  { type: 'trailing-choon', deprecated: 'プロセッサ', canonical: 'プロセッサー' },
  { type: 'trailing-choon', deprecated: 'パラメータ', canonical: 'パラメーター' },
  { type: 'trailing-choon', deprecated: 'エディタ', canonical: 'エディター' },
  { type: 'trailing-choon', deprecated: 'フォルダ', canonical: 'フォルダー' },
  { type: 'trailing-choon', deprecated: 'ブラウザ', canonical: 'ブラウザー' },
  { type: 'trailing-choon', deprecated: 'アダプタ', canonical: 'アダプター' },
  { type: 'trailing-choon', deprecated: 'ヘッダ', canonical: 'ヘッダー' },
  { type: 'trailing-choon', deprecated: 'フィルタ', canonical: 'フィルター' },
  { type: 'trailing-choon', deprecated: 'レジスタ', canonical: 'レジスター' },
  { type: 'trailing-choon', deprecated: 'コンパイラ', canonical: 'コンパイラー' },
  { type: 'trailing-choon', deprecated: 'デバッガ', canonical: 'デバッガー' },
  { type: 'trailing-choon', deprecated: 'センサ', canonical: 'センサー' },
  { type: 'trailing-choon', deprecated: 'カウンタ', canonical: 'カウンター' },
  { type: 'trailing-choon', deprecated: 'コネクタ', canonical: 'コネクター' },
  { type: 'trailing-choon', deprecated: 'ルータ', canonical: 'ルーター' },
  { type: 'trailing-choon', deprecated: 'プロバイダ', canonical: 'プロバイダー' },

  // --- 訳語統一 ---
  { type: 'literal', deprecated: '暗号技術メーリングリスト', canonical: '暗号学メーリングリスト', reason: '"cryptography mailing list" の訳は「暗号学」で統一' },
  { type: 'literal', deprecated: '二重支出', canonical: '二重支払い' },
  { type: 'literal', deprecated: '二重使用', canonical: '二重支払い' },
  { type: 'literal', deprecated: '採掘者', canonical: 'マイナー' },
  { type: 'literal', deprecated: '財布', canonical: 'ウォレット', reason: 'Bitcoin の文脈では「ウォレット」で統一' },
  { type: 'literal', deprecated: 'インタフェース', canonical: 'インターフェース' },
  { type: 'literal', deprecated: 'インターフェイス', canonical: 'インターフェース' },
  { type: 'literal', deprecated: 'ブロックの高さ', canonical: 'ブロック高', reason: '"block height" の訳は「ブロック高」で統一' },
  { type: 'literal', deprecated: 'ウィユ', canonical: 'ウィーユ', reason: 'Pieter Wuille の JA 表記は「ピーター・ウィーユ」で統一 (participants.ts 正典)。短縮形「ウィユ」も同様。' },

  // Merkle 関連（小説側 `マークルルート` と揃える全カタカナ統一）
  // コード識別子 (hashMerkleRoot, CMerkleTx, getmerklebranch)、姓 (R.C. Merkle)、
  // タグ (merkle-tree, merkle-branch)、画像ファイル名は対象外（literal match なので自然に除外される）。
  // MAST 文脈の「マークル化抽象構文木」「マークル化ツリー」は 化 suffix を含むため未マッチで保持される。
  { type: 'literal', deprecated: 'マークル木', canonical: 'マークルツリー', reason: 'Merkle tree はカタカナで統一' },
  { type: 'literal', deprecated: 'マークル分岐', canonical: 'マークルブランチ', reason: 'Merkle branch はカタカナで統一' },
  { type: 'literal', deprecated: 'merkleツリー', canonical: 'マークルツリー', reason: '"merkle" 部分もカタカナ化' },
  { type: 'literal', deprecated: 'merkleブランチ', canonical: 'マークルブランチ', reason: '"merkle" 部分もカタカナ化' },
  { type: 'literal', deprecated: 'merkleルート', canonical: 'マークルルート', reason: '"merkle" 部分もカタカナ化' },
  { type: 'literal', deprecated: 'Merkleルート', canonical: 'マークルルート', reason: 'JA 本文では和訳「マークルルート」を使う' },
  { type: 'literal', deprecated: 'Merkle Tree', canonical: 'マークルツリー', reason: 'JA 本文では和訳「マークルツリー」を使う。英文脈のまま残すケース（コード、姓）は literal match では自然に除外される' },

  // section 8 policy enforcement — general technical terms in prose should be
  // katakana. Use `type: 'word'` so code identifiers like `nNonce` /
  // `getbootstrap` are not false-positive flagged.
  { type: 'word', deprecated: 'nonce', canonical: 'ナンス', reason: '§8 方針に従い本文散文ではカタカナ化。code identifier (nNonce 等) は word boundary で除外' },
  { type: 'word', deprecated: 'bootstrap', canonical: 'ブートストラップ', reason: '§8 方針。ただし "intentional bootstrap" 等の英語ラベルは例外として維持する (.ja-glossary-ignore で除外)' },
  { type: 'word', deprecated: 'Occam', canonical: 'オッカム', reason: '§8 方針。固有名・人名扱い' },
  { type: 'literal', deprecated: 'ノンス', canonical: 'ナンス', reason: 'カタカナ綴り揺れの統一（82 ナンス vs 27 ノンス → ナンスへ統一）' },
  // The Times (英紙) — 本文中はカタカナ「タイムズ」で統一。
  // 例外: ジェネシスブロック coinbase の literal 史実引用
  // `The Times 03/Jan/2009 Chancellor on brink of second bailout for banks`
  // は word-boundary の "The Times" と一致するが、maskNonProse() で扱えない
  // ため、現状は「次が " 03/Jan/2009"」を別途許容する負のlookaheadで除外
  // できないので、type: 'word' ではなく該当本文を運用で守る方針とする。
  // secondarySources `name:` フィールド (frontmatter) は maskNonProse で除外済み。
  { type: 'word', deprecated: 'The Times', canonical: 'タイムズ', reason: '英紙 The Times は JA 本文ではカタカナ「タイムズ」。コインベース史実引用 "The Times 03/Jan/2009..." は史実保持のため運用で別管理（一括化禁止）' },

  // --- 「signature」の意味別訳語統一 ---
  // 「署名」は本サイトでは crypto signature (Schnorr 署名 / ECDSA 署名 / message signing 等) として
  // canonical。pseudonym/byline 意 と forensic fingerprint 意 で「署名」を使うと crypto と混同するため、
  // 意味別に別訳語へ分離する。
  // - signature (pseudonym/byline) → 「仮名」
  // - signature (forensic fingerprint/pattern, e.g. Patoshi mining signature) → 「指紋」
  { type: 'literal', deprecated: 'という署名', canonical: 'という仮名', reason: 'pseudonym/byline 意の signature は「仮名」で統一。crypto 意の「署名」（Schnorr 署名等）と区別する' },
  { type: 'literal', deprecated: 'マイニング署名', canonical: 'マイニング指紋', reason: 'Patoshi 等 forensic fingerprint 意の signature は「指紋」で統一。crypto 意の「署名」と区別する' },
  { type: 'literal', deprecated: 'ナンス署名', canonical: 'ナンス指紋', reason: 'forensic fingerprint 意の signature は「指紋」で統一。crypto 意の「署名」と区別する' },

  // --- private email/correspondence の訳語統一 ---
  // 日本語では「メール」 単体で個人的・私的な含意を含むので、「私信」「プライベートメール」 等の
  // 補助語は不要。カテゴリラベル（src/i18n/ui.ts: type.correspondence = '個人メール'）は対比上
  // 必要なので別管理。本文散文では「メール」 で統一する。
  { type: 'literal', deprecated: '私信メール', canonical: 'メール', reason: '私信 = 私的な手紙/メール の意を内包するため「私信メール」 は重複表現。本文散文では「メール」 で統一' },
  { type: 'literal', deprecated: '私信', canonical: 'メール', reason: '「私信」 は現代日本語では稀で archaic。日本語では「メール」 単体でプライベートな含意を持つため「メール」 で統一' },
  { type: 'literal', deprecated: 'プライベートメール', canonical: 'メール', reason: '日本語では「メール」 単体でプライベートな含意を持つため「プライベート」 修飾は不要。「メール」 で統一' },

  // --- 「ペンネーム」 vs 「仮名」 ---
  // STYLE_GUIDE_JA.md § II.3 Canonical mappings で signature (pseudonym/byline)
  // の正典訳語は「仮名」。「ペンネーム」 は作家・作者の語感に偏り、サトシのような
  // 「システム作者・実装者・運用者」 の総体を指す pseudonym 意では狭すぎる。
  { type: 'literal', deprecated: 'ペンネーム', canonical: '仮名', reason: 'pseudonym/byline 意は「仮名」 で統一（§ II.3 Canonical mappings）。「ペンネーム」 は作家寄りの語感で、サトシのようなシステム作者・実装者・運用者の総体には狭い' },

  // --- 暗号資産名 (派生通貨・他通貨) のカナ化 ---
  // STYLE_GUIDE_JA.md § II.3 用語集に従い、日本では一般名としてカナが定着している
  // 派生通貨・アルトコイン名はカナ形に統一する。Wikipedia ja・主要取引所が出典。
  //
  // 対象外 (本ルールでは検出されないか、誤検出を避ける):
  // - secondarySources.name フィールド (frontmatter は maskNonProse で除外済み)
  // - URL・コードブロック・インラインコード (maskNonProse で除外済み)
  // - 製品名・ソフトウェア実装名・組織名 (Bitcoin Core / Bitcoin XT / Bitcoin Magazine
  //   等は本ルールに含まれない)
  // - 略号 (BTC / ETH / BCH / XEM / XRP / NMC) は英語大文字略号として § I.2 区分 3 で維持
  //
  // Mermaid 本文・引用ブロック・タイトル・description は読者向け表示なので検出対象。
  // 自動規則化が困難な範囲 (Bitcoin 単独・Bitcoin SV) は別途手動レビューで対応。
  { type: 'literal', deprecated: 'Litecoin', canonical: 'ライトコイン', reason: 'Wikipedia ja 主表記。日本では一般名としてカナが定着' },
  { type: 'literal', deprecated: 'Dogecoin', canonical: 'ドージコイン', reason: 'Wikipedia ja 主表記' },
  { type: 'literal', deprecated: 'Ethereum', canonical: 'イーサリアム', reason: 'Wikipedia ja 主表記' },
  { type: 'literal', deprecated: 'Ripple', canonical: 'リップル', reason: 'Wikipedia ja 主表記。略号 XRP は対象外 (§ I.2 区分 3)' },
  { type: 'literal', deprecated: 'Namecoin', canonical: 'ネームコイン', reason: '民間情報源 (jpbitcoin / floc.jp 等) で広く使用' },
  { type: 'literal', deprecated: 'Bitcoin Cash', canonical: 'ビットコインキャッシュ', reason: 'Wikipedia ja 主表記 (空白なし)' },
  { type: 'literal', deprecated: 'Bitcoin Gold', canonical: 'ビットコインゴールド', reason: 'Wikipedia ja 主表記 (空白なし)' },
  { type: 'literal', deprecated: 'Cardano', canonical: 'カルダノ', reason: 'Wikipedia ja 主表記' },
  { type: 'literal', deprecated: 'Monero', canonical: 'モネロ', reason: 'Wikipedia ja 本文併記、日本の取引所・ニュースで広く使用' },

  // --- 禁止記号: 全角セミコロン ---
  // 日本語タイポグラフィに「；」 は存在しない。英語ソースの ";" を機械的に
  // 全角化すると発生するが、日本語では文脈に応じて以下のいずれかに置換する:
  //   - 並列・列挙の区切り → 「、」
  //   - 文の終わり → 「。」
  //   - 補足・別文の橋渡し → 「 — 」 (全角ダッシュ二倍ダーシ)
  //   - 別項目化が自然 → 改行・箇条書き
  // canonical は文脈依存なので「適切な日本語句読点」 とする。
  { type: 'literal', deprecated: '；', canonical: '、 / 。 / — / 改行', reason: '日本語タイポグラフィに「；」 は存在しない。英語の ";" の機械的全角化を禁止。文脈に応じて 「、」「。」「 — 」「改行」 のいずれかに置換する' },
];

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (full.endsWith('.md')) results.push(full);
  }
  return results;
}

// Load ignore patterns (one per line, # for comments)
const ignorePatterns = [];
if (IGNORE_FILE && existsSync(IGNORE_FILE)) {
  const raw = readFileSync(IGNORE_FILE, 'utf8');
  for (const line of raw.split('\n')) {
    const trimmed = line.replace(/#.*$/, '').trim();
    if (trimmed) ignorePatterns.push(trimmed);
  }
}

// Strip out contexts that are not Japanese body prose before running
// glossary rules. Per STYLE_GUIDE_JA § I.2 (What Stays In English),
// the following surfaces are Category 4 (stays English): frontmatter,
// code blocks, inline code spans, markdown link URLs, raw URLs. We blank
// them out with spaces so line/column numbers stay aligned for error
// reporting.
function maskNonProse(content) {
  const out = content.split('\n');
  let inFrontmatter = false;
  let frontmatterEnded = false;
  let inFence = false;
  let fenceIsMermaid = false;
  for (let i = 0; i < out.length; i++) {
    const line = out[i];
    if (i === 0 && line === '---') {
      inFrontmatter = true;
      out[i] = ' '.repeat(line.length);
      continue;
    }
    if (inFrontmatter) {
      if (line === '---') {
        inFrontmatter = false;
        frontmatterEnded = true;
      }
      out[i] = ' '.repeat(line.length);
      continue;
    }
    if (!frontmatterEnded && i > 0) {
      // File without frontmatter: nothing to mask at top
      frontmatterEnded = true;
    }
    // Fence toggles. Mermaid fences are kept visible because their
    // content is rendered to readers (not literal source). Other fences
    // (```js, ```python, plain ```) are masked because they are literal
    // code where deprecated terms may be valid identifiers.
    const trimmed = line.trimStart();
    if (trimmed.startsWith('```')) {
      if (!inFence) {
        fenceIsMermaid = /^```mermaid\b/.test(trimmed);
      }
      inFence = !inFence;
      if (!fenceIsMermaid) out[i] = ' '.repeat(line.length);
      if (!inFence) fenceIsMermaid = false;
      continue;
    }
    if (inFence && !fenceIsMermaid) {
      out[i] = ' '.repeat(line.length);
      continue;
    }
    // Mask Mermaid `%% link:` comment annotations (used by the
    // rehype-mermaid wrapper to attach click-through URLs to timeline
    // / Gantt events). The comment line is metadata, not user-visible
    // prose, and the URL slug it contains may include English code
    // identifiers (e.g., entry slugs like "...sergio-lerner-nonce-lsb-
    // discovery") that the glossary rules should not flag.
    if (inFence && fenceIsMermaid && /^\s*%%\s*link:/.test(line)) {
      out[i] = ' '.repeat(line.length);
      continue;
    }
    // Mask inline code `...` spans
    let masked = line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
    // Mask markdown link URLs: [text](URL)
    masked = masked.replace(
      /\]\(([^)]+)\)/g,
      (m) => ']' + '(' + ' '.repeat(m.length - 3) + ')',
    );
    // Mask raw URLs (http:// or https://)
    masked = masked.replace(
      /https?:\/\/\S+/g,
      (m) => ' '.repeat(m.length),
    );
    // Mask the literal Bitcoin genesis coinbase headline.
    // This is a fixed historical quotation that must appear verbatim in
    // any JA prose that reproduces the coinbase payload. It contains
    // the substring "The Times" which the glossary rule "The Times → タイムズ"
    // would otherwise flag.
    masked = masked.replace(
      /The Times 03\/Jan\/2009 Chancellor on brink of second bailout for banks/g,
      (m) => ' '.repeat(m.length),
    );
    out[i] = masked;
  }
  return out.join('\n');
}

function findViolations(content, rule) {
  const hits = [];
  const lines = maskNonProse(content).split('\n');
  let pattern;
  if (rule.type === 'trailing-choon') {
    // Match deprecated NOT followed by ー, and not preceded by a
    // katakana letter (which would mean the match is a substring of a
    // longer unrelated word — e.g. センサ inside コンセンサス).
    pattern = new RegExp('(?<![\\u30A0-\\u30FF])' + rule.deprecated + '(?!ー)', 'g');
  } else if (rule.type === 'word') {
    // Word-boundary match so lowercase English terms like "nonce" are
    // caught in prose ("nonce 探索") but not inside camelCase code
    // identifiers ("nNonce"). Word boundaries \b only apply to ASCII
    // word characters, which is what we want here.
    const escaped = rule.deprecated.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    pattern = new RegExp('\\b' + escaped + '\\b', 'g');
  } else {
    pattern = new RegExp(rule.deprecated.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  }
  lines.forEach((line, i) => {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(line)) !== null) {
      const matchStart = m.index;
      const matchEnd = matchStart + rule.deprecated.length;
      // Skip if any ignore pattern occurs in the line and overlaps with
      // the current match position. An occurrence of `ig` covers
      // [igIdx, igIdx + ig.length). It overlaps the match iff the match
      // interval [matchStart, matchEnd) lies inside that span.
      const skip = ignorePatterns.some((ig) => {
        let igIdx = line.indexOf(ig);
        while (igIdx !== -1) {
          if (igIdx <= matchStart && matchEnd <= igIdx + ig.length) return true;
          igIdx = line.indexOf(ig, igIdx + 1);
        }
        return false;
      });
      if (!skip) hits.push(i + 1);
    }
  });
  return hits;
}

const files = walk(JA_DIR);
const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  for (const rule of RULES) {
    const lineNums = findViolations(content, rule);
    for (const ln of lineNums) violations.push({ file, line: ln, rule });
  }
}

if (violations.length === 0) {
  console.log(`✓ JA glossary check passed. ${files.length} files scanned, ${RULES.length} rule(s) enforced.`);
  process.exit(0);
}

console.error(`✗ Found ${violations.length} deprecated term usage(s):\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}`);
  console.error(`    "${v.rule.deprecated}" → "${v.rule.canonical}"`);
  if (v.rule.reason) console.error(`    Reason: ${v.rule.reason}`);
}
console.error(`\nSee STYLE_GUIDE_JA.md § II.3 "Terminology Glossary".`);
process.exit(1);
