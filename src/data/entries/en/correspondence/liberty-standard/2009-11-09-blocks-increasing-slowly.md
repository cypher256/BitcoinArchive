---
title: "Re: Linux build ready for testing (blocks increasing slowly, port and library issues)"
date: 2009-11-09T00:30:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. Exact send time of Liberty Standard's message is not recorded; the timestamp above is an approximation derived from Satoshi's 01:23 UTC reply on Nov 9."
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard reports the Linux block download took half an hour to ramp up, asks about port fallback, and shows ELFCLASS64 module load failures."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Ok, blocks have now started to increase. It definitely takes longer for them to start increasing than with the Windows version. Also, I think they might be increasing at a slower rate than in with the Windows version. Is there perhaps debugging enabled in the Linux build that you sent me? Block are increasing at about 15 blocks per second (eyeball estimate while looking at a clock). I didn't time how fast they increased in the Windows version, but it seems like it was much faster.

It took about a half hour for it to start incrementing quickly. Interestingly, the CPU usage increased before it started to increment steadily and then lowered when it started to increment steadily. Although this time the block incremented to 2 within the first few minutes. I have not yet generated any bitcoins. I'll wait for as long as I have patience to generate a bitcoin, but if none are created by the time I lose patience, I'm going to move back to the wine version.

I've included my current debug.log.

When I launch bitcoin and the bitcoin port is not available, I get the following messages to the command line. I don't get those messages when the bitcoin port is available. Would it be possible for bitcoin to pick another port if the default port is taken? The same think sometimes happens to me with my BitTorrent client. When I restart it, my previously open port is closed. All I have to do is change the port and it starts working again.

/usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
/usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgioremote-volume-monitor.so
/usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgiogconf.so

The reason I run two instances at the same time is to transfer bitcoins from one bitcoin instance to another. They of course would need to be accessing different data directories. Perhaps that could be specified as a command line argument. I currently have to move my bitcoin data folder to a virtual machine to do this. Shutting down bitcoin and restarting it with a different data directory is a poor solution because shutting down bitcoin while there are unconfirmed bitcoins risks losing those bitcoins.

Bitcoin was definitely not running when i get the busy port error. The process closes quickly and reliably from my experience, but it takes anywhere from 30 seconds to 3 minutes (estimation from memory) for the port to become available again. It occurred while switching from bitcoin 0.1.5 in Wine to the Linux build and again while switching from the Linux build to bitcoin 0.1.5 in Wine.

Another thing that I noticed is that the about dialog text does not fit correctly and it cannot be resized.
