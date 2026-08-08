---
title: "Satoshi tells Hal Finney he cannot receive incoming Bitcoin connections (January 12, 2009)"
date: 2009-01-12T00:00:00Z
type: "article"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
sourceNote: "CoinDesk published this email on November 26, 2020 and dates it January 12, 2009. Unlike the other Satoshi-Finney messages in that article, no header timestamp for it has been published — only the date."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Satoshi tells Finney that he cannot receive incoming connections from his location, revealing an operational constraint in the earliest days of the Bitcoin network."
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "connections"
  - "hal-finney"
  - "early-network"
  - "timezone-mystery"
secondarySources:
  - name: "Chain Bulletin - Satoshi's timezone analysis"
    url: "https://chainbulletin.com/no-coindesk-satoshis-local-time-zone-wasnt-utc8"
  - name: "Bitcoin News - Researcher Publishes Never-Before-Seen Emails"
    url: "https://news.bitcoin.com/researcher-publishes-never-before-seen-emails-between-satoshi-nakamoto-and-hal-finney/"
relatedEntries:
  - analysis/2009-01-10-satoshi-launch-environment
  - analysis/2008-08-20-satoshi-self-statements
  - aftermath/2013-03-19-bitcoin-and-me-hal-finney
  - aftermath/2009-06-05-satoshi-to-bohm-port-forwarding
  - analysis/2008-08-18-anonymousspeech-bitcoin-org-intermediary
---

![Illustration of a network node behind a firewall icon sending outgoing-only connections to peer nodes while incoming connections are blocked, alongside an envelope icon representing private correspondence.](/BitcoinArchive/images/analysis/2009-01-12-satoshi-to-finney-connections-hero.png)

In this email, sent in the earliest days of the Bitcoin network, Satoshi disclosed a technical constraint:

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> Unfortunately, I can't receive incoming connections from where I am, which has made things more difficult.

This admission reveals that Satoshi was operating behind a firewall or NAT that blocked incoming TCP connections on port 8333, making his own node dependent on outgoing connections to other peers — [the same inbound-connectivity chokepoint he would help another user diagnose five months later](/BitcoinArchive/entries/aftermath/2009-06-05-satoshi-to-bohm-port-forwarding/). This would have complicated debugging and testing the network in its infancy when there were only a handful of nodes. The phrase "from where I am" is examined more broadly as a [forensic reading of Satoshi's launch-period environment](/BitcoinArchive/entries/analysis/2009-01-10-satoshi-launch-environment/) alongside the cadence of his public activity during the launch week.

The email headers contained a timezone of UTC+8, which triggered speculation about Satoshi's location. However, Chain Bulletin journalist Doncho Karaivanov argued that the UTC+8 timestamp originated from AnonymousSpeech.com's email relay server, not from Satoshi's local machine: a webmail Date header reflects the server's clock, not the sender's. (The service's own site advertised a Tokyo base "since 1996"; the relay IP in the surviving headers is allocated to a Malaysian hosting provider — a server-side setting either way.)

This email is part of the private correspondence recovered from Hal Finney's personal computer files. Finney described the broader exchange in his ["Bitcoin and me" post](/BitcoinArchive/entries/aftermath/2013-03-19-bitcoin-and-me-hal-finney/): "I carried on an email conversation with Satoshi over the next few days, mostly me reporting bugs and him fixing them." Only three of these private emails have been published; the remainder presumably exist in the files Fran Finney provided to journalist Nathaniel Popper in March 2014.
