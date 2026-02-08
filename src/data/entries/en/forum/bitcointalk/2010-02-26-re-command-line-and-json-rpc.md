---
title: "Re: Command Line and JSON-RPC"
date: 2010-02-26T16:29:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg555#msg555"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Command Line and JSON-RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/82/"
threadId: "bt-command-line-and-json-rpc"
threadTitle: "Command Line and JSON-RPC"
threadPosition: 5
---

wx/clipbrd.h isn't used, move it inside the #if wxUSE_GUI.

Updated headers.h on SVN.

Sorry, I linked to wxbase but I had full wxWidgets on my computer.

The db.h:140 class Db no member named "exisits" is stranger.  pdb->get, pdb->put, pdb->del compiled before that.  Do you have version 4.7.25 of Berkeley DB?

Db::exists()
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/frame_main.html)
[http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html](http://www.oracle.com/technology/documentation/berkeley-db/db/api_reference/CXX/dbexists.html)

I suppose they might have added exists recently, using get before that.
