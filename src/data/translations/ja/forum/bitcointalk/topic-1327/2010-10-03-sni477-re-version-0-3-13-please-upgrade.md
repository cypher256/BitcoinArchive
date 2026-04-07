---
title: "Re: バージョン0.3.13、アップグレードしてください"
date: 2010-10-03T20:54:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15136#msg15136"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「バージョン0.3.13、アップグレードしてください」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/477/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-10-03T11:09:51.000Z"
  - id: "q2"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-10-03T11:09:51.000Z"
  - id: "q3"
    person: "tcatm"
    personSlug: "tcatm"
    date: "2010-10-03T11:10:47.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> ArtForzはすでに手数料なしで稼働しており、ネットワークのCPUパワーの20〜30%を持っている。ただし、元の壊れた取引を送った人はウォレットを削除し、ネットワークはこれらの過去の取引を忘れているため、これに基づく取引は承認されない。
<!-- /tone-skip -->

トランザクションは、ノードがブロックチェーンに戻るトランザクションのパスを持つまで、0/未承認として受け入れられたり表示されたりしない。

ウォレット内のトランザクションには、ブロックチェーンに到達するために必要な未記録のトランザクションもすべて一緒にバンドルされている。0/未承認として表示されるトランザクションがある場合、それが依存する以前の未記録のトランザクションもすべて持っており、自分のトランザクションを再ブロードキャストする際にそれらも再ブロードキャストする。

手数料なしのブロックがすでに生成されたのに解決しない場合は、何が問題なのか調べる必要がある。あまり使われないコードの部分だ。それらに依存するトランザクションを持つ全員のウォレットに記録されているはずだ。

<!-- quote: q2 -->
<!-- tone-skip -->
> 元の壊れた取引を送った人はウォレットを削除した
<!-- /tone-skip -->

はぁ……ウォレットを別の場所に移動して万が一のために古いコピーを保管しておくのではなく、なぜ削除するのだろうか？ウォレットは決して削除すべきではない。

<!-- quote: q3 -->
<!-- tone-skip -->
> 動いている。3時間以内にブロックが見つかるはずだ。
<!-- /tone-skip -->

再ブロードキャストされたトランザクションを収集するのに時間がかかるかもしれない。より多くのノードをリッスンできるよう、インバウンド接続を受け入れられるようにすると助けになる。3時間でブロックを見つけたとしても、少なくとも数日間は継続して実行し続けてくれ。
