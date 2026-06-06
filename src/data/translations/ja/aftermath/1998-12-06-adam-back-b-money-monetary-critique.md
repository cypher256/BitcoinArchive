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
description: "アダム・バックが b-money 提案に対し 7 つの貨幣設計上の論点を指摘し、Hashcash を鋳造機構として提案。ビットコイン 10年前の分析。"
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
  - "analysis/1976-10-25-hayek-extropians-bitcoin-lineage"
  - "aftermath/1997-03-28-adam-back-hashcash-announcement"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/2008-08-20-adam-back-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2008-08-21-adam-back-to-satoshi"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2026-05-18-mining-reward-exhaustion-fee-only-future"
  - "analysis/2008-10-31-fixed-supply-vs-adjustable-money"
translationStatus: complete
---

*サイファーパンクメーリングリスト（cypherpunks@cyberpass.net）より、1998 年 12 月 6 日（00:48:42 UTC）：*

*件名：Re: Wei Dei's "b-money" protocol*

*差出人：アダム・バック &lt;aba@dcs.ex.ac.uk&gt;*

[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)は[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)の [b-money 提案](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)に対し、貨幣設計上の批評で返信した。バックは提案上の 7 つの個別論点を指摘し、同時に自身の [Hashcash](/BitcoinArchive/ja/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/) を当該システムの鋳造機構の候補として明示的に提案した。

**Hashcash を b-money の鋳造機構として：**

<!-- audit:quote-skip -->
> 価値を創造するには CPU 時間を燃やす — Hashcash と同じように。

この一文は、ビットコインが後に実現する組合せ — プルーフ・オブ・ワーク基本要素（Hashcash）を分散型デジタルキャッシュシステム（b-money）の鋳造機構として用いる — を明示的に提案した、ビットコイン以前の一次資料である。バックは候補として提案した。実装はしていない。

**バックが指摘した 7 つの貨幣設計上の論点**

以下の 7 論点は、バックの分析を構造化して整理した。原文全文は `sourceUrl` に示す cryptoanarchy.wiki のアーカイブで確認できる。具体的な文言を確認したい読者は原文に当たられたい。

1. **ムーアの法則によるハードウェアコスト下落＝インフレ圧力。** 所定のハッシュ衝突を計算するために必要なハードウェアのコストはムーアの法則に沿って低下する。ハードウェアコストの低下は鋳造コストの低下を生み、新たに鋳造される単位の価値にインフレ圧力をかける。
2. **資源借用の脆弱性。** 自身が所有していないワークステーション群へのアクセス権を持つ利用者（バックの例：大学キャンパスのワークステーションにアクセスできる学生）は、事実上無料の CPU 時間を取得でき、コストが価値の下限となる前提が崩れる。
3. **トランザクションのリンク可能性。** b-money の仮名匿名性設計では、匿名性に見えるものが実は「リンク可能な匿名性」であり、リンク不可能な真の匿名性ではなく、仮名性にとどまる。
4. **カスタムハードウェアの規模の経済による優位。** ハッシュ衝突探索向けに特化したカスタムハードウェアを展開できる参加者は、汎用 CPU 利用者に対して「量割引」の優位を得る — 鋳造配分上の構造的な不公平である。
5. **法定通貨入金時のプライバシー漏洩。** 法定通貨から b-money を取得するには、買い手が「追跡可能な決済システムを通じて身元を明かす」必要があり、システム入口で匿名性が破られる。
6. **法定通貨出金時の身元露呈。** 出口での対称的問題：法定通貨（バックの表現では「武力独占通貨」）に出金するときに身元を明かさずに行うのは「困難」である。
7. **リソース浪費オーバーヘッド。** システム稼働は「流通している b-money の価値に等しい」オーバーヘッドを課す — のちにビットコインのプルーフ・オブ・ワークに付随することになるエネルギー消費批判である。

**ウェイ・ダイの返信（12 月 7 日）：**

ウェイ・ダイは [1998 年 12 月 7 日にバックの批評に返信し](/BitcoinArchive/ja/entries/aftermath/1998-12-07-wei-dai-re-b-money-protocol/)、「b-money はせいぜいニッチな通貨／契約執行メカニズムにしかなりません」と認め、初期の暗号アナーキスト的立場から部分的に後退する見解を示した：「今では政府の暴力独占は差し引きでプラスだと思うようになりました」。ダイはさらに、より広範な普及に必要な条件として、価格安定性・景気循環・最適なインフレ率といった未解決問題を提起した。

**バック 1998 年論点とビットコイン 10 年後の設計の対応**

以下の表は構造的な対応整理である。

| バック 1998-12-06 の論点 | ビットコインによる解 |
|---|---|
| ❶ ムーアの法則による鋳造コスト下落＝インフレ圧力 | **難易度調整** — 2016 ブロック毎に再ターゲットし、計算能力増加に対してブロック間隔をほぼ一定に保つ。鋳造速度をハードウェアコスト低下から切り離す |
| ❷ 資源借用の脆弱性（所有していない計算機の CPU 利用） | **間接的に無効化** — マイニング経済が ASIC 主体に移行（論点 ❹ を参照）し、汎用 CPU 借用は構造的に競争力を失った。別の系特性で攻撃ベクトルが退役した形であり、直接的緩和ではない |
| ❸ トランザクションのリンク可能性（仮名性に留まる） | **基本レイヤーでは未解決** — ビットコインの UTXO グラフは公開で追跡可能であり、アドレスクラスタリング／チェーン分析ツールはバックが指摘したリンク可能性を運用化している。プライバシー層プロトコルは任意導入の緩和策として存在するが、基本レイヤーの修正ではない |
| ❹ カスタムハードウェアの規模の経済による優位 | **未解決** — のちにビットコイン運用史の中でマイニング ASIC 集中問題として顕在化 |
| ❺ 法定通貨入金時のプライバシー漏洩 | **規制により形式化** — 現代のアンチマネーロンダリング（AML）／顧客確認（KYC）枠組みが、規制された法定通貨入金経路に身元検証を要求し、バックが指摘したプライバシーギャップを閉じるのではなく形式化している |
| ❻ 法定通貨出金時の身元露呈 | **❺ と同じ規制枠組み** — 規制取引所の出金コンプライアンス要件が、同じ身元検証要求を出口にも拡張する |
| ❼ 流通価値に等しいリソース・オーバーヘッド | **継続論争** — ビットコインのプルーフ・オブ・ワークに公開以後ずっと付随しているエネルギー消費批判 |
| 中心提案：「価値を創造するには CPU 時間を燃やす — Hashcash と同じように」 | **ビットコインの中心メカニズム** — Hashcash 型の PoW 基本要素を分散型デジタルキャッシュ台帳と結合し、マイニング報酬による新規発行で鋳造配分を行う |

本 1998 年 12 月批評は二つの後続分析で精読されている。 [アダム・バック同定仮説](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)はバックが列挙した七つの論点を根拠的な証拠として扱う ― §2.4 では各論点が後にビットコインによってどう解決されるかを対応付け、 §3.1 では同じ列挙を「仮説が説明し切らねばならない第三者的読解の記録」として用いる。 [固定供給対調整可能通貨分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/)は同じ批評を別角度から読む。ビットコインの後の固定供給選択が、それに対して下された応答であるところの、サイファーパンクの貨幣論争の記録として扱うのである。

*[編者注：本投稿は、ビットコイン公開の 10 年前にアダム・バックが貨幣システム設計の本格的分析に従事していた、ビットコイン以前の一次資料記録である。同じ「Hashcash を b-money の鋳造機構として用いる」応用は、バックの [2002 年 8 月 Hashcash 論文 §7 応用](http://www.hashcash.org/papers/hashcash.pdf)でより形式的に列挙されており、応用候補として「ウェイ・ダイの b-money 電子キャッシュ提案の鋳造機構としての hashcash」を明示する。これらはバックがビットコインまたは b-money／Hashcash 結合を実装したことを意味しない — バックは応用候補として提案しただけであり、実装、論点 1 の解決、残る設計空間の合成は、10 年後の[ビットコイン v0.1](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/) でサトシが行った貢献として記録されている。]*
