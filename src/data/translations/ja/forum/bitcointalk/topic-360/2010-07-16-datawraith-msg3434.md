---
title: "Re: Hash()関数は安全ではない"
date: 2010-07-16T11:27:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=360.msg3434#msg3434"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalk トピック 360 における DataWraith の文脈投稿。msg3520 の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "Some Mouse"
    personSlug: "some-mouse"
    date: "2010-07-15T15:13:52.000Z"
    sourceEntryId: "forum/bitcointalk/topic-360/2010-07-16-some-mouse-msg3334"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 可逆計算技術はエントロピー限界を「かいくぐる」。つまり、現在のコンピューターで可能なものをはるかに超える実効速度に達することができる。事実上、非決定論的な演算が可能になるのだ。
<!-- /tone-skip -->

ちょっと待って？ 可逆計算は消費エネルギーが少ないだけだと思っていた。非決定性はどこから来るんだ？

それと、ハッシュの安全性について：Wikipedia によると SHA-256 への攻撃にはまだ 2^250 程度の操作が必要だ。それに、ここで大きな思い違いをしていなければ、ハッシュターゲットは約 10分ごとに変わるのではないか？ それは攻撃者を混乱させないだろうか？ SHA をより速く破ることが可能になったとしても、システムが難易度を上げることで調整するのではないか？
