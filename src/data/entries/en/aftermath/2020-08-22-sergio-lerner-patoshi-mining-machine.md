---
title: "Sergio Demian Lerner proves Patoshi used a single multi-threaded PC — not dozens of computers"
date: 2020-08-22T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Lerner published The Patoshi Mining Machine, using re-mining simulation to prove Satoshi mined on a single high-end CPU with 5 parallel threads — not 50+ networked computers — refuting the Whale Alert claim."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "hardware"
  - "blockchain-forensics"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Whale Alert — The Satoshi Fortune (July 20, 2020)"
    url: "https://whale-alert.medium.com/the-satoshi-fortune-e49cf73f9a9b"
  - name: "CoinDesk — Protection Over Profit: What Early Mining Patterns Suggest About Bitcoin's Inventor"
    url: "https://www.coindesk.com/tech/2020/08/31/protection-over-profit-what-early-mining-patterns-suggest-about-bitcoins-inventor"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
translationStatus: complete
---

On August 22, 2020, [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/) published "The Patoshi Mining Machine" on his blog Bitslog — the most technically rigorous analysis of the hardware and software behind [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/)'s mining operation. The article appeared one month after Whale Alert's "The Satoshi Fortune" report, which had claimed Satoshi used approximately 48 computers.

**Re-mining simulation:**

Lerner conducted a re-mining experiment, simulating the Patoshi mining algorithm against the actual blockchain data. This allowed him to test competing hypotheses about Satoshi's hardware configuration.

**Key findings:**

- The Patoshi miner divided the nonce search space into **5 subranges**: each subrange covered approximately 655 million nonce values
- Within each subrange, nonces were scanned **sequentially from high to low** (the "Inner Negative" algorithm)
- This sequential scanning produced a **78% high-value bias** in the nonces selected as block solutions — a statistical fingerprint inconsistent with 48+ independent machines each scanning random ranges
- The 5 subranges were scanned in **parallel**, consistent with 5 threads on a single multi-core CPU
- The mining software was **not the stock Bitcoin v0.1 client** but a custom-built tool, likely with SSE2 optimizations for SHA-256

**Single PC, not a network:**

Lerner concluded that the Patoshi miner used a **single high-end CPU with multi-threading** — not 50+ networked computers. Multiple lines of evidence supported this:

1. **Nonce distribution**: The 78% high-value bias within subranges requires sequential scanning — independent machines scanning random ranges would produce a 50% distribution
2. **Timestamp coherence**: Zero timestamp inversions across 22,000+ Patoshi blocks (established in his 2019 analysis) proves a single system clock
3. **Hash rate**: The machine appeared approximately **4.3 times faster** than any other early miner, consistent with a quad-core CPU running 5 threads with SSE2 optimization versus the standard client's single-threaded, unoptimized mining

**Implications:**

This analysis directly refuted Whale Alert's claim of ~48 separate computers. The distinction matters: a single PC running custom software is consistent with a lone individual bootstrapping the network, while a 48-machine operation would suggest organizational resources. Lerner's findings reinforced the picture of Satoshi as a technically skilled individual working alone on consumer hardware.
