---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-15T20:39:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9524#msg9524"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック823におけるギャビン・アンドレセンの文脈投稿。msg9531の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
より良い修正ができるまで...ほんの少しのテストの後、これでうまくいくようだ：

```diff
--- a/main.h
+++ b/main.h
@@ -473,8 +473,12 @@ public:

         // Check for negative values
         foreach(const CTxOut& txout, vout)
+ {
             if (txout.nValue < 0)
                 return error("CTransaction::CheckTransaction() : txout.nValue negative");
+ if (txout.nValue > 21000000*COIN)
+ return error("CTransaction::CheckTransaction() : txout.nValue over-max");
+ }

         if (IsCoinBase())
         {
@@ -520,6 +524,8 @@ public:
         int64 nValueOut = 0;
         foreach(const CTxOut& txout, vout)
         {
+ if (txout.nValue > 21000000*COIN)
+ continue; // ignore over-max-value...
             if (txout.nValue < 0)
                 throw runtime_error("CTransaction::GetValueOut() : negative value");
             nValueOut += txout.nValue;
```

不正なブロック以前のブロックチェーンの部分を再ダウンロードする必要がある -- blkindex.datとblk0001.datファイルを削除すること。私はknightmbのブロックチェーンスナップショットから始めた。
