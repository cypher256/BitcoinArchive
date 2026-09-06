---
title: "FTX files for bankruptcy — $8 billion in customer funds missing"
date: 2022-11-11T00:00:00Z
type: "article"
source: "cnbc"
sourceUrl: "https://www.cnbc.com/2022/11/11/sam-bankman-frieds-cryptocurrency-exchange-ftx-files-for-bankruptcy.html"
author: "CNBC"
participants:
  - name: "Sam Bankman-Fried"
    slug: "sam-bankman-fried"
description: "FTX, the world's second-largest crypto exchange, filed for Chapter 11 bankruptcy. Founder SBF resigned. ~$8B in customer funds had been misappropriated; he was later sentenced to 25 years."
isSatoshi: false
tags:
  - "ftx"
  - "exchange-collapse"
  - "fraud"
secondarySources:
  - name: "CoinDesk — FTX Files for Bankruptcy Protections in US"
    url: "https://www.coindesk.com/policy/2022/11/11/ftx-files-for-bankruptcy-protections-in-us"
  - name: "Bankruptcy of FTX — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Bankruptcy_of_FTX"
  - name: "ABC News — A Timeline of FTX's Historic Collapse"
    url: "https://abcnews.com/Business/timeline-cryptocurrency-exchange-ftxs-historic-collapse/story?id=93337035"
relatedEntries:
  - aftermath/2014-02-28-mt-gox-bankruptcy
  - analysis/2026-05-24-satoshi-design-vs-current-reality
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
inlineLinkKeywords:
  - "FTX collapse"
---

![Illustration of a stack of tokens cracking apart and scattering beside a row of toppling dominoes, with an open vault glowing around a shattered numeral representing billions in missing funds, a courthouse silhouette, and a small separate emblem representing an unaffected network.](/BitcoinArchive/images/analysis/2022-11-11-ftx-collapse-hero.png)

On November 11, 2022, FTX Trading Ltd. — along with Alameda Research and over 130 affiliated entities — filed for Chapter 11 bankruptcy in U.S. Bankruptcy Court. Founder Sam Bankman-Fried (SBF) resigned as CEO.

```mermaid
flowchart LR
    REPORT["Nov 2, 2022<br/>CoinDesk reveals<br/>Alameda's FTT-heavy<br/>balance sheet"] --> CZSELL["Nov 6, 2022<br/>CZ announces Binance<br/>will sell its FTT"]
    CZSELL --> HALT["Nov 8, 2022<br/>Withdrawals halted;<br/>Binance LOI signed"]
    HALT --> WITHDRAW["Nov 9, 2022<br/>Binance withdraws<br/>from the deal"]
    WITHDRAW --> BANKRUPTCY["Nov 11, 2022<br/>Bankruptcy filed;<br/>SBF resigns"]
    BANKRUPTCY -.->|"weeks later"| ARREST["Dec 12, 2022<br/>SBF arrested<br/>in the Bahamas"]
    ARREST --> CONVICTED["Nov 2, 2023<br/>Convicted on<br/>all 7 counts"]
    CONVICTED --> SENTENCED["Mar 28, 2024<br/>Sentenced to<br/>25 years"]
```

Approximately **$8 billion** in customer funds had been misappropriated. Federal prosecutors called it "one of the biggest financial frauds in American history." John J. Ray III, appointed as the new CEO to oversee bankruptcy proceedings, described it as the worst case of corporate governance failure he had ever seen — worse than Enron.

Once again, media declared cryptocurrency dead. Once again, Bitcoin's protocol was unaffected. FTX was a centralized intermediary — the exact type of trusted third party that Bitcoin was designed to eliminate. The collapse reinforced the principle embedded in Bitcoin's design: "Don't trust, verify." [The lost-Bitcoin canon overview](/BitcoinArchive/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/) reads FTX as a custody-collapse-by-misappropriation case alongside QuadrigaCX (sole-custodian fraud) and Mt. Gox (operational failure plus theft), with forgotten-password and physical-loss cases (Stefan Thomas, James Howells) on the other side of the typology.

This FTX collapse is treated as a load-bearing custody-axis example by [the Satoshi-design-vs-current-reality analysis](/BitcoinArchive/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/), which uses FTX alongside the [Mt. Gox bankruptcy](/BitcoinArchive/entries/aftermath/2014-02-28-mt-gox-bankruptcy/) to exemplify the bank-failure mode the protocol was designed to prevent — affected users had no protocol-level claim on any coin, only a contractual claim against an insolvent company.
