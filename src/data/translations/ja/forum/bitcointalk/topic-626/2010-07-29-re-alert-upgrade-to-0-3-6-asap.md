---
title: "Re: *** 警告 *** 0.3.6 にアップグレードしてください"
date: 2010-07-29T21:20:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6490#msg6490"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが 0.3.6 の Linux ビルドが古い makefile.unix に戻ったことを説明し、DbRunRecoveryException の対処法を提供。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/292/"
translationStatus: complete
---

0.3.6 の Linux ビルドは古い makefile.unix に戻った。libjpeg を静的リンクしているので、問題はないはずだ。

これでうまく動作しているか？

22DbRunRecoveryException が発生し、以前に他の人のビルドを使用したことがある場合は、database/log.000000*を削除（またはファイルを別の場所に移動）する必要があるかもしれない。

Windows と Linux のユーザーへ：0.3.5 を入手済みでも、0.3.6 にアップグレードする必要がある。
