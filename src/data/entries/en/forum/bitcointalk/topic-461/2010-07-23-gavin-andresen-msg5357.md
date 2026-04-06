---
title: "Re: JSON-RPC password"
date: 2010-07-23T18:51:34.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5357#msg5357"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg5383."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "lachesis"
    date: "2010-07-23T09:22:08.000Z"
---

<!-- quote: q1 -->
> The password definitely shouldn't be required.

I strongly disagree; software should be secure by default, and running bitcoind without a password (or bitcoin -server) is definitely NOT secure.

I just don't see somebody saying "Man, Bitcoin sucks because I have to add a password to a configuration file before running it as a daemon."  I **can** see somebody saying "Man, Bitcoin sucks because I accidently ran it with the -server switch and somebody stole all my money."
