---
title: "アダム・バックによる b-money 批評：ビットコインの 10 年前に指摘された 7 つの貨幣設計上の論点"
date: 1998-12-06T00:48:42Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "https://mailing-list-archive.cryptoanarchy.wiki/archive/1998/12/0b252a6001b0bb9e53289d9a7679164a884a28626360ff8a05ba8c5e9f4208ae/"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "1998 年 12 月 6 日、アダム・バックがサイファーパンクメーリングリストでウェイ・ダイの b-money 提案に対し、7 つの貨幣設計上の論点を指摘した返信。ハードウェアコストのムーアの法則的低下による発行コスト下落＝インフレ圧力、資源借用の脆弱性、トランザクションのリンク可能性、カスタムハードウェアの規模の経済による不公平、法定通貨入金時のプライバシー漏洩、出金時の身元露呈、流通価値に等しいリソース・オーバーヘッド。バックは Hashcash を b-money の鋳造機構として明示的に提案：「to create value you burn CPU time, just like with hashcash」。ビットコイン 10 年前の貨幣システム設計分析であり、ビットコインの難易度調整アルゴリズムが後に解決した論点と、マイニング ASIC 集中・PoW エネルギー消費論争として継続する論点の両方を先取りしている。"
isSatoshi: false
tags:
  - "adam-back"
  - "wei-dai"
  - "b-money"
  - "hashcash"
  - "cypherpunks"
  - "monetary-policy"
  - "proof-of-work"
  - "origins"
  - "historic"
secondarySources:
  - name: "Venona アーカイブ — 同一メールを現地時間で記録（1998 年 12 月 5 日）"
    url: "http://cypherpunks.venona.com/archive/1998/12/msg00194.html"
    note: "別のミラーに同じメッセージがアーカイブされており、12 月 5 日の日付は太平洋標準時（PST）現地時間を反映している。cryptoanarchy.wiki 版にはメールヘッダーのタイムスタンプ「Sun, 6 Dec 1998 08:48:42 +0800」（UTC で 1998-12-06T00:48:42Z）が残っている。"
  - name: "Bitcoin Magazine — Bitcoin, Adam Back and the Quest for Digital Cash"
    url: "https://bitcoinmagazine.com/culture/bitcoin-adam-back-and-digital-cash"
relatedEntries:
  - "aftermath/1997-05-01-adam-back-hashcash-announcement"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/2008-08-20-adam-back-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "correspondence/adam-back/2008-08-21-adam-back-to-satoshi"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
translationStatus: complete
---

*サイファーパンクメーリングリスト（cypherpunks@cyberpass.net）より、1998 年 12 月 6 日（00:48:42 UTC）：*

*件名：Re: Wei Dei's "b-money" protocol*

*差出人：アダム・バック &lt;aba@dcs.ex.ac.uk&gt;*

[アダム・バック](/BitcoinArchive/ja/participants/adam-back/) は [ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/) の [b-money 提案](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) に対し、貨幣設計上の批評で返信した。バックは提案上の 7 つの個別論点を指摘し、同時に自身の [Hashcash](/BitcoinArchive/ja/entries/aftermath/1997-05-01-adam-back-hashcash-announcement/) を当該システムの鋳造機構の候補として明示的に提案した。

**Hashcash を b-money の鋳造機構として：**

> "to create value you burn CPU time, just like with hashcash"

> （価値を創造するには CPU 時間を燃やす — Hashcash と同じように）

この一文は、ビットコインが後に実現する組合せ — プルーフ・オブ・ワーク基本要素（Hashcash）を分散型デジタルキャッシュシステム（b-money）の鋳造機構として用いる — を明示的に提案した、ビットコイン以前の一次資料である。バックは候補として提案した。実装はしていない。

**バックが指摘した 7 つの貨幣設計上の論点**

*[編者注：以下の 7 論点は、編者がバックの分析を構造化して整理したもの。原文全文は `sourceUrl` に示す cryptoanarchy.wiki のアーカイブで確認できる。具体的な文言を確認したい読者は原文に当たられたい。]*

1. **ムーアの法則によるハードウェアコスト下落＝インフレ圧力。** 所定のハッシュ衝突を計算するために必要なハードウェアのコストはムーアの法則に沿って低下する。ハードウェアコストの低下は鋳造コストの低下を生み、新たに鋳造される単位の価値にインフレ圧力をかける。
2. **資源借用の脆弱性。** 自身が所有していないワークステーション群へのアクセス権を持つ利用者（バックの例：大学キャンパスのワークステーションにアクセスできる学生）は、事実上無料の CPU 時間を取得でき、コストが価値の下限となる前提が崩れる。
3. **トランザクションのリンク可能性。** b-money の仮名匿名性設計では、匿名性に見えるものが実は「リンク可能な匿名性」であり、リンク不可能な真の匿名性ではなく、仮名性にとどまる。
4. **カスタムハードウェアの規模の経済による優位。** ハッシュ衝突探索向けに特化したカスタムハードウェアを展開できる参加者は、汎用 CPU 利用者に対して「量割引」の優位を得る — 鋳造配分上の構造的な不公平である。
5. **法定通貨入金時のプライバシー漏洩。** 法定通貨から b-money を取得するには、買い手が「追跡可能な決済システムを通じて身元を明かす」 必要があり、システム入口で匿名性が破られる。
6. **法定通貨出金時の身元露呈。** 出口での対称的問題：法定通貨（「force-monopoly money」）に出金するときに身元を明かさずに行うのは「困難」である。
7. **リソース浪費オーバーヘッド。** システム稼働は「流通している b-money の価値に等しい」 オーバーヘッドを課す — のちにビットコインのプルーフ・オブ・ワークに付随することになるエネルギー消費批判である。

**ウェイ・ダイの返信（12 月 7 日）：**

ウェイ・ダイは [1998 年 12 月 7 日にバックの批評に返信し](/BitcoinArchive/ja/entries/aftermath/1998-12-07-wei-dai-re-b-money-protocol/)、「b-money はせいぜいニッチな通貨／契約執行メカニズムにしかなりません」 と認め、初期の暗号アナーキスト的立場から部分的に後退する見解を示した：「今では政府の暴力独占は差し引きでプラスだと思うようになりました」。ダイはさらに、より広範な普及に必要な条件として、価格安定性・景気循環・最適なインフレ率といった未解決問題を提起した。

**バック 1998 年論点とビットコイン 10 年後の設計の対応**

*[編者注：以下の表は編者による構造的な対応整理。]*

| バック 1998-12-06 の論点 | ビットコインによる解 |
|---|---|
| ❶ ムーアの法則による鋳造コスト下落＝インフレ圧力 | **難易度調整** — 2016 ブロック毎に再ターゲットし、計算能力増加に対してブロック間隔をほぼ一定に保つ。鋳造速度をハードウェアコスト低下から切り離す |
| ❹ カスタムハードウェアの規模の経済による優位 | **未解決** — のちにビットコイン運用史の中でマイニング ASIC 集中問題として顕在化 |
| ❼ 流通価値に等しいリソース・オーバーヘッド | **継続論争** — ビットコインのプルーフ・オブ・ワークに公開以後ずっと付随しているエネルギー消費批判 |
| 中心提案：「to create value you burn CPU time, just like with hashcash」 | **ビットコインの中心メカニズム** — Hashcash 型の PoW 基本要素を分散型デジタルキャッシュ台帳と結合し、ブロック報酬による発行で鋳造配分を行う |

*[編者注：本投稿は、ビットコイン公開の 10 年前にアダム・バックが貨幣システム設計の本格的分析に従事していた、ビットコイン以前の一次資料記録である。同じ「Hashcash を b-money の鋳造機構として用いる」 応用は、バックの [2002 年 8 月 Hashcash 論文 §7 応用](http://www.hashcash.org/papers/hashcash.pdf) でより形式的に列挙されており、応用候補として「hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal」 を明示する。これらはバックがビットコインまたは b-money／Hashcash 結合を実装したことを意味しない — バックは応用候補として提案しただけであり、実装、論点 1 の解決、残る設計空間の合成は、10 年後の [ビットコイン v0.1](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/) でサトシが行った貢献として記録されている。]*
