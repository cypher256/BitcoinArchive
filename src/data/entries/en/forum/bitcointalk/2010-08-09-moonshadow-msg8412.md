---
title: "Re: (context post by MoonShadow)"
date: 2010-08-09T20:12:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8412#msg8412"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 760. before msg8413."
isSatoshi: false
tags: []
---

[Quote from: davidonpda on August 09, 2010, 08:07:26 PM](https://bitcointalk.org/index.php?topic=760.msg8410#msg8410)
> The problem with the time stamps, is a unix time stamp as a 32 bit integer WILL overflow in 2038. I am a programmer, but you can find more info on it by googling unix time problem or 2038

I understand the Y2038 problem from a layman's perspective.  My point was that, I doubted that a Y2038 problem exists within the structure of bitcoin.  Since the timestamp is relative only to a particular position within the blockchain, there is no reason that a client should require an accurate timestamp within the block.  And then, what would that be?  GMT?  I'm pretty sure that my client is doing fine with local time.  If that could be getting any successful blocks rejected, let me know, please.
