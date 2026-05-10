---
title: "Re: 常にトランザクション手数料を支払う？"
date: 2010-09-08T17:30:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=994.msg12237#msg12237"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「常にトランザクション手数料を支払う？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/441/"
translationStatus: complete
---

現在、手数料の支払いは-paytxfee スイッチで手動制御されている。最近のブロックのサイズを自動的にチェックして手数料を支払うべきか判断させるのは非常に簡単だ。閾値に到達するにはまだほど遠いので、まだ必要ない。いずれにせよ、まず手動制御で状況を見るのは良いアイデアだ。

閾値に到達しても大したことではない。無料トランザクションがブロックに入るまでに時間がかかるだけだ。

74000 から 78000 あたりの 4000 ブロックの大まかな集計を行った。ブロック報酬トランザクションを除いて：

ブロックあたり平均 2 トランザクション、1時間あたり 17 トランザクション、1日あたり 400 トランザクションだった。

ブロックあたりの平均トランザクションバイト数は 428 バイト、つまりトランザクションあたり 214 バイトだった。

現在の閾値はブロックあたり 200KB、つまりブロックあたり約 1000 トランザクションだ。ブロックあたり 50KB に下げるべきだと思う。それでもブロックあたりの平均トランザクション数の 100倍以上だ。

閾値は将来簡単に変更できる。時が来たら増やすことを決められる。回路遮断器として低く保ち、必要に応じて増やすのは良いアイデアだ。今閾値に到達するなら、ほぼ確実に何らかのフラッドであり実際の使用ではない。閾値を低く保つことで、そのような場合の無駄なディスクスペースの量を制限できる。
