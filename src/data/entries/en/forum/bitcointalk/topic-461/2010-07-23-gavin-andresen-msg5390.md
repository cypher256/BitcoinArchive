---
title: "Re: JSON-RPC password"
date: 2010-07-23T21:18:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5390#msg5390"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. after msg5383, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-07-23T20:39:03.000Z"
    sourceEntryId: "forum/bitcointalk/topic-461/2010-07-23-sni260-re-json-rpc-password"
---

> BTW, I haven't tested it, but I hope having rpcpassword=  in the conf file is valid.  It's only if you use -server or -daemon or bitcoind that it should fail with a warning.  If it doesn't need the password, it should be fine.  Is that right?

Yes, that's right, rpcpassword is only required if you use -server or -daemon or bitcoind (I just tested to be sure).

RE: what if the programmer can't figure out how to make their legacy COBOL code do HTTP authentication?
Then I think another config file setting to explicitly turn off RPC authentication would be better than a magical "if you set a blank rpcpassword then that turns off authentication."   But I wouldn't implement that until somebody really does have a problem or until we have more than one way of doing the authentication (maybe https someday...).

lachesis: is supporting HTTP Basic Authentication a problem for you?
