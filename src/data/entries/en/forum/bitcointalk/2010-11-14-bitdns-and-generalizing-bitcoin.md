---
title: "BitDNS and Generalizing Bitcoin"
date: 2010-11-14T18:02:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1790.msg22019#msg22019"
author: "appamatto"
participants:
  - name: "appamatto"
    slug: "appamatto"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "appamatto starts a discussion: BitDNS and Generalizing Bitcoin."
isSatoshi: false
threadId: "bt-bitdns-and-generalizing-bitcoin"
threadPosition: 1
tags: []
---

This is based on a discussion on 11/14/2010 on the IRC channel.

**BitDNS**

Although there have been attempts to tackle DNS in a distributed way in the past, I don't think there have been solutions that have fully removed authority from the equation.

If there was such a solution, it probably would have been able to implement bitcoin directly on top of it, and we all know that didn't happen.

However, it seems possible to create a bitcoin clone (bitDNS) that provides a solution to distributed authority-free name allocation and transfer.

Basically, the system is a copy of bitcoin where miners generate 50 new name mappings of their choosing whenever they win a block.  The name mappings change hands in a way similar to btc.

This system is separate from btc, and it is likely that escrow services will provide a name market in btc, since any such escrow can leverage the two block chains to verify transactions.  Miners can pick names that are already being bid upon with funds in escrow to make sure they are able to sell generated names quickly.

**Generalizing Bitcoin: BitX**

This is all well and good, but now there are two block chains, and any given miner can only generate for one at a time.  This will be really bad when even more clever applications are developed that require bitcoin-like properties but will be susceptible to attack in their early development.  Enter BitX, designed to support any and every such application on a single block chain.

BitX has a block chain like bitcoin's.  However, miners choose to distribute arbitrary application data in the following manner:

1) The payload in a block is a mapping from application names to hashes: ["bitcoin": <hash>, "bitDNS": <hash>, "bitHaiku": <hash>, ...]

2) Any given block is only allowed to create one new application that does not already appear somewhere in the block chain.  This is to prevent spam.

3) Any given block may omit data for any application.  Similarly to the current situation, miners have a choice as to what transactions to include, and this extends to the choice over which applications to choose to send data for.

4) Application data is transfered separately, so for instance a bitcoin client will never have to care about haikus or DNS names, as it can simply ask someone for the bitcoin payload and make sure it matches the hash in the appropriate block.

5) On the client side, blocks are only ever rejected for an error relating to the previous four points.  In other words, blocks aren't rejected for carrying a faulty bitcoin payload, because this might result in rejecting valid DNS transfers.  Instead, bitcoin clients accept the most recent block but ignore the invalid bitcoin transactions.

Miners will engage in activities they feel profitable.  For example, miners may not see a profit motive in haikus, but will want to generate DNS names because they can be sold easily.  I think this system could support a very wide range of useful applications while adding only a minimal overhead to the block chain itself.  Application proliferation is kept in check by the interests of the miners themselves.

This also seems to make the block chain more modular, as it separates concerns; the block chain is strictly for creating a universal state of the system for everyone in the world, and application data travels out of band but is verified against the block chain.

One effect of the modularity is that applications can ignore illegal or undesirable application data and only download payloads for the applications they care about.

As a last thought: BitX poses a significant threat to bitcoin, because money may not be the "killer app" for the block chain.  In other words, what happens when bitBeanieBabies becomes bigger than bitcoin?  Suddenly the bitcoin system doesn't seem as secure.  If both were running on top of BitX, they would enhance each other's security, and interfere with one another minimally.

Thanks for reading,
Appamatto
