---
title: "ウォレットバックアップを安全にするためのキープール機能"
date: 2010-10-09T20:19:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1414.msg16316#msg16316"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「ウォレットバックアップを安全にするためのキープール機能」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/490/"
translationStatus: complete
---

SVNリビジョン163（バージョン0.3.13.3）にキープール機能が入った。事前生成された新しいキーが使用前にキューで寝かされるので、wallet.datのバックアップにこれから使うキーが入っていることになる。

今のところ、デフォルトのプールサイズは100にした。-keypool=で設定できる。プールサイズを増やすには少し時間がかかるので、極端な値にはしないでほしい。ディスク容量はキー1個あたり約1Kだ。

復元側はまだ手をつけていない。実際に古いwallet.datを復元した場合は、おそらくblk*.datを削除して、再ダウンロード中に自分のトランザクションを再発見させる必要があると思う。

これはほどほどにしかテストしていない。もう少しテストが進むまでは、ウェブサイトのサーバー用には使わないほうがいいかもしれない。
