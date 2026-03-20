---
title: "Questions about BitCoin"
date: 2009-04-18T22:52:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi explains why transactions show 'from: unknown' and that 'Generated (not accepted)' happens when two nodes find a block simultaneously."
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
threadPosition: 12
tags:
  - "correspondence"
  - "transaction"
  - "generated-not-accepted"
  - "p2p"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Got the 50.

Transactions sent to a bitcoin address will always say "from: unknown". The transaction only tells who it's to. Sending by bitcoin address has a number of problems, but it's so nice having the fallback option to be able to send to anyone whether they're online or not. There are a number of ideas to try to improve things later. For now, if things work out like the real world where the vast majority of transactions are with merchants, they'll pretty much always make sure to set up to receive by IP. The P2P file sharing networks seem fairly successful at getting a large percentage of their users to set up their firewalls to forward a port.

The "Generated (not accepted)" normally happens if two nodes find a block at close to the same time, one of them will not be accepted. It's normal and unavoidable. I plan in v0.1.6 to hide those, since they're just confusing and annoying and there's no reason for users to have to see them. While the network is still small like it is now, if you can't receive incoming connections you're at more of a disadvantage because you can't receive block announcements as directly.
