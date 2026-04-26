---
title: "Re: Fw: bitcoin.sourceforge.net"
date: 2009-10-27T04:45:47Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Satoshi discusses SourceForge's slowness, Bitcoin's portability approach using standard C, upcoming protocol changes, and the growing interest in a Linux port."
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
  - id: "q2"
    person: "Eugen Leitl"
    personSlug: "eugen-leitl"
  - id: "q3"
    person: "Oct 24, 2009 at 12:55:06AM +0100, Satoshi Nakamoto"
  - id: "q4"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
---

Sourceforge is just so darn slow.  I don't know what else to do though. 
  It's such a standard, more often than not any given project has a 
projectname.sourceforge.net site.  When I see whatever.sourceforge.net 
in a google search, I assume that's the official site.

Is there a way to make Bitweaver allow users to edit (and maybe delete) 
their own messages in the forum?

Getting antsy to port to Linux?  It's not a decision to be taken lightly 
because once it's done, it doubles my testing and building workload. 
Although I am worried about Liberty's Wine crashes.

I've tried to be as portable as possible and use standard C stuff 
instead of Windows calls.  The threading is _beginthread which is part 
of the standard C library.  wxWidgets has wxCriticalSection stuff we can 
use.  The sockets code is send/recv stuff which I think is the same as 
unix because Microsoft ported sockets from BSD.  We need direct control 
over sockets, it wouldn't be a good idea to get behind an abstraction 
layer.  wxWidgets is a good place to look for cross-platform support 
functions.  I want to avoid #ifdefing up the code if we can.  Anything 
that's used more than once probably becomes a function in util.cpp that 
has the #ifdef in it.

BTW, I have a lot of uncommitted changes right now because it includes 
some crucial protocol transitions that can't be unleashed on the network 
until I've tested the heck out of it.  It shouldn't be too much longer.

Can you make the setup uninstall the Startup folder icon?  I figure it 
should install and uninstall an icon in a regular program group, and 
just uninstall the Startup folder one.  I guess it doesn't matter that 
much whether it installs and uninstalls the Startup folder icon or just 
uninstalls it.

<!-- quote: q1 -->
> IS_LIVE option was indeed set to false, but it only affects the 
> visibility of error messages to user. I've noticed the site being slow 
> at times, sometimes taking up to 30 seconds to load. I think it's 
> related to the Sourceforge hosting. Bitweaver should be among the 
> lightest PHP CMS'es, but I can check out if there are any issues to it.
> 
> Off the topic, do you think that we could use Boost's thread and socket 
> libraries instead of the Windows-specific ones? Are there other 
> windows-only-functions used in the code?
> 
>> Any idea what's going on with it?  Every time I look, it's fine.
>>
>>
>> <!-- quote: q2 -->
>> <!-- quote: q3 -->
>>> > bitcoin.sourceforge.net looks fine now.  Maybe sourceforge was doing
>>
>> Doesn't work right now.
>>
>>> > some maintenance.
>>
>>
>> <!-- quote: q4 -->
>>> In case you weren't aware, the Bitcoin website is down.
>>>
>>> http://bitcoin.sourceforge.net/
>>>
>>> -----
>>> You are running bitweaver in TEST mode
>>>
>>>     * Click here to log a bug, if this appears to be an error with the
>>> application.
>>>     * Go here to begin the installation process, if you haven't done so
>>> already.
>>>     * To hide this message, please set the IS_LIVE constant to TRUE 
>>> in your
>>> kernel/config_inc.php file.
> 
> 
>
