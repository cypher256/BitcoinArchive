---
title: "Re: [パッチ] 自動ブロック検証"
date: 2010-08-16T17:08:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=832.msg9775#msg9775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「[パッチ] 自動ブロック検証」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/392/"
translationStatus: complete
---

[Quote from: satoshi on August 16, 2010, 03:25:54 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-832/2010-08-16-satoshi-msg9754/)
> チェック後にAddToBlockIndexまたはReorganizeを開始することはおそらく可能だが、はるかに慎重な注意が必要になる。おそらくAddToBlockIndexの新しい最良ブロックを設定する部分を分離すべきだろう。おそらく以下のコードの代わりにそうすることになるだろう。

最終的にSVN rev 139でそのようにした。

不正なチェーンを削除する代わりに、ConnectBlockに追加のCheckBlockを加えて、不正なブロックが一度排除された後に最良チェーンに戻れないようにした。
