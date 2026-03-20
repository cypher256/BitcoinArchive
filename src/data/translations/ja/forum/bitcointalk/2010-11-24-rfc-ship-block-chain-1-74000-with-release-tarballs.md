---
title: "RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-11-24T22:07:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24277#msg24277"
author: "jgarzik"
participants:
  - name: "jgarzik"
    slug: "jgarzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "jgarzikがスレッドを開始: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
isSatoshi: false
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadPosition: 1
tags: []
translationStatus: complete
---

ビットコインがブロックチェーン情報を格納するblk0001.datは、Windows、Linux、32ビットおよび64ビット間で互換性があるようである。

であれば、各リリースにブロック1-74000を同梱することで、新規ユーザーの時間を節約できるのではないか？

ローカルファイルのインデックス作成と検証は、P2P経由ですべてのブロックをダウンロードするよりも高速で、ネットワークリソースの消費も少ないと考えられる。
