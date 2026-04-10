---
title: "Re: プライバシー vs 安全性：おつりの扱い"
date: 2010-07-17T16:27:39.000Z
type: "forum-post"
source: "bitcointalk"
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

新しいアドレスが必要な時に使用するために、事前に作成したアドレスのストックをウォレットにキューしておくべきだ。それほど大きくないので、たくさん持っておいても問題ない。これにより、誰かがバックアップを取った後に新しいアドレスを要求し、それで大きな支払いを受け取るケースもより一般的にカバーできる。あるタイプのアドレス需要が他のタイプのために枯渇しないように、別々のキューを設けるべきかもしれない。

アドレスは通常の場所に作成・保存されるが、「作成済み・未使用」アドレスの別のリストにも記載される。アドレスが要求されると、未使用キューの先頭のアドレスが渡され、新しいアドレスが作成されて末尾に追加される。

ブロック読み込みコードには、wallet.datをコピーした人のケースを修復するために作られた何らかの再スキャンがある。ウォレットが復元されたために忘れられた、既に受信済みのブロック内の受信支払いを再発見するケースを再スキャンが処理できるか確認する必要がある。
