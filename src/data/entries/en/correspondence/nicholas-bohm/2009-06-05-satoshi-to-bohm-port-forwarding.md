---
title: "Re: Router issue — port 8333 forwarding advice"
date: 2009-06-05T00:00:00Z
type: "correspondence"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
description: "Satoshi advises Bohm to forward port 8333 on his new router so his Bitcoin node can receive incoming connections, explaining that without inbound-capable nodes online, the network fails to function."
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "port-forwarding"
  - "connectivity"
  - "early-network"
secondarySources:
  - name: "COPA v Wright Judgment [2024] EWHC 1198 (Ch)"
    url: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
    note: "COPA v. Craig Wright trial evidence, filed as part of Nicholas Bohm's witness statement {C/10/1}"
  - name: "Decashed - Node IP Analysis"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
---

[Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) replied to [Bohm](/BitcoinArchive/participants/nicholas-bohm/)'s connectivity issue the next day, advising him to forward port 8333 on his new router. He explained that without port forwarding, Bohm's node could not receive incoming connections from other peers.

Satoshi noted that if nobody currently online could accept inbound connections, nodes would fail to connect to the network entirely — highlighting just how fragile the Bitcoin network was in mid-2009 with only a handful of active nodes.

*[Context: The specific text of this email was entered as exhibit evidence in the COPA v. Craig Wright trial but has not been published in full.]*
