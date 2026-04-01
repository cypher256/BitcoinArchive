---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-12-09T00:41:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28324#msg28324"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 2151."
isSatoshi: false
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
tags: []
translationStatus: pending
---

I'll and add another reason not to have a "list transactions that happened after <txid>" :

move "transactions" don't have a transaction id, but they do affect account balances (and are listed in listtransactions).

Your code is going to get really messy if you expect to call listtransactions and then squirrel away the txid of the last item returned.  If it was "category":"move",  there WILL be no txid...

RE: eliminating polling:  at some point fairly soon, I plan on cleaning up my "monitorreceived" patch, to POST to a URL when transactions come in or blocks are accepted... but I need to do some Deep Thinking to redesign based on lessons learned from 'accounts'.  It might turn into a very minimal API, where the notification is "Hey, txid <123ae4221...> just got to N confirmations, you might want to call gettransaction and getbalance to get up-to-date."
