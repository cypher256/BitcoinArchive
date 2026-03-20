---
title: "A proposal for a semi-automated Escrow mechanism"
date: 2010-07-30T10:29:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=645.msg6704#msg6704"
author: "Olipro"
participants:
  - name: "Olipro"
    slug: "olipro"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Olipro starts a discussion: A proposal for a semi-automated Escrow mechanism."
isSatoshi: false
threadId: "bt-a-proposal-for-a-semi-automated-escrow-mechanism"
threadPosition: 1
tags: []
---

So, the basic escrow works by two people working through a third party to exchange (usually money) for some other form of goods or services.

In a transaction where both people are honest, the escrow business can essentially be automatic since the buyer gets his goods and approves release of funds, only when there is a dispute does human interaction become necessary. Therefore, I propose the following system:

1) you create an escrow transaction for the amount, authorised by your key and containing the recipient's key/data etc - this block cannot be claimed until a subsequent block is issued by the buyer to approve it, it's also impossible for the buyer to reclaim it without the seller approving it to be returned.

2) it enters the network, gets verified and the seller sends the goods, once the buyer gets them, he creates a release transaction and the seller gets his bitcoins.

3) if a dispute occurs and both parties are refusing to release the money one way or the other, clearly it's now necessary to get a third party to arbitrate - in this situation, a signature from both the buyer and seller authorising a third party is required which will give that third party ownership of the original escrow transaction and they can then arbitrate the matter
