---
title: "Laszlo Hanyecz recalls Satoshi sharing his own defensive GPU mining code (May 2010)"
date: 2010-05-17T00:00:00Z
type: "article"
source: "cointelegraph"
sourceUrl: "https://cointelegraph.com/news/satoshi-invented-gpu-mining-to-defend-the-network-says-early-dev"
author: "Laszlo Hanyecz"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
description: "A recollection-based account from Laszlo Hanyecz: Satoshi reciprocated Hanyecz's GPU miner code by sharing Satoshi's own independently developed GPU mining code, kept as a contingency defense against potential 51% attacks rather than for mining coins. The full private email correspondence has not been publicly released; what appears here is Hanyecz's recall of the exchange as shared in interviews with Cointelegraph and InsideBitcoins. The May 17, 2010 date is approximate, anchored on Hanyecz's narrative timeline relative to his May 10 GPU announcement."
isSatoshi: false
tags:
  - "gpu-mining"
  - "network-defense"
  - "51-percent-attack"
  - "early-developer"
  - "recollection"
secondarySources:
  - name: "Cointelegraph - Satoshi Invented GPU Mining to Defend the Network"
    url: "https://cointelegraph.com/news/satoshi-invented-gpu-mining-to-defend-the-network-says-early-dev"
    note: "Based on Laszlo Hanyecz's public statements in interviews with Cointelegraph and other outlets. The full private email correspondence has not been publicly released; the quotes here are Hanyecz's recall of what Satoshi said and shared."
  - name: "InsideBitcoins - Laszlo Hanyecz Claims Satoshi Invented GPU Mining"
    url: "https://insidebitcoins.com/news/laszlo-hanyecs-claims-satoshi-invented-gpu-mining-to-prevent-51-attacks"
relatedEntries:
  - aftermath/2010-04-19-hanyecz-recalls-satoshi-correspondence
  - aftermath/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback
  - aftermath/2010-05-22-laszlo-hanyecz-biography
  - aftermath/2010-05-22-bitcoin-pizza-day
---

*[Editor: this entry is a recollection-based article, not a primary-source private email record. The full private email correspondence between Satoshi and Hanyecz has not been publicly released. The exchange below — Satoshi's reciprocal sharing of GPU mining code, his stated defensive rationale, his deliberate non-optimization choice — is reconstructed from Hanyecz's later interview accounts (Cointelegraph, InsideBitcoins). The May 17, 2010 date is approximate, anchored to Hanyecz's narrative ordering relative to his May 10 Bitcointalk GPU announcement.]*

In a remarkable exchange that — per Laszlo Hanyecz's later recall — occurred after Hanyecz shared his GPU miner code with Satoshi, Satoshi reciprocated by sharing his own independently developed GPU mining code. As Hanyecz tells it, this revelation showed that Satoshi had been working on GPU mining before Hanyecz's public announcement -- not to mine coins, but as a contingency plan to defend the network against potential 51% attacks.

As Hanyecz later recounted:

> And he actually shared with me his version of it. So even though it wasn't in Bitcoin, he did have GPU mining code and he said he was just keeping it ready in case he had to defend the network with it.

Satoshi had developed several versions of the GPU mining algorithm but deliberately chose not to include it in the public Bitcoin software. His strategic reasoning was twofold: he wanted to keep GPU mining capability as a defensive weapon against potential attackers, and he did not want to prematurely increase network difficulty, which would have discouraged ordinary CPU miners from participating.

Hanyecz noted that his own GPU code actually performed better than Satoshi's version, but that Satoshi had intentionally avoided optimizing it:

> And I got the feeling, that part of it was that he didn't want to prematurely optimize it because he didn't want to run up the difficulty on the network.

This exchange reveals a fascinating aspect of Satoshi's strategic thinking: he was simultaneously discouraging public GPU mining to protect accessibility while privately maintaining GPU mining capability as insurance against adversarial attacks. It demonstrates that Satoshi had thought deeply about potential attack vectors and had prepared defensive measures well in advance.
