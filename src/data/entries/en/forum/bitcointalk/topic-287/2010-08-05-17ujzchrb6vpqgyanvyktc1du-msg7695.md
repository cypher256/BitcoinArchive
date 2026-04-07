---
title: "Re: Flood attack 0.00000001 BC"
date: 2010-08-05T16:37:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7695#msg7695"
author: "17ujzChRb6VPQGyANVyktc1du"
participants:
  - name: "17ujzChRb6VPQGyANVyktc1du"
    slug: "17ujzchrb6vpqgyanvyktc1du"
description: "Context post by 17ujzChRb6VPQGyANVyktc1du in BitcoinTalk topic 287. after msg7687."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "lfm"
    date: "2010-08-05T14:52:32.000Z"
---

> Sending 1 BTC back and forth a million times creates a single transaction chain, sending a million transactions of 0.000001 BTC makes a million nearly independant transactions which all must be remembered. Due to the way bitcoin can drop old deeply confirmed transactions the first is far less overhead than the second in the long run. There may be similar network cost but the disk space cost can be greatly reduced for the single chain. 
> 
> Only if the "dust" is combined back together and confirmed deeply enough again only then can the dust space be dropped.

Improved attack would be : start with 1BTC then transfer 0.999999999BTC, then 0.999999998BTC, ... 
It results 1 million accounts (minus 10000) with 0.000000001BTC each.
