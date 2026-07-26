---
title: "Vitalik Buterin (1994–) — Bitcoin Magazine co-founder, launched Ethereum at 19, architect of crypto's second-largest chain"
date: 2011-09-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Vitalik_Buterin"
author: "Bitcoin Institute"
participants:
  - name: "Vitalik Buterin"
    slug: "vitalik-buterin"
description: "Russian-Canadian programmer (1994–). Bitcoin community member from 2011, Bitcoin Magazine co-founder, pybitcointools author, Ethereum whitepaper author (late 2013)."
isSatoshi: false
tags:
  - "vitalik-buterin"
  - "biography"
  - "bitcoin-magazine"
  - "ethereum"
  - "altcoin"
  - "scripting"
secondarySources:
  - name: "Wikipedia — Bitcoin Magazine"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Magazine"
  - name: "Bitcoin Magazine — author archive: Vitalik Buterin"
    url: "https://bitcoinmagazine.com/authors/vitalik-buterin"
  - name: "Ethereum whitepaper (Vitalik Buterin, late 2013)"
    url: "https://ethereum.org/en/whitepaper/"
  - name: "pybitcointools — Vitalik Buterin's Python Bitcoin library"
    url: "https://github.com/vbuterin/pybitcointools"
  - name: "BitcoinTalk profile — Vitalik Buterin (`vbuterin`)"
    url: "https://bitcointalk.org/index.php?action=profile;u=11772"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2012-05-01-bitcoin-magazine-launch
  - forum/bitcointalk/topic-428589/2014-01-23-vbuterin-ethereum-welcome-to-the-beginning
  - analysis/2008-10-31-fixed-supply-vs-adjustable-money
  - aftermath/2011-03-17-pieter-wuille-biography
  - aftermath/2013-01-01-charles-hoskinson-biography
  - analysis/2026-07-26-altcoin-count-and-design-comparison
---

![A faceless silhouette beside a Bitcoin Magazine cover mockup, a code-editor panel of Python commands, and a branching timeline running from 2011 through 2014](/BitcoinArchive/images/analysis/2011-09-01-vitalik-buterin-biography-hero.png)

In 2011, a 17-year-old Russian-Canadian named Vitalik Buterin couldn't afford to buy or mine bitcoin, so he wrote articles for it instead — five bitcoins per article (roughly $3.50 each at the time) at Mihai Alisie's *Bitcoin Weekly*. The writing led him to co-found [*Bitcoin Magazine*](/BitcoinArchive/entries/aftermath/2012-05-01-bitcoin-magazine-launch/) in 2012 and to author dozens of long-form pieces on Bitcoin's protocol mechanics through 2014. In late 2013 he wrote the Ethereum whitepaper, launching the network's mainnet on July 30, 2015 at age 21.

Buterin was born January 31, 1994 in Kolomna, Russia and raised in Canada from age 6. This entry covers his 2011–2014 Bitcoin period; his later [Ethereum](/BitcoinArchive/entries/forum/bitcointalk/topic-428589/2014-01-23-vbuterin-ethereum-welcome-to-the-beginning/) work is outside the BitcoinArchive's documentary scope.

## Entry into Bitcoin (2011, age 17)

According to Buterin's own published accounts (reproduced across many interviews, e.g., the Wired and Forbes profiles in his Wikipedia entry), he first heard about Bitcoin from his father in late 2010 / early 2011 and dismissed it as a fad. After encountering the topic again later in 2011, he began to read about it seriously and concluded it was a substantive technical project. Lacking the funds to mine or buy bitcoin, he searched for ways to acquire some by writing — and found Mihai Alisie's Bitcoin Weekly, a small early Bitcoin-focused blog that paid contributors approximately five bitcoins per article (roughly USD 3.50 each at the time).

## Bitcoin Weekly and Bitcoin Magazine (2011–2014)

Buterin's writing for Bitcoin Weekly led to a deeper collaboration with Mihai Alisie. The two co-founded *Bitcoin Magazine* — initially online, with the first print issue in May 2012. Buterin served as lead writer for the magazine through 2014, producing dozens of long-form articles on Bitcoin protocol mechanics, mining-economics analyses, profiles of altcoin projects (including Mastercoin and other early coloured-coin systems), commentary on the block-size question, and interviews with Bitcoin developers. The Bitcoin Magazine author archive linked under `secondarySources` preserves his article catalogue.

Buterin also contributed open-source Bitcoin software during this period. His most-cited contribution is **pybitcointools** (`vbuterin/pybitcointools` on GitHub) — a pure-Python library implementing Bitcoin transaction construction, ECDSA signatures, BIP32 hierarchical deterministic wallets, and Merkle-tree primitives. The BIP32 standard itself was authored by Pieter Wuille — see [his biography](/BitcoinArchive/participants/pieter-wuille/) for the standard's origin. The library was widely used by educators and small-scale tooling builders during the 2013–2015 era and remains a reference for people learning the Bitcoin protocol.

His BitcoinTalk profile (linked under `secondarySources`, handle `vbuterin`) shows posts beginning in October 2011 and concentrated activity through 2014.

## The scripting-extension question (2013)

Through 2013 Buterin became increasingly focused on extending Bitcoin's scripting language to support arbitrary computation — programmable contracts that could express arbitrary state machines rather than the limited, mostly-disabled set of Bitcoin Script opcodes. In Bitcoin Magazine articles and in conversations with the Mastercoin team (whose protocol layered metadata into Bitcoin transactions to add token-issuance and contract-like primitives), he argued that general-purpose computation belonged inside the consensus layer rather than as a metadata overlay.

The Bitcoin community did not converge on this direction. The conservative protocol-evolution culture (later codified by [Bitcoin Core](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/)) treated extensions to scripting as too high-risk for inclusion via hard fork, and the Mastercoin proposal to broaden its protocol was not adopted. Buterin documented this conclusion in the preface to the Ethereum whitepaper (late 2013):

> "I came to a realization that the way they were going about it was somewhat misguided… So I decided that, instead of trying to extend Bitcoin to do all sorts of things, what was actually needed was a brand new platform with a more general-purpose scripting language built from the ground up."

The whitepaper itself — `Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform` — was published in late 2013 and circulated initially in Bitcoin community channels.

## Departure from Bitcoin (2014)

In January 2014 Buterin announced Ethereum at the North American Bitcoin Conference in Miami. Throughout 2014 he secured funding (the Ethereum crowdsale, July 2014), assembled co-founders — most of whom were also active in the Bitcoin / cypherpunk space at the time: Gavin Wood (later Polkadot), Charles Hoskinson (later Cardano), Joseph Lubin (later ConsenSys), Anthony Di Iorio, Mihai Alisie, Amir Chetrit — and led the development effort that produced the Ethereum mainnet (Frontier release) on July 30, 2015.

One thing Buterin did not carry over from Bitcoin was the supply cap. The [2014 Ethereum whitepaper](https://ethereum.org/en/whitepaper/) states the choice against Bitcoin by name — "the existence of a permanently growing linear supply, as opposed to a capped supply as in Bitcoin" — and gives as its reason the wish to blunt what some read as excessive wealth concentration in Bitcoin and to leave people born into later eras a fair chance at acquiring units. Where that decision sits in the monetary-design argument that runs from b-money onward is taken up in [the fixed-supply-vs-adjustable-money analysis](/BitcoinArchive/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/).

Buterin's post-2014 activity is principally Ethereum and is outside the scope of this archive. The chains and protocols he has touched since (Ethereum mainnet, the Beacon Chain merge to proof-of-stake, layer-2 rollups, etc.) are documented in Ethereum's own historical record.

## Bitcoin-period timeline (2011–2014)

| Date | Event |
|---|---|
| 1994-01-31 | Born in Kolomna, Russia |
| ~2000 | Moved to Canada at age 6 |
| 2011 | Began contributing to Mihai Alisie's *Bitcoin Weekly* at 5 BTC (~$3.50) per article (age 17) |
| 2012-05 | *Bitcoin Magazine* first print issue published (co-founded with Mihai Alisie) |
| 2011–2014 | Lead writer for *Bitcoin Magazine*; published `pybitcointools` library |
| Late 2013 | Wrote and circulated the Ethereum whitepaper |
| 2014-01 | Announced Ethereum at the North American Bitcoin Conference, Miami |
| 2014-07 | Ethereum crowdsale |
| 2015-07-30 | Ethereum mainnet (Frontier release) launched (age 21) |

## Significance to Bitcoin

Buterin's Bitcoin-period record matters for two reasons recorded in this archive. First, he is the most prolific 2012–2014 Bitcoin Magazine contributor; his article archive constitutes a substantial portion of the contemporary public-facing documentation of the middle of Bitcoin's early period (between the launch period and the block-size war). Second, the [Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) records Ethereum as the most-cited "next-generation" chain whose origin runs *through* Bitcoin: the design motivation comes from Buterin's Bitcoin-Magazine-era thinking about scripting limits, even though the codebase is independent.

*[Editor: this biography focuses on Buterin's 2011–2014 Bitcoin period. His later Ethereum work, though widely covered, is outside the BitcoinArchive's documentary scope. The date 2011-09-01 used in this entry is a representative placeholder for his Bitcoin-community entry; the precise month is not consistently fixed across his published interviews.]*
