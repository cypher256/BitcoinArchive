---
title: "a simple traffic load test run"
date: 2010-07-25T04:02:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=567.msg5685#msg5685"
author: "lfm"
participants:
  - name: "lfm"
    slug: "lfm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "lfm starts a discussion: a simple traffic load test run."
isSatoshi: false
tags: []
---

I have seen some speculation about scalability and denial of service by spam transactions in the IRC channel so I thought it would be a good idea to try a test.

I set up a stupid little bitcoind script on a couple of my linux machines to send 1000 tiny transaction to a third machine as quickly as they would run.

I asked on IRC for any obvious reasons why I shouldn't do it and got one supporting response thinking it was a good idea to try and one reserved response saying I should ask here first. I brashly decided to go ahead with it.

The scripts just printed a countdown of the number of remaining steps in the loop and the output of the bitcoind sendtoaddress command, normally just "sent".

They both started out quickly till there was something like 600 transactions submitted then both senders started to slow down perceptibly. One was quite a bit faster than the other, 3 or 4 times faster, due I think to a faster CPU. I thought at first it was the clients throtteling me to save the net from overload or something but that was just speculation. We later figured maybe it was the databases getting a bit slow on my old disks.

Then one of my machines suddenly seemed to speed up. But it wasn't really. It was an error, the bitcoind daemon had died. A little bit of investigation found the .bitcoin drive was full so you can't fault the program for giving up there! grin

The other machine was grinding pretty slow by then down to maybe 5 sec per transaction or so just judging by eye. It eventually finished after about 50 minutes. no errors at all.

The machine that crashed after I gave it some more disk space started right back up and showed it had only sent 424 transactions so there is an initial benchmark then - 1424 transactions in 50 minutes. It should be easy to get more.

I think the main thing slowing them down was the .bitcoin/database directory. They seemed to get a lot of data written to them some 184MB on the one that ran outa disk space and 1341 MB on the one that did the full 1000 transactions.

It seems another test with more people more distributed around the net might be in order to try to shake down any potential problems.

The net seemed to shrug it off as if nothing special happened anyway so that is a positive result. The clients mostly did just what they were told and expected except for a possible performance problem with the database.

Thats all I can think of for now.
