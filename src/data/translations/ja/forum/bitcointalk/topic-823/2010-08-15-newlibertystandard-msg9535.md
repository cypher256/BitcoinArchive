---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T21:15:18.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9535#msg9535"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック823におけるNewLibertyStandardの文脈投稿。msg9531の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-08-15T21:10:33.000Z"
translationStatus: complete
---

<!-- quote: q1 -->
> 俺としては問題なさそうだ。
> 
> 起動時に不正なブロックのハッシュをチェックする処理をハードコードして、それがbest-blockチェーン上にあれば、そのブロックと後続のブロックをorphan化することは簡単にできるだろうか？
> これを修正するためにチェーンの全部または大部分を再ダウンロードしなければならないのは辛い……

あるいは全ブロックの簡易な再検証だけでもいい。なにしろ以前の5倍速くなっているのだから。 😉
