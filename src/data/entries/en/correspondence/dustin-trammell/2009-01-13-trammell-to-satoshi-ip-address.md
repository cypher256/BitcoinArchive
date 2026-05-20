---
title: "Dustin Trammell to Satoshi: IP address and roulette-wheel analogy (January 13, 2009)"
date: 2009-01-13T18:40:28Z
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
description: "Trammell provides his IP address for Satoshi to send coins, suggests posting the block chain every 10k blocks as documentation, and grasps the mining lottery via a roulette-wheel analogy."
isSatoshi: false
tags:
  - "correspondence"
  - "send-to-ip"
  - "mining"
relatedEntries:
  - "aftermath/2009-01-13-trammell-to-satoshi-ip-address"
---

On Tue, 2009-01-13 at 15:39 +0800, Satoshi Nakamoto wrote:
> Sweet, I was looking for a group like that on Usenet at one point to see
> what I would use if I needed, and nothing really fit.  I'm sure Google
> groups is a lot easier to post to.

Yea, that particular group is completely open, you don't have to join to
post (in fact I think I made it difficult for people to actually join),
you just email proof-hashes@googlegroups.com and the content of the
email gets posted to the group.

> There are some scenarios where a Usenet or Google group could be used as
> a supplemental defence.  Bitcoin is at its most vulnerable in the
> beginning when the total network CPU power is small.  That's offset by
> the fact that the incentive to attack it is also low when it's small.
> Hopefully the easy solution of just growing up and getting past that
> stage will work.  If not, there are ways a Google group could help, if
> it really came to that.

Yea, I was thinking you could have a client post the current block chain
every 10k blocks or something, just to occasionally document the current
winning proof-of-work chain.

> We definitely have similar interests!

Indeed.

> You know, I think there were a lot more people interested in the 90's,
> but after more than a decade of failed Trusted Third Party based systems
> (Digicash, etc), they see it as a lost cause.  I hope they can make the
> distinction, that this is the first time I know of that we're trying a
> non-trust based system. 

Yea, that was the primary feature that caught my eye.  The real trick
will be to get people to actually value the BitCoins so that they become
currency.  Currently, they're just collections of bits...

> This is all fixed in 0.1.3.  If you give me your IP, I'll send you some
> coins.

I'm currently at 24.28.79.95, but that's dynamic so it may change.  I've
had that address for a while though so hopefully my dhcp client is being
successful at renewing and not losing my address.  It does change from
time to time, but that address should be good for a while.

> It's not like a race where if one car is twice as fast, it'll always
> win.  It's an SHA-256 that takes less than a microsecond, and each guess
> has an independent chance of success.  Each computer's chance of finding
> a hash collision is linearly proportional to it's CPU power.  A computer
> that's half as fast would get half as many coins.

Ahh I see... So each guess is like the spin of a roulette wheel,
completely independent from all other guesses and the extra CPU power
just translates to more successful guesses than anyone else.
Unfortunately my ability to understand complex mathematics is conversely
proportional to how interested I am in cryptography (:

> Let me know how it goes.  If you have any trouble with it, send me your
> debug.log file.  I can often figure out what went wrong just from that.

Will do...

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
