---
title: "Re: Bitcoin Transfer - Address labels and UX challenges"
date: 2009-01-19T11:02:37Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published by Dustin Trammell in November 2013"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi explains the default address label is 'Your Address', suggests the mislabeling was a UI-driven user error, and acknowledges that per-payer receiving addresses have no real-world analogy."
isSatoshi: true
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "ux-design"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Satoshi clarified that the default label for a new address was "Your Address," not "Satoshi." He suggested Trammell had likely mislabeled his own address while trying to label what he thought was Satoshi's address:

> The first default one is labelled "Your Address" when it's created.
>
> All the places where address book labels are set are where the user manually sets it. The only time it automatically adds a label is a blank one when you send to a new address. I guess you could have entered the label on an address you thought was mine but the software was confusing and you put it in the wrong place.

Satoshi then offered a candid acknowledgment of Bitcoin's UX limitations:

> Address book labels for receiving addresses is confusing but I'm not sure what else to do. Anyone using it for more than just simple purposes would need to create different receiving addresses for each payer so they could tell who's paying them. That concept doesn't have much analogy in the real world.

This is a revealing admission from Satoshi about one of Bitcoin's most persistent usability challenges — the concept of generating unique addresses per payer was fundamentally new and had no equivalent in traditional financial systems that users could draw upon for intuitive understanding.
