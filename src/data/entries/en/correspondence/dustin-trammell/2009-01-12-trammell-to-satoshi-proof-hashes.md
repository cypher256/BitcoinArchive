---
title: "Dustin Trammell to Satoshi: proof-hashes group and upgrade plan (January 12, 2009)"
date: 2009-01-12T21:29:52Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell tells Satoshi about his proof-hashes Google Group, gives feedback on the credit field display, reports running v0.1.1 and offers to test new features."
isSatoshi: false
tags:
  - "correspondence"
  - "proof-hashes"
  - "feedback"
relatedEntries:
  - "aftermath/2009-01-12-trammell-to-satoshi-proof-hashes"
---

On Tue, 2009-01-13 at 02:33 +0800, Satoshi Nakamoto wrote:
> Thanks, I hadn't seen that yet.  It looks very well presented.
> There was an older one that's been running for a long time that
> publishes its hashes to Usenet.  I'm surprised this one isn't
> using Usenet, although it is kind of difficult to get access to
> post to Usenet in an automated way these days.  If they can get a
> magazine or newspaper to publish their hashes, it would work a lot
> easier in court for their purposes.  Bitcoin and all timestamp
> servers share the basic functionality of periodically collecting
> things into blocks and hashing them into a chain.

It actually posts the hash blocks to a Google Group called
'proof-hashes', so similar result as if it were posting to Usenet.

http://groups.google.com/group/proof-hashes

Since I run that group, and it's sole purpose is to archive
proof-of-work hashes, feel free to join an account to have your system
post there as well if you like.

> Right, the credit field stays 0.00 until it matures, then it'll be
> 50.00.  Do you think it would be clearer if I left the credit
> field blank until it matures?  I should put some text in the
> transaction details (when you double click on it) explaining how
> it works.  (was it obvious you can doubleclick on a line for
> details?)

No, I think having $0.00 there is more appropriate than being blank.
The entries in my BitCoin software (4 of them now) all say 'unconfirmed'
however, so I'm not sure what that means, but I did grok that the coins
were generated and just not 'mature' yet, but I had also read your
whitepaper so I may have understood that concept from there.  When the
coins mature, will that generate a new 'credit' transaction, or will the
existing generation transaction line's credit field be updated?

No, I was unaware that you could double-click a transaction line for
further details...  I just did that and it currently just has the same
information there that is in the transaction line.  Putting more
information there would definitely be useful.

> Be sure to upgrade to v0.1.3 if you haven't already.  This version
> has really stabilized things.

I was running 0.1.1... I will update now.  Perhaps a new version
notification or auto-update feature is in order? (:

Electronic currency and cryptography are two things that I am very
interested in so as you would assume I was drawn to this project
immediately when I saw it posted to the Cryptography email list.  Feel
free to ping me for feedback or to test out new features, I'll be happy
to help out.

Cheers,

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
