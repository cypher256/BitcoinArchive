---
title: "Ubuntu 10.04 でのエラー"
date: 2010-07-13T11:56:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=318.msg2537#msg2537"
author: "vishwambar"
participants:
  - name: "vishwambar"
    slug: "vishwambar"
description: "BitcoinTalk トピック 318 における vishwambar の文脈投稿。msg2903 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

Ubuntu 10.04 で bitcoind 0.3 を試したが、bitcoind を実行すると以下のエラーが出る

```
05:23:02  IST: Debug: ../src/common/intl.cpp(2554): assert "!m_strShort.empty()" failed in AddCatalog(): must initialize catalog first
[Debug] Generating a stack trace... please wait../src/common/intl.cpp(2554): assert "!m_strShort.empty()" failed in AddCatalog(): must initialize catalog first
```

Call stack:
[00] 0x80ed73b
[01] 0x80ebf3e
[02] 0x80eca8a
[03] 0x80ed06a
[04] 0x8133e72
[05] 0x8133ddf
[06] 0x80e3942
[07] 0x80e7181

Bitcoin UI を実行した場合も同様のエラーが出るが、continue ハンドルがあるので正常に動作する。

このエラーの意味と解決方法を教えてもらえないだろうか？
