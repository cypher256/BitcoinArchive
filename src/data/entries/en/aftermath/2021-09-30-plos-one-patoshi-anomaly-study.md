---
title: "PLOS ONE publishes peer-reviewed study confirming Patoshi mining anomalies across Bitcoin's first 18 months"
date: 2021-09-30T00:00:00Z
source: aftermath
sourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258001"
author: "Maria Oskarsdottir"
participants:
  - name: "Maria Oskarsdottir"
    slug: "maria-oskarsdottir"
  - name: "Jacky Mallett"
    slug: "jacky-mallett"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Reykjavik University researchers publish the first peer-reviewed academic study of the Patoshi pattern in PLOS ONE. The paper identifies two distinct nonce anomalies — the 'P anomaly' (extended Patoshi) and the 'Z anomaly' (zerononce) — and crucially finds that the P anomaly appears in ALL of the first 64 blocks mined, including Block 12 which was previously classified as non-Patoshi by ExtraNonce analysis."
isSatoshi: false
aftermathType: "academic"
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "blockchain-forensics"
  - "academic"
  - "peer-review"
secondarySources:
  - name: "PubMed (PMID: 34591921)"
    url: "https://pubmed.ncbi.nlm.nih.gov/34591921/"
  - name: "PMC Full Text (PMC8483420)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8483420/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
---

On September 30, 2021, Maria Oskarsdottir and Jacky Mallett of Reykjavik University's Department of Computer Science published "Strangely mined bitcoins: Empirical analysis of anomalies in the bitcoin blockchain transaction network" in PLOS ONE (DOI: 10.1371/journal.pone.0258001). This was the first peer-reviewed academic paper to formally analyze the Patoshi mining pattern originally identified by Sergio Demian Lerner on his blog in 2013.

**Two distinct anomalies identified:**

The paper identified two independent nonce anomalies in Bitcoin's coinbase transactions:

1. **P Anomaly (Extended Patoshi anomaly):** The first hexadecimal nibble of the block nonce shows a disproportionate number of values in the range 0–3, when values should be uniformly distributed across 0–F. This is an extension and formalization of Lerner's original nonce LSB analysis.

2. **Z Anomaly (Zerononce anomaly):** The penultimate position of the nonce shows an abnormal number of zeros in the first 18 months of mining.

**Critical finding — the first 64 blocks:**

The paper's most significant finding for the Patoshi debate was that **the extended Patoshi anomaly in the first nibble of the nonce appears in ALL of the first 64 blocks mined**. This is notable because Lerner's original 2013 ExtraNonce-based classification identified Block 12 as the first block mined by a "different user" based on its divergent ExtraNonce slope.

The PLOS ONE finding means Block 12 exhibits the Patoshi nonce signature despite having a different ExtraNonce pattern. This is most consistently explained by Satoshi running both the custom Patoshi mining software and the standard Bitcoin v0.1 client simultaneously — the nonce partitioning signature persists across both configurations, while the ExtraNonce increment behavior differs.

**Scale of the anomalies:**

The paper found that approximately one third of all coins mined at the first difficulty level came from blocks exhibiting these anomalies. Across the full study period extending through 2018, well over 3 million bitcoins were obtained from blocks with distinguishing nonce features (this larger number includes the Z anomaly and extended periods beyond the original Patoshi analysis scope).

**Significance:**

As the first peer-reviewed academic study of Patoshi mining, this paper elevated the discussion from blog posts and community analysis to formal academic literature. Its finding that all 64 initial blocks share the Patoshi nonce fingerprint strengthened the case that the early non-Patoshi blocks (by ExtraNonce classification) were still mined by Satoshi, not by other participants.
