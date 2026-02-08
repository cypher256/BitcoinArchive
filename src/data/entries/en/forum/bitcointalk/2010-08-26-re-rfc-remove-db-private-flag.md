---
title: "Re: RFC: remove DB_PRIVATE flag"
date: 2010-08-26T00:33:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg11224#msg11224"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"RFC: remove DB_PRIVATE flag\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/419/"
threadId: "bt-rfc-remove-db-private-flag"
threadTitle: "RFC: remove DB_PRIVATE flag"
threadPosition: 1
---

Can you provide more details about what removing DB_PRIVATE does?

I can't remember if I had a specific reason for DB_PRIVATE, or if I just copied the flags from some example code.  Does removing DB_PRIVATE make it safe for other processes to open the database simultaneously?  That may be an improvement, depending what the side effects are.  Does it substantially reduce performance by making it have to write out every change immediately or do other coordination?  Are there additional locking or coordination files then?  What else changes?  You could test by timing an initial block download with and without DB_PRIVATE, preferably -connect-ing to a local machine so network isn't a factor.

Apparently, DB_PRIVATE doesn't do what you would hope it would do, which is prevent other processes from being able to open the database.  It still lets them, it just screws up if they do.  Another option, if there's a way, would be to make it lock the database files so they can't be accessed by other processes.
