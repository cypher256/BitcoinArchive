---
title: "Escrow transactions and non-reversibility"
date: 2009-04-27T00:11:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread2.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi explains that Bitcoin is designed for non-reversible transactions between two parties without intermediaries, and describes planned escrow transactions using a predicate language."
isSatoshi: true
threadId: "satoshi-mike-hearn-chargeback"
threadTitle: "Lack of chargeback support"
threadPosition: 2
tags:
  - "correspondence"
  - "chargeback"
  - "escrow"
  - "script-language"
  - "legal"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

I am not a lawyer and I can't possibly answer that. I suppose if the law applies to a bank or financial institution or other intermediary, then it would not apply since there is no bank involved, only two parties trading directly with each other, as they would in person with cash or barter with physical commodities.

Bitcoin is fundamentally designed to be able to do non-reversible transactions, and there certainly are applications that need that.

If someone wants the possibility of chargeback, they can use an escrow transaction, which isn't implemented yet but will be one of the next things. For instance, a transaction can be written to designate a third party to decide whether it is returned if the payer does not release it, with auto-release after a number of days. I'll implement a more basic form of escrow first, but the network infrastructure includes a predicate language that can express any number of options.
