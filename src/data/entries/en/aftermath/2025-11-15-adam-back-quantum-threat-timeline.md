---
title: "Adam Back: Bitcoin faces no quantum threat for 20–40 years"
date: 2025-11-15T00:00:00Z
type: "article"
source: "x"
sourceUrl: "https://x.com/adam3us/status/1989721899991986374"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
description: "Blockstream CEO Adam Back stated Bitcoin faces no quantum computing threat for ~20–40 years, pointing to NIST post-quantum signatures like SLH-DSA that Bitcoin can adopt before threats materialize."
isSatoshi: false
tags:
  - "adam-back"
  - "quantum-computing"
  - "cryptography"
  - "NIST"
  - "SLH-DSA"
  - "security"
secondarySources:
  - name: "CoinTelegraph — Adam Back: Bitcoin faces no quantum risk for next 20–40 years"
    url: "https://web.archive.org/web/20251215111115/https://cointelegraph.com/news/bitcoin-quantum-threat-decades-post-quantum-migration"
  - name: "CryptoSlate — Why Adam Back thinks Bitcoin's 20-year quantum runway matters"
    url: "https://cryptoslate.com/why-adam-backs-thinks-bitcoins-20-year-quantum-runway-matters-more-than-todays-headlines/"
relatedEntries:
  - analysis/2026-05-18-bitcoin-quantum-threat
  - tweets/adam-back/2025-11-15-quantum-threat-timeline
  - design/2009-01-03-bitcoin-security-model
quotes:
  - id: "q1"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "2025-11-15T00:00:00Z"
    sourceEntryId: "tweets/adam-back/2025-11-15-quantum-threat-timeline"
---

Responding to a question about whether advancing quantum research puts Bitcoin at risk, [Adam Back](/BitcoinArchive/participants/adam-back/) posted on X:

<!-- quote: q1 -->
> Probably not for 20-40 years, if then. And there are quantum secure signatures, NIST standardized SLH-DSA last year. Bitcoin can add over time, as the evaluation continues and be quantum ready, long before cryptographically relevant quantum computers arrive.

Back reframed the quantum threat as a solvable engineering problem with a multi-decade runway. Bitcoin Improvement Proposal 360 (BIP-360), drafted by Jameson Lopp, outlines a gradual transition to post-quantum-resistant outputs using NIST-standardized algorithms. As of 2025, the highest-capacity quantum systems remain far below the threshold needed to run Shor's algorithm against Bitcoin's elliptic curve signatures. This 20–40 year estimate is the timeline figure cited in [the security model's quantum threat section](/BitcoinArchive/entries/design/2009-01-03-bitcoin-security-model/).

This Adam Back quantum-threat statement is treated by [the bitcoin quantum threat analysis](/BitcoinArchive/entries/analysis/2026-05-18-bitcoin-quantum-threat/) as one of its two anchor data points for the §4 timeline argument (alongside the NSA-2035 institutional line) and re-cited in §6 as one of the two best-documented points on the named-cryptographer-adjacent timeline.
