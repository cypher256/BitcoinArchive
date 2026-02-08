---
title: "Bitcoin 0.3.2 released"
date: 2010-07-17T21:35:51.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=437.msg3807#msg3807"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Bitcoin 0.3.2 released\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/232/"
threadId: "bt-bitcoin-0-3-2-released"
threadTitle: "Bitcoin 0.3.2 released"
threadPosition: 1
---

Download links available now on bitcoin.org.  Everyone should upgrade to this version.

- Added a simple security safeguard that locks-in the block chain up to this point.
- Reduced addr messages to save bandwidth now that there are plenty of nodes to connect to.
- Spanish translation by milkiway.
- French translation by aidos.

The security safeguard makes it so even if someone does have more than 50% of the network's CPU power, they can't try to go back and redo the block chain before yesterday.  (if you have this update)

I'll probably put a checkpoint in each version from now on.  Once the software has settled what the widely accepted block chain is, there's no point in leaving open the unwanted non-zero possibility of revision months later.
