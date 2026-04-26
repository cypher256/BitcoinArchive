---
title: "Re: Bitcoin stuff"
date: 2009-12-25T16:11:14Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Satoshi corrects his earlier memory usage estimate for Bitcoin, confirming normal usage is only 17MB after mistakenly referencing a 250,000 block test run."
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
    note: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

You're right, I was looking at a test run with 250,000 blocks... duh.

A normal one shows 17MB memory usage and 10MB VM size.

<!-- quote: q1 -->
>> How much memory do you have to work with?
> The VPS has 320MB RAM, 50MB of which is currently free. There's also 
> 500MB swap space.
> 
>> Bitcoin necessarily takes a
>> fair bit of memory; about 75MB on Windows.  Is that a problem?
> 
> Sure about that? Windows task manager shows about 13MB memory usage here.
>
