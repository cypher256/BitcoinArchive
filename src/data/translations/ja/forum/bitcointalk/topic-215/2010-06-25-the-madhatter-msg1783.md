---
title: "Re: BitcoinクライアントがIRCブートストラッピングチャネルからK-Lineされている"
date: 2010-06-25T23:33:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=215.msg1783#msg1783"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック215におけるThe Madhatterの文脈投稿。msg1779の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

俺がアクセスできる大規模な研究クラスタ上で、ソースコードをいじり回していたんだ。何故か分からないが、ノードがFreenodeに対してかなり高速に接続と切断を繰り返していて、結果として俺のノードのほとんどがk-lineされてしまった。Freenodeは荒れ狂って、俺がコネクションを作るそばからノードをブロックし始めた。

これが原因で他の人もk-lineされたのかどうかは、はっきりとは分からない。だが、タイミングは「ピッタリ」だった。

このk-line問題が報告されたのとほぼ同じ頃に、俺はそのバグを発見していた。最終的には、別のネットワーク上で動かしている別のBitcoinクライアントからシードIPを取得するよう、ソースを強制的に書き換えた。
