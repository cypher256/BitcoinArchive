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
description: "BitcoinTalkトピック83におけるBitcoinFXの文脈投稿。msg810の前。"
isSatoshi: false
threadId: "bt-idea-for-file-hosting-and-proxy-services"
tags: []
translationStatus: complete
---

そうだ。構築されたプロキシ実装はオープンソースにすべきで、自動化されたBitcoin支払いは素晴らしいだろう。

Psiphonの情報とリンクを投稿する。プロジェクトがちょうどv1からv2に移行したところで、実装は大きく異なる。

Psiphonは無料の「検閲回避」ツールであり、そのままであるべきだ。しかし、個人的に更新・セキュリティ強化した1.6バージョンをプライベートに運用しており、一部のユーザーから「形式的な」寄付を受け付けている。

「Psiphonは、インターネットを検閲するために使用されるコンテンツフィルタリングシステムを安全に回避するために設計されたウェブプロキシです。PsiphonはトロントoloColor 大学のCitizen Labによって開発されました。

License: GNU General Public License
Source code: http://psiphon.ca/download/psiphon-src-1.6.tar.gz

http://wikipedia.org/wiki/Psiphon

http://psiphon.ca/

https://launchpad.net/psiphon

Psiphonは、ユーザーフレンドリーで管理が簡単なウェブベースのプロキシアプリケーションです。制限のないインターネットアクセスを持つ地域のユーザーが、アクセスが制限された地域の友人、家族、関係者に拒否されたコンテンツへのアクセスを提供できるようにします。

Psiphonを前進させることに興味がある方は、プロジェクトリーダーにお問い合わせください。

注：Psiphon 1.xと2.xシリーズは本質的に異なるアーキテクチャの異なる製品です。Psiphon 1.xは、中央管理コンポーネントなしで家庭のPC（MS Windowsベース）上で実行されるように設計された軽量ウェブプロキシです。Psiphon 1.xでは、ユーザーが友人にプロキシの実行を依頼し、友人のインターネット接続を介してブロックされたサイトにアクセスできます。Psiphon 1.xのソースコードはこちら：https://code.launchpad.net/~psiphon-inc/psiphon/psiphon-1.6。

新しいプロジェクトはPsiphon 2.xで、検閲回避サービスを提供するためにPsiphon Inc.がデプロイする中央管理型ウェブプロキシシステムです。」

独自のBitcoinスタイルの実装を設計・構築するための参考として素晴らしいソースコードだ。「歴史的」になる前にサトシ、参考用に1.6.tar.gzを入手しておくことをお勧めする。Linux上で1.6バージョンをコンパイルするのももう簡単ではない。

1.6 Win32バージョンは元のプロジェクトウェブサイトから削除された。実際には追加のセキュリティを施したWindowsマシンで既存のプロキシサービスを運用している。他で見つけられない場合や参考にしたい場合は、msiとドキュメントがある。以下のソースから最新の状態を維持しセキュアに保っている：

SSL - http://www.slproweb.com/products/Win32OpenSSL.html

Visual C++ 2008 Redistributables（msvcpXX.dllとmsvcrXX.dll用）

http://www.sqlite.org/download.html

Precompiled Binaries For Windows（sqlite3.dll用）

ただし、Javaと一部のFlashサポートは常に問題だ！

「Bitcoin」プロキシソフトウェアへの貢献を喜んで行い共有するが、自分自身の時間と開発経験は限られている。サトシ、別のv1.6スタイルの実装についてPsiphon開発者に直接連絡してみてはどうか？

Torプロジェクトもサーバーオペレーター向けの支払い/インセンティブシステムを探していると聞いている。Smiley

スレッドタイトルを「Re: Idea for file hosting and proxy services」に変更してもらえないだろうか。ありがとう。

よろしく、

BitcoinFX
