---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T21:15:18.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9535#msg9535"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 823. after msg9531."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-08-15T21:10:33.000Z"
---

<!-- quote: q1 -->
> Looks good to me.
>
> Can you easily hardcode a check for the bad block's hash at startup and orphan it and subsequent blocks if they're on the best-block chain?
> It's painful to have to re-download all or most of the chain to fix this...

Or just a quick re-verification of all blocks. After all, it is 5x faster than it used t be. Wink
