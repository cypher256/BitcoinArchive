---
title: "Re: (context post by Gavin Andresen)"
date: 2010-07-17T14:13:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=434.msg3750#msg3750"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 434. before msg3770."
isSatoshi: false
tags: []
---

Here's how you can lose coins by backing up and restoring your wallet file:

Lets say you have one shiny 1,000 Bitcoin coin in your wallet (it's actually just a transaction for 1,000 bitcoins paid to a public key that's stored in your wallet).

You backup that file.

Now you spend 1 Bitcoin.  Your shiny 1,000 BTC coin is broken into 1BTC, plus 999BTC in change.  That change is **given a new, different public key.**

Now if you restore your wallet file, Bitcoin sees that the 1,000BTC coin has been spent-- 1BTC was sent somewhere, and the other 999BTC was sent somewhere else.  Because you don't have the key for the 999BTC, it has no idea that those coins belong to you.

So they're lost.

Trying out alternative policies for handling change on the TEST network would be a good idea, in my opinion.

Maybe change transactions should always get signed with the same public key, so you wouldn't lose coins when restoring your wallet... although that would give you less privacy because it would tend to tie all your transactions together.

Maybe your wallet should get initially populated with 100 "change" addresses, with one randomly chosen as needed.  And some super-geeky way of replacing them with another, new, 100 addresses.

Maybe there's an even better way of handling the "I lost BTC when I restored my wallet" problem; ideas?
