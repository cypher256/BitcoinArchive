---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-16T05:02:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9680#msg9680"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック820におけるNewLibertyStandardの文脈投稿。after msg9676, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "gridecon"
    personSlug: "gridecon"
    date: "2010-08-16T03:15:44.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-gridecon-msg9659"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T02:57:57.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-re-tcatms-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
  - id: "q3"
    person: "NewLibertyStandard"
    personSlug: "newlibertystandard"
    date: "2010-08-16T01:49:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-newlibertystandard-msg9630"
translationStatus: complete
---

<!-- quote: q1 -->
> 自分はクアッドコアのPhenom II 64ビットLinuxマシン（どちらもubuntu 9.10）を2台持っているが、-4wayオプションを付けるとハッシュレートが上がりすぎて疑わしい。これまで-4wayなしではこれらのマシンで5～6 khash/secほどだった。-4wayありだと11 khash/sec以上になる！つまり、-4wayスイッチは報告されるハッシュ速度をほぼ2倍にする。この改善幅は予想以上で、自分のマシンが本当にそれほど速くハッシュしているのか、それとも何らかの理由で数学演算が実際にはスキップされていて、見かけ上の速度を生み、実際にはブロックを生成できていない可能性があるのではないかと疑問に思う。

o_O……ハッシュ頑張ってくれ、健闘を祈る！

<!-- quote: q2 -->
> <!-- quote: q3 -->
> > 4wayありだと、仮想コアをすべて有効にしたときに大幅にパフォーマンスが向上する。ハイパースレッディングをオフにすると、4wayの有無にかかわらず同じくらいのハッシュ数になると思う。
> 
> ねえ、何かに気づいているかもしれない！
> 
> 以前はハイパースレッディングが効かなかった。なぜならすべての処理が算術論理ユニットで行われ、ハイパースレッドがそれを共有するからだ。
> 
> tcatmのSSE2コードは通常のx86命令とSSE2命令の混合に違いない。だから一方がx86コードを実行している間に、もう一方がSSE2を実行できる。
> 
> ハイパースレッディングでどれくらい改善するんだ？
> 
> 数値を頼む。どんなCPUだ？

Ubuntu 10.04 amd64上のi7 860 2.8 GHzで、自分のかなり曖昧な記憶からの結果はこちら。数値は少しずれているかもしれない。

4wayなし、HTあり、4/8仮想コア、4.5～5 Mhash/sec
4wayなし、HTあり、8/8仮想コア、上より少し低いが、基本的に同じ

4wayあり、HTあり、8/8仮想コア、6.5～8 Mhash/sec（気のせいかもしれないが、明らかにばらつきが大きいように見える。）
4wayあり、HTあり、4/8仮想コア、5～6 Mhash/sec

4wayなし、HTなし、4/4物理コア、4.5～5 Mhash/sec（ただし最初の結果より少し遅い。）
4wayあり、HTなし、4/4物理コア、5～6 Mhash/sec
