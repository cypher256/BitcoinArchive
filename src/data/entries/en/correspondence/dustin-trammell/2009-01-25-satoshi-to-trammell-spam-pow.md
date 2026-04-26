---
title: "Re: Bitcoin v0.1 released - Spam, POW tokens, and reverse-spamming"
date: 2009-01-25T10:03:21Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi responds to Hal Finney's point about botnets and pay-per-send email, proposing an economic argument where fake mailboxes could 'reverse-spam' spammers by harvesting their POW tokens, creating a self-defeating cycle. He also describes e-gold's 'dusting' spam problem."
isSatoshi: true
tags:
  - "correspondence"
  - "spam"
  - "proof-of-work"
  - "pay-to-send"
  - "economics"
  - "hal-finney"
  - "e-gold"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
    note: "Published by Dustin Trammell in November 2013"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

In the final email of the Satoshi-Trammell correspondence, sent nearly a week after the previous exchange, Satoshi discussed the economics of spam in a system where proof-of-work tokens have value. He quoted [Hal Finney](/BitcoinArchive/participants/hal-finney/)'s observation that valuable POW tokens would make botnet infections more noticeable to computer owners.

Satoshi then proposed a novel economic counter-mechanism — "reverse-spamming":

> Another factor that would mitigate spam if POW tokens have value: there would be a profit motive for people to set up massive quantities of fake e-mail accounts to harvest POW tokens from spam. They'd essentially be reverse-spamming the spammers with automated mailboxes that collect their POW and don't read the message. The ratio of fake mailboxes to real people could become too high for spam to be cost effective.

He noted this process could paradoxically help establish the token's value:

> The process has the potential to establish the POW token's value in the first place, since spammers that don't have a botnet could buy tokens from harvesters. While the buying back would temporarily let more spam through, it would only hasten the self-defeating cycle leading to too many harvesters exploiting the spammers.

Satoshi also drew a parallel to existing systems, noting that e-gold already experienced a form of spam called "dusting" where spammers sent tiny amounts of gold dust to include messages in transaction comment fields. He suggested a configurable minimum payment threshold as a solution.

This email represents some of Satoshi's most creative economic thinking, applying game theory to spam economics and showing how market forces could naturally mitigate abuse in a proof-of-work system.
