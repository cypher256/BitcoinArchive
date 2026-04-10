---
title: "Re: sdfh"
date: 2010-08-19T20:28:50.000Z
type: "forum-post"
source: "bitcointalk"
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

その通りだ。動作するためにトランザクションを再ブロードキャストし続ける必要はない。

どのノードでもフォークを切断する際、フォーク内のすべてのトランザクションをトランザクションプールに戻して新しいチェーンに追加する。ネットワーク全体があなたのトランザクションを再統合することを確実にしている。見えるのは、確認数が0から再び始まることだけのはずだ。

一部のタイプのフォークでは、あなたのトランザクションはすでに両方のフォークに入っていただろうから、どちらの場合でも問題ない。
