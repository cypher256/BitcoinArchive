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

SVN リビジョン 163（バージョン 0.3.13.3）にキープール機能が入った。事前生成された新しいキーが使用前にキューで寝かされるので、wallet.dat のバックアップにこれから使うキーが入っていることになる。

今のところ、デフォルトのプールサイズは 100 にした。-keypool=で設定できる。プールサイズを増やすには少し時間がかかるので、極端な値にはしないでほしい。ディスク容量はキー 1個あたり約 1K だ。

復元側はまだ手をつけていない。実際に古い wallet.dat を復元した場合は、おそらく blk*.dat を削除して、再ダウンロード中に自分のトランザクションを再発見させる必要があると思う。

これはほどほどにしかテストしていない。もう少しテストが進むまでは、ウェブサイトのサーバー用には使わないほうがいいかもしれない。
