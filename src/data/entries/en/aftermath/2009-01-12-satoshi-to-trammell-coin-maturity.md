---
title: "Re: Bitcoin v0.1 released"
date: 2009-01-12T18:52:45Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published by Dustin Trammell in November 2013"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi replies to Dustin Trammell, explaining the coin maturity system and recommending an upgrade to version 0.1.3 which had stabilized the software."
isSatoshi: true
tags:
  - "correspondence"
  - "early-adopter"
  - "mining"
  - "coin-maturity"
  - "v0.1.3"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-12-satoshi-to-trammell-coin-maturity
  - aftermath/2009-01-11-dustin-trammell-biography
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-12T18:52:45Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-12-satoshi-to-trammell-coin-maturity"
---

![A stylized email panel beside a coin icon transitioning from a dim, locked state to a glowing matured coin, next to a small connected-node network diagram and two faceless silhouetted figures linked by an arrow.](/BitcoinArchive/images/analysis/2009-01-12-satoshi-to-trammell-coin-maturity-hero.png)

In this reply to Dustin Trammell, Satoshi thanked him for the timestamp service link and discussed alternative approaches. Regarding Trammell's question about the credit field, Satoshi explained the coin maturity mechanism:

<!-- quote: q1 -->
> the credit field stays 0.00 until it matures, then it'll be 50.00.

Satoshi asked Trammell whether it would be clearer to leave the credit field blank until maturity instead of displaying 0.00.

Satoshi recommended that Trammell upgrade to version 0.1.3, noting:

<!-- speaker: Satoshi Nakamoto -->
> This version has really stabilized things.

Version 0.1.3 had fixed a communications bug that prevented nodes from properly broadcasting blocks to each other, which was critical for the network's early functioning.
