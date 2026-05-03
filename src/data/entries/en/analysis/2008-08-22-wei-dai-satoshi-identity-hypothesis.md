---
title: "Was Wei Dai Satoshi? Examining the b-money author and Crypto++ creator hypothesis"
date: 2008-08-22T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Wei_Dai"
author: "Bitcoin Institute"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
isSatoshi: false
description: "The hypothesis that Wei Dai — b-money author (whitepaper ref [1]) and Crypto++ creator — was Satoshi. Counter: Aug 22, 2008 email reads as third-party reception; 2014 AALWA self-distinction."
tags:
  - "satoshi-identity"
  - "wei-dai"
  - "b-money"
  - "crypto-plus-plus"
  - "cypherpunk"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wikipedia — Wei Dai"
    url: "https://en.wikipedia.org/wiki/Wei_Dai"
  - name: "Wei Dai — b-money proposal (November 1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Wei Dai — AALWA thread on LessWrong (January 12, 2014)"
    url: "https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything"
    note: "Wei Dai's January 12, 2014 retrospective in the 'Ask any LessWronger anything' thread, where he stated that Satoshi 'was not previously active' in academic cryptography or cypherpunk communities and described how Satoshi reinvented b-money's central ideas before learning of the b-money paper. The most-cited Wei Dai self-denial in the public record."
  - name: "Gwern's Archive — Wei Dai / Satoshi Nakamoto Emails"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
    note: "Three documented emails: Satoshi → Wei Dai (August 22, 2008); Wei Dai → Satoshi (date not specified, response with b-money publication history); Satoshi → Wei Dai (January 10, 2009). Satoshi's January 2009 message: 'achieves nearly all the goals you set out to solve in your b-money paper.'"
  - name: "Crypto++ Library"
    url: "https://www.cryptopp.com/"
  - name: "Bitcoin Magazine — The Genesis Files: Wei Dai's b-Money"
    url: "https://bitcoinmagazine.com/technical/genesis-files-if-bitcoin-had-a-first-draft-wei-dais-b-money-was-it"
relatedEntries:
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - correspondence/adam-back/2008-08-21-adam-back-to-satoshi
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
inlineLinkKeywords:
  - "Wei Dai hypothesis"
  - "Wei Dai = Satoshi"
---

This entry documents the recurring public hypothesis that [Wei Dai](/BitcoinArchive/participants/wei-dai/) — Chinese-American cryptographer, author of the [b-money digital-cash proposal](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) (November 1998) cited as reference [1] in the [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/), creator of the [Crypto++ library](https://www.cryptopp.com/) that Bitcoin v0.1 bundles for SHA-256, and the second person Satoshi Nakamoto contacted before Bitcoin's launch — was the person behind the Satoshi pseudonym. The hypothesis is one of the recurring Group-A candidates (Satoshi explicitly cited their work) and has surfaced in cryptography journalism since at least 2010. Wei Dai has consistently denied being Satoshi, most prominently in his [January 2014 AALWA retrospective on LessWrong](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/). The claim is laid out, the supporting arguments are described as their advocates make them, and the counter-evidence is set out at equal detail. The reader is left to weigh.

## 1. What the hypothesis claims

The hypothesis is that Wei Dai is the person behind the Satoshi Nakamoto pseudonym, and that his documented public-record interactions with "Satoshi" — including the [August 22, 2008 email from Satoshi](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/), Wei Dai's response with b-money publication history, and Satoshi's January 10, 2009 follow-up ("achieves nearly all the goals you set out to solve in your b-money paper") — were stagecraft to maintain the pseudonym. Under this reading, Wei Dai operated as Satoshi from the development phase (mid-2007 onward) through the 2011 withdrawal while continuing his Crypto++ maintenance and other public scholarship as a public-record decoy, and his [January 2014 AALWA retrospective](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) was a calculated public denial.

## 2. The arguments the hypothesis rests on

### 2.1 b-money's conceptual proximity to Bitcoin

Of the eight references in the Bitcoin whitepaper, [b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) is the one that maps most directly onto Bitcoin's monetary-design space. Both reuse proof-of-work as the source of digital scarcity, both posit a peer-to-peer network propagating new coins, both explicitly position the design within an anti-trust monetary frame, and both include a mining-style issuance mechanism. The b-money proposal was published on the cypherpunks mailing list in November 1998 and outlined two protocols — one synchronous-broadcast, one server-tracked — that anticipate aspects of Bitcoin's full-node and SPV-client distinction. The whitepaper cites b-money as reference [1].

The argument: among all pre-Bitcoin proposals, b-money maps onto Bitcoin's monetary mechanism most tightly. The forensic-fit reading is that the person who wrote b-money is a natural candidate for the person who built Bitcoin. The whitepaper's explicit citation reinforces this — Satoshi singled out b-money as a key precedent.

The objection: design proximity does not select uniquely. Adam Back's [Hashcash](/BitcoinArchive/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/), also cited in the whitepaper, contributes the proof-of-work primitive Bitcoin reuses for mining. By the same forensic-fit argument, Adam Back is a parallel candidate. The [hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) treats Wei Dai and Adam Back together as Group A for this reason. See [Bitcoin design lineage](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/) for the per-component sourcing of Bitcoin v0.1, including the components that came from neither b-money nor Hashcash.

### 2.2 Crypto++ codebase dependency in Bitcoin v0.1

Wei Dai created and maintained [Crypto++](https://www.cryptopp.com/), a free open-source C++ library of cryptographic algorithms. Bitcoin v0.1 used Crypto++ for its SHA-256 implementation: the source files `src/sha.cpp` and `src/sha.h` in v0.1.3 ALPHA (early 2009) carry header comments stating the routines were "carved out as standalone files from Crypto++ Version 5.5.2 (released September 24, 2007)." The `namespace CryptoPP` attribution is preserved.

| Bitcoin version | Date | Crypto++ usage |
|---|---|---|
| v0.1 | 2009-01-09 | Bundled Crypto++ 5.5.2 SHA-256 as standalone files (`sha.cpp`, `sha.h`) |
| v0.3.6 | 2010-07-29 | Integrated Crypto++ 5.6.0 SSE2-optimized SHA-256 (~2.5× speedup) |
| v0.5.0 | 2011-11-20 | [Crypto++ subset removed; replaced by OpenSSL SHA-256](/BitcoinArchive/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/) (Nils Schneider commit, merged by Gavin Andresen) |

The codebase dependency had a 22-month operational window (v0.1 January 2009 through v0.4.x) and ended approximately six months after Satoshi's April 2011 departure. The argument below applies to that window, not to running Bitcoin Core today. This is the only direct codebase-level dependency Bitcoin v0.1 has on a named candidate's published code. The argument: combining (a) b-money cited as reference [1], (b) Crypto++ providing Bitcoin's hash primitive, (c) the fact that Wei Dai is the sole common author of both, places him in a structural position no other candidate occupies.

The objection: Crypto++ was the de-facto standard C++ cryptographic library of the late 2000s. Choosing Crypto++ for SHA-256 in a C++ project of that era was a routine engineering decision, not a signal of self-authorship. The v0.3.6 SSE2 optimization upgrade was [proposed by BitcoinTalk member "BlackEye"](/BitcoinArchive/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/), not by Satoshi alone, which is hard to reconcile with a self-staging reading where Satoshi controls all the codebase decisions.

### 2.3 Cypherpunk credentials and intellectual lineage

Wei Dai is a long-tenure cypherpunk, an early subscriber to the cypherpunks mailing list, and an active participant in adjacent communities (Extropians, SL4) since the 1990s. b-money was developed in the same intellectual environment as Hashcash (Adam Back), Bit Gold (Nick Szabo), and RPOW (Hal Finney). Wei Dai's public scholarship after b-money continued in cryptographic and rationality-related areas; the [LessWrong profile](https://www.lesswrong.com/users/wei-dai) shows decades of intellectual output in adjacent fields.

The objection: cypherpunk credentials apply to several candidates (Adam Back, Hal Finney, Nick Szabo, Sassaman). The dimension narrows the candidate set substantially but does not select Wei Dai uniquely.

### 2.4 Capability profile: cryptography PhD-level skill, computer-science background

Wei Dai studied computer science at the University of Washington and worked at Microsoft. The technical capability the b-money paper demonstrates (cryptographic-protocol design at the level of an academic publication) and the engineering capability Crypto++ demonstrates (a maintained C++ library used widely in academic and commercial projects) are consistent with what Bitcoin v0.1's 19,901-line C++ codebase requires.

The objection: this profile applies to many candidates and several non-candidate cypherpunks. Capability is necessary but not sufficient (per the [hypotheses overview methodology](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)).

## 3. The counter-evidence

### 3.1 The August 22, 2008 email exchange reads as third-party reception

The strongest archive-internal counter-evidence is the structure of the [August 20–22, 2008 email chain](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/):

| Date | Direction | Content |
|---|---|---|
| Aug 20, 2008 | Satoshi → Adam Back | Asks about Hashcash citation format for the upcoming whitepaper |
| Aug 21, 2008 | [Adam Back → Satoshi](/BitcoinArchive/entries/correspondence/adam-back/2008-08-21-adam-back-to-satoshi/) | Provides citation; suggests Satoshi look at Wei Dai's b-money |
| Aug 22, 2008 | [Satoshi → Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money/) | "I wasn't aware of the b-money page, but my ideas start from exactly that point" |
| Aug 22, 2008 | [Satoshi → Wei Dai](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | "I'm getting ready to release a paper that expands on your ideas" — asks for b-money publication date for the whitepaper citation |
| (date n/a) | Wei Dai → Satoshi | Provides 1998 publication date and archived discussion links |

If Wei Dai were Satoshi, the structure does not naturally make sense. He would be:
- Writing to Adam Back as "Satoshi" asking about Hashcash citation,
- Receiving Adam Back's referral to himself,
- Writing to himself as "Satoshi" two days later asking for b-money publication details,
- Replying to himself with the publication history.

The simpler reading is that the chain is what it appears to be — Satoshi seeking citation guidance from Adam Back, Adam referring him to a pre-existing b-money proposal he had not seen, and Satoshi following up with the b-money author to confirm the citation date. Wei Dai's response (providing publication history and links) is consistent with a third party engaging substantively with an unknown correspondent's work.

### 3.2 Satoshi's "I wasn't aware of the b-money page" admission

In the August 22, 2008 email to Adam Back, Satoshi wrote: *"I wasn't aware of the b-money page, but my ideas start from exactly that point."* This statement is the [self-disclosure that anchors the cypherpunk-independent-arrival analysis](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/): it locates Satoshi's b-money knowledge as post-development, learned via Adam Back's referral two months before the whitepaper.

Under the Wei-Dai = Satoshi reading, this statement is a self-deception with no audience — Satoshi tells Adam Back, in private email, that he had not seen Wei Dai's page, while in fact being its author. The simpler reading is that Satoshi genuinely did not know b-money during Bitcoin's design, and learned of it through Adam Back's referral in August 2008. Wei Dai's own [2014 AALWA retrospective](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) endorses this reading: Satoshi reinvented the central ideas independently and learned of b-money only afterwards.

### 3.3 Wei Dai's January 2014 AALWA retrospective

On January 12, 2014, Wei Dai posted on the LessWrong "Ask any LessWronger anything" thread, addressing the Satoshi-identity speculation directly. The retrospective makes three statements relevant to the hypothesis:

- Satoshi was "not anyone who was previously active in the academic cryptography or cypherpunks communities" — a structural claim that, taken at face value, selects against Wei Dai himself (a long-tenure cypherpunk).
- Satoshi independently re-invented the central ideas of b-money before learning of Wei Dai's paper through Adam Back's referral.
- Wei Dai distinguishes himself from Satoshi as separate persons throughout the discussion.

The first point is what the [identifiability argument](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) extracts from this retrospective and applies to other candidates (Adam Back, Hal Finney, Nick Szabo, Sassaman) who were also publicly active in cypherpunks during 2007–2008. By the same logic, the argument applies to Wei Dai himself — he was active in the cypherpunks list and visible on Crypto++ maintenance during the relevant period.

For the hypothesis to be true, the entire 2014 retrospective would need to be a public self-deception, including the structural claim about Satoshi's non-activity that argues against Wei Dai's own candidacy.

### 3.4 Stylometric distance

The [Bitcoin Institute reanalysis](/BitcoinArchive/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/) of Bas van Dorst's 75,000-author "Where is Satoshi?" stylometric corpus places Wei Dai at top 22.99% (rank 2,929 of 12,739) — fourth-highest among the five most-cited named candidates, behind Nick Szabo (top 4.67%), Hal Finney (6.89%), and Adam Back (7.87%):

| Stylometric study | Wei Dai's result |
|---|---|
| Skye Grey 2013 (single-hypothesis test of Szabo) | Not in candidate set |
| Aston University 2014 (11 candidates) | Rank not published |
| van Dorst 2024 / Bitcoin Institute reanalysis | Rank 2,929 / 12,739 — top 22.99%, 4th of named candidates |
| Cafiero / Carreyrou NYT 2026 (12 candidates) | Rank not published |

Across the four most-cited stylometric investigations, Wei Dai never appears as a top match for Satoshi. His writing register, while still placing him in the upper quartile of the corpus, is measurably more distant from Satoshi's than Szabo's, Finney's, or Adam Back's. The forensic-fit argument (§2.1, b-money proximity) and the stylometric argument point in different directions for Wei Dai.

### 3.5 The Crypto++ codebase dependency cuts both ways

The Crypto++ inclusion (§2.2) is a structural fit but not strong evidence of authorship. Crypto++ was the standard C++ cryptographic library available in 2007–2008 for any developer building a SHA-256-using system in C++; choosing it was the natural engineering decision regardless of who the developer was. The v0.3.6 SSE2 upgrade (July 2010) was driven by [BitcoinTalk member "BlackEye"](/BitcoinArchive/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/), not by Satoshi alone. If Wei Dai were Satoshi, he would presumably have either implemented SHA-256 in his own way or made the SSE2 decision himself rather than waiting for a forum-member proposal.

### 3.6 Self-denial across multiple statements

Wei Dai has consistently denied being Satoshi:

- **2014 AALWA retrospective** (above) — distinguishes himself from Satoshi explicitly.
- **Long-form interviews and forum posts** since 2014 — Wei Dai treats Satoshi as a separate person throughout, often crediting Satoshi's specific design contributions (the longest-chain consensus rule, the difficulty-adjustment algorithm) in language that would be self-praise if he were Satoshi.
- **Continued Crypto++ and LessWrong activity** under his own name through the 2010s and 2020s — a sustained public profile that would require parallel decoy work if he were also Satoshi during the same period.

Wei Dai's self-denial is structurally similar to Nick Szabo's (the "Nakamoto improved my design" framing in [Szabo's 2011 blog post](/BitcoinArchive/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/) that crediting Nakamoto with a specific improvement to his own work): a sustained public framing that treats Satoshi as a different, named-but-separate person. Both denials, to be undone by the hypothesis, require sustained voluntary public self-deception.

## 4. Within the broader documentary record

Across the four most-cited stylometric investigations, Wei Dai is the named candidate placed *furthest* from Satoshi by the only investigation that publicly ranks all five names (van Dorst / Bitcoin Institute reanalysis). The August 2008 email exchange, the "I wasn't aware of the b-money page" admission, and Wei Dai's own 2014 retrospective form a coherent third-party-reception reading that the hypothesis must overturn.

Wei Dai's structural position in the candidate space differs from other candidates: he is in Group A (Satoshi explicitly cited his work) by construction of the candidate set, but the same primary-source emails that establish the citation pathway also establish that Wei Dai received Bitcoin from Satoshi as a third party rather than originating it.

For comparison with other named-candidate hypotheses, see the [Satoshi-identity hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) and the individual entries for [Adam Back](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/), [Hal Finney](/BitcoinArchive/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/), [Sassaman](/BitcoinArchive/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/), [Kaneko](/BitcoinArchive/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/), [Szabo](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/), and [Todd](/BitcoinArchive/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/).

## 5. Limits of this entry

- This entry does not present new evidence. It compiles material from the August 2008 email exchange, Wei Dai's January 2014 AALWA retrospective, the Crypto++ inclusion record, the Bitcoin Institute reanalysis of van Dorst's corpus, and the standing public discussion of Wei Dai as a Satoshi candidate.
- This entry sets out the hypothesis fairly and the counter-evidence fairly, leaving the reader to weigh.
- This entry does not name "the most likely Satoshi candidate."
- Wei Dai's hypothesis differs from candidates with a single triggering articulation (Greenberg 2014 for Hal Finney, NYT 2026 for Adam Back, HBO 2024 for Todd) — Wei Dai has been a structural candidate from before Bitcoin's launch by virtue of the whitepaper citation, with no single major-press articulation. The entry uses the August 22, 2008 contact date as its anchor because that is when the structural conditions for the hypothesis were established.
- If new evidence surfaces — direct documentary links beyond the three-email correspondence, technical fingerprints in Bitcoin v0.1 matching Wei Dai's other code beyond the standard Crypto++ inclusion, or comments by Wei Dai that contradict the 2014 retrospective — this entry should be updated.

*[Editor: this entry uses the August 22, 2008 first contact between Satoshi and Wei Dai as the structural anchor for a hypothesis that has no single triggering article. The framing is deliberately conservative: the hypothesis is laid out, supporting arguments are described as their advocates make them, and counter-evidence is set out at equal detail. The entry does not draw an editorial conclusion about whether the hypothesis is more likely true or false; readers who want a direct verdict will not find one.]*
