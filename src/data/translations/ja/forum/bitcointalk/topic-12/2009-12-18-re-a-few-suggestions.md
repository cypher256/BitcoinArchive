---
title: "Re: いくつかの提案"
date: 2009-12-18T17:37:48.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

現在可能なのは、オプションで「トレイに最小化」を設定し、「bitcoin -min」で起動して最小化状態で開始することだ。表示されるのはトレイ上の小さな（20x20）アイコンだけで、UI にアクセスしたい場合はダブルクリックできる。注意：64 ビット Karmic Koala でトレイアイコンが消えることがあるバグがある。64 ビットのせいか Karmic のせいかはわからないが、32 ビット Jaunty では問題なかった。

0.2 のリリースに間に合うように Linux の「システム起動時に Bitcoin を開始」機能を実装する時間がなかったため、グレーアウトされている。Linux ユーザーならとにかく手動で設定することを気にしないだろうと思った。正しく行うには-min スイッチを知る必要があるだろう。

「-datadir=<ディレクトリ>」スイッチでデータディレクトリの場所を指定できる。TrueCrypt USB ドライブに置くために既にそうしている人がいるのは知っている。
