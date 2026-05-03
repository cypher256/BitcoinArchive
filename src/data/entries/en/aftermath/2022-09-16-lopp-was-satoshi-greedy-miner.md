---
title: "Jameson Lopp analyzes whether Satoshi Nakamoto was a 'greedy' miner"
date: 2022-09-16T00:00:00Z
type: "article"
source: "lopp-blog"
sourceUrl: "https://blog.lopp.net/was-satoshi-a-greedy-miner/"
author: "Jameson Lopp"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Jameson Lopp"
    slug: "jameson-lopp"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Jameson Lopp shows Satoshi deliberately throttled mining capacity, earning ~1.1M BTC when full capacity could have yielded ~2.19M BTC. Anyone claiming Satoshi was greedy hasn't done the math."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "hashrate"
  - "decentralization"
  - "incentives"
secondarySources:
  - name: "Sergio Demian Lerner — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Sergio Demian Lerner — The Patoshi Mining Machine (2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - "analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery"
  - "aftermath/2019-04-16-sergio-lerner-patoshi-naming"
  - "aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine"
  - "aftermath/2021-09-30-plos-one-patoshi-anomaly-study"
  - "aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis"
  - "analysis/2009-01-10-satoshi-launch-environment"
  - "aftermath/2023-10-21-lopp-hal-finney-not-satoshi"
translationStatus: complete
---

On September 16, 2022, Jameson Lopp published "Was Satoshi a Greedy Miner?" on his blog, directly challenging the narrative that [Bitcoin's creator](/BitcoinArchive/participants/satoshi-nakamoto/) selfishly hoarded coins during the network's early days.

**Key data points:**

- Satoshi mined approximately **1,100,000 BTC** (~5% of total supply) across ~22,000 blocks over 14 months
- Maximum hashrate capacity: **6 Mhps** — actual observed rate: **4.35 Mhps**
- Satoshi controlled >50% of network hashrate but voluntarily decreased mining power in October 2009
- Only **0.09%** of Satoshi's blocks were ever spent
- Fewer than 5 minutes elapsed between Satoshi's consecutive blocks, suggesting intentional pausing between mining rounds

**Counterfactual analysis:**

Lopp models two alternative scenarios:
1. **Full capacity (no pauses):** Mining continuously at observed 4.35 Mhps would have yielded ~**31,783 blocks / ~1.59 million BTC** — approximately 1.5× the actual amount
2. **Maximum capacity:** Mining at the machine's full 6 Mhps would have yielded ~**43,829 blocks / ~2.19 million BTC** — nearly 2× the actual amount

The ~300-second pauses between consecutive blocks and the deliberate use of only 72.5% of available hashrate demonstrate that Satoshi prioritized network bootstrapping and decentralization over personal enrichment.

Building on [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/)'s Patoshi pattern research, Lopp's analysis provided quantitative evidence that Satoshi's mining behavior was altruistic rather than extractive. The article concludes: "Anyone who claims that Satoshi was greedy simply hasn't done the math."
