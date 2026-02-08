---
title: "Re: resource hog"
date: 2010-07-14T16:29:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=327.msg2871#msg2871"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"resource hog\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/179/"
threadId: "bt-resource-hog"
threadTitle: "resource hog"
threadPosition: 1
---

In Windows, you select the process in the task manager, right click, Set Priority.  Set it to BelowNormal or Low.  That shouldn't make a difference though.

If you turn off Generate Coins, does the CPU usage go flat?  That would confirm that all the CPU time it's taking is generate, which is idle priority already.

It could be it's slow just because you have too many things running at once and you're out of memory.  When you switch from one thing to another, it has to page it in from disk.
