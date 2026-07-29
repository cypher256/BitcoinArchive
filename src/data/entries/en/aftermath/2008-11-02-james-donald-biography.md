---
title: "James A. Donald (dates unknown) — Cryptographer who was the first to respond to the Bitcoin white paper"
date: 2008-11-02T23:46:23Z
type: "biography"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/James_A._Donald"
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
description: "Cryptographer and libertarian commentator who was the first to publicly respond to Satoshi on the cryptography list (November 2, 2008). His scalability skepticism prompted key design clarifications."
isSatoshi: false
callout:
  entry: "analysis/2008-11-02-james-donald-satoshi-identity-hypothesis"
  label: "Identity hypothesis"
tags:
  - "james-donald"
  - "biography"
  - "cryptography-mailing-list"
  - "whitepaper"
  - "first-response"
  - "historic"
secondarySources:
  - name: "Satoshi Nakamoto Institute — Cryptography Mailing List Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/"
  - name: "Metzdowd Cryptography Mailing List Archives"
    url: "https://www.metzdowd.com/pipermail/cryptography/2008-November/"
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
relatedEntries:
  - "analysis/2008-11-02-james-donald-satoshi-identity-hypothesis"
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper
  - aftermath/2009-01-03-genesis-block
  - analysis/2026-05-24-satoshi-design-vs-current-reality
---

![A dark-blue infographic with a faceless silhouette profile on a timeline flanked by a paper icon and a document icon, plus a stacked gold-and-teal layers diagram and a small-device-versus-document comparison below.](/BitcoinArchive/images/analysis/2008-11-02-james-donald-biography-hero.png)

Two days after [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) [posted the Bitcoin whitepaper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) to the cryptography mailing list on October 31, 2008, James A. Donald [became the first person to publicly respond](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald/):

> "We very, very much need such a system, but the way I understand your proposal, it does not seem to scale to the required size."

His skepticism pulled some of Satoshi's most detailed early architectural explanations into the public record — simplified payment verification, the trust and double-spend model — including the reply the [genesis-block entry](/BitcoinArchive/entries/aftermath/2009-01-03-genesis-block/) treats as Satoshi's closest registered moment of personal conviction.

Donald is a cryptographer and libertarian commentator long active in the cypherpunk community; he maintained the website jim.com on cryptography, political philosophy, and economics.

## First Response to the Bitcoin White Paper

Donald argued in his November 2 reply that the system would require every node to process every transaction, making it impractical for widespread use.

## Technical Exchange with Satoshi
Across November 2008, Satoshi answered the scaling objection point by point: not every node need process every transaction — simplified payment verification would let lightweight clients confirm payments without storing the full chain.

Days later, in a [November 9 message](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-09-james-donald-bitcoin-p2p-e-cash-paper/), Donald coined a name for a bitcoin bank — a "bink" — and cast bitcoins as a settlement layer beneath account money, the way gold sat beneath the gold standard; it anticipated the exchanges and custodians that would later dominate. The shape Donald described — a settlement layer beneath stacked exchange, ETF and Lightning custodians — is what [the reading of how the running system drifted from the whitepaper](/BitcoinArchive/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/) documents.

Pressed on trust and double-spending, Satoshi spelled out the model in unusual detail.

## Significance
Donald's critical engagement with the white paper forced Satoshi to articulate Bitcoin's scalability model and trust assumptions in a public forum. He stayed skeptical of Bitcoin's feasibility — but a doubter asking the first hard questions is exactly why some of Bitcoin's earliest design rationale sits in the public record at all.

## Satoshi candidacy

Donald's place at the origin of the public record, his cypherpunk profile, and a stylometric match have made him a recurring Satoshi candidate — the leading lead Benjamin Wallace pursued in *The Mysterious Mr. Nakamoto* (2025) before excluding him in person. The case for and against — including Satoshi answering him as a third party, and Wallace's character-based exclusion — is laid out in the [James A. Donald = Satoshi hypothesis](/BitcoinArchive/entries/analysis/2008-11-02-james-donald-satoshi-identity-hypothesis/); the [identity-hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) places him among the named candidates.
