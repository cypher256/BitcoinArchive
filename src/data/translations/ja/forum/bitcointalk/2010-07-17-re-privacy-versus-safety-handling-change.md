---
title: "Re: プライバシー対安全性: おつりの取り扱い"
date: 2010-07-17T16:27:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=434.msg3770#msg3770"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「プライバシー対安全性: おつりの取り扱い」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/230/"
translationStatus: complete
---

新しいアドレスが必要な時に使用するために、事前に作成したアドレスのストックをウォレットにキューしておくべきです。それほど大きくないので、たくさん持っておいても問題ありません。これにより、誰かがバックアップを取った後に新しいアドレスを要求し、それで大きな支払いを受け取るケースもより一般的にカバーできます。あるタイプのアドレス需要が他のタイプのために枯渇しないように、別々のキューを設けるべきかもしれません。

アドレスは通常の場所に作成・保存されますが、「作成済み・未使用」アドレスの別のリストにも記載されます。アドレスが要求されると、未使用キューの先頭のアドレスが渡され、新しいアドレスが作成されて末尾に追加されます。

ブロック読み込みコードには、wallet.datをコピーした人のケースを修復するために作られた何らかの再スキャンがあります。ウォレットが復元されたために忘れられた、既に受信済みのブロック内の受信支払いを再発見するケースを再スキャンが処理できるか確認する必要があります。
