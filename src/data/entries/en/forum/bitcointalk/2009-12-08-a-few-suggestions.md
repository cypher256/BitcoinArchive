---
title: "A few suggestions"
date: 2009-12-08T20:34:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg40#msg40"
author: "madhatter"
participants:
  - name: "madhatter"
    slug: "madhatter"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "madhatter starts a discussion: A few suggestions."
isSatoshi: false
threadId: "bt-a-few-suggestions"
threadPosition: 1
tags: []
---

Hey,

First off I must say that this is an amazing concept. I have been dreaming of a P2P money system for a LONG time.

You have my complete kudos and respect.

I have a few suggestions:

- When the bitcoin software establishes a connection with a peer (client TCP socket) have the client send the handshake string. Right now you have the server (server TCP socket) send the handshake. My reasons for this are anonymity of course. It is far too easy for ISPs to portscan clients and detect they are running this program.

- Use some sort of encryption during the handshake (sort of goes with the statement/request above) to obfuscate what the software is during DPI (deep packet inspection). I am really thinking about people in non-free (as in freedom) countries such as China/Iran.

- Some sort of an API is needed so that this system can be integrated with websites to provide instant-on services. A simple https receipt mechanism would do wonders. Have the client post each incoming payment to an https url with all of the relevant information and provide status updates. Also an outbound payment mechanism would be nice. So one could automate payments (and batch payments) outbound. Status could be returned via the https receipt interface.

- Static port/Random port. Have a setting to randomly assign the port that it runs on. (also be able to set it statically for very restrictive firewalls).

- UPnP support. Have the client automatically create the port forward on upstream routers. Enabled by default. Can be turned off in the options menu.

- Ability to compile a headless (console only) install for *NIX systems. Also have the ability to just run as a network service. Perhaps with a telnet-able port for control (or even a unix socket would be ok).
