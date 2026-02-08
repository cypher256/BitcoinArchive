---
title: "Re: RFC: ship block chain 1-74000 with release tarballs?"
date: 2010-11-25T17:51:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24438#msg24438"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"RFC: ship block chain 1-74000 with release tarballs?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/511/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 1
---

It's not the downloading that takes the time, it's verifying and indexing it.

Bandwidthwise, it's more efficient than if you downloaded an archive.  Bitcoin only downloads the data in blk0001.dat, which is currently 55MB, and builds blkindex.dat itself, which is 47MB.  Building blkindex.dat is what causes all the disk activity.

During the block download, it only flushes the database to disk every 500 blocks.  You may see the block count pause at ??499 and ??999.  That's when it's flushing.

Doing your own verifying and indexing is the only way to be sure your index data is secure.  If you copy blk0001.dat and blkindex.dat from an untrusted source, there's no way to know if you can trust all the contents in them.

Maybe Berkeley DB has some tweaks we can make to enable or increase cache memory.
