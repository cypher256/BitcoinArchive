---
title: "linux-0.1.6-test5 fix for zombie sockets"
date: 2009-11-12T23:39:44Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I added MSG_DONTWAIT to the send and recv calls in case they forgot the"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 78
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

test 5:

I added MSG_DONTWAIT to the send and recv calls in case they forgot the 
socket is non-blocking.  If that doesn't work, there's now the catch-all 
solution: another thread monitors the send/recv thread and terminates 
and restarts it if it stops.  It prints "*** Restarting 
ThreadSocketHandler ***" in debug.log, and an error message displays on 
the status bar for a while.

Before terminating, it tries closing the socket that's hung.  If that 
works, it doesn't have to resort to terminating.

I ran a test where it terminated the thread about 1000 times without 
trouble, so it should be safe.  The terminate on linux is 
pthread_cancel, which throws it into C++'s exception handler.

The thread calls we were using didn't have terminate, so I created our 
own wrappers in util.h to use CreateThread on windows and pthread_create 
on linux, instead of:
   _beginthread is windows only and lacks terminate
   boost::thread is really attractive, but lacks terminate
   wxThread requires you to create a class for every function you might 
call (yuck)

File attached in the next e-mail

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
