---
title: "Craig Wright (1970–) — Australian businessman who falsely claimed to be Satoshi Nakamoto"
date: 2016-05-02T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Craig_Steven_Wright"
author: "Craig Wright"
participants:
  - name: "Craig Wright"
    slug: "craig-wright"
description: "Craig Steven Wright (born 1970): Australian computer scientist who publicly claimed to be Satoshi in May 2016. UK High Court (COPA v Wright, March 2024) found he fabricated evidence on a grand scale."
isSatoshi: false
callout:
  entry: "analysis/2016-05-02-craig-wright-satoshi-identity-hypothesis"
  label: "Identity hypothesis"
tags:
  - "craig-wright"
  - "identity-claim"
  - "debunked"
  - "copa"
  - "lawsuit"
secondarySources:
  - name: "COPA v Wright — UK High Court Judgment (March 14, 2024)"
    url: "https://www.judiciary.uk/judgments/copa-v-wright/"
  - name: "BBC — Craig Wright reveals himself as Bitcoin creator (May 2, 2016)"
    url: "https://www.bbc.co.uk/news/technology-36168863"
  - name: "Wired — Is Craig Wright Satoshi Nakamoto? (December 8, 2015)"
    url: "https://www.wired.com/2015/12/bitcoins-creator-satoshi-nakamoto-is-probably-this-unknown-australian-genius/"
  - name: "Law Gazette — 'Fake Satoshi' hit with costs bill over AI evidence (March 2025)"
    url: "https://www.lawgazette.co.uk/news/fake-satoshi-hit-with-costs-bill-over-ai-evidence/5122587.article"
relatedEntries:
  - "analysis/2016-05-02-craig-wright-satoshi-identity-hypothesis"
  - "aftermath/2015-12-08-wired-gizmodo-craig-wright-claims"
  - "aftermath/2016-05-02-craig-wright-bbc-economist-claim"
  - "aftermath/2021-06-28-wright-v-cobra-whitepaper-lawsuit"
  - "aftermath/2021-06-28-cobra-response-to-whitepaper-ruling"
  - "aftermath/2024-03-14-copa-v-wright-ruling"
  - "aftermath/2024-02-21-copa-trial-malmi-testimony"
  - "aftermath/2024-02-22-mike-hearn-copa-trial-testimony"
  - "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "analysis/2009-01-03-genesis-block-hardcode-analysis"
  - "currency/2026-07-27-bitcoin-sv-currency-overview"
quotes:
  - id: "q1"
    person: "James Mellor"
    personSlug: "james-mellor"
    date: "2024-03-14T00:00:00Z"
    sourceEntryId: "aftermath/2024-03-14-copa-v-wright-ruling"
---

![Dark-navy illustration of a looping arrow diagram linking two dates, a red-stamped stack of legal documents, a judge's gavel, and a faceless hooded silhouette above a mismatched identity nameplate.](/BitcoinArchive/images/analysis/2016-05-02-craig-wright-biography-hero.png)

On May 2, 2016, Craig Wright publicly declared himself to be [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) in coordinated [interviews with the BBC, The Economist, and GQ](/BitcoinArchive/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/). He offered cryptographic proof — a digitally signed message using keys associated with early Bitcoin blocks. Within hours, security researchers showed he had reused an existing signature from a 2009 Bitcoin transaction rather than producing a new signature with the claimed keys.

Eight years later, on March 14, 2024, Justice Mellor of the UK High Court delivered the [ruling](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/) in the case brought by the Crypto Open Patent Alliance:

<!-- quote: q1 -->
> 1. Dr. Wright is not the author of the Bitcoin White Paper.
> 2. Dr. Wright is not the person who adopted or operated under the pseudonym Satoshi Nakamoto in the period 2008 to 2011.
> 3. Dr. Wright is not the person who created the Bitcoin System.
> 4. Dr. Wright did not author the initial versions of the Bitcoin software.

The judge characterised Wright as an extremely dishonest witness and concluded he had engaged in deliberate and extensive forgery of documents to support his false claim of being Satoshi Nakamoto. The self-claim, the arguments it rested on, and the counter-evidence are laid out as a Satoshi-identity hypothesis in [Was Craig Wright Satoshi?](/BitcoinArchive/entries/analysis/2016-05-02-craig-wright-satoshi-identity-hypothesis/)

Craig Steven Wright is an Australian computer scientist and businessman, born in October 1970 in Brisbane, Australia.

```mermaid
timeline
    1970 : Born in Brisbane (Oct)
    2015 : Wired and Gizmodo report Wright as possible Satoshi (Dec 8)
    %% link: /BitcoinArchive/entries/aftermath/2015-12-08-wired-gizmodo-craig-wright-claims/
    2016 : Wright publicly claims to be Satoshi via BBC, The Economist, GQ (May 2)
    %% link: /BitcoinArchive/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/
         : "Proof" debunked as reused signature from a 2009 Bitcoin transaction
    2021 : Sues Cobra (bitcoin.org operator) over whitepaper copyright (Feb)
         : Default judgment for Wright; Cobra chose anonymity over identity disclosure (Jun 28)
    %% link: /BitcoinArchive/entries/aftermath/2021-06-28-wright-v-cobra-whitepaper-lawsuit/
    2024 : COPA v Wright trial - Martti Malmi testifies (Feb 21)
    %% link: /BitcoinArchive/entries/aftermath/2024-02-21-copa-trial-malmi-testimony/
         : Mike Hearn testifies (Feb 22)
    %% link: /BitcoinArchive/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/
         : Justice Mellor rules industrial-scale forgery; Wright loses (Mar 14)
    %% link: /BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/
    2025 : Appeal fails; Court of Appeal orders £225,000 costs for AI-fabricated submissions (Mar 7)
```

## Withdrawal

The December 2015 [Wired and Gizmodo investigations](/BitcoinArchive/entries/aftermath/2015-12-08-wired-gizmodo-craig-wright-claims/) had preceded the May 2016 claim — the journalists had been the first to suggest Wright as a possible Satoshi candidate, citing materials later shown to be fabricated. After the May 2016 "proof" collapsed under scrutiny, Wright promised further evidence but never delivered. He instead posted:

> "I believed that I could put the years of anonymity and hiding behind me. But I can't."

## Whitepaper Lawsuit
In February 2021, Wright [sued](/BitcoinArchive/entries/aftermath/2021-06-28-wright-v-cobra-whitepaper-lawsuit/) the pseudonymous operator of bitcoin.org ([Cobra](/BitcoinArchive/participants/cobra/)) over Bitcoin whitepaper copyright. On June 28, 2021, the court issued a default judgment in Wright's favor — not because the claim had merit, but because Cobra chose to protect his anonymity rather than reveal his identity to defend himself. Hours later, Cobra [posted a public rebuttal](/BitcoinArchive/entries/aftermath/2021-06-28-cobra-response-to-whitepaper-ruling/) declaring cryptographic rules superior to rules a court can buy.

Wright's identity claims rested on signing with the keys to early blocks (1–9) but never extended to the genesis-block coinbase key — the single demonstration that would be dispositive, which [the genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) notes has never been performed by anyone, including Wright.

## The failed appeal

Wright sought permission to appeal the COPA ruling, and lost. On March 7, 2025, the Court of Appeal ordered him to pay £225,000 in costs — £100,000 to COPA and £125,000 to the Bitcoin developers he had also sued — after finding that his written submissions, prepared with an AI tool, cited non-existent cases and made false statements about the trial that risked seriously misleading the court. It is reported as the first time a UK civil court has ordered costs over a litigant's misuse of AI.

