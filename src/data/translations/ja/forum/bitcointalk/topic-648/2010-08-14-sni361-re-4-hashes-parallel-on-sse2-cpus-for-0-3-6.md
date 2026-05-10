---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-14T22:06:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9278#msg9278"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが各 MinGW GCC バージョンでのテスト結果を詳細に報告し、__m128i のアラインメント問題を特定。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/361/"
translationStatus: complete
---

MinGW GCC 4.5.0：
Crypto++が動作しない。X86_SHA256_HashBlocks()が返ってこない
4-way は test.cpp でのみ動作するが、BitcoinMiner から呼び出された時は動作しない

MinGW GCC 4.4.1：
Crypto++は動作する
4-way は SIGSEGV

GCC は間違いなく__m128i をアラインしていない。

自分の__m128i 変数をアラインしても、コンパイラーが一時変数として裏で__m128i を使うことを決定する場合がある。

__m128i 変数をアラインし、これらのインライン関数を define に変更することで、4.4.1 の-O0 のみで動作させることができた：
#define Ch(b, c, d)  ((b & c) ^ (~b & d))
#define Maj(b, c, d)  ((b & c) ^ (b & d) ^ (c & d))
#define ROTR(x, n) (_mm_srli_epi32(x, n) | _mm_slli_epi32(x, 32 - n))
#define SHR(x, n)  _mm_srli_epi32(x, n)

ただし、それは-O0 での話だ。
