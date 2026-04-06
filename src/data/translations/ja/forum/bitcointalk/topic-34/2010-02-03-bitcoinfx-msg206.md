---
title: "Re: アドレスに関する質問"
date: 2010-02-03T14:57:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=34.msg206#msg206"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalkトピック34におけるBitcoinFXの文脈投稿。msg222の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "sirius-m"
    date: "2010-02-02T03:34:08.000Z"
  - id: "q2"
    person: "BitcoinFX"
    date: "2010-02-02T00:00:20.000Z"
    parent: "q1"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> > ありがとう、それは理解している。ポート8333は24時間稼働のBitcoinマシンに正しくフォワードしてある。😄
> >
> > しかし、同じIPで2台のマシンがBitcoinを動かしていて、どちらもポート8333がフォワードされていない場合はどうなるか？
> >
> > Bitcoinノード (1) 192.168.0.2
> >
> > Bitcoinノード (2) 192.168.0.3
> >
> > 推測だが、サブネットの最初のIPなので192.168.0.2のマシンがbitcoinを受け取ることになるのだろうか？
> 
> 
> ポートがフォワードされていなければ、接続はまったく通りません。
<!-- /tone-skip -->

そうではないのでは？ 同じ静的IPアドレスで2台のマシンを接続し（それぞれ4以上の接続あり）、Bitcoinを生成させたことがある。もちろんポート8333はファイアウォールを通して接続するためにフォワードしている。つまりそういう意味だと思うが。しかし、他のノードへの接続はポート8333をルーター経由で特定のマシン（サブネットIP）にフォワードしなくても行われている。もちろんそれが接続を最大化する最善の方法ではあるが。Bitcoinはトランザクションに必要な他の接続は1つだけだと理解しているが、そうだよな？

元の質問は妥当だったと思う。皆さん、明確にしてくれてありがとう。NewLibertyStandardの言うことが正しいと思う。「確か、送信者が最初に接続した相手のbitcoinアプリケーションに送信されると聞いた記憶がある。」

フォーラムでのコミュニケーションは苦手だ。全員が同じことを言っているのに別の表現で伝えると、議論しにくいことがある！ 😊 

十分なインターネット接続、ルーター、PC機器があるので、マニュアルを読みながら自分で「公式」テストをしに行こう。😄
