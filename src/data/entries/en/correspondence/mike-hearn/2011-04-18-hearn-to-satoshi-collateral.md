---
title: "Using Bitcoin as collateral for abuse prevention"
date: 2011-04-18T23:14:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread5.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn describes his work on Google's abuse team and proposes using Bitcoin as collateral against accounts for spam prevention, asking about time-locking coins."
isSatoshi: false
threadId: "satoshi-mike-hearn-holding-coins"
tags:
  - "correspondence"
  - "abuse-prevention"
  - "collateral"
  - "time-lock"
  - "google"
  - "contracts"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Hello Satoshi,

I hope this mail finds you well. Recently I've been thinking about how BitCoin can help handle internet abuse and would appreciate your thoughts.

My "day job" is on the Google abuse team. We make extensive use of phone verification to control outbound spam from our network. Facebook and Craigslist do the same. Phone verification works well because phone numbers are something most people have access to at least one or two of, but rarely more. Yet it has significant downsides - it's expensive (for us), flaky, some people don't like the privacy implications, and some spam is profitable enough that buying lots of SIM cards is worth it.

It would be ideal if BitCoins could be put up as collateral against an account. The amount put up would help determine the limits the system placed on your behavior (eg how much mail you can send), in an anonymous and private way. But how to implement this?

Burning coins forever is easy, just set the only output to be <pubkey> OP_FALSE. Now you can sign some server-provided challenge with that key and prove you did indeed burn those coins. A key would only be usable with one account so spammers cannot simply put up a huge collateral and then resell signatures generated with that key. If the account was found to be abused it'd be terminated like today, and the coins would be "gone".

But people do come and go from these big networks and the thought of losing the coins if you quit Google to run your own mail is unappealing. It would be ideal if coins could be locked up for a period of time such that they cannot be spent until time X, where X can be constantly pushed into the future if the owner desires it but otherwise the coins eventually become spendable again. To verify your Google account, you would take some amount of coins (say 10) and set it up so you cannot spend them for 6 months.

The script language has no concept of time. OP_BLOCKNUMBER was ruled out because re-orgs could potentially invalidate entire chains of transactions. But is an OP_DAY feasible? I'm thinking of an opcode that returns the timestamp from the block header, but rounded to the nearest day to handle the natural clock drift seen in the block chain. If it could work then a TX that ties up coins until past a certain day is easy to construct. Updating it so the deadline is constantly moving is harder. A simple brute force solution is to require the user to put up 2x the coins such that at the point the first tx is about to expire and become spendable again, the second tx is created. In this way you always have at least one tx of sufficiently distant deadline to act as collateral. But this is inelegant. A better way would be to introduce a new rule allowing a tx to connect to such an output before the deadline has passed, as long as the output of that tx is once again a deadlined output of the same form. However this is less general than the scripting language so is also somewhat inelegant.

What do you think?
