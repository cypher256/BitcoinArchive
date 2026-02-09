---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception"
date: 2009-11-16T06:20:52Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I have an idea for a workaround, but it depends on what files the errors"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 86
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I have an idea for a workaround, but it depends on what files the errors 
are on.  If you've accumulated several errors in db.log, could you send 
it to me? (even if it's rather simple and boring)  Is the file listed 
always blkindex.dat, or does it include addr.dat or wallet.dat too?

Liberty Standard wrote:
> I moved the data directory back to my SSD card and started bitcoin test 
> 6. It encountered a segmentation fault today with Db::open in the log. I 
> had changed the settings to only use one processor/core while I watched 
> a 720p mkv movie. I noticed the segmentation fault after the film had ended.
> 
> On Sun, Nov 15, 2009 at 12:45 AM, Satoshi Nakamoto <satoshin@gmx.com 
> <mailto:satoshin@gmx.com>> wrote:
> 
>     Here's one where I linked Berkeley DB a different way.  It's worth a
>     try.  Otherwise identical to test5.
> 
>     (Keep the datadir on the hard drive at least until you get it to
>     fail the same way there.  That has a fair chance of success.)
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
