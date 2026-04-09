---
title: "Remove USE_SSL #define"
date: 2012-04-05T01:26:12.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1042"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "PR #1042 thread starter by gavinandresen in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

This removes all uses of the USE_SSL preprocessor #define.

It used to be necessary because Satoshi and I couldn't figure out how to get OpenSSL's libssl to compile on Windows properly (so we were linking against only libcrypto).  That issue is long gone, so lets simplify the code and get rid of USE_SSL.
