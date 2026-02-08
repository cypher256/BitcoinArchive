---
title: "Re: バグ報告: 丸め誤差"
date: 2010-07-17T16:06:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=432.msg3769#msg3769"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「バグ報告: 丸め誤差」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/229/"
translationStatus: complete
---

getinfoがJSON-RPCの結果を返すために浮動小数点に変換する際の丸め誤差に違いありません。金額を表すために浮動小数点を使用している唯一の場所は、JSON-RPCで値を返す時です。

1.139999999999はBitcoinが内部的に表現できる精度より長いです。

内部的には、以下のどちらかしかありえません:
1.13999999 または
1.14000000

1.139999999999は1.13999999よりも1.14000000にはるかに近いため、1.14000000に違いありません。

コードはこうなっています:
(double)GetBalance() / (double)COIN.

（今のところ簡単な修正方法が思いつきません）
