---
title: "Re: Warning : Check your system ( Help me )"
date: 2010-09-05T23:36:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=960.msg12063#msg12063"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Warning : Check your system ( Help me )\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/434/"
threadId: "bt-warning-check-your-system-help-me"
threadTitle: "Warning : Check your system ( Help me )"
threadPosition: 1
---

Any suggestions for better text to put for this error message so the next person will be less likely to be confused?

It's trying to tell them their clock is wrong and they need to correct it.

It's relying on 3 time sources:
1) the system clock
2) the other nodes, if within an hour of the system clock
if those disagree, then
3) the user (asking the user to fix the system clock)

I've thought about NTP, but this is more secure.
