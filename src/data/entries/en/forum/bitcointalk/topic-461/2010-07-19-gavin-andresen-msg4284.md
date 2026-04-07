---
title: "Re: JSON-RPC password"
date: 2010-07-19T16:58:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4284#msg4284"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg4577."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-19T07:20:50.000Z"
---

<!-- quote: q1 -->
> So you drop a settings file in the ~/.bitcoin directory, that sounds better.  In the "no password is set" warning, it could tell you where the file is and what to do.
> What is the most popular and common settings file format?

You ask hard questions!  Most common: probably Windows INI files, because Windows is most common OS.

I'd lobby for using JSON; it's (mostly) a subset of YAML (which is a common choice for config files), so any JSON or YAML parser will read it.
I think the only big advantage is that it keeps authentication where it belongs in the transport layer, so if, in the future, you **do** want to go with full-fledged HTTPS with certificates the API doesn't have to change.
No, I just confused "command" with "parameter", and did this:

Code:> bitcoind help
error: First parameter must be the password.
> bitcoind <my password> help
error: unknown command: <my password>
>bitcoind help <my password>
 ... that works.
