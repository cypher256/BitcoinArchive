---
title: "Re: JSON-RPC password"
date: 2010-07-19T15:20:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4248#msg4248"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg4268."
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: pending
---

After further research...  I think the Transmission approach, combined with the existing "only allow connections from 127.0.0.1" is a good short/medium-term solution.

Putting the username:password in a settings.json file in the Bitcoin directory aught to work nicely (since Bitcoin can already parse JSON).  And keeping the authentication stuff off the command line and in the HTTP headers instead of the JSON request params is nice and clean.

Long term, the "right" way to do authenticated, secure JSON-RPC is with client-side certificates and https.    But that looks like it would be a lot of work to implement and a big learning curve for users to figure out how to generate client-side certificates and how to get both sides of the JSON-RPC connection using them.   And I'm not even certain a full-blown client certificate solution would solve the problem of malicious Javascript making JSON-RPC requests via XMLHttpRequests to localhost; if the user installed the client certificate in the browser (because maybe there was a nifty JSON-RPC-powered web front-end to controlling Bitcoin), would the browser automatically send the client certificate if a malicious website made requests?
