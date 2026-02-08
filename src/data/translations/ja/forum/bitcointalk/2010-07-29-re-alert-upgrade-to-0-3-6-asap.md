---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-29T21:20:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6490#msg6490"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが0.3.6のLinuxビルドが古いmakefile.unixに戻ったことを説明し、DbRunRecoveryExceptionの対処法を提供。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/292/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
threadTitle: "*** ALERT *** Upgrade to 0.3.6 ASAP!"
threadPosition: 1
translationStatus: complete
---

0.3.6のLinuxビルドは古いmakefile.unixに戻りました。libjpegを静的リンクしているので、問題はないはずです。

これでうまく動作していますか？

22DbRunRecoveryExceptionが発生し、以前に他の人のビルドを使用したことがある場合は、database/log.000000*を削除（またはファイルを別の場所に移動）する必要があるかもしれません。

WindowsとLinuxのユーザーへ：0.3.5を入手済みでも、0.3.6にアップグレードする必要があります。
