---
title: "Bitcoin Watchdog Service"
date: 2010-08-03T08:53:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=691.msg7283#msg7283"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "MoonShadow starts a discussion: Bitcoin Watchdog Service."
isSatoshi: false
threadId: "bt-bitcoin-watchdog-service"
threadPosition: 1
tags: []
---

Another thread that asked what would happen if the bitcoin network were to split over a period of time and reconnect got me thinking....

One way to protect against such an unlikey event would be to have a watchdog process that kept track of the average time between blocks since the last change in difficulty, and alert the owner if the time between blocks were to jump significantly and uncharacteristicly over one or more consecutive blocks.  This would also help protect a vendor from a double-spending scam if the theives involved were talented enough to be able to spoof his client's connections to delay another spend event from reaching him.

But then I realized that a server running a modified client on another machine, without a hard connection limit, could do the above for a collection of vendors, while monitoring the vendor's client by maintaining a connection to it and notifying the vendor by other means if the connection is lost.  Also, if a war, internet virus, or other were to divide the bitcoin network for an extended time; the watchdog would be able to deterimine *where* the problem on the Internet actually is by analysis of it's customers' connections that were lost, and notify all customers in the affected zone that, presumedly, they are on the wrong side of the split.

The watchdog would also work quite well as a rapid annouce clearinghouse, improving the odds for it's customers that if they are subjects of a double-spending scam, that it's less likely that they are those left holding the raw deal.

Any talented programmers willing to take this up?
