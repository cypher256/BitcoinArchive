---
title: "Re: Reading/Writing Blocks and FLATDATA"
date: 2010-07-24T04:04:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5450#msg5450"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Reading/Writing Blocks and FLATDATA\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/265/"
---

FLATDATA was a workaround to serialize a fixed field length array.  There was a cleaner way to make it understand how to serialize arrays directly, but MSVC6 couldn't do it and I wanted to keep compatibility with MSVC6 at that time.  We don't support MSVC6 anymore because we use something in Boost that doesn't.  We lost support for it after 0.2.0.  Maybe someday I'll swap in the clean way that just knows how to serialize fixed length arrays without wrapping them in FLATDATA.
