---
title: "Re: Feature Request: Limiting Connections"
date: 2010-07-02T22:20:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=223.msg1929#msg1929"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Feature Request: Limiting Connections\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/165/"
---

I reduced max outbound connections from 15 to 8 in RC4.

15 was way more than we needed for redundancy.  8 is still plenty of redundancy.

As the nodes upgrade to this version, this will cut in half the number of connections that inbound accepting nodes get.

If anyone wants more than 8 connections, they can open port 8333 on their firewall.
