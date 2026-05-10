---
title: "Re: JSON-RPC パスワード"
date: 2010-07-21T12:11:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4709#msg4709"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 461 におけるギャビン・アンドレセンの文脈投稿。msg4775 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Linux には「典型的な」設定ファイルというものはないと思う！

自分の Debian システムの/etc にある 20個の.conf ファイルを手短に調べてみたところ：
 1 ファイルは"key value"を使用
 5 ファイルは"key=value"を使用（実際にはいくつかは"key = value"で、"="の前後にスペースを許容）
 14 ファイルは独自の方式

独自の方式の 14 ファイルは実に様々で、1 行 1 値から"key:value"、本格的な XML まであった。#は Linux 世界における共通のコメント文字だ。

私の推しは：

```
# comment
key1=value1
```
