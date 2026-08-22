---
title: "The Byzantine Generals' Problem"
date: 2009-03-09T17:58:40Z
type: "web-document"
source: "bitcoin-org"
sourceUrl: "https://web.archive.org/web/20090309175840/http://www.bitcoin.org/byzantine.html"
sourceStatus: "archived"
sourceNote: "Standalone page from the early bitcoin.org site, preserved from the Wayback Machine snapshot captured on March 9, 2009 at 17:58:40 UTC. The page itself has no publication date; the entry date records the snapshot. Satoshi identified it as his description of how Bitcoin solves the Byzantine Generals' problem in a May 3, 2009 message to Martti Malmi."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi's standalone bitcoin.org explanation of the Byzantine Generals problem, using a proof-of-work chain to make the generals agree on a plan."
isSatoshi: true
tags:
  - "bitcoin-org"
  - "byzantine-generals-problem"
  - "consensus"
  - "proof-of-work"
secondarySources:
  - name: "Nakamoto Archive — bitcoin.org 2009 site snapshot"
    url: "https://github.com/lugaxker/nakamoto-archive"
relatedEntries:
  - analysis/2008-11-13-byzantine-generals-problem
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-13-re-bitcoin-p2p-e-cash-paper-satoshi-2
  - correspondence/martti-malmi/2009-05-03-bitcoin-003
---

A number of Byzantine Generals each have a computer and want to attack the King's wi-fi by brute forcing the password, which they've learned is a certain number of characters in length. Once they stimulate the network to generate a packet, they must crack the password within a limited time to break in and erase the logs, lest they be discovered. They only have enough CPU power to crack it fast enough if a majority of them attack at the same time.

They don't particularly care when the attack will be, just that they agree. It has been decided that anyone who feels like it will announce an attack time, which we'll call the "plan", and whatever plan is heard first will be the official plan. The problem is that the network is not instantaneous, and if two generals announce different plans at close to the same time, some may hear one first and others hear the other first.

They use a proof-of-work chain to solve the problem. Once each general receives whatever plan he hears first, he sets his computer to solve a difficult hash-based proof-of-work problem that includes the plan in its hash. The proof-of-work is difficult enough that with all of them working at once, it's expected to take 10 minutes before one of them finds a solution and broadcasts it to the network. Once received, everyone adjusts the hash in their proof-of-work computation to include the first solution, so that when they find the next proof-of-work, it chains after the first one. If anyone was working on a different plan, they switch to this one, because its proof-of-work chain is now longer.

After about two hours, the plan should be hashed by a chain of 12 proofs-of-work. Every general, just by verifying the difficulty of the proof-of-work chain, can estimate how much parallel CPU power per hour was expended on it and see that it must have required the majority of the computers to produce in the allotted time. At the least, most of them had to have seen the plan, since the proof-of-work is proof that they worked on it. If the CPU power exhibited by the proof-of-work is sufficient to crack the password, they can safely attack at the agreed time.

Home
