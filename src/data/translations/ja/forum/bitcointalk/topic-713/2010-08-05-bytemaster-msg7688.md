---
title: "Transaction Overload Solution"
date: 2010-08-05T16:05:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=713.msg7688#msg7688"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "BitcoinTalkトピック713におけるbytemasterの文脈投稿。msg7706の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

別のスレッドで以下のコメントを投稿したが、大量の自動化された非マイクロ支払いにbitcoinが圧倒される前に、できるだけ早く対処すべき重要な欠陥だと感じた。

本当の問題は、正当な自動支払い交渉システムでさえ、クレジットカードシステムが現在使用しているよりも多くのトランザクションを導入してbitcoinを過負荷にする可能性があることだ。その結果、ブロックサイズが巨大になる可能性がある。

私のユースケースでは、P2Pシステムで*匿名ユーザー*に優先ダウンロードの対価を支払う。1つの「torrent」ファイルに100,000人全員がシードとダウンロードをしていると仮定する。簡単に1分あたり0.01を超える100,000の支払いが発生し得る。

この問題への唯一の解決策は、トランザクションのブロードキャストを「無料」でなくすることだ。つまり、含めてほしいなら私に支払わなければならない。
