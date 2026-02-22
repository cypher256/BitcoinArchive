---
title: "Value overflow incident — 184 billion BTC created in Block 74638"
date: 2010-08-15T18:08:00Z
source: aftermath
sourceUrl: "https://bitcointalk.org/index.php?topic=822.0"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "An integer overflow bug (CVE-2010-5139) was exploited to create 184,467,440,737.09551616 BTC in a single transaction in Block 74638. Satoshi Nakamoto published a fix within 5 hours, and the corrected chain overtook the invalid chain within 15 hours — the most serious crisis in Bitcoin's history."
isSatoshi: false
aftermathType: "retrospective"
tags:
  - "overflow-bug"
  - "block-74638"
  - "CVE-2010-5139"
  - "security"
  - "soft-fork"
  - "historic"
secondarySources:
  - name: "Bitcoin Wiki — Value overflow incident"
    url: "https://en.bitcoin.it/wiki/Value_overflow_incident"
  - name: "Blockchain Explorer — Block 74638"
    url: "https://www.blockchain.com/explorer/blocks/btc/74638"
  - name: "Decrypt — The Day Someone Created 184 Billion Bitcoin"
    url: "https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator"
---

On August 15, 2010, at approximately 18:08 UTC, Bitcoin developer Jeff Garzik noticed an anomaly in Block 74638 and posted on the BitcoinTalk forum:

> Strange block 74638 — 92233720368.54277039 BTC? Is that UINT64_MAX, I wonder?

A single transaction in Block 74638 had created **184,467,440,737.09551616 BTC** — two outputs of 92,233,720,368.54277039 BTC each — approximately 9,000 times Bitcoin's total intended supply of 21 million BTC.

**The bug:** The transaction validation code checked that individual outputs were non-negative, but did not check for integer overflow when summing outputs. Two outputs near the maximum value of a 64-bit signed integer (INT64_MAX ≈ 9.2 × 10¹⁸) would overflow to a negative value when added together, passing the validation check: 0.5 BTC input ≥ -0.01 BTC output (after overflow).

**The response:** Within approximately five hours of discovery, Satoshi published Bitcoin version 0.3.10 containing a soft fork that added two new checks to `CheckTransaction()`:

1. Each individual output must not exceed MAX_MONEY (21,000,000 BTC)
2. The sum of all outputs must not exceed MAX_MONEY

Satoshi posted on IRC: "URGENT: Critical overflow bug fixed. Everyone please upgrade immediately to 0.3.10."

**The resolution:** The corrected chain overtook the invalid chain at Block 74691, approximately 15 hours after the incident. The 184 billion BTC were effectively erased from the blockchain's accepted history.

The incident exposed a fundamental paradox: a decentralized system had been saved by centralized decision-making. The community followed Satoshi's instructions without question — "Satoshi says so, it must be right." This contradiction would weigh heavily on Satoshi in the months that followed.
