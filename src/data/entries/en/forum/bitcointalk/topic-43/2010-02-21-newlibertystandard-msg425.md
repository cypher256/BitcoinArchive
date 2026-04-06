---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-21T18:52:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg425#msg425"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 43. before msg540."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Sabunir"
    date: "2010-02-21T07:58:44.000Z"
---

<!-- quote: q1 -->
> How do you adjust this difficulty, anyway? (Administrating a decentralized system?) And what would prevent an attacker from setting the difficulty very low or very high to interfere with the system?

My understanding is that every Bitcoin client has the same algorithm (formula) built into it to automatically adjust the difficulty every so many blocks. Not only that, but I think that Bitcoin will not accept blocks generated at a different difficulty, so if a modified Bitcoin client tried to send out more easily generated blocks, all the authentic clients would reject the fake blocks.
