---
title: "Pieter Wuille (dates unknown) — Bitcoin Core developer behind BIP-32, libsecp256k1, SegWit, and Taproot"
date: 2011-03-17T21:58:07Z
type: "biography"
source: "github"
sourceUrl: "https://github.com/sipa"
author: "Pieter Wuille"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
description: "Pieter Wuille (sipa): Belgian software engineer, Bitcoin Core committer since May 2011, and author or co-author of four of the most consequential Bitcoin Improvement Proposals — BIP-32 (HD wallets, 2012), BIP-141 (SegWit, 2015), BIP-340 (Schnorr, 2020), and BIP-341 (Taproot, 2020). Initiator of the libsecp256k1 library that replaced OpenSSL as Bitcoin's ECDSA backend in 2016. Co-founder of Blockstream."
isSatoshi: false
tags:
  - "pieter-wuille"
  - "biography"
  - "bitcoin-core"
  - "libsecp256k1"
  - "segwit"
  - "taproot"
  - "bip-32"
  - "historic"
secondarySources:
  - name: "Pieter Wuille on GitHub"
    url: "https://github.com/sipa"
  - name: "Who Controls Bitcoin Core? — Jameson Lopp"
    url: "https://blog.lopp.net/who-controls-bitcoin-core/"
relatedEntries:
  - aftermath/2013-03-05-gregory-maxwell-biography
  - bip/2012-02-11-bip-0032
  - bip/2015-12-21-bip-0141
  - bip/2020-01-19-bip-0340
  - bip/2020-01-19-bip-0341
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - aftermath/2011-09-13-bitcoin-github-migration-committers
---

Pieter Wuille, widely known by his GitHub and IRC handle **sipa**, is a Belgian software engineer who became one of the most productive and influential Bitcoin Core contributors. His personal biographical details beyond his public professional work are not in wide circulation.

**Early Contributions (2011):**
Wuille's first archived contribution is [PR #122 on March 17, 2011](/BitcoinArchive/entries/forum/github/pr-122/2011-03-17-pr-122-spent-per-txout/) — a wallet-structure change to track spentness per transaction output, enabling partially-spent transactions. On May 1, 2011, [Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/) granted him [GitHub commit access](/BitcoinArchive/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/), making him the second long-term maintainer after Andresen himself and before [Wladimir van der Laan](/BitcoinArchive/participants/wladimir-van-der-laan/).

**Bitcoin Improvement Proposals:**
Wuille authored or co-authored four BIPs that between them cover a remarkable share of Bitcoin's post-Satoshi evolution:

- **[BIP-32](/BitcoinArchive/entries/bip/2012-02-11-bip-0032/)** (2012) — Hierarchical Deterministic Wallets. Eliminated the "frequent wallet backup" problem by deriving an entire key tree from a single master seed. The foundation of every modern Bitcoin wallet.
- **[BIP-141](/BitcoinArchive/entries/bip/2015-12-21-bip-0141/)** (2015, with Eric Lombrozo and Johnson Lau) — Segregated Witness. Fixed transaction malleability, enabled Lightning, and raised effective block capacity.
- **[BIP-340](/BitcoinArchive/entries/bip/2020-01-19-bip-0340/)** (2020) — Schnorr signatures for secp256k1.
- **[BIP-341](/BitcoinArchive/entries/bip/2020-01-19-bip-0341/)** (2020) — Taproot, activated November 2021.

**libsecp256k1:**
On March 5, 2013, Wuille started [libsecp256k1](/BitcoinArchive/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/), initially as a performance experiment around the GLV-method endomorphism. [Gregory Maxwell](/BitcoinArchive/participants/gregory-maxwell/) soon joined, and the library grew into a full purpose-built replacement for OpenSSL's secp256k1 implementation. It shipped as the default backend in Bitcoin Core v0.12 on January 15, 2016.

**Blockstream and Chaincode Labs:**
Wuille was a co-founder of Blockstream in 2014 alongside Gregory Maxwell and others, and later joined Chaincode Labs. Throughout, he has remained among the most consistent Bitcoin Core reviewers and cryptographic designers.

**Significance:**
Between the four BIPs and libsecp256k1, Wuille's direct design work underpins the way every modern Bitcoin wallet derives keys, every modern transaction verifies signatures, every modern payment can escape on-chain malleability, and every Taproot output achieves its privacy and script flexibility. Few post-Satoshi contributors have had so broad a surface of influence on the protocol itself.
