---
title: "Bitcoin x86 for Windows"
date: 2010-07-25T23:17:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5823#msg5823"
author: "Olipro"
participants:
  - name: "Olipro"
    slug: "olipro"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Olipro starts a discussion: Bitcoin x86 for Windows."
isSatoshi: false
tags: []
---

Figured I'd make a new topic since anyone on x86 Windows probably won't even bother to read the x64 thread, however, since you're here, I suggest you read page 5 of that thread after reading this.

OK, so essentially I've compiled 2 builds of Bitcoin with the new SHA caching optimisation, one build has full optimisation for the SSE instruction sets and will require a modern CPU, and the other is compiled without any SSE optimisation at all and should therefore run on pretty much any CPU capable of running XP or higher. The SSE version is a bit faster than the non-SSE version and both are inferior to the x64 builds, if you have a 64-bit OS, don't bother with these.

**Beware however that the libeay32.dll that I included may have SSE and therefore, if you can't get either to run on your machine, replace that DLL with the one bundled with the stock Bitcoin**

[You can grab the builds here](http://www.4shared.com/file/kIewrXzp/Bitcoin_x86.html)
