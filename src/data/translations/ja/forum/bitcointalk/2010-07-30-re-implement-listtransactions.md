---
title: "Re: [パッチ] 'listtransactions'の実装"
date: 2010-07-30T19:40:54.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6706#msg6706"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがlisttransactionsの実装を見送った理由を説明し、Web開発者がgetreceivedbyaddressを使うべきと主張。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/299/"
translationStatus: complete
---

listtransactionsを何に使う必要があるのですか？

listtransactionsを実装しなかった理由は、Web開発者に使わせたくないからです。受信した支払いの監視にそれを利用するのは非常に簡単でしょう。しかし、その方法で何も取りこぼさないようにする信頼できる方法はありません。getreceivedbyaddressとgetreceivedbylabelを使った確実なサンプルコードを用意して「これを使って！ これを使って！ listtransactionsは使わないで！」と言えるようになるまで、listtransactionsを実装すべきではないと思います。

listtransactionsを実装する時には、対策の一つとしてすべてテキストにする方法があるかもしれません。フィールドをコメント、確認数、クレジット、デビットなどに分解すべきではありません。「0/unconfirmed   0:0:0 date   comment      debit 4  credit 0」のような整形済みの1つの文字列にして、プログラマーが間違った使い方をしにくくすることができるでしょう。これはサーバーの状態を確認するためだけのものです。ただ、HTMLの列にフォーマットしたいWebインターフェースにとっては少し面倒かもしれませんが。
