---
title: "Jeff Garzik (1974–) — Linux kernel developer and early Bitcoin contributor"
date: 2010-07-15T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Garzik"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
description: "Software engineer (born 1974), Linux kernel contributor, Red Hat employee. Discovered Bitcoin via Slashdot in July 2010. Top-3 Bitcoin Core contributor, built cpuminer, wrote BIPs, co-founded Bloq."
isSatoshi: false
tags:
  - "jeff-garzik"
  - "biography"
  - "bitcoin-core"
  - "linux-kernel"
  - "cpuminer"
  - "bloq"
  - "historic"
secondarySources:
  - name: "Jeff Garzik's BitcoinTalk profile"
    url: "https://bitcointalk.org/index.php?action=profile;u=541"
  - name: "Jeff Garzik on GitHub"
    url: "https://github.com/jgarzik"
  - name: "CoinDesk — Jeff Garzik's Bitcoin Journey"
    url: "https://www.coindesk.com/"
  - name: "Jeff Garzik — 'Looking Back' retrospective (October 2018)"
    url: "https://www.coindesk.com/"
  - name: "Slashdot — Bitcoin Generates Coins (July 11, 2010)"
    url: "https://slashdot.org/story/10/07/11/1747245/bitcoin-generates-212-coins"
  - name: "Bitcoin Wiki — Jeff Garzik"
    url: "https://en.bitcoin.it/wiki/Jeff_Garzik"
relatedEntries:
  - aftermath/2010-07-11-slashdot-bitcoin-article
  - aftermath/2018-10-29-jeff-garzik-retrospective
  - aftermath/2024-10-28-jeff-garzik-satoshi-lone-genius
  - aftermath/2010-08-15-value-overflow-incident
---

In July 2010, a Red Hat Linux kernel developer named Jeff Garzik read a [Slashdot post about Bitcoin](/BitcoinArchive/entries/aftermath/2010-07-11-slashdot-bitcoin-article/), pulled the codebase, and started sending patches. Within months he had become the top non-Satoshi commit-count contributor, ranking just behind Satoshi and [Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/). He wrote cpuminer (one of the first standalone Bitcoin mining tools), authored multiple BIPs including the [BIP 100 dynamic-block-size proposal](https://github.com/bitcoin/bips), and co-founded the enterprise-blockchain firm Bloq in 2015.

Garzik studied computer science at Georgia Institute of Technology and built his early career on Linux-kernel work at Red Hat. His kernel-level systems experience translated directly to Bitcoin's C++ codebase.

### Discovery of Bitcoin
The [July 2010 Slashdot post](/BitcoinArchive/entries/aftermath/2010-07-11-slashdot-bitcoin-article/) that reached Garzik covered Bitcoin's v0.3 release — a traffic surge early developers later called "the Great Slashdotting," and the moment a wave of programmers first found the project. Garzik was one of them, and his kernel background let him start reading and patching the C++ code right away.

### Bitcoin Core Contributions
Garzik became one of the top three contributors to Bitcoin Core by commit count — behind only [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) and [Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/) — and was among the earliest developers granted commit access to the repository. His first major work went after the part of the client that hurt new users most: he rewrote the initial blockchain download to run [10x to 100x faster](/BitcoinArchive/entries/aftermath/2018-10-29-jeff-garzik-retrospective/).

### cpuminer
Garzik created cpuminer, a widely-used open-source CPU mining software for Bitcoin. The tool was one of the first standalone mining applications, enabling users to mine without running the full Bitcoin client.

### Interaction with Satoshi
The working relationship ran by email and patch: Garzik would write a change, test it, turn it into a patch, and send it to Satoshi; if Satoshi accepted it, the code went into the project's Subversion repository. Garzik [later described](/BitcoinArchive/entries/aftermath/2018-10-29-jeff-garzik-retrospective/) Satoshi as "practical and sane, which made interactions very easy and comfortable" — a collaborator who, by his account, "never used his voice at all — no video, no voice chat, no casual conversations."

### Bitcoin Improvement Proposals
Garzik authored multiple Bitcoin Improvement Proposals (BIPs), including BIP 100, which proposed a dynamic block size limit determined by miner voting. His scaling proposals were part of the broader debate about Bitcoin's transaction capacity that became a central issue in the Bitcoin community.

### Later Career
In 2015 Garzik co-founded Bloq, an enterprise blockchain firm, and later led Hemi Network. His scaling work — BIP 100 above all — kept him in the larger-block, throughput-first camp of the capacity debate that dominated Bitcoin's middle years.
