---
title: "Re: A few thoughts... - Wallet location and socket fix"
date: 2009-01-16T12:42:18Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi reveals the wallet data location (%appdata%\\Bitcoin), explains it uses a transactional database (DBM) safe from crash/power loss, comments on Microsoft's directory naming, and confirms he has already added socket cleanup code for the next release."
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 14
tags:
  - "correspondence"
  - "wallet"
  - "data-storage"
  - "bug-fix"
  - "development"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Responding to Trammell's concerns about data loss and wallet backup, Satoshi disclosed the wallet's storage location and technology:

> The files are in "%appdata%\Bitcoin", that's the directory to backup. The data is stored in a transactional database DBM, so it should be safe from loss if there's a crash or power failure.

He noted that %appdata% was the per-user directory that modern programs like Firefox used for settings, despite Microsoft changing its name with every Windows release, being full of spaces, and running off the screen.

Regarding the unclean socket closure Trammell had reported:

> Just now added code to the next release for that.

This brief exchange demonstrates Satoshi's rapid development cycle in Bitcoin's earliest days — Trammell reported a bug and Satoshi had already coded a fix by the time he replied. The DBM (Berkeley DB) database choice would later prove significant when a database lock limit issue caused a chain fork in March 2013.

*Source: Published by Dustin Trammell in November 2013. The full correspondence is archived on the Bitcoin Wiki at en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails.*
