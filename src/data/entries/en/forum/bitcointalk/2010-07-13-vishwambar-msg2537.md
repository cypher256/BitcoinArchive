---
title: "Re: (context post by vishwambar)"
date: 2010-07-13T11:56:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=318.msg2537#msg2537"
author: "vishwambar"
participants:
  - name: "vishwambar"
    slug: "vishwambar"
description: "Context post by vishwambar in BitcoinTalk topic 318. before msg2903."
isSatoshi: false
tags: []
---

Hi,

Tried bitcoind 0.3 on Ubuntu 10.04 and I get the following error when I run bincoind

Code:05:23:02  IST: Debug: ../src/common/intl.cpp(2554): assert "!m_strShort.empty()" failed in AddCatalog(): must initialize catalog first
[Debug] Generating a stack trace... please wait../src/common/intl.cpp(2554): assert "!m_strShort.empty()" failed in AddCatalog(): must initialize catalog first

Call stack:
[00] 0x80ed73b
[01] 0x80ebf3e
[02] 0x80eca8a
[03] 0x80ed06a
[04] 0x8133e72
[05] 0x8133ddf
[06] 0x80e3942
[07] 0x80e7181

I get a similar error when running bitcoin UI but it has a continue handle and hence it works fine.

Can somebody tell me what this error means and how to go about resolving this?
