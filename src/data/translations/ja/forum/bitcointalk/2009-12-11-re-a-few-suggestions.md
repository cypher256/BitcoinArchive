---
title: "Re: いくつかの提案"
date: 2009-12-11T19:27:55.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg50#msg50"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/19/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 2
translationStatus: complete
---

そうです、SVNにはほぼリリース候補の0.2ソースがあり、Linux上でもビルド・実行が可能です。FreeBSDではテストされていません。

[madhatter2の2009年12月11日 04:59:19 AMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg47#msg47)動作するバックエンドプロセスがFreeBSD上で実行できるようになれば、常時稼働のシードを運用できます。
それは大きな助けになるでしょう。TORユーザーはシードの取得方法を心配する必要がなくなり、IRCに依存しなくてもよくなります。

UIにアクセスしなくても、デスクトップ上に最小化されたウィンドウがあることを気にしなければ、いくつかのシンプルなモードで実行できます。（0.1.5には-minオプションがないので、開いたウィンドウになります）

シードのみを実行する場合：
bitcoin -min -gen=0

debug.logを見ることで、ある程度監視できます。停止するには、プロセスをkillしてください。データベースは問題ありません。

生成する場合：
bitcoin -min -gen

生成されたBitcoinを取得するには、wallet.dat（バージョン0.2の場合）をUI付きのマシンにコピーし、wallet.datを入れ替えて、Bitcoinを起動し、コインをメインアカウントに送金する必要があります。（バージョン0.1.5では、"%appdata%/Bitcoin"ディレクトリ全体をコピーする必要があります。）wallet.datのコピーに関して一つ注意点があります：コインを生成した瞬間や支払いを受け取った瞬間にプログラムをkillした場合、wallet.datだけでは機能しない可能性があり、ディレクトリ全体をコピーする必要があります。

引用：「初回ダウンロードパッケージに日次のシードスナップショットを含めることで、ブートストラッピングが改善されると本当に思います。ここでの新規テストインストールで、アプリケーションが0接続/1ブロックの状態で停止する事例を見ました。debug.logを調べると、IRCサーバー（freenodeだと思います）が既に接続されていると言って、アプリケーションのシードを拒否していることがわかりました。（一例です）。」
なるほど、同じNATやVPN、またはISPが全員を数台のプロキシサーバー経由で接続している場合にそうなるでしょう。これに対する修正をSVNにコミットしました。「433」の名前が既に使用中エラー（エラー433でしたよね？）を受け取った場合、アドレスではないランダムなユーザー名でリトライします。

引用：「いずれにせよ、お手伝いしたいです。時間はたくさんありますし、このようなプロジェクトはとても刺激的です。」
ありがとうございます、どんな助けも本当にありがたいです！
