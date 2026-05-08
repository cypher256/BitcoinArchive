---
title: "Re: Website and software translations"
date: 2010-07-15T18:37:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg3242#msg3242"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Website and software translations\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/197/"
---

I uploaded an updated bitcoin.po for 0.3.1 attached to this message:
[http://bitcointalk.org/index.php?topic=151.msg1259#msg1259](http://bitcointalk.org/index.php?topic=151.msg1259#msg1259)

please use it if you're starting a new translation.

If you already have a po file, poedit can update it.  
- Get the src directory from the 0.3.1 release candidate posted in the development forum, any version will do:
[http://bitcointalk.org/index.php?topic=383.0](http://bitcointalk.org/index.php?topic=383.0)
- Make a subdirectory under src: locale/??/LC_MESSAGES
(?? could be anything really, "en" or your language 2-letter code)
- Put your .po file there
- Open it with poedit
- In poedit, Catalog->Update from sources

The key is that the src directory with the sourcefiles needs to be 3 directories up from the .po file.
