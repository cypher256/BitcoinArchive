---
title: "Re: [PATCH] 'xlisttransactions'の実装"
date: 2010-08-05T09:12:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg7655#msg7655"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "BitcoinTalk トピック 611 における throughput の文脈投稿。サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-30T19:40:54.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-re-implement-listtransactions"
translationStatus: complete
---

<!-- quote: q1 -->
> listtransactions を何に使う必要があるのか？
>
> listtransactions を実装しなかった理由は、Web 開発者に使わせたくないからだ。受信した支払いの監視にそれを利用するのは非常に簡単だろう。しかし、その方法で何も取りこぼさないようにする信頼できる方法はない。getreceivedbyaddress と getreceivedbylabel を使った確実なサンプルコードを用意して「これを使って！これを使って！ listtransactions は使わないで！」と言えるようになるまで、listtransactions を実装すべきではないと思う。

どうやら君は明らかに CLI より GUI を好んでいるようだ。
だが GUI は本当にひどいインターフェースだ。例えば SSH アクセスできる 5 つのノードがあって、こんなふうにループで状態を定期的に収集したい場合などに：

```bash
#!/bin/bash
while read host;
do
   ssh "$host" "hostname; bitcoind listtransactions"
   echo =============
done > report.txt < hostlist
そして report.txt を人間にメールで送る、といった使い方だ。
これが君にとって正当なユースケースであることを願う。
```
