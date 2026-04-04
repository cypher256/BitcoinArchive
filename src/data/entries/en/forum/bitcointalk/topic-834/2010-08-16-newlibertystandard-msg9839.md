---
title: "Re: checkpointing the block chain"
date: 2010-08-16T22:42:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9839#msg9839"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 834. quoted by msg9843."
isSatoshi: false
tags: []
---

The checksum is just the hash at a single particular block such that new chains can be started and can grow, but once a client with the checksum included reaches that block block number, it won't accept any hash except the checksum.

Is that correct?

So if someone wanted to create an alternative chain with the same genesis block, they would need to checksum a block after the genesis with a different hash before they connected to the live network. If they ever reached the checksum in the official client, they would need to make sure that checksum was not included in their own Bitcoin client.

How is the strength of the chain calculated? Is it length and checksum only or does it measure a single block at difficulty 500 as more valid than ten blocks at difficulty one? I presume that it's probably length and checksum only which would mean that all transactions before the checksum are pretty well safe forever, but blocks after the checksum are only as strong as the current strength of the network until the next checksum comes along.
