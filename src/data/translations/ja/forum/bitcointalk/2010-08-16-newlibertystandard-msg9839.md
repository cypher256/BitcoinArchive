---
title: "Re: ブロックチェーンのチェックポイント"
date: 2010-08-16T22:42:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9839#msg9839"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック834におけるNewLibertyStandardの投稿。msg9843による引用。"
isSatoshi: false
threadId: "bt-checkpointing-the-block-chain"
tags: []
translationStatus: complete
---

チェックサムは特定のブロックのハッシュに過ぎず、新しいチェーンが開始されて成長できるが、チェックサムを含むクライアントがそのブロック番号に到達すると、チェックサム以外のハッシュは受け入れない。

これで合っているか？

つまり、誰かが同じジェネシスブロックで代替チェーンを作りたい場合、ライブネットワークに接続する前に、ジェネシス後のブロックに異なるハッシュでチェックサムを設定する必要がある。公式クライアントのチェックサムに到達した場合、自分のBitcoinクライアントにそのチェックサムが含まれていないことを確認する必要がある。

チェーンの強度はどのように計算されるのか？長さとチェックサムだけなのか、それとも難易度500の1ブロックを難易度1の10ブロックよりも有効と判定するのか？おそらく長さとチェックサムだけだと思うが、それはチェックサム前のすべてのトランザクションは事実上永遠に安全だが、チェックサム後のブロックは次のチェックサムが来るまでネットワークの現在の強度に依存するということを意味する。
