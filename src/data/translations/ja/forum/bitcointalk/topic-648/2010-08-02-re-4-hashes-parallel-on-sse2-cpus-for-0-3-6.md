---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-02T19:02:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg7084#msg7084"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがAMDとIntelでの速度差について質問し、スタック上のアライメント問題について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/307/"
translationStatus: complete
---

AMDでは2倍速で、Intelでは半分の速度ということか？

[Quote from: tcatm on July 31, 2010, 10:12:38 AM](#msg6797)
> [Quote from: satoshi on July 31, 2010, 12:29:20 AM](#msg6751)
> > すごい……
> >
> > つまり、128ビットレジスタを使って4つの32ビットデータを一度にSIMD処理しているということか？ 長い間それを考えていたが、加算の桁上がりが隣の値に影響するため、不可能だと思っていた。
>
> その通りだ。128ビットベクトルに4つの32ビット値を入れる。それぞれ独立に計算されるが、同時に処理される。
>
> ところで、__attribute__ ((aligned (16)))でコンパイル時にアラインメントを指示できるのに、なぜalignup<16>関数を使っているのか？

試したが、スタック上のものには機能しない。いくつかテストを行った。

エラーすら出ず、単にアラインされないだけだ。
