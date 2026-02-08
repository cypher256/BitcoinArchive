---
title: "Re: CentOS用Bitcoind x86バイナリ"
date: 2010-08-03T21:05:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=685.msg7331#msg7331"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがBDB 4.8の使用を強く控えるよう警告し、公式ビルドとのデータベース互換性の問題を指摘。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/310/"
threadId: "bt-bitcoind-x86-binary-for-centos"
threadTitle: "Bitcoind x86 binary for CentOS"
threadPosition: 1
translationStatus: complete
---

[Quote from: sgtstein on August 03, 2010, 05:30:37 PM](https://bitcointalk.org/index.php?topic=685.msg7275#msg7275)4.8で正常にビルドできました。4.7ではうまくいきませんでしたが、4.8ではbitcoindが初期ブロックダウンロードをディスクにダンプする時にロックアップします。
BDB 4.8を使わないよう強くお勧めします。あなたのビルドを使った人が公式ビルドに戻った場合、database/log0000*ファイルに互換性がなくなります。
