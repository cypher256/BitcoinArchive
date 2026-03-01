---
title: "SPV implementation progress"
date: 2010-12-30T00:27:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn reports progress on his Java SPV implementation, describes his approach to block storage on Android, and raises concerns about protocol ossification as the number of implementations grows."
isSatoshi: false
threadId: "satoshi-mike-hearn-more-questions"
threadPosition: 3
tags:
  - "correspondence"
  - "spv"
  - "android"
  - "block-chain"
  - "protocol-ossification"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Thanks for the info.

I reached the same conclusions about client only nodes and this is what I've been implementing. I'm nearly there ..... I have block chain download, parsing and verification of the blocks/transactions done, with creation of spend transactions almost done.

v1 will basically do as you propose, with the possible optimization of storing only the blocks needed to form the block locator (with the exponential thinning). As Android provides local storage that is private to the app, you don't need to store the entire block chain to be able to accept new blocks ... just enough to ensure you can always stay on the longest chain.

By the way, your code is easy to read and has been an invaluable reference. So thanks for that.

In v2 I'm thinking of showing transactions before they are integrated into the block chain by running secure/locked down relay nodes that send messages to the phones when a transaction is accepted into the memory pool. Android provides a secure, low power back channel to every phone. Messages are stored server side if the device is offline and apps are automatically started on the phone to handle incoming messages.

So as long as the relay nodes are unhacked, this system should give enough trust that low value transactions can be shown in the UI immediately. It introduces some centralization/single points of failure, but if the relay mechanism dies or is hacked, the damage only lasts for 10 minutes until the new blocks are downloaded.

> Client-only re-implementations would not need to implement EvalScript at all, or at most just implement the five ops used by the standard transaction templates."

Indeed, there's no point in client-only implementations implementing EvalScript because they can't verify transactions aren't being double spent without storing and indexing the entire block chain. My code parses the scripts and then relies on them having a standard structure, but doesn't actually run them.

> Educated guess, and the maths work out to round numbers. I wanted something that would be not too low if it was very popular and not too high if it wasn't.

It'd be interesting to see the working for this. In some sense the number of coins is arbitrary as the nanocoin representation means the issuance is so huge it's practically infinite.

> A higher limit can be phased in once we have actual use closer to the limit and make sure it's working OK.

It'd be worth implementing some kind of more robust auto update mechanism, or a schedule for the phase in of this, if only because when people evaluate "is BitCoin worth my time and effort" a solid plan for scaling up is good to have written down.

I'm not worried about the physical capabilities of the hardware, but more protocol ossification as the app is reimplemented and nodes which don't auto-update themselves increase in number. Client only reimplementations pose no problems of course, but other systems like SMTP have proven impossible to globally upgrade despite having extension mechanisms built in .... just too many implementations and too many installations.
