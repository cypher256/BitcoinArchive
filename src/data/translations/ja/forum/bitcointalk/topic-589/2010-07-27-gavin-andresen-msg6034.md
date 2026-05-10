---
title: "8333 以外のポートで実行する"
date: 2010-07-27T14:08:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=589.msg6034#msg6034"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 589 におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

bitcoin に`-port=` / `-rpcport=`のコマンドライン/設定ファイルオプションを追加する作業をしている。目的は、1 台のマシンで複数の bitcoind を実行できるようにすることだ。少なくとも 2 つの Bitcoin 関連ウェブサービス（Bitcoin Faucet と、後で発表するサービス）を予定しており、完全に別のウォレットにしたいが、ホスティングのために複数のサーバーを借りたくはない。

使い方はこのようになる：

```
$ ./bitcoind getbalance  # TESTネットワークのFaucet bitcoind
40616.66159265000
$ ./bitcoind -datadir=/home/bitcoin/.bitcoinTEST2 getbalance
1000.000000000000
$ cat /home/bitcoin/.bitcoinTEST2/bitcoin.conf
rpcpassword=.....
port=18666
rpcport=18665
```

サトシは、bitcoin/bitcoind を非標準ポートで実行することを許可すると、設定を誤った場合に 2 つの bitcoin が同じデータベースを開いて書き込む可能性があり危険だと指摘した。これを防ぐために、`<datadir>/db.log`ファイルをロックとして使用し、同時に 1 つの bitcoin だけが同じ datadir にアクセスできるようにした（`boost::interprocess::file_lock`を使用。これはクロスプラットフォームで、bitcoin がクラッシュしても正常に動作するとされている）。

この作業中に出てきた問題：

Windows GUI コードに wxSingleInstanceChecker の呼び出しを残したため、Windows では異なるポートでリッスンする複数の GUI 版 bitcoin は動作しない。Windows は使わないので…

2 つの bitcoin を同じ datadir に向けた場合のエラー処理をきれいにする手間は省いた（ランタイム例外「Cannot lock db.log, is bitcoin already running?」が出る）。

パッチは http://pastebin.com/2e4hfXSS にある。Linux でしかテストしていないので、Windows で試してくれる人はいるか？
