---
title: "Re: いくつかの提案"
date: 2009-12-11T19:27:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg50#msg50"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/19/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "madhatter2"
    date: "2009-12-10T19:59:19.000Z"
---

そうだ、SVNにはほぼリリース候補の0.2ソースがあり、Linux上でもビルド・実行が可能だ。FreeBSDではテストされていない。

<!-- quote: q1 -->
<!-- tone-skip -->
> FreeBSDで動作するバックエンドプロセスを実現できれば、常時稼働のシードを運用できる。
<!-- /tone-skip -->
それは大きな助けになるだろう。TORユーザーはシードの取得方法を心配する必要がなくなり、IRCに依存しなくてもよくなる。

UIにアクセスしなくても、デスクトップ上に最小化されたウィンドウがあることを気にしなければ、いくつかのシンプルなモードで実行できる。（0.1.5には-minオプションがないので、開いたウィンドウになる）

シードのみを実行する場合：
bitcoin -min -gen=0

debug.logを見ることで、ある程度監視できる。停止するには、プロセスをkillしてほしい。データベースは問題ない。

生成する場合：
bitcoin -min -gen

生成されたBitcoinを取得するには、wallet.dat（バージョン0.2の場合）をUI付きのマシンにコピーし、wallet.datを入れ替えて、Bitcoinを起動し、コインをメインアカウントに送金する必要がある。（バージョン0.1.5では、"%appdata%/Bitcoin"ディレクトリ全体をコピーする必要がある。）wallet.datのコピーに関して一つ注意点がある：コインを生成した瞬間や支払いを受け取った瞬間にプログラムをkillした場合、wallet.datだけでは機能しない可能性があり、ディレクトリ全体をコピーする必要がある。

> 「初回ダウンロードパッケージに日次のシードスナップショットを含めることで、ブートストラッピングが改善されると本当に思います。ここでの新規テストインストールで、アプリケーションが0接続/1ブロックの状態で停止する事例を見ました。debug.logを調べると、IRCサーバー（freenodeだと思います）が既に接続されていると言って、アプリケーションのシードを拒否していることがわかりました。（一例です）。」

なるほど、同じNATやVPN、またはISPが全員を数台のプロキシサーバー経由で接続している場合にそうなるだろう。これに対する修正をSVNにコミットした。「433」の名前が既に使用中エラー（エラー433だったよね？）を受け取った場合、アドレスではないランダムなユーザー名でリトライする。

> 「いずれにせよ、お手伝いしたいです。時間はたくさんありますし、このようなプロジェクトはとても刺激的です。」

ありがとう、どんな助けも本当にありがたい！
