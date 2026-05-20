---
title: "Satoshi to Dustin Trammell: re: a few thoughts — attack classification (January 15, 2009)"
date: 2009-01-15T13:46:35Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi classifies attacks as chain-of-communication vs. open-Internet, proposes a combined IP+address fix, and notes wallet encryption as a planned feature."
isSatoshi: true
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "wallet-encryption"
relatedEntries:
  - "aftermath/2009-01-15-satoshi-to-trammell-attack-types"
---

I group attacks into two classes:
1) Attacks that can only be done by someone actually in the chain
    of communication
2) Attacks that can be done by anyone on the Internet from anywhere

Type 1 exposes you to people in your house or company on your
local LAN, admins at ISPs in between, and the LAN on the
recipient's side.  Type 2 exposes you to a billion people who can
self-select to be attackers and get economy of scale when they
develop one technique to attack multiple victims.

Sending by IP requests a new public key, so yes, it's vulnerable
to type 1 man-in-the-middle.  If that's a concern, sending to a
Bitcoin address doesn't have that vulnerability, although there's
a small privacy tradeoff.  I have a feeling most of the time
people will get Bitcoin addresses off of non-SSL websites and
unsigned cleartext e-mail, which is already vulnerable to type 1
and type 2 through DNS poisoning.

One solution would be to use both the IP and Bitcoin addresses
when sending (maybe 1.2.3.4-1Kn8iojk...), where the recipient uses
the public key of the Bitcoin address to sign the new public key
to prove that you're sending to who you think you are.  If the
system starts to be used for real business purposes, I will
certainly implement that.  Another solution is to use SSL.

For now, it's pretty obvious that if you send to an IP, you didn't
give any other identifying information about the recipient, so
you're blindly sending to whoever answers that IP.

Another feature for later is an option to encrypt your wallet.
 
> If I understand how that is done correctly, you just compute the
> transaction into the block chain and let the intended recipient
> 'discover' it, correct? 

That's correct.

> An alternative could be to allow the network
> nodes to provide a resolution service, where they ask around for the
> network address of a BitCoin address, and if that node is online, once a
> consensus is agreed upon by the network for that address the sending
> BitCoin application connects directly there.

It would be nice to only need the Bitcoin address and have the IP
worked out behind the scenes.  Might have privacy or denial of
service issues.  Certainly before another sending method is
implemented, there's plenty of time now to fully think through the
design and make sure it's the best way.

Satoshi
