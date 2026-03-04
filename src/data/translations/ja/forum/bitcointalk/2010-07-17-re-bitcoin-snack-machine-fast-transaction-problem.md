---
title: "Re: Bitcoin自動販売機（高速トランザクション問題）"
date: 2010-07-17T22:29:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=423.msg3819#msg3819"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "決済処理会社が10秒以内の十分な検証でビットコインの高速決済を実現できると説明。伝播競争により二重支払いが実質的に不可能であることを論じています。"
isSatoshi: true
tags:
  - "zero-confirmation"
  - "payments"
  - "vending"
  - "double-spending"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/233/"
threadId: "bt-bitcoin-snack-machine-fast-transaction-problem"
threadPosition: 1
translationStatus: complete
---

決済処理会社がサービスとして、10秒以内程度の十分な検証を行いつつ、トランザクションの迅速な配信を提供することが可能になると考えている。

ネットワークノードは、生成しようとしているブロックに取り込むために、受信したトランザクションの最初のバージョンのみを受け入れる。トランザクションをブロードキャストした時、他の誰かが同時に二重支払いをブロードキャストした場合、最も多くのノードに最初に伝播させる競争になる。一方がわずかに先行していれば、ネットワーク全体に幾何級数的に速く広がり、ほとんどのノードを獲得する。

大まかな概算の例:
1         0
4         1
16        4
64        16
80%      20%

したがって、二重支払いがたった1秒でも待たなければならない場合、非常に不利になる。

決済処理業者は多くのノードと接続を持っている。トランザクションを受信すると、それをブラストし、同時にネットワーク上の二重支払いを監視する。多数のリスニングノードのいずれかで二重支払いを受信した場合、そのトランザクションが不正であることを警告する。二重支払いのトランザクションは、リスナーの1つに検出されずに遠くまで伝播することはないだろう。二重支払い者はリスニングフェーズが終わるまで待たなければならないが、その頃には決済処理業者のブロードキャストがほとんどのノードに到達しているか、伝播において非常に先行しているため、二重支払い者は残りのノードの大部分を獲得する見込みがない。
