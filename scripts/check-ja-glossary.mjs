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
import { findJaSectionLineRanges, lineInJaSection } from './lib/astro-ja-section.mjs';

// Accept optional target directory(s) via CLI argument.
// Default: Archive's JA translations + components (which embed JA labels for
// charts/timelines that ship to readers). Other repos (e.g. NovelBitCoin) can
// invoke this script with their own directory as argument.
//
// Both `.md` and `.astro` files are scanned. For `.astro`, only lines that
// contain a Japanese character (hiragana / katakana / kanji) are checked,
// so EN-side labels in `labels.en` blocks do not produce false positives
// against deprecated-form rules whose canonical EN spelling is permitted in
// EN context (e.g. `Litecoin` in an `en:` map is fine; `Litecoin` in a `ja:`
// map alongside JA prose is flagged).
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
const explicitPaths = [];
let IGNORE_FILE = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--ignore-file') {
    if (args[i + 1]) IGNORE_FILE = args[i + 1];
    i++;
    continue;
  }
  if (args[i].startsWith('--')) continue;
  explicitPaths.push(args[i]);
}
const TARGETS = explicitPaths.length > 0
  ? explicitPaths
  // src/pages: reader-facing JA prose in .astro pages (page leads, meta
  // descriptions, the JA homepage / novel landing). maskAstro keeps the JA
  // strings visible (masks only comments / URLs). Previously unscanned, which
  // let deprecated forms (e.g. 「私信」, no-長音 spellings) slip into pages.
  : ['src/data/translations/ja', 'src/components', 'src/pages'];

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
  { type: 'trailing-choon', deprecated: 'フィルタ', canonical: 'フィルター', except: ['リング'] },
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
  { type: 'literal', deprecated: 'エクリプス攻撃', canonical: '日食攻撃', reason: '"eclipse attack" は 2026-06-30 自然化監査で「日食攻撃」に統一 (commit `376d4479f`)' },
  { type: 'literal', deprecated: 'プルーニング', canonical: '剪定', reason: '"pruning" は同監査で「剪定」に統一。順応性 (malleability) / 送金 (pay-to-send) は一般語との衝突が大きく機械検出の対象外 — STYLE_GUIDE_JA.md § II.3 訳語の統一に記載し人手判定とする' },
  // "Nakamoto consensus": 人名を含む複合語なので § I.1 によりカナ化し、主要メディア・
  // 技術解説で定着している中黒付き「ナカモト・コンセンサス」に統一 (§ II.3)。
  { type: 'literal', deprecated: 'ナカモト合意', canonical: 'ナカモト・コンセンサス', reason: '"Nakamoto consensus" は「ナカモト・コンセンサス」で統一。「合意」は `consensus` の標準訳「コンセンサス」と食い違う' },
  { type: 'literal', deprecated: 'Nakamoto コンセンサス', canonical: 'ナカモト・コンセンサス', reason: '人名 Nakamoto は JA 散文ではカナ表記 (§ I.1)' },
  { type: 'literal', deprecated: 'Nakamotoコンセンサス', canonical: 'ナカモト・コンセンサス', reason: '人名 Nakamoto は JA 散文ではカナ表記 (§ I.1)' },
  { type: 'literal', deprecated: 'ナカモトコンセンサス', canonical: 'ナカモト・コンセンサス', reason: '定着表記は中黒付き (§ II.3)' },
  { type: 'literal', deprecated: '値オーバーフロー', canonical: 'バリュー・オーバーフロー', reason: '"value overflow (incident)" は事件名タイトルと統一。2026-07-24 表記揺れ 9 ファイル是正' },

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

  // --- coinbase transaction (プロトコル用語) の表記統一 ---
  // STYLE_GUIDE_JA.md § II.3 用語集に従い、 protocol 用語の「coinbase transaction」 は
  // full form を `コインベーストランザクション` で統一する (Archive 内既存使用が最多、
  // 「トランザクション」 命名体系と一貫、 「取引」 = 取引所連想との衝突を避ける)。
  // 修飾語付き compound (コインベース報酬 / コインベース出力 等) や、 full form を
  // 一度示した後の continuation は素の `コインベース` でよい。
  //
  // 対象外:
  // - Satoshi v0.1 UI の歴史的訳語「生成トランザクション」 を引用文中に保持する場合
  //   (>blockquote 内は maskNonProse で除外される)
  // - 米国の取引所 Coinbase Global (「コインベース・グローバル」) — 別概念
  { type: 'literal', deprecated: 'コインベース取引', canonical: 'コインベーストランザクション', reason: 'protocol 用語の full form は「コインベーストランザクション」 で統一 (§ II.3)。「コインベース取引」 は「取引所 ( = exchange )」 への連想と衝突するため非推奨' },
  { type: 'literal', deprecated: 'コインベース・トランザクション', canonical: 'コインベーストランザクション', reason: '中黒なし表記で統一 (Archive 内多数派、 「トランザクション」 命名体系と一貫)' },
  // Mixed English + JA compound 「coinbase トランザクション」 専用ルール。
  // generic な `coinbase` word ルール (下記) より**前**に置くことで、 編集者には
  // 直接「コインベーストランザクション」 という最終形が示される (generic 側だと
  // "coinbase" → "コインベース" の置換しか示されない)。
  { type: 'literal', deprecated: 'coinbase トランザクション', canonical: 'コインベーストランザクション', reason: 'mixed English + JA の compound は full form「コインベーストランザクション」 に統一 (§ II.3)。 generic coinbase ルールより先に評価' },
  // English `coinbase` を JA 散文中で使うのも非推奨 (§ II.3 のカタカナ化方針)。
  // `coinbase アドレス` / `coinbase 出力` / `coinbase 報酬` / `coinbase メッセージ` 等は
  // word-boundary で「coinbase」 が「コインベース」 に置換される (compound 形は
  // 結果的に「コインベース XXX」 となる; 全カタカナ compound に整形したい場合は
  // 続けて手動でスペース除去等を行う)。 コード識別子 (例えば YAML field 名 `coinbase`
  // や CoinbaseAddress() 関数名) は maskNonProse のコードブロック/インラインコード
  // 除外で対応。
  { type: 'word', deprecated: 'coinbase', canonical: 'コインベース', reason: '§ II.3 / § 8 方針。 protocol 用語の coinbase は JA 散文ではカタカナ「コインベース」 に統一。 コード識別子 (CoinbaseAddress, coinbase field 等) は word boundary とコードブロック除外で残る' },
  // Satoshi v0.1 UI の歴史的訳語「生成トランザクション」 は散文・引用ブロックの
  // 区別なく「コインベーストランザクション」 に統一する (時代感は date メタデータで
  // 担保されるため、 訳語選択を時代別に分ける運用上の利益は薄い)。 maskNonProse は
  // frontmatter / code fence / inline code / link URL のみを対象とし、 `>` 引用
  // ブロック内の本文はマスクしない。
  { type: 'literal', deprecated: '生成トランザクション', canonical: 'コインベーストランザクション', reason: '§ II.3。 Satoshi v0.1 UI の歴史的訳語、 引用ブロック内も含めて「コインベーストランザクション」 に統一する (時代感は date メタデータで担保)' },

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
  { type: 'literal', deprecated: 'Ripple', canonical: 'リップル', except: [' Labs'], reason: 'Wikipedia ja 主表記。略号 XRP は対象外 (§ I.2 区分 3)。組織名 Ripple Labs は § I.2 区分 2 (固有名詞・組織名は英語形維持) で対象外' },
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

  // --- English-word leak prevention in JA prose ---
  // Per the global CLAUDE.md "Japanese generation rules" and the recurring
  // user-feedback memory feedback_japanese_no_english_strict.md, English
  // words must not be mixed into Japanese sentences. These literal rules
  // catch the highest-frequency recent violators. Proper-noun / fixed-phrase
  // false positives (e.g. "Internet Archive", "Bitcoin Archive" as a
  // foreign brand) are handled via the .ja-glossary-ignore file when they
  // are legitimately the brand name; in-archive self-reference must use
  // 「アーカイブ」 / 「本アーカイブ」 per STYLE_GUIDE § "Medium vs Archive".
  { type: 'literal', deprecated: 'Bitcoin Archive', canonical: '本アーカイブ', reason: 'JA 散文での自己参照は「本アーカイブ」 で統一 (STYLE_GUIDE.md § Medium vs Archive)' },
  { type: 'literal', deprecated: 'BitcoinArchive の対象', canonical: '本アーカイブの対象', reason: 'JA 散文での自己参照は「本アーカイブ」 で統一。BitcoinArchive はリポジトリ名・URL パス用途のみ' },
  { type: 'literal', deprecated: 'BitcoinArchive におけ', canonical: '本アーカイブにおけ', reason: 'JA 散文での自己参照は「本アーカイブ」 で統一' },
  { type: 'literal', deprecated: 'Archive の残り', canonical: '本アーカイブの他のエントリー', reason: 'JA 散文での自己参照は「本アーカイブ」 で統一。「残り」 は読者が途中まで読んだ含意が出るので不適' },
  { type: 'word', deprecated: 'consumer', canonical: '利用者', reason: 'JA 散文では抽象概念「利用者」 に統一 (STYLE_GUIDE_JA § I.8)。タグスラッグ「early-contributor」 と区別するため word 型 (word boundary 検出)' },
  { type: 'word', deprecated: 'contributor', canonical: '貢献者', reason: 'JA 散文では抽象概念「貢献者」 に統一。タグスラッグ「early-contributor」 は frontmatter / inline code で maskNonProse 除外' },
  { type: 'word', deprecated: 'minimal', canonical: '最小限', reason: 'JA 散文では和訳「最小限」 に統一 (§ I.8)' },
  { type: 'word', deprecated: 'gap', canonical: '隔たり / 差', reason: 'JA 散文では和訳「隔たり」 / 「差」 / 「ギャップ」(カナ) に統一 (§ I.8)' },
];

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (full.endsWith('.md') || full.endsWith('.astro')) results.push(full);
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
// the following surfaces are Category 4 (stays English): the *structural*
// frontmatter fields (slug / source / URL / tags / participants &
// secondarySources `name` etc.), code blocks, inline code spans, markdown
// link URLs, raw URLs. We blank them out with spaces so line/column
// numbers stay aligned for error reporting.
//
// EXCEPTION — reader-facing JA prose fields inside frontmatter ARE scanned:
// `title`, `description`, `sourceNote`, `note` (secondarySources child),
// `editorNote`, and `label` (callout child). Per STYLE_GUIDE_JA § I.2 these
// are "edited Japanese text" (タイトル・description・編者注・解説文), so the
// glossary applies to them exactly like body prose. Only the key prefix is
// blanked; the value is kept and run through the shared inline maskers, so a
// slug like ".../lerner-nonce-lsb" inside an editorNote link does not
// false-positive.
const FRONTMATTER_PROSE_FIELDS =
  /^(\s*)(title|description|sourceNote|note|editorNote|label):(\s*)(.*)$/;

// Mask inline contexts that can appear inside a single prose line (body line
// or a frontmatter prose value): inline `code`, markdown link URLs, raw URLs,
// and the fixed genesis coinbase headline (which must escape the
// "The Times → タイムズ" rule). Length is preserved so column numbers stay
// aligned for error reporting.
function maskInline(s) {
  let masked = s.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
  masked = masked.replace(
    /\]\(([^)]+)\)/g,
    (m) => ']' + '(' + ' '.repeat(m.length - 3) + ')',
  );
  masked = masked.replace(/https?:\/\/\S+/g, (m) => ' '.repeat(m.length));
  masked = masked.replace(
    /The Times 03\/Jan\/2009(?: Chancellor on brink of second bailout for banks)?/g,
    (m) => ' '.repeat(m.length),
  );
  return masked;
}

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
        out[i] = ' '.repeat(line.length);
        continue;
      }
      const fm = line.match(FRONTMATTER_PROSE_FIELDS);
      if (fm) {
        // Reader-facing JA prose field: keep the value, blank only the key
        // prefix (indent + key + ':' + spaces), then mask inline URLs/code
        // inside the value the same way body prose is masked.
        const prefixLen = fm[1].length + fm[2].length + 1 + fm[3].length;
        out[i] = ' '.repeat(prefixLen) + maskInline(fm[4]);
      } else {
        out[i] = ' '.repeat(line.length);
      }
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
    // Mask standalone HTML comment marker lines (e.g. `<!-- chart: NAME -->`,
    // `<!-- speaker: NAME -->`, `<!-- quote: qN -->`, `<!-- audit:quote-skip
    // -->`, `<!-- tone-skip -->`). These are tooling metadata stripped by the
    // markdown renderer -- never reader-facing prose -- and their payload can
    // legitimately contain an English glossary term (e.g. a `chart: nonce-lsb`
    // marker name, or a `speaker:` name) without that being a prose violation.
    if (/^\s*<!--.*-->\s*$/.test(line)) {
      out[i] = ' '.repeat(line.length);
      continue;
    }
    // Mask inline code / markdown link URLs / raw URLs / the genesis headline.
    out[i] = maskInline(line);
  }
  return out.join('\n');
}

// Astro components embed reader-facing JA labels in TS code (frontmatter
// `---...---` block, template-literal subtitles, label maps for charts).
// Unlike `.md`, the top `---` block is NOT YAML metadata and must NOT be
// stripped. We only mask code-side noise that cannot be JA prose:
//   - // line comments
//   - /* */ block comments (multi-line)
//   - URLs (http://, https://)
// Line numbers are preserved so error reports remain accurate.
function maskAstro(content) {
  let out = content;
  out = out.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  out = out.replace(/\/\/[^\n]*/g, (m) => ' '.repeat(m.length));
  out = out.replace(/https?:\/\/\S+/g, (m) => ' '.repeat(m.length));
  // Genesis coinbase headline (full + short date-prefix form). Same
  // rationale as maskNonProse: fixed historical quotation, must escape
  // the "The Times → タイムズ" rule.
  out = out.replace(
    /The Times 03\/Jan\/2009(?: Chancellor on brink of second bailout for banks)?/g,
    (m) => ' '.repeat(m.length),
  );
  return out;
}

const JA_CHAR_RE = /[぀-ゟ゠-ヿ一-鿿]/;

function findViolations(content, rule, file, jaRanges) {
  const hits = [];
  const isAstro = file.endsWith('.astro');
  const masked = isAstro ? maskAstro(content) : maskNonProse(content);
  const lines = masked.split('\n');
  let pattern;
  if (rule.type === 'trailing-choon') {
    // Match deprecated NOT followed by ー, and not preceded by a
    // katakana letter (which would mean the match is a substring of a
    // longer unrelated word — e.g. センサ inside コンセンサス).
    // `rule.except` lists katakana suffixes that form a legitimate longer
    // word in which the short form is correct and is NOT a 末尾長音 omission
    // (e.g. フィルタ + リング = 「フィルタリング」, the canonical JA for
    // "filtering" — the medial フィルタ must not be "corrected" to フィルター).
    // Such suffixes extend the negative lookahead so the longer word passes.
    const exceptAlt = (rule.except || []).map((e) => '|' + e).join('');
    pattern = new RegExp('(?<![\\u30A0-\\u30FF])' + rule.deprecated + '(?!ー' + exceptAlt + ')', 'g');
  } else if (rule.type === 'word') {
    // Word-boundary match so lowercase English terms like "nonce" are
    // caught in prose ("nonce 探索") but not inside camelCase code
    // identifiers ("nNonce"). Word boundaries \b only apply to ASCII
    // word characters, which is what we want here.
    const escaped = rule.deprecated.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    pattern = new RegExp('\\b' + escaped + '\\b', 'g');
  } else {
    // `rule.except` (optional) lists strings that, when immediately
    // following the match, mark it as part of a longer legitimate name
    // rather than a deprecated form — e.g. 'Ripple' followed by ' Labs'
    // is the organization name "Ripple Labs" (§ I.2 class 2: proper
    // nouns / org names keep their English form), not the currency.
    const escaped = rule.deprecated.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const exceptAlt = (rule.except || [])
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
    pattern = exceptAlt
      ? new RegExp(escaped + '(?!(?:' + exceptAlt + '))', 'g')
      : new RegExp(escaped, 'g');
  }
  lines.forEach((line, i) => {
    // For .astro: a line is in scope if it falls inside a `labels.ja: {…}`
    // block (structural — catches English-only values like
    // `block1: 'Block 1'` that ship to JA UI readers and must follow the
    // same conventions) OR if it contains a JA character (catches JA
    // prose elsewhere — script tags, template body, etc.). Pure EN
    // labels in `labels.en: {…}` and unrelated code lines fall through.
    const lineNum = i + 1;
    if (isAstro && !lineInJaSection(lineNum, jaRanges) && !JA_CHAR_RE.test(line)) return;
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

const files = TARGETS.flatMap((t) => walk(t));
const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const jaRanges = file.endsWith('.astro') ? findJaSectionLineRanges(content) : [];
  for (const rule of RULES) {
    const lineNums = findViolations(content, rule, file, jaRanges);
    for (const ln of lineNums) violations.push({ file, line: ln, rule });
  }
}

if (violations.length === 0) {
  console.log(`✓ JA glossary check passed. ${files.length} files scanned (${TARGETS.join(', ')}), ${RULES.length} rule(s) enforced.`);
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
