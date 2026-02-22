---
title: "Sergio Demian Lerner coins the term 'Patoshi' and updates estimate to ~22,000 blocks / ~1.1 million BTC"
date: 2019-04-16T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Six years after his original analysis, Lerner published 'The Return of the Deniers and the Revenge of Patoshi,' coining the term 'Patoshi' (Pattern + Satoshi), updating his estimate to ~22,000 blocks / ~1.1 million BTC, and providing new evidence: zero timestamp inversions between Patoshi blocks versus 224 among non-Patoshi blocks, proving a single PC clock."
isSatoshi: false
aftermathType: "blog"
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
translationStatus: complete
---

On April 16, 2019, Sergio Demian Lerner published "The Return of the Deniers and the Revenge of Patoshi," a major update to his ongoing blockchain forensics research that consolidated six years of findings and introduced the now-canonical "Patoshi" terminology.

**The "Patoshi" name:**

Lerner coined the term **"Patoshi"** — a portmanteau of "Pattern" and "Satoshi" — to refer to the distinctive mining signature he had been studying since 2013. The name became the standard reference in all subsequent academic and community discussions of Satoshi's mining behavior.

**Updated estimates:**

- **~22,000 blocks** attributed to the Patoshi pattern (within a larger set of 27,680 nonce-restricted blocks, called "set M")
- **~1.1 million BTC** — revised upward from the original 2013 estimate of ~1 million BTC
- **99.9%** of Patoshi blocks remain unspent, versus only ~10% of other early blocks

**Timestamp inversion analysis:**

The most powerful new evidence was a timestamp analysis of the first 50,000 blocks. Lerner found:

- **Zero** timestamp inversions between consecutive Patoshi blocks
- **224** timestamp inversions among consecutive non-Patoshi blocks

A timestamp inversion occurs when a later block has an earlier timestamp than its predecessor — this happens when different miners' clocks are slightly out of sync. The complete absence of inversions in Patoshi blocks proved they were produced by **a single PC clock running a single piece of software**, making the hypothesis of multiple synchronized miners statistically impossible.

**Statistical proof:**

Lerner calculated the probability that all 27,680 blocks in set M could have nonces randomly falling within the restricted LSB range R: less than **2^-36,000** — a number so vanishingly small as to constitute mathematical proof that the pattern was intentional.

**Conclusion:**

This 2019 paper transformed the Patoshi research from a set of empirical observations into a near-certainty: one entity, using custom mining software on a single computer, accumulated approximately 5% of Bitcoin's total supply — and never spent it.
