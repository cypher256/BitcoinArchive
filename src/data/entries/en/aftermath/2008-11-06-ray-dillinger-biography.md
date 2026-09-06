---
title: "Ray Dillinger — Cryptographer who reviewed Bitcoin's code before its public release"
date: 2008-11-06T05:14:37Z
type: "biography"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2216771.0"
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
description: "Computer scientist (handle bear / cryddit) who, with Hal Finney, reviewed Satoshi's source code before public release. Focused on security auditing; credited with input on the 1 MB block size limit."
isSatoshi: false
tags:
  - "ray-dillinger"
  - "code-review"
  - "pre-release"
  - "block-size"
  - "cypherpunk"
  - "historic"
secondarySources:
  - name: "Ray Dillinger — Bitcoin P2P e-cash paper (Cryptography Mailing List, November 2008)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/14/"
  - name: "CoinDesk — The Man Who Helped Audit Bitcoin's Code Before Launch"
    url: "https://www.coindesk.com/"
  - name: "Satoshi Nakamoto Institute — Cryptography Mailing List Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/"
  - name: "cryddit (Ray Dillinger) — BitcoinTalk post on the 1MB limit's origin (February 2015)"
    url: "https://bitcointalk.org/index.php?topic=946236.msg10388435#msg10388435"
relatedEntries:
  - aftermath/2017-09-20-ray-dillinger-if-id-known
  - aftermath/2018-10-01-ray-dillinger-interview
  - aftermath/2009-01-09-bitcoin-v01-released
  - analysis/2015-08-15-block-size-war-2015-2017-overview
---

![Two faceless silhouette figures flank a terminal-style panel showing a completed code-audit checkmark, beside a floating-point-versus-integer accounting diagram and a diverging timeline marking a disputed 1 MB block-size-limit date.](/BitcoinArchive/images/analysis/2008-11-06-ray-dillinger-biography-hero.png)

Before Bitcoin v0.1 was released to the public in January 2009, only two people are known to have audited its source code: [Hal Finney](/BitcoinArchive/participants/hal-finney/) and Ray Dillinger. Dillinger spent roughly two weeks examining the code for vulnerabilities and attack vectors.

He has also described a role in the origin of Bitcoin's 1 MB block size limit — a parameter that would later become the center of the 2015–2017 block-size war — though his account of when the limit was adopted conflicts with the documented commit history.

Dillinger is a computer scientist known by his online handles **bear** and **cryddit**. He studied computer science at the University of Kansas and has been active in the cryptography and cypherpunk communities for decades.

## Pre-Release Code Review
In late 2008, Satoshi Nakamoto shared Bitcoin's source code privately with a small number of people before the [public release in January 2009](/BitcoinArchive/entries/aftermath/2009-01-09-bitcoin-v01-released/). Dillinger conducted a security audit of the code, examining it for potential vulnerabilities and attack vectors. Hal Finney simultaneously reviewed the code from a different perspective. In a later BitcoinTalk post, Dillinger recalled spending approximately two weeks reviewing the code, focusing on ways the system might be exploited. In a [2018 interview marking the whitepaper's tenth anniversary](/BitcoinArchive/entries/aftermath/2018-10-01-ray-dillinger-interview/), he gave the technical substance of that review — the floating-point-versus-integer accounting discovery and the satoshi-precision analysis.

## Block Size Limit
In a February 2015 BitcoinTalk post, Dillinger described the origin of the 1 MB block size limit — one of the most debated parameters in Bitcoin's history — as Hal Finney's idea, prompted by Finney's concern about a potential denial-of-service attack; Dillinger recalled that he and Satoshi both objected the cap would not scale, but all three agreed a temporary limit was needed. By Dillinger's account, "the 1MB limit was there by the time Bitcoin launched" in January 2009.

That timing conflicts with the documented history: source-code and blockchain records show Satoshi added the 1 MB limit unilaterally, without announcement, in September 2010 — roughly twenty months after launch. See [the block-size war overview](/BitcoinArchive/entries/analysis/2015-08-15-block-size-war-2015-2017-overview/) for the documented September 2010 origin and the dispute the limit later provoked. The discrepancy between Dillinger's recollection and the commit-history record remains unresolved.

## Mailing List Participation
Dillinger participated in the cryptography mailing list discussion about Bitcoin in November 2008, posting under the name "Ray Dillinger." His posts engaged with the technical details of Bitcoin's design, including questions about the incentive structure and security model.

## Later Reflections
In September 2017, Dillinger published a reflective post on BitcoinTalk titled ["If I'd known then what I know now,"](/BitcoinArchive/entries/aftermath/2017-09-20-ray-dillinger-if-id-known/) in which he discussed what he might have done differently had he understood Bitcoin's future significance. He reflected on the early code review process and the design decisions that shaped Bitcoin's development. In an October 2022 interview with security researcher SerHack, Dillinger provided additional details about the pre-release review process and his early interactions with Satoshi.
