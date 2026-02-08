---
title: "SVN rev 130のバグ修正"
date: 2010-08-12T21:20:31.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8920#msg8920"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがSVN rev 130の各種バグ修正と-paytxfeeスイッチの追加を発表。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/349/"
threadId: "bt-bugfixes-in-svn-rev-130"
threadTitle: "Bugfixes in SVN rev 130"
threadPosition: 1
translationStatus: complete
---

rev 130の各種バグ修正：

相対パスでの-datadirを修正
自動起動はWindows以外ではデフォルトでオフに
msvcでコンパイルした際の「vector iterator not dereferencable」アサーションが時々発生する問題を修正
Linuxビルドでのreadlinkコンパイル警告を修正
__BSD__の代わりにsys/param.hとBSD定義を使用
-paytxfeeスイッチ、例：-paytxfee=0.01
