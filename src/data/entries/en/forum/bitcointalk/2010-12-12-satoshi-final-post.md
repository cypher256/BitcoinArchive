---
title: "Re: Added some DoS limits, removed safe mode"
date: 2010-12-12T18:22:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2228.msg29479#msg29479"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi's last known public post on BitcoinTalk. He discusses software updates and then disappears from public communication."
isSatoshi: true
tags:
  - "final-post"
  - "dos-protection"
  - "software-update"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/543/"
---

There's more work to do on DoS, but I'm doing a quick build of what I have so far in case it's needed, before venturing into more complex ideas.

The build for this is version 0.3.19.

- Added some DoS controls

As Gavin and I have said clearly before, the software is not at all resistant to denial-of-service. This is one improvement, but there are still more ways to attack than I can count.

I'm doing a few more things, then I plan to pass the baton.
