---
title: "Re: [p2p-research] Bitcoin open source implementation of P2P currency"
date: 2009-02-13T02:38:20.000Z
source: p2p-research-list
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/37/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martien van Steenbergen"
    slug: "martien-van-steenbergen"
description: "Satoshi describes Bitcoin as a foundation for programmable P2P social currencies, discusses similarities with Pekunio and Ripple, and explains Bitcoin's trust-free design."
isSatoshi: true
tags:
  - "programmable-currency"
  - "ripple"
  - "reputation"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/threads/17/"
---

Martien van Steenbergen wrote:
> Would love to also see support for not having to supply and managing
> money. Would make it easier and cheaper to maintain and results in have
> sufficient money, always and everywhere. No scarcity, no abundance,
> exactly the right amount all times, self-organizing.

That's do-able. It can be programmed to follow any set of rules.

I see Bitcoin as a foundation and first step if you want to implement programmable P2P social currencies like Marc's ideas and others discussed here. First you need normal, basic P2P currency working. Once that is established and proven out, dynamic smart money is an easy next step.

I love the idea of virtual, non-geographic communities experimenting with new economic paradigms.

> _Reminds me of:_
> _* AardRock >> Wizard Rabbit Treasurer; and_
> _* AardRock >> Pekunio_

Indeed, it is much like Pekunio in the concept of spraying redundant copies of every transaction to a number of peers on the network, but the implementation is not a reputation network like Wizard Rabbit Treasurer. In fact, Bitcoin does not use reputation at all. It sees the network as just a big crowd and doesn't much care who it talks to or who tells it something, as long as at least one of them relays the information being broadcast around the network. It doesn't care because there's no way to lie to it. Either you tell it crypto proof of something, or it ignores you.

> _Are you familiar with Ripple?_

As trust systems go, Ripple is unique in spreading trust around rather than concentrating it.

> _Is bitcoin also available as a protocol spec (facilitating differen language bindings and implementations; unite on specs, compete on implementation)._

It would be best to refer to the C++ source code. I plan to implement interfaces for using the software to send and receive transactions from any language, so server side code can easily use it for web based e-commerce sites.

Satoshi
