---
title: "Re: UI improvements"
date: 2010-02-23T01:16:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg434#msg434"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"UI improvements\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/68/"
threadId: "bt-ui-improvements"
threadTitle: "UI improvements"
threadPosition: 2
---

There are now "Sending" and "Receiving" tabs in the Address Book.  Your addresses are referred to as "receiving addresses".

madhatter was working on building it on Mac.  He had errors probably caused by UTF-16 wxWidgets 2.8.  Should have better luck now with 2.9.0.  wxWidgets 2.9.0 is UTF-8 and wouldn't have that problem.

I think he had it working on FreeBSD, but he wanted a non-UI version.

I have the command line and JSON-RPC daemon version working now.  Will SVN it in a day or two.

I disabled gdm on my Ubuntu system so it boots into command line.  I hope I will be able to get it enabled again with rcconf.
