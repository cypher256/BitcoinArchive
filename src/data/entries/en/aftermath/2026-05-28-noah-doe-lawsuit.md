---
title: "Anonymous Plaintiff Seeks Legal Title to $293 Billion in Dormant Bitcoin, Without Holding Any Private Keys"
date: 2026-05-28T00:00:00Z
type: "article"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/news/anonymous-plaintiff-seeks-legal-bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "An anonymous plaintiff sues 39,069 dormant Bitcoin addresses holding ~3.8M BTC under New York's lost-property statute (March 2026). Galaxy Digital ties 21,923 of them to the Patoshi pattern."
isSatoshi: false
tags:
  - "lawsuit"
  - "patoshi"
  - "dormant-coins"
  - "satoshi-coins"
  - "lost-property"
  - "noah-doe"
  - "galaxy-digital"
  - "alex-thorn"
  - "new-york"
secondarySources:
  - name: "U.Today — Anonymous plaintiff sues to claim 3.8M BTC"
    url: "https://u.today/anonymous-plaintiff-sues-to-claim-38-million-btc"
  - name: "Crypto Times — Noah Doe tests lost-property law on dormant wallets"
    url: "https://www.cryptotimes.io/2026/05/28/a-280b-bitcoin-lawsuit-noah-doe-tests-lost-property-law-on-dormant-wallets/"
  - name: "Bitcoin.com News — Anonymous plaintiff claims $293B Bitcoin haul"
    url: "https://news.bitcoin.com/anonymous-plaintiff-claims-293b-bitcoin-haul-targets-satoshis-dormant-wallets-in-ny-court-case/"
  - name: "Coingape — Anonymous Bitcoin lawsuit Noah Doe"
    url: "https://coingape.com/anonymous-bitcoin-lawsuit-noah-doe-3-8-million-btc-claim/"
relatedEntries:
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
---

On March 11, 2026, an anonymous plaintiff using the pseudonym "Noah Doe," joined by two Wyoming LLCs (ABC Company and XYZ Company), filed suit in the Supreme Court of the State of New York under Index No. 153119/2026. The suit names 39,069 dormant Bitcoin addresses as defendants and claims ownership of the approximately 3.8 million BTC they hold — valued at roughly $293 billion at filing.

Counsel of record is Lewis & Lin LLC. The novel legal theory rests on **Article 7-B of New York's Personal Property Law**, the state's lost-property statute traditionally applied to physical objects. Plaintiff's argument: dormant Bitcoin meets the statutory definition of mislaid or abandoned personal property, and a finder who has "publicly maintained" possession through some yet-to-be-disclosed mechanism is entitled to ownership transfer through court order.

The legal innovation is significant. New York courts have applied Article 7-B to physical chattels — wallets, jewelry, motor vehicles — but never to digital assets recorded on a public blockchain. The pleading therefore frames a question of first impression: whether the statutory category of "personal property" extends to UTXO-controlled coins whose controlling private key has been lost, forgotten, or destroyed.

```mermaid
flowchart TD
    P[Anonymous plaintiff<br/>Noah Doe + 2 Wyoming LLCs]
    P -->|filed 2026-03-11| C[NY Supreme Court<br/>Index 153119/2026]
    P -->|legal theory| L[NY Personal Property Law<br/>Article 7-B — lost-property statute]
    L -->|historic scope| T[Physical chattels only<br/>watches, jewelry, vehicles]
    P -->|claims jurisdiction over| D[39,069 dormant BTC addresses<br/>~3.8M BTC, ~$293B]
    D -->|Galaxy Digital May 2026| Pat[21,923 = Patoshi pattern<br/>~1.096M BTC]
    C -.->|hypothetical judgment| J{Transfer order issued?}
    J -->|yes, but| E[Private keys missing]
    E --> X[UTXO cannot move<br/>order is unenforceable]
    classDef gap fill:#ffff99,stroke:#c80
    class J,E,X gap
```

In May 2026, Galaxy Digital's research head Alex Thorn published an analysis classifying the 39,069 defendant addresses against [Sergio Demian Lerner's Patoshi nonce signature](/BitcoinArchive/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/). After excluding addresses linked to the [Bitfinex 2016 hack](/BitcoinArchive/entries/aftermath/2022-02-08-bitfinex-hack-morgan-lichtenstein-arrest/) and known exchange wallets, Thorn identified **21,923 addresses (56% of the defendants) as carrying the Patoshi pattern** — approximately 1.096 million BTC, in alignment with Lerner's earlier estimate of ~1.1M BTC mined by the single early miner widely understood to be Satoshi Nakamoto himself.

The remaining 17,146 addresses likely belong to other early miners or are unclassified. None of the defendant addresses have moved coins since the dormancy thresholds applied in the complaint.

The case is ongoing. The defendants — wallet addresses — cannot answer, and the procedural mechanics of how the plaintiff would establish standing, serve unknown holders, and enforce any judgment are themselves novel questions. Bitcoin-community reception has been overwhelmingly skeptical: critics argue that the suit amounts to asking a state court to declare a finder's right over coins whose original owner has not relinquished cryptographic control, and that any judgment ordering transfer would be unenforceable absent the private keys.

The case nevertheless tests, for the first time in a US court, whether lost-property doctrine can reach into the UTXO set. A finding for the plaintiff — even a partial one — would create precedent affecting all long-dormant Bitcoin, including the Satoshi-era reserves.
