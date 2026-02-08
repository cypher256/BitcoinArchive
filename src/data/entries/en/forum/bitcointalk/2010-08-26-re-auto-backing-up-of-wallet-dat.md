---
title: "Re: auto backing up of wallet.dat"
date: 2010-08-26T00:57:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11228#msg11228"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"auto backing up of wallet.dat\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/421/"
---

I started posting in the other topic but I'll repeat here, this thread seems more specific to the topic.

The main backup improvement will be a pre-generated pool of keys and a rescan at load to scrape missed transactions from the block history.  Then a backup will last forward for a long time.

I was starting to post the same idea you said nelisky.

How about a json-rpc command that locks the wallet, flushes it, copies wallet.dat to a location you specified, then unlocks it?  That would be a smaller project than the pooled keys, so maybe it could be done first.

What's the simplest portable way to copy a file?  Is there something in Boost?

What should it be named?  maybe:
backupwallet <destination>
