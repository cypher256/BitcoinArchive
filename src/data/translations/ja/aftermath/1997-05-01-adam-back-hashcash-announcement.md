---
title: "アダム・バックが Hashcash を公開：デジタルキャッシュ議論の中に位置づけられたプルーフ・オブ・ワーク方式"
date: 1997-05-01T00:00:00Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://www.cypherspace.org/hashcash/"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "1997 年 5 月、アダム・バックが Hashcash を公開した — メールスパムと匿名リメイラー濫用への対抗策として提案された、部分ハッシュ衝突に基づく郵便料金方式。アナウンスとサイファーパンクメーリングリストでの議論は、Hashcash を純粋なスパム対策ツールではなく、デジタルキャッシュ議論の中に位置づけた：バックは Hashcash を「digicash がより広く使われるまでの応急措置」 と枠組みづけ、コスト関数を「mint」 と呼んで物理貨幣の鋳造との類推を引いた。1997 年のアナウンスは 11 年にわたる流れの始点 — バックの 1998 年 12 月 b-money 批評と、2002 年 8 月 Hashcash 論文 §7 で「hashcash をウェイ・ダイの b-money 電子キャッシュ提案の鋳造機構として」 列挙したことを経て、2008 年 8 月 20 日にサトシ・ナカモトがバックに Hashcash の引用形式について問い合わせる場面まで続く。"
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
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash, or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
    note: "1997 年のサイファーパンクメーリングリスト議論でのバックの発言として「Hashcash may provide a stop-gap measure until digicash becomes more widely used」 および「Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires」 を引用する二次資料の出典。元のメーリングリストアーカイブ URL は本エントリーで再検証していない。厳密な一次資料検証が必要な読者は cypherpunks.venona.com または cryptoanarchy.wiki のサイファーパンクアーカイブを参照されたい。"
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

1997 年 5 月、当時エクセター大学の博士研究員だった [アダム・バック](/BitcoinArchive/ja/participants/adam-back/) は、サイファーパンクメーリングリストおよび cypherspace.org ドメインで [Hashcash](http://www.cypherspace.org/hashcash/) を公開した。アナウンスは「partial hash collision based postage scheme（部分ハッシュ衝突に基づく郵便料金方式）」 を記述する — 送信者にメール 1 通の送信またはリメイラースロット 1 件の使用ごとに測定可能な CPU 作業を強制し、受信者側では検証が容易にできる、暗号学的なプルーフ・オブ・ワーク基本要素である。

Hashcash 自体は通貨ではない。台帳もなく、送金もなく、合意形成もなく、通貨供給もない。システムは単独完結するスパム対策／DoS 対策のスタンプ機構である。しかしバックは提案を最初からデジタルキャッシュ議論の中に位置づけており、周辺のメーリングリスト議論も Hashcash を、純粋なスパム対策インフラとしてではなく貨幣関連設計問題として扱っていた。

## 1997 年の貨幣隣接の枠組み

二次資料による報告（Bitcoin Magazine *The Genesis Files: Hashcash*）によれば、バックはサイファーパンクリストで次のように主張した：

> "Hashcash may provide a stop-gap measure until digicash becomes more widely used."

> （Hashcash は digicash がより広く使われるまでの応急措置を提供しうる）

> "Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires."

> （Hashcash は無料 — PC で CPU サイクルをいくらか燃やすだけで使える。ネット文化の自由な議論のあり方に即しており、財政的に厳しい者が百万長者と対等に渡り合える）

*[編者注：これらの引用はバックの 1997 年サイファーパンクリスト議論への発言として二次資料が報告するもの。本エントリーでは元のメーリングリストアーカイブ URL を再検証していない。厳密な一次資料検証が必要な読者は `cypherpunks.venona.com` または `cryptoanarchy.wiki` のサイファーパンクアーカイブを参照されたい。]*

この枠組みは Hashcash をデイヴィッド・チャウムの [DigiCash／Ecash](https://en.wikipedia.org/wiki/Ecash)（当時最も発展していたデジタルキャッシュシステム）と明示的に対比して位置づけており、技術カテゴリーとして完全に別ではなく、デジタルキャッシュインフラへの補完として扱う。

## 鋳造のメタファー

バックの後年の Hashcash 論文（2002 年 8 月）は、関数命名の水準で貨幣の類推を明示する。[§2 Cost-Functions](http://www.hashcash.org/papers/hashcash.pdf) より：

> "We use the term **mint** for the cost-function because of the analogy between creating cost tokens and minting physical money."

> （コスト・トークンの作成と物理貨幣の鋳造との類推により、コスト関数に **mint** の語を用いる）

コスト関数は `MINT()` と命名され、検証関数は `VALUE()` と命名されている。この用語選択は偶然ではない — バックは Hashcash の CPU 燃焼ステップを、物理貨幣の鋳造に類比できるトークン創造の一形態として枠組みづけていた。

## §7 Applications：Hashcash を b-money の鋳造機構として

同じ 2002 年論文 §7 Applications では、DoS 抑止やスパム対策と並んで次が列挙される：

> "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal, an electronic cash scheme without a banking interface."

> （ウェイ・ダイの b-money 電子キャッシュ提案 — 銀行インターフェースを持たない電子キャッシュ方式 — の鋳造機構としての hashcash）

論文中の参考文献 [19] はウェイ・ダイの [b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)（1998 年）。この記述は、ビットコインが後に実現する組合せ — Hashcash プルーフ・オブ・ワーク基本要素を、分散型デジタルキャッシュシステムの鋳造機構として用いる — を、査読された出版物において明示している。バックは応用候補として提案した；実装はしていない。2002 年論文は上の `secondarySources` に別途記録している。

中間期の一次資料 — バックの [1998 年 12 月 6 日 サイファーパンクリストでの b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) — は独立したエントリーで記録されている。当該批評は b-money の貨幣設計上の 7 つの論点を指摘し、鋳造手法の候補として「to create value you burn CPU time, just like with hashcash」 を明示的に提案する。

## 本エントリーが確立する事柄

本エントリーは 11 年にわたる流れの 1997 年の始点を記録する：

| 年 | 一次資料 | バックが Hashcash と貨幣について述べた内容 |
|---|---|---|
| 1997-05 | Hashcash アナウンス（サイファーパンクリスト・cypherspace.org） | Hashcash を「digicash がより広く使われるまでの応急措置」 と位置づけ |
| 1998-12-06 | [サイファーパンクリスト b-money 批評](/BitcoinArchive/ja/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) | 7 つの貨幣設計論点を指摘；「to create value you burn CPU time, just like with hashcash」 を提案 |
| 2002-08-01 | Hashcash 論文 §2 + §7 | 「mint」 用語；b-money 鋳造応用を列挙 |
| 2008-08-20 | [サトシからアダム・バックへ](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) | サトシがビットコインホワイトペーパー向けの Hashcash 引用形式についてバックに問い合わせる |

*[編者注：Hashcash は通貨ではない。本エントリーはバックがビットコインを設計したと主張するものでもない。1997 年のアナウンスは貨幣隣接の枠組みを持つスパム対策インフラであり、本格的な貨幣設計の仕事は 1998 年 12 月 6 日の b-money 批評および 2002 年論文に存在する。本エントリーは時系列上の始点を記録する。これらはバックがビットコインまたは Hashcash 通貨化を実装したことを意味しない — ビットコインの構成要素合成（最長チェーン合意形成規則、UTXO モデル、マイニング報酬による発行、2,100 万通貨上限、難易度調整アルゴリズム）は [ビットコイン設計系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/) に別途記録されている。バック自身による設計空間への関心の振り返りは、NYT カレイロウ調査への応答として 2026 年 4 月 8 日に投稿された [X 投稿](https://x.com/adam3us/status/2041811857732768148) に現れる：「I was early in laser focus on the positive societal implications of cryptography, online privacy and electronic cash, hence my ~1992 onwards active interest in applied research on ecash（暗号学・オンラインプライバシー・電子キャッシュの肯定的な社会的含意に早くから集中的に注目していた、ゆえに 1992 年以降の ecash の応用研究への積極的な関心がある）」。]*
