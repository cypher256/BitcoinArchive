---
title: "Build error SVN r115 on my Mac: workaround"
date: 2010-07-28T15:18:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6206#msg6206"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 604. before msg6273."
isSatoshi: false
tags: []
---

I get:

```
/var/folders/n7/n7Do3Krz2RWPeE+1YxvhUU+++TM/-Tmp-//cc8PgHsQ.s:879:suffix or operands invalid for `call'
... compiling cryptopp/sha.cpp (latest SVN source) on my Mac (gcc version 4.2.1).
```

I fixed it by adding -DCRYPTOPP_DISABLE_ASM  to my makefile; perhaps somebody with more experience compiling C++ on a Mac can figure out a better fix.
