---
title: "Questions about BitCoin"
date: 2009-04-18T21:25:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn sends 50 coins back and asks about 'Generated (not accepted)' errors and ideas for attaching metadata to transactions."
isSatoshi: false
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 11
tags:
  - "correspondence"
  - "transaction"
  - "mining"
  - "metadata"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Thanks. I sent you back 50, so now we're even.

For some reason your transfer to me shows up as "From: unknown" even though I added you to my address book.

I have a "Generated (not accepted)" line in my transaction list, it seems like an attempt to generate a coin went wrong somehow. Not sure what happened here - presumably my node successfully solved a block but then I went offline before it was sent to the network?

I suppose for sending metadata with a transaction some other mechanism will be needed, for instance, broadcast of encrypted messages associated with a transaction that persist for (say) a month, with some kind of budget on how much storage a node can use for messages. Alternatively, a payee could generate some reference number which is of some significance to themselves but otherwise opaque, and give it to the payer, thus it does not need to be encrypted and can be put into the block directly.
