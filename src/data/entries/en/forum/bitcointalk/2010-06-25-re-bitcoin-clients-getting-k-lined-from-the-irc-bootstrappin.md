---
title: "Re: Bitcoin clients getting k-lined from the IRC bootstrapping channel"
date: 2010-06-25T21:15:15.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=215.msg1779#msg1779"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin clients getting k-lined from the IRC bootstrapping channel\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/147/"
threadId: "bt-bitcoin-clients-getting-k-lined-from-the-irc-boots"
threadTitle: "Bitcoin clients getting k-lined from the IRC bootstrapping channel"
threadPosition: 1
---

We need more details about what happened MadHatter.

Both 0.2 and 0.3 have a backup way of getting connected without IRC, it's just slower to get connected.

0.2 can find other nodes without IRC if it's ever been connected before, but a new install can't discover the network for the first time without IRC.

0.3 can also seed without IRC.  It can operate entirely without IRC if it needs to, but it's better having IRC for redundancy.
