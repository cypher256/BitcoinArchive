---
title: "Re: Version 0.3.13, please upgrade"
date: 2010-10-03T21:36:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15144#msg15144"
author: "ShadowOfHarbringer"
participants:
  - name: "ShadowOfHarbringer"
    slug: "shadowofharbringer"
description: "Context post by ShadowOfHarbringer in BitcoinTalk topic 1327. before msg15147."
isSatoshi: false
threadId: "bt-version-0-3-13-please-upgrade"
tags: []
translationStatus: pending
---

> [Quote from: satoshi on October 03, 2010, 06:17:06 PM](https://bitcointalk.org/index.php?topic=1327.msg15102#msg15102)
> Forgot to say, I suspected the detect might not work on 64-bit AMD.  I found it hard to believe but AMD reports a different model number in 64-bit mode.
> 
> Could you grep CPUID your debug.log and tell me what it says?  (and anyone else with 64-bit AMD)  And what AMD chip do you have?
> 
> Do all AMDs that support 64-bit have the better SSE2 hardware also?

Will that be enough ?:

Code:cat /proc/cpuinfo
processor       : 0
vendor_id       : AuthenticAMD
cpu family      : 16
model           : 2
model name      : AMD Phenom(tm) 9850 Quad-Core Processor
stepping        : 3
cpu MHz         : 2508.353
cache size      : 512 KB
physical id     : 0
siblings        : 4
core id         : 0
cpu cores       : 4
apicid          : 0
initial apicid  : 0
fpu             : yes
fpu_exception   : yes
cpuid level     : 5
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm 3dnowext 3dnow constant_tsc rep_good nonstop_tsc extd_apicid pni monitor cx16 popcnt lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs npt lbrv svm_lock
bogomips        : 5018.72
TLB size        : 1024 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 48 bits physical, 48 bits virtual
power management: ts ttp tm stc 100mhzsteps hwpstate

EDIT:
Also, i have just found out how to do the cpuid thingy:

Code:CPUID 444d4163 family 16, model 2, stepping 3, fUseSSE2=0
