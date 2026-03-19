---
title: "Re: IRCブートストラッピングについて"
date: 2010-06-18T17:28:18.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1619#msg1619"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「IRCブートストラッピングについて」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/128/"
threadId: "bt-on-irc-bootstrapping"
threadPosition: 4
translationStatus: complete
---

SVNバージョンでは、まずIRCを試し、それが失敗した場合はハードコードされたシードノードのリストにフォールバックするようになった。次のリリースまでにシードノードの多くがまだ稼働しているはずだ。シードノードにはアドレスリストを取得するために一時的に接続してすぐに切断するので、接続がしばらくゼロに戻る。その時点では辛抱してほしい。接続が遅いのは初回だけだ。

これにより、TORユーザーは-addnodeを使う必要がなくなり、自動的に接続される。
