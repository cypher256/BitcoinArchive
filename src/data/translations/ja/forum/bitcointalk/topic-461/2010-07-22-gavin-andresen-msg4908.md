---
title: "Re:（ギャビン・アンドレセンの文脈投稿）"
date: 2010-07-22T01:11:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4908#msg4908"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

この実装を自分から引き受けて、今日かなり進捗があった。サトシ：明日にはパッチを送れるはずだ。

完了：Bitcoinが{BITCOIN_DIR}/bitcoin.confファイルから設定を読み込めるようにした。`-conf=path_to_config_file.conf`コマンドラインオプションも追加した。
完了：Bitcoin RPCにHTTP Basic認証を要求させ、ユーザー名・パスワードが間違っているリクエストを拒否するようにした。

TODO：Bitcoinのコマンドラインから`Authorization:`ヘッダーを追加するようにする。コマンドラインからBitcoinを操作する際にユーザー名・パスワードを入力する必要はなく、bitcoin.confから読み取って適切に処理する。
TODO：rpc.user/rpc.passwordが設定されていない場合、ダイアログボックスまたはdebug.logで設定方法を説明する警告を表示する。
TODO：rpc.passwordが15文字未満の場合、パスワード推測の試行を制限する。
TODO：JSON-RPCのWikiページを更新する。

以上すべてが完了してサトシにパッチを送った後、bitcoin.confにいくつか追加する予定だ：

port=   # listenポートの設定（デフォルト8333を上書き）
rpc.port= # JSON-RPCポートの設定（デフォルト8332を上書き）

既存の-datadirオプションと合わせれば、1台のマシンで複数のBitcoinを実行しやすくなる。
