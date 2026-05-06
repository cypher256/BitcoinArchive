---
title: "A few thoughts... - Man-in-the-middle attack on send-to-IP"
date: 2009-01-15T00:05:15Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
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
  - "early-adopter"
  - "security"
  - "send-to-ip"
  - "man-in-the-middle"
  - "packet-analysis"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

In a new email thread, Trammell — a professional security researcher — reported on his detailed analysis of Bitcoin's network protocol. He had captured and analyzed packet traces during a transaction he sent to himself, observing that the protocol transmitted some cleartext information including transaction names and comments.

Trammell then presented a thorough security analysis of the send-to-IP feature, identifying its fundamental vulnerability to man-in-the-middle attacks:

> In the case of the IP transaction, the BitCoin client seems to trust that the IP that it has connected to really is the intended recipient of the transaction. It is fairly trivial to launch a man-in-the-middle attack and steal incoming transactions.

He described a concrete attack scenario involving ARP poisoning on a local LAN, and noted the vulnerability extended to any hop along the network route, including ISP administrators.

Trammell's recommendation was clear:

> I would recommend not allowing the use of network addresses as the address of an intended recipient. I would think it would be a bit more secure to always require a BitCoin address and do transactions that way.

He also proposed an alternative: a network-based resolution service where nodes could look up the IP address associated with a Bitcoin address, using the key pairs already in place for authentication.

This email is significant as one of the earliest security audits of the Bitcoin software. The send-to-IP feature was eventually removed from Bitcoin, partly informed by security concerns like those raised by Trammell.
