---
title: "Daniel Larimer (1980–) — bytemaster, later BitShares / Steem / EOS founder who argued for off-chain instant payments in 2010"
date: 2010-07-28T20:59:42Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/EOS.IO"
author: "Daniel Larimer"
participants:
  - name: "Daniel Larimer"
    slug: "daniel-larimer"
description: "Daniel Larimer (bytemaster): American software developer who joined BitcoinTalk in mid-2010 and argued that on-chain settlement was too slow and expensive for micropayments — the same thesis that later drove his creation of BitShares (2013–2016), Steem (2016), and EOS.IO (2017)."
isSatoshi: false
tags:
  - "daniel-larimer"
  - "biography"
  - "bitcointalk"
  - "bitshares"
  - "steem"
  - "eos"
  - "historic"
secondarySources:
  - name: "EOS.IO — Wikipedia"
    url: "https://en.wikipedia.org/wiki/EOS.IO"
relatedEntries:
  - forum/bitcointalk/topic-532/2010-07-29-re-scalability-and-transaction-rate
---

Daniel Larimer (born 1980), known on BitcoinTalk as **bytemaster**, is an American software developer who went on to found three major blockchain projects whose core design premise was first articulated in his 2010 Bitcoin forum posts: that on-chain settlement alone could not meet the throughput and latency requirements of real-world payments.

**Early Bitcoin Posts (2010):**
Larimer first appears in the archive on [July 28, 2010](/BitcoinArchive/entries/forum/bitcointalk/topic-532/2010-07-28-bytemaster-msg6269/), writing:

> "I am convinced that bandwidth, disk space, and computation time necessary to distribute and 'finalize' a transaction will be prohibitively expensive for micro-payments. [...] 10 minutes is too long to verify that payment is good. It needs to be as fast as swiping a credit card is today."

In the same post he proposed **"bit-banks"** — trusted institutions that would settle among themselves off-chain for instant transfers, with on-chain settlement reserved for inter-bank netting. This is the same architectural thesis — decoupling fast user-level transactions from slow base-layer consensus — that he would later implement as Delegated Proof-of-Stake (DPoS) across his subsequent projects.

**Later Projects:**
Between 2013 and 2016, Larimer worked on **BitShares**, a decentralized exchange platform built on DPoS. In 2016 he moved to **Steem**, a blockchain-based social media platform. In 2017 he co-founded **EOS.IO** with Brendan Blumer at Block.one, and served as its CTO until announcing his resignation on January 10, 2021. Each project pursued the same premise: high-throughput consensus by concentrating block production in a rotating set of elected validators.

**Significance:**
Larimer's 2010 BitcoinTalk posts are among the earliest public arguments that Bitcoin's base layer would not by itself serve micropayments or retail-speed commerce. History validated both sides of that argument in different ways — Bitcoin layered solutions (Lightning, Liquid) followed exactly the "off-chain instant, on-chain settlement" pattern he sketched, while his own projects pursued it by sacrificing the open validator set for higher throughput. Either way, his 2010 objection marks the point where a coherent counter-vision to pure Nakamoto consensus enters the public record.
