---
title: "Bitcoin Cash splits at block 478558 — the block-size war's first surviving fork (August 2017)"
date: 2017-08-01T12:37:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
author: "Bitcoin ABC project"
participants:
  - name: "Roger Ver"
    slug: "roger-ver"
  - name: "Jihan Wu"
    slug: "jihan-wu"
  - name: "Amaury Séchet"
    slug: "amaury-sechet"
description: "Bitcoin Cash forked from Bitcoin at block 478558, mined by ViaBTC around 12:37 UTC. The 8 MB, no-SegWit chain became the first protocol fork to leave a lasting separate network."
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-cash"
  - "block-size"
  - "block-size-war"
  - "scaling"
  - "hard-fork"
  - "segwit"
secondarySources:
  - name: "Bitcoin Cash — block 478558 explorer view"
    url: "https://blockchair.com/bitcoin-cash/block/478558"
  - name: "Coindesk — Bitcoin Cash Hard Fork: Currency Up and Running"
    url: "https://www.coindesk.com/markets/2017/08/02/bitcoin-cash-hard-fork-cryptocurrency-now-up-and-running/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-11-08-segwit2x-cancellation
  - aftermath/2018-11-15-bitcoin-sv-fork
  - bip/2015-12-21-bip-0141
  - aftermath/2011-04-01-roger-ver-biography
  - aftermath/2011-08-01-jihan-wu-biography
  - aftermath/2015-01-01-amaury-sechet-biography
---

On August 1, 2017, the Bitcoin chain split. At block 478558 — mined by the ViaBTC mining pool at approximately 12:37 UTC — clients running Bitcoin ABC software accepted a block that exceeded the 1 MB size limit, creating a new chain that diverged from the Bitcoin main chain. The new chain was named Bitcoin Cash (BCH).

The split was the long-anticipated rupture of the block-size war that had been building since the [Bitcoin XT launch](/BitcoinArchive/entries/aftermath/2015-08-15-bitcoin-xt-launch/) in August 2015. After two years of failed activation attempts (XT, Classic, Unlimited) and a collapsed compromise (the New York Agreement), the larger-block faction split off into its own chain rather than continuing to contest the main chain.

Bitcoin Cash's launch parameters:

- **Block size:** 8 MB initial cap (raised to 32 MB in May 2018)
- **SegWit:** rejected; the on-chain block size was treated as the only legitimate scaling lever
- **Difficulty adjustment:** modified Emergency Difficulty Adjustment (EDA) to allow the small new chain to mine blocks despite minority hashrate
- **Replay protection:** SIGHASH_FORKID flag, so transactions on one chain were not valid on the other

The figureheads behind the BCH launch were [Roger Ver](https://en.wikipedia.org/wiki/Roger_Ver) (early Bitcoin investor and operator of bitcoin.com), Jihan Wu (co-founder of the Bitmain mining hardware company), and Amaury Séchet (lead developer of Bitcoin ABC). Each contributed to a different layer of the launch — Ver to the public-facing branding, Wu to the mining-pool support, Séchet to the protocol implementation.

Bitcoin Cash survived the launch event. Within hours of the fork, BCH had its own block production, exchange listings (Bitfinex, ViaBTC, Kraken), and price discovery (~$300 initial trading). Unlike Bitcoin XT, Bitcoin Classic, and Bitcoin Unlimited — all of which collapsed without producing a separate persistent chain — BCH's deliberate hard-fork approach left a separate network that has continued operating to the present day.

The BCH community itself split a year later. On November 15, 2018, a hash war between the Bitcoin ABC and Bitcoin SV factions produced [the Bitcoin SV fork](/BitcoinArchive/entries/aftermath/2018-11-15-bitcoin-sv-fork/), with the SV chain continuing as a separate network. The original BCH chain has subsequently undergone further protocol changes (Cash Tokens, Adaptive Blocksize Limit Algorithm) but has remained smaller in network share than the main Bitcoin chain throughout.

The August 1, 2017 split is the chronological closure of the block-size war: the disputed parameter (block size) was resolved by chain separation rather than chain consensus. The main chain went on to activate Segregated Witness on August 24, 2017 — three weeks after the BCH fork — and the Lightning Network and later Taproot followed on the main chain's soft-fork path. The full sequence is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).
