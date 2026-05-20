---
title: "Re: linux-0.1.6-test7 (much faster download, one TryLock crash)"
date: 2009-11-18T03:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. Exact send time is not recorded; the timestamp above is an approximation derived from Satoshi's 04:35 UTC reply on Nov 18."
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard reports that test7 downloaded blocks much faster (about 15 seconds vs. a few minutes before), and that it crashed once with a wxMutex::TryLock assertion. No segfault yet."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I started with a fresh data directory with test7. Blocks started to download much faster. It only took about 15 seconds where it took a few minutes previously with the Linux build. It crashed once while it was downloading blocks with the following message in the terminal.

../include/wx/thrimpl.cpp(50): assert "m_internal" failed in TryLock(): wxMutex::TryLock(): not initialized [in child thread]
Trace/breakpoint trap

I've included my log file, but I forgot to back it up before restarting bitcoin, so I'm not sure at what point in the log file the crash occurred.

Fortunately I haven't encountered the segmentation fault yet. The frequency of segmentation faults in the previous builds varied quite a bit, so I'll keep running it and let you know if i run into any problems.
