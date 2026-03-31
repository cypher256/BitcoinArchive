---
title: "Re: いくつかの提案"
date: 2009-12-11T04:59:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg47#msg47"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック12におけるThe Madhatterの文脈投稿。msg50で引用。"
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: complete
---

了解、SFに登録してユーザー名を伝える。SFは何年も使っていないので慣れ直す必要がある。これで君たちが現在作業しているブランチ（0.2）にアクセスできるようになるのか？

バックエンドプロセスに必要なオプションについて考えていた。長いコマンドラインスイッチの列と設定ファイル、どちらがいいだろうか。ふむ…

世界中にサーバーがたくさんある。FreeBSDで動作するバックエンドプロセスができれば、常時稼働のシードを走らせることができる。

ダウンロードパッケージに日次のシードスナップショットを含めることで、ブートストラップが改善されると本当に思う。新規テストインストールでアプリケーションが0接続 / 1ブロックのまま止まるケースを見たことがある。debug.logを調べると、IRCサーバー（freenode だと思う）がすでに接続済みだと主張してアプリケーションのシーディングを拒否していた。（一例に過ぎないが）。

Nagios用のシンプルなネットワークモニタープラグインも役立つと思う。接続クライアントをエミュレートし、バックエンドプロセスから有効なステータスコードを取得できるようなもの。アイデアはたくさんある。Smiley

いずれにせよ、手伝いたい。時間はたっぷりあるし、こういうプロジェクトはとてもワクワクする。

参加させてくれてありがとう。Smiley
