---
title: "Re: Tor connections not working reliably, many seednodes offline"
date: 2010-10-06T17:36:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1375.msg15682#msg15682"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Tor connections not working reliably, many seednodes offline\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/488/"
---

Maybe you were just unlucky to have an exit node without reverse lookup.

The IRC server's response doesn't look like it was disconnecting you for that.  It's supposed to go IRC SENDING: NICK after that, and it doesn't so it gets timed out.

I see the problem.  The IRC code is looking for various phrases to see when the server is ready to receive your NICK, but it's not looking for that particular phrase.  I'll fix it.

I don't know if it's really required to wait for the server to finish looking up hostname before sending nick.

How long did it take to get connected with TOR the first time, having to use the seed nodes?
