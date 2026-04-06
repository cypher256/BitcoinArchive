---
title: "Re: TOR and I2P"
date: 2010-02-01T22:08:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg192#msg192"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "Context post by BitcoinFX in BitcoinTalk topic 22. before msg223."
isSatoshi: false
tags: []
---

OK So, I tried to set-up a sudo-anonymous crypto 'Bitcoin Bank' experiment using Tor. 😄

Whilst it was mostly successful using the standard 9050 socks port 'default setup' i.e. I got connectivity to other Bitcoin nodes through Tor; I did encounter various issues and multiple Warning messages.

"Your application (using socks5 on port xxxx) is giving Tor only an IP address. Applications that do DNS resolves themselves may leak information. Consider
using Socks4A (e.g. via polipo or socat) instead."

https://wiki.torproject.org/noreply/TheOnionRouter/TorFAQ#IkeepseeingthesewarningsaboutSOCKSandDNSandinformationleaks.ShouldIworry.3F

I eventually fixed this using Privoxy and Stunnel (because i'm more familiar with those) However, you could use polipo and Stunnel.

However, I still get occasional warnings for these ports 8333 (expected Bitcoin 'default') and 6667 (which if i'm not mistaken is an IRC port !?)

Connecting Bitcoin through Tor also makes Tor repeatedly change exit nodes looking to establish 'missing' connections to a [scrubbed] address. At first I assumed that this was because Tor exits might be blocking port 8333 or 6667, but that is mostly not the case !

Other P2P applications through Tor can 'ignore' IP addresses that they cannot connect to and the application can still get the job done without 'warning'. However, Bitcoin *must* try to connect with all nodes to check its not missing any blocks ! So, if an IP range where only 1 Bitcoin node is running is blocking Tor exit nodes, then presumably this will always be the case ?

This is problematic for many reasons. 😕
