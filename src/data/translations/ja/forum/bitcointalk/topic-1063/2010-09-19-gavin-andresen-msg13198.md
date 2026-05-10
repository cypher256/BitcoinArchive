---
title: "Re: バグ？ /usr/bin/bitcoind &quot;&quot;"
date: 2010-09-19T15:19:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1063.msg13198#msg13198"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 1063 におけるギャビン・アンドレセンの文脈投稿。msg13211 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

nelisky に同意する——バグではない。UNIX の cat コマンドが""についてこう言っている：

```
> cat ""
cat: : No such file or directory
```
