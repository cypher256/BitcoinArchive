---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-24T22:43:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg11068#msg11068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/411/"
quotes:
  - id: "q1"
    person: "ArtForz"
    personSlug: "artforz"
    date: "2010-08-21T07:56:31.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-21-artforz-msg10609"
---

<!-- quote: q1 -->
> - AMD K10: 2 128bit units

- intel nehalem: 3 128bit units
This probably explains why hyperthreading increases performance with -4way.  If three SSE2 units is excessive, then hyperthreading would help keep them all busy.
