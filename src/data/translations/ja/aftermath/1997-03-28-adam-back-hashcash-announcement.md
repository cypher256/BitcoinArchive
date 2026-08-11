---
title: "アダム・バックがサイファーパンクリストで Hashcash を公開 — デジタルキャッシュ議論の中に位置づけられたプルーフ・オブ・ワーク方式"
date: 1997-03-28T16:52:26Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://www.hashcash.org/papers/announce.txt"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "アダム・バックがサイファーパンクリストで Hashcash を公開。スパム対策のプルーフ・オブ・ワーク方式で、デジタルキャッシュ議論の中に位置づけられた。"
isSatoshi: false
tags:
  - "adam-back"
  - "hashcash"
  - "cypherpunks"
  - "proof-of-work"
  - "monetary-policy"
  - "origins"
  - "historic"
secondarySources:
  - name: "Hashcash 2002 論文（Adam Back）"
    url: "http://www.hashcash.org/papers/hashcash.pdf"
    note: "2002 年論文は、1997 年のアナウンス以降の各種応用・提案された改善・関連する後続出版物を整理している。§1 が 1997 年の元出版を引用し、§7 応用の節では他の応用と並んで「ウェイ・ダイの b-money 電子キャッシュ提案の鋳造機構としての hashcash」を列挙する。同論文はまたコスト関数名として MINT() を採用し、明示的に注記する：「コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に mint の語を用いる」。"
  - name: "サイファーパンクリストアーカイブ（venona ミラー）— 同じアナウンス"
    url: "https://cypherpunks.venona.com/date/1997/03/msg00774.html"
    note: "1997 年 3 月 28 日の同じアナウンスを venona サイファーパンクリストミラーでアーカイブしたもの。サーバーアクセスが不安定なため、正式な出典にはアダム・バック自身がホストする hashcash.org/papers/announce.txt を採用している。"
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash, or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
    note: "1997 年アナウンスとその貨幣的位置づけに関する二次資料の報告。"
relatedEntries:
  - "analysis/1976-10-25-hayek-extropians-bitcoin-lineage"
  - "aftermath/1998-12-06-adam-back-b-money-monetary-critique"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/2008-08-20-adam-back-biography"
  - "aftermath/2008-08-20-satoshi-to-adam-back"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2026-05-18-mining-reward-exhaustion-fee-only-future"
  - "analysis/2026-05-23-how-bitcoin-works-visual-glossary"
  - "tweets/adam-back/2026-04-08-response-to-nyt-investigation"
quotes:
  - id: "q1"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "2026-04-08T00:00:00Z"
    sourceEntryId: "tweets/adam-back/2026-04-08-response-to-nyt-investigation"
translationStatus: complete
---

![濃紺の背景に、レトロなメール告知カードと封筒のアイコンが矢印でつながり、回路模様のスタンプが収まった枠付きパネルへと合流する。そこから点線でアーチ形のアイコンと丸いバッジまで続き、下には 2 つの点を結ぶ横長の年表が添えられている。配色はオレンジとクリーム、ティールでまとめられている。](/BitcoinArchive/images/analysis/1997-03-28-adam-back-hashcash-announcement-hero.png)

1997 年 3 月 28 日、当時エクセター大学の博士研究員だった[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)は、サイファーパンクメーリングリストに件名「`[ANNOUNCE] hash cash postage implementation`」のメールを送信した。アナウンス全文は、アダム・バック自身がホストする元投稿のコピーに保存されている。

Hashcash 自体は通貨ではない。台帳もなく、送金もなく、合意形成もなく、通貨供給もない。システムは単独完結するスパム対策／DoS 対策のスタンプ機構である。しかし 1997 年のアナウンスは、「これは digicash とどう関係するか」という独立した節を設け、Hashcash をデジタルキャッシュ議論の中に明示的に位置づけている。

## アナウンスが貨幣について述べた内容

アナウンスは、計算コストを任意に設定できる一方で検証は瞬時に済む「部分ハッシュ衝突に基づく郵便料金方式」を、リメイラー郵便料金とスパム抑止のための技術的提案として示すところから始まる。実装の解説と応用例の後、アナウンスはデジタルキャッシュとの関係に話題を移す。

「これは digicash とどう関係するか」節より：

<!-- audit:quote-skip -->
> リメイラーやメールに digicash 郵便料金を使うのは有用だが、digicash には問題がいくつかある：
>
>    * アカウント開設の手間が大きい（書類記入など）
>    * アカウント保有者が少ない
>    * 支払い者の匿名性は確保されるが、受取側の匿名性は確保されない
>
> そこで提案したいのは、ハッシュ衝突郵便料金か digicash 郵便料金のどちらでも受け付けるリメイラーを作ることである。この方式の利点は次の通り：
>
>    * Hashcash は digicash がより広く使われるまでの応急措置を提供しうる
>    * Hashcash は無料で、PC で CPU サイクルをいくらか燃やすだけで使える。ネット文化の自由な議論のあり方に即しており、財政的に厳しい者が百万長者や引退した政府職員などと対等に渡り合える。
>    * digicash が悪い方向に進んだ（違法化または身元エスクロー化を要求された）場合に、Hashcash はスパム抑止のフォールバック手段を提供しうる。

これは、公開アナウンス当日から Hashcash を、当時最も発展していたデジタルキャッシュシステムであるデイヴィッド・チャウムの DigiCash／Ecash と明示的に対比しながら、デジタルキャッシュインフラの補完として位置づけたものであり、技術カテゴリーとして完全に別ではない。

## 鋳造のメタファー：1997 年実装と 2002 年論文

アナウンスは実装の解説でも鋳造の用語を用いており、コスト・トークンを生成するプログラムのコマンドは `hashcash mint`、実装には「二重支払い保護」も記述されている。1997 年の `hashcash mint`／`mint` の枠組みは、バックの 2002 年 Hashcash 論文で関数命名の水準まで正式化される。同論文 §2 Cost-Functions より：

<!-- audit:quote-skip -->
> コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に `mint` の語を用いる。

コスト関数は `MINT()` と命名され、検証関数は `VALUE()` と命名されている。この用語選択は偶然ではなく、Hashcash の CPU 燃焼ステップを、最初から物理貨幣の鋳造に類比できるトークン創造の一形態として枠組みづけていた。

## §7 Applications：Hashcash を b-money の鋳造機構として

2002 年論文 §7 Applications では、DoS 抑止やスパム対策と並んで次が列挙される：

<!-- audit:quote-skip -->
> ウェイ・ダイの b-money 電子キャッシュ提案 — 銀行インターフェースを持たない電子キャッシュ方式 — の鋳造機構としての hashcash。

論文中の参考文献 [19] はウェイ・ダイの [b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)（1998 年）。この記述は、Hashcash プルーフ・オブ・ワーク基本要素を分散型デジタルキャッシュシステムの鋳造機構として用いるという、ビットコインが後に実現する組合せを、査読された出版物において明示している。バックは応用候補として提案したが、実装はしていない。

中間期の一次資料であるバックの [1998 年 12 月 6 日サイファーパンクリストでの b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/)は、独立したエントリーで記録されている。当該批評は b-money の貨幣設計上の 7 つの論点を指摘し、鋳造手法の候補として「Hashcash と同じように CPU 時間を燃やして価値を創造する」を明示的に提案する。

## 11 年間の流れ：Hashcash と貨幣、1997〜2008 年

以下の表がその流れをたどる：

| 日付 | 一次資料 | バックが Hashcash と貨幣について述べた内容 |
|---|---|---|
| 1997-03-28 | Hashcash アナウンス（サイファーパンクリスト） | Hashcash を「digicash がより広く使われるまでの応急措置」と位置づけ、節「これは digicash とどう関係するか」を含む。実装に `hashcash mint` コマンドと二重支払い保護 |
| 1998-12-06 | [サイファーパンクリスト b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) | b-money の貨幣設計上の 7 論点を指摘、「価値を創造するには CPU 時間を燃やす — Hashcash と同じように」を提案 |
| 2002-08-01 | Hashcash 論文 §2 + §7 | 「コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に `mint` の語を用いる」。§7 がウェイ・ダイの b-money 鋳造機構としての応用を列挙 |
| 2008-08-20 | [サトシからアダム・バックへ](/BitcoinArchive/ja/entries/aftermath/2008-08-20-satoshi-to-adam-back/) | サトシがビットコインホワイトペーパー向けの Hashcash 引用形式についてバックに問い合わせる |

NYT 調査への応答としてバック自身が 2026 年 4 月に X に投稿した回顧的な枠組み:

<!-- quote: q1 -->
> 私は早くから、暗号学・オンラインプライバシー・電子現金がもたらす社会的にポジティブな含意に焦点を絞っていた。だからこそ 1992 年頃から ecash の応用研究に積極的な関心を持ち続けてきた。

バックのビットコイン以前の記録については[アダム・バック伝記](/BitcoinArchive/ja/participants/adam-back/)を、この告知を法医学的に読み解いた内容については[アダム・バック同定仮説](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)を参照。§1.2 は Hashcash 著者という指紋を v0.1 コードベースと突き合わせた法医学的証拠を検討し、§1.4 は Hashcash の貨幣カテゴリ位置付けが本 1997 年投稿からビットコインの 2009 年 1 月リリースまで描く 11 年間の弧を辿る。

ビットコインの後の構成要素合成、すなわち最長チェーン合意形成規則、UTXO モデル、マイニング報酬による発行、2,100 万通貨上限、難易度調整アルゴリズムは、[ビットコイン設計系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/)で扱われている。
