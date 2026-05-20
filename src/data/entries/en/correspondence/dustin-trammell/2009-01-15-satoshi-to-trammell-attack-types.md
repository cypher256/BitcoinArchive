---
title: "Re: A few thoughts... - Attack classification and send-to-IP security"
date: 2009-01-15T13:46:35Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published by Dustin Trammell in November 2013"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi responds to Trammell's MITM analysis by classifying attacks into two types (chain-of-communication vs. anyone on the Internet), proposes a combined IP+address fix, and notes wallet encryption."
isSatoshi: true
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "man-in-the-middle"
  - "wallet-encryption"
  - "attack-classification"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Responding to Trammell's detailed MITM analysis, Satoshi introduced a classification framework for attacks that would become influential in security thinking about Bitcoin:

> I group attacks into two classes:
> 1) Attacks that can only be done by someone actually in the chain of communication
> 2) Attacks that can be done by anyone on the Internet from anywhere

Satoshi explained that Type 1 attacks affect people on the same LAN or ISP route, while Type 2 exposes users to billions of potential attackers who can achieve economies of scale. He acknowledged the send-to-IP vulnerability:

> Sending by IP requests a new public key, so yes, it's vulnerable to type 1 man-in-the-middle. If that's a concern, sending to a Bitcoin address doesn't have that vulnerability, although there's a small privacy tradeoff.

He noted pragmatically that most people would obtain Bitcoin addresses from non-SSL websites or unsigned email, which was already vulnerable to both attack types through DNS poisoning.

Satoshi proposed a combined approach for the future:

> One solution would be to use both the IP and Bitcoin addresses when sending (maybe 1.2.3.4-1Kn8iojk...), where the recipient uses the public key of the Bitcoin address to sign the new public key to prove that you're sending to who you think you are.

He also confirmed that sending to a Bitcoin address worked by computing the transaction into the blockchain for the recipient to discover, and mentioned wallet encryption as a future feature.
