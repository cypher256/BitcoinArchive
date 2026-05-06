---
title: "Bitcoin XT launches the block-size war — Hearn and Andresen propose 8 MB blocks (August 2015)"
date: 2015-08-15T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_XT"
author: "Mike Hearn"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Mike Hearn and Gavin Andresen released Bitcoin XT 0.11A, a Bitcoin Core fork implementing BIP 101 — 8 MB blocks doubling every two years. The launch opened the public phase of the block-size war."
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-xt"
  - "block-size"
  - "block-size-war"
  - "scaling"
  - "bip-101"
secondarySources:
  - name: "BIP 101 — Increase maximum block size"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki"
  - name: "Coindesk — Mike Hearn and Gavin Andresen Just Forked Bitcoin"
    url: "https://www.coindesk.com/markets/2015/08/15/mike-hearn-and-gavin-andresen-just-forked-bitcoin/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment
  - bip/2015-12-21-bip-0141
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2017-11-08-segwit2x-cancellation
---

On August 15, 2015, [Mike Hearn](/BitcoinArchive/participants/mike-hearn/) released Bitcoin XT version 0.11A, a fork of Bitcoin Core that implemented [BIP 101](https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki). [Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/), then the lead Bitcoin Core maintainer, had authored BIP 101 two months earlier and supported the XT release.

BIP 101 proposed raising Bitcoin's 1 MB block-size limit to 8 MB starting January 11, 2016, and doubling every two years thereafter, reaching 8 GB by 2036. Activation required a 75% supermajority of mined blocks signaling support over a 1,000-block window.

The launch was the public-fork phase of a dispute that had been building since 2013, when block fullness first became a recurring concern. Hearn and Andresen argued that the 1 MB limit — added by [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) in September 2010 as a temporary anti-spam measure — would soon throttle Bitcoin's ability to confirm transactions, and that a hard fork to a larger limit was the only credible path to scaling. Their critics — most prominently the Bitcoin Core developers led by Gregory Maxwell, Pieter Wuille, and Wladimir van der Laan — argued that a contentious hard fork would split the network, that scaling could be achieved via off-chain layers and protocol upgrades like Segregated Witness, and that BIP 101's growth schedule risked centralizing node operation to a small set of well-resourced operators.

Bitcoin XT briefly attracted around 1,000 nodes in late 2015 but never approached the 75% activation threshold. By January 2016, node count had collapsed below 30, and Hearn published ["The resolution of the Bitcoin experiment"](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/), declaring Bitcoin had failed and selling all his coins. XT continued to exist as a small network but was effectively dead as a competitor to Bitcoin Core.

The block-size war did not end with XT. [Bitcoin Classic](https://en.wikipedia.org/wiki/Bitcoin_Classic) launched in February 2016 with a similar 2 MB proposal; Bitcoin Unlimited followed in October 2016 with a flexible miner-driven approach; the [New York Agreement](https://en.wikipedia.org/wiki/SegWit2x) in May 2017 attempted a SegWit + 2 MB compromise; and the dispute culminated in the [Bitcoin Cash hard fork](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) on August 1, 2017. The full sequence is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).

The XT launch is the chronological start of the public-fork phase of the dispute. Earlier disagreement existed in mailing-list and BitcoinTalk threads, but August 15, 2015 is the date a Bitcoin Core fork was released as production software, with installable binaries and a published activation schedule.
