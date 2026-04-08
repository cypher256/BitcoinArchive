---
title: "Re: What could be the transition plan to Y2038 compliant Bitcoin? (it already is)"
date: 2010-08-10T05:44:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8476#msg8476"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "BitcoinTalkトピック760におけるthroughputの文脈投稿。after msg8413, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-09T20:13:26.000Z"
    sourceEntryId: "forum/bitcointalk/topic-760/2010-08-09-re-what-could-be-the-transition-plan-to-y2038-compliant-bitc"
translationStatus: complete
---

<!-- quote: q1 -->
> unsigned intは2106年まで持つ。それまでにネットワークが少なくとも一度は全面的に作り直される必要があるのは確実だ。
>
> signed intはどこにもあってはならない。もしどこかでsigned intを見つけたら、（向こう25年以内に）教えてほしい。unsigned intに変更する。

タイムスタンプについてもっと良い案がある。基盤の型が何であれ、ハッシュ計算の用途のために、エポックからの秒数を文字列表現に変換するのだ（その瞬間が一世紀後に変わっていないことを願う）。
