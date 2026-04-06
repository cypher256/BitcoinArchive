---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T12:11:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4709#msg4709"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。msg4775の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Linuxには「典型的な」設定ファイルというものはないと思う！

自分のDebianシステムの/etcにある20個の.confファイルを手短に調べてみたところ：
 1ファイルは"key value"を使用
 5ファイルは"key=value"を使用（実際にはいくつかは"key = value"で、"="の前後にスペースを許容）
 14ファイルは独自の方式

独自の方式の14ファイルは実に様々で、1行1値から"key:value"、本格的なXMLまであった。#はLinux世界における共通のコメント文字だ。

私の推しは：

```
# comment
key1=value1
```
