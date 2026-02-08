---
title: "Connection limits"
date: 2010-08-09T20:58:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=766.msg8424#msg8424"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Connection limits\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/336/"
---

SVN rev 125:
- Always make 8 outbound connections even if have 8 inbound
- Limit outbound connections to one per a.b.?.? range
- Switch -maxconnections=#

I added the (currently undocumented) switch -maxconnections=#.  You shouldn't use it unless you need to because your router can't maintain a lot of connections, then try -maxconnections=30.

I haven't really tested -maxconnections much, could someone test it?
