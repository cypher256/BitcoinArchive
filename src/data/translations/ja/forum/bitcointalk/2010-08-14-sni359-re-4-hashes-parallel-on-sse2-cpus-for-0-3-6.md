---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-08-14T04:22:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9159#msg9159"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/359/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 6
translationStatus: pending
---

If you haven't already, try aligning thash.  It might matter.  Couldn't hurt.

[Quote from: tcatm on August 14, 2010, 12:53:07 AM](https://bitcointalk.org/index.php?topic=648.msg9147#msg9147)Looks like we're triggering a compiler bug in the tree optimizer. Can you try to compile it -O0?
No help from -O0, same error.

MinGW is GCC 3.4.5.  Probably the problem.

I'll see if I can get a newer version of MinGW.
