---
title: "Re: ERROR - PLEASE HELP ME!"
date: 2010-10-22T14:25:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1530.msg18074#msg18074"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 1530. quoted by msg18241."
isSatoshi: false
threadId: "bt-error-please-help-me"
tags: []
translationStatus: pending
---

Dhaw generated all of these coins on his (her?) own machines.

Unfortunately, either due to a bug or some oddness with Dhaw's network connections they were all generated on an alternate block chain.

The Bitcoin client really shouldn't allow coin generation until you have all of the blocks up to the last block checkpoint.
