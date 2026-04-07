---
title: "Re: On IRC bootstrapping"
date: 2010-07-18T04:03:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg3915#msg3915"
author: "PulsedMedia"
participants:
  - name: "PulsedMedia"
    slug: "pulsedmedia"
description: "Context post by PulsedMedia in BitcoinTalk topic 84. after msg2010."
isSatoshi: false
tags: []
---

Hope the seedlist is long and those are fast peers able to take a pounding.
When given enough incentive, even the root DNS servers are in danger (most of them got taken down couple years back by a DDoS), so the list needs to be long, and those nodes need to be able to take it.

So the list should be atleast 1000 nodes, for which it doesn't incur too much damage if getting DDoS'd. Even if they are average 100Mbps nodes, or even 1GigE, it's tho still easy to drop. Freenet + Seedlist i don't see to be enough in the long term. Adding a node to connect to manually just is not an option (the same list posted here in forums could be as easily be DDoS'd).

Maybe with an list of 10,000 nodes eventually, and random trying networks with dynamic dhcp pools where it's known that there's a lot of bitcoin users (couple ISPs) as tertiary fallback. Those along with static HTTP (trusted volunteer maintained ones) and dns pointers (trusted volunteer maintained ones aswell) would proof to be enough fallbacks for not to worry.

Admittedly, this is not a problem today, but as BC grows and it's value grows, i'm very certain there's a huge interest and incentive to disrupt it for some people. People with huge resources. Think if an 5mil node botnet is used for an attack... Maybe even with just 2Mbps average outbound it would account to 10Tbit/s attack.

For now however, it's enough.
