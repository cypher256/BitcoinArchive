---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-10T22:18:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014832.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Satoshi replies to Hal Finney's questions about computational cost, explaining that the difficulty adjusts and that an attacker would find it more profitable to play by the rules."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 10
isSatoshi: true
tags:
  - "difficulty-adjustment"
  - "attacker-incentives"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/12/"
---

Hal Finney wrote:
> it is mentioned that if a broadcaster is found to be sending
> two different versions of a block, this can be detected and the block
> rejected. However, there is no discussion of what to do if one party
> sends one version of a block, and another party sends a different version.

Right, nodes keep track of the longest proof-of-work chain they've seen and keep working on extending it. If two versions of a block are broadcast at about the same time, some nodes will receive one first and some the other. Each works on extending whichever one they received first. Eventually one will be extended with another block, proving it longer. The nodes working on the shorter branch will then switch to the longer one.

New transaction broadcasts do not necessarily need to reach all nodes. As long as they reach many nodes, they will get into a block before long. Block broadcasts are also tolerant of dropped messages. If a node does not receive a block, it will request it when it receives the next block and realizes it missed one.
