---
title: "Re: Some testing that I did on the testnetwork, my findings."
date: 2010-11-08T23:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20778#msg20778"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 1668. before msg21896."
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: pending
---

> [Quote from: ByteCoin on November 08, 2010, 02:31:22 AM](https://bitcointalk.org/index.php?topic=1668.msg20570#msg20570)
> Prioritizing larger value transactions doesn't really solve the problem because it's perfectly possible to spam by sending large amounts of bitcoin from one of your addresses to another ad infinitum.

No, you can't, because every time you send them they become "new", and the priority is age multiplied by amount:
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

Ummm... the more you mess around with the coins in your wallet, the newer they are, and the lower their priority (relative to everybody else who might want to get their transactions into the next block).  I haven't thought deeply about it, but I bet simply leaving your coins as they are and making change as necessary will work out best.  But please, create your own client and try to break things on the test network!
