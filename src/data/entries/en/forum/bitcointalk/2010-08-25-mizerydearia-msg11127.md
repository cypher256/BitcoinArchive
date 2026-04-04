---
title: "Re: (quoted post by mizerydearia)"
date: 2010-08-25T09:14:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11127#msg11127"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Quoted post by mizerydearia in BitcoinTalk topic 898."
isSatoshi: false
tags: []
---

[Quote from: Macho on August 25, 2010, 03:03:03 AM](#msg11101)
> 

I agree, however, if you compile from source, a single change from

rpc.cpp
Code:!mapArgs.count("-disablesafemode")
to
Code:mapArgs.count("-safemode")
will then

Code:// Observe lockdown
throw runtime_error(strWarning);
You can examine the code at http://bitcoin.svn.sourceforge.net/viewvc/bitcoin/trunk/rpc.cpp?revision=142&view=markup to see what is happening.

It seems a bit strange to only show an error when -enablesafety is used.  Perhaps it is unsafe or insecure for this to happen?

http://www.bitcoin.org/wiki/doku.php?id=api

From my understanding of the code it appears that when using one of these http://www.bitcoin.org/wiki/doku.php?id=api methods other than getinfo, help, stop, getgenerate, setgenerate and most importantly when there is a warning, that:

if -disablesafemode was passed to the running process, then the warning will not be displayed
if -disablesafemode was not passed to the running process, then the warning will be displayed

http://www.cplusplus.com/reference/std/stdexcept/runtime_error/
