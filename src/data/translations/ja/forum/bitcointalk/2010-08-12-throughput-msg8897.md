---
title: "Re: Bitcoin監視サービス"
date: 2010-08-12T15:28:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=691.msg8897#msg8897"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "BitcoinTalkトピック691におけるthroughputのコンテキスト投稿。msg8922の前。"
isSatoshi: false
threadId: "bt-bitcoin-watchdog-service"
tags: []
translationStatus: complete
---

間違いなく、すべてのノードにネットワーク全体のハッシュ/秒メーターが必要だ。

ようやくあの記事を見つけた：
http://www.informit.com/articles/article.aspx?p=1237179

ネットワークの分裂は、このフォーラムの多くのユーザーが考えるよりも簡単に発生し、より頻繁に起こる。
ケーブルを切断したり、ISPのルーターにハッキングしてそのISPをインターネットから切り離す必要はない。
ピアをハッキングする必要もない。必要なのは任意のASにあるBGPルーターだけだ（そして警戒心のないBGPピアがいれば）。
私は持っている :D

つまり、短時間（1-3時間）の制御されたネットワーク分裂について語ることは可能だ。
半分に分裂するだけでなく、AS単位で分裂する。1-3、4時間後にはほとんどのISPが復旧するが、
それは営業時間に大きく依存する。週末の攻撃はより長引く効果を持つかもしれない。
将来的にはこれが修正されBGPルーターが脆弱でなくなるかもしれないが、
いずれにせよ、インターネットの安定性と持続的な接続性を当てにすべきではない。
