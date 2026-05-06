---
title: "Re: JSON-RPC status"
date: 2010-02-15T18:33:23Z
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
description: "Just downloaded the python-json-rpc"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

> <!-- quote: q1 -->
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

```python
s = ServiceProxy("http://localhost:8332")
s.getblockcount()
```
