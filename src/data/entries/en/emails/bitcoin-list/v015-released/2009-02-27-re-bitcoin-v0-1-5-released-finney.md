---
title: "Re: [bitcoin-list] Bitcoin v0.1.5 released"
date: 2009-02-27T20:00:12Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/9/"
sourceNote: "Posted to the SourceForge bitcoin-list. The Satoshi Nakamoto Institute thread page is the canonical archived copy; no per-message permalink exists for this Hal Finney reply."
author: "Hal Finney"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Hal Finney asks for multiple block generators behind one NAT, suggests secure timestamping fits Bitcoin's chain, and requests a client-side library interface for scripting languages."
isSatoshi: false
tags:
  - "mailing-list"
  - "timestamping"
  - "nat"
  - "api"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    sourceEntryId: "emails/bitcoin-list/v015-released/2009-02-22-re-bitcoin-v0-1-5-released"
---

On Sun, Feb 22, 2009 at 9:35 AM, Satoshi Nakamoto wrote:

<!-- quote: q1 -->
>> What's next?
>
> The next thing for v0.1.6 is to take advantage of multiple
> processors to generate blocks. Currently it only starts one
> thread. If you have a multi-core processor like a Core Duo or
> Quad this will double or quadruple your production.

That sounds good. I'd also like to be able to run multiple coin/block generators on multiple machines, all behind a single NAT address. I haven't tried this yet so I don't know if it works on the current software.

BTW I don't remember if we talked about this, but the other day some people were mentioning secure timestamping. You want to be able to prove that a certain document existed at a certain time in the past. Seems to me that bitcoin's stack of blocks would be perfect for this.

> Later I want to add interfaces to make it really easy to integrate
> into websites from any server side language.

Right, and I'd like to see more of a library interface that could be called from programming or scripting languages, on the client side as well.

Hal
