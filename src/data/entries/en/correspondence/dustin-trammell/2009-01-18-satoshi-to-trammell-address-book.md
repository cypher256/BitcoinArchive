---
title: "Re: Bitcoin Transfer - Address book and multiple addresses"
date: 2009-01-18T11:01:09Z
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
description: "Satoshi explains the 'Satoshi' label came from Trammell's own address book, that transactions show the receiving address (not the sender), and recommends per-payer addresses to identify payers."
isSatoshi: true
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "privacy"
  - "multiple-addresses"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Satoshi clarified the confusion about Trammell's transaction display. The address shown was actually one of Trammell's own receiving addresses, not Satoshi's:

> It should be your Bitcoin address at home that you received it with. There's no way for it to know who it's from, so the best it can do is tell which of your addresses it was received on. You can create multiple addresses and give a different address to each person and label them to help figure out who's sending to you.

He explained the address book labeling system:

> It doesn't know any names other than what you tell it. The name printed there is what's associated in your address book for that address, either under the Address Book button or the "Change..." button to the right of your Bitcoin address.

This email contains one of the earliest explanations of Bitcoin's pseudonymous nature — the protocol has no concept of sender identity, and the best practice for identifying payers is to create unique receiving addresses for each counterparty. This concept would become fundamental to Bitcoin privacy best practices.
