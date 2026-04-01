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
> [Quote from: Suggester on February 16, 2010, 02:15:49 AM](#msg361)
> Satoshi、私の最新のCore 2 Duoで50.00 BCを作るのに約20時間のノンストップ作業がかかると計算しました！古いPCでは永遠にかかるでしょう。人々はできるだけ早く何かを「所有」していると感じたいものですが、生成をもっと細かく分割する方法はありますか？例えば、20時間ごとに50 BCを作る代わりに、2時間ごとに5 BCを作るとか？
<!-- /tone-skip -->
それについて考えたが、より小さい増分を実現する実用的な方法がなかった。ブロック生成の頻度は、トランザクションをできるだけ早く確認することとネットワークのレイテンシーの間でバランスが取られている。

アルゴリズムは平均で1時間に6ブロックを目指している。5 BCで1時間に60ブロックだと、ブロック数が10倍になり、初回ブロックダウンロードに10倍の時間がかかる。ブロック間の平均が1分しかなく、ネットワークが大きくなった時のブロードキャストレイテンシーに近すぎるため、いずれにしても機能しないだろう。
