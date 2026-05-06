---
title: "Re: A few thoughts... - Address verification and wallet backup"
date: 2009-01-15T19:03:34Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell argues Bitcoin addresses are more secure than IP-based sending since they verify through multiple channels. He proposes an address-advertisement toggle and reports an exit socket bug."
isSatoshi: false
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "wallet-backup"
  - "address-verification"
  - "bug-report"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Trammell continued the security discussion, arguing that Bitcoin addresses had an advantage over IP-based sending because they could be verified through multiple independent channels:

> True, but the upside to using the BitCoin address is that two people can communicate via a number of different channels to verify the address. If my friend gets my address off my website, and thinks something fishy is going on, he can call me, or IM me, or email me, etc. to verify the address. An attacker would then have to basically be replacing my address with the malicious one in every possible communications channel, including voice, which is a difficult feat.

He endorsed Satoshi's proposed combined IP+Bitcoin address solution, noting that regular transacting parties would already have each other's Bitcoin addresses in their address books.

Trammell then raised an important concern about data loss — one of the earliest discussions of wallet backup:

> One thing that came to mind on this topic is the potential for BitCoin loss if you have a system failure. The application doesn't seem to store any data in the directory that it runs in, so I assume it's stored in the registry and other places ... so it may be a good idea to have the application be able to export everything that it needs for recovery to a file that could be backed up off of the system.

He also proposed an optional "Advertise my BitCoin address to the network" toggle as a privacy-preserving way to enable address resolution, and reported that the application wasn't cleanly closing its network sockets on exit (TCP RSTs).
