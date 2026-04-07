---
title: "Re: Bitcoin Watchdog Service"
date: 2010-08-13T06:45:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=691.msg8978#msg8978"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Context post by throughput in BitcoinTalk topic 691. before msg9041."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "aceat64"
    personSlug: "aceat64"
    date: "2010-08-12T08:02:43.000Z"
  - id: "q2"
    person: "throughput"
    personSlug: "throughput"
    date: "2010-08-12T06:28:43.000Z"
    parent: "q1"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-12T12:34:44.000Z"
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > Definitively, we need some overall network hps meter in every node.
> > 
> > And at last I've found that article:
> > http://www.informit.com/articles/article.aspx?p=1237179
> > 
> > Network splits are easier to produce, and happen more often, than many users on this forum think.
> > You don't really need to cut any cable, nor hack into ISP's router to plug that ISP off Internet.
> > You don't need to hack his peers either. All you need is BGP router in any AS (and some unwary BGP peers).
> > I have one  
> > 
> > So, it is possible to talk about a short (1 - 3 hours) and controlled network split.
> > Not just split in half, but split into ASes. After an hour or three-four most of ISPs will recover, but that
> > really depends on work hours. Weekend attack may have more prolonged effect.
> > Perhaps in the future that will be fixed and no BGP router will be vulnerable, but
> > anyway, nobody should count on Internet stability and persistent connectivity.
> 
> How would an attacker connect to both sides during this split in order to spend the coins? And if the attacker can do it, the likelihood that one or more honest nodes could bridge the divide is pretty good.

1. Why an attacker is forced to be a single person with a single PC?
Copy the wallet on another PC and use it anywhere!

2. Why should network isolation only be used for double spending?
Can't it be used to slow down block generation? Will that affect difficulty adjustment?

<!-- quote: q3 -->
> True, there would probably be someone with a dial-up modem or satellite dish internet.  Rarer would be someone who has both that and the wired internet that has the outage, but if it's a big enough segment to matter, out of a million people there's bound to be a multi-home geek.

But there will be no irc server to bootsrap from.
