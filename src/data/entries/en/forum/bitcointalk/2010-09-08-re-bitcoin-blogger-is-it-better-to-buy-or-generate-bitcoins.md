---
title: "Re: Bitcoin Blogger: Is It Better To Buy Or Generate Bitcoins?"
date: 2010-09-08T20:27:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=955.msg12248#msg12248"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin Blogger: Is It Better To Buy Or Generate Bitcoins?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/443/"
---

[Quote from: BitLex on September 07, 2010, 08:10:54 PM](/BitcoinArchive/entries/forum/bitcointalk/2010-09-07-bitlex-msg12189/)
> AMD X3 @2.8ghz

->stock client
~3800khs ~150Watt
Did you try -4way?

QuoteHow many hashes can I expect with a 24 core machine? I have a quad-core generating 4,300 hashes-per-second, so I am estimating a 24-core machine could mine bitcoins at 25,000 hashes-per-second.
AMD Phenom (I think 4-core) CPUs are doing about 11,000khps with -4way, about 100% speedup.  24 cores should get 66,000khps.  AMD is the best choice because it has the best SSE2 implementation. (or maybe because tcatm had an AMD and optimised his code for that)

There's been so much else to do that I haven't had time to make -4way automatic.  For now you still have to do it manually.
[[tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10](/BitcoinArchive/entries/forum/bitcointalk/2010-08-16-ground-loop-msg9674/)]([tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10](/BitcoinArchive/entries/forum/bitcointalk/2010-08-16-ground-loop-msg9674/))
