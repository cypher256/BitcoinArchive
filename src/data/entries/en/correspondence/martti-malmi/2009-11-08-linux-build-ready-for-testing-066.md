---
title: "Re: Linux build ready for testing"
date: 2009-11-08T17:39:39Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "In the debug.log, it requests the block list, receives the block list,"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 66
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

In the debug.log, it requests the block list, receives the block list, 
then begins uploading the list of blocks requested.  It doesn't receive 
the blocks, but it didn't run long enough for me to be sure it would 
have had time yet.  Everything else looks normal.

How long did you run it?  It could take a few minutes to start 
downloading the blocks.  Especially if you're on a cable modem, the 
uplink can be much lower bandwidth so it would take some time to upload 
the block request list.

If you run it again and it still doesn't download blocks, keep it 
running for several hours at least and then send me the debug.log.  That 
should give it time for my node to connect to you and I could see what 
it says on my side and correlate it with your debug.log.

You're right about the minimize on close option, there's no reason that 
can't be separate.  Martti originally had it separate and I made it a 
sub-option, my bad.  I'll change it back.

Liberty Standard wrote:
> That is what I meant. The blocks displayed in the status bar did not 
> increase at all while i ran the program. I have attached my debug.log.
> 
> A good way for you to test the tray icon in Gnome is to remove the 
> notification area and then add it back. If the icon is still displayed 
> after adding the notification back, then it's working correctly.
> 
> I generally set application preferences to not minimize to the tray, but 
> to close to the tray. And I keep the application minimized. That way I 
> don't accidentally close the program and still have the convenience of 
> being able to open the application from the tray. (I don't display open 
> windows in the 'task bar' but I have an icon that if clicked displays 
> open windows as sub-menu items.) Then if the tray icon disappears, I go 
> into the settings disable and re-enable the tray icon setting to get it 
> to reappear. That's currently not possible with the bitcoin preferences 
> because the close to tray check mark can not be enabled without the 
> minimize to tray check box being enabled.
> 
> 
> On Sun, Nov 8, 2009 at 9:08 AM, Satoshi Nakamoto <satoshin@gmx.com 
> <mailto:satoshin@gmx.com>> wrote:
> 
>     Liberty Standard wrote:
> 
>         I downloaded it and it runs. It and it is using plenty of CPU,
>         so I think it's working properly. It has not downloaded
>         previously generated blocks. Is that a bug or a new feature?
> 
> 
>     If you mean the blocks count in the status bar isn't working its way
>     up to around 26600, then that's a bug, you should send me your
>     debug.log. (which is at ~/.bitcoin/debug.log)
> 
> 
>         The system tray in Gnome is not very reliable. Sometimes an icon
>         will disappear leaving no way to get back to the program. I have
>         verified that this can happen with bitcoin. It would be nice if
>         starting bitcoin while it's already running would just bring up
>         the GUI of the already running bitcoin process.
> 
> 
>     We haven't figured out how to find and bring up the existing running
>     program yet on Linux like it does on Windows.  Given what you say, I
>     should at least turn off the minimize to tray option initially by
>     default.
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
