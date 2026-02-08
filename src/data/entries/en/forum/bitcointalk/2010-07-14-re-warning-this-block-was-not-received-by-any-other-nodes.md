---
title: "Re: Warning this block was not received by any other nodes"
date: 2010-07-14T18:56:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=291.msg2913#msg2913"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Warning this block was not received by any other nodes\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/186/"
---

Microsoft Security Essentials Live Protection is blocking your communication with the network.  You have connections, which tricks Bitcoin into thinking it's connected, but they are silent because the data is being blocked.

You need to make bitcoin.exe an excluded process in Live Protection.

This is becoming a common problem.  Someone should write this up in a pegged thread.

The message "Warning: This block was not received by any other nodes" occurs when Bitcoin broadcasts a block, but nobody confirms they received it.  The warning is there just for this kind of situation, where for some reason you have connections, but they have gone dead and nobody can hear you.  Your block will never become valid because nobody received it.
