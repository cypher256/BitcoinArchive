---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-11T16:40:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8765#msg8765"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 788. before msg8804."
isSatoshi: false
tags: []
translationStatus: pending
---

[Quote from: davidonpda on August 11, 2010, 04:19:43 PM](https://bitcointalk.org/index.php?topic=788.msg8764#msg8764)
> [Quote from: gavinandresen on August 11, 2010, 04:10:56 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-11-gavin-andresen-msg8761/)
> > + require some proof-of-work as part of the client-to-client connection process (helps prevent 'Sybil' attacks).
> 
> 
> Isn't that a brilliant idea? Like hashcash? 
> 
> You would be required to hash the string of the transaction, with a proof of work, that would say, take 5 seconds to calculate on a modern PC. Checking the POW just like in bitcoin would be easy and very quick for the receiving machines, but would stop a flood attack of random data without the attacker having limitless CPU power.

I was actually thinking of a minute or three of proof-of-work on initial connection, not when submitting a transaction, but requiring some proof-of-work for every transaction submitted into the network IS a very interesting idea!  Should be straightforward to implement, too (add a nonce and either a full or partial hash to the transaction)...
