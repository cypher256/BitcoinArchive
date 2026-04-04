---
title: "Re: JSON-RPC password"
date: 2010-07-23T15:11:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5296#msg5296"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg5338."
isSatoshi: false
tags: []
---

I've updated the RPC wiki page for how the password stuff will work in Bitcoin 0.3.3.

One nice side effect: you can prepare for the changes now; create a bitcoin.conf file with a username and password and modify your JSON-RPC code to do the HTTP Basic Authentication thing.  Old code will just ignore the .conf file and the Authorization: HTTP header.

Question for everybody:  should I add a section to the wiki page describing, in detail, how to do HTTP Basic authentication?  PHP and Python make is really easy-- just use the http://user:pass@host:port/ URL syntax.  I don't want to just duplicate the HTTP Basic authentication Wikipedia page.
