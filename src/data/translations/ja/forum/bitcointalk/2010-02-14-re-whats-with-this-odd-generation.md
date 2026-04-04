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
threadId: "bt-what-s-with-this-odd-generation"
translationStatus: complete
---

[Quote from: theymos on February 12, 2010, 08:31:52 AM](#msg318)
> [Quote from: satoshi on February 12, 2010, 03:08:08 AM](#msg316)
> > 非常に大きなトランザクションには少額の手数料がかかる。そのトランザクションを含むブロックを生成したノードが手数料を受け取る。
> >
> > 同じお金を再度送信した場合、再び手数料は発生しない。ウォレットに生成されたコインしかない場合、それらすべてを1つの巨大なトランザクションで送信すると、何百もの50 BCのコインを束ねる必要がある。その後は、結合された単位を送信する1行だけだ。
>
> 送信クライアントは手数料を考慮して余分なBitCoinを送るのか（受取人が期待通りの額を受け取れるように）？ 手数料を回避するために1000回の少額トランザクションを送ることはできないのか？
はい。

[Quote from: SmokeTooMuch on February 12, 2010, 01:11:09 PM](#msg319)
> なぜ手数料が必要なんだ？ 手数料不要がbitcoinの利点の一つだと思っていたが！？
ほぼすべてのトランザクションは無料だ。受け取った最大の支払い500個以上を合算して金額を作る必要がある場合に、トランザクションが最大サイズ制限を超える。サイズ制限を超えたトランザクションでも、少額の手数料を追加すれば送信できる。

平均的なトランザクション、および平均の500倍までの大きさのトランザクションは無料だ。

トランザクション手数料が発生するのは、本当に巨額のトランザクションを送信する場合だけであり、その場合でも金額の0.002%程度にしかならない。システムからお金が吸い取られるのではなく、他のノードに渡るだけだ。手数料を払うのが残念なら、いつでも立場を逆転させて自分でノードを運用し、いつか0.44の手数料を自分で稼ぐこともできる。
