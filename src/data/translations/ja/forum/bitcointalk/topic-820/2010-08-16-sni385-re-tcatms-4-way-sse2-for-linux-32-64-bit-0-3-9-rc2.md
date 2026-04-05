---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2"
date: 2010-08-16T03:23:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9661#msg9661"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/385/"
translationStatus: complete
---

[Quote from: Vasiliev on August 16, 2010, 03:17:07 AM](#msg9660)
> [Quote from: satoshi on August 16, 2010, 02:57:57 AM](#msg9655)
> > [Quote from: tcatm on August 16, 2010, 12:43:39 AM](#msg9617)
> > > sha256.cppを-O3 -march=amdfamk10でコンパイルすることを提案する（32ビットと64ビットの両方で動作する）。この命令セットをサポートするCPU（AMD Phenom、Intel i5以降）のみが-4wayの恩恵を受け、パフォーマンスが約9%向上する。
> >
> > GCC 4.3.3は-march=amdfamk10をサポートしていない。以下のエラーが出る：
> > sha256.cpp:1: error: bad value (amdfamk10) for -march= switch
> >
> > [Quote from: NewLibertyStandard on August 16, 2010, 01:49:01 AM](#msg9630)
> > > ハイパースレッディングが有効かどうか、物理コア数、Bitcoinが使用しているコア数のカラムを追加した方がいいかもしれない。4wayなしだと、仮想コアの半分でハッシュした方がわずかに良い結果が出る。4wayありだと、すべての仮想コアを有効にした方がかなり良いパフォーマンスが出る。ハイパースレッディングをオフにすると、4wayの有無にかかわらず同じくらいのハッシュ量になると思う。
> >
> > おお、何か重要な発見をしたかもしれないな！
> >
> > 以前はハイパースレッディングが役に立たなかったのは、すべての処理が算術論理ユニットで行われ、ハイパースレッドがそれを共有していたためだ。
> >
> > tcatmのSSE2コードは通常のx86命令とSSE2命令の組み合わせのはずで、一方がx86コードを実行している間に、もう一方がSSE2を実行できる。
> >
> > ハイパースレッディングでどれくらい改善する？
> >
> > 数字は？どのCPUだ？
> [Quote from: tcatm on August 16, 2010, 12:43:39 AM](#msg9617)
> > sha256.cppを-O3 -march=amdfamk10でコンパイルすることを提案する（32ビットと64ビットの両方で動作する）。この命令セットをサポートするCPU（AMD Phenom、Intel i5以降）のみが-4wayの恩恵を受け、パフォーマンスが約9%向上する。
>
> -march=amdfam10を試してみてくれ。

動いた。

おかしいな……同じものだと確信できるか？tcatm、amdfam10で試して同じ速度測定結果が得られるか確認してくれ。
