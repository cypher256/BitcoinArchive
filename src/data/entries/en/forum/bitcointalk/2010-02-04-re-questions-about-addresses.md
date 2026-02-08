---
title: "Re: Questions about Addresses"
date: 2010-02-04T00:07:07.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=34.msg222#msg222"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Questions about Addresses\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/41/"
---

Port forwarding forwards a port to one computer.  It tells the router which computer handles connections to that port.  So that's the computer receiving.

If you didn't set up port forwarding, then incoming connections won't go to any computer, and attempts to send to that IP would just say it couldn't connect to the recipient and nothing is sent.  When sending by IP, you still send to a bitcoin address, but your computer connects to that IP, gets a new bitcoin address from it, gives the transaction directly to the them and confirms that it was received and accepted.

Someone should post their static IP so people can try out sending by IP and also give that user free money.

There's a 32-bit checksum in bitcoin addresses so you can't accidentally type an invalid address.

If 4) you send to a recipient who has abandoned or lost their wallet.dat, then the money is lost.  A subtle point can be made that since there is then less total money in circulation, everyone's remaining money is worth slightly more, aka "natural deflation".
