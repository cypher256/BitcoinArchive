---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-15T21:10:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9534#msg9534"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック823におけるギャビン・アンドレセンの文脈投稿。msg9530の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

俺としては問題なさそうだ。

起動時に不正なブロックのハッシュをチェックする処理をハードコードして、それがbest-blockチェーン上にあれば、そのブロックと後続のブロックをorphan化することは簡単にできるだろうか？
これを修正するためにチェーンの全部または大部分を再ダウンロードしなければならないのは辛い……
