---
title: "Multisig contract pattern for time-locked deposits"
date: 2011-04-20T11:39:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread5.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi explains why stateful script opcodes would enable chain-forking attacks, then presents a detailed step-by-step multisig contract pattern using nLockTime for safe time-locked deposits without trust."
isSatoshi: true
threadId: "satoshi-mike-hearn-holding-coins"
threadPosition: 2
tags:
  - "correspondence"
  - "contracts"
  - "multisig"
  - "nlocktime"
  - "time-lock"
  - "escrow"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

If the script language is not stateless, if it has access to any outside information that changes or varies between nodes, attackers can use it to fork the chain. The only exception is if it is always false before a certain time and permanently true after, which is implemented with nLockTime.

Since Google is trusted, couldn't users pay a token deposit to Google and Google pays them back when they close the account?

To answer your question though, yes it can be done without using trust:

Tx 1 from User pays to a script that requires the signature of both Google and User to spend.

Tx 2 (the contract) spends Tx 1 and pays it to User. nLockTime is the time to release the money.

Steps:
1) Google gives User a pubkey to use in creating Tx 1.
2) User privately creates Tx 1, does not broadcast it yet.
3) User gives the hash of Tx 1 to Google.
4) Google signs its part of Tx 2, with nLockTime set, and gives it to User.
5) User broadcasts Tx 1.
6) User signs his half of Tx 2 and broadcasts it.

With these steps, the user already has Google's signed half of Tx 2 in hand before he broadcasts Tx 1, so he is assured of what bargain he is signing the money to.

This is the general pattern for safely signing contracts. Tx 2 is prepared first so the parties know what they're paying into. Tx 1 is broadcast to lock up the money and assign it to Tx 2. In other words, all parties assign their money to a pool that is controlled by the unanimous agreement of the group, but first the group has already signed agreement for the default action to take with the money, or partially signed multiple available options that a party can complete by adding the last signature.

By mutual agreement, the parties can always write another version of Tx 2 that releases the money immediately.
