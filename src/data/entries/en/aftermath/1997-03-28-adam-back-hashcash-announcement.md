---
title: "Adam Back announces Hashcash on the Cypherpunks list — proof-of-work positioned within the digital-cash discourse"
date: 1997-03-28T16:52:26Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://www.hashcash.org/papers/announce.txt"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "Adam Back announces Hashcash to the Cypherpunks list — a proof-of-work postage scheme against spam, framed within the digital-cash discourse as a stop-gap or fallback for digicash."
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
  - name: "Cypherpunks list archive (venona mirror) — same announcement"
    url: "https://cypherpunks.venona.com/date/1997/03/msg00774.html"
    note: "The same March 28, 1997 announcement archived on the venona Cypherpunks-list mirror. Server access has been intermittent; the canonical sourceUrl is Adam Back's own hosting at hashcash.org/papers/announce.txt."
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash, or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
    note: "Secondary reporting on the 1997 announcement and its monetary-discourse positioning."
relatedEntries:
  - "aftermath/1998-12-06-adam-back-b-money-monetary-critique"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/2008-08-20-adam-back-biography"
  - "correspondence/adam-back/2008-08-20-satoshi-to-adam-back"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
---

On March 28, 1997, [Adam Back](/BitcoinArchive/participants/adam-back/) — then a postdoctoral researcher at the University of Exeter — sent an email to the Cypherpunks mailing list with the subject line `[ANNOUNCE] hash cash postage implementation`. The full announcement is preserved at [hashcash.org/papers/announce.txt](http://www.hashcash.org/papers/announce.txt), Adam Back's own hosting of the original post.

Hashcash itself is not a currency. It carries no ledger, no transfers, no consensus, no monetary supply. The system is a self-contained anti-spam / anti-DoS stamp scheme. But the 1997 announcement explicitly positioned Hashcash within the digital-cash conversation, in a dedicated section *How does this fit in with digicash*.

## What the announcement said about money

The announcement opens with the technical proposal — a "partial hash collision based postage scheme" with arbitrarily expensive computation and instant verification, intended for remailer postage and spam control. After the implementation walkthrough and example applications, the announcement turns to its relationship with digital cash.

From the *How does this fit in with digicash* section (verbatim):

> "Digicash postage on remailers, and mail would be useful, however there are a number of problems with digicash:
>
>    * It is more onerous to set up an account (form filling etc)
>    * Not many people have accounts
>    * It's only anonymous for the payer anonymous (and not anonymous for the seller)
>
> So my suggestion is that we have remailers which accept either hash collision postage, or digicash postage. The advantages of this approach are:
>
>    * Hashcash may provide a stop gap measure until digicash becomes more widely used
>    * Hashcash is free, all you've got to do is burn some cycles on your PC. It is in keeping with net culture of free discourse, where the financially challenged can duke it out with millionaires, retired government officials, etc on equal terms.
>    * Hashcash may provide us with a fall back method for controling spam if digicash goes sour (gets outlawed or required to escrow user identities)."

This places Hashcash, from the day of its public announcement, as a complement to digital-cash infrastructure — explicitly modelled against David Chaum's [DigiCash / Ecash](https://en.wikipedia.org/wiki/Ecash) (then the most-developed digital-cash system) — rather than as a fully separate technical category.

## The minting metaphor: 1997 implementation, 2002 paper

The announcement also uses minting language in the implementation walkthrough — the program command for generating a cost token is `hashcash mint`, and the announcement describes "double spending protection" in the implementation. The `hashcash mint` / `mint` framing in 1997 is later formalized at the function-name level in Back's 2002 Hashcash paper. From [§2 Cost-Functions](http://www.hashcash.org/papers/hashcash.pdf):

> "We use the term **mint** for the cost-function because of the analogy between creating cost tokens and minting physical money."

The cost-function is named `MINT()` and the verification function `VALUE()`. The terminology choice was not incidental — it was framing Hashcash's CPU-burn step as a form of token creation analogous to physical-money minting from the start.

## §7 Applications: Hashcash as b-money's mint

The 2002 paper §7 Applications lists, alongside DoS-throttling and anti-spam applications:

> "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal, an electronic cash scheme without a banking interface."

Reference [19] in the paper is Wei Dai's [b-money](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) (1998). This entry makes explicit, in a refereed publication, the configuration Bitcoin would later realize: a Hashcash proof-of-work primitive serving as the minting mechanism for a decentralized digital-cash system. Back proposed it as an application; he did not implement it.

The intermediate primary source — Back's [December 6, 1998 cypherpunks-list critique of b-money](/BitcoinArchive/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) — is documented in its own entry; that critique identifies seven monetary-design issues in b-money and explicitly proposes "to create value you burn CPU time, just like with hashcash" as the candidate minting approach.

## What this entry establishes

This entry records the 1997 starting point of an eleven-year arc:

| Date | Primary source | What Back said about Hashcash and money |
|---|---|---|
| 1997-03-28 | [Hashcash announcement](http://www.hashcash.org/papers/announce.txt) (Cypherpunks list) | Positioned Hashcash as a "stop gap measure until digicash becomes more widely used"; section *How does this fit in with digicash*; `hashcash mint` command and "double spending protection" in the implementation |
| 1998-12-06 | [Cypherpunks-list b-money critique](/BitcoinArchive/entries/aftermath/1998-12-06-adam-back-b-money-monetary-critique/) | Identified seven monetary-design issues in b-money; proposed "to create value you burn CPU time, just like with hashcash" |
| 2002-08-01 | [Hashcash paper §2 + §7](http://www.hashcash.org/papers/hashcash.pdf) | "We use the term **mint** for the cost-function because of the analogy between creating cost tokens and minting physical money"; §7 enumerates "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal" |
| 2008-08-20 | [Satoshi to Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) | Satoshi contacted Back about Hashcash citation format for the Bitcoin whitepaper |

In Back's own retrospective framing in the [April 2026 X post](https://x.com/adam3us/status/2041811857732768148) responding to the NYT investigation: "I was early in laser focus on the positive societal implications of cryptography, online privacy and electronic cash, hence my ~1992 onwards active interest in applied research on ecash."

*[Editor: Hashcash is not a currency, and this entry does not claim Back designed Bitcoin. The 1997 announcement is anti-spam infrastructure with money-adjacent framing built into the announcement post itself; the substantive monetary-design analysis is in the 1998-12-06 b-money critique and the 2002 paper. None of it implies Back implemented Bitcoin or Hashcash-as-currency — Bitcoin's component synthesis (the longest-chain consensus rule, UTXO model, mining-reward issuance, 21-million cap, difficulty-adjustment algorithm) is documented separately in [Bitcoin design lineage](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/).]*
