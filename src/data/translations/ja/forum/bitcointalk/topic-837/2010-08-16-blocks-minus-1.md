---
title: "ブロック数マイナス 1"
date: 2010-08-16T15:59:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=837.msg9757#msg9757"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「ブロック数マイナス 1」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/390/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "kencausey"
    personSlug: "kencausey"
    date: "2010-08-15T14:45:26.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-15-kencausey-msg9588"
---

ステータスバーに表示されるブロック数を 1 減らしたいと思う。プログラムを最初にロードした時、1 ではなく 0 ブロックと表示されるようになる：
「0 connections    0 blocks     0 transactions」

これまで常に「nBestHeight + 1」だった。ジェネシスブロックを数えていたためだ。技術的には、はい、ジェネシスブロックはブロックだ。最初から持っているハードコードされたブロックだ。ジェネシスブロックを持た*ない*ことはできない。他のコインを測定する基準コインのようなものと考えてもよいだろう。人々が知りたいブロック数は、ダウンロードしたブロックの数だ。

主な利点は、ブロック数が現在の最良ブロックのブロック番号と等しくなることだ。ブロック数が 10 なら、持っている最も高いブロック番号は 10 だ。ブロック 10 を持っており、ブロック 11 は持っていないということだ。

ここで起きた混乱を軽減できるだろう：

<!-- quote: q1 -->
<!-- tone-skip -->
> [削除済み] Quote from: davidonpda on August 15, 2010, 11:31:37 PM
> > ... すでにブロック 74638に達している。これはそのブロックが正常なものになったということか？
<!-- /tone-skip -->

私自身もこの件で混乱があり、#bitcoin-dev で明確化してもらった：

不正なブロックは番号 74638 で、最後の正しいブロックは 74637 だった。番号は 0 から始まるので、クライアントに 74638 ブロックと表示されている場合、ブロック番号 74637 まで持っていることを意味し、それが最後の正しいブロックだ。
