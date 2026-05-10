---
title: "Re: tcatm の 4-way SSE2 Linux 32/64 ビット版が 0.3.10 に搭載"
date: 2010-08-19T19:07:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg10281#msg10281"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatm の 4-way SSE2 Linux 32/64 ビット版が 0.3.10 に搭載」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/402/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Ground Loop"
    personSlug: "ground-loop"
    date: "2010-08-18T14:14:26.000Z"
  - id: "q2"
    person: "nelisky"
    personSlug: "nelisky"
    date: "2010-08-18T14:02:25.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-18-nelisky-msg10164"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Mac以外のi5は対応してくれないのか？
<!-- /tone-skip -->

Windows i5 64 ビットではここでは遅くなった。
i5 で遅くなったと言う人を聞いたのは初めてだ。他の全員が i5 では 4way の方が速いと言っている。ハイパースレッディングを有効にするとさらにだ。

<!-- quote: q2 -->
<!-- tone-skip -->
> i5もだ。少なくとも私のMacBookProでは。
<!-- /tone-skip -->

良いな、ということは Mac でも動作しているという確認だな？

Laszlo が Mac で-4way のコードをコンパイルしたと言っていたので、-4way スイッチは Mac でも試せる。SVN 上の makefile.osx にはまだ入っていないと思うが、ビルドされたバージョンには含まれている。
