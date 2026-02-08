---
title: "JSON-RPCパスワード"
date: 2010-07-18T20:49:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4059#msg4059"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"JSON-RPCパスワード\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/242/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 1
translationStatus: complete
---

JSON-RPCにパスワードを追加する変更をSVNにアップロードしました。ビルド環境がある方は、テストしてください。

-serverスイッチは-rpcpw=<password>に置き換えられ、bitcoindでも使用されます。
bitcoin -rpcpw=<password>    -- JSON-RPCポートを開いて実行
bitcoind -rpcpw=<password>   -- パスワード付きデーモン

スイッチ名のより良いアイデアがあればお知らせください。ただし、データベースの暗号化用のパスワードもいずれ必要になることを念頭に置いてください。確信はありませんが、2つのパスワードを別々に使いたい人もいるかもしれません。

パスワードを設定しないと警告が表示されます。

すべてのコマンドで最初のパラメータとしてパスワードが必要になりました。「bitcoind help」を実行するとその旨が表示されます。

中核コード:

  // パスワード確認
  if (params.size() < 1 || params[0].type() != str_type)
      throw runtime_error("First parameter must be the password.");
  if (params[0].get_str() != strRPCPassword)
  {
      if (strRPCPassword.size() < 15)
          Sleep(50);
      begin = strRequest.end();
      printf("ThreadRPCServer incorrect password attempt
");
      throw runtime_error("Incorrect password.");
  }

これらの判断についてコメントはありますか？

1) if (strRPCPassword.size() < 15) Sleep(50);  -- これは短いパスワードの場合、各試行後に50ms待機することを意味します。これはDoS攻撃に利用される可能性がありますが、短いパスワードの場合はブルートフォースのパスワードスキャンから保護する方が重要だと判断しました。これにより外部の人にパスワードが15文字未満かどうかがわかってしまう可能性がありますが、15文字未満はそれほど注目すべきことではなく、ほとんどのパスワードは15文字未満です。DoSの可能性を閉じたい場合は、15文字以上のパスワードを使用してください。

2) begin = strRequest.end();  -- 複数の呼び出しを含む単一のリクエストの場合、1つが不正なパスワードであれば残りを破棄します。これは1つのパケットに何百万ものパスワード試行を詰め込めないようにするためです。これは正しい判断だと思いますか？（複数呼び出しはほとんど使われないと思いますが）

ヘルプに重複して表示されていた2つのコマンドも修正しました:

getaddressesbylabel <pw> <label>
getbalance <pw>
getblockcount <pw>
getblocknumber <pw>
getconnectioncount <pw>
getdifficulty <pw>
getgenerate <pw>
getinfo <pw>
getlabel <pw> <bitcoinaddress>
getnewaddress <pw> [label]
getreceivedbyaddress <pw> <bitcoinaddress> [minconf=1]
getreceivedbylabel <pw> <label> [minconf=1]
help <pw>
listreceivedbyaddress <pw> [minconf=1] [includeempty=false]
listreceivedbylabel <pw> [minconf=1] [includeempty=false]
sendtoaddress <pw> <bitcoinaddress> <amount> [comment] [comment-to]
setgenerate <pw> <generate> [genproclimit]
setlabel <pw> <bitcoinaddress> <label>
stop <pw>
