---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-07-22T01:11:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4908#msg4908"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 461."
isSatoshi: false
tags: []
---

I volunteered to implement this, and made good progress today.  Satoshi: I should have patches for you tomorrow.

Done: teach Bitcoin to read settings from {BITCOIN_DIR}/bitcoin.conf file, and added -conf=path_to_config_file.conf command-line option.  
Done: teach Bitcoin RPC to require HTTP Basic authentication, and reject requests with the wrong username/password.

TODO: teach Bitcoin command-line RPC to add the Authorization: header.  You won't have to give the username/password when controlling bitcoin from the command line, it'll read them from the bitcoin.conf file and Do the Right Thing.
TODO: dialog box or debug.log warning if no rpc.user/rpc.password is set, explaining how to set.
TODO: limit password guessing attempts if the rpc.password is < 15 characters long.
TODO: update the JSON-RPC wiki page

After all that is done and I've sent patches to Satoshi, I'm going to add a couple more things to bitcoin.conf :

port=   # to set the listen port (override default 8333)
rpc.port= # to set the JSON-RPC port (override default 8332)

With the existing -datadir option, that'll make it easier for me to run multiple bitcoins on one box.
