---
title: "128 ビット 4-way SSE2 の自動検出"
date: 2010-09-09T01:04:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1007.msg12262#msg12262"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「128 ビット 4-way SSE2 の自動検出」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/444/"
translationStatus: complete
---

SVN rev 150 には 4-way SSE2 を使用するかどうかを自動検出しようとするコードがある。128 ビット SSE2 を持つ特定の新しい CPU でのみ高速であり、64 ビット SSE2 のものでは速くないため、これが必要だ。

CPUID 命令を使用して CPU ブランド、ファミリー、モデル番号、ステッピングを取得する。それは簡単な部分だ。モデル番号をどう扱うかが難しい部分だ。CPU のファミリー、モデル、ステッピング番号のテーブルを見つけることができなかった。さまざまなランダムなレポートを参考にするしかなかった。

最終的にこうなった：

```cpp
  // 128ビットSSE2にはIntel NehalemまたはAMD K10以上が必要
  // Nehalem = i3/i5/i7および一部のXeon
  // K10 = 4コア以上のOpteron、Phenom、Phenom II、Athlon II
  //  Intel Core i5  family 6, model 26 or 30
  //  Intel Core i7  family 6, model 26 or 30
  //  Intel Core i3  family 6, model 37
  //  AMD Phenom    family 16, model 10
  bool fUseSSE2 = ((fIntel && nFamily * 10000 + nModel >=  60026) ||
                   (fAMD   && nFamily * 10000 + nModel >= 160010));
```

AMD CPU のモデル番号に散発的な不整合があったので、これがすべての対応可能な AMD を検出できるか確信がない。

間違っている場合は、-4way または-4way=0 でオーバーライドできる。

検出結果は debug.log に出力される。CPUID で検索してくれ。

これは GCC でビルドした場合のみ有効だ。
