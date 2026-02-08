---
title: "Re: GPU寡頭支配者を倒す方法"
date: 2010-10-03T21:30:04.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1332.msg15142#msg15142"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「GPU寡頭支配者を倒す方法」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/479/"
translationStatus: complete
---

[Quote from: theymos on October 02, 2010, 06:11:11 AM](https://bitcointalk.org/index.php?topic=1332.msg14966#msg14966)[Quote from: lzsaver on October 02, 2010, 05:49:47 AM](https://bitcointalk.org/index.php?topic=1332.msg14960#msg14960)これについてもっと教えてもらえますか：
「extraNonceで奇妙なことをしなければならず、それがブロックヘッダのサイズを増加させる」
生成する際は、ブロックヘッダのハッシュを計算します。より多くのデータをハッシュする方が少ないデータをハッシュするより遅いため、ブロックヘッダは1つの例外を除いて、すべての人にとって固定サイズであることが重要です。これが混乱のポイントです。extraNonceはブロックヘッダの一部ではなく、最初のトランザクションの一部です。ハッシュ計算を遅くすることはありません。ヘッダのサイズを変更することもありません。

ブロックの内容がハッシュ速度を遅くするという誤解には注意を払い、芽のうちに摘み取る必要があります。そのようなことはありません。

extraNonceは非常に大きくする必要はありません。望むなら、時刻が変わるたびに毎秒リセットすることもできます。最悪の場合、インクリメントの管理をしたくなければ、extraNonceをランダムな4バイトにすることができ、衝突による時間の無駄はごくわずかでしょう。

別々のマシンは、最初のトランザクションに異なる生成公開鍵があるため、自動的に衝突の心配がありません。各スレッドについても同様です。
