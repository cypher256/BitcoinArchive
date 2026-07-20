---
title: "Re: A few thoughts... - Attack classification and send-to-IP security"
date: 2009-01-15T13:46:35Z
type: "article"
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
relatedEntries:
  - correspondence/dustin-trammell/2009-01-15-satoshi-to-trammell-attack-types
  - aftermath/2009-01-11-dustin-trammell-biography
  - aftermath/2009-05-03-malmi-agrees-to-help
  - aftermath/2009-05-01-martti-malmi-biography
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-15T13:46:35Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-15-satoshi-to-trammell-attack-types"
---

![Two contrasting panels on a dark background: a short looped connection between two small node icons on the left, and a wide field of scattered circles converging toward one point on the right; below them, an IP-address tag and a Bitcoin-address tag are joined by arrows into a padlock icon, with a smaller padlock icon set apart in the corner.](/BitcoinArchive/images/analysis/2009-01-15-satoshi-to-trammell-attack-types-hero.png)

Responding to Trammell's detailed MITM analysis, Satoshi introduced the classification he used for attacks:

<!-- quote: q1 -->
> I group attacks into two classes:
> 1) Attacks that can only be done by someone actually in the chain of communication
> 2) Attacks that can be done by anyone on the Internet from anywhere

Satoshi explained that Type 1 attacks affect people on the same LAN or ISP route, while Type 2 exposes users to billions of potential attackers who can achieve economies of scale. He acknowledged the send-to-IP vulnerability:

<!-- speaker: Satoshi Nakamoto -->
> Sending by IP requests a new public key, so yes, it's vulnerable to type 1 man-in-the-middle. If that's a concern, sending to a Bitcoin address doesn't have that vulnerability, although there's a small privacy tradeoff.

He noted pragmatically that most people would obtain Bitcoin addresses from non-SSL websites or unsigned email, which was already vulnerable to both attack types through DNS poisoning.

Satoshi proposed a combined approach for the future:

<!-- speaker: Satoshi Nakamoto -->
> One solution would be to use both the IP and Bitcoin addresses when sending (maybe 1.2.3.4-1Kn8iojk...), where the recipient uses the public key of the Bitcoin address to sign the new public key to prove that you're sending to who you think you are.

He also confirmed that sending to a Bitcoin address worked by recording the transaction on the blockchain for the recipient to discover, and mentioned wallet encryption as a future feature — an idea Satoshi would later endorse as "absolutely essential" when [Martti Malmi](/BitcoinArchive/participants/martti-malmi/) [proposed it independently four months later](/BitcoinArchive/entries/aftermath/2009-05-03-malmi-agrees-to-help/).
