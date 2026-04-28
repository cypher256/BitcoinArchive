---
title: "Satoshi to Mike Hearn on ECDSA curve choice (April 18, 2009)"
date: 2009-04-18T18:16:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi sends coins back and explains why EC-DSA cannot encrypt messages like RSA, preventing transaction comments."
isSatoshi: true
tags:
  - "correspondence"
  - "transaction"
  - "ecdsa"
  - "encryption"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
relatedEntries:
  - aftermath/2023-10-21-lopp-hal-finney-not-satoshi
---

I sent back 32.51 and 50.00.

I badly wanted to find some way to include a comment with indirect transfers, but there just wasn't a way to do it. Bitcoin uses EC-DSA, which was essential for making the block chain compact enough to be practical with today's technology because its signatures are an order of magnitude smaller than RSA. But EC-DSA can't encrypt messages like RSA, it can only be used to verify signatures.
