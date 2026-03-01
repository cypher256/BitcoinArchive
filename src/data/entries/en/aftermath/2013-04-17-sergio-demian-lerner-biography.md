---
title: "Sergio Demian Lerner (1972–) — Blockchain researcher who discovered the Patoshi mining pattern"
date: 2013-04-17T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
author: "Sergio Demian Lerner"
participants:
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Sergio Demian Lerner: Argentine cryptographer and blockchain researcher who conducted the most significant blockchain forensic analysis in Bitcoin's history — the 'Patoshi' analysis. His work identified a single dominant miner in Bitcoin's earliest blocks, attributed to Satoshi Nakamoto, who accumulated approximately 1.1 million BTC and never spent them."
isSatoshi: false
aftermathType: "biography"
tags:
  - "sergio-demian-lerner"
  - "biography"
  - "patoshi"
  - "blockchain-forensics"
  - "mining"
  - "satoshi-fortune"
  - "historic"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — A New Mystery about Satoshi (September 3, 2013)"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
---

Sergio Demian Lerner is an Argentine cryptographer and blockchain researcher. He publishes his research on his blog Bitslog (bitslog.com) and is known for conducting the most important blockchain forensic analysis in Bitcoin's history.

**First Patoshi Analysis (April 2013):**
On April 17, 2013, Lerner published "The Well Deserved Fortune of Satoshi Nakamoto" — the first systematic analysis of Bitcoin's earliest mining patterns. By tracking the ExtraNonce field in coinbase transactions across the first 36,288 blocks, he identified a single entity that had mined approximately 1 million BTC in Bitcoin's first year. Virtually none of these coins had ever been spent.

**Nonce LSB Discovery (September 2013):**
Five months later, Lerner discovered a second, independent fingerprint. The least significant byte (LSB) of nonce values in the dominant miner's blocks was restricted to approximately 50 out of 256 possible values — a pattern consistent with custom mining software that partitioned the nonce search space across parallel threads. This proved the miner used modified software, not the standard Bitcoin client.

**"Patoshi" Naming (April 2019):**
In "The Return of the Deniers and the Revenge of Patoshi," Lerner coined the term "Patoshi" — a portmanteau of "Pattern" and "Satoshi" — which became the standard reference in all subsequent research. He updated his estimate to approximately 22,000 blocks and 1.1 million BTC. His timestamp inversion analysis provided near-mathematical proof: zero inversions between consecutive Patoshi blocks versus 224 among non-Patoshi blocks, proving the use of a single PC clock.

**The Mining Machine (August 2020):**
Lerner concluded that the Patoshi miner used a single high-end CPU with multi-threading — not 50+ networked computers. The nonce space was divided into 5 subranges scanned by parallel threads, with likely SSE2 optimizations. The machine appeared approximately 4.3 times faster than any other early miner.

**Significance:**
Lerner's research established that Satoshi Nakamoto accumulated roughly 5% of Bitcoin's total 21 million supply — and chose never to spend it. This finding has profound implications for Bitcoin's economics, Satoshi's motivations, and the interpretation of early Bitcoin history. His work has been independently verified and extended by multiple researchers.
