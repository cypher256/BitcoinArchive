---
title: "Re: Citation of your Hashcash paper (Bitcoin v0.1 launch announcement)"
date: 2009-01-10T18:46:45Z
type: "correspondence"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
sourceNote: "Transcribed from screenshots embedded in Bitcoin Magazine's reproduction of the email chain Adam Back filed as evidence in COPA v. Wright (February 2024). Sender address changed from satoshi@anonymousspeech.com (used in the August 2008 chain) to satoshi@vistomail.com."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
description: "Satoshi writes Adam Back the day after the Bitcoin v0.1 release, announcing the launch and forwarding Hal Finney's high-level overview from the cryptography mailing-list thread."
isSatoshi: true
tags:
  - "hashcash"
  - "bitcoin-launch"
  - "hal-finney"
  - "v0.1"
  - "origins"
secondarySources:
  - name: "COPA v Wright Trial Evidence"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
    note: "Adam Back's Second Witness Statement (document C/21) included the complete five-email chain."
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2008-11-13T16:24:18Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-13-re-bitcoin-p2p-e-cash-paper-finney"
---

Thanks for the pointers you gave to my Wei Dai's b-money paper and others.

I just released the open source implementation of my paper, Bitcoin v0.1.  Details, download and screenshots are at www.bitcoin.org

The main idea of the system is the generation of a chain of hash based proof-of-work to create self extant proof of the majority consensus.  Users get new coins by contributing proof-of-work to the chain.

There was a discussion of the design on the Cryptography mailing list.  Hal Finney gave a good high-level overview:

<!-- quote: q1 -->
> One thing I might mention is that in many ways bitcoin is two independent ideas: a way of solving the kinds of problems James lists here, of creating a globally consistent but decentralized database; and then using it for a system similar to Wei Dai's b-money (which is referenced in the paper) but transaction/coin based rather than account based.  Solving the global, massively decentralized database problem is arguably the harder part, as James emphasizes.  The use of proof-of-work as a tool for this purpose is a novel idea well worth further review IMO.

Satoshi
