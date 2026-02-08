---
title: "Re: 失われたコイン/送金に関する仮説的な質問"
date: 2010-08-19T20:28:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=870.msg10300#msg10300"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「失われたコイン/送金に関する仮説的な質問」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/405/"
translationStatus: complete
---

その通りです。動作するためにトランザクションを再ブロードキャストし続ける必要はありません。

どのノードでもフォークを切断する際、フォーク内のすべてのトランザクションをトランザクションプールに戻して新しいチェーンに追加します。ネットワーク全体があなたのトランザクションを再統合することを確実にしています。見えるのは、確認数が0から再び始まることだけのはずです。

一部のタイプのフォークでは、あなたのトランザクションはすでに両方のフォークに入っていたでしょうから、どちらの場合でも問題ありません。
