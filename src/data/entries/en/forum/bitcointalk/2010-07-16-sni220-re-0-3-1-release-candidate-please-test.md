---
title: "Re: 0.3.1 release candidate, please test"
date: 2010-07-16T17:26:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3536#msg3536"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3.1 release candidate, please test\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/220/"
threadId: "bt-0-3-1-release-candidate-please-test"
threadTitle: "0.3.1 release candidate, please test"
threadPosition: 8
---

Good point.  If you're going to have more than 8 LAN nodes connect to one gateway node, then you'd better have the gateway node set up so it can receive incoming connections.  Otherwise, while the gateway node has 8 or more connections, it will not try to add any more outbound connections.  As the outside nodes you're connected to come and go, it doesn't make new outbound connections to replace them.  You'll be fine if you can accept incoming connections, then there will be plenty of others connecting to you.
