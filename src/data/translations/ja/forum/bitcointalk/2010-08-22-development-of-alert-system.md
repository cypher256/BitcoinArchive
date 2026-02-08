---
title: "アラートシステムの開発"
date: 2010-08-22T23:55:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg10722#msg10722"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「アラートシステムの開発」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/409/"
threadId: "bt-development-of-alert-system"
threadTitle: "Development of alert system"
threadPosition: 1
translationStatus: complete
---

アラートシステムの作成に取り組んでいます。アラートはネットワークを通じてブロードキャストされ、バージョン番号の範囲に適用されます。アラートメッセージは私だけが持つ秘密鍵で署名されます。

ノードはアラートに対して2つのことを行えます：
- ステータスバーに警告メッセージを表示する。
- json-rpcインターフェースの金銭処理メソッドがエラーを返すようにする。

オーバーフローバグやユーザーが受信した支払いを信頼できないフォークのような場合、アラートによって旧バージョンがアップグレードするまでほぼ安全に保たれるはずです。手動のユーザーは受信した支払いを確認する際にステータスバーの警告に気付くはずであり、json-rpcのセーフモードはアップグレードされるまで自動化されたウェブサイトがこれ以上取引を行うのを停止します。

アラート中にエラーを返すjson-rpcメソッドは：
sendtoaddress
getbalance
getreceivedbyaddress
getreceivedbylabel
listreceivedbyaddress
listreceivedbylabel
