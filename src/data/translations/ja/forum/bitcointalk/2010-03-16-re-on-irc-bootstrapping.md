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
threadPosition: 1
translationStatus: complete
---

soultcer、Freenodeのスタッフと話してくれてありがとう。現在の規模では問題ないとわかって良かったし、彼らに私たちの存在を知ってもらえた。TORのようなプロジェクトを支援しているので、おそらく私たちにも好意的だろう。歓迎されすぎないようにしたいものだ。もし大きくなりすぎたら、同じ理論で、もうIRCは必要ないほど大きくなっているということなので、退出する。

IRCが必要だったのは、静的IPを持つ人がいなかったからだ。初期にはいくつかの安定した支持者がいたが、全員が数日ごとに変わるプール割り当てのIPを持っていた。IRCは一時的な解決策にすぎない。Bitcoinに組み込まれたaddrシステムが主な解決策だ。

Bitcoinは任意のBitcoinノードからIPリストを取得できる。その意味で、すべてのノードがディレクトリサーバーとして機能している。

現在のバージョンが使われなくなるまでに少なくとも1つはまだ稼働している可能性が十分にある静的IPノードが揃えば、シードリストをプリプログラムできる。

シードリストをどのようにまとめるべきだと思うか？しばらく静的だった現在接続中のIPから作成するのは大丈夫だろうか？

ちなみに、別のディレクトリサーバーソフトウェアを展開して補完したい場合、IRCを提案してもよいだろうか？IRCは良いディレクトリサーバーだ（他の用途もあると聞いている）。誰でも実行できる成熟したIRCサーバー実装が利用可能だ。BitcoinのIRCクライアント実装は既に十分にテストされている。
