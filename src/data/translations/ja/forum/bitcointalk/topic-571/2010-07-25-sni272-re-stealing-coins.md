---
title: "Re: コインの窃盗"
date: 2010-07-25T20:48:01.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

引用「SHA-1 の衝突を 2^52回の暗号操作で見つけられると主張する論文があります。最適に安全なハッシュでは 2^80回の操作が必要です。2^52回の時間はまだ大きいですが、クラスターやボットネットの範囲に入ってきています。」
2^80 は誕生日攻撃を使える場合だ。この場合は誕生日攻撃を使えないため、難易度は完全な 2^160 ビットだ。ただし、100 万件（2^20件）のトランザクションのうちどれか 1 つを破ろうとしている場合、部分的な誕生日攻撃で 2^160/2^20 = 2^140 にできる。

ビットコインアドレスは 160 ビットハッシュが使用される唯一の場所だ。その他すべては SHA-256 だ。計算方法は以下の通りだ:

bitcoinaddress = RIPEMD-160(SHA-256(publickey))

間違っていたら訂正してほしい（喜んで謝るので）が、この場合 RIPEMD-160 に対する解析的攻撃を使うのは難しいと思う。解析的攻撃は、衝突を見つける確率を大幅に高める特定の範囲やパターンの入力を試すように規定している。ここでは、RIPEMD-160 への入力は SHA-256 の出力であるため、そのような制御ができない。解析的攻撃によって RIPEMD-160 の衝突を生み出す入力を見つけたとして、それで何をするのか？SHA-256 にその値を出力させる必要があるため、SHA-256 も破る必要がある。

ブルートフォースの場合、RIPEMD-160(SHA-256(x))は RIPEMD-160 単独と比べて強くはない。しかし解析的攻撃の場合、RIPEMD-160 と SHA-256 の両方を解析的に攻撃する必要があるようだ。もし間違っていれば、強度は RIPEMD-160 と同じであり、SHA-256 は 1回分の鍵強化として機能するだけだ。
