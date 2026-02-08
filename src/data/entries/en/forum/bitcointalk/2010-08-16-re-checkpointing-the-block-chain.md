---
title: "Re: checkpointing the block chain"
date: 2010-08-16T20:20:53.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9816#msg9816"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"checkpointing the block chain\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/394/"
threadId: "bt-checkpointing-the-block-chain"
threadTitle: "checkpointing the block chain"
threadPosition: 1
---

There is no way for the software to automatically know if one chain is better than another except by the greatest proof-of-work.  In the design it was necessary for it to switch to a longer chain no matter how far back it has to go.

The only exception to that is the manual checkpoints I've added.  If it weren't for those, it would be able to reorg all the way back to the first block.
