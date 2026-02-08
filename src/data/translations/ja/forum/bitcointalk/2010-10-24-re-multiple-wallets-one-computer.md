---
title: "Re: 複数のウォレット、1台のコンピュータ"
date: 2010-10-24T19:17:51.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg18349#msg18349"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「複数のウォレット、1台のコンピュータ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/497/"
threadId: "bt-multiple-wallets-one-computer"
threadTitle: "Multiple Wallets, one computer"
threadPosition: 1
translationStatus: complete
---

このようなものの始まりを作っています。Gavinが説明したものとほとんど同じです。

追加のRPCインターフェース：

move <fromaccount> <toaccount> <amount>
   内部アカウント間の移動。空のアカウント名（""）がデフォルトアカウントになると思います。ユーザーに何かを販売した場合、move "theiraccount" "" 123.45とできます。
   「move」はこれに最適な名前でしょうか？「transfer」はトランザクションの送信と混同しそうなので避けました。

getnewaddressをオーバーロードする代わりに、新しい関数getaccountaddressを考えています：

getaccountaddress <account>
   getnewaddress <account>から割り当てられたアドレスを返します。そのアドレスで何かが受信されるまで同じアドレスを返し続け、受信されると新しいアドレスを割り当てます。（以前投稿したサンプルコードが行っていたことを自動的に行います）

これらのコマンドがあれば、シンプルなケースでは独自のデータベースなしにウェブサイトを実装できるでしょうか？
