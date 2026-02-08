---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T21:40:19.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9548#msg9548"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"overflow bug SERIOUS\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/371/"
---

Patch is uploaded to SVN rev 132! 

For now, recommended steps:
1) Shut down.
2) Download knightmb's blk files.  (replace your blk0001.dat and blkindex.dat files)
3) Upgrade.
4) It should start out with less than 74000 blocks. Let it redownload the rest.

If you don't want to use knightmb's files, you could just delete your blk*.dat files, but it's going to be a lot of load on the network if everyone is downloading the whole block index at once.

I'll build releases shortly.
