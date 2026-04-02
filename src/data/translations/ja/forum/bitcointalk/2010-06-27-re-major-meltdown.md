---
title: "Re: 大規模なメルトダウン"
date: 2010-06-27T19:06:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=202.msg1838#msg1838"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「大規模なメルトダウン」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/160/"
threadId: "bt-major-meltdown"
translationStatus: complete
---

大規模なメルトダウンからの復旧方法に関する同様の質問への回答がこちらだ。
[https://www.bitcoin.org/smf/index.php?topic=191.msg1585#msg1585](https://www.bitcoin.org/smf/index.php?topic=191.msg1585#msg1585)

<!-- tone-skip -->
[Quote from: satoshi on June 14, 2010, 08:39:50 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-06-17-re-bitcoin-generation/)
> もしSHA-256が完全に破られた場合、問題が始まる前の正直なブロックチェーンが何であったかについて合意に達し、それを固定して新しいハッシュ関数で継続できると思います。
<!-- /tone-skip -->

ハッシュの崩壊が徐々に起きた場合は、秩序立った方法で新しいハッシュに移行できるだろう。ソフトウェアは特定のブロック番号以降に新しいハッシュを使い始めるようにプログラムされる。その時までに全員がアップグレードする必要がある。ソフトウェアは古いブロックの新しいハッシュを保存して、同じ古いハッシュを持つ別のブロックが使用されないようにすることができる。
