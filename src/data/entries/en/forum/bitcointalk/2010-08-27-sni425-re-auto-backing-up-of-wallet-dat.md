---
title: "Re: auto backing up of wallet.dat"
date: 2010-08-27T15:47:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11399#msg11399"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"auto backing up of wallet.dat\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/425/"
threadId: "bt-auto-backing-up-of-wallet-dat"
threadTitle: "auto backing up of wallet.dat"
threadPosition: 4
---

Sorry, I've been so busy lately I've been skimming messages and I still can't keep up.

We want to avoid Windows API calls whenever possible.  They usually take about 6-8 parameters and a lot of testing to get right, it takes a page of code to do something simple.

I usually shy away from iostreams.  Seems like I too often hit limitations.  They kind of botched the C++ streams standard in the 90's, which is too bad, streams can be very powerful and useful when done right.  Using it in rpc.cpp may still turn out to be a mistake.

Bottom line is I'd rather call an existing file copy function than make and test my own.
