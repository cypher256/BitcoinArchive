---
title: "HTTP status codes from the JSON-RPC api"
date: 2010-09-01T20:28:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg11884#msg11884"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Thread starter by Gavin Andresen in BitcoinTalk topic 969."
isSatoshi: false
tags: []
---

I just submitted a patch to Satoshi to make bitcoin follow the JSON RPC over HTTP spec, and to use the standardized error codes from the JSON-RPC 1.1/2.0 specs.

If you talk directly to bitcoin via JSON-RPC calls, you might need to change your code to recognize the new HTTP status codes and the new format for the 'error' member of the JSON response.  For example:

BEFORE, send {"id":"123", "method": "nosuchmethod", "params": &#91;] } , get response:
Code:HTTP/1.1 500 Internal Server Error
...

{"result":null,"error":"Method not found.","id":"123"}AFTER:Code:HTTP/1.1 404 
...

{"result":null,"error":{"code":-32601,"message":"Method not found"},"id":"123"}

I also removed the broken 'Batch' support, to simplify the code.  I had JSON-RPC-2.0 batch support working properly, but backed those changes out because JSON-RPC 2.0 is way too cutting-edge for bitcoin to support right now (none of the JSON-RPC glue libraries support it yet, and the spec is still changing a bit).
