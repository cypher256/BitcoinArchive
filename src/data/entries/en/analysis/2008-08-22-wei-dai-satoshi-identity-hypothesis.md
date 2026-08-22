---
title: "Was Wei Dai Satoshi? — author of b-money, his Crypto++ shipped inside Bitcoin v0.1"
date: 2008-08-22T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Wei_Dai"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
isSatoshi: false
description: "b-money is whitepaper reference [1], his Crypto++ shipped inside Bitcoin v0.1, and he was the second person Satoshi contacted. The evidence for Wei Dai as Satoshi, weighed."
tags:
  - "satoshi-identity"
  - "wei-dai"
  - "b-money"
  - "crypto-plus-plus"
  - "cypherpunk"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wei Dai — b-money proposal (November 1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Wei Dai — AALWA thread on LessWrong (January 12, 2014)"
    url: "https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything"
    note: "Wei Dai's January 12, 2014 retrospective in the 'Ask any LessWronger anything' thread, where he stated that Satoshi 'was not previously active' in academic cryptography or cypherpunk communities and described how Satoshi reinvented b-money's central ideas before learning of the b-money paper. The most-cited Wei Dai self-denial in the public record."
  - name: "Wei Dai — LessWrong user profile"
    url: "https://www.lesswrong.com/users/wei-dai"
    note: "Wei Dai's LessWrong posting history, spanning cryptographic and rationality-related topics over multiple decades."
  - name: "Gwern's Archive — Wei Dai / Satoshi Nakamoto Emails"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
    note: "Three documented emails: Satoshi → Wei Dai (August 22, 2008); Wei Dai → Satoshi (date not specified, response with b-money publication history); Satoshi → Wei Dai (January 10, 2009). Satoshi's January 2009 message: 'achieves nearly all the goals you set out to solve in your b-money paper.'"
  - name: "Crypto++ Library"
    url: "https://www.cryptopp.com/"
partOf: "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
relatedEntries:
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2008-08-21-adam-back-to-satoshi
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
  - analysis/2009-01-09-satoshi-windows-development-environment
  - aftermath/1996-02-06-wei-dai-disperse-collect-crypto-plus-plus
  - aftermath/2014-07-19-wei-dai-next-tech-gold-rush
inlineLinkKeywords:
  - "Wei Dai hypothesis"
  - "Wei Dai = Satoshi"
---

![A three-node correspondence diagram of linked envelope icons labeled Sender, Referral, and Author, next to citation and codebase-dependency cards and a stylometric-distance scatter plot with one point set apart from a cluster of others, under a checkmarked verdict reading "Structurally significant, ultimately unlikely."](/BitcoinArchive/images/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis-hero.png)

[Wei Dai's b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) is reference [1] in the [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/). Wei Dai's Crypto++ library ships inside Bitcoin v0.1 for SHA-256. Wei Dai is the second person Satoshi contacted before launching the network. The claim that [Wei Dai](/BitcoinArchive/participants/wei-dai/) is Satoshi has circulated in cryptography journalism since at least 2010 (Group A — Satoshi explicitly cited his work).

## 1. The evidence

Wei Dai is the person behind the Satoshi Nakamoto pseudonym. His documented public-record interactions with "Satoshi" — the [August 22, 2008 email from Satoshi](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/), his response with b-money publication history, and Satoshi's January 10, 2009 follow-up ("achieves nearly all the goals you set out to solve in your b-money paper") — were stagecraft to maintain the pseudonym. He operated as Satoshi from the development phase (mid-2007 onward) through the 2011 withdrawal while running his Crypto++ maintenance and other public scholarship as a public-record decoy, and his [January 2014 AALWA retrospective](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) was a calculated public denial.

| Evidence | Central observation | Objection |
|---|---|---|
| §1.1 b-money conceptual proximity | b-money is whitepaper ref [1] and maps onto Bitcoin's monetary mechanism most tightly of all pre-Bitcoin proposals | Design proximity does not uniquely select — Hashcash → Adam Back is a parallel candidate by the same logic |
| §1.2 Crypto++ codebase dependency | Bitcoin v0.1 used Wei Dai's Crypto++ for SHA-256 (22-month dependency through v0.4.x) | Crypto++ was the de-facto C++ standard of the era; the v0.3.6 SSE2 upgrade was proposed by "BlackEye", not Satoshi |
| §1.3 Cypherpunk credentials | Long-tenure cypherpunk, early mailing-list subscriber, decades in adjacent communities | Applies to several candidates (Back, Finney, Szabo, Sassaman) — narrows the set but doesn't uniquely select |
| §1.4 Capability profile | CS background at U. Washington + Microsoft employment + Crypto++ maintenance — consistent with v0.1's 19,901-line C++ codebase | Profile applies to many candidates and non-candidates; necessary but not sufficient |
| §1.5 Windows-side environment overlap | Wei Dai's Crypto++ formative period was Windows / Microsoft VC++; matches v0.1's Visual C++ 6.0 / `.rar` / MingW PGP stack | Windows-side C++ was the late-2000s default; matches any Windows-side C++ developer of the period |

### 1.1 b-money's conceptual proximity to Bitcoin

Of the eight references in the Bitcoin whitepaper, [b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) is the one that maps most directly onto Bitcoin's monetary-design space. Both reuse proof-of-work as the source of digital scarcity, both posit a peer-to-peer network propagating new coins, both explicitly position the design within an anti-trust monetary frame, and both include a mining-style issuance mechanism. The b-money proposal was published on the cypherpunks mailing list in November 1998 and outlined two protocols — one synchronous-broadcast, one server-tracked — that anticipate aspects of Bitcoin's full-node and SPV-client distinction. The whitepaper cites b-money as reference [1].

The evidence: among all pre-Bitcoin proposals, b-money maps onto Bitcoin's monetary mechanism most tightly. The forensic-fit reading is that the person who wrote b-money is a natural candidate for the person who built Bitcoin. The whitepaper's explicit citation reinforces this — Satoshi singled out b-money as a key precedent.

The objection: design proximity does not select uniquely. Adam Back's [Hashcash](/BitcoinArchive/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/), also cited in the whitepaper, contributes the proof-of-work primitive Bitcoin reuses for mining. By the same forensic-fit argument, Adam Back is a parallel candidate. The [hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) treats Wei Dai and Adam Back together as Group A for this reason. See [Bitcoin design lineage](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/) for the per-component sourcing of Bitcoin v0.1, including the components that came from neither b-money nor Hashcash.

### 1.2 Crypto++ codebase dependency in Bitcoin v0.1

Wei Dai created and maintained Crypto++, a free open-source C++ library of cryptographic algorithms. Bitcoin v0.1 used Crypto++ for its SHA-256 implementation: the source files `src/sha.cpp` and `src/sha.h` in v0.1.3 ALPHA (early 2009) carry header comments stating the routines were "carved out as standalone files from Crypto++ Version 5.5.2 (released September 24, 2007)." The `namespace CryptoPP` attribution is preserved.

| Bitcoin version | Date | Crypto++ usage |
|---|---|---|
| v0.1 | 2009-01-09 | Bundled Crypto++ 5.5.2 SHA-256 as standalone files (`sha.cpp`, `sha.h`) |
| v0.3.6 | 2010-07-29 | Integrated Crypto++ 5.6.0 SSE2-optimized SHA-256 (~2.5× speedup) |
| v0.5.0 | 2011-11-20 | [Crypto++ subset removed; replaced by OpenSSL SHA-256](/BitcoinArchive/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/) (Nils Schneider commit, merged by Gavin Andresen) |

Wei Dai's own [1996 announcement of Disperse/Collect](/BitcoinArchive/entries/aftermath/1996-02-06-wei-dai-disperse-collect-crypto-plus-plus/), built from that same Crypto++ library more than a decade before Bitcoin existed, is the earliest public record of the codebase Bitcoin would later depend on.

The codebase dependency had a 22-month operational window (v0.1 January 2009 through v0.4.x) and ended approximately six months after Satoshi's April 2011 departure. The argument below applies to that window, not to running Bitcoin Core today. This is the only direct codebase-level dependency Bitcoin v0.1 has on a named candidate's published code. The evidence: combining (a) b-money cited as reference [1], (b) Crypto++ providing Bitcoin's hash primitive, (c) the fact that Wei Dai is the sole common author of both, places him in a structural position no other candidate occupies.

The objection: Crypto++ was the de-facto standard C++ cryptographic library of the late 2000s. Choosing Crypto++ for SHA-256 in a C++ project of that era was a routine engineering decision, not a signal of self-authorship. The v0.3.6 SSE2 optimization upgrade was [proposed by BitcoinTalk member "BlackEye"](/BitcoinArchive/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/), not by Satoshi alone, which is hard to reconcile with a self-staging reading where Satoshi controls all the codebase decisions.

### 1.3 Cypherpunk credentials and intellectual lineage

Wei Dai is a long-tenure cypherpunk, an early subscriber to the cypherpunks mailing list, and an active participant in adjacent communities (Extropians, SL4) since the 1990s. b-money was developed in the same intellectual environment as Hashcash (Adam Back), Bit Gold (Nick Szabo), and RPOW (Hal Finney). Wei Dai's public scholarship after b-money continued in cryptographic and rationality-related areas; the LessWrong profile shows decades of intellectual output in adjacent fields.

The objection: cypherpunk credentials apply to several candidates (Adam Back, Hal Finney, Nick Szabo, Sassaman). The dimension narrows the candidate set substantially but does not select Wei Dai uniquely.

### 1.4 Capability profile: cryptography PhD-level skill, computer-science background

Wei Dai studied computer science at the University of Washington and worked at Microsoft. The technical capability the b-money paper demonstrates (cryptographic-protocol design at the level of an academic publication) and the engineering capability Crypto++ demonstrates (a maintained C++ library used widely in academic and commercial projects) are consistent with what Bitcoin v0.1's 19,901-line C++ codebase requires.

The objection: this profile applies to many candidates and several non-candidate cypherpunks. Capability is necessary but not sufficient (per the [hypotheses overview methodology](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)).

### 1.5 Windows-side development-environment overlap

[Bitcoin v0.1 was developed on Windows](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/) — the v0.1 readme.txt names Visual C++ 6.0 SP6 and MinGW GCC 3.4.5 as the supported compilers, the source uses Microsoft Hungarian notation, the v0.1.x series shipped as Windows-only `.rar` archives, and the final email's PGP signature footer points to a Windows-only client. Wei Dai's Crypto++ library was, in its formative years through the late 1990s and 2000s, primarily developed on Windows with Microsoft Visual C++; his subsequent employment at Microsoft (§1.4 above) is consistent with continued Windows-side work. Among the named Satoshi candidates, Wei Dai is one of the few whose documented working environment overlaps with the Windows-side stack Bitcoin v0.1 was built on, rather than diverging from it as Hal Finney's [long-term Mac use](/BitcoinArchive/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/) and Peter Todd's [Linux-FHS repository record](/BitcoinArchive/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/) do.

The objection: a Windows-side development environment in the late 2000s was the default across professional C++ work and is consistent with several candidates plus many non-candidate developers. The dimension contributes to the supporting picture but does not select Wei Dai uniquely; the same overlap applies to any Windows-side C++ developer of the period.

## 2. The counter-evidence

| Counter-evidence | Central observation | Strength assessment |
|---|---|---|
| §2.1 August 22, 2008 email exchange | The Adam Back → Wei Dai → Satoshi chain reads as third-party reception; under the hypothesis, Wei Dai would be writing to himself about his own paper | Strongest archive-internal counter |
| §2.2 "I wasn't aware of the b-money page" | Satoshi told Adam Back in private email he had not seen b-money before the referral | Under the hypothesis: a self-deception with no audience |
| §2.3 2014 AALWA retrospective | Wei Dai distinguished himself from Satoshi and asserted Satoshi was "not previously active" in cypherpunks — a claim that argues against Wei Dai's own candidacy | Hypothesis requires sustained public self-deception including this self-undermining structural claim |
| §2.4 Stylometric distance | Bitcoin Institute reanalysis of van Dorst corpus: top 22.99%, 4th of 5 named candidates (Szabo / Finney / Back ahead) | Across the four most-cited stylometric studies, Wei Dai never appears as a top match |
| §2.5 Crypto++ codebase dependency cuts both ways | Crypto++ was the standard C++ crypto library of the era; the SSE2 upgrade was proposed by "BlackEye" | Weakens §1.2 rather than strengthening it under the hypothesis |
| §2.6 Self-denial across multiple statements | 2014 AALWA + long-form interviews + sustained Crypto++ / LessWrong profile under his own name | Hypothesis requires decades of voluntary public self-deception |

### 2.1 The August 22, 2008 email exchange reads as third-party reception

The strongest archive-internal counter-evidence is the structure of the [August 20–22, 2008 email chain](/BitcoinArchive/entries/aftermath/2008-08-20-satoshi-to-adam-back/):

| Date | Direction | Content |
|---|---|---|
| Aug 20, 2008 | Satoshi → Adam Back | Asks about Hashcash citation format for the upcoming whitepaper |
| Aug 21, 2008 | [Adam Back → Satoshi](/BitcoinArchive/entries/aftermath/2008-08-21-adam-back-to-satoshi/) | Provides citation; suggests Satoshi look at Wei Dai's b-money |
| Aug 21, 2008 | [Satoshi → Adam Back](/BitcoinArchive/entries/aftermath/2008-08-21-satoshi-to-adam-back-b-money/) | "I wasn't aware of the b-money page, but my ideas start from exactly that point" |
| Aug 22, 2008 | [Satoshi → Wei Dai](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | "I'm getting ready to release a paper that expands on your ideas" — asks for b-money publication date for the whitepaper citation |
| (date n/a) | Wei Dai → Satoshi | Provides 1998 publication date and archived discussion links |

If Wei Dai were Satoshi, the structure does not naturally make sense. He would have staged every step of it:
- Writing to Adam Back as "Satoshi" asking about Hashcash citation,
- Receiving Adam Back's referral to himself,
- Writing to himself as "Satoshi" two days later asking for b-money publication details,
- Replying to himself with the publication history.

The simpler reading: the chain is what it appears to be — Satoshi seeking citation guidance from Adam Back, Adam referring him to a pre-existing b-money proposal he had not seen, and Satoshi following up with the b-money author to confirm the citation date. Wei Dai's response (providing publication history and links) is consistent with a third party engaging substantively with an unknown correspondent's work. So is Dai's own account of Satoshi's January 10, 2009 follow-up — [he set it aside at the time and only began mining Bitcoin two years later](/BitcoinArchive/entries/aftermath/2014-07-19-wei-dai-next-tech-gold-rush/) — the third-party-reception reading the claim must overturn.

### 2.2 Satoshi's "I wasn't aware of the b-money page" admission

In the August 22, 2008 email to Adam Back, Satoshi wrote: *"I wasn't aware of the b-money page, but my ideas start from exactly that point."* This statement locates Satoshi's b-money knowledge as post-development, learned via Adam Back's referral two months before the whitepaper — examined further in [cypherpunk-independent-arrival](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/).

Under the Wei-Dai = Satoshi reading, this statement is a self-deception with no audience — Satoshi tells Adam Back, in private email, that he had not seen Wei Dai's page, while in fact being its author. The simpler reading: Satoshi genuinely did not know b-money during Bitcoin's design, and learned of it through Adam Back's referral in August 2008. Wei Dai's own [2014 AALWA retrospective](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) endorses this reading: Satoshi reinvented the central ideas independently and learned of b-money only afterwards.

### 2.3 Wei Dai's January 2014 AALWA retrospective

On January 12, 2014, Wei Dai posted on the LessWrong "Ask any LessWronger anything" thread and [answered the Satoshi question directly](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/):

<!-- audit:quote-skip -->
> "My guess is that he's not anyone who was previously active in the academic cryptography or cypherpunks communities, because otherwise he probably would have been identified by now based on his writing and coding styles."

The retrospective makes three statements that bear on the claim:

- Satoshi was "not anyone who was previously active in the academic cryptography or cypherpunks communities" — a structural claim that, taken at face value, selects against Wei Dai himself (a long-tenure cypherpunk).
- Satoshi independently re-invented the central ideas of b-money before learning of Wei Dai's paper through Adam Back's referral.
- Wei Dai distinguishes himself from Satoshi as separate persons throughout the discussion.

The first point applies to other candidates who were also publicly active in cypherpunks during 2007–2008 (Adam Back, Hal Finney, Nick Szabo, Sassaman — see [cypherpunk-independent-arrival](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)), and by the same logic to Wei Dai himself: he was active in the cypherpunks list and visible on Crypto++ maintenance during the relevant period.

For the hypothesis to be true, the entire 2014 retrospective would need to be a public self-deception, including the structural claim about Satoshi's non-activity that argues against Wei Dai's own candidacy.

### 2.4 Stylometric distance

The [Bitcoin Institute reanalysis](/BitcoinArchive/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/) of Bas van Dorst's 75,000-author "Where is Satoshi?" stylometric corpus places Wei Dai at top 22.99% (rank 2,929 of 12,739) — fourth-highest among the five most-cited named candidates, behind Nick Szabo (top 4.67%), Hal Finney (6.89%), and Adam Back (7.87%):

| Stylometric study | Wei Dai's result |
|---|---|
| Skye Grey 2013 (single-hypothesis test of Szabo) | Not in candidate set |
| Aston University 2014 (11 candidates) | Rank not published |
| van Dorst 2024 / Bitcoin Institute reanalysis | Rank 2,929 / 12,739 — top 22.99%, 4th of named candidates |
| Cafiero / Carreyrou NYT 2026 (12 candidates) | Rank not published |

Across the four most-cited stylometric investigations, Wei Dai never appears as a top match for Satoshi. His writing register, while still placing him in the upper quartile of the corpus, is measurably more distant from Satoshi's than Szabo's, Finney's, or Adam Back's. The forensic-fit argument (§1.1, b-money proximity) and the stylometric argument point in different directions for Wei Dai.

### 2.5 The Crypto++ codebase dependency cuts both ways

The Crypto++ inclusion (§1.2) is a structural fit but not strong evidence of authorship. Crypto++ was the standard C++ cryptographic library available in 2007–2008 for any developer building a SHA-256-using system in C++; choosing it was the natural engineering decision regardless of who the developer was. The v0.3.6 SSE2 upgrade (July 2010) was driven by [BitcoinTalk member "BlackEye"](/BitcoinArchive/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/), not by Satoshi alone. If Wei Dai were Satoshi, he would presumably have either implemented SHA-256 in his own way or made the SSE2 decision himself rather than waiting for a forum-member proposal.

### 2.6 Self-denial across multiple statements

Wei Dai has consistently denied being Satoshi:

- **2014 AALWA retrospective** (above) — distinguishes himself from Satoshi explicitly.
- **Long-form interviews and forum posts** since 2014 — Wei Dai treats Satoshi as a separate person throughout, often crediting Satoshi's specific design contributions (the longest-chain consensus rule, the difficulty-adjustment algorithm) in language that would be self-praise if he were Satoshi.
- **Continued Crypto++ and LessWrong activity** under his own name through the 2010s and 2020s — a sustained public profile that would require parallel decoy work if he were also Satoshi during the same period.

Wei Dai's self-denial is structurally similar to Nick Szabo's ([Szabo's 2011 blog post](/BitcoinArchive/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/) credits Nakamoto with fixing a specific shortcoming of his own bit gold design): a sustained public framing that treats Satoshi as a different, named-but-separate person. Both denials, to be undone by the hypothesis, require sustained voluntary public self-deception.

## 3. Within the broader documentary record

Across the four most-cited stylometric investigations, Wei Dai is the named candidate placed *furthest* from Satoshi by the only investigation that publicly ranks all five names (van Dorst / Bitcoin Institute reanalysis). The August 2008 email exchange, the "I wasn't aware of the b-money page" admission, and Wei Dai's own 2014 retrospective form a coherent third-party-reception reading that the hypothesis must overturn.

Wei Dai's structural position in the candidate space differs from other candidates: he is in Group A (Satoshi explicitly cited his work) by construction of the candidate set, but the same primary-source emails that establish the citation pathway also establish that Wei Dai received Bitcoin from Satoshi as a third party rather than originating it.

For comparison with other named-candidate hypotheses, see the [Satoshi-identity hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) and the individual entries for [Adam Back](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/), [Hal Finney](/BitcoinArchive/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/), [Sassaman](/BitcoinArchive/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/), [Kaneko](/BitcoinArchive/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/), [Szabo](/BitcoinArchive/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/), and [Todd](/BitcoinArchive/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/).

## 4. Limits of this entry

- This entry does not present new evidence. It compiles material from the August 2008 email exchange, Wei Dai's January 2014 AALWA retrospective, the Crypto++ inclusion record, the Bitcoin Institute reanalysis of van Dorst's corpus, and the standing public discussion of Wei Dai as a Satoshi candidate.
- Wei Dai's hypothesis differs from candidates with a single triggering articulation (Greenberg 2014 for Hal Finney, NYT 2026 for Adam Back, HBO 2024 for Todd) — Wei Dai has been a structural candidate from before Bitcoin's launch by virtue of the whitepaper citation, with no single major-press articulation.
- If new evidence surfaces — direct documentary links beyond the three-email correspondence, technical fingerprints in Bitcoin v0.1 matching Wei Dai's other code beyond the standard Crypto++ inclusion, or comments by Wei Dai that contradict the 2014 retrospective — this entry should be updated.

[The Wei Dai biography](/BitcoinArchive/participants/wei-dai/) holds the documentary basis — academic record, the b-money proposal, cypherpunk participation, and retrospective statements — that the evidence in §1 and the counter-evidence in §2 weigh.
