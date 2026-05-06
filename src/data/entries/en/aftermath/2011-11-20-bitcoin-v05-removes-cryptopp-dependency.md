---
title: "Bitcoin v0.5 removes the Crypto++ dependency, replacing it with OpenSSL SHA-256"
date: 2011-11-20T00:00:00Z
type: "article"
source: "bitcoin-core"
sourceUrl: "https://github.com/bitcoin/bitcoin/commit/6ccff2cbdebca38e4913b679784a4865edfbb12a"
author: "Bitcoin Institute"
participants:
  - name: "Nils Schneider"
    slug: "nils-schneider"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "On November 20, 2011, Bitcoin v0.5 shipped with the Crypto++ SHA-256 subset removed and replaced by OpenSSL. Wei Dai's library, a direct codebase dependency since v0.1, was gone."
isSatoshi: false
tags:
  - "nils-schneider"
  - "gavin-andresen"
  - "wei-dai"
  - "cryptopp"
  - "openssl"
  - "bitcoin-core"
  - "cryptography"
  - "code-quality"
secondarySources:
  - name: "Merge commit b898c8fce6 — Merge branch 'no-cryptopp' (Gavin Andresen, 2011-10-05)"
    url: "https://github.com/bitcoin/bitcoin/commit/b898c8fce687de9320bfae8dd2392e92c5464831"
  - name: "Bitcoin v0.5.0 release (2011-11-20)"
    url: "https://github.com/bitcoin/bitcoin/releases/tag/v0.5.0"
  - name: "Commit 977cdadea8 — Add a built-in SHA256/SHA512 implementation (Pieter Wuille, 2014-04-20)"
    url: "https://github.com/bitcoin/bitcoin/commit/977cdadea8a77eed04f1f0fd341ba9dedc3fa783"
relatedEntries:
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2010-06-11-gavin-andresen-biography"
  - "aftermath/2010-12-19-andresen-lead-maintainer-announcement"
  - "aftermath/2011-04-26-satoshi-final-known-email"
  - "aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012"
  - "analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis"
---

On November 20, 2011, Bitcoin v0.5.0 shipped with the Crypto++ SHA-256 subset that [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) had added in July 2010 (SVN rev 114) removed from the codebase. Going forward, Bitcoin called OpenSSL's SHA-256 routines for the same work. Crypto++ — [Wei Dai](/BitcoinArchive/participants/wei-dai/)'s C++ cryptographic library, the only candidate-authored library Bitcoin had ever included as a direct in-tree code dependency — was no longer part of Bitcoin Core.

**The commit and the merge.**

The change came from outside the Satoshi-era contributor pool. **Nils Schneider** (BitcoinTalk handle `tcatm`) — the same contributor Satoshi had credited in the [v0.3.6 release alert](/BitcoinArchive/entries/forum/bitcointalk/topic-626/2010-07-29-alert-upgrade-to-0-3-6/) for a midstate-cache mining optimization in 2010 — opened a branch named `no-cryptopp`. The substantive commit (`6ccff2cb`) on **September 27, 2011** rewrote `SHA256Transform()` in `src/main.cpp` to call OpenSSL's `SHA256_Init` / `SHA256_Update` instead of Crypto++'s `CryptoPP::SHA256::Transform`, removed the `using CryptoPP::ByteReverse` import, and deleted the entire `src/cryptopp/` directory tree (16 files: `sha.cpp`, `sha.h`, `cryptlib.h`, `config.h`, `cpu.cpp`, `cpu.h`, `iterhash.h`, `misc.h`, `obj/.gitignore`, `pch.h`, `secblock.h`, `simple.h`, `smartptr.h`, `stdcpp.h`, `License.txt`, `Readme.txt`).

[Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/) — by then the project's lead maintainer following Satoshi's [April 2011 handover](/BitcoinArchive/entries/aftermath/2011-04-26-satoshi-final-known-email/) — merged the branch on **October 5, 2011** (commit `b898c8fc`, "Merge branch 'no-cryptopp' of https://github.com/tcatm/bitcoin"). The merge made Bitcoin Core's main line OpenSSL-only for SHA-256 going forward. Bitcoin v0.5.0 was tagged on November 20, 2011 and shipped that change to users six weeks later.

**What was removed, in context.**

Bitcoin had bundled a Crypto++ SHA-256 subset since the earliest archived release. Satoshi had personally [staged the move from Crypto++ 5.5.2 to Crypto++ 5.6.0 with SSE2-optimized assembly in v0.3.6 (July 2010)](/BitcoinArchive/participants/wei-dai/) and explicitly tracked the dependency in his own commit message: *"I added a subset of the Crypto++ 5.6.0 library to the SVN. I stripped it down to just SHA and 11 general dependency files."* Crypto++ was, in plain code-archaeological terms, the one named-candidate-authored library that Bitcoin ever depended on directly.

By 2011, the Bitcoin Core project's center of gravity had moved off the Crypto++ codepath. The 2010 mining-speed argument that justified bundling the Crypto++ assembly subset (CPU SHA-256 throughput for solo mining) was being decisively obsoleted by GPU and FPGA mining — by late 2011, no serious miner was running the reference client's CPU SHA-256 path against the network. The Crypto++ subset's purpose as performance-critical mining code had evaporated, and what remained was an in-tree third-party copy with non-trivial maintenance cost and license-file overhead. Removing it for an existing system dependency (OpenSSL, which Bitcoin already linked for ECDSA) was a code-cleanup decision, not a cryptographic policy change. The replacement preserves the protocol behavior — OpenSSL's `SHA256_Update` produces the same digest as Crypto++'s `SHA256::Transform` over the same input.

**What followed.**

The OpenSSL SHA-256 path was itself replaced by a Bitcoin Core in-tree implementation in 2014. [Pieter Wuille](/BitcoinArchive/participants/pieter-wuille/)'s commit `977cdadea8` (April 20, 2014, "Add a built-in SHA256/SHA512 implementation") introduced `src/sha2.cpp` with hand-written SHA-256 and SHA-512 routines, and subsequent commits switched the consensus-critical hash callsites off OpenSSL. From that point, Bitcoin Core no longer depended on a third-party SHA-256 implementation at all. The OpenSSL ECDSA dependency persisted longer and was eventually replaced by libsecp256k1 in [Bitcoin Core v0.12 (January 2016)](/BitcoinArchive/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/).

The chain of replacements:

| Year | Component | From | To | Author |
|---|---|---|---|---|
| 2009 | SHA-256 | — | Crypto++ 5.5.2 (in-tree subset) | Satoshi Nakamoto (v0.1) |
| 2010 | SHA-256 | Crypto++ 5.5.2 | Crypto++ 5.6.0 SSE2 ASM (in-tree subset) | Satoshi Nakamoto (v0.3.6, with BlackEye and tcatm credited) |
| **2011** | **SHA-256** | **Crypto++ 5.6.0** | **OpenSSL** | **Nils Schneider, merged by Gavin Andresen (v0.5.0)** |
| 2014 | SHA-256 | OpenSSL | Built-in (`sha2.cpp`) | Pieter Wuille |
| 2016 | ECDSA | OpenSSL | libsecp256k1 | Pieter Wuille and Gregory Maxwell (v0.12.0) |

**Relevance to the Satoshi-identity question.**

The [Wei Dai = Satoshi hypothesis](/BitcoinArchive/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/) treats Bitcoin's v0.1 Crypto++ dependency as a structural argument: among the named candidates, only Wei Dai authored a library Bitcoin actually included in its source tree. That argument is bounded in time. By Bitcoin v0.5 (November 2011), Bitcoin Core no longer carried the Crypto++ subset; the structural codebase dependency on Wei Dai's library lasted from v0.1 (January 2009) through v0.4.x. The change was not made on cryptographic-identity grounds — it was a routine code-cleanup driven by a community contributor (Schneider) reducing in-tree maintenance burden, ratified by the post-Satoshi maintainer (Andresen) — but the artifact it produced is a 22-month window during which "Bitcoin depends on Wei Dai's library at the source-tree level" was a live claim. Outside that window, the claim has to be made about historical releases, not the running protocol.

The [Wei Dai = Satoshi hypothesis entry §2.2](/BitcoinArchive/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/) frames the codebase dependency as evidence against the null hypothesis that Wei Dai is structurally indistinguishable from other candidates on direct code-contribution grounds. This entry documents the upper bound of that evidence: it ends at v0.5.0.
