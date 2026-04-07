---
title: "Re: 64ビットBitCoin（Linuxクライアント）の暴走CPU使用"
date: 2010-07-14T18:45:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=299.msg2908#msg2908"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「64ビットBitCoin（Linuxクライアント）の暴走CPU使用」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/185/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "knightmb"
    personSlug: "knightmb"
    date: "2010-07-12T13:39:13.000Z"
---

初めに最低優先度への設定に誤って失敗した後、生成スレッドはブロックを見つけた時にのみ一時的に優先度を変更する。ブロックを見つけた場合は、他の誰かが先に見つけてあなたのブロックを無効にする前に、できるだけ早くブロードキャストしたいはずだ。生成スレッドが高い優先度に変更するのは、数日に1秒未満だけだ。

これについて近いうちに0.3.1リリースがあるはずだ。リリース前に0.3.1で修正すべき他の問題がいくつかある。

<!-- quote: q1 -->
<!-- tone-skip -->
> 余談だが、もう一つのGUIの問題を突き止めた。
<!-- /tone-skip -->
興味深い。Ubuntuのトレイ最小化が非常に不格好なのは知っていたが、CPU固定問題もあるとは知らなかった。この問題を再現できる方は他にいるか？以前はLinuxでこの機能を無効にしていたが、不完全なUIでも機能を完全に失うよりは良いと思われた。Linuxでは再び無効にすべきかもしれないと考えている。
