---
title: "RFC: ship block chain 1-74000 with release tarballs?"
date: 2010-11-24T22:07:51.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24277#msg24277"
author: "jgarzik"
participants:
  - name: "jgarzik"
    slug: "jgarzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "jgarzik starts a discussion: RFC: ship block chain 1-74000 with release tarballs?."
isSatoshi: false
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadPosition: 1
tags: []
---

It appears that blk0001.dat, where bitcoin stores block chain information, is compatible across Windows, Linux, 32-bit and 64-bit.

Therefore, why not save new users some time by shipping blocks 1-74000 with each release?

Presumably, indexing and verifying a local file would be faster, and use fewer network resources, than downloading all those blocks via P2P.
