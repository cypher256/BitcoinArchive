---
title: "Re: A few thoughts... - Wallet location and socket fix"
date: 2009-01-16T12:42:18Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published by Dustin Trammell in November 2013"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi reveals the wallet location (%appdata%\\Bitcoin), explains it uses a transactional database (DBM) safe from crash/power loss, and confirms socket cleanup code is added for the next release."
isSatoshi: true
tags:
  - "correspondence"
  - "wallet"
  - "data-storage"
  - "bug-fix"
  - "development"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-16-satoshi-to-trammell-wallet-location
  - aftermath/2009-01-11-dustin-trammell-biography
  - design/2009-01-03-bitcoin-storage-design
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-16T12:42:18Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-16-satoshi-to-trammell-wallet-location"
---

![Illustration of a wallet file path spilling past its container, a shielded database cylinder, and two connected cards showing a bug icon leading to a checked, sealed envelope, on a dark blue background with a date badge in the corner.](/BitcoinArchive/images/analysis/2009-01-16-satoshi-to-trammell-wallet-location-hero.png)

Responding to Trammell's concerns about data loss and wallet backup, Satoshi disclosed the wallet's storage location and technology:

<!-- quote: q1 -->
> The files are in "%appdata%\Bitcoin", that's the directory to backup. The data is stored in a transactional database DBM, so it should be safe from loss if there's a crash or power failure.

He noted that %appdata% was the per-user directory that modern programs like Firefox used for settings, even though Microsoft renamed it with every Windows release, and the resulting path was full of spaces and ran off the screen.

Regarding the unclean socket closure Trammell had reported:

<!-- speaker: Satoshi Nakamoto -->
> Just now added code to the next release for that.

This brief exchange demonstrates Satoshi's rapid development cycle in Bitcoin's earliest days — Trammell reported a bug and Satoshi had already coded a fix by the time he replied. The DBM (Berkeley DB) database choice would later prove significant when [a database lock limit issue caused a chain fork in March 2013](/BitcoinArchive/entries/design/2009-01-03-bitcoin-storage-design/).
