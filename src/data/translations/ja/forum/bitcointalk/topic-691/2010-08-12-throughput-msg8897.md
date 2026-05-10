---
title: "Re: Bitcoin 監視サービス"
date: 2010-08-12T15:28:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=691.msg8897#msg8897"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "BitcoinTalk トピック 691 における throughput の文脈投稿。msg8922 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
間違いなく、各ノードにネットワーク全体の hps メーターが必要だ。

やっとあの記事を見つけた：
http://www.informit.com/articles/article.aspx?p=1237179

ネットワーク分断は、このフォーラムの多くのユーザーが思っているよりも簡単に発生し、頻繁に起きている。
ISP のルーターをハッキングしてその ISP をインターネットから切り離すためにケーブルを切ったり、ルーターをハックする必要は本当にない。
ピアをハッキングする必要もない。必要なのは任意の AS にある BGP ルーターだけだ（そして無警戒な BGP ピアがいくつかあればいい）。
私は持っている 😄

だから、短時間（1〜3時間）で制御されたネットワーク分断について話すことは可能だ。
半分に分断するだけではなく、AS 単位で分断する。1時間か 3〜4時間後にほとんどの ISP は回復するが、
それは営業時間に大きく依存する。週末の攻撃はより長引く効果をもたらす可能性がある。
おそらく将来的にはこれが修正され、どの BGP ルーターも脆弱でなくなるだろうが、
いずれにせよ、インターネットの安定性と持続的な接続性を当てにすべきではない。
