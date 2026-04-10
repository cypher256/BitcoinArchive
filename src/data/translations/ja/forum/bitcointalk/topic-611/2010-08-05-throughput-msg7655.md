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
description: "BitcoinTalkトピック611におけるthroughputの文脈投稿。サトシを引用."
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
> listtransactions は何のために使う必要があるんだ？
>
> listtransactions を実装しなかった理由は、Webプログラマに使ってほしくないからだ。受信した支払いを監視するために、簡単にこれに飛びついてしまうだろう。だがその方法では、取りこぼしがないことを確実に保証する信頼できるやり方は存在しない。getreceivedbyaddress と getreceivedbylabel を使った確かなサンプルコードがあって「これを使え！ これを使え！ listtransactions は使うな！」と示せるようになるまでは、listtransactions を実装すべきではないと思う。

どうやら君は明らかにCLIよりGUIを好んでいるようだ。
だがGUIは本当にひどいインターフェイスだ。例えばSSHアクセスできる5つのノードがあって、こんなふうにループで状態を定期的に収集したい場合などに：
Code:#!/bin/bash
while read host;
do
   ssh "$host" "hostname; bitcoind listtransactions"
   echo =============
done > report.txt < hostlist
そして report.txt を人間にメールで送る、といった使い方だ。
これが君にとって正当なユースケースであることを願う。
