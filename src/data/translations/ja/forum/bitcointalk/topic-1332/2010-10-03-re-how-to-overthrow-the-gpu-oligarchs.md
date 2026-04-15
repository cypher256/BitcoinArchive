---
title: "Re: GPU寡頭制を打倒する方法"
date: 2010-10-03T21:30:04.000Z
type: "forum-post"
source: "bitcointalk"
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
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-10-01T21:11:11.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1332/2010-10-02-theymos-msg14966"
  - id: "q2"
    person: "lzsaver"
    date: "2010-10-01T20:49:47.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1332/2010-10-02-lz-msg14960"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> > これについてもっと教えてくれないか：
<!-- /tone-skip -->

「extraNonceで奇妙なことをしなければならず、それがブロックヘッダーのサイズを増加させる」
生成する際は、ブロックヘッダーのハッシュを計算する。より多くのデータをハッシュする方が少ないデータをハッシュするより遅いため、ブロックヘッダーは1つの例外を除いて、すべての人にとって固定サイズであることが重要だ。これが混乱のポイントだ。extraNonceはブロックヘッダーの一部ではなく、最初のトランザクションの一部だ。ハッシュ計算を遅くすることはない。ヘッダーのサイズを変更することもない。

ブロックの内容がハッシュ速度を遅くするという誤解には注意を払い、芽のうちに摘み取る必要がある。そのようなことはない。

extraNonceは非常に大きくする必要はない。望むなら、時刻が変わるたびに毎秒リセットすることもできる。最悪の場合、インクリメントの管理をしたくなければ、extraNonceをランダムな4バイトにすることができ、衝突による時間の無駄はごくわずかだろう。

別々のマシンは、最初のトランザクションに異なる生成公開鍵があるため、自動的に衝突の心配がない。各スレッドについても同様だ。
