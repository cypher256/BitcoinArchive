---
title: "Satoshi to Dustin Trammell: coin maturity and v0.1.3 upgrade (January 12, 2009)"
date: 2009-01-12T18:52:45Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi compares Bitcoin's timestamp chain to Usenet, explains the coin maturity rule (credit stays 0.00 until mature, then 50.00), and urges an upgrade to v0.1.3."
isSatoshi: true
tags:
  - "correspondence"
  - "coin-maturity"
  - "timestamp"
  - "v0-1-3"
relatedEntries:
  - "aftermath/2009-01-12-satoshi-to-trammell-coin-maturity"
---

> I'm currently reading through your paper.  At the timestamp server
> section you mention newspapers and usenet, so I thought you might be
> interested in this if you have not seen it already:
>
> http://www.publictimestamp.org/

Thanks, I hadn't seen that yet.  It looks very well presented.
There was an older one that's been running for a long time that
publishes its hashes to Usenet.  I'm surprised this one isn't
using Usenet, although it is kind of difficult to get access to
post to Usenet in an automated way these days.  If they can get a
magazine or newspaper to publish their hashes, it would work a lot
easier in court for their purposes.  Bitcoin and all timestamp
servers share the basic functionality of periodically collecting
things into blocks and hashing them into a chain.


> By the way, I'm also currently running the alpha code on one of my
> workstations.  So far it has two "Generated" messages, however the
> "Credit" field for those is 0.00 and the balance hasn't changed.  Is
> this due to the age/maturity requirement for a coin to be valid?

Right, the credit field stays 0.00 until it matures, then it'll be
50.00.  Do you think it would be clearer if I left the credit
field blank until it matures?  I should put some text in the
transaction details (when you double click on it) explaining how
it works.  (was it obvious you can doubleclick on a line for
details?)

Be sure to upgrade to v0.1.3 if you haven't already.  This version
has really stabilized things.

Satoshi
