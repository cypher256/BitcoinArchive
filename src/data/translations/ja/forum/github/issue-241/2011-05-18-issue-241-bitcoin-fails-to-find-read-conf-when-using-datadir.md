---
title: "-datadir引数使用時にbitcoinが.confを見つけられない/読み込めない"
date: 2011-05-18T23:25:56.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/241"
author: "nanotube"
participants:
  - name: "nanotube"
    slug: "nanotube"
description: "nanotubeがbitcoin/bitcoin Issue #241でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

-testnetと-datadir=someotherdirを指定してbitcoinを実行しようとすると、データは期待通りsomeotherdir/testnetに保存される。
しかし、-server（またはbitcoind）を指定して実行しようとすると、someotherdir/testnetにrpcpasswordが存在するにもかかわらず、見つからないと表示される。

Warning: To use the "-server" option, you must set rpcpassword=<password>
in the configuration file: someotherdir/testnet/bitcoin.conf
If the file does not exist, create it with owner-readable-only file permissions.

ファイルはもちろん存在しており、パーミッションも正しい。

.confファイルを通常の~/.bitcoin/testnetにコピーしてみたり、ディレクトリ全体へのシンボリックリンクを作成してみたりしたが、何も効果がなかった。表示を止める唯一の方法は、-datadir引数の使用をやめてデフォルトの場所に保存させることである。

これはバグであり、修正すべきである。:)

なお、これまで-testnetでのみ試しており、この動作が-testnet使用時のみ発生するかどうかは不明である。テストが必要だ。
