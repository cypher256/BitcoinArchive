---
title: "What is Bitcoin actually made of? A component-by-component walk through the whitepaper's references"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Bitcoin v0.1 reuses one cryptographic primitive (proof-of-work) from a cited cypherpunk system (Hashcash), borrows several general-purpose computer-science components (Merkle trees, linked timestamping, probability theory) without inheriting them from any single cited reference, and synthesizes the rest (decentralized consensus, the UTXO model, mining-reward issuance, the 21-million monetary cap, P2P propagation, ECDSA-based transactions, difficulty adjustment) as new design. This entry walks through what Bitcoin actually contains and where each component came from, separating documented contemporaneous use (Hashcash, primary-source-confirmed) from post-hoc citation (b-money, primary-source-confirmed) from general-CS reuse (Merkle, Haber-Stornetta, Feller — undetermined) from novel synthesis (no whitepaper citation possible)."
isSatoshi: false
tags:
  - "bitcoin"
  - "whitepaper"
  - "design-lineage"
  - "proof-of-work"
  - "hashcash"
  - "b-money"
  - "merkle-tree"
  - "analysis"
  - "satoshi-identity"
secondarySources:
  - name: "Bitcoin whitepaper — references list"
    url: "https://bitcoin.org/bitcoin.pdf"
  - name: "Adam Back — Hashcash paper (1997, revised 2002)"
    url: "http://www.hashcash.org/papers/hashcash.pdf"
  - name: "Wei Dai — b-money proposal (1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Ralph Merkle — Protocols for public key cryptosystems (1980)"
    url: "https://www.merkle.com/papers/Protocols.pdf"
  - name: "Bitcoin Magazine — Adam Back's Complete Emails with Satoshi Nakamoto"
    url: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
relatedEntries:
  - aftermath/1997-03-28-adam-back-hashcash-announcement
  - aftermath/1998-12-06-adam-back-b-money-monetary-critique
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back
  - correspondence/adam-back/2008-08-21-adam-back-to-satoshi
  - correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2009-01-09-satoshi-code-analysis
inlineLinkKeywords:
  - "Bitcoin design lineage"
  - "what Bitcoin reuses"
  - "whitepaper reference categories"
---

Bitcoin v0.1 reuses one cryptographic primitive (proof-of-work) from a cited cypherpunk system (Hashcash), borrows several general-purpose computer-science components (Merkle trees, linked timestamping, probability theory) without inheriting them from any single one of its cited references, and synthesizes the rest (decentralized consensus, the UTXO model, mining-reward issuance, the 21-million monetary cap, P2P propagation, ECDSA-based transactions, difficulty adjustment) as new design. The [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) has eight numbered references, but they do not all play the same role. This entry walks through what Bitcoin actually contains and where each component came from, separating documented contemporaneous use from post-hoc citation from general-knowledge reuse from novel synthesis.

## 1. Citation categories

Before splitting the eight whitepaper references into categories, one feature of Satoshi's documented process matters for how the categories are named. Satoshi told Hal Finney on [November 10, 2008](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney/), the day after Hal's first technical questions on the cryptography mailing list:

> "I appreciate your questions. I actually did this kind of backwards. I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper. I think I will be able to release the code sooner than I could write a detailed spec."

This places the whitepaper at the *end* of Satoshi's process, not the start. The paper documented a working code base; the references were assembled to anchor the documented work in existing literature. "Design period" in the conventional sense — a discrete pre-implementation phase — is not the right frame; Satoshi was building Bitcoin in code while doing the conceptual work. We use "development period" below to mean the period in which Satoshi was building Bitcoin (writing code, working through the design problems, and ultimately writing the paper that documents the result).

With that frame, the whitepaper's eight references fall into three categories with respect to Satoshi's documented process. A fourth category — novel components — is not represented in the references list because there is nothing to cite.

1. **Used during development (primary-source-confirmed).** Satoshi was demonstrably aware of the reference and using its concepts while building Bitcoin. The August 20–22, 2008 email exchange between Satoshi and [Adam Back](/BitcoinArchive/participants/adam-back/) establishes [Hashcash](http://www.hashcash.org/papers/hashcash.pdf) in this category.
2. **Cited post-hoc (primary-source-confirmed).** Satoshi was *not* aware of the reference during development, learned of it later, and added the citation to the whitepaper's reference list. The August 22, 2008 email exchange confirms [Wei Dai's b-money](http://www.weidai.com/bmoney.txt) in this category.
3. **General computer-science knowledge (background).** The reference belongs to standard cryptography or probability theory available to any well-read computer scientist of the period. Whether Satoshi consulted the specific cited paper or arrived at the concept via general training is not recoverable from primary sources. Merkle trees (1980), Haber-Stornetta linked timestamping (1991–1997), and Feller's probability-theory textbook (1957) fall here.
4. **Novel components (no citation possible).** Components Bitcoin invents without precedent. Decentralized consensus by longest-chain rule weighted by PoW, the UTXO model, mining-reward block-subsidy issuance, the 21-million cap, the difficulty-adjustment algorithm, and the operational P2P network all fall here.

## 2. Component-by-component lineage

| Bitcoin component | Cited reference | Use category | Notes |
|---|---|---|---|
| Proof of work | [6] Hashcash (Back 1997, rev. 2002) | Used during development | Confirmed by Aug 20–22, 2008 emails between Satoshi and Back |
| Linked timestamping / chain ordering | [2-5] Haber-Stornetta 1991, 1993, 1997 + Massias 1999 | General CS knowledge | Standard 1990s timestamping literature; Bitcoin's chain-of-blocks concept resembles linked timestamping |
| Merkle trees in block headers | [7] Merkle 1980 | General CS knowledge | Standard CS textbook concept; used for transaction-set efficiency |
| Probability analysis of double-spend | [8] Feller 1957 | General CS knowledge | Standard probability textbook; used in whitepaper §11 Calculations |
| Distributed digital cash concept | [1] b-money (Wei Dai 1998) | Cited post-hoc | Satoshi's Aug 22 reply: "I wasn't aware of the b-money page" |
| Decentralized consensus (longest-chain rule weighted by PoW) | — | Novel | Bitcoin's central innovation |
| UTXO model | — | Novel | Bitcoin's transaction-output design |
| Mining-reward block-subsidy issuance | — | Novel | Bitcoin's monetary-issuance mechanism |
| 21-million supply cap | — | Novel | Bitcoin's monetary-policy parameter |
| Difficulty adjustment | — | Novel | Bitcoin-specific algorithm |
| P2P network propagation (the running network) | — | Novel synthesis | Generic P2P principles applied to ledger replication |
| ECDSA / secp256k1 transaction signatures | — | Standard cryptography | Standard tool, not specifically cited |

The novel components are not in the whitepaper's reference list because no one had previously published them. They are Bitcoin's contribution to the design space.

## 3. Primary-source evidence for the citation categories

### 3.1 Hashcash: used during development

Satoshi's [August 20, 2008 email to Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) asked specifically about the correct citation format for Hashcash. The email body describes Bitcoin's mechanism in detail and references Hashcash as an existing primitive Satoshi was reusing in the code. This places Hashcash usage *during* development, not *after* it.

The "cash" in *Hashcash* is a computational-postage metaphor (Back's 1997 anti-spam denial-of-service counter-measure), not a currency. The system contains only the proof-of-work primitive — no ledger, no transfers, no consensus, no monetary supply. Bitcoin reuses the primitive and builds the rest separately; see the [Adam Back hypothesis entry §2.2](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/) for the implications for the Hashcash-author-equals-Bitcoin-author argument.

### 3.2 b-money: cited post-hoc

Satoshi's [August 22, 2008 reply to Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money/) opens with "Thanks, I wasn't aware of the b-money page, but my ideas start from exactly that point." This is direct primary-source evidence that b-money was added to the whitepaper's reference list *after* the code was substantially complete (per the November 10, 2008 letter to Hal Finney quoted in §1, the code preceded the paper). The same day, Satoshi [emailed Wei Dai directly](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) about the proposal.

The citation that appears in the whitepaper is reference [1] — Wei Dai, "b-money," 1998. The numerical position is editorial; the content was added late. [Wei Dai's 2014 retrospective on the AALWA thread](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) is consistent with this: Wei Dai indicates Satoshi was "not previously active" in cypherpunk communities — a framing that fits a designer who had to discover b-money via referral.

### 3.3 Merkle trees, timestamping, probability: general CS knowledge

The whitepaper uses Merkle trees in block headers (§7), describes a timestamp-server-style chain construction (§3), and analyzes double-spend probability (§11). Each has a cited reference. But the underlying concepts are standard 1990s–2000s computer science available to anyone with relevant graduate-level exposure. Satoshi's email correspondence does not contain a moment analogous to "I wasn't aware of [Merkle trees]" or "I wasn't aware of [linked timestamping]" — the absence of such evidence does not establish contemporaneous use, but it also does not establish post-hoc addition. The records leave the question open: Satoshi may have consulted these specific papers, or may have arrived at the concepts through general training and added the citations as the most relevant prior art.

### 3.4 Novel components: no citation possible

Decentralized consensus by longest-chain rule weighted by proof-of-work, the UTXO model, mining-reward block-subsidy issuance, the 21-million monetary cap, and the difficulty-adjustment algorithm have no precedent in the whitepaper's reference list because they did not exist as an integrated design before Bitcoin. The whitepaper presents them as Bitcoin's contribution. Some sub-components (the longest-chain idea, P2P consensus generally) have related prior work in distributed-systems literature; the claim is that the specific *synthesis* is novel.

## 4. Implications for Satoshi-identity hypotheses

The component-level breakdown bears directly on identity-hypothesis weighting. Two specific implications:

- **Authoring Hashcash means designing one of Bitcoin's many components.** The PoW primitive is one cited contribution in a system that contains many novel components. The forensic-fit argument that "Hashcash author = Bitcoin author" can therefore weight Hashcash as a partial contribution but not as the whole. See the [Adam Back = Satoshi hypothesis entry](/BitcoinArchive/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/).
- **Authoring b-money similarly does not mean authoring Bitcoin's design.** The b-money citation was added after Satoshi learned of it from Adam Back's referral; b-money's concepts did not influence Bitcoin's design during the development period. See the [hypotheses overview's Wei Dai profile](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).

Other named-candidate hypotheses (Sassaman, Kaneko, Todd, Wright, etc.) are not directly tied to whitepaper-reference authorship and are evaluated on different grounds (timing, capability, visibility, external denials). See the [hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).

## 5. Limits of this entry

- This entry is restricted to whitepaper-reference-level lineage. It does not analyze Bitcoin v0.1 source-code-level reuse — for example, the v0.1 codebase imports specific cryptographic libraries (Crypto++ for SHA-256) that are not whitepaper references — which is the scope of [the source-code analysis entry](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-code-analysis/).
- The "general CS knowledge" category leaves contemporaneous knowledge undetermined. If new primary-source evidence surfaces (additional Satoshi correspondence, design notes), individual rows in §2 may move between categories.
- The "novel synthesis" category claims absence of precedent only at the level of integration. Some sub-components have related prior work in distributed-systems literature; the claim is that the specific *synthesis* is novel.

*[Editor: this entry is the canonical place in the archive for "what Bitcoin reuses vs invents". Hypothesis entries should not duplicate the table here; they should reference this entry and cite the specific row(s) relevant to their argument.]*
