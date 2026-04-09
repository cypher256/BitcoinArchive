---
title: "Encapsulate coin balances within a new CMoney type."
date: 2014-04-18T16:54:21.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/4067"
author: "maaku"
participants:
  - name: "maaku"
    slug: "maaku"
description: "PR #4067 thread starter by maaku in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

Provides code parity between bitcoin and side chains which use a different type for representing and performing arithmetic on coin balances, e.g. Freicoin's use of the GMP library's arbitrary-precision rational number type for increased divisibility and interest calculations. This greatly reduces the friction in sharing code and submitting code upstream. Also organizes related functionality such as FormatMoney and ParseMoney into a single class framework.
