---
title: "Re: Proof-of-work 難易度の上昇"
date: 2010-02-17T01:28:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg381#msg381"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
description: "BitcoinTalk トピック 43 における Suggester の文脈投稿。msg376 の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Sabunir"
    personSlug: "sabunir"
    date: "2010-02-16T05:18:30.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-sabunir-msg368"
  - id: "q2"
    person: "theymos"
    personSlug: "michael-marquardt"
    date: "2010-02-16T06:01:51.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-theymos-msg371"
translationStatus: complete
---

<!-- quote: q1 -->
> 約14時間連続でオンラインを維持できなければ（衛星接続では非常に難しい！）、実際には何も得られない。

サトシに確認してほしいのだが、セッションが中断された場合、マシンがそれまで行っていた計算は引き継がれるのか、それとも少なくとも 1 ブロックを生成する前に切断したらすべて最初からやり直しなのか？ 引き継がれるなら、ブロック完成までの残り％を示す小さなメーターを追加すると、人々に希望を与えられるかもしれない（実際、計算が切断後に引き継がれるかどうかにかかわらず、それは便利な追加になるだろう！）

<!-- quote: q2 -->
> 今日、Pentium プロセッサーで 5 ブロック生成した。うち 2 つは互いに 3分以内だった。

なるほど、俺はそもそも Bitcoin の仕組みを理解していなかったと気づいた。ブロックは、コインを生成しているかどうかにかかわらず、いずれにせよ生成される。生成の平均量は俺が以前観察した通り（20時間で 120個、つまり 1時間 6個）だった。これは CPU の能力とはまったく関係なく、実用上は一定だ。CPU 能力は、生成される「トランザクション」と「xx ブロックで成熟する」量を決める。頭が少し大きくなった気分だ 😊

これはつまり、theymos、君の 3分間隔の観察はおそらく偶然か誤差だったということだ！
