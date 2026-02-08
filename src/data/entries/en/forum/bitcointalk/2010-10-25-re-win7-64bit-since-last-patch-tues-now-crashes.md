---
title: "Re: Win7 64bit since last patch Tues now crashes"
date: 2010-10-25T17:27:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1540.msg18511#msg18511"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Win7 64bit since last patch Tues now crashes\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/499/"
---

The only thing I can think of is to see if there are other versions of mingwm10.dll you can get.  mingwm10.dll is a tiny little DLL that came with the MinGW compiler that you need when you build for multi-thread.  I don't know exactly what it does, but it probably just says something like "yes Windows, see I'm in a DLL like you insisted."

The end of your debug.log file might show the last thing it was doing before it crashed.
