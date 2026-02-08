---
title: "Re: JSON-RPC method idea: list transactions newer than a given txid"
date: 2010-12-09T18:08:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28640#msg28640"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC method idea: list transactions newer than a given txid\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/530/"
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
threadTitle: "JSON-RPC method idea: list transactions newer than a given txid"
threadPosition: 4
---

[Quote from: jgarzik on December 09, 2010, 12:58:05 AM](https://bitcointalk.org/index.php?topic=2151.msg28330#msg28330)I agree with you and satoshi about "txs after <txid>".  My listtransactions (now xlisttransactions) patch pointedly does not have that feature, and never has.
As long as the interface is designed for things like showing the user the last N transactions history, it's fine, now that we have the Accounts feature making it easier to do payment detection the right way.

Gavin, could listtransactions have an option to list transactions for all accounts?

I'm not sure what the interface could be, maybe:
listtransactions <JSON null type> [count]

It would be hard to do that from the command line though. 

I can't think of a good solution for the interface, that's the problem.  Maybe "*" special case like "" is.  Everyone would have to make sure no user can create account name "*".

[Quote from: jgarzik on December 09, 2010, 04:13:50 PM](https://bitcointalk.org/index.php?topic=2151.msg28572#msg28572)Sure, and that's easy enough to track with transactions.
I don't get how that's "easy" to track with transactions.
