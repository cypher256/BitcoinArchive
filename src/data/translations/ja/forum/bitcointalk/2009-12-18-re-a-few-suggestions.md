---
title: "Re: いくつかの提案"
date: 2009-12-18T17:37:48.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg79#msg79"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/27/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 9
translationStatus: complete
---

現在可能なのは、オプションで「トレイに最小化」を設定し、「bitcoin -min」で起動して最小化状態で開始することです。表示されるのはトレイ上の小さな（20x20）アイコンだけで、UIにアクセスしたい場合はダブルクリックできます。注意：64ビットKarmic Koalaでトレイアイコンが消えることがあるバグがあります。64ビットのせいかKarmicのせいかはわかりませんが、32ビットJauntyでは問題ありませんでした。

0.2のリリースに間に合うようにLinuxの「システム起動時にBitcoinを開始」機能を実装する時間がなかったため、グレーアウトされています。Linuxユーザーならとにかく手動で設定することを気にしないだろうと思いました。正しく行うには-minスイッチを知る必要があるでしょう。

「-datadir=<ディレクトリ>」スイッチでデータディレクトリの場所を指定できます。TrueCrypt USBドライブに置くために既にそうしている人がいるのは知っています。
