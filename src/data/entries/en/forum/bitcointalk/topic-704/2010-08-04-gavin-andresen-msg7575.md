---
title: "Who's the Spanish jerk draining the Faucet?"
date: 2010-08-04T20:40:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=704.msg7575#msg7575"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 704. quoted by msg7703."
isSatoshi: false
tags: []
---

I just shut down freebitcoins.appspot.com; it looks like somebody in Spain is being a jerk and getting a new IP address, bitcoin address, and solving the captcha.  Over and over and over again:

Code:79.154.133.217 - - [04/Aug/2010:12:46:55 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)"

79.146.112.13 - - [04/Aug/2010:12:45:20 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)"

81.44.159.81 - - [04/Aug/2010:12:42:20 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)" Those IP addresses all map to Telefonica de Espana.  If it was you:  give them back, please: 15VjRaDX9zpbA8LVnbrCAFzrVzN7ixHNsC

Now that 5 bitcoins is worth a fair bit, I'm thinking I need more cheating countermeasures.  I can think of four things to try:

1. Rate limit based on the first byte of the IP address (79. or 81. in this case).
2. Rate limit based on the USER-AGENT string ("Opera/9.8..." in this case).
3. Rate limit based on last two domains of reverse DNS lookup of the IP address (rima-tde.net in this case).
4. Make the standard amount given away 0.5 Bitcoins (Bitcoins have gone up 10 times in value since I started the Faucet).

If you get rate limited, you'll get a message that asks you to try again tomorrow.

BitcoinFX: thanks again for the donation to the faucet; I'm going to drain the Faucet below 500 coins temporarily, and will refill it with your donation after the new cheating countermeasures are in place.
