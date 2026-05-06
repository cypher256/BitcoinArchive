---
title: "Litecoin launches as 'silver to Bitcoin's gold' — Charlie Lee forks Bitcoin with Scrypt PoW (October 2011)"
date: 2011-10-13T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Litecoin"
author: "Charlie Lee"
participants:
  - name: "Charlie Lee"
    slug: "charlie-lee"
description: "Charlie Lee launched Litecoin on October 13, 2011 as a Bitcoin-codebase fork with Scrypt PoW, 2.5-minute blocks, and 84 M cap. He framed it as 'silver to Bitcoin's gold'."
isSatoshi: false
tags:
  - "altcoin"
  - "litecoin"
  - "fork"
  - "scrypt"
  - "proof-of-work"
secondarySources:
  - name: "Litecoin — official site"
    url: "https://litecoin.org/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-04-18-namecoin-launch
  - aftermath/2013-12-06-dogecoin-launch
---

On October 13, 2011, Charlie Lee — then a Google software engineer who had been active on BitcoinTalk under the handle `coblee` — launched Litecoin (LTC) by mining its genesis block. Six days earlier, on October 7, he had announced the project on BitcoinTalk with binaries available on the litecoin.org website.

Litecoin was a Bitcoin-codebase fork with four parameter changes:

- **Proof-of-work:** Scrypt instead of SHA-256, intended to remain mineable on consumer GPUs and later CPUs as a hedge against ASIC concentration
- **Block time:** 2.5 minutes (1/4 of Bitcoin's 10 minutes), giving 4× faster transaction confirmation
- **Block reward:** 50 LTC initially, halving every 840,000 blocks (1/4 of Bitcoin's 210,000)
- **Supply cap:** 84 million LTC (4× Bitcoin's 21 million)

Each parameter was scaled by a factor of four against Bitcoin's, producing a chain that was internally consistent — the block reward, halving schedule, and supply ceiling all stayed in proportion.

Lee positioned Litecoin publicly as **"the silver to Bitcoin's gold"** — a framing that survived as marketing language for the chain into the late 2010s and 2020s. The metaphor captured Lee's positioning intent: Litecoin was not a replacement for Bitcoin but a complementary, faster, cheaper-fee chain for everyday transactions, with Bitcoin reserved for store-of-value usage.

The Scrypt proof-of-work choice did not produce the long-term ASIC resistance Lee anticipated. Scrypt ASICs (most prominently from KnCMiner and later Bitmain's Antminer L-series) shipped from 2014 onward, and Litecoin mining became as ASIC-dominated as Bitcoin's by 2015–2016. The "ASIC-resistant" framing was retired without explicit retraction; the chain continued operating on Scrypt regardless.

Litecoin survived the early-altcoin era when most contemporaries (Solidcoin, IXCoin, Tenebrix) faded. By 2013 it was the second-largest cryptocurrency by market capitalization, a position it held intermittently through 2017 before the broader altcoin proliferation crowded the rankings. Charlie Lee left Coinbase in 2017 to focus on Litecoin Foundation work, and disclosed selling his personal LTC holdings the same year on the grounds that his comments on price moved markets unfairly.

Litecoin's lasting significance is as the second template for Bitcoin-codebase forks (after [Namecoin](/BitcoinArchive/entries/aftermath/2011-04-18-namecoin-launch/)) and the proximate parent of [Dogecoin](/BitcoinArchive/entries/aftermath/2013-12-06-dogecoin-launch/), which forked Litecoin in December 2013 rather than Bitcoin directly. The full genealogy is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).
