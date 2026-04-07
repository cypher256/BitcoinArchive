---
title: "Re: JSON-RPC method idea: list transactions newer than a given txid"
date: 2010-12-09T19:41:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28666#msg28666"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 2151. after msg28640, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-12-09T18:08:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-2151/2010-12-09-sni530-re-json-rpc-method-idea-list-transactions-newer-than-a-given"
---

> Gavin, could listtransactions have an option to list transactions for all accounts?
> 
> I'm not sure what the interface could be, maybe:
> listtransactions  [count]
> 
> It would be hard to do that from the command line though. 
> 
> I can't think of a good solution for the interface, that's the problem.  Maybe "*" special case like "" is.  Everyone would have to make sure no user can create account name "*".

Yes, listtransactions "*" <count> is possible.  The other account routines could return a new "invalid account name" error if given "*".

I've got two issues with it, though:

1.  listtransactions "*" will have to iterate over every transaction in the wallet (transactions are not indexed by time), which will be slow for large wallets and will get slower over time.  And indexing transactions just so that listtransactions * is fast violates the "an optional feature shouldn't cost anything if it is not used" principle.

2. What is the use case for "list the last N transactions across all accounts" ?   The only one I can come up with is developing an alternate GUI that communicates with bitcoind via the JSON-RPC, but to support that at least a couple of other features would have to be added at the same time (e.g. listtransactions would needs to add account and bitcoin address information to the objects it returns....)
