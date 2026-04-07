---
title: "Re: TOR and I2P"
date: 2010-04-20T14:26:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg977#msg977"
author: "fergalish"
participants:
  - name: "fergalish"
    slug: "fergalish"
description: "Context post by fergalish in BitcoinTalk topic 22. after msg223."
isSatoshi: false
tags: []
---

I'm trying to set up a hidden service on tor, and I've copied the following into my torrc:

HiddenServiceDir /some/directory
HiddenServicePort 8333 127.0.0.1:8333

but now I'd like to make bitcoin bind only to 127.0.0.1:8333 whereas "netstat -lp" shows that it is listening on all interfaces. I haven't easily found how to specify this.

suggestions?
