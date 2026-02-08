---
title: "Re: Error on Ubuntu 10.04"
date: 2010-07-14T18:25:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=318.msg2903#msg2903"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Error on Ubuntu 10.04\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/184/"
---

What language is your computer set to?  Is it set to German, Dutch or Italian?  Is it one of those sub-languages like "nl-??"?

It's trying to load a translation and failing.  You could delete the locale directory that came with bitcoin so it doesn't try to use it.

Can someone test each language on Ubuntu and see if there's a problem with just one of them or maybe all three?
