---
title: "Re: フラッド攻撃 0.00000001 BC"
date: 2010-08-04T06:22:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7443#msg7443"
author: "bytemaster"
participants:
  - name: "Daniel Larimer"
    slug: "daniel-larimer"
description: "BitcoinTalkトピック287におけるbytemasterの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

まあ、現時点では次のようなシステムを作ることを止めるものは何もない：

AがBに1.00000001を送る
BがAに1.00000000を返す

差し引きの結果はマイクロペイメントであり、処理手数料はかからない。私は上記と非常に似たことを行うシステムを作っている。実際のところ、「マイクロペイメント」システムはBTCブロックの外部で処理し、支払いを「集計」してから送信すべきだろう。

処理手数料の設計は素晴らしいと思う。各ノードは含めたいトランザクションを選り好みでき、したがって「含まれるまでの時間」はあなたの「提示」を受け入れるノードの数に正比例する。最悪の場合、自分一人のPCがブロックを作成できるまで待たなければならず、現時点では何週間もかかりうる！

実際、トランザクションを伝搬するノードに支払いを提供するのは合理的だと思う。ただし、それを「強制」し、不正なクライアントが手数料だけ集めて作業しないのを防ぐ方法があればの話だが。
