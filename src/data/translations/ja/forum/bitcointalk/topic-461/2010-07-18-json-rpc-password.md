---
title: "JSON-RPCパスワード"
date: 2010-07-18T20:49:22.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

JSON-RPCにパスワードを追加する変更をSVNにアップロードした。ビルド環境がある方は、テストしてほしい。

-serverスイッチは-rpcpw=<password>に置き換えられ、bitcoindでも使用される。
bitcoin -rpcpw=<password>    -- JSON-RPCポートを開いて実行
bitcoind -rpcpw=<password>   -- パスワード付きデーモン

スイッチ名のより良いアイデアがあれば知らせてほしい。ただし、データベースの暗号化用のパスワードもいずれ必要になることを念頭に置いてほしい。確信はないが、2つのパスワードを別々に使いたい人もいるかもしれない。

パスワードを設定しないと警告が表示される。

すべてのコマンドで最初のパラメータとしてパスワードが必要になった。「bitcoind help」を実行するとその旨が表示される。

中核コード:

```cpp
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
```

これらの判断についてコメントはあるか？

1) if (strRPCPassword.size() < 15) Sleep(50);  -- これは短いパスワードの場合、各試行後に50ms待機することを意味する。これはDoS攻撃に利用される可能性があるが、短いパスワードの場合はブルートフォースのパスワードスキャンから保護する方が重要だと判断した。これにより外部の人にパスワードが15文字未満かどうかがわかってしまう可能性があるが、15文字未満はそれほど注目すべきことではなく、ほとんどのパスワードは15文字未満だ。DoSの可能性を閉じたい場合は、15文字以上のパスワードを使用してほしい。

2) begin = strRequest.end();  -- 複数の呼び出しを含む単一のリクエストの場合、1つが不正なパスワードであれば残りを破棄する。これは1つのパケットに何百万ものパスワード試行を詰め込めないようにするためだ。これは正しい判断だと思うか？（複数呼び出しはほとんど使われないと思うが）

ヘルプに重複して表示されていた2つのコマンドも修正した:

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
