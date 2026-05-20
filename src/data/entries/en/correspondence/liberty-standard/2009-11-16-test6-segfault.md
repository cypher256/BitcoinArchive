---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception (test6 segfault)"
date: 2009-11-16T05:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. Exact send time is not recorded; the timestamp above is an approximation derived from Satoshi's 06:20 UTC reply on Nov 16."
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard reports a segmentation fault in Bitcoin test6 with Db::open in the log, after moving the data directory back to his SSD card and watching a 720p movie under single-core CPU setting."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I moved the data directory back to my SSD card and started bitcoin test 6. It encountered a segmentation fault today with Db::open in the log. I had changed the settings to only use one processor/core while I watched a 720p mkv movie. I noticed the segmentation fault after the film had ended.
