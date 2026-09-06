---
title: "No connections for a day"
date: 2009-07-18T00:00:00Z
type: "article"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
sourceNote: "COPA v. Craig Wright trial evidence, filed as part of Nicholas Bohm's witness statement {C/10/1}"
author: "Nicholas Bohm"
participants:
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Bohm reports to Satoshi that Bitcoin has failed to establish any connections for over a day, despite restarts. He had been maintaining 3-5 node connections prior to July 15th."
isSatoshi: false
tags:
  - "correspondence"
  - "network"
  - "early-network"
secondarySources:
  - name: "Decashed - Node IP Analysis"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
---

![Illustration of a small cluster of connected network nodes linked by a dashed path, envelope icon, and restart arrow to a single glowing isolated node surrounded by scattered disconnected dots, on a dark grid background.](/BitcoinArchive/images/analysis/2009-07-18-bohm-to-satoshi-no-connections-hero.png)

Approximately six weeks after the port forwarding fix, [Bohm](/BitcoinArchive/participants/nicholas-bohm/) reported a new connectivity failure:

<!-- audit:quote-skip -->
> Bitcoin has failed to establish any connections for the last day or so, despite restarts.

Bohm noted he had been maintaining 3-5 node connections prior to July 15th — a data point on the size of the active Bitcoin network in mid-2009. The fact that even a connected node with proper port forwarding could lose all peers suggests the network was extremely small at this time.
