---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-25T04:34:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg533#msg533"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
description: "BitcoinTalkトピック43におけるSuggesterの文脈投稿。msg510の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "NewLibertyStandard"
    personSlug: "newlibertystandard"
    date: "2010-02-21T18:52:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-21-newlibertystandard-msg425"
  - id: "q2"
    person: "Sabunir"
    personSlug: "sabunir"
    date: "2010-02-21T16:58:44.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-21-sabunir-msg424"
  - id: "q3"
    person: "NewLibertyStandard"
    personSlug: "newlibertystandard"
    date: "2010-02-21T18:52:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-21-newlibertystandard-msg425"
translationStatus: complete
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > そもそも、この難易度はどうやって調整するんだ？（分散型システムを管理する？）攻撃者が難易度を非常に低くしたり高くしたりしてシステムを妨害するのを、何が防ぐんだ？
>
> 俺の理解では、すべてのBitcoinクライアントが同じアルゴリズム（公式）を内蔵していて、一定ブロックごとに難易度を自動調整する。

それなら、ネットワーク全体に接続されているCPU数にどう依存するんだ？

<!-- quote: q3 -->
> それだけでなく、Bitcoinは異なる難易度で生成されたブロックを受け入れないと思う。だから、もし改造されたBitcoinクライアントがより簡単に生成したブロックを送り出そうとしても、すべての正規クライアントは偽ブロックを拒否するだろう。

それはサトシに確認してもらう必要がある。なぜなら、PoWの難易度が上がるたびに、クライアントはより簡単な難易度で生成されたブロックを常に受け入れているからだ。
