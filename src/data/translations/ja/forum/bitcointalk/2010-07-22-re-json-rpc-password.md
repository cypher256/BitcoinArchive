---
title: "Re: JSON-RPCパスワード"
date: 2010-07-22T02:34:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4928#msg4928"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/254/"
threadId: "bt-json-rpc-password"
translationStatus: complete
---

[Quote from: gavinandresen on July 22, 2010, 01:11:26 AM](#msg4908)
> この実装を自分から引き受けて、今日かなり進捗があった。サトシ：明日にはパッチを送れるはずだ。
>
> 完了：Bitcoinが{BITCOIN_DIR}/bitcoin.confファイルから設定を読み込めるようにした。`-conf=path_to_config_file.conf`コマンドラインオプションも追加した。
> 完了：Bitcoin RPCにHTTP Basic認証を要求させ、ユーザー名・パスワードが間違っているリクエストを拒否するようにした。
>
> TODO：Bitcoinのコマンドラインから`Authorization:`ヘッダーを追加するようにする。コマンドラインからBitcoinを操作する際にユーザー名・パスワードを入力する必要はなく、bitcoin.confから読み取って適切に処理する。
> TODO：rpc.user/rpc.passwordが設定されていない場合、ダイアログボックスまたはdebug.logで設定方法を説明する警告を表示する。
> TODO：rpc.passwordが15文字未満の場合、パスワード推測の試行を制限する。
> TODO：JSON-RPCのWikiページを更新する。
>
> 以上すべてが完了してサトシにパッチを送った後、bitcoin.confにいくつか追加する予定だ：
>
> port=   # listenポートの設定（デフォルト8333を上書き）
> rpc.port= # JSON-RPCポートの設定（デフォルト8332を上書き）
>
> 既存の-datadirオプションと合わせれば、1台のマシンで複数のBitcoinを実行しやすくなる。

このRPC関連の多くのコンテキストでは、fprintf(stdoutでコンソールに出力できる。このように:

```cpp
#if defined(__WXMSW__) && wxUSE_GUI
        MyMessageBox("Warning: rpc password is blank, use -rpcpw=<password>
", "Bitcoin", wxOK | wxICON_EXCLAMATION);
#else
        fprintf(stdout, "Warning: rpc password is blank, use -rpcpw=<password>
");
#endif
```
