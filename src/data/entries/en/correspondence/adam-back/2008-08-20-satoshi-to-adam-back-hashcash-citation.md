---
title: "Citation of your Hashcash paper"
date: 2008-08-20T17:30:39Z
type: "correspondence"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
sourceNote: "Transcribed from screenshots embedded in Bitcoin Magazine's reproduction of the email chain Adam Back filed as evidence in COPA v. Wright (February 2024)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
description: "The earliest known email from Satoshi Nakamoto: contacting Adam Back to verify the Hashcash citation and sharing a pre-release draft titled 'Electronic Cash Without a Trusted Third Party'."
isSatoshi: true
tags:
  - "hashcash"
  - "earliest-correspondence"
  - "adam-back"
  - "ecash-pdf"
  - "whitepaper"
  - "origins"
secondarySources:
  - name: "COPA v Wright Trial Evidence"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
    note: "Entered into evidence in COPA v. Craig Wright in London, February 2024. Adam Back filed the complete email chain as a witness statement."
---

I'm getting ready to release a paper that references your Hashcash paper and I wanted to make sure I have the citation right.  Here's what I have:

[5] A. Back, "Hashcash - a denial of service counter-measure,"
http://www.hashcash.org/papers/hashcash.pdf, 2002.

I think you would find it interesting, since it takes a hash-based proof-of-work as a way to make e-cash work.  You can download a pre-release draft at http://www.upload.ae/file/6157/ecash-pdf.html  Feel free to forward it to anyone else you think would be interested.  I'm also nearly finished with a C++ implementation to release as open source.

Title: Electronic Cash Without a Trusted Third Party

Abstract:  A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without the burdens of going through a financial institution.  Digital signatures offer part of the solution, but the main benefits are lost if a trusted party is still required to prevent double-spending.  We propose a solution to the double-spending problem using a peer-to-peer network.  The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.  The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.  As long as honest nodes control the most CPU power on the network, they can generate the longest chain and outpace any attackers.  The network itself requires minimal structure.  Messages are broadcasted on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.

satoshi@anonymousspeech.com
