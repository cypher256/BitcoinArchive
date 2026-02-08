---
title: "Re: Tor接続が安定しない、多くのシードノードがオフライン"
date: 2010-10-06T17:36:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1375.msg15682#msg15682"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Tor接続が安定しない、多くのシードノードがオフライン」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/488/"
translationStatus: complete
---

逆引きルックアップができない出口ノードに当たっただけかもしれません。

IRCサーバーの応答を見ると、そのためにあなたを切断しているようには見えません。その後にIRC SENDING: NICKが来るはずですが、来ないのでタイムアウトしています。

問題がわかりました。IRCコードはサーバーがNICKの受信準備ができたかどうかを確認するためにさまざまなフレーズを探していますが、その特定のフレーズを探していません。修正します。

NICKを送信する前にサーバーのホスト名検索の完了を待つことが本当に必要かどうかはわかりません。

TORで初めて接続するのに、シードノードを使わなければならない状態でどのくらい時間がかかりましたか？
