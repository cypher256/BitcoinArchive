---
title: "Re: IPトランザクション削除の根拠"
date: 2010-09-19T21:49:30.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1048.msg13219#msg13219"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「IPトランザクション削除の根拠」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/455/"
translationStatus: complete
---

IP経由での受信は、特に使用する意図がない限り無効にするのがおそらく最善です。これは誰も使っていない大きな攻撃対象領域であり、デフォルトで開いている必要はありません。

店舗のケースでは、通常、特定の注文やアカウントに関連付けられたビットコインアドレスのみを発行する自動化システムを通じて顧客に支払いを送ってもらいたいでしょう。サーバーのIPアドレスに対して自発的に送られるランダムな身元不明の支払いは役に立ちません。

一般的に、IP経由での送信は有用なケースが限られています。プロキシを使わずに直接接続する場合、中間者攻撃のリスクは許容範囲かもしれませんが、プライバシーはありません。プライバシープロキシを使用する場合、中間者攻撃のリスクは受け入れがたいほど高くなります。SSLの実装にすべての労力を費やしたとしても、通常CA証明書を取得する手間をかけるのは大規模な店舗だけであり、それらのケースのほとんどでもビットコインアドレスを使用する方が良いでしょう。

この変更をSVN rev 156にアップロードしました。有効にするスイッチは「-allowreceivebyip」です。

このバージョンの送信者は「Recipient is not accepting transactions sent by IP address」（受信者はIPアドレスによる送信トランザクションを受け付けていません）というエラーが表示されます。古いバージョンの送信者は「Transfer was not accepted」（転送は受け付けられませんでした）と表示されます。

スイッチには別の名前を使いました。「-allowiptransactions」だと送信も含むように聞こえるためです。スイッチのより良い名前があれば、再度変更できます。
