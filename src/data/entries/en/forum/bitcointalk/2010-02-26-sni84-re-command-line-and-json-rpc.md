---
title: "Re: Command Line and JSON-RPC"
date: 2010-02-26T23:48:44.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg562#msg562"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Command Line and JSON-RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/84/"
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 6
---

Are you using wxWidgets 2.9.0?  I don't recommend using anything other than 2.9.0.

It looks like they've got a reference in the wx headers (arrstr.h) to something outside of wxBase.

Removing -D__WXDEBUG__ from bitcoin's makefile would probably solve it.

If that doesn't work and you just want to get it working, you could edit wxWidgets include/wx/arrstr.h, line 167 and comment out the wxASSERT_MSG.
