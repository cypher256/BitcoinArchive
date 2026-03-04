---
title: "Re: Linux 64ビット用バージョン0.3.8.1アップデート"
date: 2010-08-09T20:55:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8422#msg8422"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがSSE2なしでも生成オフで動作可能であることを確認し、32ビットビルドでSSE2を無効にするコード変更を提案。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/335/"
threadId: "bt-version-0-3-8-1-update-for-linux-64-bit"
threadPosition: 2
translationStatus: complete
---

良い指摘だ。SSE2がなくても生成をオフにすれば動作できるはずだ。

cryptopp/config.hの先頭に以下を追加するのはどうだろうか：

#if !defined(_M_X64) && !defined(__x86_64__)
#define CRYPTOPP_DISABLE_SSE2  1
#endif

これにより32ビットビルドでSSE2が無効になる。（少なくともGCCまたはMSVCでは）
