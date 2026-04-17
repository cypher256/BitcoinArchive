---
title: "Re: JSON-RPC password"
date: 2010-07-19T12:30:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4221#msg4221"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg4268."
isSatoshi: false
tags: []
---

The Transmission BitTorrent client does authenticated JSON-RPC; see "Remote Control" section of:
 https://trac.transmissionbt.com/wiki/ConfigurationParameters

E.g. setting.json file might look like:

```
{
    "rpc-enabled":1
    "rpc-authentication-required": 1,
    "rpc-password": "xxxxxxxxxx",
    "rpc-port": 9091,
    "rpc-username": "xxxxxxxxxx",
    "rpc-whitelist-enabled":1
    "rpc-whitelist":"127.0.0.1,192.168.*.*"
}
It uses HTTP 'basic' authentication (Authorization: basic base64(username:password) in the HTTP headers).
```
