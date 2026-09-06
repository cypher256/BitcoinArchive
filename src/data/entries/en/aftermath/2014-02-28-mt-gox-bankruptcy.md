---
title: "Mt. Gox files for bankruptcy — 850,000 BTC lost"
date: 2014-02-28T00:00:00Z
type: "article"
source: "npr"
sourceUrl: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost"
author: "NPR"
participants:
  - name: "Mark Karpeles"
    slug: "mark-karpeles"
description: "Mt. Gox — once the world's largest Bitcoin exchange handling ~70% of transactions — filed for bankruptcy in Tokyo. CEO Mark Karpeles revealed ~850,000 BTC (~$450M) had been lost."
isSatoshi: false
tags:
  - "mt-gox"
  - "exchange-collapse"
  - "hack"
  - "bankruptcy"
secondarySources:
  - name: "Bitcoin Wiki — Collapse of Mt. Gox"
    url: "https://en.bitcoin.it/wiki/Collapse_of_Mt._Gox"
  - name: "Mt. Gox — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Mt._Gox"
  - name: "CNBC — Mt. Gox begins repaying bitcoin to creditors a decade later"
    url: "https://www.cnbc.com/2024/07/05/mt-gox-begins-repaying-bitcoin-to-creditors-a-decade-on-from-collapse.html"
relatedEntries:
  - aftermath/2010-08-15-value-overflow-incident
  - aftermath/2022-11-11-ftx-collapse
  - analysis/2026-05-24-satoshi-design-vs-current-reality
  - aftermath/2022-02-08-bitfinex-hack-morgan-lichtenstein-arrest
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
  - design/2009-01-03-bitcoin-transaction-design
  - aftermath/2010-07-18-jed-mccaleb-biography
  - aftermath/2017-04-01-japan-payment-services-act-amendment
---

![A dark navy infographic showing a cracked open vault marked with a large numeral, a market-share progress bar, a red ascending timeline linking several dated points, and a glowing network diagram beside a faint city-skyline silhouette.](/BitcoinArchive/images/analysis/2014-02-28-mt-gox-bankruptcy-hero.png)

On February 28, 2014, Mt. Gox — once the world's largest Bitcoin exchange, handling approximately 70% of all Bitcoin transactions at its peak — filed for bankruptcy protection in Tokyo District Court.

```mermaid
timeline
    2014 : Feb 7 — Withdrawals halted
         : Feb 24 — Site goes blank, trading suspended
         : Feb 28 — Bankruptcy filed in Tokyo; press conference
```

At the press conference, Karpeles revealed that approximately **850,000 BTC** had been lost — 750,000 BTC belonging to customers and 100,000 BTC belonging to the company — worth approximately $450 million at the time. On March 20, 2014, Mt. Gox reported finding 199,999.99 BTC in an old wallet, reducing the total loss to approximately 650,000 BTC.

The collapse was attributed to a long-running theft exploiting [transaction malleability](/BitcoinArchive/entries/design/2009-01-03-bitcoin-transaction-design/), though subsequent investigations revealed a more complex picture involving possible internal mismanagement. In scale, the crisis dwarfed the [2010 value overflow incident](/BitcoinArchive/entries/aftermath/2010-08-15-value-overflow-incident/) — the previous largest Bitcoin-related incident.

Media declared Bitcoin dead: "Bitcoin is finished." "It was a scam all along." Bitcoin's price crashed. But the protocol itself was unaffected — Mt. Gox was a centralized exchange, not a flaw in Bitcoin's decentralized network.

Mt. Gox began repaying creditors in Bitcoin in July 2024, over a decade after the collapse. As the largest custody-collapse event in Bitcoin's recorded loss history, Mt. Gox is the anchor case in [the lost-Bitcoin canon overview](/BitcoinArchive/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/), which reads Mt. Gox alongside Stefan Thomas (forgotten-password mode), James Howells (physical-loss mode), QuadrigaCX (custody-collapse via sole-custodian death), and [FTX](/BitcoinArchive/entries/aftermath/2022-11-11-ftx-collapse/) (custody-collapse via misappropriation).
