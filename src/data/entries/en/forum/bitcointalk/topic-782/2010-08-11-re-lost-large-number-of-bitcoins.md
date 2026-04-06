---
title: "Re: Lost large number of bitcoins"
date: 2010-08-11T21:46:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8803#msg8803"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Lost large number of bitcoins\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/343/"
quotes:
  - id: "q1"
    person: "sirius-m"
    date: "2010-08-10T17:01:53.000Z"
    sourceEntryId: "forum/bitcointalk/topic-782/2010-08-11-sirius-msg8657"
  - id: "q2"
    person: "gridecon"
    date: "2010-08-11T11:46:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-782/2010-08-11-gridecon-msg8795"
---

<!-- quote: q1 -->
> I added to the FAQ the warning to back up after each transaction. Is it necessary btw to stop the client before making a backup? That's a bit inconvenient. Automatic backups would be useful indeed.

You can get away with backing up without stopping the client if you don't do anything or receive a payment within a few seconds before the backup.  (like 5 seconds) 

<!-- quote: q2 -->
> Wait, I'm confused again. I thought the essence of the surprise was that Bitcoin is programmed to "empty your wallet" for EACH transaction. 

No, it doesn't usually empty your wallet with each transaction.  It uses the smallest set of coins it can find to add up to near the amount.  In this case, unfortunately, his wallet had a single 9000 BTC bill in it, and it had to break it to get 1 BTC and 8999 BTC change.
