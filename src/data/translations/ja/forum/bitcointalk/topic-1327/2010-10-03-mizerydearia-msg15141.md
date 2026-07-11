---
title: "Re: バージョン 0.3.13、アップグレードしてください"
date: 2010-10-03T21:24:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15141#msg15141"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalk トピック 1327 における mizerydeaia の文脈投稿。msg15147 の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-10-03T18:17:06.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1327/2010-10-03-re-version-0-3-13"
  - id: "q2"
    person: "ShadowOfHarbringer"
    personSlug: "shadowofharbringer"
    date: "2010-10-02T13:00:07.000Z"
    parent: "q1"
    sourceEntryId: "forum/bitcointalk/topic-1327/2010-10-02-shadowofharbringer-msg14997"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> > それは良いが、自動 4way 検出が Gentoo AMD 64 版のクライアントで動いていない。
> > 
> > まだ `-4way` スイッチを追加する必要がある。
> 
> 言い忘れていたが、64 ビット AMD では検出がうまくいかないのではないかと疑っていた。信じがたいことだが、AMD は 64 ビットモードで異なるモデル番号を報告するのだ。
> 
> debug.log で CPUID を grep して、何が表示されるか教えてもらえないだろうか？（64 ビット AMD をお持ちの他の方も）どの AMD チップを使っているか？
> 
> 64 ビットをサポートするすべての AMD は、より良い SSE2 ハードウェアも搭載しているか？
<!-- /tone-skip -->

```
$ grep -i cpuid debug.log 
CPUID 444d4163 family 16, model 5, stepping 2, fUseSSE2=0
/proc/cpuinfo
```
