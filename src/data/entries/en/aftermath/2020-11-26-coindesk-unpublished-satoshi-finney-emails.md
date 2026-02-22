---
title: "Previously unpublished Satoshi-Finney emails revealed"
date: 2020-11-26T17:03:00Z
source: aftermath
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
author: "Michael Kapilkov"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Fran Finney"
    slug: "fran-finney"
description: "CoinDesk published previously unpublished emails between Satoshi Nakamoto and Hal Finney, obtained from Hal's personal computer via his widow Fran Finney. The emails included Finney asking Satoshi about network scalability in November 2008, Satoshi personally notifying Finney of the v0.1 release on January 8, 2009, and a follow-up where Satoshi mentioned being unable to receive incoming connections."
isSatoshi: false
aftermathType: "media"
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
---

On November 26, 2020, CoinDesk published "Previously Unpublished Emails of Satoshi Nakamoto Present a New Puzzle" by Michael Kapilkov, revealing three emails between Satoshi Nakamoto and Hal Finney.

**Chain of custody:** In March 2014, Fran Finney (Hal's widow) sent journalist Nathaniel Popper files from Hal's personal computer for his book *Digital Gold*. Popper later shared the email files with Kapilkov. CoinDesk confirmed the chain of custody directly with Fran Finney.

**Email 1: November 19, 2008 (Finney → Satoshi)**
Finney thanked Satoshi for corrections and asked about network scalability:
> "How large do you envision it becoming? Tens of nodes? Thousands? Millions?"

This was during the pre-release code review period, two months before Bitcoin's public launch.

**Email 2: January 8, 2009 (Satoshi → Finney)**
Subject: "Bitcoin v0.1." Sent Thursday, January 8, 2009, at 20:54:55 PST — just hours after the public announcement on the Cryptography Mailing List:
> "Thought you'd like to know, the Bitcoin v0.1 release with EXE and full sourcecode is up on Sourceforge: http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar www.bitcoin.org has release notes and screenshots. Satoshi"

This email was sent from `satoshi@vistomail.com`.

**Email 3: January 10 (or 12), 2009 (Satoshi → Finney)**
A follow-up after Bitcoin's launch:
> "Unfortunately, I can't receive incoming connections from where I am, which has made things more difficult."

**The Timezone Mystery:**
Satoshi's January 2009 email headers showed a timezone **eight hours ahead of GMT (UTC+8)** — inconsistent with Japan's UTC+9 offset. This initially fueled speculation about Satoshi's location. However, Doncho Karaivanov of Chain Bulletin argued the UTC+8 timestamp came from AnonymousSpeech.com's email server (based in Tokyo since 1996), not Satoshi's local machine. When using webmail, the Date header timezone reflects the server, not the user's location.
