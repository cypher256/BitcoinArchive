---
title: "Re: Bitcoin open source implementation of P2P currency"
date: 2009-02-18T20:50:00Z
source: p2pfoundation
sourceUrl: "http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sepp Hasslberger"
    slug: "sepp-hasslberger"
description: "Satoshi responds to Sepp Hasslberger's questions about Bitcoin, explaining the generation process and how it provides initial distribution of currency units."
isSatoshi: true
tags:
  - "generation"
  - "distribution"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/2/"
---

Sepp wrote:
> Is there a way to obtain actual coins?

Right now there are two ways to get coins. You can send someone coins over the Internet and they can send you something in return. Or you can be lucky enough to find a block, which currently gives you 50 coins.

The generation rate of new coins will slow over time based on a schedule. This is to ensure that coins are generated at a predictable rate. When the total number of coins reaches 21 million, no more will be generated.

The system distributes the coins to network nodes as they create blocks, with the amount halved every 4 years:

first 4 years: 10,500,000 coins
next 4 years: 5,250,000 coins
next 4 years: 2,625,000 coins
next 4 years: 1,312,500 coins
etc...

When that runs out, the system can support transaction fees if needed. It's based on open market competition, and there will probably always be nodes willing to process transactions for free.
