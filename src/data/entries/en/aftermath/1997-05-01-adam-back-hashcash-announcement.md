---
title: "Adam Back announces Hashcash: a proof-of-work scheme positioned within the digital-cash discourse"
date: 1997-05-01T00:00:00Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://www.cypherspace.org/hashcash/"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "Adam Back's May 1997 announcement of Hashcash — a partial-hash-collision-based postage scheme proposed as a counter-measure to email spam and anonymous-remailer abuse. The announcement and surrounding Cypherpunks-list discussion positioned Hashcash within the digital-cash conversation rather than purely as anti-spam tooling: Back framed Hashcash as a 'stop-gap measure until digicash becomes more widely used' and used minting language ('mint' for the cost-function) drawing the analogy with physical money. The 1997 announcement begins an eleven-year arc — extended in Back's December 1998 b-money critique and his August 2002 Hashcash paper §7 listing 'hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal' — that culminates in Satoshi Nakamoto contacting Back about Hashcash citation format on August 20, 2008."
isSatoshi: false
tags:
  - "adam-back"
  - "hashcash"
  - "cypherpunks"
  - "proof-of-work"
  - "monetary-policy"
  - "origins"
  - "historic"
secondarySources:
  - name: "Hashcash 2002 paper (Adam Back)"
    url: "http://www.hashcash.org/papers/hashcash.pdf"
    note: "The 2002 paper consolidates 'the various applications, improvements suggested and related subsequent publications' since the 1997 announcement. §1 cites the original 1997 publication; §7 Applications enumerates 'hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal' alongside other applications. The paper also adopts MINT() as the cost-function name, with the explicit note: 'We use the term mint for the cost-function because of the analogy between creating cost tokens and minting physical money.'"
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash, or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
    note: "Source for the secondary-quote 'Hashcash may provide a stop-gap measure until digicash becomes more widely used' and 'Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires' attributed to Back's 1997 Cypherpunks list discussion. The original list-archive URL has not been reverified for this entry; readers requiring strict primary-source verification should cross-reference the Cypherpunks archive at cypherpunks.venona.com or cryptoanarchy.wiki."
relatedEntries:
  - "aftermath/1998-12-06-adam-back-b-money-monetary-critique"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/2008-08-20-adam-back-biography"
  - "correspondence/adam-back/2008-08-20-satoshi-to-adam-back"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
---

In May 1997, [Adam Back](/BitcoinArchive/participants/adam-back/) — then a postdoctoral researcher at the University of Exeter — announced [Hashcash](http://www.cypherspace.org/hashcash/) on the Cypherpunks mailing list and at his cypherspace.org domain. The announcement described "a partial hash collision based postage scheme" — a cryptographic proof-of-work primitive that required a sender to perform measurable CPU work before sending a unit of email or accessing a remailer slot, while remaining trivially easy for the receiver to verify.

Hashcash itself is not a currency. It carries no ledger, no transfers, no consensus, no monetary supply. The system is a self-contained anti-spam / anti-DoS stamp scheme. But Back positioned the proposal within the digital-cash conversation from the start, and the surrounding mailing-list discussion treated Hashcash as a money-adjacent design question rather than purely as anti-spam infrastructure.

## Hashcash as money-adjacent: the 1997 framing

Per secondary reporting (Bitcoin Magazine, *The Genesis Files: Hashcash*), Back argued on the Cypherpunks list:

> "Hashcash may provide a stop-gap measure until digicash becomes more widely used."

> "Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires."

*[Editor: these quotes are reported by secondary sources attributing them to Back's 1997 Cypherpunks-list discussion. The original list-archive URL has not been re-verified for this entry; readers requiring strict primary-source verification should consult the Cypherpunks archives at `cypherpunks.venona.com` or `cryptoanarchy.wiki`.]*

The framing positions Hashcash explicitly relative to David Chaum's [DigiCash / Ecash](https://en.wikipedia.org/wiki/Ecash) (then the most-developed digital-cash system) and treats it as a complement to digital-cash infrastructure rather than as a fully separate technical category.

## The minting metaphor

Back's later Hashcash paper (August 2002) makes the money analogy explicit at the level of function naming. From [§2 Cost-Functions](http://www.hashcash.org/papers/hashcash.pdf):

> "We use the term **mint** for the cost-function because of the analogy between creating cost tokens and minting physical money."

The cost-function is named `MINT()` and the verification function `VALUE()`. The terminology choice was not incidental: Back was framing Hashcash's CPU-burn step as a form of token creation analogous to physical-money minting.

## §7 Applications: Hashcash as b-money's mint

The same 2002 paper §7 Applications lists, alongside DoS-throttling and anti-spam applications:

> "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal, an electronic cash scheme without a banking interface."

Reference [19] in the paper is Wei Dai's [b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) (1998). This entry makes explicit, in a refereed publication, the configuration Bitcoin would later realize: a Hashcash proof-of-work primitive serving as the minting mechanism for a decentralized digital-cash system. Back proposed it as an application; he did not implement it. The 2002 paper is documented separately under `secondarySources` above.

The intermediate primary-source — Back's [December 6, 1998 cypherpunks-list critique of b-money](/BitcoinArchive/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) — is documented in its own entry; that critique identifies seven monetary-design issues in b-money and explicitly proposes "to create value you burn CPU time, just like with hashcash" as the candidate minting approach.

## What this entry establishes

This entry records the 1997 starting point of an eleven-year arc:

| Year | Primary source | What Back said about Hashcash and money |
|---|---|---|
| 1997-05 | Hashcash announcement (Cypherpunks list, cypherspace.org) | Positioned Hashcash as a "stop-gap until digicash becomes more widely used" |
| 1998-12-06 | [Cypherpunks-list b-money critique](/BitcoinArchive/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) | Identified seven monetary-design issues; proposed "to create value you burn CPU time, just like with hashcash" |
| 2002-08-01 | Hashcash paper §2 + §7 | "mint" terminology; b-money minting application enumerated |
| 2008-08-20 | [Satoshi to Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) | Satoshi contacted Back about Hashcash citation format for the Bitcoin whitepaper |

*[Editor: Hashcash is not a currency, and this entry does not claim Back designed Bitcoin. The 1997 announcement is anti-spam infrastructure with money-adjacent framing; the substantive monetary-design work is in the 1998-12-06 b-money critique and the 2002 paper. This entry is the chronological starting point. None of it implies Back implemented Bitcoin or Hashcash-as-currency — Bitcoin's component synthesis (the longest-chain consensus rule, UTXO model, mining-reward issuance, 21-million cap, difficulty-adjustment algorithm) is documented separately in [Bitcoin design lineage](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/). Back's own retrospective framing of his interest in this design space appears in his [2026-04-08 X post](https://x.com/adam3us/status/2041811857732768148) responding to NYT's Carreyrou: "I was early in laser focus on the positive societal implications of cryptography, online privacy and electronic cash, hence my ~1992 onwards active interest in applied research on ecash."]*
