---
title: "Re: Keypair generation and safety"
date: 2010-07-18T16:44:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=300.msg2555#msg2555"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi explains the security of Bitcoin's keypair generation and the astronomical odds against address collision."
isSatoshi: true
tags:
  - "security"
  - "keys"
  - "ecdsa"
  - "cryptography"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/149/"
---

There's a separate public/private keypair for every bitcoin address. You don't have a single private key that unlocks everything. Bitcoin addresses are a 160-bit hash of the public key. The chance of a collision is astronomically small.

The keyspace is so large that it's beyond what we can comprehend. Even if every person on earth generated a new key every second for the age of the universe, the probability of any two people generating the same key would still be effectively zero.
