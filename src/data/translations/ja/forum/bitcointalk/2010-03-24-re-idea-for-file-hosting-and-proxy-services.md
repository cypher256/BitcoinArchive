---
title: "返信: ファイルホスティングとプロキシサービスのアイデア"
date: 2010-03-24T18:02:55.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=83.msg810#msg810"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ファイルホスティングとプロキシサービスのアイデア」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/97/"
threadId: "bt-idea-for-file-hosting-and-proxy-services"
threadTitle: "Idea for file hosting and proxy services"
threadPosition: 2
translationStatus: complete
---

Mihalism Multi Hostは、人気のあるオープンソースのPHPファイルホスティングサーバーです。

画像ホスティング向けに設計されていますが、ファイルサイズの上限を引き上げ、許可するファイル拡張子を緩和すれば、一般的なファイルアップロードホスティングにも簡単に使えると思います。無料サービスとして合理的に運用するために制限が必要ですが、Bitcoinの支払い機能を組み込めば、制限を緩和できるでしょう。

クライアントサイドのスクリプトや埋め込み防止のような除去すべき余計な仕組みはありません。通常通り機能する標準的なリンクを生成します。

これらの無料ホスティングサイトには入れ替わりがあります。小規模なサイトは無料で画像ホスティングを提供できますが、人気が出始めると、無料の帯域幅を利用するタダ乗りユーザーに圧倒されてしまいます。知名度の高いサイトは、帯域幅コストを賄うために、より積極的に有料化を迫るようになります。これは、必要な価格帯が「無料にするには少し高すぎるが、従来の決済方法でユーザーが手間をかけるには安すぎる」という空白地帯にあるサービスの完璧な例です。0ドルと19.95ドルの間のギャップにあるのです。せいぜい1000人中1人に9.95ドルを支払わせようとするのが精一杯ですが、それでは999/1000のユーザーがタダ乗り扱いされます。画像は他のサイトに埋め込まれ、ホスティングサイトに行かずにダウンロードされるため、広告で支えることも実質的にできません。

このソフトウェアを運用しているサイトの例:
[http://www.imagez.ws/](http://www.imagez.ws/)

フォーラム:
[http://www.mihalism.net/](http://www.mihalism.net/)

ダウンロード:
[http://code.google.com/p/mihalismmh/](http://code.google.com/p/mihalismmh/)

どう思いますか？もし私がこれにBitcoin決済の統合を作ったら、運用してみたい方はいますか？Bitcoinで購入できる初の完全自動化サービスになるかもしれません。無料サービスに対して提供できる利点は、ダウンロードするユーザーにアップロードサイトを訪問させてあれこれ手間を踏ませることなく、大きなファイルの一般的なファイルアップロードホスティングを提供できることです。ファイルへの通常のリンクを直接提供します。
