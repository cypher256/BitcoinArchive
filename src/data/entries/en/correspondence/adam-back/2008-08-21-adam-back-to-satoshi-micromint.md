---
title: "Re: Citation of your Hashcash paper (MicroMint suggestion)"
date: 2008-08-21T18:17:17Z
type: "correspondence"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
sourceNote: "Transcribed from screenshots embedded in Bitcoin Magazine's reproduction of the email chain Adam Back filed as evidence in COPA v. Wright (February 2024)."
author: "Adam Back"
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Adam Back's second reply: he has not yet read the paper, but suggests Ron Rivest et al's MicroMint as another related work using k-way hash collisions for digital coin scarcity."
isSatoshi: false
tags:
  - "hashcash"
  - "adam-back"
  - "micromint"
  - "ron-rivest"
  - "origins"
secondarySources:
  - name: "COPA v Wright Trial Evidence"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
    note: "Adam Back's Second Witness Statement (document C/21) included the complete five-email chain."
---

Sorry still not read your paper yet, but another related paper is by Rivest et al called micromint, which uses k-way collisions to create the public/extended currency for the bank in creating coins.  What you said about one group of players having an advantage (by compute cycles) reminded me of micromint.  In micromint the bank gets an increasing advantage over time as there is some cumulative build up of advantage in terms of the partial results accumulated helping create further the partial-collisions more cheaply.

Adam

On Thu, Aug 21, 2008 at 6:59 PM, satoshi@anonymousspeech.com
<satoshi@anonymousspeech.com> wrote:
> Thanks, I wasn't aware of the b-money page, but my ideas start from exactly that point.  I'll e-mail him to confirm the year of publication so I can credit him.
>
> The main thing my system adds is to also use proof-of-work to support a distributed timestamp server.  While users are generating proof-of-work to make new coins for themselves, the same proof-of-work is also supporting the network timestamping.  This is instead of Usenet.
