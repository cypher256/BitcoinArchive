---
title: "Bitcoin v0.1 released"
date: 2009-01-09T03:05:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi announces the release of Bitcoin v0.1, the first working implementation of the Bitcoin software. Available for Windows, with the source code included."
isSatoshi: true
tags:
  - "release"
  - "v0.1"
  - "software"
  - "announcement"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/17/"
---

Announcing the first release of Bitcoin, a new electronic cash
system that uses a peer-to-peer network to prevent double-spending.
It's completely decentralized with no server or central authority.

See bitcoin.org for screenshots.

Download link:
http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar

Windows only for now. Open source C++ code is included.

- Unpack the files into a directory, run BITCOIN.EXE
- It automatically connects to other nodes

If you can keep a node running that accepts incoming connections,
you'll really be helping the network a lot. Port 8333 on your
firewall needs to be open to receive incoming connections.

The software is still alpha and experimental. There's no guarantee
the system's state won't have to be restarted at some point if it
becomes necessary, although I've done everything I can to build in
extensibility and versioning.

You can get coins by getting someone to send you some, or turn on
Options->Generate Coins to run a node and generate blocks. I made
the proof-of-work difficulty ridiculously easy to start with, so
for a little while in the beginning a typical PC will be able to
generate coins in just a few hours. It'll get a lot harder when
competition makes the automatic adjustment drive up the difficulty.

Satoshi Nakamoto
