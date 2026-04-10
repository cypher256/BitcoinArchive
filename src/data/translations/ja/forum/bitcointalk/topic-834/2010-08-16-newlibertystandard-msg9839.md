---
title: "Re: ブロックチェーンのチェックポイント化"
date: 2010-08-16T22:42:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9839#msg9839"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック834におけるNewLibertyStandardの文脈投稿。msg9843に引用。"
isSatoshi: false
tags: []
translationStatus: complete
---
チェックサムは、新しいチェーンを開始して成長させることができるように、特定の単一ブロックのハッシュにすぎない。ただし、チェックサムが含まれたクライアントがそのブロック番号に到達すると、チェックサム以外のハッシュは受け入れない。

正しいか？

したがって、同じジェネシスブロックで代替チェーンを作成したい場合、ライブネットワークに接続する前にジェネシスの後のブロックを異なるハッシュでチェックサムする必要がある。公式クライアントのチェックサムに到達した場合、そのチェックサムが自分のBitcoinクライアントに含まれていないことを確認する必要がある。

チェーンの強度はどのように計算されるのか？長さとチェックサムだけか、それとも難易度500の単一ブロックを難易度1の10ブロックより有効と見なすのか？おそらく長さとチェックサムのみだと推測する。つまり、チェックサム以前のすべてのトランザクションはほぼ永久に安全だが、チェックサム以降のブロックは次のチェックサムが来るまでネットワークの現在の強度に依存する。
