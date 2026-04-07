---
title: "Re: Odd amount of generated coins"
date: 2010-05-20T21:03:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=141.msg1168#msg1168"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 141. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-02-14T06:28:03.000Z"
    sourceEntryId: "forum/bitcointalk/topic-48/2010-02-14-re-whats-with-this-odd-generation"
---

Internally, bitcoins are bundled into packs of 50.00 or however many get sent over the network. Bitcoins usually have to be re-bundled each time they get sent. If a certain very large number of bitcoin bundles have to be re-bundled, there is a very small fee which the sender has to pay. The fee goes to the bitcoin client (yours in this case) which verifies the large re-bundling. It's not a well known behavior and I hope that future versions will display a warning or confirmation before such a fee is charged.

There is a post somewhere with more specific details. I'll look for it for a few minutes and I'll edit this post if I happen to find it. As always, the source code, which is open source, will reveal the exact behavior. I haven't examined the code and my description of the behavior is based on my poor memory, so it might not be exactly correct.

Edit: Here's the explanation I mentioned. It seems that if more than 500 bundles of bitcoins are re-bundled, there's roughly a 0.002% fee. So during that ten minute period, one or more people each re-bundled 500 bundles of bitcoins, totaling roughly 132,000 bitcoins.

Since the sender pays the fee, I'd like to know what happens when a person sends all their bitcoins. I would expect that if there weren't enough bitcoins to cover the fee, then the amount of the fee which can not be paid would be subtracted from the payment. If this is not the case, then the fee could be avoided by sending all your coins to yourself before sending a large payment.

> A transaction over the size limit can still be sent if a small fee is added.

This makes it sound like a payment wouldn't send successfully if there were insufficient funds for the fee.
