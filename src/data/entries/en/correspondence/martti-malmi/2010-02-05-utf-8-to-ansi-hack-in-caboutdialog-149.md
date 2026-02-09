---
title: "Re: UTF-8 to ANSI hack in CAboutDialog"
date: 2010-02-05T07:16:23Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I didn't change it knowingly, must have been some encoding problem."
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 149
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I didn't change it knowingly, must have been some encoding problem.

> What was the reason for this change?
>
> #if !wxUSE_UNICODE
> ...
>     if (str.Find('Â') != wxNOT_FOUND)
>         str.Remove(str.Find('Â'), 1);
> to:
>     if (str.Find('ï¿½') != wxNOT_FOUND)
>         str.Remove(str.Find('ï¿½'), 1);
>
> wxFormBuilder turns the (c) symbol into UTF-8 automatically.  On
> wxWidgets-2.8.9 ansi, it shows as a copyright symbol with an extra
> trash character, which this hack fixes up for the non-unicode (ansi)
> case.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
