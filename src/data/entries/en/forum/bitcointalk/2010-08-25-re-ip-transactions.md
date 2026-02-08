---
title: "Re: Connection limits"
date: 2010-08-25T21:02:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=862.msg10143#msg10143"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi discusses Bitcoin's networking design and how nodes connect to each other, explaining connection management."
isSatoshi: true
tags:
  - "networking"
  - "nodes"
  - "connections"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/243/"
threadId: "bt-connection-limits"
threadTitle: "Connection limits"
threadPosition: 2
---

The software tries to maintain 8 outbound connections and allows up to 125 inbound connections. When you're behind a firewall and can't receive inbound connections, you can still use Bitcoin fine with just outbound connections. But allowing inbound connections helps the network.

Nodes remember addresses they've seen and share them with other nodes. This is how new nodes find the network and how the network stays connected.
