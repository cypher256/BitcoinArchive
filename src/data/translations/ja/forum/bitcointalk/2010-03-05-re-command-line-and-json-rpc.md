---
title: "Re: コマンドラインとJSON-RPC"
date: 2010-03-05T01:46:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg633#msg633"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインとJSON-RPC」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/89/"
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 7
translationStatus: complete
---

[sirius-mの2010年2月24日 06:17:35 PMの投稿より引用](https://bitcointalk.org/index.php?topic=63.msg502#msg502)これは変です... 64ビットLinuxサーバーでBitcoinをデーモンとして起動すると、残りのRAM 250MBすべて、スワップ700MBを食い尽くし、最終的にクラッシュします。32ビットのUbuntuデスクトップでは正常に動作し、メモリ使用量は15MBに留まります。サーバーは64ビットビルドのBitcoinを実行しています。ビルドか何かに問題があるのかもしれません。
sirius-mがこれをデバッグしました。64ビット関連の問題でした。

修正はSVNのutil.cppファイルで利用可能になりました。
