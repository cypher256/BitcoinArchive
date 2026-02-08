---
title: "Re: CryptoPP Assertion Error"
date: 2010-09-05T23:25:32.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=967.msg12062#msg12062"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"CryptoPP Assertion Error\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/433/"
translationStatus: pending
---

You can probably just comment out the line
cryptopp/secblock.h:187
  //assert(false);

Let me know if it works, and watch if it memory leaks. 

It looks like a template class to make sure the derived class defines its own version of allocate and deallocate.  It would be weird if that was the actual problem and it made it all the way to release.  Probably a false alarm.
