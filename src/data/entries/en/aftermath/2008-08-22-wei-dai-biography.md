---
title: "Wei Dai — Creator of b-money and Crypto++, cited in the Bitcoin white paper"
date: 2008-08-22T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Wei_Dai"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Computer scientist and cryptographer who created b-money (1998), one of the earliest digital currency proposals, and the Crypto++ library. Satoshi emailed him before publishing the Bitcoin paper."
isSatoshi: false
tags:
  - "wei-dai"
  - "biography"
  - "b-money"
  - "crypto-plus-plus"
  - "whitepaper"
  - "cypherpunk"
  - "historic"
secondarySources:
  - name: "Wei Dai — b-money proposal (November 1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Satoshi Nakamoto Institute — Wei Dai Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/wei-dai/"
  - name: "Gwern's Archive — Wei Dai / Satoshi Nakamoto Emails"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
  - name: "Crypto++ Library"
    url: "https://www.cryptopp.com/"
  - name: "Bitcoin Magazine — The Genesis Files: How Wei Dai's b-Money Became the Inspiration for Bitcoin"
    url: "https://bitcoinmagazine.com/technical/genesis-files-if-bitcoin-had-a-first-draft-wei-dais-b-money-was-it"
  - name: "Less Wrong — Wei Dai's profile"
    url: "https://www.lesswrong.com/users/wei-dai"
relatedEntries:
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-06-adam-back-b-money-monetary-critique"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai"
  - "aftermath/2014-01-12-wei-dai-retrospective-on-satoshi"
  - "analysis/2009-01-09-satoshi-code-analysis"
  - "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
  - "analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "analysis/2008-10-31-cypherpunk-independent-arrival"
  - "analysis/2008-08-20-satoshi-self-statements"
  - "aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency"
---

Wei Dai is a computer scientist and cryptographer known for two major contributions to the field: the b-money proposal for digital currency and the Crypto++ cryptographic library. He studied computer science at the University of Washington and worked at Microsoft. The b-money citation as reference [1] in the Bitcoin whitepaper, the Crypto++ codebase dependency in Bitcoin v0.1, and Wei Dai's status as the second person Satoshi contacted before launch have made him a recurring Satoshi-identity candidate — documented in the [Wei Dai = Satoshi hypothesis entry](/BitcoinArchive/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/), with the [January 2014 AALWA retrospective](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) as the principal self-denial.

**Wei Dai's Bitcoin-relevant timeline**

```mermaid
timeline
    1998 : b-money proposal published on the cypherpunks mailing list (Nov)
         : Adam Back publishes critique of b-money's monetary design (Dec)
    2008 : Email from Satoshi - asks about b-money citation year for the whitepaper (Aug 22)
         : Bitcoin whitepaper cites b-money as its first reference (Oct)
    2009 : Bitcoin v0.1 ships with Crypto++ 5.5.2 SHA-256; Dai exchanges further emails with Satoshi (Jan)
    2010 : Bitcoin v0.3.6 integrates Crypto++ 5.6.0 SSE2-optimized SHA-256 (Jul)
    2014 : LessWrong retrospective - Satoshi was 'not previously active' in cypherpunk communities (Jan)
```

**b-money (1998):**
In November 1998, Dai published ["b-money"](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/), a proposal for an anonymous, distributed electronic cash system, on the cypherpunks mailing list. The b-money proposal described a system where participants could create money by broadcasting the solution to a computational puzzle — a concept conceptually similar to Bitcoin's proof-of-work mining. The paper outlined two protocols: one requiring a synchronous broadcast channel, and another using a set of servers to keep track of balances. B-money was never implemented, but it became one of the key intellectual precursors to Bitcoin.

**Crypto++:**
Dai created and maintained Crypto++, a free, open-source C++ library providing a comprehensive collection of cryptographic algorithms and schemes. The library is widely used in academic and commercial projects and remains one of the most respected cryptographic libraries available. Bitcoin used Crypto++ for its SHA-256 implementation from the earliest archived release: Bitcoin v0.1.3 ALPHA (early 2009) carries `src/sha.cpp` and `src/sha.h` with a header note stating that the routines were "extracted as a standalone file from Crypto++ Version 5.5.2 (9/24/2007)" — the latest Crypto++ release available at the time Bitcoin was being designed (mid-2007 onward).

The Crypto++ 5.6.0 SSE2-assembly-optimized SHA-256 was integrated into Bitcoin in version 0.3.6 (July 29, 2010 release). Primary-source timeline:

- 2010-07-25: BitcoinTalk member "BlackEye" [demonstrated integrating Crypto++ 5.6.0 SHA-256 with SSE2 assembly](/BitcoinArchive/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/) — "the fastest SHA256 yet using the SSE2 assembly code."
- 2010-07-26: Satoshi [responded](/BitcoinArchive/entries/forum/bitcointalk/topic-501/2010-07-26-re-bitcoin-x64-for-windows/) — "Is that still starting from Crypto++? Lets get this into the main sourcecode."
- 2010-07-27 (SVN rev 114): Satoshi [confirmed adding the library subset](/BitcoinArchive/entries/forum/bitcointalk/topic-572/2010-07-27-sni282-re-bitcoin-x86-for-windows/) — "I added a subset of the Crypto++ 5.6.0 library to the SVN. I stripped it down to just SHA and 11 general dependency files... The combined speedup is about 2.5x faster than version 0.3.3. This is SVN rev 114."
- 2010-07-29: [v0.3.6 release alert](/BitcoinArchive/entries/forum/bitcointalk/topic-626/2010-07-29-alert-upgrade-to-0-3-6/) — Satoshi credited BlackEye for the Crypto++ ASM SHA-256 and tcatm for the midstate cache optimization: "Total generating speedup 2.4x faster."
- 2010-08-09: Satoshi [stated explicitly](/BitcoinArchive/entries/forum/bitcointalk/topic-765/2010-08-09-version-0-3-8-1-update-for-linux-64-bit/) — "When we switched to Crypto++ 5.6.0 SHA-256 in version 0.3.6, generation got broken on the Linux 64-bit build."

Dai's code contributions to Bitcoin are twofold: b-money as an intellectual precursor, and Crypto++ as a direct codebase dependency from the earliest released version.

**Satoshi's First Contact:**
On August 22, 2008, [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) [emailed Dai directly](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/), writing that he was preparing to publish a paper expanding on Dai's b-money ideas. Satoshi asked Dai for the year of b-money's publication to properly cite it. This email, along with [a similar one](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) sent to [Adam Back](/BitcoinArchive/participants/adam-back/) two days earlier, represents the earliest known evidence of Satoshi reaching out to existing cryptographers before publishing the Bitcoin white paper. The [white paper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/), published on October 31, 2008, cites b-money as its first reference.

**Later Correspondence:**
In January 2009, following Bitcoin's launch, Dai and Satoshi exchanged further emails. Satoshi [wrote to Dai](/BitcoinArchive/entries/correspondence/wei-dai/2009-01-10-satoshi-to-wei-dai/) about the upcoming release, and [Dai responded](/BitcoinArchive/entries/correspondence/wei-dai/2009-01-10-wei-dai-to-satoshi/) with thoughts on Bitcoin's design, noting both its similarities to and differences from b-money. Dai also made philosophical observations about the nature of money and cryptocurrency that demonstrated a deep understanding of the challenges involved.

**Significance:**
Dai's b-money proposal is one of the most direct intellectual predecessors to Bitcoin. Satoshi's decision to contact Dai before publication, and the prominent citation of b-money in the white paper, underscores the degree to which Bitcoin built upon Dai's earlier work. Dai's later 2014 retrospective on Satoshi — that he was "not anyone who was previously active in the academic cryptography or cypherpunks communities" — together with Satoshi's own admission of not knowing b-money during 18 months of development, anchors [an analysis of Satoshi's relationship to the cypherpunk movement and the alignment of his practice with its philosophical core](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/). The unit "wei" in the Ethereum cryptocurrency was named in honor of Wei Dai.
