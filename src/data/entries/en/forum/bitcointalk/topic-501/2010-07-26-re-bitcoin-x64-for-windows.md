---
title: "Re: Bitcoin x64 for Windows"
date: 2010-07-26T18:41:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=501.msg5920#msg5920"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin x64 for Windows\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/279/"
quotes:
  - id: "q1"
    person: "Olipro"
    personSlug: "olipro"
    date: "2010-07-25T21:39:17.000Z"
    sourceEntryId: "forum/bitcointalk/topic-501/2010-07-26-olipro-msg5815"
---

<!-- quote: q1 -->
> Credit to tcatm for the caching part of the SHA context - this offers absolutely brilliant performance. Additionally, the Intel compiler really comes into its own here as its parallelisation abilities give a massive performance boost over Visual Studio.

Performance: 4700khash/s on 4 cores, I think that speaks for itself.

I've included both the VS and Intel build, but there's really no comparison, the Intel build craps all over VS.
Is that still starting from Crypto++?  Lets get this into the main sourcecode.
