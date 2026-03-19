---
title: "Re: Multiple Wallets, one computer"
date: 2010-10-25T16:53:53.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg18508#msg18508"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Multiple Wallets, one computer\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/498/"
threadId: "bt-multiple-wallets-one-computer"
threadPosition: 3
---

Here's some pseudocode of how you would use the account based commands.  It sure makes website integration a lot easier.

```python
print "send to " + getaccountaddress(username) + " to fund your account"
print "balance: " + getbalance(username, 0)
print "available balance: " + getbalance(username, 6)
```

```python
// if you make a sale, move the money out of their account
move(username, "", amount, 6)

// withdrawal
sendfrom(username, bitcoinaddress, amount, 6)
```
