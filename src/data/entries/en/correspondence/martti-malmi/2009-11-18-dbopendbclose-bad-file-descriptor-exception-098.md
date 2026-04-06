---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception"
date: 2009-11-18T19:32:15Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Malmi reports he was likely running test version 5 and explains that he uses his laptop with hibernate between different locations, which may contribute to the socket issues."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
---

I think it was test version 5, not completely sure though. I'm running  
the Linux version on a laptop which I move between different locations  
and use the hibernate-feature instead of powering down.

> Thanks.  The db::open/close errors confirm the pattern.
>
> More interesting is the zombie sockets activity towards the end, and
> the socket thread monitor tripped but didn't get it going again.  Was
> the machine disconnected from the net?  MSG_DONTWAIT in test5 solved
> the zombie problem for Liberty.  What test version were you running?
> (I should print the test version in the log)
>
> <!-- quote: q1 -->
>> Here's the logs in case they're still useful.
>>
>>> I have an idea for a workaround, but it depends on what files the
>>> errors are on.  If you've accumulated several errors in db.log, could
>>> you send it to me? (even if it's rather simple and boring)  Is the file
>>> listed always blkindex.dat, or does it include addr.dat or wallet.dat
>>> too?
>>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
