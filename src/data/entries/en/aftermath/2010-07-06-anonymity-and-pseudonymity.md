---
title: "Re: Bitcoin - De-emphasize the anonymous angle"
date: 2010-07-06T02:59:57Z
type: "article"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Satoshi warns Malmi to de-emphasize Bitcoin's anonymity claims, distinguishing between anonymity and pseudonymity - a prescient warning about privacy expectations."
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "privacy"
  - "anonymity"
  - "pseudonymity"
  - "bitcoin-org"
secondarySources:
  - name: "Cointelegraph - Newly released Satoshi emails"
    url: "https://web.archive.org/web/20260219032610/https://cointelegraph.com/news/newly-released-satoshi-nakamoto-emails-treasure-trove-early-bitcoin-lore"
relatedEntries:
  - aftermath/2009-01-15-trammell-to-satoshi-mitm-attack
  - aftermath/2011-04-20-forbes-crypto-currency
  - analysis/2026-07-09-bitcoin-ownership-map
---

![Two faceless silhouettes side by side -- one solid black, the other a dotted outline trailing to a small fingerprint icon -- beside a dark panel showing a chain-like diagram under a magnifying glass, with small icons below for an envelope, a crossed-out routing icon, and a padlock.](/BitcoinArchive/images/analysis/2010-07-06-anonymity-and-pseudonymity-hero.png)

Satoshi warned Malmi about how Bitcoin's privacy properties were being described on the website and in promotional materials:

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> I think we should de-emphasize the anonymous angle. With the popularity of bitcoin addresses instead of sending by IP, we can't give the impression it's automatically anonymous. It's possible to be pseudonymous, but you have to be careful.

Satoshi elaborated on the potential consequences of overpromising privacy:

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> If someone digs through the transaction history and starts exposing information people thought was anonymous, the backlash will be much worse if we haven't prepared expectations by warning in advance that you have to take precautions.

Satoshi drew the line between anonymity (complete identity concealment) and pseudonymity (an alternate identity that analysis can still link back to a real one) — and the warning held up: blockchain analysis became a major industry, and many early users who assumed they were anonymous had their transactions traced. That same misplaced assumption resurfaced the following year in the mainstream press — see [Forbes' 2011 profile of Bitcoin, which called it potentially untraceable, an assessment its author later acknowledged was incorrect](/BitcoinArchive/entries/aftermath/2011-04-20-forbes-crypto-currency/). Sixteen years on, [the map of who holds the 21 million](/BitcoinArchive/entries/analysis/2026-07-09-bitcoin-ownership-map/) is still drawn inside the line Satoshi drew here: the largest movements on the ledger are visible to anyone, while names attach only where a disclosure or a court puts them.

The note about "sending by IP" refers to an early Bitcoin feature where transactions could be sent directly to an IP address — a feature [Dustin Trammell had flagged as vulnerable to man-in-the-middle interception](/BitcoinArchive/entries/aftermath/2009-01-15-trammell-to-satoshi-mitm-attack/) a year and a half earlier. As the network shifted to address-based transactions, the privacy model changed in ways Satoshi felt needed to be clearly communicated.
