---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-13T06:16:31Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014847.html"
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "James A. Donald presses Satoshi on how nodes reach a globally shared view even among honest participants, and names the difficulty as the Byzantine Generals problem."
inReplyTo: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "consensus"
  - "byzantine-generals-problem"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
relatedEntries:
  - analysis/2008-11-13-byzantine-generals-problem
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2008-11-10T22:18:20Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-bitcoin-p2p-e-cash-paper"
---

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> When there are multiple double-spent versions of the
> same transaction, one and only one will become valid.

<!-- speaker: James A. Donald -->
That is not the question I am asking.

It is not trust that worries me, it is how it is possible to have a a globally shared view even if everyone is well behaved.

The process for arriving at a globally shared view of who owns what bitgold coins is insufficiently specified. Once specified, then we can start considering whether everyone has incentives to behave correctly.

It is not sufficient that everyone knows X. We also need everyone to know that everyone knows X, and that everyone knows that everyone knows that everyone knows X - which, as in the Byzantine Generals problem, is the classic hard problem of distributed data processing.

This problem becomes harder when X is quite possibly a very large amount of data - agreement on who was the owner of every bitgold coin at such and such a time.

And then on top of that we need everyone to have a motive to behave in such a fashion that agreement arises. I cannot see that they have motive when I do not know the behavior to be motivated.

You keep repeating your analysis of the system under attack. We cannot say how the system will behave under attack until we know how the system is supposed to behave when not under attack.

If there are a lot of transactions, it is hard to efficiently discover the discrepancies between one node's view and another node's view, and because new transactions are always arriving, no two nodes will ever have the same view, even if all nodes are honest, and all reported transactions are correct and true single spends.

We should be able to accomplish a system where two nodes are likely to come to agreement as to who owned what bitgold coins at some very recent past time, but it is not simple to do so.

If one node constructs a hash that represents its knowledge of who owned what bitgold coins at a particular time, and another node wants to check that hash, it is not simple to do it in such a way that agreement is likely, and disagreement between honest well behaved nodes is efficiently detected and efficiently resolved.

And if we had a specification of how agreement is generated, it is not obvious why the second node has incentive to check that hash.

The system has to work in such a way that nodes can easily and cheaply change their opinion about recent transactions, so as to reach consensus, but in order to provide finality and irreversibility, once consensus has been reached, and then new stuff has be piled on top of old consensus, in particular new bitgold has been piled on top of old consensus, it then becomes extremely difficult to go back and change what was decided.

Saying that is how it works, does not give us a method to make it work that way.

<!-- speaker: Satoshi Nakamoto -->
> The receiver of a payment must wait an hour or so
> before believing that it's valid.  The network will
> resolve any possible double-spend races by then.

<!-- speaker: James A. Donald -->
You keep discussing attacks. I find it hard to think about response to attack when it is not clear to me what normal behavior is in the case of good conduct by each and every party.

Distributed databases are *hard* even when all the databases perfectly follow the will of a single owner. Messages get lost, links drop, syncrhonization delays become abnormal, and entire machines go up in flames, and the network as a whole has to take all this in its stride.

Figuring out how to do this is hard, even in the complete absence of attacks. Then when we have figured out how to handle all this, then come attacks.

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
