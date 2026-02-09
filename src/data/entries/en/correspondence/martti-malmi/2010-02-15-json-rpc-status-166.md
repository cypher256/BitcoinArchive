---
title: "Re: JSON-RPC status"
date: 2010-02-15T18:33:23Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Just downloaded the python-json-rpc"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 166
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

> mmalmi@cc.hut.fi wrote:
>>> Don't you have an Ubuntu laptop you can test and compile on so you
>>> don't have to toy with the vps?
>>
>> Yes. Tested with Python's JSON-RPC, and seems to work fine! Really   
>> easy to use.
>
> Hurray, I got it on the first go.
>
> Could you send me the Python code you used?  So if I do some testing
> later I don't have to figure it out myself.

Just downloaded the python-json-rpc  
(http://json-rpc.org/wiki/python-json-rpc) from their svn and tested  
by talking to the Python interpreter directly. Like this:

pythons = ServiceProxy("http://localhost:8332")
s.getblockcount()

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
