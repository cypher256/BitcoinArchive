---
title: "Sergio Demian Lerner identifies the 'Patoshi' mining pattern — ~1 million BTC linked to Satoshi"
date: 2013-04-17T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Bitcoin researcher Sergio Demian Lerner published 'The Well Deserved Fortune of Satoshi Nakamoto,' identifying a distinctive mining pattern (later named 'Patoshi') in Bitcoin's earliest blocks. The analysis linked approximately 22,000 blocks (~1.1 million BTC) to a single miner presumed to be Satoshi Nakamoto. Virtually none of these coins have ever been spent."
isSatoshi: false
aftermathType: "blog"
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
---

On April 17, 2013, Argentine Bitcoin researcher Sergio Demian Lerner published "The Well Deserved Fortune of Satoshi Nakamoto, Bitcoin creator, Visionary and Genius" on his blog Bitslog. The post presented the first systematic analysis of Bitcoin's earliest mining patterns.

**Method:**
Lerner tracked the ExtraNonce field in coinbase transactions across blocks 0 through 36,288 (January 2009 to January 2010), using it as a "slow realtime clock" to identify when a miner's client was restarted. He found a single entity mining with consistent slope segments, restarting roughly every ~100 hours.

**Key findings:**
- A single entity mined approximately **1,000,000 BTC** in the first year (refined to ~980,000 BTC in a follow-up post on April 24, 2013)
- Of 1,814,400 total BTC awarded in that period, 1,148,800 BTC remained unspent
- Block 1 was the first mined by this entity; Block 12 was the first mined by a different user
- Only about 100 BTC (two block rewards) from this entity appeared to have been spent

**The Nonce Mystery (September 2013):**
Lerner discovered that the entity's nonce values were restricted to specific byte ranges — the least significant byte was limited to values [0..9] ∪ [19..58], roughly 50 out of 256 possible values. This nonce space reduction explained why the entity appeared to mine ~4.3× faster than other miners.

**The "Patoshi" Pattern (April 2019):**
In "The Return of the Deniers and the Revenge of Patoshi," Lerner coined the term "Patoshi" for the pattern and updated his estimate to **~22,000 blocks / ~1.1 million BTC**. He provided new evidence: zero timestamp inversions between consecutive Patoshi blocks (versus 224 inversions among non-Patoshi blocks), proving the miner used a single PC clock.

**The Mining Machine (August 2020):**
In "The Patoshi Mining Machine," Lerner concluded that Patoshi used a **single high-end CPU with multi-threading** — not 50+ networked computers. The nonce space was divided into 5 subranges scanned by parallel threads, using a modified mining client (not stock Bitcoin v0.1) with likely SSE2 optimizations.

The Patoshi analysis remains one of the most significant pieces of blockchain forensics ever conducted. It established that Satoshi Nakamoto accumulated roughly 5% of Bitcoin's total 21 million supply — and chose never to spend it.
