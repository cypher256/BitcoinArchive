---
title: "Re: overflow bug SERIOUS"
date: 2010-08-16T05:07:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9682#msg9682"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "Context post by Ground Loop in BitcoinTalk topic 823. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-08-16T01:00:45.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-re-overflow-bug-serious"
  - id: "q2"
    person: "Ground Loop"
    date: "2010-08-16T00:29:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-ground-loop-msg9609"
---

> 
> > Question about fallout:  I had a transaction that I submitted after the bad block, using the bad block chain.
> > 
> > What is the status of that transaction?
> > From what I can tell, my (updated) sending client wallet shows the deducted amount.
> > 
> > Will it get reincorporated into the fixed chain, and will the recipient be able to spend it?
> 
> Right, it will get reincorporated into the fixed chain.  The transaction won't disappear, it'll still be visible on both sides, but the confirmation count will jump back to 0 and start counting up again.
> 
> It's only if you generated a block in the bad chain after block 74638 that the 50 BTC from that will disappear.  Any blocks in the bad chain wouldn't have matured yet.

Interesting.. fascinating to watch this work its way through the bowels of the system.
It was block 73746 that I generated.
    CTxOut(nValue=50.00000000, scriptPubKey=0x8DDD5C7DADB2D43AC5F186)
08/12/10 02:35 generated 50.00

And I sent 49.00 of it to 19Nzg21hQQDAY5GTdTTuUVPA4MaE7AusXz (using the broken chain)

Now I'm waiting for that node to figure out it was received, and it's using the new chain.
