---
title: "Re: [bitcoin-list] Does Bitcoin Crash in Windows?"
date: 2009-10-23T23:55:06Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Liberty Standard wrote:"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 41
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Liberty Standard wrote:
>  Do you Windows users experience occasional Bitcoin crashes?
> Lately Bitcoin running in wine-1.0.1 has been crashing frequently. I was
> just wondering whether this is a Wine issue or a Bitcoin issue. 

I haven't had any reports of crashes in v0.1.5.  It's been rock solid 
for me on Windows.  I think it must be Wine related.  If you get another 
crash in Wine and it prints anything on the terminal, e-mail me and I 
may be able to figure out what happened, maybe something I can work 
around.  Martti and I have been working on a new version to release soon 
and it would be nice to get any Wine fixes in there.

> The following four lines print from the terminal when I start Bitcoin.
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub

Those don't look like anything to worry about.  Probably functions 
unimplemented by Wine that are harmlessly stubbed out.

> I previously wasn't starting Bitcoin from the terminal, so I don't know what
> gets printed out when it crashes, but I'll reply with the results the next
> time it crashes.
> 
> While Bitcoin first downloads previously completed blocks, the file
> debug.log grows grows to 17.4 MB and then stops growing. I imagine it will
> continue to grow as more bitcoins are completed.

You can delete debug.log occasionally if you don't want to take the disk 
space.  It's just status messages that help with debugging.

bitcoin.sourceforge.net looks fine now.  Maybe sourceforge was doing 
some maintenance.

Satoshi

------------------------------------------------------------------------------
Come build with us! The BlackBerry(R) Developer Conference in SF, CA
is the only developer event you need to attend this year. Jumpstart your
developing skills, take BlackBerry mobile applications to market and stay 
ahead of the curve. Join us from November 9 - 12, 2009. Register now!
http://p.sf.net/sfu/devconference
_______________________________________________
bitcoin-list mailing list
bitcoin-list@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/bitcoin-list

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
