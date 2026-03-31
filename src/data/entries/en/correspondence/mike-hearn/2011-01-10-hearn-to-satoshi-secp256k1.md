---
title: "Security of secp256k1 curve"
date: 2011-01-10T16:48:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn points Satoshi to a forum discussion about the security of the secp256k1 curve, noting Hal Finney's concerns about its risk profile."
isSatoshi: false
threadId: "satoshi-mike-hearn-more-questions"
tags:
  - "correspondence"
  - "secp256k1"
  - "ecdsa"
  - "hal-finney"
  - "cryptography"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Ah, of course, that makes sense.

By the way, if you didn't see it already, there's a discussion on the security of secp256k1 on the forum:

http://www.bitcoin.org/smf/index.php?topic=2699.0

Hal (i presume this is Hal Finney) seems to think the curve is at higher risk of attack than random curves. I guess you chose secp256k1 for the mentioned performance improvement?
