---
title: "Re: IRCブートストラッピングについて"
date: 2010-03-16T19:48:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg729#msg729"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「IRCブートストラッピングについて」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/92/"
threadId: "bt-on-irc-bootstrapping"
threadTitle: "On IRC bootstrapping"
threadPosition: 1
translationStatus: complete
---

soultcer、Freenodeのスタッフと話してくれてありがとうございます。現在の規模では問題ないとわかって良かったですし、彼らに私たちの存在を知ってもらえました。TORのようなプロジェクトを支援しているので、おそらく私たちにも好意的でしょう。歓迎されすぎないようにしたいものです。もし大きくなりすぎたら、同じ理論で、もうIRCは必要ないほど大きくなっているということなので、退出します。

IRCが必要だったのは、静的IPを持つ人がいなかったからです。初期にはいくつかの安定した支持者がいましたが、全員が数日ごとに変わるプール割り当てのIPを持っていました。IRCは一時的な解決策にすぎません。Bitcoinに組み込まれたaddrシステムが主な解決策です。

Bitcoinは任意のBitcoinノードからIPリストを取得できます。その意味で、すべてのノードがディレクトリサーバーとして機能しています。

現在のバージョンが使われなくなるまでに少なくとも1つはまだ稼働している可能性が十分にある静的IPノードが揃えば、シードリストをプリプログラムできます。

シードリストをどのようにまとめるべきだと思いますか？しばらく静的だった現在接続中のIPから作成するのは大丈夫でしょうか？

ちなみに、別のディレクトリサーバーソフトウェアを展開して補完したい場合、IRCを提案してもよいでしょうか？IRCは良いディレクトリサーバーです（他の用途もあると聞いています）。誰でも実行できる成熟したIRCサーバー実装が利用可能です。BitcoinのIRCクライアント実装は既に十分にテストされています。
