---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-15T03:40:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9359#msg9359"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがtest.cppでは動作するがBitcoinMinerからではSIGSEGVになる問題を報告し、Crypto++のMinGW GCC 4.5.0用パッチを提供。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/362/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 9
translationStatus: complete
---

MinGW GCC 4.4.1と4.5.0の両方で、test.cppでは動作しますが、BitcoinMinerから呼び出されるとSIGSEGVになります。つまりGCCのバージョンの問題ではなく、別の何か、おそらくスタックのアラインメントの運によるものでしょう。

Ubuntu 32ビットのGCC 4.3.3では問題なく動作しています。

MinGW 4.5.0でのCrypto++の問題を見つけました。以下がそのパッチです：
Code:--- \old\sha.cpp Mon Jul 26 13:31:11 2010
+++
ew\sha.cpp Sat Aug 14 20:21:08 2010
@@ -336,7 +336,7 @@
  ROUND(14, 0, eax, ecx, edi, edx)
  ROUND(15, 0, ecx, eax, edx, edi)

- ASL(1)
+    ASL(label1)   // Bitcoin: MinGW GCC 4.5用修正
  AS2(add WORD_REG(si), 4*16)
  ROUND(0, 1, eax, ecx, edi, edx)
  ROUND(1, 1, ecx, eax, edx, edi)
@@ -355,7 +355,7 @@
  ROUND(14, 1, eax, ecx, edi, edx)
  ROUND(15, 1, ecx, eax, edx, edi)
  AS2( cmp  WORD_REG(si), K_END)
- ASJ( jne, 1, b)
+    ASJ(    jne,    label1,  )   // Bitcoin: MinGW GCC 4.5用修正

  AS2( mov  WORD_REG(dx), DATA_SAVE)
  AS2( add  WORD_REG(dx), 64)
