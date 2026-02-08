---
title: "Re: コインの窃盗"
date: 2010-07-25T20:48:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=571.msg5754#msg5754"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「コインの窃盗」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/272/"
threadId: "bt-stealing-coins"
threadTitle: "Stealing Coins"
threadPosition: 4
translationStatus: complete
---

引用「SHA-1の衝突を2^52回の暗号操作で見つけられると主張する論文があります。最適に安全なハッシュでは2^80回の操作が必要です。2^52回の時間はまだ大きいですが、クラスターやボットネットの範囲に入ってきています。」
2^80は誕生日攻撃を使える場合です。この場合は誕生日攻撃を使えないため、難易度は完全な2^160ビットです。ただし、100万件（2^20件）のトランザクションのうちどれか1つを破ろうとしている場合、部分的な誕生日攻撃で2^160/2^20 = 2^140にできます。

ビットコインアドレスは160ビットハッシュが使用される唯一の場所です。その他すべてはSHA-256です。計算方法は以下の通りです:

bitcoinaddress = RIPEMD-160(SHA-256(publickey))

間違っていたら訂正してください（喜んで謝りますので）が、この場合RIPEMD-160に対する解析的攻撃を使うのは難しいと思います。解析的攻撃は、衝突を見つける確率を大幅に高める特定の範囲やパターンの入力を試すように規定しています。ここでは、RIPEMD-160への入力はSHA-256の出力であるため、そのような制御ができません。解析的攻撃によってRIPEMD-160の衝突を生み出す入力を見つけたとして、それで何をしますか？SHA-256にその値を出力させる必要があるため、SHA-256も破る必要があります。

ブルートフォースの場合、RIPEMD-160(SHA-256(x))はRIPEMD-160単独と比べて強くはありません。しかし解析的攻撃の場合、RIPEMD-160とSHA-256の両方を解析的に攻撃する必要があるようです。もし間違っていれば、強度はRIPEMD-160と同じであり、SHA-256は1回分の鍵強化として機能するだけです。
