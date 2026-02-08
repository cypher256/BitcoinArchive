---
title: "Development of alert system"
date: 2010-08-22T23:55:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg10722#msg10722"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Development of alert system\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/409/"
---

I've been working on writing the alert system.  Alerts are broadcast through the network and apply to a range of version numbers.  Alert messages are signed with a private key that only I have.

Nodes can do two things in response to an alert:
- Put a warning message on the status bar.
- Make the money handling methods of the json-rpc interface return an error.

In cases like the overflow bug or a fork where users may not be able to trust received payments, the alert should keep old versions mostly safe until they upgrade.  Manual users should notice the status bar warning when looking for received payments, and the json-rpc safe mode stops automated websites from making any more trades until they're upgraded.

The json-rpc methods that return errors during an alert are:
sendtoaddress
getbalance
getreceivedbyaddress
getreceivedbylabel
listreceivedbyaddress
listreceivedbylabel
