---
title: "Re: この奇妙な生成は何ですか？"
date: 2010-02-14T06:28:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=48.msg327#msg327"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「この奇妙な生成は何ですか？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/56/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-02-11T23:31:52.000Z"
  - id: "q2"
    person: "SmokeTooMuch"
    personSlug: "smoketoomuch"
    date: "2010-02-12T04:11:09.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 送信側クライアントは手数料を考慮して余分にBitCoinを送信するのか（受取人が期待通りの額を受け取れるように）？
<!-- /tone-skip -->
はい。

<!-- quote: q2 -->
<!-- tone-skip -->
> なぜ手数料が必要なんだ？ 手数料不要がbitcoinの利点の一つだと思っていたが！？
<!-- /tone-skip -->
ほぼすべてのトランザクションは無料だ。受け取った最大の支払い500個以上を合算して金額を作る必要がある場合に、トランザクションが最大サイズ制限を超える。サイズ制限を超えたトランザクションでも、少額の手数料を追加すれば送信できる。

平均的なトランザクション、および平均の500倍までの大きさのトランザクションは無料だ。

トランザクション手数料が発生するのは、本当に巨額のトランザクションを送信する場合だけであり、その場合でも金額の0.002%程度にしかならない。システムからお金が吸い取られるのではなく、他のノードに渡るだけだ。手数料を払うのが残念なら、いつでも立場を逆転させて自分でノードを運用し、いつか0.44の手数料を自分で稼ぐこともできる。
