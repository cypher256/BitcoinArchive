---
title: "Re: いくつかの提案"
date: 2009-12-18T17:37:48.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg79#msg79"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/27/"
threadId: "bt-a-few-suggestions"
threadPosition: 9
translationStatus: complete
---

現在可能なのは、オプションで「トレイに最小化」を設定し、「bitcoin -min」で起動して最小化状態で開始することだ。表示されるのはトレイ上の小さな（20x20）アイコンだけで、UIにアクセスしたい場合はダブルクリックできる。注意：64ビットKarmic Koalaでトレイアイコンが消えることがあるバグがある。64ビットのせいかKarmicのせいかはわからないが、32ビットJauntyでは問題なかった。

0.2のリリースに間に合うようにLinuxの「システム起動時にBitcoinを開始」機能を実装する時間がなかったため、グレーアウトされている。Linuxユーザーならとにかく手動で設定することを気にしないだろうと思った。正しく行うには-minスイッチを知る必要があるだろう。

「-datadir=<ディレクトリ>」スイッチでデータディレクトリの場所を指定できる。TrueCrypt USBドライブに置くために既にそうしている人がいるのは知っている。
