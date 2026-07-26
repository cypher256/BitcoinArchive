---
title: "Jed McCaleb — built Mt. Gox, then built two chains designed to remove mining"
date: 2010-07-18T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Jed_McCaleb"
sourceNote: "Wikipedia is used here for the career chronology only. The XRP Ledger's design intent is cited to Ripple's own whitepaper and to the court's undisputed factual record in SEC v. Ripple; the quotations about Bitcoin are cited to the interviews they came from."
author: "Bitcoin Institute"
participants:
  - name: "Jed McCaleb"
    slug: "jed-mccaleb"
description: "Created Mt. Gox in 2010 and sold it in 2011, then co-created the XRP Ledger and Stellar. Says the whitepaper convinced him double-spend was solvable at all."
isSatoshi: false
tags:
  - "jed-mccaleb"
  - "biography"
  - "mt-gox"
  - "ripple"
  - "altcoin"
secondarySources:
  - name: "Forbes — 'Ripple protocol developer Jed McCaleb on discovering Bitcoin, founding Mt. Gox and launching Stellar' (November 16, 2019)"
    url: "https://www.forbes.com/sites/justinoconnell/2019/11/16/ripple-protocol-developer-jed-mccaleb-on-discovering-bitcoin-founding-mt-gox-and-launching-stellar/"
  - name: "Yahoo Finance — 'Crypto pioneer Jed McCaleb: most financial institutions are not going to use bitcoin' (January 2, 2019)"
    url: "https://finance.yahoo.com/news/crypto-pioneer-jed-mccaleb-most-105604729.html"
  - name: "Ripple — consensus whitepaper (2014)"
    url: "https://ripple.com/files/ripple_consensus_whitepaper.pdf"
  - name: "XRP Ledger — FAQ (consensus as a substitute for proof-of-work)"
    url: "https://xrpl.org/about/faq"
  - name: "SEC v. Ripple Labs — Order, Case 1:20-cv-10832-AT-SN, Doc. 874 (S.D.N.Y., July 13, 2023)"
    url: "https://www.nysd.uscourts.gov/sites/default/files/2023-07/SEC%20vs%20Ripple%207-13-23.pdf"
  - name: "Wikipedia — Mt. Gox (launch date, sale, and peak share of global trading)"
    url: "https://en.wikipedia.org/wiki/Mt._Gox"
relatedEntries:
  - aftermath/2014-02-28-mt-gox-bankruptcy
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - analysis/2008-10-31-fixed-supply-vs-adjustable-money
  - analysis/2026-07-26-altcoin-count-and-design-comparison
---

![Editorial infographic on a dark background: a bordered box labelled CARD TRADING connected to a small panel of stacked rows, a ring of nodes labelled CONSENSUS, a crossed-out mark beside it, a horizontal timeline running from 2007 to 2014, and three caption boxes along the bottom.](/BitcoinArchive/images/analysis/2010-07-18-jed-mccaleb-biography-hero.png)

Jed McCaleb had already built a file-sharing network with millions of simultaneous users — eDonkey2000, released through his company MetaMachine in 2000 — before he registered a domain for trading *Magic: The Gathering* cards. He bought mtgox.com in 2007 for that purpose. On July 18, 2010 he redeployed the spare domain as something else: a Bitcoin exchange with a price-quoting service.

Almost everything the general public knows about Bitcoin's first four years passed through that site. By 2013 and into 2014 it was handling over 70% of the world's bitcoin trades, and its [collapse in February 2014](/BitcoinArchive/entries/aftermath/2014-02-28-mt-gox-bankruptcy/) is the largest custody-collapse event in Bitcoin's recorded loss history. McCaleb was not running it by then. He sold the site to Mark Karpelès in early 2011 — Wikipedia's article on him says February, its article on the exchange says March, and this archive does not have a basis to prefer one — and stayed on as a minority owner until the end.

## What the whitepaper did to him

McCaleb's account of encountering Bitcoin is the most compressed statement of the problem Satoshi solved that any altcoin founder has given:

<!-- audit:quote-skip -->
> I didn't think it was possible to solve [the double-spend] problem before I read the white paper.

That is a stronger endorsement than praise. It is an admission that the category of "solvable" had to be redrawn. What follows from it — everything McCaleb built afterward — is an argument about the *cost* of the solution rather than its validity.

## Two chains built to remove mining

In 2011 McCaleb began work on what became the XRP Ledger, and in 2014 he co-founded the Stellar Development Foundation with Joyce Kim. Both designs replace proof-of-work with agreement among a curated validator set. His reasoning is explicit:

<!-- audit:quote-skip -->
> If you can solve the consensus algorithm without mining, obviously that's a better situation, because literally billions of dollars are spent on mining.

He is equally explicit that the property he gave up is real, and that giving it up was not free:

<!-- audit:quote-skip -->
> Bitcoin is obviously extremely decentralized, and there's no central company driving it forward, and that's a really awesome model, but it's very hard to replicate.

"Very hard to replicate" is the honest form of the concession. The founder-led chains that came after Bitcoin did not decline decentralization on principle; most of them concluded it could not be reproduced deliberately, because Bitcoin's version of it depends on a launch condition — an absent founder, no pre-issuance, no company — that cannot be re-staged once you are visibly staging it.

The court record in *SEC v. Ripple* states the design intent as an undisputed fact, in the judge's own summary:

<!-- audit:quote-skip -->
> They aimed to create a faster, cheaper, and more energy-efficient alternative to the bitcoin blockchain, the first blockchain ledger which was introduced in 2009. ... When the XRP Ledger launched in 2012, its source code generated a fixed supply of 100 billion XRP.

That second sentence is the structural break. Bitcoin's supply is issued over time to whoever does the work; XRP's supply existed in full at block zero, in the founders' hands. [The fixed-supply comparison](/BitcoinArchive/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/) treats the schedule question; the distribution question — who holds the coins on day one — is a separate axis, and it is the one on which pre-generated chains differ from mined ones most sharply.

The XRP Ledger's current documentation states the substitution without hedging:

<!-- audit:quote-skip -->
> Proof of Work (PoW) was the first mechanism to solve the double spend problem without requiring a trusted 3rd party. The XRP Ledger's consensus mechanism solves the same problem in a far faster, cheaper and more energy efficient way.

Ripple's original 2014 whitepaper had framed the same choice as a latency argument rather than an energy one — the goal being to avoid the requirement that all nodes communicate synchronously, by relying on "collectively-trusted subnetworks." Trust is the word doing the work, and the design does not conceal it.

## Where he thought Bitcoin would not go

In January 2019 he made a prediction that reads differently now than it did then:

<!-- audit:quote-skip -->
> Most financial institutions are not going to use bitcoin.

Read narrowly — as a claim about banks running Bitcoin as settlement rails — the record so far has not contradicted him. Read as a claim about institutional holding, spot exchange-traded funds and corporate treasury positions since 2024 point the other way. The distinction between using a network and holding an asset is the same one that separates [electronic cash from digital gold](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold/) inside Bitcoin's own history, and McCaleb's sentence is only wrong if the two are collapsed.

## Why he is in this archive

McCaleb occupies a position no one else does: he built the institution through which most early Bitcoin trading flowed, and then spent a decade building the alternatives to the mechanism that made it necessary. Neither the XRP Ledger nor Stellar descends from Bitcoin's code, so neither appears in [the fork-and-altcoin genealogy](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/). Mt. Gox does appear in this history, unavoidably, and the man who created it left a clear statement of why he thought Bitcoin was both a genuine breakthrough and a thing worth building around.
