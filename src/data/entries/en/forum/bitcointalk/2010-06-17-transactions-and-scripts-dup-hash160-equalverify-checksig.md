---
title: "Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T02:38:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1606#msg1606"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Gavin Andresen starts a discussion: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG."
isSatoshi: false
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
threadPosition: 1
tags: []
---

So I'm writing a little tool that dissects the Bitcoin wallet.dat, mainly because I want to understand better exactly how Bitcoin works.

And I see that the outputs of transactions have a value (number of bitcoins) and a bunch of bytes that are run through the little Forth-like scripting language built in to bitcoin.  E.g.:
['TxOut: value: 100.00 Script: DUP HASH160 6fad...ab90 EQUALVERIFY CHECKSIG']

First: it make me a little nervous that bitcoin has a scripting language in it, even though it is a really simple scripting language (no loops, no pointers, nothing but math and crypto).  It makes me nervous because it is more complicated, and complication is the enemy of security.  It also makes it harder to create a second, compatible implementation.  But I think I can get over that.

Looking at the code, new transactions are verified by pushing the signature an then public key on the interpreter's stack and then running the TxOut script (did I get that right?).

Could I write code to create transactions with any valid script in the TxOut?
E.g. could I create a TxOut with a script of:   OP_2DROP OP_TRUE
... to create a coin that could be spent by anybody?

And is flexibility in the types of coins created the reason it is coded this way?
