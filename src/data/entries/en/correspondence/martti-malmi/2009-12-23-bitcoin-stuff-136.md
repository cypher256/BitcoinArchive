---
title: "Re: Bitcoin stuff"
date: 2009-12-23T17:53:18Z
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
threadPosition: 136
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

mmalmi@cc.hut.fi wrote:
> I'd also need at least the command line tools to check if coins have 
> been received and to send coins. It would require some way to 
> communicate with the Bitcoin process running in the background. I don't 
> know how that should be done, maybe with something RPC related.
> 
> It would also be great if the background process was non-graphical - the 
> VPS on the current service level doesn't have enough memory to run the X 
> Windowing environment, unless I come up with some ways to free memory.

I had been wondering why everyone keeps harping on no-UI, when already 
you can run it with only a small icon on the tray, which is common for 
server services on Windows.  So I guess this is why.  I had chalked it 
up to unix snobbery if they couldn't abide a tiny little icon on a 
desktop they never see.

Not opening any windows is easy, but it may fail because the gtk 
libraries aren't there.  wxWidgets has __WXBASE__ for "Only wxBase, no 
GUI features".  You could try building for that instead of __WXGTK__ and 
see what happens.  It would be preferable if there's any way to do it as 
a command line switch on the same executable, rather than yet another 
build variation to release.

How much memory do you have to work with?  Bitcoin necessarily takes a 
fair bit of memory; about 75MB on Windows.  Is that a problem?

Command line control is one of the next things on the list.  I want to 
design the API carefully.

Receiving payments is the part that has a lot of design choices to be 
made.  The caller needs to identify the transactions of interest, that's 
where the one-bitcoin-address-per-transaction model helps.  Searching 
the comments text for an order number is another possibility.  There's 
polled, asking what has been received to the given bitcoin address, and 
event driven.  I guess in event driven, bitcoin would be told to run a 
command line when a certain amount is received to a certain bitcoin address.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
