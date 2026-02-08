---
title: "Re: Command Line and JSON-RPC"
date: 2010-02-25T22:54:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg539#msg539"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Command Line and JSON-RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/80/"
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 4
---

OK, I made a build target bitcoind that only links wxBase and does not link GTK.  Version 0.2.7 on SVN.

I split out the init and shutdown stuff from ui.cpp into init.cpp, so now ui.cpp is pure UI.  ui.h provides inline stubs if wxUSE_GUI=0.  We only have four functions that interface from the node to the UI.  In the bitcoind build, we don't link ui.o or uibase.o.

[Quote from: sirius-m on February 25, 2010, 04:32:17 PM](https://bitcointalk.org/index.php?topic=63.msg538#msg538)It started increasing right away. I'll see if valgrind can help me.
Sure feels like it could be something in wxWidgets retrying endlessly because some UI thing failed or something wasn't inited correctly.  Our hack to ignore the initialize failure and run anyway means we're in uncharted territory.  We're relying on the fact that we hardly use wx in this mode.  We do still use a few things like wxGetTranslation and wxMutex.

Another way to debug would be to run in gdb, wait until everything is quiet and all threads should be idle, and break it and see which thread is busily doing something and what it's doing.

I suspect bitcoind will probably work fine, but I hope you can still debug the problem.
