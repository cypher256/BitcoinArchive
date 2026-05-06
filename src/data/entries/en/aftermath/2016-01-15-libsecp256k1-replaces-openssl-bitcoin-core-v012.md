---
title: "libsecp256k1 replaces OpenSSL for consensus in Bitcoin Core v0.12"
date: 2016-01-15T00:00:00Z
type: "article"
source: "bitcoin-core"
sourceUrl: "https://github.com/bitcoin/bitcoin/blob/v0.12.0/doc/release-notes.md"
author: "Bitcoin Institute"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "On January 15, 2016, Bitcoin Core v0.12 replaced OpenSSL with libsecp256k1 — Wuille and Maxwell's custom elliptic-curve library — for consensus-critical ECDSA verification."
isSatoshi: false
tags:
  - "pieter-wuille"
  - "gmaxwell"
  - "libsecp256k1"
  - "openssl"
  - "bitcoin-core"
  - "cryptography"
  - "consensus"
  - "code-quality"
secondarySources:
  - name: "Bitcoin Magazine — The Core Issue: libsecp256k1, Bitcoin's Cryptographic Heart"
    url: "https://bitcoinmagazine.com/print/the-core-issue-libsecp256k1-bitcoins-cryptographic-heart"
  - name: "GitHub — bitcoin-core/secp256k1"
    url: "https://github.com/bitcoin-core/secp256k1"
  - name: "CVE-2014-3570 — OpenSSL BN_sqr bug reported by Pieter Wuille"
    url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3570"
relatedEntries:
  - "aftermath/2011-03-17-pieter-wuille-biography"
  - "aftermath/2013-03-05-gregory-maxwell-biography"
  - "aftermath/2010-11-19-wladimir-van-der-laan-biography"
  - "aftermath/2011-10-10-dan-kaminsky-bitcoin-security"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "aftermath/2011-09-13-bitcoin-github-migration-committers"
  - "bip/2015-12-21-bip-0141"
  - "bip/2020-01-19-bip-0340"
  - "bip/2020-01-19-bip-0341"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency"
---

On January 15, 2016, [Bitcoin Core v0.12](https://github.com/bitcoin/bitcoin/blob/v0.12.0/doc/release-notes.md) shipped with libsecp256k1 as the default backend for consensus-critical ECDSA signature verification, replacing OpenSSL — a dependency that had been part of Bitcoin since [Satoshi's original v0.1 release](/BitcoinArchive/entries/sourceforge/2009-01-09-bitcoin-v01-released/) seven years earlier.

**Background:**

The libsecp256k1 project was started by [Pieter Wuille](/BitcoinArchive/participants/pieter-wuille/) on March 5, 2013. The initial motivation was performance — Wuille wanted to test whether the GLV-method endomorphism could deliver a meaningful speedup over OpenSSL's general-purpose elliptic-curve code. Within one week, the library could verify the entire Bitcoin blockchain (block height ~225,000 at the time).

[Gregory Maxwell](/BitcoinArchive/participants/gregory-maxwell/) joined the effort and the project expanded from a performance experiment into a full replacement for OpenSSL's secp256k1 implementation, focused entirely on Bitcoin's needs.

**Why replace OpenSSL:**

By 2014, the team had identified several concrete problems with using OpenSSL for consensus-critical code:

1. **Signature parsing inconsistencies** could potentially cause unintended chain splits — different OpenSSL versions could disagree on whether a given signature was valid, which is unacceptable for a system where every node must reach the same conclusion.
2. **Performance** — libsecp256k1 was eventually 2.5–5.5× faster than OpenSSL for signature verification, the dominant cost of validating new blocks.
3. **Auditability** — by focusing on a single curve and only the operations Bitcoin needs, the library was small enough to be reviewed in depth, with constant-time implementations to resist side-channel attacks.

In November 2014, Wuille discovered and reported [CVE-2014-3570](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3570) — a serious bug in OpenSSL's BN_sqr (squaring) routine — while writing tests for libsecp256k1. The bug had been latent in OpenSSL for years.

Maxwell summarized the conclusion in the Bitcoin Magazine article: "OpenSSL is not a suitable library for a consensus-critical system like Bitcoin."

**Rollout:**

- **Bitcoin Core v0.10** (February 2015): libsecp256k1 became the default for wallet signing.
- **Bitcoin Core v0.12** (January 15, 2016): libsecp256k1 became the default for consensus-critical ECDSA signature verification.

**Significance:**

libsecp256k1 represented the most consequential replacement of a dependency that Satoshi had originally chosen. Satoshi's v0.1 used OpenSSL because it was the obvious choice in 2008 — it was the standard cryptographic library for C++ projects on Windows. By 2016, the Bitcoin Core developers had concluded that "obvious" was not "correct" for a consensus system, and had spent three years building a purpose-made replacement.

This pattern — Satoshi's design choices being progressively superseded by Bitcoin-specific implementations as the codebase matured — is one of the recurring themes in Bitcoin Core's evolution. See also [PR #4641 (laanwj, 2014)](/BitcoinArchive/entries/forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style/) which began the systematic removal of Satoshi's Hungarian-notation variable naming style from new Bitcoin Core code.
