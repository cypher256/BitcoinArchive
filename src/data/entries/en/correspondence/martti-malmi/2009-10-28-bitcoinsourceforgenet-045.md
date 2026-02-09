---
title: "Re: Fw: bitcoin.sourceforge.net"
date: 2009-10-28T21:27:35Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "It's not possible with the current version of Bitweaver. Bitweaver's"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 45
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

> Sourceforge is just so darn slow.  I don't know what else to do though.
>  It's such a standard, more often than not any given project has a
> projectname.sourceforge.net site.  When I see whatever.sourceforge.net
> in a google search, I assume that's the official site.
>
> Is there a way to make Bitweaver allow users to edit (and maybe delete)
> their own messages in the forum?

It's not possible with the current version of Bitweaver. Bitweaver's  
wiki and forum packages aren't so very highly advanced. SF hosting  
also has its disadvantages, like the occasional slowness and lack of  
e-mailer and user IP retrieving. I've been considering to buy web  
hosting from prq.se (the host of Wikileaks and Pirate Bay, among  
others) to be used later for the exchange service. I could maybe host  
the project site there as well, under a separate user account for  
better security. There I could set up Drupal or TikiWiki, which are  
more advanced and have quite a lot bigger and more active  
developer/user communities than Bitweaver.

> Getting antsy to port to Linux?  It's not a decision to be taken
> lightly because once it's done, it doubles my testing and building
> workload. Although I am worried about Liberty's Wine crashes.
>
> I've tried to be as portable as possible and use standard C stuff
> instead of Windows calls.  The threading is _beginthread which is part
> of the standard C library.  wxWidgets has wxCriticalSection stuff we
> can use.  The sockets code is send/recv stuff which I think is the same
> as unix because Microsoft ported sockets from BSD.  We need direct
> control over sockets, it wouldn't be a good idea to get behind an
> abstraction layer.  wxWidgets is a good place to look for
> cross-platform support functions.  I want to avoid #ifdefing up the
> code if we can.  Anything that's used more than once probably becomes a
> function in util.cpp that has the #ifdef in it.

Ok. I replaced the Windows thread and socket library includes with  
their POSIX equivalents, and now it only gives a few errors, mostly  svn/branches, it doesn't need to be an official release yet.

> Can you make the setup uninstall the Startup folder icon?  I figure it
> should install and uninstall an icon in a regular program group, and
> just uninstall the Startup folder one.  I guess it doesn't matter that
> much whether it installs and uninstalls the Startup folder icon or just
> uninstalls it.

I'll do it.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
