---
title: "Re: [PATCH] implement 'xlisttransactions'"
date: 2010-08-05T09:12:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg7655#msg7655"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Context post by throughput in BitcoinTalk topic 611. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-30T19:40:54.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-re-implement-listtransactions"
---

<!-- quote: q1 -->
> What are you needing to use listtransactions for?
>
> The reason I didn't implement listtransactions is I want to make sure web programmers don't use it.  It would be very easy to latch onto that for watching for received payments.  There is no reliable way to do it that way and make sure nothing can slip through the cracks.  Until we have solid example code using getreceivedbyaddress and getreceivedbylabel to point to and say "use this! use this! don't use listtransactions!", I don't think we should implement listtransactions.

It seems, that you certainly prefer GUI in favor of CLI interfaces.
GUI is really awful type of interface, when you have, say 5 nodes with SSH access to them and
want to periodically collect some state in a loop like this:
Code:#!/bin/bash
while read host;
do
   ssh "$host" "hostname; bitcoind listtransactions"
   echo =============
done > report.txt < hostlist
Then, report.txt may be emailed to a human.
I hope, that is a valid usecase for you.
