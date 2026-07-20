---
title: "BitCoin Transfer - Confusion about received transaction"
date: 2009-01-18T09:23:02Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published by Dustin Trammell in November 2013"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell reports confusion about a 100 BTC transfer between his own two Bitcoin instances — the transaction details showed 'Satoshi' as a label, leading him to wonder if Satoshi had sent the coins."
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "transaction"
  - "address-book"
  - "usability"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-18-trammell-to-satoshi-bitcoin-transfer
  - aftermath/2009-01-11-dustin-trammell-biography
quotes:
  - id: "q1"
    person: "Dustin Trammell"
    personSlug: "dustin-trammell"
    date: "2009-01-18T09:23:02Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-18-trammell-to-satoshi-bitcoin-transfer"
---

![Illustration of two computer windows labeled Work and Home linked by an arcing path with a "100 BTC" coin traveling between them, above a wallet-interface panel showing a confusing transaction label next to a question mark, and a question-mark speech bubble in the corner.](/BitcoinArchive/images/analysis/2009-01-18-trammell-to-satoshi-bitcoin-transfer-hero.png)

Trammell initiated a new email thread about a puzzling transaction. He had sent himself 100 BTC from his work Bitcoin client to his home client using a Bitcoin address (rather than by IP), but the transaction details showed an unexpected label:

<!-- quote: q1 -->
> After that first transfer of 25.00, you didn't send me another 100.00 did you? I sent myself 100.00 from my BitCoin application at work to my one at home using the BitCoin address rather than by IP. My application at home has a 100.00 transfer received, however it's transaction details say "Received with: Satoshi 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv". That is not my BitCoin address from work, so I assume this means that I received the payment encoded with a block that was computed by your client?

Trammell didn't recognize the Bitcoin address shown and wondered how the software knew Satoshi's name, since he didn't recall ever entering a name in the application. This confusion highlighted early usability issues with Bitcoin's address book and transaction display that Satoshi would address in his reply.
