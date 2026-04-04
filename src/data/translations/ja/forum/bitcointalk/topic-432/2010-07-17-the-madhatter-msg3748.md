---
title: "BUG Report: Rounding glitch"
date: 2010-07-17T14:10:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=432.msg3748#msg3748"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック432におけるThe Madhatterの文脈投稿。msg3769の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

これを見てくれ……

0.3.1を2台の別々のマシンにインストールして、1 bitpenny（0.01）を移動した：

**-= 送金前 =-**

[bitcoind@box1 ~]$ ~/bin/bitcoind getinfo
{
    "balance" : 1.150000000000,
    "blocks" : 68717,
    "connections" : 6,
    "proxy" : "",
    "generate" : false,
    "genproclimit" : -1,
    "difficulty" : 181.5432893640505
}

[bitcoind@box2 ~]$ ~/bin/bitcoind getinfo
{
    "balance" : 0.000000000000,
    "blocks" : 68717,
    "connections" : 22,
    "proxy" : "",
    "generate" : false,
    "genproclimit" : -1,
    "difficulty" : 181.5432893640505
}

**-= 送金後 =-**

[bitcoind@box1 ~]$ ~/bin/bitcoind getinfo
{
    "balance" : **1.139999999999**,
    "blocks" : 68717,
    "connections" : 10,
    "proxy" : "",
    "generate" : false,
    "genproclimit" : -1,
    "difficulty" : 181.5432893640505
}

[bitcoind@box2 ~]$ ~/bin/bitcoind getinfo
{
    "balance" : **0.010000000000**,
    "blocks" : 68717,
    "connections" : 20,
    "proxy" : "",
    "generate" : false,
    "genproclimit" : -1,
    "difficulty" : 181.5432893640505
}

個人的には表示の問題だと思うが、確信は持てない……変だろう？

両マシンともFreeBSD 7.2/amd64で動かしている。
