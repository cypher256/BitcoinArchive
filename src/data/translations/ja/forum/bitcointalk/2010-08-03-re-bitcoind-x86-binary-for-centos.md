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
threadId: "bt-bitcoind-x86-binary-for-centos"
translationStatus: complete
---

> [Quote from: sgtstein on August 03, 2010, 05:30:37 PM](#msg7275)
> 4.8でのビルドには成功した。4.7ではどうしてもダメだったが、4.8だと初期ブロックダウンロードをディスクに書き出す際にbitcoindがフリーズする。

BDB 4.8を使わないよう強く勧める。あなたのビルドを使った人が公式ビルドに戻った場合、database/log0000*ファイルに互換性がなくなる。
