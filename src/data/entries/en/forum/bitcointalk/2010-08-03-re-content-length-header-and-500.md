---
title: "Re: Content-Length header and 500"
date: 2010-08-03T21:26:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7335#msg7335"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Content-Length header and 500\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/311/"
---

[Quote from: gavinandresen on August 03, 2010, 06:56:44 PM](https://bitcointalk.org/index.php?topic=689.msg7299#msg7299)[Quote from: jgarzik on August 03, 2010, 06:09:08 PM](https://bitcointalk.org/index.php?topic=689.msg7288#msg7288)bitcoin requires the Content-Length header, but several JSON-RPC libraries do not provide it.  When the Content-Length header is absent, bitcoin returns 500 Internal Server Error.
Can you be more specific about which JSON libraries don't provide Content-Length ?  It'd be nice to document that.
I guess we should try to support the case where there's no Content-Length parameter.  I don't want to rip and replace streams though, even if it has to read one character at a time.

Edit: That is, assuming there actually are any libraries that don't support Content-Length.
