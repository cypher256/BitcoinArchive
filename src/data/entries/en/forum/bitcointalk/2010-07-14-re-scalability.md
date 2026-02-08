---
title: "Re: Scalability"
date: 2010-07-14T21:10:52.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2947#msg2947"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Scalability\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/188/"
threadId: "bt-scalability"
threadTitle: "Scalability"
threadPosition: 2
---

The design outlines a lightweight client that does not need the full block chain.  In the design PDF it's called Simplified Payment Verification.  The lightweight client can send and receive transactions, it just can't generate blocks.  It does not need to trust a node to verify payments, it can still verify them itself. 

The lightweight client is not implemented yet, but the plan is to implement it when it's needed.  For now, everyone just runs a full network node. 

I anticipate there will never be more than 100K nodes, probably less.  It will reach an equilibrium where it's not worth it for more nodes to join in.  The rest will be lightweight clients, which could be millions.

At equilibrium size, many nodes will be server farms with one or two network nodes that feed the rest of the farm over a LAN.
