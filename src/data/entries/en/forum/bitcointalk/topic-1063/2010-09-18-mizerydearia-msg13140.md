---
title: "Bug?  /usr/bin/bitcoind &quot;&quot;"
date: 2010-09-18T22:19:22.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1063.msg13140#msg13140"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Quoted post by mizerydearia in BitcoinTalk topic 1063."
isSatoshi: false
tags: []
---

When I execute

```bash
/usr/bin/bitcoindbitcoin daemon starts as expected.
```

When I execute

```bash
/usr/bin/bitcoind ""error: couldn't connect to server
```

How come?  Is this a bug?

Satoshi: **May we have a bug tracking system please?** (size reduced since it was noticed by satoshi and is no longer necessary to stand out, which was meant as a bit humorous anyhow.)

Workaround for my gentoo linux init script:

```ini
BITCOIN_OPTS="-min"which will then execute as `bitcoind "-min"`
```
