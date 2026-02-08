---
title: "Re: We accept Bitcoins"
date: 2010-05-20T21:43:42.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=30.msg1169#msg1169"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"We accept Bitcoins\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/106/"
---

[Quote from: DataWraith on May 19, 2010, 07:52:42 PM](https://bitcointalk.org/index.php?topic=30.msg1161#msg1161)Can I just butt in with a question on why that is? To me it seems that if Bitcoin uses public-key cryptography to transfer ownership of the coins, it should be a trivial matter to include a short message that is only readable by the recipient.
Almost but not quite.  Bitcoin uses EC-DSA, which can only do digital signing, not encryption.  RSA can do both, but I didn't use it because it's an order of magnitude bigger and would have been impractical.
