---
title: "Re: overflow bug SERIOUS"
date: 2010-08-16T01:00:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9623#msg9623"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"overflow bug SERIOUS\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/379/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 8
---

[Quote from: Ground Loop on August 16, 2010, 12:29:55 AM](https://bitcointalk.org/index.php?topic=823.msg9609#msg9609)Question about fallout:  I had a **transaction** that I submitted after the bad block, using the bad block chain.

What is the status of that transaction?
From what I can tell, my (updated) sending client wallet shows the deducted amount.

Will it get reincorporated into the fixed chain, and will the recipient be able to spend it?
Right, it will get reincorporated into the fixed chain.  The transaction won't disappear, it'll still be visible on both sides, but the confirmation count will jump back to 0 and start counting up again.

It's only if you generated a block in the bad chain after block 74638 that the 50 BTC from that will disappear.  Any blocks in the bad chain wouldn't have matured yet.
