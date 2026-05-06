---
title: "UTF-8 to ANSI hack in CAboutDialog"
date: 2010-02-04T19:33:26Z
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
description: "Satoshi asks Malmi about a code change in the About dialog's UTF-8 to ANSI conversion hack for the copyright symbol in wxWidgets."
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

What was the reason for this change?

```c
#if !wxUSE_UNICODE
...
     if (str.Find('Â') != wxNOT_FOUND)
         str.Remove(str.Find('Â'), 1);
```
to:
```c
     if (str.Find('ï¿½') != wxNOT_FOUND)
         str.Remove(str.Find('ï¿½'), 1);
```

wxFormBuilder turns the (c) symbol into UTF-8 automatically.  On 
wxWidgets-2.8.9 ansi, it shows as a copyright symbol with an extra trash 
character, which this hack fixes up for the non-unicode (ansi) case.
