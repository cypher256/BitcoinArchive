---
title: "JSON-RPC status"
date: 2010-02-07T06:12:04Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "The JSON-RPC implementation is going well.  I'm using boost::asio for"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 153
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

The JSON-RPC implementation is going well.  I'm using boost::asio for 
sockets.  JSON-RPC can be plain socket or HTTP, but it seems most other 
implementations are HTTP, so I made my own simple HTTP headers.  For 
JSON parsing I'm using JSON Spirit, which makes full use of STL and has 
been really nice to use.  It's header-only so it's no added build work, 
and small enough to just add it to our source tree.  MIT license.  This 
should all be working in a few more days.

The forum sure is taking off.  I didn't expect to have so much activity 
so fast.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
