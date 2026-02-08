---
title: "128ビット4-way SSE2の自動検出"
date: 2010-09-09T01:04:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1007.msg12262#msg12262"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「128ビット4-way SSE2の自動検出」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/444/"
threadId: "bt-auto-detect-for-128-bit-4-way-sse2"
threadTitle: "Auto-detect for 128-bit 4-way SSE2"
threadPosition: 1
translationStatus: complete
---

SVN rev 150には4-way SSE2を使用するかどうかを自動検出しようとするコードがあります。128ビットSSE2を持つ特定の新しいCPUでのみ高速であり、64ビットSSE2のものでは速くないため、これが必要です。

CPUID命令を使用してCPUブランド、ファミリー、モデル番号、ステッピングを取得します。それは簡単な部分です。モデル番号をどう扱うかが難しい部分です。CPUのファミリー、モデル、ステッピング番号のテーブルを見つけることができませんでした。さまざまなランダムなレポートを参考にするしかありませんでした。

最終的にこうなりました：
Code:  // 128ビットSSE2にはIntel NehalemまたはAMD K10以上が必要
  // Nehalem = i3/i5/i7および一部のXeon
  // K10 = 4コア以上のOpteron、Phenom、Phenom II、Athlon II
  //  Intel Core i5  family 6, model 26 or 30
  //  Intel Core i7  family 6, model 26 or 30
  //  Intel Core i3  family 6, model 37
  //  AMD Phenom    family 16, model 10
  bool fUseSSE2 = ((fIntel && nFamily * 10000 + nModel >=  60026) ||
                   (fAMD   && nFamily * 10000 + nModel >= 160010));

AMD CPUのモデル番号に散発的な不整合があったので、これがすべての対応可能なAMDを検出できるか確信がありません。

間違っている場合は、-4wayまたは-4way=0でオーバーライドできます。

検出結果はdebug.logに出力されます。CPUIDで検索してください。

これはGCCでビルドした場合のみ有効です。
