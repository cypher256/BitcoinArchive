---
title: "Re: JSON-RPC パスワード"
date: 2010-07-22T01:11:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4908#msg4908"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 461 におけるギャビン・アンドレセンの文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

この実装を自分から引き受けて、今日かなり進捗があった。サトシ：明日にはパッチを送れるはずだ。

完了：Bitcoin が{BITCOIN_DIR}/bitcoin.conf ファイルから設定を読み込めるようにした。`-conf=path_to_config_file.conf`コマンドラインオプションも追加した。
完了：Bitcoin RPC に HTTP Basic 認証を要求させ、ユーザー名・パスワードが間違っているリクエストを拒否するようにした。

TODO：Bitcoin のコマンドラインから`Authorization:`ヘッダーを追加するようにする。コマンドラインから Bitcoin を操作する際にユーザー名・パスワードを入力する必要はなく、bitcoin.conf から読み取って適切に処理する。
TODO：rpc.user/rpc.password が設定されていない場合、ダイアログボックスまたは debug.log で設定方法を説明する警告を表示する。
TODO：rpc.password が 15 文字未満の場合、パスワード推測の試行を制限する。
TODO：JSON-RPC の Wiki ページを更新する。

以上すべてが完了してサトシにパッチを送った後、bitcoin.conf にいくつか追加する予定だ：

port=   # listen ポートの設定（デフォルト 8333 を上書き）
rpc.port= # JSON-RPC ポートの設定（デフォルト 8332 を上書き）

既存の-datadir オプションと合わせれば、1 台のマシンで複数の Bitcoin を実行しやすくなる。
