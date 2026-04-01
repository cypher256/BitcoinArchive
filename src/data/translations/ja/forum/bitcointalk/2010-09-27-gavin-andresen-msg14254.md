---
title: "Re:（ギャビン・アンドレセンの引用投稿）"
date: 2010-09-27T15:14:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg14254#msg14254"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック665におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
threadId: "bt-multiple-wallets-one-computer"
tags: []
translationStatus: complete
---

「ラベル」メカニズム（setlabel / getreceivedbylabel）はこのニーズに対応するはずだが、問題の一部しか解決しない。

以下に説明するようにAPIを拡張すれば、複数のウォレットを持つのと同じ問題を解決できるか？

提案：

+ 新しい送信メソッド：指定したBitcoinアドレスに、<label>に送られたBitcoinから具体的にFROMとして送信
  （生成されたおつりには自動的に<label>がタグ付けされる）
+ getbalanceにオプションの[label]パラメータを追加
+ 新しいメソッド：listsentbylabel
  （[ "address" : "送信先BCアドレス", "amount" : x.yz, "confirmations": n ]の配列を返す）

各顧客の「アカウント」がBitcoinの<label>になる。アカウント処理はこのようになる：

アカウント作成 / アカウント用の新しいアドレス作成：
  getnewaddress [account_id_label]
   … ユーザーに「{返されたアドレス}にコインを送信してアカウントに資金を入れてください」と伝える

顧客の引き出し/支出：
  sendfrom [account_id_label] [address] [amount]
   （そのアカウントの残高が不足している場合は失敗）

顧客に残高を表示：
  getbalance [account_id_label]

顧客に入出金トランザクションを表示：
  listreceivedbylabel [account_id_label]
  listsentbylabel [account_id_label]

---------

各顧客のために別々のwallet.datファイルを持つよりも、こちらの方向に進む方がはるかに良いと思う。少なくとも、何千もの顧客のウォレットファイルをバックアップするのは非効率的でエラーが起きやすく、常にそれらを切り替えるのも非常に非効率的だ。
