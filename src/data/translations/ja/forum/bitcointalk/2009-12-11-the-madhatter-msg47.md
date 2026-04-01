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
description: "BitcoinTalkトピック12におけるThe Madhatterのコンテキスト投稿。msg50で引用。"
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: complete
---

了解、SFに登録してユーザー名を伝える。もう何年もSFを使っていないので慣れ直す必要がある。これで君たちが現在作業しているブランチ（0.2）にアクセスできるようになるのか？

バックエンドプロセスに必要なオプションについて考えていた。長いコマンドラインスイッチのセットと設定ファイル、どちらが良いだろうか。うーん…

世界中にたくさんのサーバーを持っている。FreeBSDで動作するバックエンドプロセスが完成すれば、常時稼働のシードを動かせる。

ダウンロードパッケージに日次のシードスナップショットを含めれば、ブートストラップが改善されると本当に思う。新規テストインストールで、アプリケーションが0接続/1ブロックのまま動かなくなるケースを見たことがある。debug.logを調べると、IRCサーバー（確かfreenode）が既に接続済みだと主張して、アプリケーションのシーディングを拒否していた。（一例にすぎないが。）

Nagios用のシンプルなネットワークモニタープラグインも有用だと思う。接続クライアントをエミュレートし、バックエンドプロセスから有効なステータスコードを取得できるものだ。アイデアはたくさんある。Smiley

いずれにしても、手伝いたい。時間は十分にあるし、こういうプロジェクトはとてもワクワクする。

参加させてくれてありがとう。Smiley
