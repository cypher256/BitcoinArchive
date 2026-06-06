---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-13T16:24:18Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014848.html"
author: "Hal Finney"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "James A. Donald"
    slug: "james-donald"
description: "Hal Finney answers James A. Donald on imperfect broadcast via candidate chains, and calls bitcoin two independent ideas: a decentralized consensus database and a b-money-style coin system."
isSatoshi: false
tags:
  - "consensus"
  - "proof-of-work"
  - "b-money"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
quotes:
  - id: "q1"
    person: "James A. Donald"
    personSlug: "james-donald"
    date: "2008-11-02T23:46:23Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
  - id: "q2"
    parent: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2008-11-10T22:18:20Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-bitcoin-p2p-e-cash-paper"
---

<!-- quote: q1 -->
<!-- speaker: James A. Donald -->
> <!-- quote: q2 -->
>> When there are multiple double-spent versions of the same transaction, one and only one will become valid.
>
> That is not the question I am asking.
>
> It is not trust that worries me, it is how it is
> possible to have a a globally shared view even if
> everyone is well behaved.
>
> The process for arriving at a globally shared view of
> who owns what bitgold coins is insufficiently specified.

<!-- speaker: Hal Finney -->
I agree that the description is not completely clear on how these matters are handled. Satoshi has suggested that releasing source code may be the best way to clarify the design. As I have tried to work through details on my own, it does appear that the rules become rather complicated and indeed one needs at least a pseudo-code algorithm to specify the behavior. So perhaps writing real code is not a bad way to go. I found that there is a sourceforge project set up for bitgold, although it does not have any code yet.

In answer to James' specific question, about what happens when different nodes see different sets of transactions, due to imperfect broadcast, here is how I understand it. Each node must be prepared to maintain potentially several "candidate" block chains, each of which may eventually turn out to become the longest one, the one which wins. Once a given block chain becomes sufficiently longer than a competitor, the shorter one can be deleted. This length differential is a parameter which depends on the node's threat model for how much compute power an attacker can marshall, in terms of the fraction of the "honst" P2P network's work capacity, and is estimated in the paper. The idea is that once a chain gets far enough behind the longest one, there is essentially no chance that it can ever catch up.

In order to resolve the issue James raised, I think it is necessary that nodes keep a separate pending-transaction list associated with each candidate chain. This list would include all transactions the node has received (via broadcast by the transactees) but which have not yet been incorporated into that block chain. At any given time, the node is working to extend the longest block chain, and the block it is working to find a hash collision for will include all of the pending transactions associated with that chain.

I think that this way, when a candidate chain is deleted because it got too much shorter than the longest one, transactions in it are not lost, but have continued to be present in the pending-transaction list associated with the longest chain, in those nodes which heard the original transaction broadcast. (I have also considered whether nodes should add transactions to their pending-transaction list that they learn about through blocks from other nodes, even if those blocks do not end up making their way into the longest block chain; but I'm not sure if that is necessary or helpful.)

Once these rules are clarified, more formal modeling will be helpful in understanding the behavior of the network given imperfect reliability. For example, if on average a fraction f of P2P nodes receive a given transaction broadcast, then I think one would expect 1/f block-creation times to elapse before the transaction appears in what is destined to become the longest chain. One might also ask, given that the P2P network broadcast is itself imperfectly reliable, how many candidate chains must a given node keep track of at one time, on average? Or as James raised earlier, if the network broadcast is reliable but depends on a potentially slow flooding algorithm, how does that impact performance?

<!-- speaker: James A. Donald -->
> And then on top of that we need everyone to have a
> motive to behave in such a fashion that agreement
> arises. I cannot see that they have motive when I do
> not know the behavior to be motivated.

<!-- speaker: Hal Finney -->
I am somewhat less worried about motivation. I'd be satisfied if the system can meet the following criteria:

1. No single node operator, or small collection of node operators which controls only a small fraction of overall network resources, can effectively cheat, if other players are honest.

2. The long tail of node operators is sufficiently large that no small collection of nodes can control more than a small fraction of overall resources. (Here, the "tail" refers to a ranking based on amount of resources controlled by each operator.)

3. The bitcoin system turns out to be socially useful and valuable, so that node operators feel that they are making a beneficial contribution to the world by their efforts (similar to the various "@Home" compute projects where people volunteer their compute resources for good causes).

In this case it seems to me that simple altruism can suffice to keep the network running properly.

<!-- speaker: James A. Donald -->
> Distributed databases are *hard* even when all the
> databases perfectly follow the will of a single owner.
> Messages get lost, links drop, syncrhonization delays
> become abnormal, and entire machines go up in flames,
> and the network as a whole has to take all this in its
> stride.

<!-- speaker: Hal Finney -->
A very good point, and a more complete specification is necessary in order to understand how the network will respond to imperfections like this. I am looking forward to seeing more detail emerge.

One thing I might mention is that in many ways bitcoin is two independent ideas: a way of solving the kinds of problems James lists here, of creating a globally consistent but decentralized database; and then using it for a system similar to Wei Dai's b-money (which is referenced in the paper) but transaction/coin based rather than account based. Solving the global, massively decentralized database problem is arguably the harder part, as James emphasizes. The use of proof-of-work as a tool for this purpose is a novel idea well worth further review IMO.

Hal Finney
