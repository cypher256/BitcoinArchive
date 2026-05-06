---
title: "Bitcoin SV splits from Bitcoin Cash — Wright and Ayre's 'original protocol' chain (November 2018)"
date: 2018-11-15T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_SV"
author: "nChain / CoinGeek"
participants:
  - name: "Craig Wright"
    slug: "craig-wright"
description: "Bitcoin SV (Satoshi Vision) split from Bitcoin Cash on November 15, 2018, after a hash war between the Bitcoin ABC and Bitcoin SV factions. The SV chain restored larger blocks and 'original' opcodes."
isSatoshi: false
tags:
  - "fork"
  - "bitcoin-sv"
  - "bitcoin-cash"
  - "block-size"
  - "hash-war"
  - "craig-wright"
secondarySources:
  - name: "Coindesk — Bitcoin Cash Hard Fork: What You Need to Know"
    url: "https://www.coindesk.com/markets/2018/11/14/bitcoin-cash-hard-fork-what-you-need-to-know/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2024-03-14-copa-v-wright-ruling
---

On November 15, 2018, Bitcoin Cash split. The Bitcoin Cash blockchain — itself a [fork from Bitcoin in August 2017](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) — fractured into two competing chains: Bitcoin ABC (the existing client, which retained the BCH ticker) and Bitcoin SV (Satoshi Vision), led by [Craig Wright](/BitcoinArchive/participants/craig-wright/) and Calvin Ayre's nChain organization.

The dispute that produced the split was about the next protocol upgrade for Bitcoin Cash. Bitcoin ABC proposed a routine upgrade including Canonical Transaction Ordering (CTOR) and several new opcodes. Bitcoin SV — the nChain-backed implementation — proposed instead to:

- Increase the block-size cap from 32 MB to 128 MB
- Restore opcodes that had been disabled in earlier Bitcoin code (`OP_MUL`, `OP_LSHIFT`, `OP_RSHIFT`, etc.)
- Remove the per-transaction script-size limits

Wright and Ayre framed the SV proposal as restoring the "original Bitcoin protocol" as it would have existed had Satoshi's design not been altered. This framing was contested by most of the Bitcoin community, including by Bitcoin ABC's lead Amaury Séchet, who argued the changes were technically unsupported by Satoshi's actual public statements.

In the days leading to November 15, mining pools aligned with each side. CoinGeek (an Ayre-backed operation) and SVPool committed hashpower to the SV chain; Bitcoin.com (operated by Roger Ver) and Bitmain-backed pools supported ABC. The November 15 hard fork triggered a hash war: each side mined its own chain at competing hashrates, with the explicit threat that the larger-hashrate side would attack the smaller chain via reorganization.

The hash war did not produce the predicted reorganization. Both chains accumulated their own block history; exchanges (Coinbase, Bitfinex, Kraken) listed both as separate assets within days. By late November the BCH ticker remained on the Bitcoin ABC chain, and the SV ticker was created for the Bitcoin SV chain. The two chains have continued operating independently since.

Bitcoin SV's subsequent history was dominated by Craig Wright's protracted legal claim to be Satoshi Nakamoto. The claim was definitively rejected by the High Court of England and Wales in [COPA v Wright (March 14, 2024)](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/), which found Wright had forged documents and was not Satoshi. The BSV chain itself, however, is technically distinct from Wright's identity claim — the chain continues to operate as the parameter set chosen at the November 15, 2018 split, regardless of the COPA outcome.

The November 15, 2018 split is the second major fracture in the Bitcoin lineage, after the [August 1, 2017 Bitcoin Cash fork](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/). It is also the last protocol-fork chain in the Bitcoin family tree to have produced lasting network share. Subsequent forks (Bitcoin ABC's own 2020 split into BCH and BCHA, miscellaneous "Bitcoin Diamond" / "Super Bitcoin" launches) have produced thinly-traded niche chains rather than chains with substantive presence. The full sequence is recorded in [the Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).
