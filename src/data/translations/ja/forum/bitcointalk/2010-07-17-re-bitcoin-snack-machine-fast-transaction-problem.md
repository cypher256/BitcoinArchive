---
title: "Re: Bitcoin自動販売機（高速トランザクション問題）"
date: 2010-07-17T22:29:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=423.msg3819#msg3819"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Bitcoin自動販売機（高速トランザクション問題）」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/233/"
threadId: "bt-bitcoin-snack-machine-fast-transaction-problem"
threadTitle: "Bitcoin snack machine (fast transaction problem)"
threadPosition: 1
translationStatus: complete
---

決済処理会社がサービスとして、10秒以内程度の十分な検証を行いつつ、トランザクションの迅速な配信を提供することが可能になると考えています。

ネットワークノードは、生成しようとしているブロックに取り込むために、受信したトランザクションの最初のバージョンのみを受け入れます。トランザクションをブロードキャストした時、他の誰かが同時に二重支払いをブロードキャストした場合、最も多くのノードに最初に伝播させる競争になります。一方がわずかに先行していれば、ネットワーク全体に幾何級数的に速く広がり、ほとんどのノードを獲得します。

大まかな概算の例:
1         0
4         1
16        4
64        16
80%      20%

したがって、二重支払いがたった1秒でも待たなければならない場合、非常に不利になります。

決済処理業者は多くのノードと接続を持っています。トランザクションを受信すると、それをブラストし、同時にネットワーク上の二重支払いを監視します。多数のリスニングノードのいずれかで二重支払いを受信した場合、そのトランザクションが不正であることを警告します。二重支払いのトランザクションは、リスナーの1つに検出されずに遠くまで伝播することはないでしょう。二重支払い者はリスニングフェーズが終わるまで待たなければなりませんが、その頃には決済処理業者のブロードキャストがほとんどのノードに到達しているか、伝播において非常に先行しているため、二重支払い者は残りのノードの大部分を獲得する見込みがありません。
