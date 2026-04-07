---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T22:05:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9556#msg9556"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 823. after msg9548."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "davidonpda"
    date: "2010-08-15T22:02:05.000Z"
---

Will the bug fix include the 4-way SSE2 patch of 0.3.9 rc2? Thanks for letting me know that it is included, theymos. Please release another release candidate when you have a moment if it is not included.

<!-- quote: q1 -->
> What about the transactions from 74000 to the invalid block. Are those all invalid now as well?

Only the blocks including and after the invalid block are invalid. All previous blocks are valid.
