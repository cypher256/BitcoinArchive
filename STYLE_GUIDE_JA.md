# Japanese Style Guide

Internal editorial rules for the Japanese edition of Bitcoin Institute.

## Purpose

This file defines how Japanese-language pages should handle names, titles,
quoted material, voice, and terminology so the site can be normalized over
time without changing slugs, URLs, or source metadata.

Cross-language editorial rules (blockquote vs quotation mark semantics,
related entries, participant slug convention, etc.) live in
`STYLE_GUIDE.md`. Refer to that file first; this file only documents
Japanese-specific rules.

## Core Rule

- In Japanese UI and editorial text, person names are written in katakana.
- Canonical metadata — slugs, URLs, source records, frontmatter structural
  fields — remain in their original language.
- Japanese display forms are a presentation layer on top of the canonical
  metadata, not a replacement for it.

The canonical person-name mappings live in `src/i18n/participants.ts`.
Do not duplicate them here.

---

# I. スタイル規則 (Style Rules)

Rules about how Japanese text looks and reads.

## 1. Where To Apply Katakana

Use katakana for person names in Japanese-facing editorial elements:

- **UI labels that display person names**
  - participant lists
  - participant page headings
  - author / participant lines on cards and entry pages
  - person-tag labels
- **Edited Japanese copy**
  - titles
  - descriptions
  - editor notes
  - biography prose
  - explanatory text written by the archive editor
- **Inside translated quoted material**
  — blockquoted emails, forum posts, and letters that have been translated
  into Japanese. A quote block whose body is now Japanese prose should not
  leave English names sitting in it; the whole block is editorial Japanese
  text after translation.

Enforced by `npm run check:ja-names`.

## 2. What Stays In The Original Language

These are *not* translated to Japanese even inside Japanese-facing pages:

- Source titles and publication names
- Organization, product, and project names when the original form is more
  natural
- Handles, pseudonyms, and brand-like identifiers (e.g. `Cobra`, `theymos`,
  `COPA`, `Twitter`)
- Slugs, URLs, file paths, and structured metadata fields
- Structural attribution lines (see § 5 Quotes):
  `[Quote from: NAME on DATE]`, `NAME wrote:` — these are UI / reply
  headers, not prose, and must stay in English

## 3. Translation Completeness

All prose text on Japanese pages must be in Japanese, including quoted
material. The site provides language switching — users who want the English
original can switch to the English version. Do not leave English passages
untranslated in Japanese entries.

- Quoted emails, forum posts, and letters → translate body into Japanese
- Blockquoted excerpts in aftermath / narrative entries → translate into
  Japanese
- Preserve English only for:
  - URLs, code, commands, email headers, file paths, and similar technical
    strings where the original form is functionally necessary
  - Structural attribution lines (`[Quote from: ...]`, `NAME wrote:`) —
    these are structural markers, not prose

## 4. BitcoinTalk Emoji Labels

BitcoinTalk forum's text-based emoticon labels (`Smiley`, `Cheesy`, `Wink`,
etc.) must be converted to Unicode emoji. The original posters intended to
display emoji, not the English label words — the labels are only the alt
text from `<img alt="Smiley" />` tags that survived HTML-to-Markdown
scraping.

| Label | Emoji |
|-------|-------|
| Smiley | 😊 |
| Cheesy | 😁 |
| Grin | 😄 |
| Tongue | 😛 |
| Wink | 😉 |
| Roll Eyes | 🙄 |
| Huh | 😕 |
| Angry | 😠 |
| Embarrassed | 😳 |
| Cool | 😎 |
| Shocked | 😲 |
| Undecided | 😐 |
| Lips are sealed | 🤐 |
| Cry | 😢 |

Convert in both EN and JA files.

### Detection criteria

The conversion target is "BitcoinTalk emoticon alt text" — not "any English
word at end of line". Labels like `Cool` and `Cry` overlap with normal
English vocabulary, so context matters:

- An isolated word surrounded by spaces / punctuation that does not make
  sense as English in context → convert
- A word used naturally in English prose → leave alone (e.g. "That's cool")
- Automated detection has high false-positive rate; manual review at scrape
  time is required

## 5. Quotes And Blockquotes

Follow the shared quote / block formatting rules in `STYLE_GUIDE.md`. In
Japanese prose specifically:

- `> ` (blockquote) marks quoted or source-derived block content.
- `「…」` marks a direct quotation in Japanese prose.
- These do not mean the same thing and are often used together.

### Usage

- Inline quotations use `「…」`.
- Nested quotations use `『…』`.
- In narrative entries such as aftermath pages, short excerpted statements
  normally use `> 「…」`.
- In primary-source translations presented as the body of an email, letter,
  forum post, or log excerpt, blockquotes normally do not need `「」` unless
  the source or context specifically calls for them.
- Do not add `「」` to URLs, email headers, commands, log lines, handles, or
  UI strings unless they are being quoted as language.

### Quote Attribution — structural UI elements stay in English

BitcoinTalk and mailing-list attribution lines are structural, not prose.
Keep them in their original English form even inside Japanese pages:

| Source | Attribution format | Rule |
|--------|-------------------|------|
| BitcoinTalk | `[Quote from: NAME on DATE](URL)` | Keep English |
| Mailing lists | `NAME wrote:` | Keep English |
| Correspondence | `> ` inline quotes | Translate as body text |

Example:

```markdown
> [Quote from: RHorning on December 04, 2010, 10:17:44 PM](https://...)
> 引用テキストは日本語に翻訳する。
```

The quoted **body text** that follows an attribution is translated to
Japanese as normal.

### Prose attribution vs structured attribution

Sentences like "Satoshi wrote:" used as a narrative lead-in (in aftermath
or biography prose) are **not** quote attributions — they are normal
English prose. In JA translations, render as natural Japanese prose like
「サトシは次のように書いた：」.

### Structured quote metadata (frontmatter)

New entries use frontmatter `quotes[]` + body markers for quote
attributions. Legacy flat patterns must not be re-introduced:

| Legacy pattern | Typical source |
|---------|---------------|
| `[Quote from: NAME on DATE](URL)` | BitcoinTalk |
| `NAME wrote:` | Mailing lists, correspondence |
| `NAME writes:` | Mailing lists (present tense) |
| `Quoting NAME:` | Hushmail |
| `Quoting NAME <email>:` | Hushmail (with address) |
| `On DATE, NAME wrote:` | Gmail-style replies |
| `Lainaus NAME:` | Hushmail (Finnish "Quoting") |
| `NAMEの投稿：` | Legacy JA translation |
| `NAMEの書き込み：` | Legacy JA translation |
| `NAMEの引用：` | Legacy JA translation |
| `NAMEは次のように書いた：` | Legacy JA translation |

All of these must be converted to `<!-- quote: qN -->` markers, with the
structured metadata recorded in frontmatter `quotes[]`. `check-quotes.mjs`
detects legacy forms (`[Quote from:]` is currently enforced as an error;
the rest must be reviewed manually).

**`personSlug` is required**: when setting `quotes[].person`, always set
`personSlug` if a matching entry exists in `participants.ts`. Without it,
JA pages will display the raw English `person` string instead of the
katakana mapping. Use `scripts/fill-person-slug.mjs` to backfill in bulk.

```yaml
# frontmatter
quotes:
  - id: "q1"
    person: "knightmb"
    personSlug: "michael-marquardt"
    date: "2010-08-15T22:59:04Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-15-knightmb-msg9574"
    parent: null
```

```markdown
<!-- body -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 引用テキスト...
<!-- /tone-skip -->

本文テキスト...
```

詳細は `temp_0406_quote_normalization_plan.md` を参照。`npm run check:quotes`
がこの構造を検証する。

## 6. Voice

Preserve each speaker's register. Do not flatten distinct voices into the
same neutral Japanese tone.

### Principles

- Preserve meaning first. Also preserve tone where the source clearly
  supports it: concise, polite, blunt, warm, skeptical, casual, formal, or
  technical.
- Prefer natural Japanese over rigid word-for-word calques, but do not add
  drama, personality, or emotion that is not present in the source.
- In editor-written narrative entries such as aftermath pages, short
  translated quotations may be lightly smoothed for readability, but they
  should still sound like the same person.
- In primary-source entries, avoid "novelizing" the speaker. Keep the
  wording close to the source and let the original voice carry the
  personality.

### Frequent-participant voice notes

- `Satoshi Nakamoto`: concise, dry, understated, technical. Avoid
  theatrical phrasing.
- `Hal Finney`: warm, curious, encouraging, humane even when technical.
- `Adam Back`: terse, professional, low-friction.
- `Wei Dai`: analytical, matter-of-fact, epistemic hedging.
- `Martti Malmi`: polite, earnest, respectful, especially in early
  exchanges.
- `Gavin Andresen`: calm, practical, low-drama, solutions-oriented.
- `Laszlo Hanyecz`: casual, relaxed, conversational.
- `Ray Dillinger`: blunt, sharp, skeptical, but technically serious.
- `James A. Donald`: combative, probing, insistent.
- `Mike Hearn`: direct, reasoned, energetic, sometimes forceful.
- `Nick Szabo`: intellectual, essayistic, slightly formal.

### Do / don't

- Do keep differences in politeness, bluntness, and warmth when visible in
  the source.
- Do keep technical speakers technically precise.
- Do keep casual speakers casual when the source is casual.
- Do not make archive prose read like fiction.
- Do not add slang, swagger, or emotional intensity unless the source
  clearly justifies it.
- Do not over-normalize distinct voices into uniform textbook Japanese.

## 7. Japanese Tone (だ/である vs ですます)

The canonical tone rule for each character — whether to use だ/である調 or
ですます調 — is defined in `scripts/check-ja-tone.mjs` (`CHARACTER_RULES`).
Run `npm run check:ja-tone` to validate Japanese translations against these
rules.

### Summary

| Person | Tone | Notes |
|--------|------|-------|
| Satoshi Nakamoto | だ/である | 穏やか・抑制的 |
| Hal Finney | だ/である | 温かい楽観主義者 |
| Ray Dillinger | だ/である | 皮肉屋でぶっきらぼう |
| James Donald | だ/である | 攻撃的な懐疑論者 |
| Gavin Andresen | だ/である | 穏やかな実務家 |
| Martti Malmi | **ですます** | 丁寧で控えめ（意図的な色付け） |
| Adam Back | だ/である | 極めて簡潔 |
| Wei Dai | **ですます** | 丁寧・事務的・分析的 |
| Nick Szabo | だ/である | 学者口調 |
| Mike Hearn | だ/である | 情熱的で論理的 |
| Laszlo Hanyecz | だ/である | カジュアル |
| Dustin Trammell | だ/である | カジュアル・技術者同士 |
| Cøbra | だ/である | 反骨精神 |
| Craig Wright | だ/である | 尊大 |

When adding a new participant or changing a tone rule, update
`scripts/check-ja-tone.mjs` first — it is the single source of truth for
automated checks.

### Tone annotations

The tone checker supports HTML-comment annotations in markdown body text
to handle cases where the default author-based tone rule doesn't apply:

| Annotation | Effect |
|------------|--------|
| `<!-- tone-skip -->` | Start skipping tone checks (for quoted text, code, editorial narrative) |
| `<!-- /tone-skip -->` | Resume tone checking |
| `<!-- speaker: Hal Finney -->` | Override speaker for subsequent lines (use when quoting another person inline) |
| `<!-- speaker: reset -->` | Reset speaker to the frontmatter author |

Use `tone-skip` for content not authored by the entry's author: forwarded
emails, third-party quotes not in blockquotes, documentation excerpts, or
UI text examples. Every `tone-skip` should have a clear reason — do not
use it to silence genuine violations.

Use `speaker:` when one entry contains inline text by a different person
(e.g., Satoshi quoting Hal's words without blockquote formatting).

## 8. Technical Term Localization

Technical terms that have established Japanese katakana forms use the
katakana form in Japanese editorial text and descriptions. Terms
universally used in their English form in the Japanese Bitcoin community
stay in English.

### When to use katakana

- The term has a widely recognized katakana form in Japanese technical
  writing
- Using the English form would make the Japanese text harder to read
- The term refers to a concept (algorithm, protocol, cryptographic scheme)
  rather than a product name or brand

### What stays in English

- Product names, protocol names, brand identifiers: Bitcoin, Taproot,
  SegWit, Lightning Network
- BIP titles and formal specification names (keep original for precision)
- Tags, slugs, URLs, metadata fields
- Secondary source names and URLs
- Terms universally used in English in the Japanese Bitcoin community:
  hash, nonce, mining, block, node, fork, P2P, ECDSA, SHA-256

### Canonical mappings

| English | Japanese | Notes |
|---------|----------|-------|
| Schnorr (signature) | シュノア（署名） | Japanese Bitcoin community standard |

Add new entries to this table as they arise. When in doubt, check how
bitcoin.org/ja, bitcoinops.org, and major Japanese Bitcoin media use the
term.

Canonical JA terminology for translated prose lives in § II.3 Terminology
Glossary below.

---

# II. 内容規則 (Content Rules)

Rules about what Japanese text says — titles, descriptions, cross-file
consistency.

## 1. Title Policy

全体方針（ターゲット読者・評価基準・カテゴリ別テンプレート・cascade ルール）は
`STYLE_GUIDE.md § Title Policy` を参照。ここでは日本語固有の事項のみ。

### 文字数

- SERP 上の切り詰めは実用で **≤ 30 文字**。
- 主要 identifier が前半にあれば、全体が 30 文字を超えても AIO/SEO には不利に
  ならない（Google はタイトル全文をインデックスする）。
- 情報密度の高い日本語で context を足す場合でも、読点や冗長な修飾を避ける。

### 人名のカタカナ化

タイトル中の人名も § I.1 の katakana 規則に従う：`サトシ・ナカモト`、
`マイク・ハーン`、`ハル・フィニー`。正典は `src/i18n/participants.ts`。

### 引用の扱い

- 直接引用は `「…」`。
- 引用のみの title にしない。identifying context を前に置く。

```
✗ 「他のことに取り組むことにした」
✓ サトシからマイク・ハーンへの最後のメール：「他のことに取り組むことにした」
```

### カテゴリ別の cascade ルール

`STYLE_GUIDE.md § Title Policy` のカテゴリ別ルールに JA も追従する。要点：

| Directory | Reply cascade | JA title 更新範囲 |
|---|---|---|
| `forum/*`（BitcoinTalk 等） | **必要**（`check:ja-titles` が検出） | starter 変更時、同 thread の全 `Re: …` を同一コミットで更新 |
| `emails/*`（mailing-list） | **不要**（元 email Subject 保持） | starter のみ更新、reply は触らない |
| `correspondence/*` | **不要**（各エントリ独立） | 個別に editorial 更新 |
| `aftermath/`, `biography`, `bip`, `analysis`, `sourceforge` | N/A（thread なし） | 個別更新 |

### Reply title consistency（forum thread のみ）

`forum/*` 配下の thread では、JA `title` 返信投稿（`Re: ...`）は thread
starter の JA title と同じ翻訳を使う。

**Rule:** thread starter の JA `title` を確認し、同 thread 内の全 reply
title を `Re: {starter の JA title}` に揃える。

**Bad:**
```
thread starter: title: "大規模なメルトダウン"
reply:          title: "Re: 大崩壊"          ← 異なる訳
reply:          title: "Re: Major Meltdown"  ← 未翻訳
```

**Good:**
```
thread starter: title: "大規模なメルトダウン"
reply:          title: "Re: 大規模なメルトダウン"
reply:          title: "Re: 大規模なメルトダウン"
```

`npm run check:ja-titles` が `forum/*` でこれを検証する（mailing-list や
correspondence は対象外）。thread-starter の title を Title Policy に沿って
更新したら、同 thread の `Re: {…}` も同一コミットで更新する。一括更新には
`scripts/fix-ja-reply-titles.mjs --apply` が使える。

### mailing-list thread の特例

`emails/*` 配下の mailing-list thread starter は editorial に改題しても、
**reply の `Re: {元 Subject}` は変更しない**。これは元のメール Subject ヘッダが
史実資料であるため。例：

```
starter (2008-10-31): title: "「Bitcoin P2P e-cash paper」— サトシのビットコイン初公開（2008-10）"
reply   (2008-11-01): title: "Re: ビットコイン P2P 電子キャッシュ論文"   ← 元 Subject 訳、そのまま
```

## 2. Description Wording

In JA `description` fields, use these unified terms:

- `コンテキスト投稿` → **`文脈投稿`**
- `引用投稿` → **`文脈投稿`**
- `satoshiがスレッドを開始` → **`サトシ・ナカモトがスレッドを開始`**

## 3. 用語集 (Terminology Glossary)

Japanese translations must use the canonical form for recurring technical
terms. Deprecated forms are detected by `scripts/check-ja-glossary.mjs`
and fail the build.

Scope: this is a JA-only concern (EN source is consistent). Applies to
body text, descriptions, titles, and any editorial prose.

### 末尾長音符 (内閣告示 第2号, 2008)

3音以上のカタカナ語は末尾に長音符を付ける。旧 JIS Z 8301 の「末尾長音省略」
規則は現代日本語の技術文章では非推奨（Microsoft・Apple・NHK・共同通信社等、
主要媒体はすべて長音付きに統一済み）。

| ✅ Canonical | ❌ Deprecated |
|---|---|
| コンピューター | コンピュータ |
| サーバー | サーバ |
| ユーザー | ユーザ |
| メモリー | メモリ |
| プロセッサー | プロセッサ |
| パラメーター | パラメータ |
| エディター | エディタ |
| フォルダー | フォルダ |
| ブラウザー | ブラウザ |
| アダプター | アダプタ |
| ヘッダー | ヘッダ |
| フィルター | フィルタ |
| レジスター | レジスタ |
| コンパイラー | コンパイラ |
| デバッガー | デバッガ |
| センサー | センサ |
| カウンター | カウンタ |
| コネクター | コネクタ |
| ルーター | ルータ |
| プロバイダー | プロバイダ |

### 訳語統一

| English source | ✅ Canonical JA | ❌ Deprecated | Reason |
|----------------|------------------|------------------|--------|
| cryptography mailing list | 暗号学メーリングリスト | 暗号技術メーリングリスト | 学問分野名として「暗号学」で統一 |
| double spending | 二重支払い | 二重支出 / 二重使用 | |
| miner | マイナー | 採掘者 | ビットコインの文脈 |
| wallet | ウォレット | 財布 | Bitcoin の文脈 |
| interface | インターフェース | インタフェース / インターフェイス | |
| block height | ブロック高 | ブロックの高さ / 高さ | 技術用語として「ブロック高」で統一（「高さ」は物理的な高さを表す一般語と衝突） |
| Pieter Wuille | ピーター・ウィーユ | ピーター・ウィユ | participants.ts 正典に合わせて長音付きで統一 |

### ルール追加手順

1. 同じ英語用語が複数の JA 表記で訳されていることに気付いたら確認
2. 正準形を決定（原則：多数派 or 内閣告示準拠）
3. 上表に 1 行追加
4. `scripts/check-ja-glossary.mjs` の `RULES` 配列に追加
   - 末尾長音符: `type: 'trailing-choon'`（負の先読みで部分一致回避）
   - 単純置換: `type: 'literal'`
5. 既存データを移行（Perl 一括置換: `perl -i -CSD -Mutf8 -pe '...'`）
6. `npm run check:ja-glossary` で違反ゼロを確認

Enforced by `npm run check:ja-glossary` (runs as part of `npm run check`).

## 4. Cross-Project Consistency (Novel)

When the same Satoshi quote appears in both BitcoinArchive and
NovelBitCoin, the archive's Japanese translation should match the novel's
translation. The novel defines each character's voice in
`bitcoin-novel_キャラ設定.md`; Satoshi's tone is 冷静で論理的、感情を表に
出さない、業務連絡的な淡々さ (calm, logical, emotionless, matter-of-fact).

Canonical example — Satoshi's final message to Mike Hearn:

- English source: `"I've moved on to other things. It's in good hands with
  Gavin and everyone."`
- Novel JA: `「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ」`
- Archive JA: must match the novel version above.

## 5. Translation Priority

When editing existing Japanese content, normalize in this order:

1. UI labels and page headings
2. Titles and descriptions
3. Biography and editor-written prose
4. Legacy mixed usage inside older entries as they are touched

Quotes and source text should not be rewritten just to match the house
style. See `STYLE_GUIDE.md § Consistency Rule` for the cross-language
version of this principle.

---

# III. 運用規則 (Operational Rules)

Rules about how scripts are allowed to modify Japanese content.

## 1. Existing File Preservation Guarantee

The most painful regressions in this project's history have all been
caused by scripts overwriting existing files that contained manual fixes.
To make regression structurally impossible, all data-modifying scripts
must follow these rules.

### When scripts may modify data

| Operation | Allowed? | Notes |
|-----------|----------|-------|
| Create new files only | ✅ Yes | Use `safeWrite()` (see below) |
| Bulk frontmatter / metadata update on existing files | ⚠️ Conditional | Deterministic structural updates only (e.g. `personSlug` backfill); body must not change |
| Bulk body / prose rewrite on existing files | ❌ No | See § 2 Scripted Edits below |
| Edit a shipped script to fix a bug | ✅ Yes | As long as `existsSync()` still skips already-produced files |
| Edit a shipped script to change its output format | ❌ No | Create a new script instead |

### Mandatory rules for any script that creates or modifies entry files

1. **Bug fixes to existing scripts are fine. Format changes are not.**
   You may fix bugs in a fetch / migration script that has already
   shipped data, as long as `existsSync()` still skips already-produced
   files. You must NOT change the output format (frontmatter shape, body
   structure, etc.) of an existing script. Create a new script instead.
   Format changes invite re-runs and re-runs cause regressions — that is
   the #1 cause of past regressions in this codebase.

2. **New scripts must use a `safeWrite()` helper with three guards:**

   ```javascript
   function safeWrite(filePath, content) {
     // Guard 1: whitelist the write target by path pattern
     const ALLOWED = /^src\/data\/entries\/en\/forum\/bitcointalk\/topic-\d+\/\d{4}-\d{2}-\d{2}-[a-z0-9_-]+-msg\d+\.md$/;
     const rel = path.relative(process.cwd(), filePath);
     if (!ALLOWED.test(rel)) {
       throw new Error(`REFUSED: write target outside allowed pattern: ${rel}`);
     }

     // Guard 2: refuse to overwrite any existing file
     if (existsSync(filePath)) {
       throw new Error(`REFUSED: existing file would be overwritten: ${rel}`);
     }

     writeFileSync(filePath, content, 'utf8');
   }
   ```

3. **`--apply` is opt-in. Default mode is dry-run.**
   Scripts must default to dry-run (no writes). Writing only happens with
   an explicit `--apply` flag.

4. **Batch size limits.**
   Scripts that create many files must enforce a `MAX_FILES_PER_RUN`
   limit (typically 100–200) so that any unexpected behavior is caught
   before it spreads across the whole dataset.

### Mandatory verification: SHA-1 snapshot before / after

Before running any data-modifying script:

```bash
# 1. Backup branch
git checkout -b backup/before-<script-name>

# 2. Confirm clean state
git status                                # must be clean
npm run check                             # must pass

# 3. Snapshot existing files
find src/data/entries/en/forum/bitcointalk -name "*.md" \
  -exec sha1sum {} \; | sort > /tmp/before.sha1
```

After running the script:

```bash
# 4. Verify no existing file was modified
bash scripts/verify-no-regression.sh /tmp/before.sha1
# This script must report "✓ No existing files modified" and exit 0.
# Any non-zero exit indicates a regression — git reset --hard immediately.

# 5. Re-run all checks
npm run check
```

If the verification fails:

```bash
git reset --hard backup/before-<script-name>
```

The backup branch is the safety net. Never delete it until the change has
been verified in production.

### Why this matters

Past regressions in this codebase include:

- `4c1fe988` re-scrape: overwrote 1,278 manually-translated JA files
- Phase 2 quote migration: wrote broken `person: ">"` values from regex
  bug; required manual fixes across 22 files
- `personSlug` was forgotten in Phase 2 migration; 904 files needed
  backfill

All of these would have been caught by the SHA-1 snapshot rule before
they reached `main`.

## 2. Scripted Edits (Japanese Content)

Japanese Markdown body text should not be bulk-rewritten by scripts as a
normal workflow.

In particular, do not use scripts to:

- restore Japanese body text from older commits
- combine current frontmatter with body text copied from another revision
- rewrite quote blocks across many files at once
- mass-replace translated prose based only on filename matching
- repair tone or quote structure by blind global replacement

This is especially dangerous for Japanese entries because one bulk edit
can silently damage:

- translated quote structure
- tone-skip boundaries
- speaker annotations
- line breaks and paragraph rhythm
- internal links added after the older revision

Safe script usage for Japanese content is limited to:

- validation and mismatch detection
- read-only analysis
- narrowly-scoped metadata updates
- deterministic path and frontmatter changes

If a script flags a Japanese content issue, use the script to identify the
target files, then review and edit the content itself deliberately. Treat
the script as a detector, not as an auto-author of prose.

See also `STYLE_GUIDE.md § Scripted Edits Policy` for the cross-language
version of this principle.

## 3. BitcoinTalk Fetching: Thread Size Limits

When fetching BitcoinTalk threads (e.g. `fetch-replies-to-satoshi.mjs`),
limit the maximum pages per thread. Some threads grow into hundreds or
thousands of pages over the years.

### Known mega-threads (as of 2026)

| Topic | Pages | Note |
|-------|-------|------|
| topic-1976 | 1,154+ | Long-running discussion thread |
| topic-1334 | 56 | |
| topic-287 | 73 | |

### Required limits

1. **`MAX_PAGES_PER_THREAD = 50`** — caps fetch at ~1,000 posts / thread.
   This covers Satoshi's active period (2010–2011) for any thread he
   participated in.

2. **Date-based early termination** — if all posts on a fetched page are
   past `MAX_DATE` (2012-01-01), stop fetching subsequent pages.
   BitcoinTalk threads are time-ordered, so subsequent pages will also be
   past the date.

### Why this matters

Without these limits:

- topic-1976 alone takes ~38 minutes (1,154 pages × 2 second delay)
- Most pages are post-2012 garbage (filtered out anyway)
- A single mega-thread can stall the entire fetch pipeline

## 4. Re-scrape / Re-generation Guard

When re-scraping or regenerating context posts (EN or JA):

1. **Before re-scrape**: create a backup branch of the current JA
   translations (`git checkout -b backup/ja-pre-rescrape`).
2. **After re-scrape**: run
   `git diff backup/ja-pre-rescrape -- src/data/translations/ja/` to
   identify any translation loss.
3. **After re-translation**: run all JA checks before committing:
   - `npm run check:ja-names` — person names must be katakana
   - `npm run check:ja-titles` — context post titles must be Japanese
   - `npm run check:ja-tone` — tone rules must pass
   - `npm run check:ja-glossary` — terminology glossary must pass
4. **Manual review**: verify quote blocks match EN structure (same
   paragraphs quoted).

Re-scrape commits that overwrite existing JA translations without
preserving katakana names, translated titles, quote structure, and tone
annotations are considered regressions.

---

# References

Cross-language rules (not duplicated here):

- `STYLE_GUIDE.md § Core Distinction: Blockquotes vs Quotation Marks`
- `STYLE_GUIDE.md § Primary-Source Entries` / `§ Editorial / Narrative Entries`
- `STYLE_GUIDE.md § Translation Principle`
- `STYLE_GUIDE.md § Consistency Rule`
- `STYLE_GUIDE.md § Related Entries`
- `STYLE_GUIDE.md § Participant Slug Convention`
- `STYLE_GUIDE.md § Biography Linking`
- `STYLE_GUIDE.md § Scripted Edits Policy`
- `STYLE_GUIDE.md § Review Rule: Duplicate ID Warnings`
- `STYLE_GUIDE.md § Title Policy`
