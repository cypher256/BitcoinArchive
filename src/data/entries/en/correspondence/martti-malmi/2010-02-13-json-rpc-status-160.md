---
title: "Re: JSON-RPC status"
date: 2010-02-13T01:08:42Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I uploaded my JSON-RPC and command line implementation to SVN.  I'm"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 160
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

I uploaded my JSON-RPC and command line implementation to SVN.  I'm 
waiting to post on the forum when I've had more time to think about the 
commands.  At least some method names are going to change.

To enable the RPC server, add the switch -server.  It's not on by default.

Client commands are without any switches, as such:
bitcoin getblockcount
bitcoin getdifficulty
bitcoin getnewaddress somelabel
bitcoin sendtoaddress 1DvqsbZ... 1.00
bitcoin getallpayments 0
bitcoin stop

Applications would normally use JSON-RPC directly, not command line.

I haven't tested my JSON-RPC server with anything else yet.  If you do, 
please tell me how it goes.  You're using Python, right?

Getting the Linux version to run without the GTK installed will be a 
separate task.

mmalmi@cc.hut.fi wrote:
> That's great! I'll start familiarizing myself with Liberty Reserve and 
> its api.
> 
>> The JSON-RPC implementation is going well.  I'm using boost::asio for
>> sockets.  JSON-RPC can be plain socket or HTTP, but it seems most other
>> implementations are HTTP, so I made my own simple HTTP headers.  For
>> JSON parsing I'm using JSON Spirit, which makes full use of STL and has
>> been really nice to use.  It's header-only so it's no added build work,
>> and small enough to just add it to our source tree.  MIT license.  This
>> should all be working in a few more days.
>>
>> The forum sure is taking off.  I didn't expect to have so much activity
>> so fast.
> 
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
