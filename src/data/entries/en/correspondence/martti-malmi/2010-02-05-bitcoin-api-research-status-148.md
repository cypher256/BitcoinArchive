---
title: "Re: Bitcoin API research status"
date: 2010-02-05T04:08:54Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I noticed this in the docs for wxSocketServer::Accept(bool wait = true):"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 148
tags:
  - "correspondence"
  - "early-contributor"
  - "api"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I noticed this in the docs for wxSocketServer::Accept(bool wait = true):
"If wait is true and there are no pending connections to be accepted, it 
will wait for the next incoming connection to arrive.  **Warning: This 
will block the GUI."

wxWidgets is pathologically single-threaded.  Not only single-threaded, 
but must-be-the-GUI-thread-ed.  Even for something as non-UI as 
wxStandardPaths I got nailed.  All this is fine for UI code, since this 
is the same constraint placed by Windows anyway, but for UI-less server 
daemon code, wx calls are uncertain.

Status of my research currently:

For PHP, Python, etc to access the server, we need to use regular 
sockets.  I think we can make it local-only by binding to localhost 
only, so it can only be accessed through the loopback.  They say it's 
also watertight to simply check the IP of connections received and 
disconnect anything not 127.0.0.1.  May as well do both.

XML-RPC is a bit fat.  There are 4 libraries for C++ but they're all big 
and hard to build, dependencies, license issues.  Some posters complain 
all the C++ and PHP XML-RPC libraries are buggy.

JSON-RPC is a simpler more elegant standard.  It's simple enough I could 
use a generic JSON parser.

PHP, Python and Java all have good implementations of JSON-RPC.

I'm currently leaning towards JSON-RPC.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
