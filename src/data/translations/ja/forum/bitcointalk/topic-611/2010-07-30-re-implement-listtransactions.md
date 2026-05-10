---
title: "Re: [PATCH] 'xlisttransactions'の実装"
date: 2010-07-30T19:40:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6706#msg6706"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが listtransactions の実装を見送った理由を説明し、Web 開発者が getreceivedbyaddress を使うべきと主張。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/299/"
translationStatus: complete
---

listtransactions を何に使う必要があるのか？

listtransactions を実装しなかった理由は、Web 開発者に使わせたくないからだ。受信した支払いの監視にそれを利用するのは非常に簡単だろう。しかし、その方法で何も取りこぼさないようにする信頼できる方法はない。getreceivedbyaddress と getreceivedbylabel を使った確実なサンプルコードを用意して「これを使って！ これを使って！ listtransactions は使わないで！」と言えるようになるまで、listtransactions を実装すべきではないと思う。

listtransactions を実装する時には、対策の一つとしてすべてテキストにする方法があるかもしれない。フィールドをコメント、確認数、クレジット、デビットなどに分解すべきではない。「0/unconfirmed   0:0:0 date   comment      debit 4  credit 0」のような整形済みの 1 つの文字列にして、プログラマーが間違った使い方をしにくくすることができるだろう。これはサーバーの状態を確認するためだけのものだ。ただ、HTML の列にフォーマットしたい Web インターフェースにとっては少し面倒かもしれないが。
