---
title: "Proposed change to sendtoaddress API call"
date: 2010-08-13T19:28:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9073#msg9073"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Thread starter by Gavin Andresen in BitcoinTalk topic 807."
isSatoshi: false
tags: []
---

I'm proposing one small change to Bitcoin's JSON-RPC api:  return a transaction ID when Bitcoins are successfully sent.

Why?  Because I want to keep a complete audit trail for any coins going into or coming out of my application's wallet; I want to keep track of the particular transactions in the bitcoin network that correspond to actions my application takes.  The alternative is to call sendtoaddress and then call listtransactions, but that won't work properly if two similar transactions (same amount to same address) occur at about the same time.

So I propose doing the simplest thing possible: modify the JSON-RPC sendtoaddress call so it returns the string 'sent:' followed by the 256-bit-hexadecimal transactions id.

This could break any applications that look for exactly the string 'sent' (which is what sendtoaddress does now).  The fix would be to modify the apps to see if the string began with 'sent'.

Alternatives I thought about but think I don't like:
 + make it a new api call so old apps do not break (sendtoaddress2 ? yuck)
 + return just the transaction id on successful send instead of 'sent:...'
 + return an array with more information (maybe [ "tx_id": "...", "fee" : 0.0 ] )

Comments/criticisms?
