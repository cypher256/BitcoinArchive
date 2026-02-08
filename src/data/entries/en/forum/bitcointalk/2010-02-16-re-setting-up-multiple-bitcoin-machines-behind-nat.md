---
title: "Re: Setting up multiple bitcoin machines behind NAT"
date: 2010-02-16T01:34:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=54.msg360#msg360"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Setting up multiple bitcoin machines behind NAT\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/59/"
---

Right now there isn't a port number setting to do that.  It's a feature yet to be implemented.  You can only set up your NAT to port-forward to one of the computers.  (I said something earlier about NAT port translation, but that wouldn't work, other nodes wouldn't know to connect to that port)

If you want, as a small optimization, you could run the rest of your computers as:
bitcoin -connect=<the IP of the first computer>

so they get all their network communication from the first computer and don't all connect over the net individually for the same information.  This saves bandwidth, although it doesn't use much bandwidth to begin with, so it wouldn't really matter unless you had tons of computers.

For redundancy in case the first computer goes down, you could have two that connect out and the rest connect to both of them.  The first two are run normally, the rest are run like:
bitcoin -connect=<IP1> -connect=<IP2>
