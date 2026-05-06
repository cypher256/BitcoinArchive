---
title: "Non-GUI option"
date: 2010-02-17T17:32:04Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Malmi shares research on running Bitcoin without a GUI, including GTK headless support, wxAppConsole, and IMPLEMENT_APP_NO_MAIN() approaches."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
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
