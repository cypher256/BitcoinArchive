---
title: "Re: Non-GUI option"
date: 2010-02-23T14:47:59Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "It was probably apt-get install libgtk2.0-0. You can search for"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 171
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

>>> Just a few clues I've found about running the same binary without a GUI:
>>>
>>> 1) GTK supports running a program without display:   
>>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check.   
>>> This doesn't tell if it's possible in wxWidgets though.
>>
>> I see it calls gtk-init-check in wxApp::Initialize.
>>
>> I can subclass Initialize, call the original one while suppressing   
>> the error message and ignore the return value.  It seems to be   
>> working.
>
> This is working.  A few more things and I'll upload it.
>
> We'll need to tell people to install the GTK libraries.  Do you
> remember the apt-get command to install GTK, and can you install it
> without having a GUI installed?

It was probably apt-get install libgtk2.0-0. You can search for  
available packages like this: "apt-cache search libgtk".

I'll give Drupal accounts to the bitcoin.org translators, so they can  
keep the translations up to date.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
