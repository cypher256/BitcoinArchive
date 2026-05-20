---
title: "Dustin Trammell to Satoshi: a few thoughts — man-in-the-middle attack on send-to-IP (January 15, 2009)"
date: 2009-01-15T00:05:15Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell's detailed security analysis of Bitcoin's send-to-IP feature, identifying MITM vulnerabilities including ARP poisoning and ISP-level interception. Recommends always using Bitcoin addresses."
isSatoshi: false
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "mitm"
relatedEntries:
  - "aftermath/2009-01-15-trammell-to-satoshi-mitm-attack"
---

I'm glad to see you considered the possibility of a BitCoin client
making a payment to itself and have an appropriate description in the
transaction log (:

I did this primarily so that I could get a packet capture of the network
traffic during a transaction to analyze.  Without knowing your packet
structure, I only see a bit of cleartext information in the packets,
mostly just what is shown in the transaction detail such as name and
comments.  There are a couple of other strings that show upon the wire
such as 'version' and 'reply', but the rest is pretty cryptic.

While pondering transactions, I realized that there is no identifiable
information involved other than an IP address or a BitCoin address.  In
the case of the IP transaction, the BitCoin client seems to trust that
the IP that it has connected to really is the intended recipient of the
transaction.  It is fairly trivial to launch a man-in-the-middle attack
and steal incoming transactions.  Consider the scenario where a
co-worker and myself have our workstations on the same LAN.  Being
nefarious, I could be ARP poisoning the local broadcast domain and
routing all traffic destined for his workstation through my workstation
as an intermediary.  Both of us, not being good employees, play the
MMORPG-du-jour and like to buy and sell game items using BitCoins.  I
could easily watch for incoming connections on TCP port 8333 and
terminate them at my workstation rather than passing those particular
connections on to his workstation.  A bit convoluted, yes, but it
illustrates the point.  This type of attack could be performed at any
hop along the route between the two transacting parties.  If I were an
evil admin at Big ISP USA, well, you get the idea.

I would recommend not allowing the use of network addresses as the
address of an intended recipient.  I would think it would be a bit more
secure to always require a BitCoin address and do transactions that way.
If I understand how that is done correctly, you just compute the
transaction into the block chain and let the intended recipient
'discover' it, correct?  An alternative could be to allow the network
nodes to provide a resolution service, where they ask around for the
network address of a BitCoin address, and if that node is online, once a
consensus is agreed upon by the network for that address the sending
BitCoin application connects directly there.  Because the BitCoin
addresses are tied to the keys of the node, I would think that some
method could be devised to prove ownership of that BitCoin address by
the sending node and not to proceed with the transaction if so.  At the
very least I would recommend, if you intend to retain the recipient
addressing by IP method is to allow for matching a hash of a shared
secret between the parties or something that an intermediary would not
know, but since you have the crypto in place, keys generated, etc.
anyhow, using that would be a much stronger solution.

Or am I over-thinking this and the network connection is just to send
immediate notification of the transaction and context information such
as the comment?  The BitCoin application mentioned getting the
recipient's public key and a few other things, and there seems to be a
lot more going on in the network traffic than what would be required for
a simple notification.

Talk to you soon,

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
