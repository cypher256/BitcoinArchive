---
title: "Linux 64ビット用バージョン0.3.8.1アップデート"
date: 2010-08-09T19:46:58.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8402#msg8402"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがバージョン0.3.6でCrypto++ 5.6.0 SHA-256に切り替えた際にLinux 64ビットビルドで生成が壊れた問題の修正版をリリース。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/332/"
threadId: "bt-version-0-3-8-1-update-for-linux-64-bit"
threadTitle: "Version 0.3.8.1 update for Linux 64-bit"
threadPosition: 1
translationStatus: complete
---

バージョン0.3.6でCrypto++ 5.6.0 SHA-256に切り替えた際に、Linux 64ビットビルドで生成が壊れていました。64ビットバイナリを更新したバージョン0.3.8.1がSourceForgeに公開されています。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/bitcoin-0.3.8.1-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/bitcoin-0.3.8.1-linux.tar.gz/download)

0.3.8以降の将来のバージョンではSSE2が必要になる可能性があります。これが問題になるPentium 3以前のCPUをお使いの方はいますか？
