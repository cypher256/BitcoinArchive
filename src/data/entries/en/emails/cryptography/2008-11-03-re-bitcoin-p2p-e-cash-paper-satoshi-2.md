---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-13T22:56:55Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014849.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Satoshi explains the proof-of-work chain and how nodes don't need to trust each other, as long as honest nodes control the majority of CPU power."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 22
isSatoshi: true
tags:
  - "proof-of-work"
  - "consensus"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/11/"
---

James A. Donald wrote:
> It is not sufficient that everyone knows X. We also
> need everyone to know that everyone knows X, and that
> everyone knows that everyone knows that everyone knows X
> - which, as in the Byzantine Generals problem, is the
> classic hard problem of distributed data processing.

The proof-of-work chain is a solution to the Byzantine Generals' Problem. I'll try to rephrase it in that context.

A number of Byzantine Generals each have a computer and want to attack the King's wi-fi by brute forcing the password, which they've learned is a certain number of characters in length. Once they stimulate the network enough, they need to be able to quickly count their botnet nodes and be confident that they all have the same count and know that everyone else does. The proof-of-work chain is how they achieve this.

Once each general receives whatever attack block they happen to receive first, they append it to the chain they're working on and start solving the next block. Whichever general is first to solve his block broadcasts it and everyone else adds it to their chain. The chain grows, and after several blocks, a general can be confident that the attack data is the same as what the other generals have. He can see that the amount of computation in the chain must have taken all of them working together to produce.

The proof-of-work chain is how all the synchronisation, distributed database and global view problems you've asked about are solved.
