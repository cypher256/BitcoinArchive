---
title: "Rate-limit free transactions"
date: 2011-03-13T17:50:13.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/117"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "PR #117 thread starter by gavinandresen in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

Reason for this change:  better mitigation of "penny-flooding."

Behavior before this change:  If you ran with the -limitfreerelay boolean arg set, bitcoin would stop relaying free transactions if it got more than 150Kbytes of them in any 10-minute period.

Behavior after this change:  Bitcoin will stop relaying free transactions based on an exponential rate-limiting function, where more transactions in a shorter period of time are more likely to be dropped (and the default average is to allow about 150Kbytes over 10 minutes).  -limitfreerelay is changed from a boolean to a KBytes/minute rate; default is 15.

Original code from Satoshi-- I added a couple of comments and allowed the rate to be set with the -limitefreerelay option.
