---
title: "[bitcoin-list] Bitcoin v0.1.2 now available"
date: 2009-01-11T22:32:18.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/21303153/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"[bitcoin-list] Bitcoin v0.1.2 now available\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/20/"
---

Bitcoin v0.1.2 is now available for download.

See http://www.bitcoin.org for the download link.

All the problems I've been finding are in the code that
automatically finds and connects to other nodes, since I wasn't
able to test it in the wild until now.  There are many more ways
for connections to get screwed up on the real Internet.

Bugs fixed:
- Fixed various problems that were making it hard for new nodes to
see other nodes to connect to.
- If you're behind a firewall, it could only receive one
connection, and the second connection would constantly disconnect
and reconnect.

These problems are kind of screwing up the network and will get
worse as more users arrive, so please make sure to upgrade.

Satoshi Nakamoto
