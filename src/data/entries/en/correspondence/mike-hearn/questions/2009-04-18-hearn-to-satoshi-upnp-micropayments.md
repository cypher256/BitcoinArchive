---
title: "Mike Hearn to Satoshi on UPnP and micropayments (April 18, 2009)"
date: 2009-04-18T23:23:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn suggests UPnP for port forwarding, asks about version notifications, and proposes a micropayment system for web browsers using EV SSL certificates."
isSatoshi: false
tags:
  - "correspondence"
  - "upnp"
  - "micropayments"
  - "ssl"
  - "browser-extension"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Yes, I believe most P2P clients use the UPnP protocol to get routers to open up the port automatically. That would probably improve the listen rate significantly. I just discovered DMZ wasn't enabled on my router, though I thought it was. That's now fixed.

Is there a way to be told of new versions? Does the app auto update itself? Again, some kind of mailing list would be excellent.

I was thinking through how a practical micropayment implementation for the web might work in the last few days. One key issue is ensuring micropayments are fully automatic, yet can't be easily abused to drain the users account. I think the right approach would be to allow any website that presents an EV SSL cert to automatically request a micropayment, by default the browser always accepts as long as the charge is "low" and displays a small notification of what has occurred. Sites can then show that content requires payment in any way that suits their site design. Abusive sites that don't meet some simple guidelines (eg, showing unambiguously that clicking a link will trigger payment, or taking payment from direct search engine links) would simply have their SSL cert blacklisted, much like anti-phishing filters work today.

The protocol could be very straightforward and implemented by a Firefox extension or an IE BHO. Some static file (eg, a protocol buffer) is hosted on the site. It specifies the charge, a transaction description, the target IP and a URL for the browser to load after the transaction was accepted by the target node, to which the user identifier is sent in a URL parameter. The site can then give back a cookie and the paywalled content. The entire process is automatic and simply results in, say, a little coin animation in the URL bar. Thus it's as convenient as regular web browsing. The users software would have some limit on what payments are automatically accepted.

The main problem with this approach is that somebody has to decide what the user interface guidelines are, then enforce them via blacklisting, as well as decide what payment requirements are low enough to be automatic vs requiring a user prompt. This introduces a trusted authority back into the system. However, it's one that the user can choose in an open market.

By the way, if you're not already using protocol buffers for the node-to-node traffic, I recommend them. We use them here at Google for everything, they solve a lot of versioning problems simply and efficiently.
