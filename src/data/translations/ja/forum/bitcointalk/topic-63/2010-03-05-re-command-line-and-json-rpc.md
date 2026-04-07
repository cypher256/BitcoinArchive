---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-03-05T01:46:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg633#msg633"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/89/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "sirius-m"
    personSlug: "martti-malmi"
    date: "2010-02-24T09:17:35.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> これはおかしいですね…64ビットLinuxサーバーでBitcoinをデーモンとして起動すると、残りの250MBのRAMと700MBのスワップをすべて食い尽くして、最終的にクラッシュします。32ビットのUbuntuデスクトップでは問題なく動作し、メモリ使用量は15MBに留まります。サーバーでは64ビットビルドのBitcoinを実行しています。ビルドに何か問題があるのかもしれません。
<!-- /tone-skip -->
sirius-mがこれをデバッグした。64ビット関連の問題だった。

修正はSVNのutil.cppファイルで利用可能になった。
