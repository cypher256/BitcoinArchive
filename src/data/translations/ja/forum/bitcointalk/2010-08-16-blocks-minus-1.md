---
title: "ブロック数マイナス1"
date: 2010-08-16T15:59:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=837.msg9757#msg9757"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「ブロック数マイナス1」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/390/"
threadId: "bt-blocks-minus-1"
threadTitle: "blocks minus 1"
threadPosition: 1
translationStatus: complete
---

ステータスバーに表示されるブロック数を1減らしたいと思います。プログラムを最初にロードした時、1ではなく0ブロックと表示されるようになります：
「0 connections    0 blocks     0 transactions」

これまで常に「nBestHeight + 1」でした。ジェネシスブロックを数えていたためです。技術的には、はい、ジェネシスブロックはブロックです。最初から持っているハードコードされたブロックです。ジェネシスブロックを持た*ない*ことはできません。他のコインを測定する基準コインのようなものと考えてもよいでしょう。人々が知りたいブロック数は、ダウンロードしたブロックの数です。

主な利点は、ブロック数が現在の最良ブロックのブロック番号と等しくなることです。ブロック数が10なら、持っている最も高いブロック番号は10です。ブロック10を持っており、ブロック11は持っていないということです。

ここで起きた混乱を軽減できるでしょう：

[Quote from: kencausey on August 15, 2010, 11:45:26 PM](https://bitcointalk.org/index.php?topic=823.msg9588#msg9588)[Quote from: davidonpda on August 15, 2010, 11:31:37 PM](https://bitcointalk.org/index.php?topic=823.msg9580#msg9580)... すでにブロック74638にいます。そのブロックは今は正しいものだということでしょうか？

私自身もこの件で混乱があり、#bitcoin-devで明確化してもらいました：

不正なブロックは番号74638で、最後の正しいブロックは74637でした。番号は0から始まるので、クライアントに74638ブロックと表示されている場合、ブロック番号74637まで持っていることを意味し、それが最後の正しいブロックです。
