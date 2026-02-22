---
title: "Re: Bitcoin P2P e-cash paper"
date: 2008-11-03T13:32:39Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014817.html"
author: "John Levine"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "John Levine"
    slug: "john-levine"
description: "Internet expert John Levine dismisses Bitcoin's security assumption, arguing that botnet operators routinely control zombie farms of 100,000+ machines and that hashcash failed for the same reason — the bad guys have vastly more computational firepower than the good guys."
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 4
inReplyTo: "emails/cryptography/2008-10-31-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "botnet"
  - "hashcash"
  - "security"
  - "skepticism"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
  - name: "Mail Archive mirror"
    url: "https://www.mail-archive.com/cryptography@metzdowd.com/msg09966.html"
---

> As long as honest nodes control the most CPU power on the network,
> they can generate the longest chain and outpace any attackers.

But they don't.  Bad guys routinely control zombie farms of 100,000
machines or more.  People I know who run a blacklist of spam sending
zombies tell me they often see a million new zombies a day.

This is the same reason that hashcash can't work on today's Internet
-- the good guys have vastly less computational firepower than the bad
guys.

I also have my doubts about other issues, but this one is the killer.

R's,
John
