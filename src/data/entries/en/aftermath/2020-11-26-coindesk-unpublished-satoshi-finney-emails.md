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
    url: "https://web.archive.org/web/20260113115938/https://www.bitcoin.com/satoshi-archive/emails/hal-finney/1/"
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
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
  - analysis/2008-08-18-anonymousspeech-bitcoin-org-intermediary
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2008-11-19T15:20:46Z"
    sourceEntryId: "correspondence/hal-finney/2008-11-19-finney-to-satoshi-scalability"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-09T04:54:55Z"
    sourceEntryId: "correspondence/hal-finney/2009-01-08-satoshi-to-finney-release"
---

![Two aged envelopes marked with 2008 and 2009 dates flank a folder labeled unpublished, above a timezone dial reading UTC+8 and a faint map route linking Japan to Southeast Asia.](/BitcoinArchive/images/analysis/2020-11-26-coindesk-unpublished-satoshi-finney-emails-hero.png)

On November 26, 2020, CoinDesk published "Previously Unpublished Emails of Satoshi Nakamoto Present a New Puzzle" by Michael Kapilkov, revealing three emails between [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) and [Hal Finney](/BitcoinArchive/participants/hal-finney/).

**Chain of custody:** In March 2014, Fran Finney (Hal's widow) sent journalist Nathaniel Popper files from Hal's personal computer for his book *Digital Gold*. Popper later shared the email files with Kapilkov. CoinDesk confirmed the chain of custody directly with Fran Finney.

## Email 1: [November 19, 2008](/BitcoinArchive/entries/aftermath/2008-11-19-finney-to-satoshi-scalability/) (Finney → Satoshi)
Finney thanked Satoshi for corrections and asked about network scalability:

<!-- quote: q1 -->
> "How large do you envision it becoming? Tens of nodes? Thousands? Millions?"

This was during the pre-release code review period, two months before Bitcoin's public launch.

## Email 2: [January 8, 2009](/BitcoinArchive/entries/aftermath/2009-01-08-satoshi-to-finney-release/) (Satoshi → Finney)
Subject: "Bitcoin v0.1." Sent Thursday, January 8, 2009, at 20:54:55 PST — just hours after the [public announcement on the Cryptography Mailing List](/BitcoinArchive/entries/emails/cryptography/bitcoin-v0-1-released/2009-01-08-bitcoin-v0-1-released/):

<!-- quote: q2 -->
> "Thought you'd like to know, the Bitcoin v0.1 release with EXE and full sourcecode is up on Sourceforge: http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar www.bitcoin.org has release notes and screenshots. Satoshi"

This email was sent from `satoshi@vistomail.com`.

## Email 3: [January 12, 2009](/BitcoinArchive/entries/aftermath/2009-01-12-satoshi-to-finney-connections/) (Satoshi → Finney)
A follow-up after Bitcoin's launch:

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> "Unfortunately, I can't receive incoming connections from where I am, which has made things more difficult."

The phrase "from where I am" is examined alongside the cadence of Satoshi's launch-week activity in a [forensic reading of his launch-period environment](/BitcoinArchive/entries/analysis/2009-01-10-satoshi-launch-environment/).

## The Timezone Mystery
Satoshi's January 2009 email headers showed a timezone **eight hours ahead of GMT (UTC+8)** — inconsistent with Japan's UTC+9 offset. This initially fueled speculation about Satoshi's location. However, Doncho Karaivanov of Chain Bulletin argued the UTC+8 timestamp came from AnonymousSpeech.com's email server (a service whose own site advertised a Tokyo base "since 1996"; the relay IP in the headers is allocated to a Malaysian host), not Satoshi's local machine. When using webmail, the Date header timezone reflects the server, not the user's location.

Karaivanov had separately built [a broader case for a London-based Satoshi](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) from 742 timestamped BitcoinTalk posts, SourceForge commits, and mailing-list emails converted to GMT — a GMT-consistent pattern this UTC+8 email header does not contradict, since it traces to the mail server rather than to Satoshi himself.

Finney himself recalled this email correspondence with Satoshi in his 2013 essay ["Bitcoin and Me"](/BitcoinArchive/entries/aftermath/2013-03-19-bitcoin-and-me-hal-finney/), where he described reporting bugs to Satoshi in the days following the v0.1 release.
