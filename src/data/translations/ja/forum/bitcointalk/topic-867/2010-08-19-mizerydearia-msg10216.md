---
title: "Convert Bitcoin to GTK: Yes?  No?  wx is better?"
date: 2010-08-19T07:23:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=867.msg10216#msg10216"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Thread starter by mizerydearia in BitcoinTalk topic 867."
isSatoshi: false
tags: []
---

Who is skilled enough to convert official Linux Bitcoin client to use GTK instead of wx?

Is this development worthy or desirable enough to pursue or is wx acceptable?

q: let me get this straight. You're asking if someone will put up a bounty for a conversion that you want? (bounty idea dismissed due to seeming weird/strange to some)
a: I don't want it. Is GTK better than QT or anytihng else?  I'm not familiar.

"I would like it if Bitcoin used GTK instead of wxWidgets but I won't pretend that I have a clue about how hard or easy that change might be"

someone: wx seems to work now as far as I can tell
someone else: wx is an utter nightmare

q: why "convert" Satoshi's front end? Why not just build a new one that uses the rpc calls?

there actually isn't much that needs to be done to make bitcoind's methods useful enough to do the same things the GUI does:
in particular:
 * list sending addresses
 * show unaccepted blocks in listtransactions (maybe)
 * select a range of transactions to show
