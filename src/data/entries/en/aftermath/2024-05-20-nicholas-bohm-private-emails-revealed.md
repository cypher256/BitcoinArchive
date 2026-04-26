---
title: "COPA evidence reveals Nicholas Bohm's previously unpublished emails with Satoshi"
date: 2024-05-20T00:00:00Z
type: "court-document"
source: "bitcoin-defense"
sourceUrl: "https://bitcoindefense.org/assets/documents/COPA-v-Wright-Main-Judgment.pdf"
author: "Nicholas Bohm"
participants:
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "The COPA v Wright record revealed that Nicholas Bohm, previously known only for a public January 2009 bitcoin-list bug report, had also exchanged a series of private emails with Satoshi Nakamoto. The exhibits show direct troubleshooting about routing, port forwarding, unaccepted blocks, and network isolation, including Satoshi's remark that there might have been almost nobody else running Bitcoin in July 2009."
isSatoshi: false
tags:
  - "nicholas-bohm"
  - "copa-trial"
  - "email-archive"
  - "bitcoin-list"
  - "network"
  - "early-adopter"
relatedEntries:
  - "aftermath/2009-01-25-nicholas-bohm-biography"
secondarySources:
  - name: "Hugging Face — COPA v Wright raw trial documents"
    url: "https://huggingface.co/datasets/YL95/copa_v_wright_CPT_raw"
  - name: "decashed.eth — Node IP Disclosed in COPA/Wright Case Likely Belonged to Dustin Trammell"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
  - name: "Satoshi Nakamoto Institute — Re: [bitcoin-list] Problems"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/24/"
---

One of the more interesting post-trial discoveries from **[COPA v Wright](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/)** concerns **[Nicholas Bohm](/BitcoinArchive/participants/nicholas-bohm/)**.

Before the trial, Bohm was publicly known mainly from a January 25, 2009 bitcoin-list message in which he reported software problems and Satoshi invited him to send a `debug.log` file directly. But Justice Mellor's May 2024 judgment records something more important:

> "Mr Bohm provided evidence of his email communications with Satoshi that had not previously been made public."

That detail matters because it shows that a participant first visible on the public mailing list was also corresponding privately with Satoshi for months afterward.

**What the newly disclosed emails show:**

The trial exhibits indicate that Bohm and Satoshi exchanged direct emails about real node-operation issues during 2009:

- On **[June 4, 2009](/BitcoinArchive/entries/correspondence/nicholas-bohm/2009-06-04-bohm-to-satoshi-router-issue/)**, Bohm wrote that he had installed a new router and could no longer get Bitcoin to connect.
- On **June 5, 2009**, Satoshi replied that Bohm should forward **port 8333** so his node could receive incoming connections, adding that if nobody online could accept inbound connections, nodes would fail to connect.
- On **[July 18-19, 2009](/BitcoinArchive/entries/correspondence/nicholas-bohm/2009-07-19-satoshi-to-bohm-nobody-running/)**, Bohm reported that Bitcoin had failed to establish connections "for the last day or so." Satoshi responded by asking whether Bohm's IP address had changed and noted:

> "There may just not be anybody else running it right now."

Satoshi also encouraged Bohm to keep his server online so new users would have someone to connect to instead of seeing no peers and giving up.

Other exhibit snippets show Bohm privately reporting unusual "Generated +50.10" output and Satoshi discussing "not accepted" blocks and UI ideas for hiding unaccepted generation results.

*[Editor: These exhibits are important not only because they add new Satoshi correspondence, but because they materially deepen our understanding of how small and fragile the network still was in mid-2009. They also answer a question the public January 2009 mailing-list exchange could not: Nicholas Bohm was not merely a list participant; he remained a direct private correspondent of Satoshi.]*
