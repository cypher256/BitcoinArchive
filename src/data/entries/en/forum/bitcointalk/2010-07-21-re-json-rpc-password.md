---
title: "Re: JSON-RPC password"
date: 2010-07-21T00:05:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4577#msg4577"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/250/"
---

Still need to know what's the most typical settings file format on Linux.  Is there a standard file extension?  I've never seen a settings file using JSON, and it doesn't look very human friendly with everything required to be in quotes.  I think what I usually see is like:
# comment
setting=value

Is there a settings file thing in Boost?

When you're using bitcoind to issue commands from the command line as a client, can we have it get the password from the settings file then too?

Gavin pointed out I forgot to increment the column of numbers in CommandLineRPC, so the current -rpcpw= implementation doesn't work right from the command line with non-string parameters.  (JSON-RPC is fine)  Still under construction.
