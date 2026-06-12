---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-04T12:55:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7459#msg7459"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 287."
isSatoshi: false
tags: []
---

The rule is "if any TxOut (output) has a value of less than 0.01 bitcoins, charge a 0.01 fee":

```
main.h:
foreach(const CTxOut& txout, vout)
  if (txout.nValue < CENT)
    nMinFee = CENT;
```
