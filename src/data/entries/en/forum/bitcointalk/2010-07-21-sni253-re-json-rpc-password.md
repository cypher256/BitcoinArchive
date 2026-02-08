---
title: "Re: JSON-RPC password"
date: 2010-07-21T17:31:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4775#msg4775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/253/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 7
---

boost::program_options has the same "key=value" format.  Gavin pointed out we can use it in a simple way as a parser without getting into all the esoteric c++ syntax like typed value extraction.  We can use more features if we want later.

Lets go ahead with HTTP basic authentication instead of password as a parameter.
