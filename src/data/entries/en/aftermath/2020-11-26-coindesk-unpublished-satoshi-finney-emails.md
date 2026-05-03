---
title: "Previously unpublished Satoshi-Finney emails revealed"
date: 2020-11-26T17:03:00Z
type: "article"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
author: "Michael Kapilkov"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Fran Finney"
    slug: "fran-finney"
description: "CoinDesk published previously unseen Satoshi-Finney emails (obtained via widow Fran Finney): Finney's November 2008 scalability question and Satoshi's personal v0.1 release notice on January 8, 2009."
isSatoshi: false
tags:
  - "satoshi-finney-emails"
  - "unpublished"
  - "hal-finney"
  - "fran-finney"
  - "timezone-mystery"
  - "v0.1-release"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Email to Hal Finney (Jan 8, 2009)"
    url: "https://www.bitcoin.com/satoshi-archive/emails/hal-finney/1/"
  - name: "Bitcoin News — Researcher Publishes Never-Before-Seen Emails Between Satoshi and Hal Finney"
    url: "https://news.bitcoin.com/researcher-publishes-never-before-seen-emails-between-satoshi-nakamoto-and-hal-finney/"
  - name: "Chain Bulletin — 'No, CoinDesk, Satoshi's local time zone wasn't UTC+8'"
    url: "https://chainbulletin.com/no-coindesk-satoshis-local-time-zone-wasnt-utc8"
relatedEntries:
  - aftermath/2009-10-05-hal-finney-dying-outside
  - aftermath/2013-03-19-bitcoin-and-me-hal-finney
  - aftermath/2014-08-28-hal-finney-passes-away
  - aftermath/2019-08-21-hal-finney-rpow-recognition
  - aftermath/2014-08-28-hal-finney-biography
  - aftermath/2014-08-28-fran-finney-biography
  - analysis/2009-01-10-satoshi-launch-environment
  - analysis/2008-08-20-satoshi-self-statements
  - aftermath/2019-04-01-fran-finney-hal-finney-profile
---

On November 26, 2020, CoinDesk published "Previously Unpublished Emails of Satoshi Nakamoto Present a New Puzzle" by Michael Kapilkov, revealing three emails between [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) and [Hal Finney](/BitcoinArchive/participants/hal-finney/).

**Chain of custody:** In March 2014, Fran Finney (Hal's widow) sent journalist Nathaniel Popper files from Hal's personal computer for his book *Digital Gold*. Popper later shared the email files with Kapilkov. CoinDesk confirmed the chain of custody directly with Fran Finney.

**Email 1: [November 19, 2008](/BitcoinArchive/entries/correspondence/hal-finney/2008-11-19-finney-to-satoshi-scalability/) (Finney → Satoshi)**
Finney thanked Satoshi for corrections and asked about network scalability:
> "How large do you envision it becoming? Tens of nodes? Thousands? Millions?"

This was during the pre-release code review period, two months before Bitcoin's public launch.

**Email 2: [January 8, 2009](/BitcoinArchive/entries/correspondence/hal-finney/2009-01-08-satoshi-to-finney-release/) (Satoshi → Finney)**
Subject: "Bitcoin v0.1." Sent Thursday, January 8, 2009, at 20:54:55 PST — just hours after the [public announcement on the Cryptography Mailing List](/BitcoinArchive/entries/emails/cryptography/bitcoin-v0-1-released/2009-01-08-bitcoin-v0-1-released/):
> "Thought you'd like to know, the Bitcoin v0.1 release with EXE and full sourcecode is up on Sourceforge: http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar www.bitcoin.org has release notes and screenshots. Satoshi"

This email was sent from `satoshi@vistomail.com`.

**Email 3: [January 10 (or 12), 2009](/BitcoinArchive/entries/correspondence/hal-finney/2009-01-10-satoshi-to-finney-connections/) (Satoshi → Finney)**
A follow-up after Bitcoin's launch:
> "Unfortunately, I can't receive incoming connections from where I am, which has made things more difficult."

The phrase "from where I am" is examined alongside the cadence of Satoshi's launch-week activity in a [forensic reading of his launch-period environment](/BitcoinArchive/entries/analysis/2009-01-10-satoshi-launch-environment/).

**The Timezone Mystery:**
Satoshi's January 2009 email headers showed a timezone **eight hours ahead of GMT (UTC+8)** — inconsistent with Japan's UTC+9 offset. This initially fueled speculation about Satoshi's location. However, Doncho Karaivanov of Chain Bulletin argued the UTC+8 timestamp came from AnonymousSpeech.com's email server (based in Tokyo since 1996), not Satoshi's local machine. When using webmail, the Date header timezone reflects the server, not the user's location.
