---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-14T04:22:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9159#msg9159"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがthashのアラインメントを提案し、MinGW GCC 3.4.5がおそらく問題の原因であることを特定。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/359/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
translationStatus: complete
---

まだであれば、thashのアラインを試してみてほしい。効果があるかもしれない。損にはならない。

[Quote from: tcatm on August 14, 2010, 12:53:07 AM](#msg9147)
> [Quote from: satoshi on August 14, 2010, 12:49:18 AM](#msg9145)
> > Windows上のMinGWでコンパイルに問題があります：
> >
> > g++ -c -mthreads -O2 -w -Wno-invalid-offsetof -Wformat -g -D__WXDEBUG__ -DWIN32 -D__WXMSW__ -D_WINDOWS -DNOPCH -I"/boost" -I"/db/build_unix" -I"/openssl/include" -I"/wxwidgets/lib/gcc_lib/mswud" -I"/wxwidgets/include" -msse2 -O3 -o obj/sha256.o sha256.cpp
> >
> > sha256.cpp: In function `long long int __vector__ Ch(long long int __vector__, long long int __vector__, long long int __vector__)':
> > sha256.cpp:31: internal compiler error: in perform_integral_promotions, at cp/typeck.c:1454
> > Please submit a full bug report,
> > with preprocessed source if appropriate.
> > See <URL:http://www.mingw.org/bugs.shtml> for instructions.
> > make: *** [obj/sha256.o] Error 1
>
> ツリーオプティマイザーでコンパイラのバグを引き起こしているようだ。-O0でコンパイルしてみてくれないか？

-O0でも効果なし、同じエラーだ。

MinGWはGCC 3.4.5だ。おそらくそれが問題だ。

新しいバージョンのMinGWを入手できるか試してみる。
