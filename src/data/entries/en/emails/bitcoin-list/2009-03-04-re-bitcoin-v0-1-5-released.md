---
title: "Re: [bitcoin-list] Bitcoin v0.1.5 released"
date: 2009-03-04T16:59:12.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/21740046/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"[bitcoin-list] Bitcoin v0.1.5 released\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/27/"
---

Hal Finney wrote:
> That sounds good. I'd also like to be able to run multiple coin/block
> generators on multiple machines, all behind a single NAT address. I
> haven't tried this yet so I don't know if it works on the current
> software.

The current version will work fine.  They'll each connect over the
Internet, while incoming connections only come to the host that
port 8333 is routed to. 

As an optimisation, I'll make a switch "-connect=1.2.3.4" to make
it only connect to a specific address.  You could make your extra
nodes connect to your primary, and only the primary connects over
the Internet.  It doesn't really matter for now, since the network
would have to get huge before the bandwidth is anything more than
trivial.

> BTW I don't remember if we talked about this, but the other day some
> people were mentioning secure timestamping. You want to be able to
> prove that a certain document existed at a certain time in the past.
> Seems to me that bitcoin's stack of blocks would be perfect for this.

Indeed, Bitcoin is a distributed secure timestamp server for
transactions.  A few lines of code could create a transaction with
an extra hash in it of anything that needs to be timestamped.  
I should add a command to timestamp a file that way.

> > > Later I want to add interfaces to make it really easy to integrate
> > > into websites from any server side language.
>
> Right, and I'd like to see more of a library interface that could be
> called from programming or scripting languages, on the client side as
> well.
 
Exactly.

 
Satoshi Nakamoto

http://www.bitcoin.org
