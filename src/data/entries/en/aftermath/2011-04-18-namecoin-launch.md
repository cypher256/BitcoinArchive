---
title: "Namecoin launches as the first altcoin — Vincent Durham realizes the BitDNS proposal (April 2011)"
date: 2011-04-18T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Namecoin"
author: "Vincent Durham"
participants: []
description: "Vincent Durham launched Namecoin on April 18, 2011 — the first altcoin and first fork of the Bitcoin codebase. It implemented the BitDNS proposal as a decentralized name registration system."
isSatoshi: false
tags:
  - "altcoin"
  - "namecoin"
  - "bitdns"
  - "fork"
  - "merge-mining"
secondarySources:
  - name: "Namecoin — official site"
    url: "https://www.namecoin.org/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-10-13-litecoin-launch
  - aftermath/2013-12-06-dogecoin-launch
---

On April 18, 2011, Vincent Durham — a developer using the BitcoinTalk handle `vinced` — released the genesis block of Namecoin, the first altcoin and the first known fork of the Bitcoin codebase to produce a separate functioning network.

Namecoin's design started in the [BitDNS thread on BitcoinTalk](/BitcoinArchive/entries/forum/bitcointalk/topic-1790/2010-11-14-bitdns-and-generalizing-bitcoin/), opened on November 14, 2010 by user `appamatto`. The thread proposed extending Bitcoin to act as a decentralized name registration system — a replacement for centralized DNS registries that could not be censored or seized. [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) himself participated in the thread, suggesting that BitDNS could be implemented as a separate chain that shared mining work with Bitcoin (the technique later known as merge-mining).

Durham took the proposal further than the thread anticipated. Rather than waiting for Bitcoin Core to incorporate naming functionality, he forked the Bitcoin v0.3 codebase, added a name-registration transaction type (`name_new`, `name_firstupdate`, `name_update`), and launched the network as an independent chain on April 18, 2011.

Namecoin's launch parameters:

- **Codebase:** Bitcoin v0.3 fork with name-record opcodes added
- **Supply:** 21 million NMC, same emission curve as Bitcoin
- **Block time:** 10 minutes (same as Bitcoin)
- **Proof-of-work:** SHA-256 (same as Bitcoin)
- **Merge-mining:** Enabled at block 19,200 (October 2011) — Bitcoin miners could mine Namecoin in parallel without additional hashrate

The merge-mining capability was Namecoin's most influential design choice. Because it added no marginal cost for Bitcoin miners, Namecoin could borrow Bitcoin's hashrate as security, rather than building its own from scratch. Subsequent altcoins that wanted Bitcoin-level security without competing for hashrate adopted the same approach.

Namecoin's primary functional output was the `.bit` top-level domain — a censorship-resistant naming space accessible via a Namecoin-aware DNS resolver. Adoption remained niche; mainstream browsers never integrated `.bit` resolution, and most users never encountered Namecoin names in normal browsing. The system continues to operate, with reduced active development since approximately 2018.

Namecoin's significance is structural rather than economic. It established the pattern that any sufficiently motivated developer could fork Bitcoin's codebase, modify the rules, and launch a separate chain — the pattern that would produce hundreds of subsequent altcoins, including [Litecoin](/BitcoinArchive/entries/aftermath/2011-10-13-litecoin-launch/) six months later. The full sequence of Bitcoin-derived chains is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).
