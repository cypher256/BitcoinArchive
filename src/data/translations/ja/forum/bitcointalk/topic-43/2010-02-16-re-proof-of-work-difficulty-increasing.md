---
title: "Re: Proof-of-work 難易度の上昇"
date: 2010-02-16T17:36:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg376#msg376"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Proof-of-work 難易度の上昇」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/60/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Suggester"
    personSlug: "suggester"
    date: "2010-02-16T02:15:49.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-suggester-msg361"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> サトシ、自分の最新の Core 2 Duo だと 50.00 を生成するのに休みなく約 20時間かかると計算した！古い PC だと永遠にかかるだろう。人は何かを「所有」していると早く実感したいものだが、生成をもっと細かく分割する方法はないだろうか？例えば、20時間で 50 を作る代わりに、2時間で 5 を作るとか？
<!-- /tone-skip -->
それについて考えたが、より小さい増分を実現する実用的な方法がなかった。ブロック生成の頻度は、トランザクションをできるだけ早く確認することとネットワークのレイテンシーの間でバランスが取られている。

アルゴリズムは平均で 1時間に 6 ブロックを目指している。5 BC で 1時間に 60 ブロックだと、ブロック数が 10倍になり、初回ブロックダウンロードに 10倍の時間がかかる。ブロック間の平均が 1分しかなく、ネットワークが大きくなった時のブロードキャストレイテンシーに近すぎるため、いずれにしても機能しないだろう。
