---
title: "Re: バージョン0.3.13、アップグレードしてください"
date: 2010-10-03T21:24:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15141#msg15141"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック1327におけるmizerydeaiaの文脈投稿。msg15147の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: satoshi on October 03, 2010, 06:17:06 PM](#msg15102)
> [Quote from: ShadowOfHarbringer on October 02, 2010, 01:00:07 PM](#msg14997)
> > それは良いが、自動4way検出がGentoo AMD 64版のクライアントで動いていない。
> >
> > まだ"-4way"スイッチを追加する必要がある。
>
> まだ「-4way」スイッチを追加する必要がある。
> 言い忘れていたが、64ビットAMDでは検出がうまくいかないのではないかと疑っていた。信じがたいことだが、AMDは64ビットモードで異なるモデル番号を報告するのだ。
>
> debug.logでCPUIDをgrepして、何が表示されるか教えてもらえないだろうか？（64ビットAMDをお持ちの他の方も）どのAMDチップを使っているか？
>
> 64ビットをサポートするすべてのAMDは、より良いSSE2ハードウェアも搭載しているか？
[Quote from: ShadowOfHarbringer on October 02, 2010, 01:00:07 PM](#msg14997)
> それは良いが、自動4way検出がGentoo AMD 64版のクライアントで動いていない。
>
> まだ"-4way"スイッチを追加する必要がある。

Code:$ grep -i cpuid debug.log 
CPUID 444d4163 family 16, model 5, stepping 2, fUseSSE2=0
/proc/cpuinfo
