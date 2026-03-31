---
title: "Re: Version 0.3.13, please upgrade"
date: 2010-10-03T21:24:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15141#msg15141"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック1327におけるmizerydearia の投稿。msg15147の前。"
isSatoshi: false
threadId: "bt-version-0-3-13-please-upgrade"
tags: []
translationStatus: complete
---

> [サトシの引用、2010年10月3日 午後6:17:06](https://bitcointalk.org/index.php?topic=1327.msg15102#msg15102)
> ShadowOfHarbringerの引用、2010年10月2日 午後1:00:07

言い忘れていたが、64ビットAMDでは検出がうまくいかないのではないかと思っていた。信じがたいことだが、AMDは64ビットモードで異なるモデル番号を報告する。

debug.logでCPUIDをgrepして結果を教えてくれないか？（64ビットAMDを使っている他の人もお願いしたい。）どのAMDチップを使っているか？

64ビット対応のAMDはすべて、より優れたSSE2ハードウェアも搭載しているのだろうか？

Code:$ grep -i cpuid debug.log 
CPUID 444d4163 family 16, model 5, stepping 2, fUseSSE2=0
/proc/cpuinfo
