---
title: "Sergio Demian Lerner discovers a second fingerprint in Satoshi's mining — the nonce LSB pattern"
date: 2013-09-03T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Five months after his initial ExtraNonce analysis, Lerner discovered that Satoshi's nonce values had a highly non-random least significant byte (LSB) distribution — restricted to values [0..9] and [19..58], approximately 50 out of 256 possible values. This second fingerprint, independent of ExtraNonce, proved Satoshi used custom mining software with parallelized nonce space partitioning."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "blockchain-forensics"
  - "extranonce"
secondarySources:
  - name: "Bitslog — Satoshi's Machine (September 4, 2013)"
    url: "https://bitslog.com/2013/09/04/satoshi-machine-one-mystery-is-solved-and-another-opens/"
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
translationStatus: complete
---

On September 3, 2013, [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/) published "A New Mystery about [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) Hidden in the Bitcoin Block-Chain," revealing a second, independent fingerprint in Satoshi's early mining — beyond the [ExtraNonce slope analysis he had published five months earlier](/BitcoinArchive/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/).

**The discovery:**

Lerner analyzed the least significant byte (LSB) of nonce values across the first 36,288 blocks. In a standard mining implementation, nonce bytes should be uniformly distributed. Instead, Satoshi's blocks showed a striking non-random pattern:

- **Values 0–9:** Elevated frequency (247–324 occurrences each)
- **Values 10–18:** Near-zero frequency (only 2–6 each) — a critical gap
- **Values 19–58:** Elevated again (up to 201 occurrences)
- **Values 59–255:** Sparse distribution

The pattern was exclusive to unspent coinbases (Satoshi's blocks) and absent from blocks mined by other early participants.

**Significance:**

This LSB restriction to approximately **50 out of 256 possible values** ([0..9] ∪ [19..58]) was a completely independent line of evidence from the ExtraNonce analysis. It proved the dominant miner used custom software that partitioned the nonce search space — assigning different LSB ranges to different threads or processes to avoid duplicate work.

**Initial hypotheses:**

Lerner proposed four explanations: a parsing error, specialized hardware using gray codes, a SHA-2 vulnerability, or an intentional fingerprint. Community member "Eyal0" quickly proposed the correct answer: Satoshi ran approximately 50 parallel mining threads, each assigned unique LSB identifiers to prevent nonce collision.

**Follow-up (September 4, 2013):**

In "Satoshi's Machine," Lerner confirmed the LSB-ExtraNonce connection and determined that Satoshi's computer appeared approximately **4.3 times faster** than any other early miner's machine — consistent with a single high-end CPU running dozens of parallel threads rather than multiple networked computers.

Lerner noted:

> "We're living in a LOST movie: each time it looks a mystery is solved, another one appears."
