---
title: "Re:（ギャビン・アンドレセンの文脈投稿）"
date: 2010-08-04T12:55:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7459#msg7459"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 287 におけるギャビン・アンドレセンの文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

ルールは「いずれかの TxOut（出力）が 0.01 ビットコイン未満の値を持つ場合、0.01 の手数料を課す」だ：

```
main.h:
foreach(const CTxOut& txout, vout)
  if (txout.nValue < CENT)
    nMinFee = CENT;
```
