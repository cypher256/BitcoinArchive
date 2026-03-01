---
title: "Re: [p2p-research] Bitcoin open source implementation of P2P currency"
date: 2009-02-12T19:08:24.000Z
source: p2p-research-list
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/36/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martien van Steenbergen"
    slug: "martien-van-steenbergen"
description: "Satoshi explains Bitcoin's fixed supply of 21,000,000 coins and how it differs from David Chaum's system, in response to Martien van Steenbergen's questions on the P2P Research mailing list."
isSatoshi: true
tags:
  - "supply-limit"
  - "privacy"
  - "david-chaum"
  - "double-spending"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/threads/17/"
---

Martien van Steenbergen wrote:
> Very interesting. Is this akin to David Chaum's anonymous digital money?
> His concept makes sure money is anonymous unless it is compromised, i.e.
> the same money spent more than once. As soon as it's compromised, the
> 'counterfeiter' is immediately publicly exposed.

It's similar in that it uses digital signatures for coins, but different in the approach to privacy and preventing double-spending. The recipient of a Bitcoin payment is able to check whether it is the first spend or not, and second-spends are not accepted. There isn't an off-line mode where double-spenders are caught and shamed after the fact, because that would require participants to have identities.

To protect privacy, key pairs are used only once, with a new one for every transaction. The owner of a coin is just whoever has its private key.

Of course, the biggest difference is the lack of a central server. That was the Achilles heel of Chaumian systems; when the central company shut down, so did the currency.

> Also, in bitcoin, is there a limited supply of money (that must be managed)? Or is money created exactly at the moment of transaction?

There is a limited supply of money. Circulation will be 21,000,000 coins. Transactions only transfer ownership.

Thank you for your questions,

Satoshi

http://www.bitcoin.org/
