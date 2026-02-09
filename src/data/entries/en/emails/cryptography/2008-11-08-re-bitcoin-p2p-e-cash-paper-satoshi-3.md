---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-08T18:54:38Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014831.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
description: "Satoshi responds to Ray Dillinger's claim that Bitcoin would be inflationary at 35%, explaining how difficulty adjustment keeps production constant and how transaction fees provide an alternative incentive."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 10
isSatoshi: true
tags:
  - "difficulty-adjustment"
  - "inflation"
  - "transaction-fees"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/5/"
---

Ray Dillinger:
> the "currency" is inflationary at about 35%
> as that's how much faster computers get annually
> ... the inflation rate of 35% is almost guaranteed
> by the technology

Increasing hardware speed is handled: "To compensate for increasing hardware speed and varying interest in running nodes over time, the proof-of-work difficulty is determined by a moving average targeting an average number of blocks per hour. If they're generated too fast, the difficulty increases."

As computers get faster and the total computing power applied to creating bitcoins increases, the difficulty increases proportionally to keep the total new production constant.  Thus, it is known in advance how many new bitcoins will be created every year in the future.

The fact that new coins are produced means the money supply increases by a planned amount, but this does not necessarily result in inflation.  If the supply of money increases at the same rate that the number of people using it increases, prices remain stable.  If it does not increase as fast as demand, there will be deflation and early holders of money will see its value increase.

Coins have to get initially distributed somehow, and a constant rate seems like the best formula.

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
