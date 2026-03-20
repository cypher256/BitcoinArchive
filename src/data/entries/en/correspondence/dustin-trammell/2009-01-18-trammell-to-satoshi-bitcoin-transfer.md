---
title: "BitCoin Transfer - Confusion about received transaction"
date: 2009-01-18T09:23:02Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell reports confusion about a 100 BTC transfer he sent between his own two Bitcoin instances — the transaction details showed 'Satoshi' as a label, leading him to wonder if Satoshi had sent the coins or if the label came from block generation."
isSatoshi: false
threadId: "satoshi-dustin-trammell"
threadPosition: 15
tags:
  - "correspondence"
  - "early-adopter"
  - "transaction"
  - "address-book"
  - "usability"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Trammell initiated a new email thread about a puzzling transaction. He had sent himself 100 BTC from his work Bitcoin client to his home client using a Bitcoin address (rather than by IP), but the transaction details showed an unexpected label:

> After that first transfer of 25.00, you didn't send me another 100.00 did you? I sent myself 100.00 from my BitCoin application at work to my one at home using the BitCoin address rather than by IP. My application at home has a 100.00 transfer received, however it's transaction details say "Received with: Satoshi 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv". That is not my BitCoin address from work, so I assume this means that I received the payment encoded with a block that was computed by your client?

Trammell didn't recognize the Bitcoin address shown and wondered how the software knew Satoshi's name, since he didn't recall ever entering a name in the application. This confusion highlighted early usability issues with Bitcoin's address book and transaction display that Satoshi would address in his reply.

*Source: Published by Dustin Trammell in November 2013. The full correspondence is archived on the Bitcoin Wiki at en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails.*
