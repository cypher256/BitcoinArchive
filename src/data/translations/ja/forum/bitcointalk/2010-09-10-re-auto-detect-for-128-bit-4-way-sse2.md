---
title: "Re: 128ビット4-way SSE2の自動検出"
date: 2010-09-10T18:11:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1007.msg12372#msg12372"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「128ビット4-way SSE2の自動検出」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/448/"
threadId: "bt-auto-detect-for-128-bit-4-way-sse2"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: teknohog on September 09, 2010, 07:32:05 PM](#msg12336)
> CallCPUID関数にx86アセンブラが含まれているため、他のアーキテクチャでビルドが壊れる。main.cppの2770行目を
> #if defined(__GNUC__) && defined(CRYPTOPP_X86_ASM_AVAILABLE)
> に変更して、少なくともARMで再びコンパイルできるようにした。
>
> #if defined(__GNUC__) && defined(CRYPTOPP_X86_ASM_AVAILABLE)
>
> 少なくともARMで再びコンパイルできるようになりました。
<!-- /tone-skip -->
SVN rev 152に追加した。
