---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-08-14T22:06:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9278#msg9278"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/361/"
---

MinGW GCC 4.5.0:
Crypto++ doesn't work, X86_SHA256_HashBlocks() never returns
I only got 4-way working with test.cpp but not when called by BitcoinMiner

MinGW GCC 4.4.1:
Crypto++ works
4-way SIGSEGV

GCC is definitely not aligning __m128i. 

Even if we align our own __m128i variables, the compiler may decide to use a __m128i behind the scenes as a temporary variable.

By making our __m128i variables aligned and changing these inlines to defines, I was able to get it to work on 4.4.1 with -O0 only:
#define Ch(b, c, d)  ((b & c) ^ (~b & d))
#define Maj(b, c, d)  ((b & c) ^ (b & d) ^ (c & d))
#define ROTR(x, n) (_mm_srli_epi32(x, n) | _mm_slli_epi32(x, 32 - n))
#define SHR(x, n)  _mm_srli_epi32(x, n)

But that's with -O0.
