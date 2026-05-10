---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-02T19:02:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg7084#msg7084"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが AMD と Intel での速度差について質問し、スタック上のアライメント問題について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/307/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "tcatm"
    personSlug: "tcatm"
    date: "2010-07-31T01:12:38.000Z"
---

AMD では 2倍速で、Intel では半分の速度ということか？

<!-- quote: q1 -->
<!-- tone-skip -->
> ところで、\_\_attribute\_\_ ((aligned (16))) でコンパイル時にアラインを指定できるのに、なぜこのalignup\<16\>関数を使っているのか？
<!-- /tone-skip -->

試したが、スタック上のものには機能しない。いくつかテストを行った。

エラーすら出ず、単にアラインされないだけだ。
