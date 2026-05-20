---
title: "Re: Linux build ready for testing (blocks not increasing, debug.log attached)"
date: 2009-11-08T14:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. Exact send time of Liberty Standard's message is not recorded; the timestamp above is an approximation between Satoshi's 09:08 reply and 17:39 reply on Nov 8."
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard confirms blocks in the status bar are not increasing, attaches a debug.log, suggests a tray-icon test in Gnome, and explains his preferred minimize-to-tray and close-to-tray workflow."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

That is what I meant. The blocks displayed in the status bar did not increase at all while i ran the program. I have attached my debug.log.

A good way for you to test the tray icon in Gnome is to remove the notification area and then add it back. If the icon is still displayed after adding the notification back, then it's working correctly.

I generally set application preferences to not minimize to the tray, but to close to the tray. And I keep the application minimized. That way I don't accidentally close the program and still have the convenience of being able to open the application from the tray. (I don't display open windows in the 'task bar' but I have an icon that if clicked displays open windows as sub-menu items.) Then if the tray icon disappears, I go into the settings disable and re-enable the tray icon setting to get it to reappear. That's currently not possible with the bitcoin preferences because the close to tray check mark can not be enabled without the minimize to tray check box being enabled.
