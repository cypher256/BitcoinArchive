---
title: "Re: GPU寡頭支配者を倒す方法"
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
---

[Quote from: theymos on October 02, 2010, 06:11:11 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1332/2010-10-02-theymos-msg14966/)
> [Quote from: lzsaver on October 02, 2010, 05:49:47 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1332/2010-10-02-lz-msg14960/)
> > これについてもっと教えてくれないか：
> > 「*extraNonceで変なことをしなければならず、ブロックヘッダのサイズが増える*」。
>
> 生成時にはブロックヘッダーのハッシュを計算する。より多くのデータをハッシュする方が少ないデータをハッシュするより遅いので、ブロックヘッダーは一つの例外を除いて全員にとって固定サイズであることが極めて重要だ。各ハッシュ試行後にNonceヘッダーフィールドをインクリメントするが、このフィールドは32バイトしかないため、頻繁にオーバーフローする。オーバーフローするたびに、可変サイズのextraNonceフィールドをインクリメントする。extraNonceが大きくなるほど、生成は遅くなる。ただし通常のインクリメントでは有意に大きくはならない。
>
> 多くのコンピュータがあり、すべてが同じ公開鍵で同じブロックに取り組んでいる場合、すべてが同時に同じブロックをハッシュしている可能性が非常に高く、これは無意味だ。これを修正するために、各コンピュータに固有のextraNonce修飾値が与えられる。衝突を防ぐためにこれは非常に大きくなる可能性があり、そのためハッシュが遅くなる。
>
> 間違いなくこの欠点のないプーリングシステムを設計できるだろうが、それはより困難になる。
>
> m0mchilのgetworkがextraNonceで何かしているのは見た。その実装がどれほど悪いかわからないが、理論的にはそれなしのクライアントよりも*必ず*遅くなる（他の条件が同じなら。GPUサポートの追加で明らかにパフォーマンスは向上する）。
[Quote from: lzsaver on October 02, 2010, 05:49:47 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1332/2010-10-02-lz-msg14960/)
> これについてもっと教えてくれないか：
> 「*extraNonceで変なことをしなければならず、ブロックヘッダのサイズが増える*」。

「extraNonceで奇妙なことをしなければならず、それがブロックヘッダのサイズを増加させる」
生成する際は、ブロックヘッダのハッシュを計算する。より多くのデータをハッシュする方が少ないデータをハッシュするより遅いため、ブロックヘッダは1つの例外を除いて、すべての人にとって固定サイズであることが重要だ。これが混乱のポイントだ。extraNonceはブロックヘッダの一部ではなく、最初のトランザクションの一部だ。ハッシュ計算を遅くすることはない。ヘッダのサイズを変更することもない。

ブロックの内容がハッシュ速度を遅くするという誤解には注意を払い、芽のうちに摘み取る必要がある。そのようなことはない。

extraNonceは非常に大きくする必要はない。望むなら、時刻が変わるたびに毎秒リセットすることもできる。最悪の場合、インクリメントの管理をしたくなければ、extraNonceをランダムな4バイトにすることができ、衝突による時間の無駄はごくわずかだろう。

別々のマシンは、最初のトランザクションに異なる生成公開鍵があるため、自動的に衝突の心配がない。各スレッドについても同様だ。
