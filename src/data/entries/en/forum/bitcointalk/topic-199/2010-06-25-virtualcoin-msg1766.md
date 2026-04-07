---
title: "Re: 0.3 almost ready -- please test the Mac version!"
date: 2010-06-25T10:29:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1766#msg1766"
author: "virtualcoin"
participants:
  - name: "virtualcoin"
    slug: "virtualcoin"
description: "Context post by virtualcoin in BitcoinTalk topic 199. after msg1760, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-06-25T02:17:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-199/2010-06-25-re-0-3-almost-ready"
---

> The 64-bit version shouldn't be any faster than the 32-bit version, but it would be great if someone could do a side-by-side comparison of the two linux versions and check.  SHA-256 is a 32-bit algorithm and nothing in BitcoinMiner uses 64-bit at all.

But look here:

**32-bit Linux version on Ubuntu 10.04**

4 cores: 2500 khash/s
3 cores: 1900 khash/s
2 cores: 1260 khash/s
1 core: 630 khash/s

**64-bit Linux version on Ubuntu 10.04 (new measure)**

4 cores: 2880 khash/s
3 cores: 2150 khash/s
2 cores: 1450 khash/s
1 core: 720 khash/s

(Though I never created one coin, yet - but I don't let bitcoin run on 4 cores the whole day, not even on 1 core...)

@Joozero - The Intel i7 860 is @ 2.8 Ghz, isn't it? My Phenom II is @ 3 Ghz, that's another important fact I think. I will try bitcoin on Windows 7 at the same machine later.

/edit

**32-bit Win version on Windows 7 64-bit**

4 cores: 2310 khash/s
3 cores: 1740 khash/s
2 cores: 1160 khash/s
1 core: 580 khash/s
