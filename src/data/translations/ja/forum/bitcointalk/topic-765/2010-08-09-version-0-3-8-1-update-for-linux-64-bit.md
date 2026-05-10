---
title: "Linux 64 ビット用バージョン 0.3.8.1 アップデート"
date: 2010-08-09T19:46:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8402#msg8402"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがバージョン 0.3.6 で Crypto++ 5.6.0 SHA-256 に切り替えた際に Linux 64 ビットビルドで生成が壊れた問題の修正版をリリース。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/332/"
translationStatus: complete
---

バージョン 0.3.6 で Crypto++ 5.6.0 SHA-256 に切り替えた際に、Linux 64 ビットビルドで生成が壊れていた。64 ビットバイナリを更新したバージョン 0.3.8.1 が SourceForge に公開されている。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/bitcoin-0.3.8.1-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.8/bitcoin-0.3.8.1-linux.tar.gz/download)

0.3.8 以降の将来のバージョンでは SSE2 が必要になる可能性がある。これが問題になる Pentium 3 以前の CPU をお使いの方はいるだろうか？
