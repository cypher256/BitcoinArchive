---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-15T03:40:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9359#msg9359"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが test.cpp では動作するが BitcoinMiner からでは SIGSEGV になる問題を報告し、Crypto++の MinGW GCC 4.5.0 用パッチを提供。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/362/"
translationStatus: complete
---

MinGW GCC 4.4.1 と 4.5.0 の両方で、test.cpp では動作するが、BitcoinMiner から呼び出されると SIGSEGV になる。つまり GCC のバージョンの問題ではなく、別の何か、おそらくスタックのアラインメントの運によるものだろう。

Ubuntu 32 ビットの GCC 4.3.3 では問題なく動作している。

MinGW 4.5.0 での Crypto++の問題を見つけた。以下がそのパッチだ：

```diff
--- \old\sha.cpp Mon Jul 26 13:31:11 2010
+++ \new\sha.cpp Sat Aug 14 20:21:08 2010
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
```
