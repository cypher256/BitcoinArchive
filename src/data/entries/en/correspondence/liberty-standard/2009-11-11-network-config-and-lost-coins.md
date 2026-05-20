---
title: "Re: Linux - linux-0.1.6-test2 (network setup and more lost coins)"
date: 2009-11-11T13:08:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. The quoted reply header in Satoshi's mail records this as 'On Wed, Nov 11, 2009 at 8:08 AM, Liberty Standard'; the 8:08 is interpreted as US local time and converted to approximately 13:08 UTC."
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard describes his network setup (VPN, secondary NIC, VirtualBox NAT), reports more lost coin packs in test2, and restarts Bitcoin as a workaround."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

My network connection is direct to my computer. My ISP requires that I run VPN to connect to the Internet. I then have a second NIC that shares my Internet with other devices. My IP address while using my computer is my actual IP address, but the devices connected through my second NIC use NAT. When I connect through a virtual machine, that also uses NAT. All this requires very little configuration. NetworkManager in Ubuntu has an option to share my Internet connection through the second NIC and VirtualBox has the option to use NAT.

I lost a couple packs of bitcoins again, so that problem is not yet fixed. It's a bit more bearable now that I have an idea of what is going on. I figure for now I'll just restart bitcoin whenever I see a pack of bitcoins starting to mature. I may go back and forth a bit between Linux and Wine, but I'll definitely test every new version that comes out. At the moment I'm still running the Linux build.
