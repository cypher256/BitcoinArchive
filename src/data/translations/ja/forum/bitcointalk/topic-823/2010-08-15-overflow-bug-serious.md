---
title: "オーバーフローバグ 深刻"
date: 2010-08-15T10:04:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9494#msg9494"
author: "lfm"
participants:
  - name: "lfm"
    slug: "lfm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "lfmがスレッドを開始: オーバーフローバグ 深刻"
isSatoshi: false
tags: []
translationStatus: complete
---

高さ74638のブロックがネットワークのバグを悪用したようである。整数オーバーフローを利用してトランザクション合計をマイナスにしている。2つのトランザクション出力は以下の通り：

 out Value:92233720368.54(7ffffffffff85ee0) out Value:92233720368.54(7ff
 ffffffff85ee0)

早急な修正が必要である。

編集：
(satoshi)
0.3.10パッチのダウンロードリンクはこちら：
[topic 827](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-827/2010-08-15-version-0-3-10-block-74638-overflow-patch/)
