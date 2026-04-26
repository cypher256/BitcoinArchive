---
title: "Re: No connections — connected to a single peer"
date: 2009-07-20T00:00:00Z
type: "correspondence"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
description: "Satoshi follows up that he is currently connected to IP 70.113.114.209, and notes that if Bohm is not connected to that address, he may have an outgoing connection problem. The IP was later identified as likely belonging to Dustin Trammell in Austin, Texas."
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "connectivity"
  - "early-network"
  - "dustin-trammell"
secondarySources:
  - name: "COPA v Wright Judgment [2024] EWHC 1198 (Ch)"
    url: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
    note: "COPA v. Craig Wright trial evidence, filed as part of Nicholas Bohm's witness statement {C/10/1}. IP address analysis by Decashed (March 2025)"
  - name: "Decashed - Node IP Disclosed in COPA Case Likely Belonged to Dustin Trammell"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
---

In a follow-up the next day, [Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) provided debugging information:

> I'm currently connected to 70.113.114.209 since yesterday.

He noted that if [Bohm](/BitcoinArchive/participants/nicholas-bohm/) wasn't connected to that IP, then the problem was on Bohm's end — he couldn't make outgoing connections either.

The IP address 70.113.114.209 was later identified by researchers (documented in a Decashed analysis) as likely belonging to [Dustin Trammell](/BitcoinArchive/participants/dustin-trammell/), who was based in the Round Rock/Austin, Texas area. This aligns with what is known about Trammell being one of the most consistent early Bitcoin node operators during this period.

This exchange provides a rare operational snapshot of the Bitcoin network in July 2009: Satoshi's own node was connected to just a single other peer — one of the few remaining active nodes on the entire network.
