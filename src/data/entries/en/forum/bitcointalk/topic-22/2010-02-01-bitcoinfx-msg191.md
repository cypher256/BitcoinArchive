---
title: "Re: TOR and I2P"
date: 2010-02-01T21:36:47.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg191#msg191"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "Context post by BitcoinFX in BitcoinTalk topic 22. after msg113."
isSatoshi: false
tags: []
---

I also run a Tor relay and exit node and had similar ideas for Tor integration with Bitcoin.

Tor can be very fast if you edit your config correctly. You just need to limit the connectivity with slow servers and only use the fastest nodes where possible. I also like to block any nodes in 'problem' internet countries, which also tend to have slower connectivity, this also increases overall privacy somewhat. I also block Unnamed, ididnteditheconfig, any servers that I don't like the name of and unstable servers.

This config. example is only good for non-relay / non-exit personal use. Although its great for P2P Smiley

AvoidDiskWrites 1

ExcludeNodes SlowServer,{sd},{pk},{tn},{ae},{by},{in},{bh},{th},{ye},{mm},{eg},{sg},{ma},{cu},{qa},{sa},{by},{md},{tm},{tr},{et},{jo},{sy},{om},{ir},{az},{uz},{kz},{kg},{af},{cn},{bd},{vn},{ng},{gh},{ro},{lb},{ru},{iq},{ly},{ve},{zw},{my},{mo},{kr},unnamed,ididnteditheconfig ...etc.

StrictEntryNodes 1

EntryNodes (Select Fast Entry and Authority Servers from http://trunk.torstatus.kgprog.com/index.php?Fast=0 )

StrictExitNodes 1

ExitNodes (Select Fast Exit Only from http://trunk.torstatus.kgprog.com/index.php?Fast=0 )

It's also a good idea to alter the time which Tor takes to automatically switch circuits and some other custom settings https://www.torproject.org/tor-manual.html

Hope this helps Wink
