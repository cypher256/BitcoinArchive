---
title: "Re: Fw: bitcoin.sourceforge.net"
date: 2009-10-29T02:05:30Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I'll convert the CriticalSection code to wxCriticalSection and upload it"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 46
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I'll convert the CriticalSection code to wxCriticalSection and upload it 
to SVN (it's a little tricky).  I don't know what to do for 
TryEnterCriticalSection though.  I think I'm almost ready to check 
everything in.

You're probably right, it's about time to do a linux build.  I've been 
working on getting my linux machine set up and building the dependencies.

> Ok. I replaced the Windows thread and socket library includes with their 
> POSIX equivalents, and now it only gives a few errors, mostly from the 
> CriticalSections. If I make it work, I'll put it into svn/branches, it 
> doesn't need to be an official release yet.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
