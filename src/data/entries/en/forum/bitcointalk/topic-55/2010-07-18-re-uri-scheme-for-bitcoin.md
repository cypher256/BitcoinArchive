---
title: "Re: URI-scheme for bitcoin"
date: 2010-07-18T16:06:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg4008#msg4008"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"URI-scheme for bitcoin\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/240/"
quotes:
  - id: "q1"
    person: "lachesis"
    personSlug: "lachesis"
    date: "2010-06-15T21:14:05.000Z"
  - id: "q2"
    person: "sirius-m"
    personSlug: "martti-malmi"
    date: "2010-06-15T23:26:14.000Z"
---

<!-- quote: q1 -->
> I think you're misunderstanding the issue. My browser will always be able to go to 127.0.0.1 (barring some strange IE settings or a virus). If I type the address into the URL bar or click a link, it will work fine. However, it isn't possible to use Javascript to complete POST requests between domains (or ports on the same domain).

That's what I thought too.

<!-- quote: q2 -->
> Yeah, I meant to say that cross-domain javascript calls are forbidden, so you can't call 127.0.0.1 from a javascript that doesn't reside in 127.0.0.1. Come to think of it, it would be quite funny if browsers allowed malicious cross-domain javascript to change people's Facebook pages etc.

Now I'm hearing a report that it IS possible for javascript to do a cross-domain POST request to 127.0.0.1.  Not other domains, but just specifically to that one.  Great...

If this is the case, then do not use the -server switch or bitcoind on a system where you do web browsing.

I'll get started on adding the password field.
