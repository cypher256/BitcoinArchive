---
title: "More BitCoin questions"
date: 2010-12-27T20:21:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn asks about the origin of the 21 million coin limit, the 10-minute block target, and the 500KB block size limit while working on a Java SPV implementation for Android."
isSatoshi: false
threadId: "satoshi-mike-hearn-more-questions"
threadPosition: 1
tags:
  - "correspondence"
  - "spv"
  - "android"
  - "scalability"
  - "coin-supply"
  - "block-size"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Happy Christmas Satoshi, assuming you celebrate it wherever you are in the world :-)

I have been working on a Java implementation of the simplified payment verification, with an eye to building a client that runs on Android phones. So I've been thinking a lot about storage requirements and the scalability of BitCoin, which led to some questions that the paper did not answer (maybe there could be a new version of the paper at some point, as I think aspects of it are now out of date).

Specifically, BitCoin has a variety of magic numbers and neither the code nor the paper explain where they came from. For example, the fact that inflation ceases when 21 million coins have been issued. This number must have been arrived at somehow, but I can't see how.

Another is the 10 minute block target. I understand this was chosen to allow transactions to propagate through the network. However existing large P2P networks like BGP can propagate new data worldwide in <1 minute.

The final number I'm interested in is the 500kb limit on block sizes. According to Wikipedia, Visa alone processed 62 billion transactions in 2009. Dividing through we get an average of 2000 transactions per second, so peak rate is probably around double that at 4000 transactions/sec. With a ten minute block target, at peak a block might need to contain 2.4 million transactions, which just won't fit into 500kb. Is this 500kb a temporary limitation that will be slowly removed over time from the official client or something more fundamental?
