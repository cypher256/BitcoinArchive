---
title: "Re: bitcoin fails to find/read .conf when using -datadir argument"
date: 2011-08-09T17:02:24.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/241#issuecomment-1765204"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "Comment by gavinandresen in bitcoin/bitcoin issue #241. mentions Satoshi."
isSatoshi: false
tags:
  - "github"
---

Won't fix-- it is what it is.

(for the record, Satoshi re-wrote my initial implementation to put the .conf file on top of the testnet/ folder, so I agree with y'all.  But changing it again now isn't, in my opinion, worth all the confusion the change would cause).
