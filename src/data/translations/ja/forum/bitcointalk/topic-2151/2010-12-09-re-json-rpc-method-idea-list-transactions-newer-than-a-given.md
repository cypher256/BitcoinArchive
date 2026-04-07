---
title: "Re: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-09T00:12:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28313#msg28313"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/527/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-08T13:36:45.000Z"
  - id: "q2"
    person: "jgarzik"
    personSlug: "jgarzik"
    date: "2010-12-08T14:07:22.000Z"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-08T13:36:45.000Z"
---

所定のminconfレベルでの通常のリスクの話をしているのではなく、この方法で使用した場合のlisttransactionsの追加的な落とし穴について話している。

<!-- quote: q1 -->
<!-- tone-skip -->
> では、引用したメッセージで私が挙げた問題にどう対処しますか？
<!-- /tone-skip -->

OPのlisttransactions <account> [count=10] [txid]の例は、プログラマーが前回のlisttransactions呼び出しの最後のtxidを渡せば同じトランザクションを二度と見ることはないと非常に簡単に仮定してしまうことを暗示しており、それは事実ではない。既に受け入れたtxidを追跡するための独自の永続マップや辞書を維持しなければ、支払いを二重カウントするのは非常に容易だ。

ある明らかな方法で使うために特注されたように見える関数があり、その方法が目立たない罠であるというのは正しくないように思う。

<!-- quote: q2 -->
<!-- tone-skip -->
> <!-- quote: q3 -->
> <!-- tone-skip -->
> > 3) トランザクションは、異なるtxidを持つ二重支払いで置き換えられる可能性がある。両方の支払いをカウントしてしまう。
> <!-- /tone-skip -->
<!-- /tone-skip -->

両方の支払いが同じアドレス宛てだとする。getreceivedbyaddressは常にどの時点でも一方か他方の支払いだけをカウントし、両方をカウントすることは決してない。

listtransactionsを使うと、両方をカウントするのは非常に容易だ。最初の支払いを見て、カウントする。2番目の支払いを見て、カウントする。合計は二重カウントだ。
