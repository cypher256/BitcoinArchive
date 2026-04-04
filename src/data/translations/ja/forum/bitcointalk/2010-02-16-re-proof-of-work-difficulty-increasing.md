---
title: "Re: Proof-of-work難易度の上昇"
date: 2010-02-16T17:36:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg376#msg376"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Proof-of-work難易度の上昇」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/60/"
threadId: "bt-proof-of-work-difficulty-increasing"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: Suggester on February 16, 2010, 02:15:49 AM](#msg361)
> [追記：後でそれよりもかなり多く生成していたことが分かった。「あとxxブロックで成熟」という概念のせいで気づかなかっただけだった。しかし、難易度が大幅に上がると大きな問題になると今でも思っている。愚かなことですまない Smiley]
>
> サトシ、自分の最新のCore 2 Duoだと50.00を生成するのにノンストップで約20時間かかると計算した！古いPCだと永遠にかかるだろう。人は何かを「所有」していると早く実感したいものだが、生成をもっと細かく分割する方法はないだろうか？例えば、20時間で50を作る代わりに、2時間で5を作るとか？
>
> ブロックサイズの縮小なのか、120ブロックの閾値を12ブロックに減らすのか分からないが、難易度が上がっているので、1年後にはさらに状況が悪くなる（最初の使用可能なコインを手にするまで3週間以上！）と想像でき、できるだけ早く解決策を見つけるべきだ。
<!-- /tone-skip -->
それについて考えたが、より小さい増分を実現する実用的な方法がなかった。ブロック生成の頻度は、トランザクションをできるだけ早く確認することとネットワークのレイテンシーの間でバランスが取られている。

アルゴリズムは平均で1時間に6ブロックを目指している。5 BCで1時間に60ブロックだと、ブロック数が10倍になり、初回ブロックダウンロードに10倍の時間がかかる。ブロック間の平均が1分しかなく、ネットワークが大きくなった時のブロードキャストレイテンシーに近すぎるため、いずれにしても機能しないだろう。
