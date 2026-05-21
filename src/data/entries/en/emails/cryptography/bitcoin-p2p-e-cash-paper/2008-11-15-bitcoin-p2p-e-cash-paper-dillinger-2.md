---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-15T07:04:21Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014859.html"
sourceNote: "Posted Nov 15, 2008 at 02:04:21 EST (Nov 15, 2008 07:04:21 UTC) by Ray Dillinger (bear at sonic.net) to the metzdowd cryptography mailing list."
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Dillinger distinguishes anonymity from pseudonymity, proposes recipient-generated key pairs, asks when a transaction becomes irrevocable, and questions how fees would flow to nodes."
isSatoshi: false
tags:
  - "mailing-list"
  - "anonymity"
  - "pseudonymity"
  - "transaction-fees"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/14/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-15-bitcoin-p2p-e-cash-paper"
---

On Sat, 2008-11-15 at 12:43 +0800, Satoshi Nakamoto wrote:

<!-- quote: q1 -->
> I'll try and hurry up and release the sourcecode as soon as possible
> to serve as a reference to help clear up all these implementation
> questions.

> Only the buyer signs, and there's no blinding.

> Identities are not used, and there's no reliance on recourse. It's all prevention.

Okay, that's surprising. If you're not using buyer/seller identities, then you are not checking that a spend is being made by someone who actually is the owner of (on record as having recieved) the coin being spent.

There are three categories of identity that are useful to think about. Category one: public. Real-world identities are a matter of record and attached to every transaction. Category two: Pseudonymous. There are persistent "identities" within the system and people can see if something was done by the same nym that did something else, but there's not necessarily any way of linking the nyms with real-world identities. Category three: unlinkably anonymous. There is no concept of identity, persistent or otherwise. No one can say or prove whether the agents involved in any transaction are the same agents as involved in any other transaction.

Are you claiming category 3 as you seem to be, or category 2? Lots of people don't distinguish between anonymous and pseudonymous protocols, so it's worth asking exactly what you mean here.

Anyway: I'll proceed on the assumption that you meant very nearly (as nearly as I can imagine, anyway) what you said, unlinkably anonymous. That means that instead of an "identity", a spender has to demonstrate knowledge of a secret known only to the real owner of the coin. One way to do this would be to have the person recieving the coin generate an asymmetric key pair, and then have half of it published with the transaction. In order to spend the coin later, s/he must demonstrate posession of the other half of the asymmetric key pair, probably by using it to sign the key provided by the new seller. So we cannot prove anything about "identity", but we can prove that the spender of the coin is someone who knows a secret that the person who recieved the coin knows.

And what you say next seems to confirm this:

> No challenges or secret shares. A basic transaction is just
> what you see in the figure in section 2. A signature (of the
> buyer) satisfying the public key of the previous transaction,
> and a new public key (of the seller) that must be satisfied to
> spend it the next time.

Note, even though this doesn't involve identity per se, it still makes the agent doing the spend linkable to the agent who earlier recieved the coin, so these transactions are linkable. In order to counteract this, the owner of the coin needs to make a transaction, indistinguishable to others from any normal transaction, in which he creates a new key pair and transfers the coin to its posessor (ie, has one sock puppet "spend" it to another). No change in real-world identity of the owner, but the transaction "linkable" to the agent who spent the coin is unlinked. For category-three unlinkability, this has to be done a random number of times - maybe one to six times?

BTW, could you please learn to use carriage returns?? Your lines are scrolling stupidly off to the right and I have to scroll to see what the heck you're saying, then edit to add carriage returns before I respond.

> There's no need for reporting of "proof of double spending" like
> that. If the same chain contains both spends, then the block is
> invalid and rejected.

> Same if a block didn't have enough proof-of-work. That block is
> invalid and rejected. There's no need to circulate a report
> about it. Every node could see that and reject it before relaying it.

Mmmm. I don't know if I'm comfortable with that. You're saying there's no effort to identify and exclude nodes that don't cooperate? I suspect this will lead to trouble and possible DOS attacks.

> If there are two competing chains, each containing a different
> version of the same transaction, with one trying to give money
> to one person and the other trying to give the same money to
> someone else, resolving which of the spends is valid is what
> the whole proof-of-work chain is about.

Okay, when you say "same" transaction, and you're talking about transactions that are obviously different, you mean a double spend, right? Two transactions signed with the same key?

> We're not "on the lookout" for double spends to sound the alarm
> and catch the cheater. We merely adjudicate which one of the
> spends is valid. Receivers of transactions must wait a few
> blocks to make sure that resolution has had time to complete.

Until.... until what? How does anybody know when a transaction has become irrevocable? Is "a few" blocks three? Thirty? A hundred? Does it depend on the number of nodes? Is it logarithmic or linear in number of nodes?

> Would be cheaters can try and simultaneously double-spend all
> they want, and all they accomplish is that within a few blocks,
> one of the spends becomes valid and the others become invalid.

But in the absence of identity, there's no downside to them if spends become invalid, if they've already recieved the goods they double-spent for (access to website, download, whatever). The merchants are left holding the bag with "invalid" coins, unless they wait that magical "few blocks" (and how can they know how many?) before treating the spender as having paid.

The consumers won't do this if they spend their coin and it takes an hour to clear before they can do what they spent their coin on. The merchants won't do it if there's no way to charge back a customer when they find the that their coin is invalid because the customer has doublespent.

> Even if an earlier spend wasn't in the chain yet, if it was
> already in all the nodes' pools, then the second spend would
> be turned away by all those nodes that already have the first
> spend.

So there's a possibility of an early catch when the broadcasts of the initial simultaneous spends interfere with each other. I assume here that the broadcasts are done by the sellers, since the buyer has a possible disincentive to broadly disseminate spends.

> Right. They also refresh whenever a new transaction comes in,
> so L pretty much contains everything in A all the time.

Okay, that's a big difference between a proof of work that takes a huge set number of CPU cycles and a proof of work that takes a tiny number of CPU cycles but has a tiny chance of success. You can change the data set while working, and it doesn't mean you need to start over. This is good in this case, as it means nobody has to hold recently recieved transactions out of the link they're working on.

> If you're thinking of it as a CPU-intensive digital signing, then
> you may be thinking of a race to finish a long operation first and
> the fastest always winning.

Right. That was the misconception I was working with. Again, the difference between a proof taking a huge set number of CPU cycles and a proof that takes a tiny number of CPU cycles but has a tiny chance of success.

> Anyone's chance of finding a solution at any
> time is proportional to their CPU power.

It's like a random variation in the work factor; in this way it works in your favor.

> There will be transaction fees, so nodes will have an incentive
> to receive and include all the transactions they can. Nodes
> will eventually be compensated by transaction fees alone when
> the total coins created hits the pre-determined ceiling.

I don't understand how "transaction fees" would work, and how the money would find its way from the agents doing transactions to those running the network. But the economic effect is the same (albeit somewhat randomized) if adding a link to the chain allows the node to create a coin, so I would stick with that.

Also, be aware that the compute power of different nodes can be expected to vary by two orders of magnitude at any given moment in history.

Bear
