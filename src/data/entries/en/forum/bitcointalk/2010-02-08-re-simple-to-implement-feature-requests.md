---
title: "Re: Simple to implement feature requests"
date: 2010-02-08T16:37:24.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=46.msg284#msg284"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Simple to implement feature requests\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/50/"
---

There are command line options:

bitcoin -addnode=1.2.3.4    to tell bitcoin about a node to connect to
bitcoin -connect=1.2.3.4    connect only to the specified node(s)

You can use more than one of these, for instance
bitcoin -connect=(first to try) -connect=(next to try) ...

You can specify non-routable IPs with -connect like 192.168.x.x, so if you had a server farm and you wanted one server to connect to the world and the rest to connect to the one server, you could do that.

In particular, -addnode is needed if you're always going to connect through TOR, since the IRC server blocks all the TOR exit nodes.  To connect through TOR, you could use:

bitcoin -proxy=127.0.0.1:9050 -addnode=212.159.72.216
