---
title: "Re: Tracing a coin's lineage"
date: 2010-05-26T18:51:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=154.msg1254#msg1254"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Tracing a coin's lineage\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/108/"
quotes:
  - id: "q1"
    person: "Xunie"
    personSlug: "xunie"
    date: "2010-05-25T15:50:04.000Z"
    sourceEntryId: "forum/bitcointalk/topic-154/2010-05-26-xunie-msg1242"
---

<!-- quote: q1 -->
> Can't we force a user to use a new address for receiving payments?

Every time a payment is received display another Bitcoin address in the address bar. (only transactions via Bitcoin addresses, NOT IPs of course, since that'd be useless, right?)
The actual key would still be kept to ensure that the user would still receive payments of people sending to the same address.
This is on my list.  I will soon make the "Your Bitcoin Address:" window automatically change whenever you receive anything to the address displayed.

I'm also recommending this approach for the implementation of web apps.  I just posted some sample code showing a suggested way of implementing this.

Versions on SVN since 0.2.4 already have a "New..." button next to the address bar to encourage changing it manually too.

@theymos: If nothing else, we can fall back on that solution in the future.
