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
description: "BitcoinTalkトピック83におけるBitcoinFXのコンテキスト投稿。msg810の前。"
isSatoshi: false
threadId: "bt-idea-for-file-hosting-and-proxy-services"
tags: []
translationStatus: complete
---

そうだ。組み込みプロキシの実装はオープンソースで、自動化されたbitcoin決済があれば素晴らしい。

Psiphonの情報とリンクを投稿する。プロジェクトがv1からv2に移行したばかりで、実装が大きく異なるからだ。

PsiphonはフリーのWeb検閲回避ツールであり、そのままであるべきだ。しかし、個人的に更新・セキュリティ強化した1.6バージョンを運用しており、一部のユーザーから「象徴的な」寄付を受け付けている。

「Psiphonは、インターネットの検閲に使われるコンテンツフィルタリングシステムを安全にバイパスするために設計されたウェブプロキシだ。Psiphonはトロント大学のCitizen Labによって開発された。

ライセンス：GNU General Public License
ソースコード：http://psiphon.ca/download/psiphon-src-1.6.tar.gz

http://wikipedia.org/wiki/Psiphon

http://psiphon.ca/

https://launchpad.net/psiphon

Psiphonは、使いやすく管理が簡単なウェブベースのプロキシアプリケーションだ。インターネットアクセスに制限のない地域のユーザーが、アクセスが制限された地域の友人、家族、知人に、拒否されたコンテンツへのアクセスを提供できる。

Psiphonの発展に興味がある方は、プロジェクトリーダーにご連絡ください。

注：Psiphon 1.xと2.xシリーズは、基本的に異なるアーキテクチャの異なる製品だ。Psiphon 1.xは、中央管理コンポーネントなしに家庭用PC（MS Windowsベース）で動作するように設計された軽量ウェブプロキシだ。Psiphon 1.xでは、ユーザーが友人にプロキシの実行を依頼し、その友人のインターネット接続を経由してブロックされたサイトにアクセスできる。Psiphon 1.xのソースコードはこちら：https://code.launchpad.net/~psiphon-inc/psiphon/psiphon-1.6

新しいプロジェクトはPsiphon 2.xで、Psiphon Inc.がデプロイする中央管理型ウェブプロキシシステムで、検閲回避サービスを提供する。」

独自のbitcoinスタイルの実装を設計・構築するための参考として素晴らしいソースコードだ。サトシ、「歴史的」になる前に1.6.tar.gzを入手しておくことをお勧めする。1.6バージョンをLinuxでコンパイルするのも今ではそれほど簡単ではない。

1.6 Win32バージョンは元のプロジェクトウェブサイトから削除された。実際、既存のプロキシサービスはWindowsマシンで追加のセキュリティを施して運用している。他で見つからない方や参照用に欲しい方のために、msiとドキュメントを持っている。以下のソースから最新かつ安全に保っている：

SSL - http://www.slproweb.com/products/Win32OpenSSL.html

Visual C++ 2008 Redistributables（msvcpXX.dllとmsvcrXX.dll用）

http://www.sqlite.org/download.html

Windows用プリコンパイル済みバイナリ（sqlite3.dll用）

Javaと一部のFlashサポートは常に問題だが！

「bitcoin」プロキシソフトウェアへの貢献を喜んで行い共有するが、時間と開発経験が限られている。サトシ、別のv1.6スタイルの実装についてPsiphon開発者に直接連絡してみてはどうか？

Torプロジェクもサーバーオペレーター向けの決済/インセンティブシステムを探していると理解している。Smiley

スレッドタイトルを「Re: Idea for file hosting and proxy services」に変更してもらえるだろうか。ありがとう。

よろしく、

BitcoinFX
