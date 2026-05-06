---
title: "Wladimir van der Laan (dates unknown) — Bitcoin Core lead maintainer 2014–2022"
date: 2010-11-19T19:55:52Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin_Core"
author: "Wladimir van der Laan"
participants:
  - name: "Wladimir van der Laan"
    slug: "wladimir-van-der-laan"
description: "Dutch developer (handle laanwj). Built the original bitcoin-qt GUI; succeeded Gavin Andresen as Bitcoin Core lead maintainer (April 2014 - August 2022); withdrew merge privileges in February 2023."
isSatoshi: false
tags:
  - "wladimir-van-der-laan"
  - "biography"
  - "bitcoin-core"
  - "lead-maintainer"
  - "bitcoin-qt"
  - "leadership"
  - "historic"
secondarySources:
  - name: "Who Controls Bitcoin Core? — Jameson Lopp"
    url: "https://blog.lopp.net/who-controls-bitcoin-core/"
relatedEntries:
  - aftermath/2011-09-13-bitcoin-github-migration-committers
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
---

Wladimir van der Laan, known online as **laanwj**, is a Dutch software developer who became Bitcoin Core's second lead maintainer after [Gavin Andresen](/BitcoinArchive/participants/gavin-andresen/). Beyond his public role in Bitcoin development, his personal biographical details remain largely outside published record.

```mermaid
timeline
    2010 : First archive appearance, Bitcoin client icon discussion (Nov 19)
    %% link: /BitcoinArchive/entries/forum/bitcointalk/topic-64/2010-11-19-laanwj-msg22887/
    2011 : Creates bitcoin-qt repository (May 15)
         : Granted GitHub commit access, fourth maintainer (Jun 5)
    2014 : Succeeds Andresen as lead maintainer (Apr 8)
    2015 : Block-size war begins
    2016 : libsecp256k1 ships as v0.12 default backend (Jan 15)
    %% link: /BitcoinArchive/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/
    2017 : SegWit activates
    2022 : Steps down as lead maintainer; cites burnout and decentralization goals (Aug)
    2023 : Removes own merge access from repository - Bitcoin Core enters lead-vacant state (Feb)
```

### Early Involvement
Van der Laan first appears in the archive on November 19, 2010, in [a discussion about the Bitcoin client's icons](/BitcoinArchive/entries/forum/bitcointalk/topic-64/2010-11-19-laanwj-msg22887/), where he asked for SVG versions so they could be rescaled — a small but characteristic request from someone approaching the software from a polish-and-quality angle. Over the following months he contributed patches to the Qt-based GUI client, and on May 15, 2011, he created a separate `bitcoin-qt` repository to organize that work. This repository was later merged back into the main `bitcoin/bitcoin` project.

### GitHub Commit Access
On June 5, 2011, Andresen granted van der Laan [commit access to the `bitcoin/bitcoin` GitHub repository](/BitcoinArchive/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/) — the fourth contributor to receive access after Chris Moore, Pieter Wuille, and Jeff Garzik. Over the subsequent years he became one of the most consistent reviewers and release managers on the project.

### Lead Maintainer (2014–2022)
On April 8, 2014, Andresen stepped down as lead maintainer and handed the role to van der Laan. Under his stewardship, Bitcoin Core shipped critical work including [the replacement of OpenSSL's `secp256k1` implementation with the purpose-built libsecp256k1 library in v0.12](/BitcoinArchive/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/). His tenure spanned the entirety of the 2015–2017 block size debate, the 2017 SegWit activation, and the subsequent years of quieter but substantial infrastructure work.

### Departure
In August 2022, van der Laan stepped down as lead maintainer, citing burnout and a desire to further decentralize the project's governance. In February 2023 he formally removed his own merge privileges from the repository, ending his direct commit access. The lead-maintainer role has remained vacant since — Bitcoin Core is now maintained by a distributed group of developers with commit rights rather than a single lead.

### Significance
Where Andresen's tenure was defined by Satoshi's handoff and the early growth phase, van der Laan's was defined by quiet execution through the project's most contested years. His eight-year continuity kept the reference implementation moving forward through leadership transitions, protocol disputes, and external pressure, and his final act — voluntarily relinquishing commit access — extended the decentralization of Bitcoin from the protocol layer into the project's governance itself.
