---
title: "Re: No connections — connected to a single peer"
date: 2009-07-20T00:00:00Z
type: "article"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
sourceNote: "COPA v. Craig Wright trial evidence, filed as part of Nicholas Bohm's witness statement {C/10/1}. IP address analysis by Decashed (March 2025)"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
description: "Satoshi follows up that he is connected to IP 70.113.114.209 and notes Bohm may have an outgoing-connection issue if not. The IP was later identified as likely Dustin Trammell's in Austin, Texas."
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "connectivity"
  - "early-network"
  - "dustin-trammell"
secondarySources:
  - name: "Decashed - Node IP Disclosed in COPA Case Likely Belonged to Dustin Trammell"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
relatedEntries:
  - aftermath/2021-10-23-dustin-trammell-second-node-testimony
inlineLinkKeywords:
  - "70.113.114.209"
---

![Two abstract node silhouettes linked by a single line across a dark network backdrop, with a follow-up email envelope showing an IP address between them and a small evidence-and-magnifying-glass motif in the corner.](/BitcoinArchive/images/analysis/2009-07-20-satoshi-to-bohm-trammell-ip-hero.png)

In a follow-up the next day, [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) provided debugging information:

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> I'm currently connected to 70.113.114.209 since yesterday.

He noted that if [Bohm](/BitcoinArchive/participants/nicholas-bohm/) wasn't connected to that IP, then the problem was on Bohm's end — he couldn't make outgoing connections either.

The IP address 70.113.114.209 was later identified by researchers (documented in a Decashed analysis) as likely belonging to [Dustin Trammell](/BitcoinArchive/participants/dustin-trammell/), who was based in the Round Rock/Austin, Texas area. This matches Trammell's known reputation as one of the most consistent early Bitcoin node operators of the period. Trammell later gave his own account of the network's earliest days: in a 2021 interview he described possibly being the second node to ever join, after connecting and seeing only one other peer for hours — see [Trammell's 2021 testimony about possibly being Bitcoin's second node](/BitcoinArchive/entries/aftermath/2021-10-23-dustin-trammell-second-node-testimony/) for that account.

The exchange is an operational snapshot of the Bitcoin network in July 2009: Satoshi's own node was connected to just a single other peer — one of the few remaining active nodes on the entire network.
