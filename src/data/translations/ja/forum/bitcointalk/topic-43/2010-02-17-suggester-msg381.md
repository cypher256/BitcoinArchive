---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-17T01:28:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg381#msg381"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
description: "BitcoinTalkトピック43におけるSuggesterの文脈投稿。msg376の後。"
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
    personSlug: "theymos"
    date: "2010-02-16T06:01:51.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-theymos-msg371"
translationStatus: complete
---

<!-- quote: q1 -->
> 約14時間連続でオンラインを維持できなければ（衛星接続では非常に難しい！）、実際には何も得られない。

サトシに確認してほしいのだが、セッションが中断された場合、マシンがそれまで行っていた計算は引き継がれるのか、それとも少なくとも1ブロックを生成する前に切断したらすべて最初からやり直しなのか？ 引き継がれるなら、ブロック完成までの残り％を示す小さなメーターを追加すると、人々に希望を与えられるかもしれない（実際、計算が切断後に引き継がれるかどうかにかかわらず、それは便利な追加になるだろう！）

<!-- quote: q2 -->
> 今日Pentiumプロセッサで5ブロック生成した。そのうち2つは3分以内だった。

なるほど、俺はそもそもBitcoinの仕組みを理解していなかったと気づいた。ブロックは、コインを生成しているかどうかにかかわらず、いずれにせよ生成される。生成の平均量は俺が以前観察した通り（20時間で120個、つまり1時間6個）だった。これはCPUの能力とはまったく関係なく、実用上は一定だ。CPU能力は、生成される「トランザクション」と「xxブロックで成熟する」量を決める。頭が少し大きくなった気分だ 😊

これはつまり、theymos、君の3分間隔の観察はおそらく偶然か誤差だったということだ！
