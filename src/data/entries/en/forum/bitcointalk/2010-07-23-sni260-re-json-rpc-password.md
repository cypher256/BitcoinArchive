---
title: "Re: JSON-RPC password"
date: 2010-07-23T20:39:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5383#msg5383"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/260/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 11
---

I don't think authentication should be disabled by default if there's no conf file or the config file doesn't contain "rpcpassword", but what if it contains "rpcpassword="?

I can see both points.

What if the programmer can't figure out how to do HTTP authentication in their language (Fortran or whatever) or it's not even supported by their JSON-RPC library?  Should they be able to explicitly disable the password requirement?

OTOH, what if there's a template conf file, with
rpcpassword=  # fill in a password here

There are many systems that don't allow you to log in without a password.  This forum, for instance.  Gavin's point seems stronger.

BTW, I haven't tested it, but I hope having rpcpassword=  in the conf file is valid.  It's only if you use -server or -daemon or bitcoind that it should fail with a warning.  If it doesn't need the password, it should be fine.  Is that right?
