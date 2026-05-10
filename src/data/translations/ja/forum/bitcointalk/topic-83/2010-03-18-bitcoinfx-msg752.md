---
title: "Re: ファイルホスティングとプロキシサービスのアイデア"
date: 2010-03-18T14:36:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=83.msg752#msg752"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalk トピック 83 における BitcoinFX の文脈投稿。msg810 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

そうだ。組み込みプロキシの実装はオープンソースで、自動化された bitcoin 決済があれば素晴らしい。

Psiphon の情報とリンクを投稿する。プロジェクトが v1 から v2 に移行したばかりで、実装が大きく異なるからだ。

Psiphon はフリーの Web 検閲回避ツールであり、そのままであるべきだ。しかし、個人的に更新・セキュリティ強化した 1.6 バージョンを運用しており、一部のユーザーから「象徴的な」寄付を受け付けている。

「Psiphon は、インターネットの検閲に使われるコンテンツフィルターリングシステムを安全にバイパスするために設計されたウェブプロキシだ。Psiphon はトロント大学の Citizen Lab によって開発された。

ライセンス：GNU General Public License
ソースコード：http://psiphon.ca/download/psiphon-src-1.6.tar.gz

http://wikipedia.org/wiki/Psiphon

http://psiphon.ca/

https://launchpad.net/psiphon

Psiphon は、使いやすく管理が簡単なウェブベースのプロキシアプリケーションだ。インターネットアクセスに制限のない地域のユーザーが、アクセスが制限された地域の友人、家族、知人に、拒否されたコンテンツへのアクセスを提供できる。

Psiphon の発展に興味がある方は、プロジェクトリーダーにご連絡ください。

注：Psiphon 1.x と 2.x シリーズは、基本的に異なるアーキテクチャの異なる製品だ。Psiphon 1.x は、中央管理コンポーネントなしに家庭用 PC（MS Windows ベース）で動作するように設計された軽量ウェブプロキシだ。Psiphon 1.x では、ユーザーが友人にプロキシの実行を依頼し、その友人のインターネット接続を経由してブロックされたサイトにアクセスできる。Psiphon 1.x のソースコードはこちら：https://code.launchpad.net/~psiphon-inc/psiphon/psiphon-1.6

新しいプロジェクトは Psiphon 2.x で、Psiphon Inc.がデプロイする中央管理型ウェブプロキシシステムで、検閲回避サービスを提供する。」

独自の bitcoin スタイルの実装を設計・構築するための参考として素晴らしいソースコードだ。サトシ、「歴史的」になる前に 1.6.tar.gz を入手しておくことをお勧めする。1.6 バージョンを Linux でコンパイルするのも今ではそれほど簡単ではない。

1.6 Win32 バージョンは元のプロジェクトウェブサイトから削除された。実際、既存のプロキシサービスは Windows マシンで追加のセキュリティを施して運用している。他で見つからない方や参照用に欲しい方のために、msi とドキュメントを持っている。以下のソースから最新かつ安全に保っている：

SSL - http://www.slproweb.com/products/Win32OpenSSL.html

Visual C++ 2008 Redistributables（msvcpXX.dll と msvcrXX.dll 用）

http://www.sqlite.org/download.html

Windows 用プリコンパイル済みバイナリ（sqlite3.dll 用）

Java と一部の Flash サポートは常に問題だが！

「bitcoin」プロキシソフトウェアへの貢献を喜んで行い共有するが、時間と開発経験が限られている。サトシ、別の v1.6 スタイルの実装について Psiphon 開発者に直接連絡してみてはどうか？

Tor プロジェクもサーバーオペレーター向けの決済/インセンティブシステムを探していると理解している。😊

スレッドタイトルを「Re: Idea for file hosting and proxy services」に変更してもらえるだろうか。ありがとう。

よろしく、

BitcoinFX
