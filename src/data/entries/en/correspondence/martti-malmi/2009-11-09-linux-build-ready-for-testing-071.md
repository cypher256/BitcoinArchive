---
title: "Re: Linux build ready for testing"
date: 2009-11-09T19:30:53Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Satoshi warns against running Bitcoin in Wine due to unfixable Berkeley DB incompatibility causing database corruption, and notes that GCC 4.3.3 on Linux optimizes SHA-256 better."
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
  - id: "q2"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
  - id: "q3"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
---

You really don't want to keep running in Wine, you're getting database 
errors (db.log).  You probably developed these rituals of transferring 
to a fresh install to cope with database corruption.  If there is a way 
to lose unconfirmed blocks, it would have to be the database errors. 
Any problems you find in the Linux build can be fixed.  The Wine 
incompatibility deep inside Berkeley DB is unfixable.

I think GCC 4.3.3 on the Linux build optimized the SHA-256 code better 
than the old GCC 3.4.5 on Windows.  When I was looking for the best 
SHA-256 code, there was a lot of hand tuned highly optimized SHA1 code 
available, but not so much for SHA-256 yet.  I should see if I can 
upgrade MinGW to 4.3.x to get them on a level playing field.

<!-- quote: q1 -->
> Everyone that contributed to making this Linux build really did a great 
> job! Thanks for the hard work. It has started maturing some bitcoins, so 
> I'm going to continue to run the Linux client for the time being until I 
> decide whether it's at least as good or better at generating coins than 
> the Windows version running in Wine.
> 
> 
> On Mon, Nov 9, 2009 at 8:59 AM, Liberty Standard
>
> <!-- quote: q2 -->
>> Another instance when I would like to run multiple instances is when
>> I upgrade bitcoin. I will uncheck the generate coin check box in the
>> outdated bitcoin, launch and start generating coins in the new
>> bitcoin using a separate data directory, then when the old
>> application's coins have matured I will send them to the new
>> application and then close the old application. I prefer do do clean
>> installs rather than upgrading while maintaining old data.
>>
>> On Mon, Nov 9, 2009 at 7:42 AM, Satoshi Nakamoto <satoshin@gmx.com
>
> <!-- quote: q3 -->
>> Thanks for that, I see what happened.  Because the first one was
>> slow, it ended up requesting the blocks from everybody else,
>> which only bogged everything down.  I can fix this, I just need
>> to think a while about the right way.
>>
>> There's no risk in shutting down while there are unconfirmed.
>>  When you make a transaction or new block, it immediately
>> broadcasts it to the network.  After that, the increasing
>> #/confirmed number is just monitoring the outcome.  There's
>> nothing your node does during that time to promote the acceptance.
