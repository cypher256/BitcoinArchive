---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-16T22:54:55.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9841#msg9841"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/395/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 12
translationStatus: complete
---

未アップグレードのノードはほとんどの場合正しいチェーンを持っていますが、依然としてすべてのブロックにオーバーフロートランザクションを含めようとしているため、継続的にフォークして無効なブロックを生成しようとしています。旧バージョンのノードを再起動すると、トランザクションプールが空になるため、トランザクションが再ブロードキャストされるまでしばらくは有効なブロックを生成するかもしれません。0.3.9以下のノードはまだアップグレードが必要です。

SVNには、blk*.datファイルを手動で削除せずにブロックチェーンを自動的に再編成するために必要なコードが入っています。昨日はそのコードを迅速かつ慎重に書くことができないとわかっていたので、手動の簡易オプションで対応しました。
