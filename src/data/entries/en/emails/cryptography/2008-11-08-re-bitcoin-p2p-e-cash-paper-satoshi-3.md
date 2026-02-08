---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-08T22:54:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014822.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
description: "Satoshi responds to concerns about a 51% attack, explaining the economic incentives that make it irrational for an attacker to destroy the system."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 7
isSatoshi: true
tags:
  - "51-percent-attack"
  - "incentives"
  - "security"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/9/"
---

Ray Dillinger wrote:
> the "currency" is inflationary at about
> 35% as long as anyone is willing to keep
> generating coins...

It's more like the opposite. As the number of nodes increases, generating new coins becomes harder. This is because the difficulty of the proof-of-work is adjusted to target a certain number of blocks per hour. If there are more nodes, the difficulty increases proportionally.

The generation of new coins is analogous to gold miners expending resources to add gold to circulation. In our case, it is CPU time and electricity that is expended.

The incentive can also be funded with transaction fees. If the output value of a transaction is less than its input value, the difference is a transaction fee that is added to the incentive value of the block containing the transaction. Once a predetermined number of coins have entered circulation, the incentive can transition entirely to transaction fees and be completely inflation free.
