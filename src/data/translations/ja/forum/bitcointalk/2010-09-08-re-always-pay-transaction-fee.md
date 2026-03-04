---
title: "Re: 常にトランザクション手数料を支払う？"
date: 2010-09-08T17:30:14.000Z
source: bitcointalk
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
threadId: "bt-always-pay-transaction-fee"
threadPosition: 2
translationStatus: complete
---

現在、手数料の支払いは-paytxfeeスイッチで手動制御されている。最近のブロックのサイズを自動的にチェックして手数料を支払うべきか判断させるのは非常に簡単だ。閾値に到達するにはまだほど遠いので、まだ必要ない。いずれにせよ、まず手動制御で状況を見るのは良いアイデアだ。

閾値に到達しても大したことではない。無料トランザクションがブロックに入るまでに時間がかかるだけだ。

74000から78000あたりの4000ブロックの大まかな集計を行った。ブロック報酬トランザクションを除いて：

ブロックあたり平均2トランザクション、1時間あたり17トランザクション、1日あたり400トランザクションだった。

ブロックあたりの平均トランザクションバイト数は428バイト、つまりトランザクションあたり214バイトだった。

現在の閾値はブロックあたり200KB、つまりブロックあたり約1000トランザクションだ。ブロックあたり50KBに下げるべきだと思う。それでもブロックあたりの平均トランザクション数の100倍以上だ。

閾値は将来簡単に変更できる。時が来たら増やすことを決められる。回路遮断器として低く保ち、必要に応じて増やすのは良いアイデアだ。今閾値に到達するなら、ほぼ確実に何らかのフラッドであり実際の使用ではない。閾値を低く保つことで、そのような場合の無駄なディスクスペースの量を制限できる。
