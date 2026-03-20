---
title: "4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-07-30T12:23:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6722#msg6722"
author: "tcatm"
participants:
  - name: "tcatm"
    slug: "tcatm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "tcatm starts a discussion: 4 hashes parallel on SSE2 CPUs for 0.3.6."
isSatoshi: false
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadPosition: 1
tags: []
---

This patch will calculate four hashes on one core using vector instructions. There's a test programm included that validates the new hash function against the old one so it should be correct.

The patch is against 0.3.6. Improves khash/s by roughly 115%.

[http://pastebin.com/XN1JDb53](http://pastebin.com/XN1JDb53)
