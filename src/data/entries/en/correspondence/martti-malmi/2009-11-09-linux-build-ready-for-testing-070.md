---
title: "Re: Linux build ready for testing"
date: 2009-11-09T08:32:08Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Started very quickly when I got connected and downloaded quicker than"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 70
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

> Martti, how long did it take to start downloading blocks when you ran
> it, and how fast did it download?

Started very quickly when I got connected and downloaded quicker than  
my Windows PC, which has a slower CPU.

I'll have to focus on a school project (coincidentally C++ coding) for  
about a month now, so I don't have that much time for active  
developing until December. Let's keep contact anyway.

> Liberty Standard wrote:
>> Ok, blocks have now started to increase. It definitely takes longer  
>>  for them to start increasing than with the Windows version. Also,  
>> I  think they might be increasing at a slower rate than in with the  
>>  Windows version. Is there perhaps debugging enabled in the Linux   
>> build that you sent me? Block are increasing at about 15 blocks per  
>>  second (eyeball estimate while looking at a clock). I didn't time   
>> how fast they increased in the Windows version, but it seems like   
>> it was much faster.
>
> About how long did it take to start?  It could be the node that you
> happened to request from is slow.  The slow start is consistent with
> the slow download speed.
>
> I'd like to look at your current debug.log file and try to understand
> what's going.  It might just be a really slow connection on the other
> side, or maybe something's wrong and failed and retried.  Taking too
> long could confuse other users.
>
> Martti, how long did it take to start downloading blocks when you ran
> it, and how fast did it download?
>
>>    When I launch bitcoin and the bitcoin port is not available, I get
>>    the following messages to the command line. I don't get those
>>    messages when the bitcoin port is available. Would it be possible
>>    for bitcoin to pick another port if the default port is taken? The
>>    same think sometimes happens to me with my BitTorrent client. When I
>>    restart it, my previously open port is closed. All I have to do is
>>    change the port and it starts working again.
>>
>>    /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>>    class: ELFCLASS64
>>    Failed to load module:
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so
>>    /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgiogconf.so
>
> It already uses SO_REUSEADDR so it can bind to the port if it's in
> TIME_WAIT state after being closed.  The only time it should fail to
> bind is when the program really is already running.  It's important
> that two copies of Bitcoin not run on the same machine at once because
> they would be modifying the database at the same time.  There is never
> any need to run two on one machine as coin generation will now use
> multiple processors automatically.
>
> I'm not sure what those lib errors are, I'll do some searching.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
