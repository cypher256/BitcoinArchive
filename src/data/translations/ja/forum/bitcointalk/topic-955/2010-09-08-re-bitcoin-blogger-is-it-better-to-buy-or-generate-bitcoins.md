---
title: "Re: Bitcoin Blogger: Bitcoin は購入と生成のどちらが良いか？"
date: 2010-09-08T20:27:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=955.msg12248#msg12248"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインブロガー：ビットコインは購入と生成のどちらが良いか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/443/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "BitLex"
    personSlug: "bitlex"
    date: "2010-09-07T11:10:54.000Z"
    sourceEntryId: "forum/bitcointalk/topic-955/2010-09-07-bitlex-msg12189"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> AMD X3 @2.8ghz
> ->標準クライアント
> 約 3800khs 約 150 ワット
<!-- /tone-skip -->

-4way を試したか？

<!-- tone-skip -->
> 24コアのマシンではどれくらいのハッシュが期待できますか？クアッドコアで毎秒4,300ハッシュを生成しているので、24コアのマシンなら毎秒25,000ハッシュでマイニングできると見積もっています。
<!-- /tone-skip -->

AMD Phenom（確か 4 コア）CPU は-4way で約 11,000khps を出しており、約 100%の速度向上だ。24 コアなら 66,000khps になるはずだ。AMD は最良の SSE2 実装を持っているため最善の選択だ。（あるいは tcatm が AMD を持っていてそのコードをそれ向けに最適化したからかもしれない）

他にやることが多すぎて-4way を自動にする時間がなかった。今のところまだ手動で行う必要がある。
[topic 820](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-820/2010-08-16-ground-loop-msg9674/)
