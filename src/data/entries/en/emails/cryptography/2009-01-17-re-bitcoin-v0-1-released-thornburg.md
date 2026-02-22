---
title: "Re: Bitcoin v0.1 released"
date: 2009-01-17T16:49:45Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/015016.html"
author: "Jonathan Thornburg"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Jonathan Thornburg"
    slug: "jonathan-thornburg"
description: "Indiana University astrophysicist Jonathan Thornburg raises concerns about government regulation and botnet exploitation of Bitcoin, arguing that no major government would allow untraceable international transfers and that botnets could move $100K by having a million nodes each send 10 cents."
threadId: "bitcoin-v0-1-released"
threadTitle: "Bitcoin v0.1 released"
threadPosition: 4
inReplyTo: "emails/cryptography/2009-01-16-sni17-bitcoin-v0-1-released"
isSatoshi: false
tags:
  - "regulation"
  - "botnet"
  - "money-laundering"
  - "skepticism"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/2/"
---

On Sat, 17 Jan 2009, Satoshi Nakamoto wrote:
[[various possible uses of Bitcoin et al]]
> Once it gets bootstrapped, there are so many
> applications if you could effortlessly pay a few cents to a
> website as easily as dropping coins in a vending machine.

In the modern world, no major government wants to allow untracable
international financial transactions above some fairly modest size
thresholds. (The usual catch-phrases are things like "laundering
drug money", "tax evasion", and/or "financing terrorist groups".)
To this end, electronic financial transactions are currently
monitored by various governments & their agencies, and any but the
smallest of transactions now come with various ID requirements for
the humans on each end.

But if each machine in a million-node botnet sends 10 cents to a
randomly chosen machine in another botnet on the other side of the
world, you've just moved $100K, in a way that seems very hard to
trace. To me, this means that no major government is likely to allow
Bitcoin in its present form to operate on a large scale.

I also worry about other "domestic" ways nasty people could exploit
a widespread Bitcoin deployment:
* Spammer botnets could burn through pay-per-send email filters
  trivially (as usual, the costs would fall on people other than
  the botnet herders & spammers).
* If each machine in a botnet sends 1 cent to a herder, that can
  add up to a significant amount of money. In other words, Bitcoin
  would make botnet herding and the assorted malware industry even
  more profitable than it already is.

Is there something obvious I've missed? Is there a clever aspect
of the design which prevents botnets from exploiting the system?
Is there a way for every major government to monitor all Bitcoin
transactions to watch for botnet-to-botnet sending?
