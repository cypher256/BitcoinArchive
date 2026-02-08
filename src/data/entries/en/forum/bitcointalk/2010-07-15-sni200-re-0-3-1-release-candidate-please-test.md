---
title: "Re: 0.3.1 release candidate, please test"
date: 2010-07-15T21:40:34.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3295#msg3295"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3.1 release candidate, please test\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/200/"
---

[Quote from: knightmb on July 15, 2010, 07:37:10 PM](https://bitcointalk.org/index.php?topic=383.msg3269#msg3269)On Windows, the priority of the Coin Generation is still net for normal. If you run BitCoin in Generate Coin mode, then load up something to eat up all the CPU (like CPU hog for example: [http://www.microtask.ca/cpuhog.html](http://www.microtask.ca/cpuhog.html)) you'll see that both BitCoin and CPU hog share the CPU 50/50 instead of CPU Hog taking all the CPU and BitCoin running only on idle/low process. The khash/s is also reduced in half, so further evidence that the threads are not running in a lower than normal prioirty.
I was not able to reproduce this.  I have dual-proc, so I ran two memory hogs.  Bitcoin got 0% of CPU according to the task manager.  The khash/sec meter stayed stuck because it couldn't get any CPU to update it.

Do you have dual-proc?  Are you sure you weren't running a single processor hog?
