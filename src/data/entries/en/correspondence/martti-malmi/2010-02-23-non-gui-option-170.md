---
title: "Re: Non-GUI option"
date: 2010-02-23T13:19:51Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "That seems good, I don't know of any standards about it."
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 170
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

> mmalmi@cc.hut.fi wrote:
>> Just a few clues I've found about running the same binary without a GUI:
>>
>> 1) GTK supports running a program without display:   
>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check.   
>> This doesn't tell if it's possible in wxWidgets though.
>
> I see it calls gtk-init-check in wxApp::Initialize.
>
> I can subclass Initialize, call the original one while suppressing the
> error message and ignore the return value.  It seems to be working.
>
> Any suggestions what to name the command line switches and how to
> describe them?  Is there any traditional standard?  I'm currently using:
> -daemon (or -d)   (Enables RPC and runs in the background)
> -server           (Enables RPC)

That seems good, I don't know of any standards about it.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
