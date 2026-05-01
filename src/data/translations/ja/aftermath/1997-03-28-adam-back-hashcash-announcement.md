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
description: "1997 年 3 月 28 日、アダム・バックがサイファーパンクメーリングリストで Hashcash を公開した — 「partial hash collision based postage scheme（部分ハッシュ衝突に基づく郵便料金方式）」。スパムメールおよびリメイラー濫用への対抗策として提案されたプルーフ・オブ・ワーク基本要素。アナウンス（hashcash.org/papers/announce.txt に保存）はデジタルキャッシュ議論の中に明示的に位置づけている：「How does this fit in with digicash」 という独立した節で、Hashcash を「digicash がより広く使われるまでの応急措置」 として、また digicash が「sour（違法化または身元エスクロー化）」 になった場合のフォールバックとして枠組みづける。1997 年のアナウンスは 11 年にわたる流れの始点 — バックの 1998 年 12 月 b-money 批評と、2002 年 8 月 Hashcash 論文 §7 で「hashcash をウェイ・ダイの b-money 電子キャッシュ提案の鋳造機構として」 列挙したことを経て、2008 年 8 月 20 日にサトシ・ナカモトが Hashcash の引用形式についてバックに問い合わせる場面まで続く。"
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
    note: "2002 年論文は、1997 年のアナウンス以降の「さまざまな応用、提案された改善、関連する後続出版物」 を整理している。§1 が 1997 年の元出版を引用し、§7 応用の節では他の応用と並んで「hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal」 を列挙する。同論文はまたコスト関数名として MINT() を採用し、明示的に注記する：「コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に mint の語を用いる」。"
  - name: "サイファーパンクリストアーカイブ（venona ミラー）— 同じアナウンス"
    url: "https://cypherpunks.venona.com/date/1997/03/msg00774.html"
    note: "1997 年 3 月 28 日の同じアナウンスを venona サイファーパンクリストミラーでアーカイブしたもの。サーバーアクセスが不安定なため、正式な sourceUrl はアダム・バック自身がホストする hashcash.org/papers/announce.txt を採用している。"
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash, or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
    note: "1997 年アナウンスとその貨幣的位置づけに関する二次資料の報告。"
relatedEntries:
  - "aftermath/1998-12-06-adam-back-b-money-monetary-critique"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/2008-08-20-adam-back-biography"
  - "correspondence/adam-back/2008-08-20-satoshi-to-adam-back"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
translationStatus: complete
---

1997 年 3 月 28 日、当時エクセター大学の博士研究員だった [アダム・バック](/BitcoinArchive/ja/participants/adam-back/) は、サイファーパンクメーリングリストに件名「`[ANNOUNCE] hash cash postage implementation`」 のメールを送信した。アナウンス全文は [hashcash.org/papers/announce.txt](http://www.hashcash.org/papers/announce.txt) — アダム・バック自身がホストする元投稿のコピー — に保存されている。

Hashcash 自体は通貨ではない。台帳もなく、送金もなく、合意形成もなく、通貨供給もない。システムは単独完結するスパム対策／DoS 対策のスタンプ機構である。しかし 1997 年のアナウンスは、Hashcash をデジタルキャッシュ議論の中に明示的に位置づけている — 「How does this fit in with digicash（これは digicash とどう関係するか）」 という独立した節で。

## アナウンスが貨幣について述べた内容

アナウンスは技術的提案 — 計算が任意のコストにできて検証は瞬時の「partial hash collision based postage scheme（部分ハッシュ衝突に基づく郵便料金方式）」、リメイラー郵便料金とスパム抑止のための提案 — から始まる。実装の解説と応用例の後、アナウンスはデジタルキャッシュとの関係に話題を移す。

「How does this fit in with digicash」 節より（原文ママ）：

> "Digicash postage on remailers, and mail would be useful, however there are a number of problems with digicash:
>
>    * It is more onerous to set up an account (form filling etc)
>    * Not many people have accounts
>    * It's only anonymous for the payer anonymous (and not anonymous for the seller)
>
> So my suggestion is that we have remailers which accept either hash collision postage, or digicash postage. The advantages of this approach are:
>
>    * Hashcash may provide a stop gap measure until digicash becomes more widely used
>    * Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires, retired government officials, etc on equal terms.
>    * Hashcash may provide us with a fall back method for controling spam if digicash goes sour (gets outlawed or required to escrow user identities)."

訳: 「リメイラーやメールの digicash 郵便料金は有用だが、digicash には問題がいくつかある：(1) アカウント開設が手間（書類記入など）、(2) アカウント保有者が少ない、(3) 支払い者については匿名だが受取側については匿名でない。そこで提案したいのは、ハッシュ衝突郵便料金か digicash 郵便料金のどちらでも受け付けるリメイラーを作ること。利点は次の通り：(a) Hashcash は digicash がより広く使われるまでの応急措置を提供しうる。(b) Hashcash は無料で、PC で CPU サイクルをいくらか燃やすだけで使える。ネット文化の自由な議論のあり方に即しており、財政的に厳しい者が百万長者や引退した政府職員などと対等に渡り合える。(c) digicash が悪い方向に行った（違法化または身元エスクロー化を要求された）場合に、スパム抑止のフォールバック手段を提供しうる。」

これは、公開アナウンス当日から Hashcash を、デジタルキャッシュインフラの補完として — 当時最も発展していたデジタルキャッシュシステムであるデイヴィッド・チャウムの [DigiCash／Ecash](https://en.wikipedia.org/wiki/Ecash) と明示的に対比して — 位置づけたものであり、技術カテゴリーとして完全に別ではない。

## 鋳造のメタファー：1997 年実装と 2002 年論文

アナウンスは実装の解説でも鋳造の用語を使っている — コスト・トークンを生成するプログラムのコマンドは `hashcash mint`、また実装には「double spending protection」 が記述されている。1997 年の `hashcash mint`／`mint` の枠組みは、バックの 2002 年 Hashcash 論文で関数命名の水準で正式化される。[§2 Cost-Functions](http://www.hashcash.org/papers/hashcash.pdf) より：

> "We use the term **mint** for the cost-function because of the analogy between creating cost tokens and minting physical money."

> （コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に **mint** の語を用いる）

コスト関数は `MINT()` と命名され、検証関数は `VALUE()` と命名されている。この用語選択は偶然ではない — Hashcash の CPU 燃焼ステップを、最初から物理貨幣の鋳造に類比できるトークン創造の一形態として枠組みづけていた。

## §7 Applications：Hashcash を b-money の鋳造機構として

2002 年論文 §7 Applications では、DoS 抑止やスパム対策と並んで次が列挙される：

> "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal, an electronic cash scheme without a banking interface."

> （ウェイ・ダイの b-money 電子キャッシュ提案 — 銀行インターフェースを持たない電子キャッシュ方式 — の鋳造機構としての hashcash）

論文中の参考文献 [19] はウェイ・ダイの [b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)（1998 年）。この記述は、ビットコインが後に実現する組合せ — Hashcash プルーフ・オブ・ワーク基本要素を、分散型デジタルキャッシュシステムの鋳造機構として用いる — を、査読された出版物において明示している。バックは応用候補として提案した；実装はしていない。

中間期の一次資料 — バックの [1998 年 12 月 6 日 サイファーパンクリストでの b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) — は独立したエントリーで記録されている。当該批評は b-money の貨幣設計上の 7 つの論点を指摘し、鋳造手法の候補として「to create value you burn CPU time, just like with hashcash」 を明示的に提案する。

## 本エントリーが確立する事柄

本エントリーは 11 年にわたる流れの 1997 年の始点を記録する：

| 日付 | 一次資料 | バックが Hashcash と貨幣について述べた内容 |
|---|---|---|
| 1997-03-28 | [Hashcash アナウンス](http://www.hashcash.org/papers/announce.txt)（サイファーパンクリスト） | Hashcash を「digicash がより広く使われるまでの応急措置」 と位置づけ；節「How does this fit in with digicash」；実装に `hashcash mint` コマンドと「double spending protection」 |
| 1998-12-06 | [サイファーパンクリスト b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) | b-money の貨幣設計上の 7 論点を指摘；「to create value you burn CPU time, just like with hashcash」 を提案 |
| 2002-08-01 | [Hashcash 論文 §2 + §7](http://www.hashcash.org/papers/hashcash.pdf) | 「コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に **mint** の語を用いる」；§7 がウェイ・ダイの b-money 鋳造機構としての応用を列挙 |
| 2008-08-20 | [サトシからアダム・バックへ](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) | サトシがビットコインホワイトペーパー向けの Hashcash 引用形式についてバックに問い合わせる |

NYT 調査への応答としてバック自身が 2026 年 4 月に投稿した [X 投稿](https://x.com/adam3us/status/2041811857732768148) における回顧的な枠組み：「I was early in laser focus on the positive societal implications of cryptography, online privacy and electronic cash, hence my ~1992 onwards active interest in applied research on ecash（暗号学・オンラインプライバシー・電子キャッシュの肯定的な社会的含意に早くから集中的に注目していた、ゆえに 1992 年以降の ecash の応用研究への積極的な関心がある）」。

*[編者注：Hashcash は通貨ではない。本エントリーはバックがビットコインを設計したと主張するものでもない。1997 年のアナウンスは、アナウンス投稿自体に貨幣関連の枠組みを内蔵したスパム対策インフラ。本格的な貨幣設計分析は 1998 年 12 月 6 日の b-money 批評と 2002 年論文に存在する。これらはバックがビットコインまたは Hashcash 通貨化を実装したことを意味しない — ビットコインの構成要素合成（最長チェーン合意形成規則、UTXO モデル、マイニング報酬による発行、2,100 万通貨上限、難易度調整アルゴリズム）は [ビットコイン設計系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/) に別途記録されている。]*
