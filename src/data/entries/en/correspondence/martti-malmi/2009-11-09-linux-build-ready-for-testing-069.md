---
title: "Re: Linux build ready for testing"
date: 2009-11-09T05:42:59Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Thanks for that, I see what happened.  Because the first one was slow,"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 69
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

Thanks for that, I see what happened.  Because the first one was slow, 
it ended up requesting the blocks from everybody else, which only bogged 
everything down.  I can fix this, I just need to think a while about the 
right way.

There's no risk in shutting down while there are unconfirmed.  When you 
make a transaction or new block, it immediately broadcasts it to the 
network.  After that, the increasing #/confirmed number is just 
monitoring the outcome.  There's nothing your node does during that time 
to promote the acceptance.

Now that I think about it, when you close Bitcoin, it closes the main 
window immediately but in the background continues running to finish an 
orderly flush and shutdown of the database.  Before I implemented that, 
it was annoying having a dead hung unresponsive window hanging around. 
Until it finishes the orderly shutdown in the background, the port would 
be locked, and this is an important protection to make sure another copy 
can't touch the database until it's done.  I haven't seen the shutdown 
take more than a few seconds.

In Wine, there's no way for the Windows version to do SO_REUSEADDR, so 
that would add 60 seconds (on my system) of TIME_WAIT after the port is 
closed.

If you need to transfer between two copies, you could send it to the 
other's bitcoin address.  The receiving copy doesn't have to be online 
at the time.

The command line to use a different data directory is
bitcoin -datadir=<directory>

For example, on Linux, the default directory is (don't use ~)
bitcoin -datadir=/home/yourusername/.bitcoin

You shouldn't normally have any need to use this switch.  It still won't 
let you run two instances at once.

Liberty Standard wrote:
> On Mon, Nov 9, 2009 at 3:23 AM, Satoshi Nakamoto <satoshin@gmx.com 
> <mailto:satoshin@gmx.com>> wrote:
> 
>     Liberty Standard wrote:
> 
>         Ok, blocks have now started to increase. It definitely takes
>         longer for them to start increasing than with the Windows
>         version. Also, I think they might be increasing at a slower rate
>         than in with the Windows version. Is there perhaps debugging
>         enabled in the Linux build that you sent me? Block are
>         increasing at about 15 blocks per second (eyeball estimate while
>         looking at a clock). I didn't time how fast they increased in
>         the Windows version, but it seems like it was much faster.
> 
> 
>     About how long did it take to start?  It could be the node that you
>     happened to request from is slow.  The slow start is consistent with
>     the slow download speed.
> 
> 
> It took about a half hour for it to start incrementing quickly. 
> Interestingly, the CPU usage increased before it started to increment 
> steadily and then lowered when it started to increment steadily. 
> Although this time the block incremented to 2 within the first few 
> minutes. I have not yet generated any bitcoins. I'll wait for as long as 
> I have patience to generate a bitcoin, but if none are created by the 
> time I lose patience, I'm going to move back to the wine version.
> 
>     I'd like to look at your current debug.log file and try to
>     understand what's going.  It might just be a really slow connection
>     on the other side, or maybe something's wrong and failed and
>     retried.  Taking too long could confuse other users.
> 
> 
> I've included my current debug.log.
>  
> 
>     Martti, how long did it take to start downloading blocks when you
>     ran it, and how fast did it download?
> 
> 
>            When I launch bitcoin and the bitcoin port is not available,
>         I get
>            the following messages to the command line. I don't get those
>            messages when the bitcoin port is available. Would it be possible
>            for bitcoin to pick another port if the default port is
>         taken? The
>            same think sometimes happens to me with my BitTorrent client.
>         When I
>            restart it, my previously open port is closed. All I have to
>         do is
>            change the port and it starts working again.
> 
>            /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>            Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>            /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>            class: ELFCLASS64
>            Failed to load module:
>            /usr/lib/gio/modules/libgioremote-volume-monitor.so
>            /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>            Failed to load module: /usr/lib/gio/modules/libgiogconf.so
> 
> 
>     It already uses SO_REUSEADDR so it can bind to the port if it's in
>     TIME_WAIT state after being closed.  The only time it should fail to
>     bind is when the program really is already running.  It's important
>     that two copies of Bitcoin not run on the same machine at once
>     because they would be modifying the database at the same time.
>      There is never any need to run two on one machine as coin
>     generation will now use multiple processors automatically.
> 
> 
> The reason I run two instances at the same time is to transfer bitcoins 
> from one bitcoin instance to another. They of course would need to be 
> accessing different data directories. Perhaps that could be specified as 
> a command line argument. I currently have to move my bitcoin data folder 
> to a virtual machine to do this. Shutting down bitcoin and restarting it 
> with a different data directory is a poor solution because shutting down 
> bitcoin while there are unconfirmed bitcoins risks losing those bitcoins.
> 
> Bitcoin was definitely not running when i get the busy port error. The 
> process closes quickly and reliably from my experience, but it takes 
> anywhere from 30 seconds to 3 minutes (estimation from memory) for the 
> port to become available again. It occurred while switching from bitcoin 
> 0.1.5 in Wine to the Linux build and again while switching from the 
> Linux build to bitcoin 0.1.5 in Wine.
> 
> Another thing that I noticed is that the about dialog text does not fit 
> correctly and it cannot be resized. 
> 
>     I'm not sure what those lib errors are, I'll do some searching.
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
