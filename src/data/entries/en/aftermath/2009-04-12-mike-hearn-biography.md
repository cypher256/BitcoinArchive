---
title: "Mike Hearn (dates unknown) — Google engineer who became an early Bitcoin contributor and corresponded with Satoshi"
date: 2009-04-12T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Mike_Hearn"
author: "Mike Hearn"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Software engineer at Google (Maps, Earth, Gmail anti-spam) who contacted Satoshi in April 2009, became an early contributor, and built BitcoinJ. His Satoshi correspondence was made public in 2017."
isSatoshi: false
tags:
  - "mike-hearn"
  - "biography"
  - "google"
  - "bitcoinj"
  - "email-archive"
  - "published-correspondence"
  - "historic"
secondarySources:
  - name: "Mike Hearn's published Satoshi emails"
    url: "https://plan99.net/~mike/satoshi-emails/thread1.html"
  - name: "BitcoinJ — GitHub"
    url: "https://github.com/bitcoinj/bitcoinj"
  - name: "YourStory — Techie Tuesday: Mike Hearn"
    url: "https://yourstory.com/2021/02/techie-tuesday-mike-hearn-google-maps-gmail-bitcoin-startup-r3"
  - name: "Mike Hearn — 'The resolution of the Bitcoin experiment' (Medium, January 2016)"
    url: "https://blog.plan99.net/the-resolution-of-the-bitcoin-experiment-dabb30201f7"
  - name: "CoinDesk — Mike Hearn Steps Down from R3 (February 2021)"
    url: "https://www.coindesk.com/business/2021/02/12/former-bitcoin-developer-mike-hearn-steps-down-from-enterprise-blockchain-firm-r3"
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
  - name: "Vice/Motherboard — Satoshi Nakamoto Emails (August 2017)"
    url: "https://www.vice.com/en/article/former-bitcoin-developer-shares-early-satoshi-nakamoto-emails/"
relatedEntries:
  - correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions
  - aftermath/2011-04-23-mike-hearn-satoshi-email-exchange
  - aftermath/2017-08-11-mike-hearn-publishes-emails
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2008-10-31-satoshi-anonymity-architecture
---

On April 12, 2009, a Google engineer named Mike Hearn read the [Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/) and [emailed Satoshi Nakamoto](/BitcoinArchive/entries/correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions/). Over the next two years they exchanged sustained technical correspondence — scaling, simplified payment verification, the long-run shape of mining. Hearn received one of the last private emails Satoshi ever sent:

<!-- speaker: Satoshi Nakamoto -->
> "I've moved on to other things. It's in good hands with Gavin and everyone."

Almost five years later, on January 14, 2016, Hearn published ["The resolution of the Bitcoin experiment"](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) on Medium. It opened with three words:

> "Bitcoin has failed."

He sold all his bitcoins, left the project, and joined R3, an enterprise-blockchain consortium where he co-led development of the Corda distributed ledger. In [August 2017 he made his Satoshi correspondence public](/BitcoinArchive/entries/aftermath/2017-08-11-mike-hearn-publishes-emails/) — one of the largest documented bodies of Satoshi's technical thinking. In February 2024 he testified in the [COPA v Wright trial](/BitcoinArchive/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/).

Hearn worked at Google on Maps, Earth, and Gmail's anti-spam systems. He developed [BitcoinJ](https://github.com/bitcoinj/bitcoinj), a Java implementation of the protocol — the first major alternative to the original C++ client and the basis for many Android Bitcoin wallets.

```mermaid
timeline
    2009 : Reads whitepaper; first email to Satoshi (Apr 12)
    %% link: /BitcoinArchive/entries/correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions/
    2010 : Sustained technical email with Satoshi (scaling, SPV, mining)
    %% link: /BitcoinArchive/entries/correspondence/mike-hearn/more-questions/2010-12-27-hearn-to-satoshi-more-questions/
    2011 : One of Satoshi's last emails - "I've moved on" (Apr 23)
    %% link: /BitcoinArchive/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/
    2012 : Develops BitcoinJ (Java implementation of Bitcoin)
    2016 : Publishes "The resolution of the Bitcoin experiment"; sells all BTC (Jan 14)
    %% link: /BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/
         : Joins R3, co-leads Corda development
    2017 : Publishes Satoshi email correspondence (Aug 11)
    %% link: /BitcoinArchive/entries/aftermath/2017-08-11-mike-hearn-publishes-emails/
    2021 : Steps down from R3 (Feb)
    2024 : Testifies in COPA v Wright trial (Feb 22)
    %% link: /BitcoinArchive/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/
```

### Correspondence with Satoshi

Between April 2009 and April 2011, Hearn and Satoshi exchanged sustained technical email. Topics included how the system could scale, how simplified payment verification (SPV) clients would work, and how Satoshi envisioned the evolution of mining from CPUs to specialized hardware. Hearn was among the very first people outside the initial cypherpunk circle to take a serious technical interest in Bitcoin, and the published archive of his correspondence with Satoshi documents the technical thinking Satoshi never spelled out in public posts.

### Departure from Bitcoin

The January 2016 "Bitcoin has failed" essay cited two principal grievances: the inability of the development community to reach consensus on raising the 1-megabyte block size limit, and what Hearn described as systemically important institutions emerging within what was supposed to be a decentralised system. He sold his coins concurrent with publication.
