---
title: "Sergio Lerner coins the term 'Patoshi' — updates Satoshi mining estimate to ~1.1M BTC"
date: 2019-04-16T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Six years after his original analysis, Lerner published The Return of the Deniers and the Revenge of Patoshi, coining the term Patoshi and proving a single PC clock via timestamp-inversion evidence."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "nonce-analysis"
  - "timestamp"
  - "blockchain-forensics"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — A new mystery about Satoshi (September 3, 2013)"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2020-07-20-whale-alert-satoshi-fortune
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
inlineLinkKeywords:
  - "Patoshi pattern"
translationStatus: complete
---

![Dark-navy infographic with a honeycomb grid of glowing amber hexagons highlighted among plain gray ones, an overlapping two-tone wordmark, and two horizontal timelines -- one straight, one crossed with diagonal lines -- set inside rounded panels.](/BitcoinArchive/images/analysis/2019-04-16-sergio-lerner-patoshi-naming-hero.png)

On April 16, 2019, [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/) published "The Return of the Deniers and the Revenge of Patoshi," a major update to his ongoing blockchain forensics research that consolidated six years of findings and introduced the now-canonical "Patoshi" terminology.

## The "Patoshi" name

Lerner coined the term **"Patoshi"** — a portmanteau of "Pattern" and "Satoshi" — to refer to the distinctive mining signature he had been [studying since 2013](/BitcoinArchive/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/). The name became the standard reference in all subsequent academic and community discussions of Satoshi's mining behavior.

## Updated estimates

- **~22,000 blocks** attributed to the Patoshi pattern (within a larger set of 27,680 nonce-restricted blocks, called "set M")
- **~1.1 million BTC** — revised upward from the original 2013 estimate of ~1 million BTC
- **99.9%** of Patoshi blocks remain unspent, versus only ~10% of other early blocks

These updated figures were independently corroborated the following year by [Whale Alert's 2020 analysis](/BitcoinArchive/entries/aftermath/2020-07-20-whale-alert-satoshi-fortune/), which used its own blockchain-tracking methodology to arrive at a nearly identical 1,125,150 BTC across 22,503 blocks.

## Timestamp inversion analysis

Building on the [nonce LSB discovery](/BitcoinArchive/entries/aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery/), the most powerful new evidence was a timestamp analysis of the first 50,000 blocks. Lerner found:

- **Zero** timestamp inversions between consecutive Patoshi blocks
- **224** timestamp inversions among consecutive non-Patoshi blocks

A timestamp inversion occurs when a later block has an earlier timestamp than its predecessor — this happens when different miners' clocks are slightly out of sync. The complete absence of inversions in Patoshi blocks proved they were produced by **a single PC clock running a single piece of software**, making the hypothesis of multiple synchronized miners statistically impossible.

## Statistical proof

Lerner calculated the probability that all 27,680 blocks in set M could have nonces randomly falling within the restricted LSB range R: less than **2^-36,000** — a number so vanishingly small as to constitute mathematical proof that the pattern was intentional.

## Conclusion

This 2019 paper transformed the Patoshi research from a set of empirical observations into a near-certainty: one entity, using custom mining software on a single computer, accumulated approximately 5% of Bitcoin's total supply — and left 99.9% of it unspent.

This 2019 Patoshi-naming entry is treated as the methodological continuation of [the 2013 Patoshi-pattern analysis](/BitcoinArchive/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/). The earlier entry frames the empirical observation; this 2019 entry records its formalisation into the named "Patoshi" pattern with refined nonce-LSB and ExtraNonce methodology.
