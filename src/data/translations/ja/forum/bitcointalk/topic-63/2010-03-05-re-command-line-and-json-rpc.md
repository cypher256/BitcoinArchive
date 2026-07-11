---
title: "Re: コマンドラインと JSON-RPC"
date: 2010-03-05T01:46:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg633#msg633"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コマンドラインと JSON-RPC」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/89/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "sirius-m"
    personSlug: "martti-malmi"
    date: "2010-02-24T18:17:35.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-sirius-msg502"
---

<!-- quote: q1 -->
<!-- tone-skip -->
<!-- audit:quote-skip -->
> これはおかしいですね…64 ビット Linux サーバーで Bitcoin をデーモンとして起動すると、残りの 250MB の RAM と 700MB のスワップをすべて食い尽くして、最終的にクラッシュします。32 ビットの Ubuntu デスクトップでは問題なく動作し、メモリー使用量は 15MB に留まります。サーバーでは 64 ビットビルドの Bitcoin を実行しています。ビルドに何か問題があるのかもしれません。
<!-- /tone-skip -->
sirius-m がこれをデバッグした。64 ビット関連の問題だった。

修正は SVN の util.cpp ファイルで利用可能になった。
