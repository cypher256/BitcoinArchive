---
title: "返信: CLIビットコイン生成"
date: 2010-05-26T20:09:34.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1256#msg1256"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「CLIビットコイン生成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/109/"
translationStatus: complete
---

[molybdenum、2010年5月22日 午後6:44:20の引用](https://bitcointalk.org/index.php?topic=145.msg1194#msg1194)そのトランザクション後の最小ブロック数を指定するオプションパラメータ（getallreceived 1で現在の動作、または単にgetallreceived、getallreceived 5で慎重な場合、getallreceived 0で即時確認）？
はい、実際にそういう仕組みです。getallreceived 0であなたの望むことができるはずです。（現在はlistreceivedbyaddress 0に名前が変更されています）デフォルトは1確認ですが、実際にはほとんどのデジタル商品やサービスは0確認で問題ないと思います。おっしゃる通り、0確認以上が必要な場合は、未確認と利用可能残高の2つの数字を表示すれば、トランザクションが通ったことをすぐに確認できます。

listreceivedbyaddress [minconf=1] [includeempty=false]
[minconf]は支払いが含まれる前の最小確認数です。
[includeempty]はまだ支払いを受けていないアドレスを含めるかどうかです。
以下を含むオブジェクトの配列を返します:
  "address" : 受取アドレス
  "label" : 受取アドレスのラベル
  "amount" : アドレスが受け取った合計金額
  "confirmations" : 含まれる最新トランザクションの確認数

アドレスにユーザー名でラベルを付けている場合はlistreceivedbylabelも使えます。

今のところ、ウェブ加盟店向けの機能に集中しており、ヘッドレスコイン生成器のリモート管理用の機能にはまだあまり取り組んでいません。
