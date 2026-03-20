---
title: "Memory leak"
date: 2010-09-12T20:51:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg12522#msg12522"
author: "eurekafag"
participants:
  - name: "eurekafag"
    slug: "eurekafag"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "eurekafag starts a discussion: Memory leak."
isSatoshi: false
threadId: "bt-memory-leak"
threadPosition: 1
tags: []
---

I have an unusual configuration: on my headless gateway there is bitcoind running and on my desktop standart bitcoin is running (both Linux OpenSuSE, gateway 11.1, desktop 11.3, bitcoin 0.3.12 both). TCP port 8333 forwarded on gateway to the desktop (so gateway client can't has incoming connections). I don't know why but when I start desktop client after gateway's one the desktop client can't connect and flickers between 0 and 2 connections for a long time. Eventually it may connect but while it can't the memory leaks badly. About 200Kb/sec (each 0-2 change). It may not be noticed if the client connects instantly but in my case it doesn't. If I start first the desktop and then the headless client (after the desktop one has connected) everything is fine and no leaks (or they are little enough). I guess there is unfreed memory in bootstrap function or somewhere in the bootstrap process.
