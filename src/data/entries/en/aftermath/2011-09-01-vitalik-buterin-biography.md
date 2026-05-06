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
---

Vitalik Buterin (born January 31, 1994, in Kolomna, Russia; raised in Canada from age 6) is a programmer who entered the Bitcoin community in 2011 at age 17 and went on to become one of its most prolific early journalists before founding Ethereum in 2014. The Bitcoin Archive scope of this biography is the 2011–2014 period during which Buterin's primary public activity was Bitcoin-focused.

## Entry into Bitcoin (2011, age 17)

According to Buterin's own published accounts (reproduced across many interviews, e.g., the Wired and Forbes profiles in his Wikipedia entry), he first heard about Bitcoin from his father in late 2010 / early 2011 and dismissed it as a fad. After encountering the topic again later in 2011, he began to read about it seriously and concluded it was a substantive technical project. Lacking the funds to mine or buy bitcoin, he searched for ways to acquire some by writing — and found Mihai Alisie's Bitcoin Weekly, a small early Bitcoin-focused blog that paid contributors approximately five bitcoins per article (roughly USD 3.50 each at the time).

## Bitcoin Weekly and Bitcoin Magazine (2011–2014)

Buterin's writing for Bitcoin Weekly led to a deeper collaboration with Mihai Alisie. The two co-founded *Bitcoin Magazine* — initially online, with the first print issue in May 2012. Buterin served as lead writer for the magazine through 2014, producing dozens of long-form articles on Bitcoin protocol mechanics, mining-economics analyses, profiles of altcoin projects (including Mastercoin and other early coloured-coin systems), commentary on the block-size question, and interviews with Bitcoin developers. The Bitcoin Magazine author archive linked under `secondarySources` preserves his article catalogue.

Buterin also contributed open-source Bitcoin software during this period. His most-cited contribution is **pybitcointools** (`vbuterin/pybitcointools` on GitHub) — a pure-Python library implementing Bitcoin transaction construction, ECDSA signatures, BIP32 hierarchical deterministic wallets, and Merkle-tree primitives. The library was widely used by educators and small-scale tooling builders during the 2013–2015 era and remains a reference for Bitcoin protocol learning material.

His BitcoinTalk profile (linked under `secondarySources`, handle `vbuterin`) shows posts beginning in October 2011 and concentrated activity through 2014.

## The scripting-extension question (2013)

Through 2013 Buterin became increasingly focused on extending Bitcoin's scripting language to support arbitrary computation — programmable contracts that could express arbitrary state machines rather than the limited, mostly-disabled set of Bitcoin Script opcodes. In Bitcoin Magazine articles and in conversations with the Mastercoin team (whose protocol layered metadata into Bitcoin transactions to add token-issuance and contract-like primitives), he argued that general-purpose computation belonged inside the consensus layer rather than as a metadata overlay.

The Bitcoin community did not converge on this direction. The conservative protocol-evolution culture (later codified by [Bitcoin Core](/BitcoinArchive/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/)) treated extensions to scripting as too high-risk for inclusion via hard fork, and the Mastercoin proposal to broaden its protocol was not adopted. Buterin documented this conclusion in the preface to the Ethereum whitepaper (late 2013):

> "I came to a realization that the way they were going about it was somewhat misguided… So I decided that, instead of trying to extend Bitcoin to do all sorts of things, what was actually needed was a brand new platform with a more general-purpose scripting language built from the ground up."

The whitepaper itself — `Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform` — was published in late 2013 and circulated initially in Bitcoin community channels.

## Departure from Bitcoin (2014)

In January 2014 Buterin announced Ethereum at the North American Bitcoin Conference in Miami. Throughout 2014 he secured funding (the Ethereum crowdsale, July 2014), assembled co-founders — most of whom were also active in the Bitcoin / cypherpunk space at the time: Gavin Wood (later Polkadot), Charles Hoskinson (later Cardano), Joseph Lubin (later ConsenSys), Anthony Di Iorio, Mihai Alisie, Amir Chetrit — and led the development effort that produced the Ethereum mainnet (Frontier release) on July 30, 2015.

Buterin's post-2014 activity is principally Ethereum and is outside the scope of this archive. The chains and protocols he has touched since (Ethereum mainnet, the Beacon Chain merge to proof-of-stake, layer-2 rollups, etc.) are documented in Ethereum's own historical record.

## Significance to Bitcoin

Buterin's Bitcoin-period record matters for two reasons recorded in this archive. First, he is the most prolific 2012–2014 Bitcoin Magazine contributor; his article archive constitutes a substantial portion of the contemporary public-facing documentation of Bitcoin's middle-early-period (between the launch period and the block-size war). Second, the [Bitcoin family-tree analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) records Ethereum as the most-cited "next-generation" chain whose origin runs *through* Bitcoin: the design motivation comes from Buterin's Bitcoin-Magazine-era thinking about scripting limits, even though the codebase is independent.

*[Editor: this biography focuses on Buterin's 2011–2014 Bitcoin period. His later Ethereum work, though widely covered, is outside the BitcoinArchive's documentary scope. The date 2011-09-01 used in this entry is a representative placeholder for his Bitcoin-community entry; the precise month is not consistently fixed across his published interviews.]*
