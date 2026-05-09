---
title: "Why Bitcoin's fork wars were not OSS fork wars — the vacuum Satoshi left, the money on top, and the three layers that bind"
date: 2015-08-15T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
author: "Bitcoin Institute"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Wladimir van der Laan"
    slug: "wladimir-van-der-laan"
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Roger Ver"
    slug: "roger-ver"
  - name: "Jihan Wu"
    slug: "jihan-wu"
  - name: "Mike Belshe"
    slug: "mike-belshe"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Why Bitcoin's 2015-2017 fork wars ran as identity contests, not OSS disputes: the post-2011 authority vacuum, the economic weight on rule choices, and the three layers that bound code to currency."
isSatoshi: false
tags:
  - "block-size-war"
  - "governance"
  - "fork"
  - "scaling"
  - "bitcoin-core"
  - "analysis"
secondarySources:
  - name: "Wikipedia — Bitcoin Core"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Core"
  - name: "Wikipedia — Bitcoin Cash"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Cash"
  - name: "Wikipedia — SegWit2x"
    url: "https://en.wikipedia.org/wiki/SegWit2x"
  - name: "Wikipedia — Blockstream"
    url: "https://en.wikipedia.org/wiki/Blockstream"
  - name: "Wikipedia — Bitmain"
    url: "https://en.wikipedia.org/wiki/Bitmain"
relatedEntries:
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2025-02-21-mike-hearn-coingeek-retrospective
  - aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment
  - aftermath/2015-08-15-bitcoin-xt-launch
  - aftermath/2017-08-01-bitcoin-cash-fork
  - aftermath/2017-11-08-segwit2x-cancellation
translationStatus: complete
---

Bitcoin's 2015-2017 fork wars produced four hard-fork attempts on the main chain (Bitcoin XT, Bitcoin Classic, Bitcoin Unlimited, SegWit2x) and one chain split that survived (Bitcoin Cash, August 1, 2017). Two adjacent analyses cover what those events were and what naming did to them: [the fork and altcoin genealogy](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) records the event sequence, and [the Bitcoin Core rebrand authority-effects analysis](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) reads the lexical asymmetry the 2014 rename introduced. This entry asks a third question those two do not directly take on: why did each of these events run as a political and economic contest, not as an ordinary open-source disagreement?

The reading offered here is structural. Three conditions present in 2014-2017 Bitcoin — a vacuum of designated authority, the economic weight that had accumulated on rule decisions, and a three-layer separation between the protocol, the software, and the live currency network — together made it structurally impossible for a disagreement on a load-bearing parameter to remain a software question. The naming asymmetry covered in the rebrand analysis is the lexical instrument by which these conditions expressed themselves. The conditions themselves are what this entry reads.

## 1. The vacuum after April 2011 (the precondition, not the result)

A common reading places Satoshi's departure inside the war's emotional shape — "no wonder he left, with all this fighting." The chronology says the opposite:

| Date | Event |
|---|---|
| April 23, 2011 | Final Satoshi email to [Mike Hearn](/BitcoinArchive/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/) |
| April 26, 2011 | [Final Satoshi email to Gavin Andresen](/BitcoinArchive/entries/aftermath/2011-04-26-satoshi-final-known-email/) (alert-key handover) |
| 2011-2014 | Codebase maintained by Andresen and a small group; no major disputes |
| December 16, 2013 | [Bitcoin Core rebrand merged](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) |
| August 15, 2015 | [Bitcoin XT launched](/BitcoinArchive/entries/aftermath/2015-08-15-bitcoin-xt-launch/) — the public phase of the war begins |
| August 1, 2017 | [Bitcoin Cash chain split](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) |

Satoshi left more than four years before the public-fork phase opened. The dispute did not drive him away; the dispute happened in the structural void his absence had already created. (For one reading of *why* Satoshi left, see [Hearn's 2025 CoinGeek retrospective](/BitcoinArchive/entries/aftermath/2025-02-21-mike-hearn-coingeek-retrospective/) on the BitcoinTalk evangelical pressure of late 2010 — that dynamic is separate from what came after 2014.)

There was no public successor announcement, no legal entity holding the project, and no formal handover document. The closest thing to a handover, on Hearn's later account, was ad-hoc:

> "When Satoshi left, he handed over the reins of the program we now call Bitcoin Core to Gavin Andresen, an early contributor. ... Only one tiny problem: Satoshi never actually asked Gavin if he wanted the job, and in fact he didn't."
>
> — Mike Hearn, ["The resolution of the Bitcoin experiment"](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) (January 14, 2016)

[Andresen's lead-maintainer announcement](/BitcoinArchive/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/) (December 19, 2010) preceded Satoshi's silence by four months and was scoped to the codebase, not the protocol. After 2011 the codebase had a maintainer; the protocol had no one. The Bitcoin Foundation (founded September 2012) attempted that role and [collapsed financially by 2015](https://coinjournal.net/news/recently-elected-board-member-olivier-janssens-reveals-all-bitcoin-foundation-broke-gavin-seems-to-confirm/). The codebase maintainers (Andresen, then [Wladimir van der Laan](/BitcoinArchive/participants/wladimir-van-der-laan/) from April 2014) were de facto deciders, but their authority was conventional, not designated.

This is the precondition that everything else fills. The naming asymmetry, the economic weight, and the three-layer structure are what flowed in.

## 2. The money on top by 2014-2015

By the time of the [Bitcoin XT launch (August 15, 2015)](/BitcoinArchive/entries/aftermath/2015-08-15-bitcoin-xt-launch/), Bitcoin's economic surface had grown well past anything resembling a hobby project:

- **Price.** Approximately $230 in August 2015, with prior peaks above $1,000 in late 2013.
- **Mining.** ASIC hardware had displaced GPU and CPU mining. [Bitmain](https://en.wikipedia.org/wiki/Bitmain) (founded October 2013, [Jihan Wu](/BitcoinArchive/participants/jihan-wu/) co-founder) was the dominant ASIC manufacturer. Mining had become an industrial activity — capital-intensive, geographically clustered, and economically dependent on rule continuity.
- **Exchanges and custody.** Major exchanges (Bitfinex, Coinbase, Kraken) carried institutional flow. Custody services protected significant balances; BitGo (founded 2013, [Mike Belshe](/BitcoinArchive/participants/mike-belshe/) CEO, later a 2017 [SegWit2x](/BitcoinArchive/entries/aftermath/2017-11-08-segwit2x-cancellation/) signatory) was a representative example.
- **Corporate orbit on the conservative side.** [Blockstream](https://en.wikipedia.org/wiki/Blockstream) (founded November 2014, co-founded by [Adam Back](/BitcoinArchive/participants/adam-back/), [Gregory Maxwell](/BitcoinArchive/participants/gregory-maxwell/), Pieter Wuille, Jorge Timón, Matt Corallo, and others) employed several Bitcoin Core contributors on a research-and-tooling agenda (sidechains, Lightning, Liquid).
- **Corporate orbit on the larger-block side.** [Roger Ver](/BitcoinArchive/participants/roger-ver/)'s bitcoin.com was the most visible commercial property aligned with the larger-block faction. Bitmain's hashrate position aligned commercially with on-chain scaling. Later, [nChain](/BitcoinArchive/entries/aftermath/2018-11-15-bitcoin-sv-fork/) (Calvin Ayre, Craig Wright) provided the corporate base for the BSV split.

When a load-bearing parameter (block size, fee market, soft-fork activation policy) is debated under these conditions, "purely technical" judgment is no longer separable from revenue, hashrate alignment, and asset valuation. Each side could point to a coherent technical argument, and each side's coherent technical argument also happened to align with its commercial position. That alignment is not by itself a disqualification — it is what happens when a project becomes economically large. It does, however, remove the assumption that participants were arguing only about what was technically right.

## 3. The three layers that bind

This is the conceptual point that distinguishes Bitcoin from an ordinary open-source project. Three things share the name "Bitcoin":

| Layer | What it is |
|---|---|
| Protocol | The consensus rules — block format, signature validation, the longest-chain rule, the 21 M cap |
| Software | The reference client (Bitcoin Core), and any alternative implementation (XT, Classic, Unlimited, ABC, etc.) that agrees with the protocol |
| Network / currency | The live chain operating under those rules — every node, miner, exchange, holder, and payment processor that has adopted a given rule set |

In ordinary OSS the three collapse: the project, the software, and the deployed thing are co-extensive. Forking the codebase creates an alternative implementation; it changes nothing else. A Spring fork is a Spring fork. A Ruby fork is a Ruby fork. The brand and the user base do not transfer; the original keeps its identity, and the fork starts fresh with whatever audience it can build.

In Bitcoin the three are separable in principle but bound in practice. The protocol is defined by what nodes accept; the software encodes that protocol; the live currency operates wherever the rules are jointly upheld. Forking the codebase to run a different rule set means leaving the live currency network — losing access to the existing chain's hashrate, exchange listings, address scheme, ticker, and brand. Staying on the live network with the same rule set is, by 2014 vocabulary, to be "Bitcoin Core" or compatible. There is no analogue, in conventional OSS, of a fork that retains the brand and the user base while diverging from the canonical maintainer's choices. The cost of disagreement is unusually high.

This is why each of the 2015-2017 forks needed to claim it was Bitcoin. [Bitcoin XT](/BitcoinArchive/entries/aftermath/2015-08-15-bitcoin-xt-launch/), Bitcoin Classic, Bitcoin Unlimited, [Bitcoin Cash](/BitcoinArchive/entries/aftermath/2017-08-01-bitcoin-cash-fork/) all did. The claim was not vanity. It was a structural requirement for attracting liquidity, hashrate, exchange listings, and brand recognition. A fork that had publicly conceded the name "Bitcoin" would have launched at a marked structural disadvantage on each of those axes — not impossible to sustain, as the existence of independently-named cryptocurrencies shows, but materially harder to compete with the original chain on its own terms.

## 4. The three conditions in combination

Each of §1-§3 alone is partial. The vacuum alone produces a leadership question. Money alone produces normal lobbying. The three-layer structure alone produces the technical observation that protocol ≠ software ≠ network. Stacked, they produce the specific shape of the 2015-2017 wars:

- The vacuum means there is no body authorized to settle the question on behalf of Bitcoin.
- The money means each side has skin in the game and cannot fully separate technical judgment from commercial position.
- The three-layer structure means a technical fork is also an identity fork — to disagree on rules is to fight over what counts as Bitcoin.

The naming asymmetry that the [rebrand analysis](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) documents is the lexical instrument these conditions reached for. The choice of "Bitcoin Core" in 2014 weighted the available vocabulary in one direction, but a different name in 2014 would not have changed the underlying structure. Whatever the central client had been called, the contested object would still have been the name "Bitcoin" — because that is where the network, the hashrate, and the money lived. Hearn's framing in his [2016 departure essay](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) ("Bitcoin has failed," not "the larger-block faction has failed") and the BCH / BSV camps' "real Bitcoin" rhetoric are not stylistic excess. They are what the structure required participants to say.

This also explains a feature of the war that observers from ordinary OSS find puzzling: there was no neutral way to lose. In an ordinary fork, the losing side simply runs its own project at smaller scale and gets on with life. In Bitcoin, the losing side either had to abandon the rule set entirely or take a hashrate share, exchange listings, and a separate ticker on a chain that could not call itself Bitcoin in mainstream usage. None of the four 2015-2017 hard-fork attempts secured the original ticker. That outcome is consistent with the structural reading: the contest was over the name and the network, not just over the rules.

## 5. What stays open

Three counter-readings deserve explicit acknowledgement.

**(a) "The forks lost on technical merit."** A defensible position is that BIP 101's 8 MB-doubling schedule, BCH's 8 MB initial cap, and BSV's 128 MB cap were each technically wrong on their own terms — that mining-centralization risk, propagation latency, and node-operability concerns were real and load-bearing. This reading is not in conflict with §1-§4. The structural conditions described here did not determine which side was technically right; they determined that whatever the technical answer, the contest would run as an identity contest. Both readings can be true simultaneously.

**(b) "The conservative side was a Blockstream operation."** A frequently-asserted reading among large-block partisans is that Blockstream's research agenda (SegWit, Lightning, off-chain layers) drove the main-chain stance, and that this constituted corporate capture. The documentary record supports the *staffing fact* — several Bitcoin Core contributors were Blockstream employees — but does not, by itself, support the *capture claim*. Technical positions are not invalid because their authors are paid. The same skepticism applies in mirror: Bitmain's hashrate position and bitcoin.com's branding position aligned with their commercial interests in larger blocks. Neither side's positions are voided by their funding; neither side's positions were free of it.

**(c) "Bitcoin is just OSS, the fork-as-leaving framing is wrong."** Under this reading, every fork is a software fork like any other, and the ones that gained share are the ones whose technical decisions held up. This reading is internally consistent and is the one that sounds correct to most software engineers approaching the topic for the first time. It does not, however, explain why the participants themselves — including [Hearn writing in 2016](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) and [2025](/BitcoinArchive/entries/aftermath/2025-02-21-mike-hearn-coingeek-retrospective/) — repeatedly framed the events in terms of identity, authority, and naming rather than in terms of software. The participants' own framing is part of the documentary record; a reading that has to dismiss it as confusion has done less work than a reading that takes it as evidence.

The reading in §1-§4 is offered as one reading. It claims only that the participants' own framings — authority, naming, vacuum, identity — describe a real load on top of the code, not a misperception of an ordinary OSS dispute.

*[Editor: This entry collects three structural conditions present in 2014-2017 Bitcoin and reads them as a system. Individual claims about specific actors' motivations are deliberately avoided; what is claimed is structural, not psychological. See [the Bitcoin Core rebrand authority-effects analysis](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) for the naming axis, and [the fork and altcoin genealogy](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) for the event sequence.]*
