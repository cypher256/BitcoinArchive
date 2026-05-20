---
title: "Satoshi to Dustin Trammell: re: a few thoughts — wallet location and socket fix (January 16, 2009)"
date: 2009-01-16T12:42:18Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi reveals the wallet directory (%appdata%\\Bitcoin), notes the underlying transactional DBM is safe from crash/power loss, and confirms socket cleanup code is already added for the next release."
isSatoshi: true
tags:
  - "correspondence"
  - "wallet-backup"
  - "bug-fix"
relatedEntries:
  - "aftermath/2009-01-16-satoshi-to-trammell-wallet-location"
---

> One thing that came to mind on this topic is the potential for BitCoin
> loss if you have a system failure. The application doesn't seem to
> store any data in the directory that it runs in, so I assume it's stored
> in the registry and other places (haven't cracked out ProcessExplorer
> yet to check myself), so it may be a good idea to have the application
> be able to export everything that it needs for recovery to a file that
> could be backed up off of the system.
 
The files are in "%appdata%\Bitcoin", that's the directory to
backup.  The data is stored in a transactional database DBM, so
it should be safe from loss if there's a crash or power failure.

%appdata% is per-user access privilege.  Most new programs like
Firefox store their settings files there, despite the headwind of
Microsoft changing the directory name with every Windows release
and being full of spaces and so long it runs off the screen.

> One other thing I noticed today is that if you close the application it
> doesn't appear to cleanly close it's network sockets (TCP RST's start
> flying). Probably an item for the low-priority todo list (:
 
Just now added code to the next release for that.

Satoshi
