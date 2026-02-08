---
title: "バージョン0.3.10 - ブロック74638オーバーフローパッチ！"
date: 2010-08-15T23:48:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=827.msg9590#msg9590"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「バージョン0.3.10 - ブロック74638オーバーフローパッチ！」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/376/"
translationStatus: complete
---

バージョン0.3.10はブロック74638のオーバーフローバグを修正します。[http://bitcointalk.org/index.php?topic=823](http://bitcointalk.org/index.php?topic=823)

Linux版にはtcatmの4-way SSE2 SHA-256が含まれており、i5、i7（ハイパースレッディング対応）、AMD CPUでの生成が高速になります。「-4way」スイッチを試して有効にし、お使いの環境で高速かどうか確認してください。

SourceForgeからダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.10/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.10/)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip
SHA1 e3fda1ddb31b0d5c35156cacd80dee6ea6ae6423 bitcoin-0.3.10-linux.tar.gz
SHA1 b812ccff4881778b9090f7c0b0255bcba7b078ac bitcoin-0.3.10-macosx.zip

blk*.datを削除する必要はもうありません。正しいブロックチェーンが不正なブロックチェーンを追い越したため、アップグレードするだけで自動的に不正なブロックチェーンを再編成で除去します。
