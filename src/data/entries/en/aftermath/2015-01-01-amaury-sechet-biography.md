---
title: "Amaury Séchet — Bitcoin Core contributor, Bitcoin ABC lead developer, architect of the Bitcoin Cash hard fork"
date: 2015-01-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
author: "Bitcoin Institute"
participants:
  - name: "Amaury Séchet"
    slug: "amaury-sechet"
description: "French software engineer. Bitcoin Core contributor from ~2015, founded Bitcoin ABC, led the 2017 BCH hard fork, defended BCH in the 2018 BSV hash war, led the 2020 split into eCash."
isSatoshi: false
tags:
  - "amaury-sechet"
  - "biography"
  - "bitcoin-cash"
  - "bitcoin-abc"
  - "ecash"
  - "block-size-war"
secondarySources:
  - name: "Bitcoin ABC — official site"
    url: "https://www.bitcoinabc.org/"
  - name: "GitHub — deadalnix (Amaury Séchet)"
    url: "https://github.com/deadalnix"
  - name: "CoinDesk — Bitcoin Cash hard-fork lead developer Amaury Séchet"
    url: "https://www.coindesk.com/markets/2017/07/29/bitcoin-cash-hard-fork-the-week-ahead/"
relatedEntries:
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2018-11-15-bitcoin-sv-fork
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
---

Amaury Séchet (online handle `deadalnix`) is a French software engineer who spent the pre-Bitcoin portion of his career on the Facebook HHVM (HipHop Virtual Machine) team, contributed to Bitcoin Core from approximately 2015, and went on to be the lead developer of the Bitcoin ABC implementation that produced the [Bitcoin Cash hard fork](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) on August 1, 2017.

## Bitcoin Core contributions (2015–2017)

Séchet's GitHub history (`deadalnix`, linked under `secondarySources`) shows Bitcoin Core contributions from ~2015 onward, primarily in protocol-level code (consensus rules, P2P networking, and validation). He was active in the public discussions that became the [block-size war](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/), aligning with the larger-block faction. By 2016 he was visibly arguing in favour of an on-chain block-size increase rather than the SegWit-plus-layer-2 approach that the rest of Bitcoin Core was converging on.

## Bitcoin ABC and the Bitcoin Cash fork (2017)

Séchet founded **Bitcoin ABC** ("Adjustable Blocksize Cap") in mid-2017 as a clean-room implementation that would activate the larger-block fork without requiring the Bitcoin Core development team's cooperation. Bitcoin ABC software is what mining pools and nodes ran to produce the August 1, 2017 fork at block 478558. Séchet was the lead developer through this period — designing the SIGHASH_FORKID replay-protection scheme, the Emergency Difficulty Adjustment (EDA) algorithm that allowed the new chain to maintain block production with minority hashrate, and the post-fork governance / development structure.

## Hash war with Bitcoin SV (2018)

In November 2018 the BCH community fractured over a proposed protocol upgrade. Séchet led the Bitcoin ABC side; [Craig Wright and Calvin Ayre's nChain](/BitcoinArchive/entries/aftermath/2018-11-15-bitcoin-sv-fork/) led a counter-proposal (Bitcoin SV) with 128 MB blocks and "restored original opcodes." The two sides committed competing hashpower at the November 15 fork point, producing a hash-war scenario where each chain's continued survival depended on whether reorganization attacks could be staged. The result was a permanent split: BCH (Bitcoin ABC's chain) retained the BCH ticker, BSV continued separately under the new SV ticker.

## Bitcoin Cash ABC split and eCash (2020–2021)

In November 2020 Séchet led another split — this time within BCH itself — over a proposed 8% miner-fund tax (an "Infrastructure Funding Plan" that would direct a portion of mining rewards to development funding). Most BCH miners and most of the broader BCH community rejected the proposal; Séchet and the Bitcoin ABC team forked off into a separate chain initially called Bitcoin Cash ABC (BCHA), which was later rebranded as eCash (XEC) in mid-2021. The original BCH chain continued under different lead developers; Séchet's post-2020 work has been on eCash and adjacent projects.

## Significance to Bitcoin

Séchet's record matters in this archive primarily as the technical lead of the 2017 BCH hard fork — the only Bitcoin protocol fork that produced a chain with substantive surviving network share. The replay-protection and difficulty-adjustment mechanisms he designed are what allowed BCH to launch viably at all, and they have since been studied and adapted in other contentious-fork events. The 2018 BSV hash war and the 2020 BCHA / eCash split are downstream events in the same lineage and are documented in the related entries linked above.
