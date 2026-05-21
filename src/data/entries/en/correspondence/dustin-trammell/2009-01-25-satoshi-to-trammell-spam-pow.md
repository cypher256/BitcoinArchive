---
title: "Satoshi to Dustin Trammell: spam, POW tokens, and reverse-spamming (January 25, 2009)"
date: 2009-01-25T10:03:21Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi responds to Hal Finney's botnet/pay-per-send point, proposing that fake mailboxes could 'reverse-spam' spammers by harvesting their POW tokens. He also describes e-gold's 'dusting' problem."
isSatoshi: true
tags:
  - "correspondence"
  - "spam"
  - "pow-tokens"
  - "hal-finney"
  - "e-gold"
relatedEntries:
  - "aftermath/2009-01-25-satoshi-to-trammell-spam-pow"
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    sourceEntryId: "emails/cryptography/bitcoin-v0-1-released/2009-01-24-re-bitcoin-v0-1-released-finney"
---

<!-- speaker: Hal Finney -->
<!-- quote: q1 -->
> > * Spammer botnets could burn through pay-per-send email filters
> >   trivially
> If POW tokens do become useful, and especially if they become money,
> machines will no longer sit idle. Users will expect their computers to
> be earning them money (assuming the reward is greater than the cost to
> operate). A computer whose earnings are being stolen by a botnet will
> be more noticeable to its owner than is the case today, hence we might
> expect that in that world, users will work harder to maintain their
> computers and clean them of botnet infestations.

Another factor that would mitigate spam if POW tokens have value:
there would be a profit motive for people to set up massive
quantities of fake e-mail accounts to harvest POW tokens from
spam.  They'd essentially be reverse-spamming the spammers with
automated mailboxes that collect their POW and don't read the
message.  The ratio of fake mailboxes to real people could become
too high for spam to be cost effective. 

The process has the potential to establish the POW token's value
in the first place, since spammers that don't have a botnet could
buy tokens from harvesters.  While the buying back would
temporarily let more spam through, it would only hasten the
self-defeating cycle leading to too many harvesters exploiting the
spammers.

Interestingly, one of the e-gold systems already has a form of
spam called "dusting".  Spammers send a tiny amount of gold dust
in order to put a spam message in the transaction's comment field.
 If the system let users configure the minimum payment they're
willing to receive, or at least the minimum that can have a
message with it, users could set how much they're willing to get
paid to receive spam.

Satoshi Nakamoto
