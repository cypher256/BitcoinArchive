---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-13T20:26:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9096#msg9096"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 807. before msg9134."
isSatoshi: false
tags: []
---

[Quote from: jgarzik on August 13, 2010, 08:13:30 PM](/BitcoinArchive/entries/forum/bitcointalk/2010-08-13-jgarzik-msg9090/)
> What happens when we desire to return additional information, beyond tx-id?
> 
> For the sake of future compatibility, it seems like the flag should present a choice between returning (a) just the current 'sent', or (b) a JSON map containing tx-id, and perhaps other things.

A 'gettransaction tx_id' API call is on my short list.

What do other folks think; should sendtoaddress .... true   return just the tx_id, and you have to make another API call to get details if you need them?
Or should it return an Array?
