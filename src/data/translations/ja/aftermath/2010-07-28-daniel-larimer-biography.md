---
title: "ダニエル・ラリマー（1980–）— bytemaster、2010年にオフチェーン即時決済を主張した後の BitShares / Steem / EOS 創業者"
date: 2010-07-28T20:59:42Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/EOS.IO"
author: "Daniel Larimer"
participants:
  - name: "Daniel Larimer"
    slug: "daniel-larimer"
description: "ソフトウェア開発者（bytemaster、1980-）。2010年中頃 BitcoinTalk 参加、オンチェーン決済を遅すぎと主張。BitShares・Steem・EOS 設計の起点。"
isSatoshi: false
tags:
  - "daniel-larimer"
  - "biography"
  - "bitcointalk"
  - "bitshares"
  - "steem"
  - "eos"
  - "historic"
relatedEntries:
  - forum/bitcointalk/topic-532/2010-07-29-re-scalability-and-transaction-rate
translationStatus: complete
---

2010 年 7 月 28 日、BitcoinTalk に **bytemaster** というハンドル名のユーザーが[初めて投稿した](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-532/2010-07-28-bytemaster-msg6269/):

> 「トランザクションを配布し『確定』させるために必要な帯域、ディスク容量、計算時間は、マイクロペイメントに対しては法外に高くつくと確信している。［……］支払いが正当だと検証するのに 10 分は長すぎる。クレジットカードを通すのと同じくらい速くあるべきだ。」

同じ投稿で **「bit-bank（ビット・バンク）」** を提案した —— 銀行同士でオフチェーン決済を行って即時送金を実現する信頼ベースの機関で、オンチェーン決済は銀行間ネッティングに限定するという構想。「高速なユーザー層トランザクションと、遅いベース層コンセンサスの分離」 という設計思想は、後に彼が創業する 3 つの主要ブロックチェーンプロジェクトの前提となった —— **BitShares**（2013〜2016）、**Steem**（2016）、ブレンダン・ブルマーとの **EOS.IO**（2017、Block.one）。いずれも DPoS（Delegated Proof of Stake）で同じ目的を追求 —— 輪番で選出されたバリデーター群にブロック生成を集中させることで高スループットを達成する。ビットコイン側も同じ問題に「オフチェーンで即時、オンチェーンで決済」（Lightning、Liquid）と答えたが、彼が手放したオープンなバリデーター集合は保持した。

### その後のプロジェクト
2013–2016年、ラリマーは DPoS 上に構築された分散型取引所プラットフォーム **BitShares** に携わった。2016年には、ブロックチェーン基盤のソーシャルメディアである **Steem** に移行。2017年には Block.one のブレンダン・ブルマーとともに **EOS.IO** を共同設立し、CTO を務めた。2021年1月10日に Block.one からの辞任を発表した。いずれのプロジェクトも同じ前提を追求している──輪番で選出されたバリデーター群にブロック生成を集中させることで、高スループットなコンセンサスを達成する、という前提である。

### 意義
ラリマーの 2010年の BitcoinTalk 投稿は、ビットコインのベースレイヤーだけではマイクロペイメントや小売速度の商取引に対応できない、という主張を公に残した最も早い発言の一つである。歴史は、その議論の両側を別々に正当化した──ビットコイン側のレイヤー・ソリューション（Lightning、Liquid）は、まさに彼が素描した「オフチェーンで即時、オンチェーンで決済」というパターンをそのまま踏襲した。一方、彼自身のプロジェクトは同じ目的をオープンなバリデーター集合を手放してスループットに振り切る形で追求した。いずれにせよ、2010年の彼の異議は、純粋な Nakamoto コンセンサスへの一貫した対抗ビジョンが公の記録として現れた地点に刻まれている。
