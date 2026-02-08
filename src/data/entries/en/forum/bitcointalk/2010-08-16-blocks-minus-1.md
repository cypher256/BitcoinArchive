---
title: "blocks minus 1"
date: 2010-08-16T15:59:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=837.msg9757#msg9757"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"blocks minus 1\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/390/"
threadId: "bt-blocks-minus-1"
threadTitle: "blocks minus 1"
threadPosition: 1
---

I'd like to reduce the number of blocks displayed in the status bar by 1.   When you first load the program, it'll display 0 blocks instead of 1:
"0 connections    0 blocks     0 transactions"

It's always been "nBestHeight + 1" because it's counting the genesis block.  Technically, yes, the genesis block is a block.  It's a hardcoded block that you start out with.  You can't *not* have the genesis block.  Maybe think of it as a reference coin that you measure other coins against.  The block count people are looking for is the number of blocks they've downloaded.

The main benefit is that blocks will be equal to the block number of the current best block.  If blocks is 10, then the highest block number you have is 10.  It means you have block 10 and you don't have block 11.

It would reduce the confusion we had here:

[Quote from: kencausey on August 15, 2010, 11:45:26 PM](https://bitcointalk.org/index.php?topic=823.msg9588#msg9588)[Quote from: davidonpda on August 15, 2010, 11:31:37 PM](https://bitcointalk.org/index.php?topic=823.msg9580#msg9580)... It already is on block 74638. I assume that means that block is now a good one?

I had some confusion on this myself and got clarification in #bitcoin-dev:

The bad block was number 74638, the last good one was 74637.  The numbers start at 0, so when your client shows there are 74638 blocks then that means you have up to block number 74637, the last good one.
