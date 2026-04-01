---
title: "Re: Flood attack 0.00000001 BC"
date: 2010-08-05T15:39:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7684#msg7684"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "Context post by bytemaster in BitcoinTalk topic 287. quoted by msg7696."
isSatoshi: false
threadId: "bt-flood-attack-0-00000001-bc"
tags: []
---

I think the current system works fine.  If someone wants to implement a micro-payment system then they will have to host enough nodes and contribute enough processing power to include their small transactions.   I see no reason to require any node to accept or forward micro-payment transactions if said nodes does not wish to.  

The real issue is that even a simple legitimate automated micro-payment system could overload bitcoin by introducing more transactions than the credit card system currently uses.   The net result is that block sizes could become HUGE.

In my use case you have a P2P system where they pay for priority downloads.   Assume you have a single "torrent" file with 100,000 people all seeding and downloading.  That could easily generate 100,000 micro-payments per minute.  Now clearly, the program would only have to use BTC in the event that upload != download between two clients.  

It would be distributed and thus there would be no easy way to identify "spam" from legitimate usage.    Even using my solution of transferring 1+ BTC at a time and giving change if the balance is greater than 0.01 could cause a transaction bloat writ large. 

I suspect that the "cost" of handing individual transactions may be low (.00001 BTC) but the cost of handling ALL of those little transactions from millions of users using automated payment negotiation/bidding systems would quickly make it impossible to even listen for all incoming transactions.   

The only solution to this problem is to make broadcasting of a transaction "non free".  Namely, if you want me to include it you have to pay me.  The net (no pun intended) result is that each client would need to pay other clients to whom they even send their transaction, not just the individual who gets it in a block.   In this way the laws of economics take over and no one gets a free ride on the transaction broadcast system.  

The implication is that you may not even receive notice of payment until a node that you paid to receive your transaction and *attempt* to integrate it into a block manages to do so.  This means that you would not even see 0/unconfirmed and that a transaction must make it into a block before anyone that wasn't paid to *attempt* to integrate it even knows it exists.

This structure would encourage pay-to-ip systems because that make the receiver of the payment responsible for paying to get it integrated.   Either they run their own bitcoin generators *or* they pay to send the transaction to someone who is.
