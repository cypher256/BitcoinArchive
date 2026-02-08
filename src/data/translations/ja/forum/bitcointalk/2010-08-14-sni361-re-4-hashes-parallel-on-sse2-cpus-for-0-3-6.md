---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-14T22:06:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9278#msg9278"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが各MinGW GCCバージョンでのテスト結果を詳細に報告し、__m128iのアラインメント問題を特定。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/361/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 8
translationStatus: complete
---

MinGW GCC 4.5.0：
Crypto++が動作しない。X86_SHA256_HashBlocks()が返ってこない
4-wayはtest.cppでのみ動作するが、BitcoinMinerから呼び出された時は動作しない

MinGW GCC 4.4.1：
Crypto++は動作する
4-wayはSIGSEGV

GCCは間違いなく__m128iをアラインしていません。

自分の__m128i変数をアラインしても、コンパイラが一時変数として裏で__m128iを使うことを決定する場合があります。

__m128i変数をアラインし、これらのインライン関数をdefineに変更することで、4.4.1の-O0のみで動作させることができました：
#define Ch(b, c, d)  ((b & c) ^ (~b & d))
#define Maj(b, c, d)  ((b & c) ^ (b & d) ^ (c & d))
#define ROTR(x, n) (_mm_srli_epi32(x, n) | _mm_slli_epi32(x, 32 - n))
#define SHR(x, n)  _mm_srli_epi32(x, n)

ただし、それは-O0での話です。
