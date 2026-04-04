---
title: "Resizing Bitcoin server"
date: 2010-12-11T18:36:32Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Malmi reports that bitcoin.org went down again due to an out-of-memory error killing mysqld, and describes upgrading the server from 512MB to 1024MB RAM."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Bitcoin.org was down again today for some time. It responded to ping  
but not ssh or http. I rebooted it and found out it was an out of  
memory error and mysqld got killed. It was the same error last time,  
but with apache getting killed. I couldn't think of anything better,  
so I resized the server from 512MB to 1024MB of memory.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
