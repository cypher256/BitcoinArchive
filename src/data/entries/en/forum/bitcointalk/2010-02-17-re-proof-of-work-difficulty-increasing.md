---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-17T17:58:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg388#msg388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Proof-of-work difficulty increasing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/61/"
---

[Quote from: Sabunir on February 16, 2010, 08:51:51 AM](https://bitcointalk.org/index.php?topic=43.msg372#msg372). Perhaps it has to do with my connection's very high latency (2000ms or more on average) 
2 seconds of latency in both directions should reduce your generation success by less than 1%.

[Quote from: Sabunir on February 16, 2010, 08:51:51 AM](https://bitcointalk.org/index.php?topic=43.msg372#msg372)and/or my high packet loss (sometimes up to 10% loss)?
Probably OK, but I'm not sure.  The protocol is designed to resync to the next message, and messages get re-requested from all the other nodes you're connected to until received.  If you miss a block, it'll also keep requesting it every time another blocks comes in and it sees there's a gap.  Before the original release I did a test dropping 1 out of 4 random messages under heavy load until I could run it overnight without any nodes getting stuck.
