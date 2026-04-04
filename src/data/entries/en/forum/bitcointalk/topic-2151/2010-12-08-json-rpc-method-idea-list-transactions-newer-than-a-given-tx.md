---
title: "JSON-RPC method idea: list transactions newer than a given txid"
date: 2010-12-08T08:07:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28160#msg28160"
author: "davux"
participants:
  - name: "davux"
    slug: "davux"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "davux starts a discussion: JSON-RPC method idea: list transactions newer than a given txid."
isSatoshi: false
tags: []
---

It would be great to have a JSON-RPC method for listing new transactions that are newer than a particular transaction id. This would enable developpers to watch new transactions easily, by just keeping track of the latest known txid and polling that method at the rate of their choice.

A possible way to do it would be to extend listttransactions so that it accepts an optional txid argument:
Code:
