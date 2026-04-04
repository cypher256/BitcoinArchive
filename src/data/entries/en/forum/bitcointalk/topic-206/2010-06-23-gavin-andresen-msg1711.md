---
title: "Bitcoin Faucet changes"
date: 2010-06-23T14:23:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=206.msg1711#msg1711"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Thread starter by Gavin Andresen in BitcoinTalk topic 206."
isSatoshi: false
tags: []
---

So I've been watching the IP addresses of people getting 5 free bitcoins from the Bitcoin Faucet ( https://freebitcoins.appspot.com/ ).

And I see some... uh, interesting patterns.  Like these successful requests for coins:

Code:79.117.152.158 - - [21/Jun/2010:12:17:02 -0700] "POST / HTTP/1.1" 200 1234 
79.117.159.197 - - [21/Jun/2010:12:16:24 -0700] "POST / HTTP/1.1" 200 1234 
79.117.135.236 - - [21/Jun/2010:12:10:23 -0700] "POST / HTTP/1.1" 200 1234
79.117.163.238 - - [21/Jun/2010:12:08:50 -0700] "POST / HTTP/1.1" 200 1234
79.117.155.23 - - [21/Jun/2010:12:08:07 -0700] "POST / HTTP/1.1" 200 1234 

My apologies if there actually are a bunch of new bitcoin users using IP addresses in the 79.117 range...  but I'm guessing somebody there is getting more than their fair share of free bitcoins.

There are several suspicious requests from the 192.38.95.* address block, too.

So I've made some changes to the Faucet.  You won't notice them unless you try to cheat; if you do try to cheat, you'll have to solve a CAPTCHA to get coins.

If that doesn't discourage cheating, I'll modify the code so that if it think you're trying to cheat it requires a CAPTCHA and only gives out a bitcoin nickel (0.05 bitcoins)...
