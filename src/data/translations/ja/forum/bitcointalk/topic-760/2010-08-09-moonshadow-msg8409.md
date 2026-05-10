---
title: "Re: Y2038 準拠の Bitcoin への移行計画はどうなる？（すでに準拠済み）"
date: 2010-08-09T19:58:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8409#msg8409"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "BitcoinTalk トピック 760 における MoonShadow の文脈投稿。msg8413 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
プログラマーではないが、これらの 32 ビット変数が 2038年の近くでロールオーバーする可能性があることには疑問を持っている。私の限られた理解では、ブロックチェーンのタイムスタンプはチェーン内の位置にのみ関連しており、そのような制限の対象ではない。もちろん、2 週間の難易度計算には正確な秒数が必要だが、最悪の場合でも 2038年前後の 2 週間の計算がずれるだけだ。そして、2 週間で難易度がどれだけ変化できるかには制限があるので、それさえ特に重要ではない。
