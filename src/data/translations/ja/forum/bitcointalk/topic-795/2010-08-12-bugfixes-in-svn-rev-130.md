---
title: "SVN rev 130 のバグ修正"
date: 2010-08-12T21:20:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8920#msg8920"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが SVN rev 130 の各種バグ修正と-paytxfee スイッチの追加を発表。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/349/"
translationStatus: complete
---

rev 130 の各種バグ修正：

相対パスでの-datadir を修正
自動起動は Windows 以外ではデフォルトでオフに
msvc でコンパイルした際の「vector iterator not dereferencable」アサーションが時々発生する問題を修正
Linux ビルドでの readlink コンパイル警告を修正
__BSD__の代わりに sys/param.h と BSD 定義を使用
-paytxfee スイッチ、例：-paytxfee=0.01
