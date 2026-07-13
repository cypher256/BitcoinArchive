---
title: "Re: Wei Dei's \"b-money\" protocol"
date: 1998-12-07T00:23:22Z
type: "mailing-list"
source: "cypherpunks-mailing-list"
sourceUrl: "https://mailing-list-archive.cryptoanarchy.wiki/archive/1998/12/eb51721ed32076703cfdc22e2097b779b95605799343f65e86c3c57e06ac7a3b/"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Adam Back"
    slug: "adam-back"
description: "Wei Dai answers Adam Back on b-money's inflation control and proposes a Chaumian payment-mix to break transaction linkability — responding to points 1 and 3-6 of Back's critique."
inReplyTo: "emails/cypherpunks/b-money-protocol/1998-12-06-adam-back-b-money-critique"
isSatoshi: false
tags:
  - "wei-dai"
  - "adam-back"
  - "b-money"
  - "cypherpunks"
  - "monetary-policy"
quotes:
  - id: "q1"
    person: "Adam Back"
    personSlug: "adam-back"
    date: "1998-12-06T00:48:42Z"
    sourceEntryId: "emails/cypherpunks/b-money-protocol/1998-12-06-adam-back-b-money-critique"
relatedEntries:
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
---

<!-- quote: q1 -->
> (1) Inflation -- the cost of hardware to compute a given collision
> falls in line with Moores law.  Perhaps one could get around this by
> defining a b-money unit to require more computational effort over
> time.  Say define 1 b-money unit to be the computational effort of 1
> months compute on the most efficient hardware that can be bought for
> $1000 at current prices and state of hardware.

Actually this problem has already been accounted for in the protocol. The
amount of b-money you create when you burn some CPU time depends on the
relative cost of CPU time verses a standard basket of goods. As the cost
of computation falls relative to that basket, the amount of CPU time
needed to create a unit of b-money automaticly rises. So the result is
that there should be no inflation with b-money, unless the b-money economy
shrinks or the velocity of b-money increases (because it's not possible to
reduce the b-money money supply).

<!-- speaker: Adam Back -->
> (3) Linkability -- although the participants are anonymous, their
> transactions are linkable and so participants are pseudonymous in
> b-money (linkable anonymity being pseudonymity).  This is inherent
> because of the need to broadcast transactions to ensure the open book
> entry is updated.
>
> (4) You can get money in -- by buying hardware -- but it will cost
> different people different amounts.  If I am using an existing general
> purpose workstation my units will cost more than if I buy custom
> hardware.  Not so bad a problem, just view this as an economy of
> scale, or a bulk discount.
>
> (5) Getting money in by buying hardware works, but people don't want
> the inconvenience of buying custom hardware, they would rather just
> buy b-money for force-monopoly backed money (national currencies).  If
> we setup a mint which made it it's business to buy up-to-date custom
> hardware it would be difficult to buy b-money anonymously because the
> pseudonym would reveal his identity by the use of traceable payment
> systems (credit card, cheque, wire transfer, etc).
>
> (6) Getting money out is difficult also.  The pseudonymous b-money
> user would find it difficult to obtain force-monopoly money without
> revealing his identity.

Problems 3-6 can be solved with my payment-mix idea. This is simply a
Chaumian mint where people buy blinded ecash with b-money and then sell it
back a little later under a different pseudonym. Presto your b-money is no
longer linkable. The nice thing about this mint is that you don't have to
trust it very much since it should have very few outstanding obligations
at any one time. What obligations it does have of course can be backed
with b-money.
