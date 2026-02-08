---
title: "Re: I broke my wallet, sends never confirm now."
date: 2010-10-06T16:54:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1306.msg15672#msg15672"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"I broke my wallet, sends never confirm now.\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/487/"
threadId: "bt-i-broke-my-wallet-sends-never-confirm-now"
threadTitle: "I broke my wallet, sends never confirm now."
threadPosition: 3
---

That's going to be more of a SelectCoins thing.

SVN rev 161 has a refinement to recursively determine if your own unconfirmed transactions can be spent.  This is needed because you should be able to spend your own change right away.

The new recursive determination is: 0/unconfirmed can be spent if it's yours and all its dependencies are either in a block or also yours.

Here's a Windows build:
[http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe)

This version is an improvement if you already had a 0/unconfirmed transaction and might have already spent it.  If you were the original creator of a 0/unconfirmed transaction, you still need theymos' patch instead.
