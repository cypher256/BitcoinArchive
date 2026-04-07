---
title: "Re: Need a post writing up some things users should know"
date: 2010-08-23T01:31:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=873.msg10728#msg10728"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Context post by mizerydearia in BitcoinTalk topic 873. after msg10715, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "nelisky"
    personSlug: "nelisky"
    date: "2010-08-23T00:38:10.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-23-nelisky-msg10725"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-19T20:14:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-19-need-a-post-writing-up-some-things-users-should-know"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-19T20:14:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-19-need-a-post-writing-up-some-things-users-should-know"
---

**see http://bitcointalk.org/index.php?topic=921.0 for continued discussion about backups**

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > - Warning not to mess around with your wallet.dat file.  It's a database file, it's not as simple as you think.  In this Beta version, we haven't had time to try and tinker-proof it yet.  It may not work as expected if you start swapping it around.
> 
> 
> So how simple is it? I'm just now thinking about foolproof backups on the lottery site I posted about yesterday, and I'm struggling to find information on this. Can bitcoind dump it in a safe state, or at least flush it on request? If I backup the file mid transaction, do I loose the whole thing or just the update in progress? When do I need to backup? Every outgoing transfer is obvious, there are key pairs created automagically, but what about transfers received? the key pair we already had, no new address needed to be created afaict. Or does bitcoin do the same change dance on the receive side too?
> 
> This part is, I believe, the most critical of them all. While MSE and clock skews may prevent normal program usage, the wallet backup issues have made people loose a bunch of coins which, obviously, sucks and doesn't do much on supporting continued usage.

This comment seems worthy of having this thread appear threaded so that discussion could expand exponentially.  In the case that this forum is not threaded, however, I will briefly state (without getting offtopic) that there should be some sort of established procedures or mechanisms to handle either regular interval or triggered backups without interrupting the Bitcoin process.  It seems that it is essential to "perfect" data reliability/availability as best as possible so as to provide more incentive for adoption.

Actually, it's not so offtopic.

<!-- quote: q3 -->
> - Warning not to mess around with your wallet.dat file.  It's a database file, it's not as simple as you think.  In this Beta version, we haven't had time to try and tinker-proof it yet.  It may not work as expected if you start swapping it around.

Instead of introducing a warning or establishing a precedence of caution and delay in handling wallet file or backups, as I suggested above, the implementation for backing up data/wallet file needs more thought/establishment.

I am not familiar with the current process/structure of data flow that occurs, but if someone could write up or draw a diagram or something that shows how the flow of data appears then perhaps with this diagram-liek information, others, like myself, can help to understand how things work and maybe offer suggestions for improvements or to recognize things like after which data sent/received is worthy of implementing a kind of automated/triggered backup or similar action.

**see http://bitcointalk.org/index.php?topic=921.0 for continued discussion about backups**
