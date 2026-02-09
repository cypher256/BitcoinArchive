---
title: "Re: JSON-RPC status"
date: 2010-02-14T21:48:31Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "mmalmi@cc.hut.fi wrote:"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 163
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

mmalmi@cc.hut.fi wrote:
>> I haven't tested my JSON-RPC server with anything else yet.  If you do,
>> please tell me how it goes.  You're using Python, right?
>>
>> Getting the Linux version to run without the GTK installed will be a
>> separate task.
> 
> Yes, using Python. I didn't test the JSON-RPC yet as I don't have 
> Bitcoin running on the vps yet. It doesn't work without a window manager 
> even if GTK libraries are installed. I asked about it at wxWidgets forum 
> (http://wxforum.shadonet.com/viewtopic.php?t=26954) but they didn't have 
> much clue. Maybe we'll just need to make two different binaries.

I will probably relent and do that.  I can move init and shutdown into 
init.cpp or start.cpp or something, link only wxbase and not link ui.o 
and uibase.o.

wxWidgets is mostly Windows people, they wouldn't know much about GTK.

Don't you have an Ubuntu laptop you can test and compile on so you don't 
have to toy with the vps?

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
