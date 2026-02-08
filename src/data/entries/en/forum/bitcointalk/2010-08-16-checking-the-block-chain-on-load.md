---
title: "Checking the block chain on load"
date: 2010-08-16T20:07:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=841.msg9813#msg9813"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Checking the block chain on load\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/393/"
threadId: "bt-checking-the-block-chain-on-load"
threadTitle: "Checking the block chain on load"
threadPosition: 1
---

SVN rev 139 does a basic check of the block chain after loading.

With this we wouldn't have needed to delete blk*.dat, it would have automatically done a reorg back to the fork.  There wasn't time to do a careful implementation of this at the time.

It might take longer than we want, since it has to load all the blocks.  If it's too slow, we could have it only go back to a certain block number.
