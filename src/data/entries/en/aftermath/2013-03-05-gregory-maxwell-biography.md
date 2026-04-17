---
title: "Gregory Maxwell (dates unknown) — Blockstream co-founder and designer of CoinJoin and Confidential Transactions"
date: 2013-03-05T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Blockstream"
author: "Gregory Maxwell"
participants:
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
description: "Gregory Maxwell (gmaxwell): Long-time Bitcoin Core contributor, co-founder of Blockstream in 2014, and co-developer of the libsecp256k1 library that replaced OpenSSL as Bitcoin's ECDSA backend. Authored the CoinJoin privacy construction and co-designed Confidential Transactions. Known throughout the Bitcoin community for deeply technical write-ups on BitcoinTalk and IRC."
isSatoshi: false
tags:
  - "gregory-maxwell"
  - "biography"
  - "bitcoin-core"
  - "blockstream"
  - "coinjoin"
  - "confidential-transactions"
  - "libsecp256k1"
  - "historic"
secondarySources:
  - name: "Blockstream — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Blockstream"
relatedEntries:
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - aftermath/2011-03-17-pieter-wuille-biography
---

Gregory Maxwell, known online as **gmaxwell**, is a long-time Bitcoin Core contributor whose personal biographical details are not widely published. He rose to prominence through years of technically dense writing on BitcoinTalk, IRC, and the Bitcoin Core GitHub repository, and for co-founding [Blockstream](https://en.wikipedia.org/wiki/Blockstream) with [Adam Back](/BitcoinArchive/participants/adam-back/) and others in 2014.

**libsecp256k1:**
Shortly after [Pieter Wuille](/BitcoinArchive/participants/pieter-wuille/) started the [libsecp256k1 library](/BitcoinArchive/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/) on March 5, 2013, Maxwell joined the effort. Under their joint work the library expanded from a performance experiment into a purpose-built replacement for OpenSSL's secp256k1 implementation, shipping as the default backend in Bitcoin Core v0.12 on January 15, 2016.

**CoinJoin and Confidential Transactions:**
Maxwell's most widely cited privacy contributions are the **CoinJoin** construction — a method for combining multiple users' payments into one transaction to break simple input-to-output heuristics — and **Confidential Transactions**, a scheme that hides transaction amounts behind Pedersen commitments while preserving verifiability of conservation of value. Neither design has been deployed on Bitcoin's base layer, but they have informed a generation of Bitcoin privacy work (Wasabi, JoinMarket, Liquid) and the broader cryptocurrency-privacy literature.

**Blockstream:**
In 2014 Maxwell co-founded Blockstream, a Bitcoin infrastructure company, with [Adam Back](/BitcoinArchive/participants/adam-back/), [Pieter Wuille](/BitcoinArchive/participants/pieter-wuille/), and others. Blockstream has been associated with sidechain work (Liquid), satellite block delivery, and continued Bitcoin Core engineering.

**Significance:**
Maxwell sits at the intersection of Bitcoin's cryptographic engineering and its developer culture: a prolific reviewer, a teacher of subtle protocol mechanics in long-form forum and mailing-list posts, and one of the authors of the libraries and primitives that the modern Bitcoin stack relies on. His privacy constructions in particular sketched out much of what Bitcoin "could" be at the confidentiality layer, even when the base protocol itself chose not to incorporate them.
