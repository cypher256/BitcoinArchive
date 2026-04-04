---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T23:36:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9584#msg9584"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/374/"
translationStatus: complete
---

67000から開始するのは*完璧*だ。

はい、現時点では74638で止まるだろう。より多くのノードがアップグレードして生成するにつれて、ゆっくりと増加し始めるはずだ。

Linux版のビルドリンクは以下の通りだ。

Linux版にはtcatmの4-way SSE2 SHA-256が含まれており、i5およびAMD CPUでの生成が高速になる。「-4way」スイッチを使って有効にし、お使いの環境で高速かどうか確認してほしい。

ダウンロードリンク：
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe)
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip)
[http://www.bitcoin.org/download/bitcoin-0.3.10-linux.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.10-linux.tar.gz)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip
SHA1 e3fda1ddb31b0d5c35156cacd80dee6ea6ae6423 bitcoin-0.3.10-linux.tar.gz
