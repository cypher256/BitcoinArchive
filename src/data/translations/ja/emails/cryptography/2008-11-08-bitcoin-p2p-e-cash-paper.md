---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-08T18:54:38.000Z
source: cryptography-mailing-list
sourceUrl: "http://www.metzdowd.com/pipermail/cryptography/2008-November/014831.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがハードウェア速度の向上への対処と、ビットコインの計画的な通貨供給について説明した投稿。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/5/"
translationStatus: complete
---

Ray Dillinger：
> 「通貨」はコンピューターが年間約35%速くなるため
> 約35%のインフレ率である
> …35%のインフレ率はテクノロジーによって
> ほぼ保証されている

ハードウェア速度の向上には対処している：「ハードウェア速度の向上とノードの運用への関心の変動を時間の経過とともに補正するため、プルーフ・オブ・ワークの難易度は1時間あたりのブロック数の平均を目標とする移動平均によって決定される。生成が速すぎる場合、難易度が上がる。」

コンピューターが高速化し、ビットコインの生成に投入される総計算能力が増加すると、難易度は総新規生産量を一定に保つように比例して上昇する。したがって、将来毎年どれだけの新しいビットコインが生成されるかは事前にわかっている。

新しいコインが生産されることは通貨供給量が計画的に増加することを意味するが、必ずしもインフレになるわけではない。通貨供給量の増加が利用者数の増加と同じ率で増加すれば、物価は安定する。需要ほど速く増加しなければ、デフレが起こり、通貨の初期保有者はその価値の上昇を目にすることになる。

コインは何らかの方法で最初に分配されなければならず、一定の生成率が最良の方式と思われる。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
