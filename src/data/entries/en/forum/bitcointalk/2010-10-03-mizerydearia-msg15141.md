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
description: "Context post by mizerydearia in BitcoinTalk topic 1327. before msg15147."
isSatoshi: false
threadId: "bt-version-0-3-13-please-upgrade"
tags: []
---

> [Quote from: satoshi on October 03, 2010, 06:17:06 PM](https://bitcointalk.org/index.php?topic=1327.msg15102#msg15102)
> Quote from: ShadowOfHarbringer on October 02, 2010, 01:00:07 PM

Forgot to say, I suspected the detect might not work on 64-bit AMD.  I found it hard to believe but AMD reports a different model number in 64-bit mode.

Could you grep CPUID your debug.log and tell me what it says?  (and anyone else with 64-bit AMD)  And what AMD chip do you have?

Do all AMDs that support 64-bit have the better SSE2 hardware also?

Code:$ grep -i cpuid debug.log 
CPUID 444d4163 family 16, model 5, stepping 2, fUseSSE2=0
/proc/cpuinfo
