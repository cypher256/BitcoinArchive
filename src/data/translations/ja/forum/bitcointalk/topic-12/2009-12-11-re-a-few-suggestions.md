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

そうだ、SVN にはほぼリリース候補の 0.2 ソースがあり、Linux 上でもビルド・実行が可能だ。FreeBSD ではテストされていない。

<!-- quote: q1 -->
<!-- tone-skip -->
> FreeBSDで動作するバックエンドプロセスを実現できれば、常時稼働のシードを運用できる。
<!-- /tone-skip -->
それは大きな助けになるだろう。TOR ユーザーはシードの取得方法を心配する必要がなくなり、IRC に依存しなくてもよくなる。

UI にアクセスしなくても、デスクトップ上に最小化されたウィンドウがあることを気にしなければ、いくつかのシンプルなモードで実行できる。（0.1.5 には-min オプションがないので、開いたウィンドウになる）

シードのみを実行する場合：
bitcoin -min -gen=0

debug.log を見ることで、ある程度監視できる。停止するには、プロセスを kill してほしい。データベースは問題ない。

生成する場合：
bitcoin -min -gen

生成された Bitcoin を取得するには、wallet.dat（バージョン 0.2 の場合）を UI 付きのマシンにコピーし、wallet.dat を入れ替えて、Bitcoin を起動し、コインをメインアカウントに送金する必要がある。（バージョン 0.1.5 では、"%appdata%/Bitcoin"ディレクトリ全体をコピーする必要がある。）wallet.dat のコピーに関して一つ注意点がある：コインを生成した瞬間や支払いを受け取った瞬間にプログラムを kill した場合、wallet.dat だけでは機能しない可能性があり、ディレクトリ全体をコピーする必要がある。

> 「初回ダウンロードパッケージに日次のシードスナップショットを含めることで、ブートストラッピングが改善されると本当に思います。ここでの新規テストインストールで、アプリケーションが0接続/1ブロックの状態で停止する事例を見ました。debug.logを調べると、IRCサーバー（freenodeだと思います）が既に接続されていると言って、アプリケーションのシードを拒否していることがわかりました。（一例です）。」

なるほど、同じ NAT や VPN、または ISP が全員を数台のプロキシサーバー経由で接続している場合にそうなるだろう。これに対する修正を SVN にコミットした。「433」の名前が既に使用中エラー（エラー 433 だったよね？）を受け取った場合、アドレスではないランダムなユーザー名でリトライする。

> 「いずれにせよ、お手伝いしたいです。時間はたくさんありますし、このようなプロジェクトはとても刺激的です。」

ありがとう、どんな助けも本当にありがたい！
