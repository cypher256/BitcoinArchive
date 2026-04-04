---
title: "Re: (context post by bytemaster)"
date: 2010-08-05T16:05:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=713.msg7688#msg7688"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "Context post by bytemaster in BitcoinTalk topic 713. before msg7706."
isSatoshi: false
tags: []
---

In another thread I posted the comment below, but I felt that it was an important enough flaw that it should be addressed asap before bitcoin is overrun with huge numbers of automated non-micro payments.

The real issue is that even a simple legitimate automated payment negotiation system could overload bitcoin by introducing more transactions than the credit card system currently uses.   The net result is that block sizes could become HUGE.

In my use case you have a P2P system where they pay *anonymous users* for priority downloads.   Assume you have a single "torrent" file with 100,000 people all seeding and downloading.  That could easily generate 100,000 payments greater than 0.01 per minute.  Now clearly, the program would only have to use BTC in the event that upload != download between two clients.  But you never know what kind of crazy ideas people will eventually come up with. 

Such a system would be distributed and thus there would be no easy way to identify "spam" from legitimate usage.    Even using my solution of transferring 1+ BTC at a time and giving change if the balance is greater than 0.01 could cause a transaction bloat writ large. 

I suspect that the "cost" of handing individual transactions may be low (.00001 BTC) but the cost of handling ALL of those transactions from millions of users using automated payment negotiation/bidding systems would quickly make it impossible to even listen for all incoming transactions.   

The only solution to this problem is to make broadcasting of a transaction "non free".  Namely, if you want me to even *attempt* to include it you have to pay me whether or not I succeed in getting it in first.  The net (no pun intended) result is that each client would need to pay other clients to whom they even send their transaction, not just the individual who gets it in a block.   In this way the laws of economics take over and no one gets a free ride on the transaction broadcast system. 

The implication is that you may not even receive notice of payment until a node that you paid to receive your transaction and *attempt* to integrate it into a block manages to do so.  This means that you would not even see 0/unconfirmed and that a transaction must make it into a block before anyone that wasn't paid to *attempt* to integrate it even knows it exists.   You are protected against people taking your payment and then not even attempting to integrate it because they must find away to get your payment to them integrated or they don't even get paid and it would cost more for them to "forward" the generation transaction fee to another node than they could get by having the transaction go through.  

This structure would encourage pay-to-ip systems because that make the receiver of the payment responsible for paying to get it integrated.   Either they run their own bitcoin generators *or* they pay to send the transaction to someone who is.   

The "winner take all" transaction fee requires that I incur the cost for receiving and attempting to integrate transactions yet I would only get paid 1 time every couple of weeks if I was lucky and *if* my internet connection could handle receiving every transaction that occurred.   

People should pay others to generate whether or not the generation was the first one to integrate your transaction into a block.    What are the technical challenges to implementing this.
