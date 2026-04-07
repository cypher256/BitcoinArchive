---
title: "Re: On IRC bootstrapping"
date: 2010-04-30T14:51:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1036#msg1036"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalkトピック84におけるDataWraithの文脈投稿。msg729の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

みんな、こんにちは。

これはバカなアイデアかもしれないし、バカでなかったとしてもこの先数年は実用的ではないかもしれないが、とりあえず投げかけてみることにする：

**マルチキャストはどうだろう？**

IPv6はIPv4よりもマルチキャストのサポートが優れているとされている。Bitcoinのプロトコルを誤解していなければ、ほとんどのメッセージはネットワーク全体にブロードキャストされる必要がある。理論的には、ノードはそうしたメッセージをグローバルなマルチキャストアドレスに送信でき、全員が帯域幅効率の良い形で受信できる。

そうすれば、クライアントはマルチキャストチャンネルを購読するだけでよくなるので、従来の意味でのブートストラップは不要になる。残る「ブロックxyzをくれ」というリクエストは、マルチキャストチャンネルへのメッセージにオプションで「私のアドレスは 2001:db8::42 で、特定のブロックへの直接クエリに答える用意がある」といったフィールドを含めることで処理できる。チャンネルをしばらく聴いていれば、少なくとも新しいブロックは時々そこでアナウンスされるはずなので、そういうパケットが回ってくるはずだ。
