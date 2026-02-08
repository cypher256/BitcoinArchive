---
title: "Re: バージョン0.3.13、アップグレードしてください"
date: 2010-10-03T20:54:07.000Z
source: bitcointalk
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
threadId: "bt-version-0-3-13-please-upgrade"
threadTitle: "Version 0.3.13, please upgrade"
threadPosition: 5
translationStatus: complete
---

[Quote from: theymos on October 03, 2010, 08:09:51 PM](https://bitcointalk.org/index.php?topic=1327.msg15118#msg15118)ArtForzはすでに手数料なしで実行しており、ネットワークのCPUパワーの20-30%を持っています。ただし、元の壊れたトランザクションを送信した人はウォレットを削除しており、ネットワークはこれらの過去のトランザクションを忘れているため、これに基づくトランザクションは承認されません。
トランザクションは、ノードがブロックチェーンに戻るトランザクションのパスを持つまで、0/未承認として受け入れられたり表示されたりしません。

ウォレット内のトランザクションには、ブロックチェーンに到達するために必要な未記録のトランザクションもすべて一緒にバンドルされています。0/未承認として表示されるトランザクションがある場合、それが依存する以前の未記録のトランザクションもすべて持っており、自分のトランザクションを再ブロードキャストする際にそれらも再ブロードキャストします。

手数料なしのブロックがすでに生成されたのに解決しない場合は、何が問題なのか調べる必要があります。あまり使われないコードの部分です。それらに依存するトランザクションを持つ全員のウォレットに記録されているはずです。

[Quote from: theymos on October 03, 2010, 08:09:51 PM](https://bitcointalk.org/index.php?topic=1327.msg15118#msg15118)元の壊れたトランザクションを送信した人はウォレットを削除しました
はぁ...ウォレットを別の場所に移動して万が一のために古いコピーを保管しておくのではなく、なぜ削除するのでしょうか？ウォレットは決して削除すべきではありません。

[Quote from: tcatm on October 03, 2010, 08:10:47 PM](https://bitcointalk.org/index.php?topic=1327.msg15119#msg15119)実行中です。3時間以内にブロックを見つけるはずです。
再ブロードキャストされたトランザクションを収集するのに時間がかかるかもしれません。より多くのノードをリッスンできるよう、インバウンド接続を受け入れられるようにすると助けになります。3時間でブロックを見つけたとしても、少なくとも数日間は継続して実行し続けてください。
