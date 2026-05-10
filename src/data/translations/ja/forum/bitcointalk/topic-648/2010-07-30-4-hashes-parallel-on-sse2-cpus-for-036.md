---
title: "0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-07-30T12:23:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6722#msg6722"
author: "tcatm"
participants:
  - name: "tcatm"
    slug: "tcatm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "tcatm がスレッドを開始: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
isSatoshi: false
tags: []
translationStatus: complete
---

このパッチは、ベクトル命令を使用して 1 つのコアで 4 つのハッシュを同時に計算するものである。新しいハッシュ関数を旧来のものと照合するテストプログラムが含まれているため、正確性は担保されているはずである。

このパッチは 0.3.6 に対するものである。khash/s が約 115%向上する。

[http://pastebin.com/XN1JDb53](http://pastebin.com/XN1JDb53)
