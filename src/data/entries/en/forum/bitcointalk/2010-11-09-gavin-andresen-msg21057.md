---
title: "Re: Some testing that I did on the testnetwork, my findings."
date: 2010-11-09T19:36:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21057#msg21057"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 1668. before msg21959."
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
---

With davidonpda's help, I did some testing myself today with Satoshi's latest code changes (setting priority based on transaction age, bitcoin amounts in, and total transaction size in bytes -- svn rev 176).

It behaved as expected, putting larger, older transactions ahead of the pennies being flooded into the network, so "normal" transactions will be confirmed promptly even if somebody decides to be a jerk and floods the network with transactions.
