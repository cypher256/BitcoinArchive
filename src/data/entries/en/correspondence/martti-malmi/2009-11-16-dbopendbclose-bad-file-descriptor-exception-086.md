---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception"
date: 2009-11-16T06:20:52Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Satoshi has an idea for a workaround for the Berkeley DB 'Bad file descriptor' exception and asks Liberty Standard which database files are triggering the errors."
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
---

I have an idea for a workaround, but it depends on what files the errors 
are on.  If you've accumulated several errors in db.log, could you send 
it to me? (even if it's rather simple and boring)  Is the file listed 
always blkindex.dat, or does it include addr.dat or wallet.dat too?

<!-- quote: q1 -->
> I moved the data directory back to my SSD card and started bitcoin test 
> 6. It encountered a segmentation fault today with Db::open in the log. I 
> had changed the settings to only use one processor/core while I watched 
> a 720p mkv movie. I noticed the segmentation fault after the film had ended.
> 
> On Sun, Nov 15, 2009 at 12:45 AM, Satoshi Nakamoto <satoshin@gmx.com
>
> <!-- quote: q2 -->
>> Here's one where I linked Berkeley DB a different way.  It's worth a
>> try.  Otherwise identical to test5.
>>
>> (Keep the datadir on the hard drive at least until you get it to
>> fail the same way there.  That has a fair chance of success.)
