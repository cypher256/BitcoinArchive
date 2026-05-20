---
title: "[bitcoin-list] Does Bitcoin Crash in Windows?"
date: 2009-10-23T11:50:10Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/23818861/"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "NewLibertyStandard reports occasional Bitcoin crashes while running under Wine 1.0.1, speculates a possible correlation with wallet balance, and shares the terminal output produced at startup."
isSatoshi: false
tags:
  - "mailing-list"
  - "wine"
  - "crash-report"
  - "linux"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/10/"
---

Do you Windows users experience occasional Bitcoin crashes?

Lately Bitcoin running in wine-1.0.1 has been crashing frequently. I was just wondering whether this is a Wine issue or a Bitcoin issue. I speculate it might have something to do with how many Bitcoins I have since it would crash less when I had less bitcoins and now crashes more now that I have more bitcoins. It makes me hesitant to send my balance of bitcoins to my fresh Bitcoin installation. But this might just be my imagination since it has crashed a few times after installing Bitcoin afresh.

The following four lines print from the terminal when I start Bitcoin.
fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
fixme:toolhelp:Heap32ListFirst : stub
fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
fixme:toolhelp:Heap32ListFirst : stub

I previously wasn't starting Bitcoin from the terminal, so I don't know what gets printed out when it crashes, but I'll reply with the results the next time it crashes.

While Bitcoin first downloads previously completed blocks, the file debug.log grows grows to 17.4 MB and then stops growing. I imagine it will continue to grow as more bitcoins are completed.

~NewLibertyStandard~
