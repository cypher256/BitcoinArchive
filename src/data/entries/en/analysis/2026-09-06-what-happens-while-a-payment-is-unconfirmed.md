---
title: "What happens while a payment is unconfirmed"
date: 2026-09-06T00:00:00Z
type: "guide"
source: "bitcoin-pdf"
sourceUrl: "https://bitcoin.org/bitcoin.pdf"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Part 4 of the beginner guide. A sent payment sits in a waiting room each node keeps on its own before a miner seats it in a block — and even then, it only gets safer with time."
isSatoshi: false
tags:
  - "beginner-guide"
  - "explainer"
partOf: "analysis/2026-05-23-how-bitcoin-works-visual-glossary"
relatedEntries:
  - "design/2009-01-03-bitcoin-block-chain-design"
  - "design/2009-01-03-bitcoin-consensus-design"
---

![A crowded waiting-room panel of pending transaction cards beside a departing train-like block carrying a seated few](/BitcoinArchive/images/analysis/2026-09-06-what-happens-while-a-payment-is-unconfirmed-hero.png)

Drop a letter in a mailbox and it doesn't teleport to the recipient — it sits in the box, then a sorting facility, then a delivery truck, each stage taking time before it's actually in the recipient's hands. A bitcoin payment goes through something similar: sending it is not the same moment as it becoming official.

## The waiting room

The instant you send a payment, it's broadcast out across the peer-to-peer network from [the earlier page](/BitcoinArchive/entries/analysis/2026-09-06-how-transactions-become-a-shared-ledger/), and every node that hears about it adds it to its own holding area, called the **mempool** — short for "memory pool." Each node keeps this waiting room separately, so no two nodes necessarily see the exact same set of pending payments at any given moment, but the effect is the same everywhere: nothing happens to a payment there except waiting, alongside everything else that hasn't yet been sealed into a block.

<!-- visual: mempool-to-block -->

When a miner assembles its next candidate block, it doesn't have room for every pending payment it knows about — so it picks and chooses, and it tends to pick the ones paying the most relative to their size first (a small, generously-paying payment can win a seat over a larger one offering more in total), since that **transaction fee** goes straight into the miner's own pocket. A payment with a generous fee usually gets seated on the very next block; a payment with a stingy or no fee might sit in the waiting room for a long time, especially when many other payments are competing for the same limited seats.

## Confirmations: safety that builds over time

Once your payment is finally seated in a block, it has its first **confirmation**. It isn't instantly bulletproof at that point — it's just gotten its first layer of protection. Each additional block stacked on top after that adds one more confirmation, and each one makes undoing that payment exponentially harder, for the same reason changing an old page was hard in the previous chapter: undoing it would mean unwinding every block built on top of it since.

There's no single moment where a payment magically becomes "final" — it's a gradient, not a switch. In practice, six confirmations (roughly an hour, at ten minutes each) has long been treated as the rule-of-thumb point where reversing a payment is so expensive it's no longer worth worrying about for most purposes; a small everyday purchase is often accepted with far fewer. (The [consensus design document](/BitcoinArchive/entries/design/2009-01-03-bitcoin-consensus-design/) works out the actual reversal odds behind that rule of thumb, for readers who want the numbers.)

So a payment goes from broadcast, to waiting in the mempool, to seated in a block, to safer with every block after it — a straightforward pipeline, as long as every miner and every node agrees on which block came first. What happens on the rare occasions they don't — and why that still can't be exploited — is [the last page](/BitcoinArchive/entries/analysis/2026-09-06-why-no-one-can-cheat-the-ledger/) in this guide.
