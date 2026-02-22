---
title: "The alternative genesis block — Satoshi's pre-release test block from September 2008"
date: 2022-10-06T00:00:00Z
source: aftermath
sourceUrl: "https://serhack.me/articles/story-behind-alternative-genesis-block-bitcoin/"
author: "SerHack"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "SerHack published an analysis of a pre-release Bitcoin genesis block dated September 10, 2008 — discovered in source code Satoshi shared privately in November 2008. The test block had a completely different hash, trivially easy difficulty, and an initial block reward of 10,000 units. The September 10 date coincides with Lehman Brothers announcing $3.9 billion in losses."
isSatoshi: false
aftermathType: "blog"
tags:
  - "genesis-block"
  - "pre-release"
  - "alternative-genesis"
  - "ray-dillinger"
  - "lehman-brothers"
  - "source-code"
secondarySources:
  - name: "BitcoinTalk — 'Bitcoin source from November 2008' by Cryddit (December 23, 2013)"
    url: "https://bitcointalk.org/index.php?topic=382374.0"
  - name: "Bitcoin Wiki — Genesis block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
---

On October 6, 2022, security researcher SerHack published "The Story Behind the Alternative Genesis Block of Bitcoin," analyzing a pre-release version of Bitcoin's genesis block that predated the official launch by nearly four months.

**Discovery:**
On December 23, 2013, BitcoinTalk user "Cryddit" (Ray Dillinger, aka Bear) posted source code that Satoshi Nakamoto had shared with him privately in November 2008 for a security audit. Dillinger reviewed the blockchain code while Hal Finney reviewed the scripting language. The code contained a genesis block with entirely different parameters from the one that launched on January 3, 2009.

**The Pre-Release Genesis Block:**

| Parameter | Pre-Release (Sept 2008) | Official (Jan 2009) |
|---|---|---|
| Timestamp | `1221069728` (Sept 10, 2008 18:02:08 UTC) | `1231006505` (Jan 3, 2009 18:15:05 UTC) |
| Hash | `0x000006b15d1327d67e...` | `0x000000000019d6689c...` |
| Difficulty (nBits) | 20 ("ridiculously easy") | `0x1d00ffff` (Difficulty 1) |
| Nonce | 141,755 | 2,083,236,893 |
| Block Reward | 10,000 units ("cents") | 50 BTC |

**Connection to the Financial Crisis:**
The pre-release genesis block's timestamp of September 10, 2008, coincides with the day Lehman Brothers announced approximately $3.9 billion in quarterly losses. Lehman Brothers filed for bankruptcy five days later on September 15, 2008. This suggests Satoshi was developing Bitcoin with the unfolding financial crisis as direct motivation — even before the whitepaper's publication on October 31, 2008.

**Other Pre-Release Differences:**
The November 2008 code also contained an early IRC client framework, a peer-to-peer marketplace, and a virtual poker game — features that were removed before the January 2009 public release. The total supply under the pre-release parameters (10,000 units per block) would have been approximately 1.99 billion bitcoin.
