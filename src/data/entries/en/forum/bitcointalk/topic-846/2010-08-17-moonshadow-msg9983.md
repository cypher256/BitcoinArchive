---
title: "Re: (context post by MoonShadow)"
date: 2010-08-17T21:52:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=846.msg9983#msg9983"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 846. before msg10076."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "lfm"
    personSlug: "lfm"
    date: "2010-08-17T12:33:14.000Z"
    sourceEntryId: "forum/bitcointalk/topic-846/2010-08-17-lfm-msg9981"
---

<!-- quote: q1 -->
> The successful coding of the sha-256 algorithim into a fpga and recoding of the bitcoin client's generation function to use one or more such fpga's would produce a khash per second rate that no desktop could match.  It would look like a super-computer from our perspectives.
> A lot of hand waving there. For some concrete numbers it quotes 53 MB/s and since we only hash 192 bytes at a time, you might think it would do 27 mhash/s (but it probably would be less) which I beleive is actually within the range of a desktop with a couple GPUs.

Yes, but there are two points that you overlooked.  First, the software transceiver ususally requires four of these chips.  (two for receive and two for transmit, one does digital signal processing and the other does digital filtering of the raw signal.  Said another way, one is the virtual mike/speaker and the other is a virtual tuner.  Not all such software radio setups need four, however)  So if a ham has four of these, all four could be programmed to this end.  The other point is one that I didn't explicitly mention, one FPGA does not equal only one sha-256 processor.  It is possible, even likely, that more than one such processor could be programmed into a single FPGA chip.  These chips are fairly large so that they can 'virtualize' some pretty complex logic circuts, and a talented programmer could program one chip to be several sha-256 processors running in parrallel.  All this, and his main CPU and GPU are still available if still more Kh/s are desired.  Any hacker with the skills to program one or more GPU's in the same system to crunch hashes is already elite, and doing multiple sha-256 cores on a single FPGA would be child's play.  And we already know that there is some elite talent within the Bitcoin community, some who desire to run it, and some who desire to break it.
