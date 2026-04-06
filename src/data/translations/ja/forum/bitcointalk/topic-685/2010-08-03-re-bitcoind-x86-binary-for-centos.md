---
title: "Re: CentOS用Bitcoind x86バイナリ"
date: 2010-08-03T21:05:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=685.msg7331#msg7331"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがBDB 4.8の使用を強く控えるよう警告し、公式ビルドとのデータベース互換性の問題を指摘。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/310/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "sgtstein"
    date: "2010-08-03T08:30:37.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 4.8では正常にビルドできた。4.7ではだめだったが、4.8ではbitcoindが初期ブロックダウンロードをディスクにダンプする際にハングする。😐
<!-- /tone-skip -->

BDB 4.8を使わないよう強く勧める。あなたのビルドを使った人が公式ビルドに戻った場合、database/log0000*ファイルに互換性がなくなる。
