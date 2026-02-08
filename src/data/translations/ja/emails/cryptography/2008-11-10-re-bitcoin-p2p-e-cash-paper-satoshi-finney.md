---
title: "返信: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-10T22:18:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014832.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "SatoshiがHal Finneyの計算コストに関する質問に返答し、難易度の調整と、攻撃者にとってルールに従う方がより利益的であることを説明した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 10
isSatoshi: true
tags:
  - "difficulty-adjustment"
  - "attacker-incentives"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/12/"
translationStatus: complete
---

Hal Finneyの投稿：
> ブロードキャスターがブロックの2つの異なるバージョンを送信していることが
> 判明した場合、それを検出してブロックを拒否できると述べられています。しかし、
> 一方の当事者がブロックのあるバージョンを送信し、別の当事者が異なる
> バージョンを送信した場合にどうするかについての議論がありません。

その通り、ノードは見た中で最長のプルーフ・オブ・ワークチェーンを追跡し、その延長に取り組み続ける。ブロックの2つのバージョンがほぼ同時にブロードキャストされた場合、一部のノードが一方を先に受信し、他のノードがもう一方を先に受信する。各ノードは最初に受信した方の延長に取り組む。最終的に一方がもう1つのブロックで延長され、より長いことが証明される。短い分岐に取り組んでいたノードは、その後より長い方に切り替える。

新しいトランザクションのブロードキャストは必ずしもすべてのノードに到達する必要はない。多くのノードに到達すれば、やがてブロックに取り込まれる。ブロックのブロードキャストもメッセージの欠落に対して寛容である。ノードがブロックを受信しなかった場合、次のブロックを受信した際に1つ見逃したことに気づき、それを要求する。
