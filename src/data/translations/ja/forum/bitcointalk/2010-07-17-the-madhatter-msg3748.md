---
title: "Re: (context post by The Madhatter)"
date: 2010-07-17T14:10:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=432.msg3748#msg3748"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 432. before msg3769."
isSatoshi: false
tags: []
translationStatus: pending
---

Check this out...

I just installed 0.3.1 on two different machines and moved one bitpenny (0.01):

**-= Before the transfer =-**

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

**-= AFTER the transfer =-**

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

I personally think it is a display problem, but I can't be sure.. strange, no?

Both machines are running FreeBSD 7.2/amd64.
