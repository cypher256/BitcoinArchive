---
title: "PipeNet 1.1 and b-money"
date: 1998-11-26T00:07:43Z
type: "mailing-list"
source: "cypherpunks-mailing-list"
sourceUrl: "https://mailing-list-archive.cryptoanarchy.wiki/archive/1998/11/0e3ccb59b898d6b3dc41250477bb70f593e29f5519439e1ad189bd7fa9234d45/"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Wei Dai announces b-money on the Cypherpunks list as a brief addendum to PipeNet 1.1, pointing readers to his eskimo.com page — the proposal later cited as reference [1] in the Bitcoin whitepaper."
isSatoshi: false
tags:
  - "wei-dai"
  - "b-money"
  - "pipenet"
  - "cypherpunks"
  - "origins"
  - "historic"
secondarySources:
  - name: "Wei Dai — b-money proposal (full text)"
    url: "http://www.weidai.com/bmoney.txt"
relatedEntries:
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
---

I've discovered some attacks against the original PipeNet design. The new
protocol, PipeNet 1.1, should fix the weaknesses. PipeNet 1.1 uses layered
sequence numbers and MACs. This prevents a collusion between a receiver
and a subset of switches from tracing the caller by modifying or swaping
packets and then watching for garbage.

A description of PipeNet 1.1 is available at
http://www.eskimo.com/~weidai.

Also available there is a description of b-money, a new protocol for
monetary exchange and contract enforcement for pseudonyms.

Please direct all follow-up discussion of these protocols to cypherpunks.
