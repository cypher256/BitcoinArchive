---
title: "Bitcoin open source implementation of P2P currency"
date: 2009-02-11T22:27:00Z
source: p2pfoundation
sourceUrl: "http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi announces Bitcoin on the P2P Foundation forum, describing the problems with conventional currency and how Bitcoin solves them through cryptographic proof instead of trust."
isSatoshi: true
tags:
  - "announcement"
  - "trust"
  - "central-banking"
  - "cryptographic-proof"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/"
---

I've developed a new open source P2P e-cash system called Bitcoin. It's completely decentralized, with no central server or trusted parties, because everything is based on crypto proof instead of trust.

The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts.

With e-currency based on cryptographic proof, without the need to trust a third party middleman, money can be secure and transactions effortless.

The solution Bitcoin proposes is to use a peer-to-peer network to check for double-spending. In a nutshell, the network works like a distributed timestamp server, stamping the first transaction to spend a coin. It takes advantage of the nature of information being easy to spread but hard to stifle.

For more details on how it works, see the design paper at http://www.bitcoin.org/bitcoin.pdf or visit http://www.bitcoin.org where you can download the software and try it out.

Satoshi Nakamoto
