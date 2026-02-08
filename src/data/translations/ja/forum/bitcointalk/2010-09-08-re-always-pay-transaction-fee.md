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
threadTitle: "Always pay transaction fee?"
threadPosition: 2
translationStatus: complete
---

現在、手数料の支払いは-paytxfeeスイッチで手動制御されています。最近のブロックのサイズを自動的にチェックして手数料を支払うべきか判断させるのは非常に簡単です。閾値に到達するにはまだほど遠いので、まだ必要ありません。いずれにせよ、まず手動制御で状況を見るのは良いアイデアです。

閾値に到達しても大したことではありません。無料トランザクションがブロックに入るまでに時間がかかるだけです。

74000から78000あたりの4000ブロックの大まかな集計を行いました。ブロック報酬トランザクションを除いて：

ブロックあたり平均2トランザクション、1時間あたり17トランザクション、1日あたり400トランザクションでした。

ブロックあたりの平均トランザクションバイト数は428バイト、つまりトランザクションあたり214バイトでした。

現在の閾値はブロックあたり200KB、つまりブロックあたり約1000トランザクションです。ブロックあたり50KBに下げるべきだと思います。それでもブロックあたりの平均トランザクション数の100倍以上です。

閾値は将来簡単に変更できます。時が来たら増やすことを決められます。回路遮断器として低く保ち、必要に応じて増やすのは良いアイデアです。今閾値に到達するなら、ほぼ確実に何らかのフラッドであり実際の使用ではありません。閾値を低く保つことで、そのような場合の無駄なディスクスペースの量を制限できます。
