---
title: "ロード時のブロックチェーン検証"
date: 2010-08-16T20:07:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=841.msg9813#msg9813"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「ロード時のブロックチェーン検証」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/393/"
threadId: "bt-checking-the-block-chain-on-load"
threadTitle: "Checking the block chain on load"
threadPosition: 1
translationStatus: complete
---

SVN rev 139では、ロード後にブロックチェーンの基本的なチェックを行います。

これがあれば、blk*.datを削除する必要はなく、フォークまで自動的に再編成を行ったでしょう。当時はこれを慎重に実装する時間がありませんでした。

すべてのブロックをロードする必要があるため、望ましい以上に時間がかかるかもしれません。遅すぎる場合は、特定のブロック番号までしか遡らないようにすることもできます。
