---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-08-14T00:49:18.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9145#msg9145"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/358/"
---

MinGW on Windows has trouble compiling it:

g++ -c -mthreads -O2 -w -Wno-invalid-offsetof -Wformat -g -D__WXDEBUG__ -DWIN32 -D__WXMSW__ -D_WINDOWS -DNOPCH -I"/boost" -I"/db/build_unix" -I"/openssl/include" -I"/wxwidgets/lib/gcc_lib/mswud" -I"/wxwidgets/include" -msse2 -O3 -o obj/sha256.o sha256.cpp

sha256.cpp: In function `long long int __vector__ Ch(long long int __vector__, long long int __vector__, long long int __vector__)':
sha256.cpp:31: internal compiler error: in perform_integral_promotions, at cp/typeck.c:1454
Please submit a full bug report,
with preprocessed source if appropriate.
See <URL:http://www.mingw.org/bugs.shtml> for instructions.
make: *** [obj/sha256.o] Error 1
