---
title: "Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T22:46:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1611#msg1611"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi explains the nature of Bitcoin's script system, describing it as a predicate that evaluates to true or false, enabling various transaction types."
isSatoshi: true
tags:
  - "script"
  - "transactions"
  - "smart-contracts"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/110/"
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
threadTitle: "Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
threadPosition: 1
---

The script is actually a predicate. It's just an equation that evaluates to true or false. Predicate is a long and unfamiliar word so I called it script.

The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime. Because of that, I wanted to design it to support every possible transaction type I could think of. The problem was, each thing required special support code and data fields whether it was used or not, and only covered one special case at a time. It would have been an explosion of special cases. The solution was script, which generalizes the problem so transacting parties can describe their transaction as a predicate that the node network evaluates.

The nodes only need to understand the transaction to the extent of evaluating whether the sender's conditions are met.
