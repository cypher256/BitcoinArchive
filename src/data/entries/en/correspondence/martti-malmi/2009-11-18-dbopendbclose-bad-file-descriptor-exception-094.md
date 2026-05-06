---
title: "Re: Db::open/Db::close \"Bad file descriptor\" exception"
date: 2009-11-18T01:50:24Z
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
description: "Malmi sends his debug and database logs to Satoshi to help investigate the Berkeley DB 'Bad file descriptor' exception."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Here's the logs in case they're still useful.

> I have an idea for a workaround, but it depends on what files the
> errors are on.  If you've accumulated several errors in db.log, could
> you send it to me? (even if it's rather simple and boring)  Is the file
> listed always blkindex.dat, or does it include addr.dat or wallet.dat
> too?
