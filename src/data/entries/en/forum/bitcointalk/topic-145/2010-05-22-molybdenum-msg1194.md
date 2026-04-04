---
title: "CLI bitcoin generation"
date: 2010-05-22T18:44:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1194#msg1194"
author: "molybdenum"
participants:
  - name: "molybdenum"
    slug: "molybdenum"
description: "Context post by molybdenum in BitcoinTalk topic 145. quoted by msg1256."
isSatoshi: false
tags: []
---

So I'm poking around creating a simple web interface for simple bitcoin usage (something a little lighter and less stateful than a full-on wx/GTK GUI) and I haven't seen any way to see the status of generated blocks in progress of verification... I have seen my balance jump up by 50, but of course that doesn't show up in getallreceived.

For a headless coin generation box, being able to see my status right away would be nice, or at least, being able to know if I have 30 blocks awaiting confirmation, or am still trying to get the first... if it's purely automated and just checking-and-forwarding the balance, that's not a problem though.

Additionally, in the GUI client a transaction will appear as soon as it's seen, while getallreceived only shows a transaction after a block has gone by... yet the balance jumps up by the appropriate amount right away.

I can imagine some poor nervous customer pacing back and forth worrying about his payment going through, when that wouldn't really be needed. While this *could* be used to cheat the system if a malicious machine managed to generate the winning block and exclude its own payment, but some instant indication that something was happening would be nice none the less even if it needed a "don't accept transactions while the confirmations are still at 0" warning tag... perhaps a separate function that included 0-confirmation transactions? An optional parameter to specify the minimum number of blocks after that transaction (getallreceived 1 for current behavior, or just getallreceived, getallreceived 5 for the paranoid, getallreceived 0 for instant confirms)?
