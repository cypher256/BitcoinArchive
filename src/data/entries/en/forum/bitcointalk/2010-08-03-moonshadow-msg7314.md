---
title: "Re: (context post by MoonShadow)"
date: 2010-08-03T20:01:22.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7314#msg7314"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 661. before msg7356."
isSatoshi: false
tags: []
---

[Quote from: throughput on August 03, 2010, 01:33:08 PM](/BitcoinArchive/entries/forum/bitcointalk/2010-08-03-throughput-msg7230/)
> Yes...
> But what you describe is only possible after someone have noticed and prooved the network split is happening.
> Do you propose any method to detect the beginning of the network split?

I started another thread along this line elsewhere, but for an individual vendor, a simple watchdog daemon that tracks the average time between blocks since the last official change in difficulty and alerts the vendor if a single block takes more than twice as long as the average, perhaps suspending the acceptance of new coins until the vendor checks to see what is happening.  Each block in a row that takes longer than the average increases confidence against a false positive.  So if one block takes twice as long as average, followed by a series of blocks that take 75% longer than average, then you can be fairly certain that you are no longer on the majority network.
