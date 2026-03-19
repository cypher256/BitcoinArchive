---
title: "I broke my wallet, sends never confirm now."
date: 2010-09-29T02:05:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1306.msg14506#msg14506"
author: "kermit"
participants:
  - name: "kermit"
    slug: "kermit"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "kermit starts a discussion: I broke my wallet, sends never confirm now.."
isSatoshi: false
threadId: "bt-i-broke-my-wallet-sends-never-confirm-now"
threadPosition: 1
tags: []
---

Nothing I send gets confirmed now.  

Here's how I did it:

I was sending out payments under .01 in size and not paying a transaction fee, which of course were never confirmed.

Here's a guess as to why it broke my wallet:

Because the change leftover was also then never confirmed, yet my client treats it as if it was so includes those amounts in the amounts it sends out.

I've only lost 100btc, so I'm not real worried, but if you know how to fix it without too much trouble, that'd be nice.
