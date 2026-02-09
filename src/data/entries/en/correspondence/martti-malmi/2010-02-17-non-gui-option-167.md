---
title: "Non-GUI option"
date: 2010-02-17T17:32:04Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Just a few clues I've found about running the same binary without a GUI:"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 167
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Just a few clues I've found about running the same binary without a GUI:

1) GTK supports running a program without display:  
http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check. This  
doesn't tell if it's possible in wxWidgets though.

2) wxAppConsole of wx 2.9 might be useful somehow. Just replacing  
wxApp with wxAppConsole doesn't work, I'm not sure how it should be  
used. It's not very well documented.

3) Another option might be to use IMPLEMENT_APP_NO_MAIN() and make our  
own main method.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
