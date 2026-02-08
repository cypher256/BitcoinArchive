---
title: "Re: TOR and I2P"
date: 2010-01-20T22:05:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg113#msg113"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"TOR and I2P\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/31/"
threadId: "bt-tor-and-i2p"
threadTitle: "TOR and I2P"
threadPosition: 1
---

I've been thinking about that for a while.  I want to add the backend support for .onion addresses and connecting to them, then go from there.

There aren't many .onion addresses in use for anything because the user has to go through a number of steps to create one.  Configure TOR to generate a .onion address, restart TOR, configure it with the generated address.  Perhaps this is intentional to keep TOR so it can't be integrated into file sharing programs in any sufficiently automated way.
