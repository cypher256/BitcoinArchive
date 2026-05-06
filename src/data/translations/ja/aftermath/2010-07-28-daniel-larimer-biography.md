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
description: "ソフトウェア開発者（bytemaster、1980-）。2010年中頃BitcoinTalk参加、オンチェーン決済を遅すぎと主張。BitShares・Steem・EOS設計の起点。"
isSatoshi: false
tags:
  - "daniel-larimer"
  - "biography"
  - "bitcointalk"
  - "bitshares"
  - "steem"
  - "eos"
  - "historic"
secondarySources:
  - name: "EOS.IO — Wikipedia"
    url: "https://en.wikipedia.org/wiki/EOS.IO"
relatedEntries:
  - forum/bitcointalk/topic-532/2010-07-29-re-scalability-and-transaction-rate
translationStatus: complete
---

ダニエル・ラリマー（1980年生まれ、BitcoinTalk 上のハンドル名は **bytemaster**）はアメリカのソフトウェア開発者で、後に3つの主要なブロックチェーンプロジェクトを創業した。それらの設計思想の中核は、2010年のビットコインフォーラムでの発言にすでに表れていた。すなわち、オンチェーン決済だけでは現実世界の決済に必要なスループットとレイテンシを満たせない、という主張である。

### 初期のビットコイン投稿（2010年）
ラリマーはアーカイブに[2010年7月28日](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-532/2010-07-28-bytemaster-msg6269/)、次のような投稿で初めて登場する。

> 「トランザクションを配布し『確定』させるために必要な帯域、ディスク容量、計算時間は、マイクロペイメントに対しては法外に高くつくと確信している。［……］支払いが正当だと検証するのに10分は長すぎる。クレジットカードを通すのと同じくらい速くあるべきだ。」

同じ投稿で彼は **「bit-bank（ビット・バンク）」** を提案した──銀行同士でオフチェーン決済を行って即時送金を実現する信頼ベースの機関で、オンチェーン決済は銀行間ネッティングに限定する、という構想である。これは後に彼が手がける DPoS（Delegated Proof of Stake）、すなわち「高速なユーザー層トランザクションと、遅いベース層コンセンサスの分離」という設計思想そのものだった。

### その後のプロジェクト
2013–2016年、ラリマーは DPoS 上に構築された分散型取引所プラットフォーム **BitShares** に携わった。2016年には、ブロックチェーン基盤のソーシャルメディアである **Steem** に移行。2017年には Block.one のブレンダン・ブルマーとともに **EOS.IO** を共同設立し、CTO を務めた。2021年1月10日に Block.one からの辞任を発表した。いずれのプロジェクトも同じ前提を追求している──輪番で選出されたバリデーター群にブロック生成を集中させることで、高スループットなコンセンサスを達成する、という前提である。

### 意義
ラリマーの2010年の BitcoinTalk 投稿は、ビットコインのベースレイヤーだけではマイクロペイメントや小売速度の商取引に対応できない、という主張を公に残した最も早い発言の一つである。歴史は、その議論の両側を別々に正当化した──ビットコイン側のレイヤー・ソリューション（Lightning、Liquid）は、まさに彼が素描した「オフチェーンで即時、オンチェーンで決済」というパターンをそのまま踏襲した。一方、彼自身のプロジェクトは同じ目的をオープンなバリデーター集合を手放してスループットに振り切る形で追求した。いずれにせよ、2010年の彼の異議は、純粋な Nakamoto コンセンサスへの一貫した対抗ビジョンが公の記録として現れた地点に刻まれている。
