---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception"
date: 2009-11-18T05:14:45Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Thanks.  The db::open/close errors confirm the pattern."
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 96
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Thanks.  The db::open/close errors confirm the pattern.

More interesting is the zombie sockets activity towards the end, and the 
socket thread monitor tripped but didn't get it going again.  Was the 
machine disconnected from the net?  MSG_DONTWAIT in test5 solved the 
zombie problem for Liberty.  What test version were you running?  (I 
should print the test version in the log)

mmalmi@cc.hut.fi wrote:
> Here's the logs in case they're still useful.
> 
>> I have an idea for a workaround, but it depends on what files the
>> errors are on.  If you've accumulated several errors in db.log, could
>> you send it to me? (even if it's rather simple and boring)  Is the file
>> listed always blkindex.dat, or does it include addr.dat or wallet.dat
>> too?
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
