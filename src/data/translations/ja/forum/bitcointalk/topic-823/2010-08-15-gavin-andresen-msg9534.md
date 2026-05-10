---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-15T21:10:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9534#msg9534"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 823 におけるギャビン・アンドレセンの文脈投稿。msg9530 の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

俺としては問題なさそうだ。

起動時に不正なブロックのハッシュをチェックする処理をハードコードして、それが best-block チェーン上にあれば、そのブロックと後続のブロックを orphan 化することは簡単にできるだろうか？
これを修正するためにチェーンの全部または大部分を再ダウンロードしなければならないのは辛い……
