---
title: "Re: Fw: bitcoin.sourceforge.net"
date: 2009-10-29T04:08:10Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Would the Boost mutex be of any help here?"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

> I'll convert the CriticalSection code to wxCriticalSection and upload
> it to SVN (it's a little tricky).  I don't know what to do for
> TryEnterCriticalSection though.  I think I'm almost ready to check
> everything in.

Would the Boost mutex be of any help here?

http://www.boost.org/doc/libs/1_40_0/doc/html/thread/synchronization.html#thread.synchronization.mutex_concepts
