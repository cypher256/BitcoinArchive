---
title: "Private email — connection difficulties"
date: 2009-01-10T00:00:00Z
type: "correspondence"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
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
---

In this email, sent in the earliest days of the Bitcoin network, Satoshi disclosed a technical constraint:

> Unfortunately, I can't receive incoming connections from where I am, which has made things more difficult.

This admission reveals that Satoshi was operating behind a firewall or NAT that blocked incoming TCP connections on port 8333, making his own node dependent on outgoing connections to other peers. This would have complicated debugging and testing the network in its infancy when there were only a handful of nodes.

The email headers contained a timezone of UTC+8, which triggered speculation about Satoshi's location. However, Chain Bulletin journalist Doncho Karaivanov demonstrated that the UTC+8 timestamp originated from AnonymousSpeech.com's email relay server (based in Tokyo since 1996, using Asia/Hong_Kong timezone), not from Satoshi's local machine.

This email is part of the private correspondence recovered from Hal Finney's personal computer files. Finney described the broader exchange in his "Bitcoin and me" post: "I carried on an email conversation with Satoshi over the next few days, mostly me reporting bugs and him fixing them." Only three of these private emails have been published; the remainder presumably exist in the files Fran Finney provided to journalist Nathaniel Popper in March 2014.

*[Source: Published by CoinDesk, November 26, 2020. There is a date discrepancy across sources — this email may have been sent on January 10 or January 12, 2009.]*
