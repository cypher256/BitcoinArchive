---
title: "-datadir 引数使用時に bitcoin が.conf を見つけられない/読み込めない"
date: 2011-05-18T23:25:56.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/241"
author: "nanotube"
participants:
  - name: "nanotube"
    slug: "nanotube"
description: "nanotube が bitcoin/bitcoin Issue #241 でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "issue"
translationStatus: complete
---

-testnet と-datadir=someotherdir を指定して bitcoin を実行しようとすると、データは期待通り someotherdir/testnet に保存される。
しかし、-server（または bitcoind）を指定して実行しようとすると、someotherdir/testnet に rpcpassword が存在するにもかかわらず、見つからないと表示される。

Warning: To use the "-server" option, you must set rpcpassword=<password>
in the configuration file: someotherdir/testnet/bitcoin.conf
If the file does not exist, create it with owner-readable-only file permissions.

ファイルはもちろん存在しており、パーミッションも正しい。

.conf ファイルを通常の~/.bitcoin/testnet にコピーしてみたり、ディレクトリ全体へのシンボリックリンクを作成してみたりしたが、何も効果がなかった。表示を止める唯一の方法は、-datadir 引数の使用をやめてデフォルトの場所に保存させることである。

これはバグであり、修正すべきである。:)

なお、これまで-testnet でのみ試しており、この動作が-testnet 使用時のみ発生するかどうかは不明である。テストが必要だ。
