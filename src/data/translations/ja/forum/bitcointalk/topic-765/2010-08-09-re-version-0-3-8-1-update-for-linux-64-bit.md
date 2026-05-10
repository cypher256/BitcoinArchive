---
title: "Re: Linux 64 ビット用バージョン 0.3.8.1 アップデート"
date: 2010-08-09T20:55:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8422#msg8422"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが SSE2 なしでも生成オフで動作可能であることを確認し、32 ビットビルドで SSE2 を無効にするコード変更を提案。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/335/"
translationStatus: complete
---

良い指摘だ。SSE2 がなくても生成をオフにすれば動作できるはずだ。

cryptopp/config.h の先頭に以下を追加するのはどうだろうか：

#if !defined(_M_X64) && !defined(__x86_64__)
#define CRYPTOPP_DISABLE_SSE2  1
#endif

これにより 32 ビットビルドで SSE2 が無効になる。（少なくとも GCC または MSVC では）
