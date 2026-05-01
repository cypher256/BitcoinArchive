---
title: "Adam Back's b-money critique: seven monetary-design issues identified ten years before Bitcoin"
date: 1998-12-06T00:48:42Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "https://mailing-list-archive.cryptoanarchy.wiki/archive/1998/12/0b252a6001b0bb9e53289d9a7679164a884a28626360ff8a05ba8c5e9f4208ae/"
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Adam Back's December 6, 1998 reply on the Cypherpunks mailing list, identifying seven monetary-design issues in Wei Dai's b-money proposal — Moore's-Law inflation pressure on hardware mint cost, borrowed-resource exploitation, transaction linkability, economy-of-scale custom-hardware advantage, fiat on-ramp privacy leakage, fiat off-ramp identity exposure, and resource-waste overhead. Back proposed Hashcash explicitly as the candidate minting mechanism: 'to create value you burn CPU time, just like with hashcash.' The post is a substantive monetary-system-design analysis ten years before Bitcoin, anticipating issues Bitcoin's difficulty-adjustment algorithm would later resolve and others (mining-ASIC concentration, PoW energy use) that remain live debates."
isSatoshi: false
tags:
  - "adam-back"
  - "wei-dai"
  - "b-money"
  - "hashcash"
  - "cypherpunks"
  - "monetary-policy"
  - "proof-of-work"
  - "origins"
  - "historic"
secondarySources:
  - name: "Venona archive — same email under local-time date (Dec 5, 1998)"
    url: "http://cypherpunks.venona.com/archive/1998/12/msg00194.html"
    note: "The same message archived on a different mirror; the Dec 5 date reflects PST-local time. The cryptoanarchy.wiki copy carries the email-header timestamp `Sun, 6 Dec 1998 08:48:42 +0800` (UTC 1998-12-06T00:48:42Z)."
  - name: "Bitcoin Magazine — Bitcoin, Adam Back and the Quest for Digital Cash"
    url: "https://bitcoinmagazine.com/culture/bitcoin-adam-back-and-digital-cash"
relatedEntries:
  - "aftermath/1997-05-01-adam-back-hashcash-announcement"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/2008-08-20-adam-back-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "correspondence/adam-back/2008-08-21-adam-back-to-satoshi"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
---

*From the Cypherpunks mailing list (cypherpunks@cyberpass.net), December 6, 1998 (00:48:42 UTC):*

*Subject: Re: Wei Dei's "b-money" protocol*

*From: Adam Back &lt;aba@dcs.ex.ac.uk&gt;*

[Adam Back](/BitcoinArchive/participants/adam-back/) replied to [Wei Dai](/BitcoinArchive/participants/wei-dai/)'s [b-money proposal](/BitcoinArchive/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) with a substantive monetary-design critique. Back identified seven distinct issues in the proposal as it stood, while explicitly proposing his own [Hashcash](/BitcoinArchive/entries/aftermath/1997-05-01-adam-back-hashcash-announcement/) as the candidate minting mechanism for the system.

**Hashcash as b-money's minting mechanism:**

> "to create value you burn CPU time, just like with hashcash"

This sentence is the explicit pre-Bitcoin proposal of the configuration Bitcoin would later realize: a proof-of-work primitive (Hashcash) used as the minting mechanism for a decentralized digital-cash system (b-money). Back proposed it as a candidate; he did not implement it.

**Seven monetary-design issues identified by Back**

*[Editor: the seven issues below are the editor's structured summary of Back's analysis. The original message is available in full at the cryptoanarchy.wiki archive linked under `sourceUrl`; readers checking specific phrasing should consult the archived original.]*

1. **Inflation under Moore's-Law hardware decline.** The cost of the hardware required to compute a given hash-collision falls in line with Moore's law. Hardware-cost decline produces mint-cost decline, which produces inflationary pressure on the value of newly-minted units.
2. **Borrowed-resource exploitation.** A user with access to a population of workstations they do not personally own (Back's example: a student with access to a campus full of workstations) can obtain effectively-free CPU time, undermining the cost-as-value-floor assumption.
3. **Transaction linkability.** In b-money's pseudonymous design, what looks like anonymity is in fact "linkable anonymity" — pseudonymity, not unlinkable anonymity.
4. **Economy-of-scale custom-hardware advantage.** A participant who can deploy custom hardware specifically optimized for the hash-collision search obtains a "bulk discount" against general-purpose-CPU participants — a structural unfairness in mint allocation.
5. **Fiat on-ramp privacy leakage.** Acquiring b-money from fiat currency requires the buyer to "reveal his identity by the use of traceable payment systems," undermining anonymity at the system entry.
6. **Fiat off-ramp identity exposure.** The symmetric problem at the exit: cashing out to fiat ("force-monopoly money") without revealing identity is "difficult."
7. **Resource-waste overhead.** Operating the system imposes overhead "equivalent to the value of b-money in circulation" — the energy-consumption critique that would later attach to Bitcoin's proof-of-work.

**Wei Dai's reply (December 7):**

Wei Dai [replied to Back's critique on December 7, 1998](/BitcoinArchive/entries/aftermath/1998-12-07-wei-dai-re-b-money-protocol/), conceding that "b-money will at most be a niche currency/contract enforcement mechanism" and revealing a partial retreat from earlier crypto-anarchist positions: "I now tend to think that the government monopoly of force is a net benefit." Dai also raised price stability, business cycles, and optimal inflation rates as open questions for any wider-adoption monetary system.

**Mapping Back's 1998 issues to Bitcoin's design ten years later**

*[Editor: the table below is the editor's structured comparison.]*

| Back 1998-12-06 issue | Bitcoin's resolution |
|---|---|
| ❶ Moore's-Law mint-cost decline → inflation pressure | **Difficulty adjustment** — re-targeted every 2016 blocks to keep block-time approximately constant against compute-power growth, decoupling mint-rate from hardware-cost decline |
| ❹ Economy-of-scale custom-hardware advantage | **Unresolved** — surfaced later as the mining-ASIC concentration question in Bitcoin's operational history |
| ❼ Resource-waste overhead equivalent to circulating value | **Live debate** — the energy-consumption critique that has continued to attach to Bitcoin's proof-of-work since launch |
| Central proposal: "to create value you burn CPU time, just like with hashcash" | **Bitcoin's central mechanism** — Bitcoin couples a Hashcash-style PoW primitive with a decentralized digital-cash ledger and uses block-subsidy issuance for mint allocation |

*[Editor: this post is a primary-source pre-Bitcoin record of Adam Back engaging in substantive monetary-system-design analysis ten years before Bitcoin's launch. The same Hashcash-as-b-money-minting application is recorded more formally in Back's [August 2002 Hashcash paper §7 Applications](http://www.hashcash.org/papers/hashcash.pdf), which lists "hashcash as a minting mechanism for Wei Dai's b-money electronic cash proposal" among its enumerated applications. None of this implies Back implemented Bitcoin or the b-money/Hashcash combination — Back proposed the application as a candidate; the implementation, the resolution of issue 1, and the synthesis of the remaining design space were Satoshi's contributions documented in [Bitcoin v0.1](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-design-lineage/) ten years later.]*
