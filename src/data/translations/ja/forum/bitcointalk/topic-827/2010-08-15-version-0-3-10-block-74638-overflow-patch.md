---
title: "バージョン 0.3.10 - ブロック 74638 オーバーフローパッチ！"
date: 2010-08-15T23:48:22.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=827.msg9590#msg9590"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「バージョン 0.3.10 - ブロック 74638 オーバーフローパッチ！」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/376/"
relatedEntries:
  - aftermath/2010-08-15-value-overflow-incident
  - analysis/2010-08-15-overflow-incident-structure-and-paradox
  - sourceforge/2010-08-15-bitcoin-v0310-overflow-bug-fix
  - forum/bitcointalk/topic-822/2010-08-15-jgarzik-msg9474
  - forum/bitcointalk/topic-823/2010-08-15-overflow-bug-serious
  - analysis/2010-08-15-knightmb-snapshot-and-legend
translationStatus: complete
---

バージョン 0.3.10 はブロック 74638 のオーバーフローバグを修正する。[http://bitcointalk.org/index.php?topic=823](http://bitcointalk.org/index.php?topic=823)

Linux 版には tcatm の 4-way SSE2 SHA-256 が含まれており、i5、i7（ハイパースレッディング対応）、AMD CPU での生成が高速になる。「-4way」スイッチを試して有効にし、お使いの環境で高速かどうか確認してほしい。

SourceForge からダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.10/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.10/)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip
SHA1 e3fda1ddb31b0d5c35156cacd80dee6ea6ae6423 bitcoin-0.3.10-linux.tar.gz
SHA1 b812ccff4881778b9090f7c0b0255bcba7b078ac bitcoin-0.3.10-macosx.zip

blk*.dat を削除する必要はもうない。正しいブロックチェーンが不正なブロックチェーンを追い越したため、アップグレードするだけで自動的に不正なブロックチェーンを再編成で除去する。
