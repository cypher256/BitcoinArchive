---
title: "Sergio Demian Lerner identifies the 'Patoshi' mining pattern — ~1 million BTC linked to Satoshi"
date: 2013-04-17T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Sergio Demian Lerner published The Well Deserved Fortune of Satoshi, identifying a distinctive mining pattern (later named Patoshi) linking ~22,000 blocks (~1.1M BTC) to a single miner."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "extranonce"
  - "nonce-analysis"
  - "historic"
secondarySources:
  - name: "Bitslog — Satoshi's Fortune: a more accurate figure (April 24, 2013)"
    url: "https://bitslog.com/2013/04/24/satoshi-s-fortune-a-more-accurate-figure/"
  - name: "Bitslog — A new mystery about Satoshi (September 3, 2013)"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Bitslog — Satoshi's Machine (September 4, 2013)"
    url: "https://bitslog.com/2013/09/04/satoshi-machine-one-mystery-is-solved-and-another-opens/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2009-01-09-satoshi-code-analysis
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
  - aftermath/2023-01-12-early-bitcoin-moved
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - aftermath/2026-05-28-noah-doe-lawsuit
inlineLinkKeywords:
  - "The Well Deserved Fortune of Satoshi Nakamoto"
---

![Dark teal infographic showing a segmented, rising slope chart, a five-section computer chip icon beside a crossed-out row of small mining-rig icons, and a locked vault holding stacked gold coins next to a magnifying-glass and target icon.](/BitcoinArchive/images/analysis/2013-04-17-sergio-lerner-patoshi-analysis-hero.png)

On April 17, 2013, Argentine Bitcoin researcher [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/) published "The Well Deserved Fortune of [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/), Bitcoin creator, Visionary and Genius" on his blog Bitslog. The post presented the first systematic analysis of Bitcoin's earliest mining patterns.

## Method
Lerner tracked the ExtraNonce field in coinbase transactions across blocks 0 through 36,288 (January 2009 to January 2010), using it as a "slow realtime clock" to identify when a miner's client was restarted. He found a single entity mining with consistent slope segments, restarting roughly every ~100 hours.

<!-- chart: extranonce-scatter -->

## Key findings
- A single entity mined approximately **1,000,000 BTC** in the first year (refined to ~980,000 BTC in a follow-up post on April 24, 2013)
- Of 1,814,400 total BTC awarded in that period, 1,148,800 BTC remained unspent
- Block 1 was the first mined by this entity; Block 12 was the first mined by a different user
- Only about 100 BTC (two block rewards) from this entity appeared to have been spent

## The Nonce Mystery (September 2013)
Lerner discovered that the entity's nonce values were restricted to specific byte ranges — the least significant byte was limited to values [0..9] ∪ [19..58], roughly 50 out of 256 possible values. This nonce space reduction explained why the entity appeared to mine ~4.3× faster than other miners.

## The "Patoshi" Pattern (April 2019)
In "The Return of the Deniers and the Revenge of Patoshi," Lerner coined the term "Patoshi" for the pattern and updated his estimate to **~22,000 blocks / ~1.1 million BTC**. He provided new evidence: zero timestamp inversions between consecutive Patoshi blocks (versus 224 inversions among non-Patoshi blocks), proving the miner used a single PC clock.

## The Mining Machine (August 2020)
In "The Patoshi Mining Machine," Lerner concluded that Patoshi used a **single high-end CPU with multi-threading** — not 50+ networked computers. The nonce space was divided into 5 subranges scanned by parallel threads, using a modified mining client (not stock Bitcoin v0.1) with likely SSE2 optimizations.

The Patoshi analysis remains one of the most significant pieces of blockchain forensics ever conducted. It established that Satoshi Nakamoto accumulated roughly 5% of Bitcoin's total 21 million supply — and left nearly all of it unspent, with only the ~100 BTC noted above ever moving on-chain.

Subsequent work has refined the original signal in several directions: the [Lerner biography](/BitcoinArchive/participants/sergio-demian-lerner/) tracks the analyst across the multi-year follow-up record; the [2013 nonce-LSB discovery](/BitcoinArchive/entries/aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery/) and the [2019 "Patoshi" naming](/BitcoinArchive/entries/aftermath/2019-04-16-sergio-lerner-patoshi-naming/) record the methodological additions; the [2021 PLOS ONE Patoshi-anomaly study](/BitcoinArchive/entries/aftermath/2021-09-30-plos-one-patoshi-anomaly-study/) is the first peer-reviewed treatment of the same pattern; the [Hal Finney identity hypothesis](/BitcoinArchive/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/) reads Patoshi against the Finney-as-Satoshi possibility; the [identification-asymmetry analysis](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identification-asymmetry/) treats Patoshi as a forensic-attribution case study; and the [2026 Noah Doe lawsuit](/BitcoinArchive/entries/aftermath/2026-05-28-noah-doe-lawsuit/) invokes the dormant-coin attribution Patoshi established as the legal predicate for a custodial-recovery claim.

Three further entries extend the same forensic line: the [2020 Patoshi mining-machine analysis](/BitcoinArchive/entries/aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine/) resolves the hardware question — a single multi-threaded CPU, not a 48-machine farm; the [2021 holdings analysis](/BitcoinArchive/entries/aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis/) compiles the ~1.1 million BTC estimate across independent reviews; [Gavin Andresen's biography](/BitcoinArchive/participants/gavin-andresen/) records the same ~1.1 million BTC figure as settled fact — the holdings that did not transfer with the lead-maintainer role; and [Jameson Lopp's 2022 "greedy miner" analysis](/BitcoinArchive/entries/aftermath/2022-09-16-lopp-was-satoshi-greedy-miner/) uses the same Patoshi reconstruction to show Satoshi deliberately throttled mining capacity below what the hardware could produce. A decade later, the same signature was used as a filter rather than a fingerprint: the [2023 early-Bitcoin movement](/BitcoinArchive/entries/aftermath/2023-01-12-early-bitcoin-moved/) checked a newly-spent January 2009 block reward against the Patoshi pattern, found no match, and concluded the coins belonged to another early miner rather than Satoshi.
