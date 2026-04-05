---
title: "8333以外のポートで実行する"
date: 2010-07-27T14:08:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=589.msg6034#msg6034"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック589におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

bitcoinに`-port=` / `-rpcport=`のコマンドライン/設定ファイルオプションを追加する作業をしている。目的は、1台のマシンで複数のbitcoindを実行できるようにすることだ。少なくとも2つのBitcoin関連ウェブサービス（Bitcoin Faucetと、後で発表するサービス）を予定しており、完全に別のウォレットにしたいが、ホスティングのために複数のサーバーを借りたくはない。

使い方はこのようになる：
Code:$ ./bitcoind getbalance  # TESTネットワークのFaucet bitcoind
40616.66159265000
$ ./bitcoind -datadir=/home/bitcoin/.bitcoinTEST2 getbalance
1000.000000000000
$ cat /home/bitcoin/.bitcoinTEST2/bitcoin.conf
rpcpassword=.....
port=18666
rpcport=18665

サトシは、bitcoin/bitcoindを非標準ポートで実行することを許可すると、設定を誤った場合に2つのbitcoinが同じデータベースを開いて書き込む可能性があり危険だと指摘した。これを防ぐために、`<datadir>/db.log`ファイルをロックとして使用し、同時に1つのbitcoinだけが同じdatadirにアクセスできるようにした（`boost::interprocess::file_lock`を使用。これはクロスプラットフォームで、bitcoinがクラッシュしても正常に動作するとされている）。

この作業中に出てきた問題：

Windows GUIコードにwxSingleInstanceCheckerの呼び出しを残したため、Windowsでは異なるポートでリッスンする複数のGUI版bitcoinは動作しない。Windowsは使わないので…

2つのbitcoinを同じdatadirに向けた場合のエラー処理をきれいにする手間は省いた（ランタイム例外「Cannot lock db.log, is bitcoin already running?」が出る）。

パッチは http://pastebin.com/2e4hfXSS にある。Linuxでしかテストしていないので、Windowsで試してくれる人はいるか？
