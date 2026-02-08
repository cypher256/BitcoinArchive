---
title: "Re: [パッチ] 自動ブロック検証"
date: 2010-08-16T17:08:02.000Z
source: bitcointalk
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

[Quote from: satoshi on August 16, 2010, 03:25:54 PM](https://bitcointalk.org/index.php?topic=832.msg9754#msg9754)チェック後にAddToBlockIndexまたはReorganizeを開始することはおそらく可能ですが、はるかに慎重な注意が必要になります。おそらくAddToBlockIndexの新しい最良ブロックを設定する部分を分離すべきでしょう。おそらく以下のコードの代わりにそうすることになるでしょう。
最終的にSVN rev 139でそのようにしました。

不正なチェーンを削除する代わりに、ConnectBlockに追加のCheckBlockを加えて、不正なブロックが一度排除された後に最良チェーンに戻れないようにしました。
