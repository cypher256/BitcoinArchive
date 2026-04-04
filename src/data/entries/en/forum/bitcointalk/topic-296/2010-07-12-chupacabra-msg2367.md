---
title: "Fedora 13 libcrypto"
date: 2010-07-12T19:27:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=296.msg2367#msg2367"
author: "chupacabra"
participants:
  - name: "chupacabra"
    slug: "chupacabra"
description: "Thread starter by chupacabra in BitcoinTalk topic 296."
isSatoshi: false
tags: []
---

I get this when trying to run bitcoin:

[michael@fed13 64]$ ./bitcoin
./bitcoin: error while loading shared libraries: libcrypto.so.0.9.8: cannot open shared object file: No such file or directory

Fedora 13 uses this:

/lib64/libcrypto.so.1.0.0a

How can I get around this?

I tried a symlink and running ldd and ldconfig to no avail.

Thanks
