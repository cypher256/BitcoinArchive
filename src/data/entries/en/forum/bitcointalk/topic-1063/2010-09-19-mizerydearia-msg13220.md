---
title: "Re: Bug?  /usr/bin/bitcoind &quot;&quot;"
date: 2010-09-19T22:39:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1063.msg13220#msg13220"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Context post by mizerydearia in BitcoinTalk topic 1063. after msg13211."
isSatoshi: false
tags: []
---

I agree with using something like trac or mantisbt.  I suggest we try one of those two and if it helps improve things, then continue using it.  Otherwise it it doesn't seem to work, we still have the forum and nothing is lost.

Also, since `bitcoind ""` is not a bug, then for my gentoo linux ebuild init script to exec as that (dependent on /etc/conf.d/bitcoin containing BITCOIN_OPTS="") is the bug and I will fix that.
Fixed!
