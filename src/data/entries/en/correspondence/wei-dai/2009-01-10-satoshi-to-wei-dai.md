---
title: "Re: Citation of your b-money page — Bitcoin v0.1 release"
date: 2009-01-10T11:17:00Z
source: correspondence
sourceUrl: "https://gwern.net/doc/bitcoin/2008-nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Satoshi announces the release of Bitcoin v0.1 to Wei Dai, stating it achieves nearly all the goals of b-money. He quotes Hal Finney's summary of the system."
isSatoshi: true
threadId: "satoshi-wei-dai"
threadTitle: "Satoshi ↔ Wei Dai Correspondence"
threadPosition: 3
tags:
  - "b-money"
  - "bitcoin-release"
  - "hal-finney"
  - "origins"
secondarySources:
  - name: "Gwern's Archive"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
---

I wanted to let you know, I just released the full implementation of the paper I sent you a few months ago, Bitcoin v0.1. Details, download and screenshots are at www.bitcoin.org

I think it achieves nearly all the goals you set out to solve in your b-money paper.

The system is entirely decentralized, without any server or trusted parties. The network infrastructure can support a full range of escrow transactions and contracts, but for now the focus is on the basics of money and transactions.

There was a discussion of the design on the Cryptography mailing list. Hal Finney gave a good high-level overview:

> One thing I might mention is that in many ways bitcoin is two independent ideas: a way of solving the kinds of problems James lists here, of creating a globally consistent but decentralized database; and then using it for a system similar to Wei Dai's b-money (which is referenced in the paper) but transaction/coin based rather than account based. Solving the global, massively decentralized database problem is arguably the harder part, as James emphasizes. The use of proof-of-work as a tool for this purpose is a novel idea well worth further review IMO.

Satoshi
