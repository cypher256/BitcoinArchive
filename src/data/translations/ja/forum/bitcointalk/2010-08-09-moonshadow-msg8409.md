---
title: "Re: (context post by MoonShadow)"
date: 2010-08-09T19:58:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8409#msg8409"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Context post by MoonShadow in BitcoinTalk topic 760. before msg8413."
isSatoshi: false
tags: []
translationStatus: pending
---

I'm not a programmer, but I have doubts that any of those 32 bit variables are subject to rolling over antime near 2038.  My understanding, however limited it may be, is that the timestamp of the blockchain is relative only to it's position within the chain, and not subject to any such limitations.  I'm sure that the two week difficulty calculations require an accurate count of seconds, but at worst, that would just throw off the calculations for the two weeks around the rollover in 2038.  And since there is a limit to just how much the difficulty may change in any two week period, even that isn't particularly crucial.
