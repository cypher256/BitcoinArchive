---
title: "Re: Bitcoin v0.1 released - Offer to send coins"
date: 2009-01-13T01:55:00Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi informs Trammell that bugs are fixed in v0.1.3 and offers to send him some coins via the send-to-IP feature, one of the earliest known direct Bitcoin transfers."
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadTitle: "Satoshi ↔ Dustin Trammell Correspondence"
threadPosition: 3
tags:
  - "correspondence"
  - "early-adopter"
  - "first-transaction"
  - "send-to-ip"
  - "v0.1.3"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog - Block 286"
    url: "https://blog.dustintrammell.com/block-286-and-satoshis-coins/"
---

In this email, Satoshi discussed a communications bug that had been fixed in version 0.1.3 which had prevented nodes from properly broadcasting blocks. He then offered to send Trammell some coins:

> This is all fixed in 0.1.3. If you give me your IP, I'll send you some coins.

This message is significant because it documents one of the very earliest direct Bitcoin transfers between individuals. Satoshi used the "send-to-IP" feature, which allowed coins to be sent directly to a node by connecting to its IP address. The receiving client would then provide a Bitcoin address for the transaction.

Trammell responded later that day (January 13, 2009, at 18:40 UTC) with his IP address:

> I'm currently at 24.28.79.95, but that's dynamic so it may change.

The following day, January 14, 2009 at 19:46 UTC, Satoshi sent Trammell 25.0 BTC in a single transaction (txid: d71fd2f64c0b34465b7518d240c00e83f6a5b10138a7079d1252858fe7e6b577). This transaction was sent from address 1Jhk2DHosaaZx1E4CbnTGcKM7FC88YHYv9 to Trammell's address 1DCbY2GYVaAMCBpuBNN5GVg3a47pNK1wdi.

Their subsequent correspondence also touched on the insecurities of sending bitcoin by IP address. Satoshi ultimately dropped the send-to-IP feature from the software entirely, partly informed by these discussions.

*Source: Published by Dustin Trammell in November 2013. The full correspondence is archived on the Bitcoin Wiki at en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails. Transaction details documented on Trammell's blog.*
