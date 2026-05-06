---
title: "Mike Belshe — HTTP/2 contributor, BitGo co-founder and CEO, signed and then cancelled the New York Agreement / SegWit2x"
date: 2013-10-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/BitGo"
sourceNote: "Belshe has no dedicated Wikipedia entry of his own; the BitGo company page is the closest stable institutional reference, and lists him as co-founder and CEO. The SegWit2x cancellation post under `secondarySources` is the canonical primary record of his most-public Bitcoin governance action."
author: "Bitcoin Institute"
participants:
  - name: "Mike Belshe"
    slug: "mike-belshe"
description: "American engineer. Pre-Bitcoin HTTP/2 (SPDY) contributor. Co-founded BitGo (2013) for institutional Bitcoin custody. Signed and then cancelled the New York Agreement / SegWit2x (November 2017)."
isSatoshi: false
tags:
  - "mike-belshe"
  - "biography"
  - "bitgo"
  - "custody"
  - "multisig"
  - "segwit2x"
  - "block-size-war"
secondarySources:
  - name: "BitGo — official site"
    url: "https://www.bitgo.com/"
  - name: "Mike Belshe — SegWit2x cancellation post (Bitcoin-segwit2x mailing list)"
    url: "https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html"
  - name: "Forbes — How BitGo Helped MakerDAO Make Bitcoin Tradable"
    url: "https://www.forbes.com/sites/michaeldelcastillo/2019/05/13/from-bitcoin-custody-to-defi-bitgos-mike-belshe-on-the-future-of-finance/"
relatedEntries:
  - aftermath/2017-11-08-segwit2x-cancellation
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
---

Mike Belshe is an American software engineer who, before his Bitcoin work, was a contributor to the SPDY protocol that became the basis for HTTP/2. In October 2013 he co-founded **BitGo** with Will O'Brien and Ben Davenport — one of the earliest companies to specialize in institutional Bitcoin custody and multisignature wallet technology. By 2017 BitGo was one of the principal infrastructure providers serving Bitcoin exchanges and corporate holders, which placed Belshe at the negotiating table for the New York Agreement and, ultimately, in the position to author its cancellation.

## Pre-Bitcoin: HTTP/2 / SPDY

Belshe's pre-Bitcoin software career included extensive work at Google on web-protocol improvements. He was a co-author of the SPDY protocol specification, which proposed multiplexing, header compression, and other transport-layer improvements over HTTP/1.1. SPDY was subsequently adopted as the foundation for HTTP/2, the protocol now in widespread use across the modern web.

## BitGo and Bitcoin custody (2013–)

In October 2013 Belshe co-founded BitGo. The company's product focus was multisignature wallet technology — specifically, 2-of-3 wallets that allowed institutional holders (exchanges, hedge funds, payment processors) to maintain custody of bitcoin without single-key exposure. BitGo's multisig SDK and HSM-backed signing service became standard infrastructure for the Bitcoin exchange industry through the mid-2010s; in 2016 the company was the technical backbone behind a substantial portion of Bitcoin's institutional custody market.

Belshe served as CEO from founding onward (with intermittent shifts in formal title). Through 2014–2016 BitGo expanded its custody offering to include hot-wallet management, key recovery procedures, and compliance tooling for regulated institutions. The company became one of the visible faces of "Bitcoin enterprise infrastructure" — the bridge between Bitcoin's trustless protocol and the operational requirements of regulated financial institutions.

## New York Agreement and SegWit2x (2017)

Belshe was one of the principal signatories of the [New York Agreement](https://en.wikipedia.org/wiki/SegWit2x) on May 23, 2017 at the Consensus 2017 conference. The agreement bundled two protocol commitments: activating Segregated Witness on the Bitcoin main chain (which shipped in August 2017), followed three months later by a hard-fork increase to a 2 MB block-size limit (the "2x" component). Belshe was particularly visible in the second half — the SegWit2x hard fork — as a representative of the major Bitcoin businesses that had signed the agreement.

By October 2017 it was clear that the SegWit2x hard fork would not have community-wide support. Bitcoin Core developers had been publicly opposed throughout, the user-activated soft fork (UASF) movement had demonstrated that node operators could enforce protocol rules independently of mining hashrate, and several major exchanges signaled they would not list a SegWit2x chain.

On November 8, 2017 — three days before the planned activation at block 494784 — Belshe posted the [SegWit2x cancellation message](/BitcoinArchive/entries/aftermath/2017-11-08-segwit2x-cancellation/) to the `bitcoin-segwit2x@lists.linuxfoundation.org` mailing list. The message was co-signed by five other principal signatories (Wences Casares, Jihan Wu, Jeff Garzik, Peter Smith, Erik Voorhees). The cancellation effectively ended the New York Agreement and closed the main-chain side of the [block-size war](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/).

## Significance to Bitcoin

Belshe's record matters in this archive for two reasons. First, BitGo's multisignature infrastructure is one of the foundational technical contributions that made Bitcoin viable for institutional holders during 2014–2018; without that custody layer, much of the corporate adoption that followed would have been operationally infeasible. Second, the November 8, 2017 cancellation message is the literal end of the New York Agreement — the moment at which the larger-block faction's main-chain campaign concluded, leaving Bitcoin Core's soft-fork-only protocol-evolution culture as the surviving model.

Belshe and BitGo continue to operate in the Bitcoin custody and digital-asset infrastructure space as of the most recent edit to this entry.
