---
title: "Re: 提案ではなく"
date: 2010-08-12T02:46:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8836#msg8836"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがネットワークが値と系譜を知らない仮想システムにおけるトランザクション検証の課題を説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/347/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Red"
    date: "2010-08-11T16:10:19.000Z"
  - id: "q2"
    person: "satoshi"
    date: "2010-08-11T12:07:59.000Z"
---

<!-- quote: q1 -->
<!-- quote: q2 -->
<!-- tone-skip -->
<!-- /tone-skip -->
<!-- tone-skip -->
> まだこのアイデアを考え中だ……
<!-- /tone-skip -->

私も最初はそう思った。しかし、その後自分を納得させた。
ここで既存のBitcoinシステムの話に戻っていますか？

私が説明していた仮想システムについて話していた。ネットワークがトランザクションの値と系譜を知らなければ、それらを検証して保証することができないので、クライアントが元のコインまでの全履歴を保持する必要があるということだ。

クライアントが最近まで存在していなかった場合、トランザクションに有効な過去があることを納得させる2つの方法は：
1) 元の生成されたコインまでの全履歴を見せる。
2) 十分に深いブロックまでの履歴を見せ、それまでの履歴が正しいと多くのノードが言ったなら正しいに違いないと信頼する。

しかし、ネットワークがすべての値とトランザクションの系譜を知らなければ、2）はできないと思う。
