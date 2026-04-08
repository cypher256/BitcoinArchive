---
title: "Re: Command Line and JSON-RPC"
date: 2011-06-27T12:16:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg291614#msg291614"
author: "galaxyAbstractor"
participants:
  - name: "galaxyAbstractor"
    slug: "galaxyabstractor"
description: "Context post by galaxyAbstractor in BitcoinTalk topic 63. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "krepta3000"
    personSlug: "krepta3000"
    date: "2011-06-26T14:47:21.000Z"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T22:15:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-23-command-line-and-json-rpc"
---

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > Look at rpc.cpp for the list of commands.
>
>
> Seriously?  So, everyone knows C++ but me?  I don't understand where this list of commands is in this file.  *sigh* I have tried to understand C++ for years, things just are not clicking in my head for some reason.  Do you mean this stuff?
> Code:        //
>         // Special case non-string parameter types
>         //
>         if (strMethod == "setgenerate"            && n > 0) ConvertTo(params[0]);
>         if (strMethod == "setgenerate"            && n > 1) ConvertTo(params[1]);
>         if (strMethod == "sendtoaddress"          && n > 1) ConvertTo(params[1]);
>         if (strMethod == "settxfee"               && n > 0) ConvertTo(params[0]);
>         if (strMethod == "getamountreceived"      && n > 1) ConvertTo(params[1]); // deprecated
>         if (strMethod == "getreceivedbyaddress"   && n > 1) ConvertTo(params[1]);
>         if (strMethod == "getreceivedbyaccount"   && n > 1) ConvertTo(params[1]);
>         if (strMethod == "getreceivedbylabel"     && n > 1) ConvertTo(params[1]); // deprecated
>         if (strMethod == "getallreceived"         && n > 0) ConvertTo(params[0]); // deprecated
>         if (strMethod == "getallreceived"         && n > 1) ConvertTo(params[1]);
>         if (strMethod == "listreceivedbyaddress"  && n > 0) ConvertTo(params[0]);
>         if (strMethod == "listreceivedbyaddress"  && n > 1) ConvertTo(params[1]);
>         if (strMethod == "listreceivedbyaccount"  && n > 0) ConvertTo(params[0]);
>         if (strMethod == "listreceivedbyaccount"  && n > 1) ConvertTo(params[1]);
>         if (strMethod == "listreceivedbylabel"    && n > 0) ConvertTo(params[0]); // deprecated
>         if (strMethod == "listreceivedbylabel"    && n > 1) ConvertTo(params[1]); // deprecated
>         if (strMethod == "getbalance"             && n > 1) ConvertTo(params[1]);
>         if (strMethod == "move"                   && n > 2) ConvertTo(params[2]);
>         if (strMethod == "move"                   && n > 3) ConvertTo(params[3]);
>         if (strMethod == "sendfrom"               && n > 2) ConvertTo(params[2]);
>         if (strMethod == "sendfrom"               && n > 3) ConvertTo(params[3]);
>         if (strMethod == "listtransactions"       && n > 1) ConvertTo(params[1]);
>         if (strMethod == "listtransactions"       && n > 2) ConvertTo(params[2]);
>         if (strMethod == "listaccounts"           && n > 0) ConvertTo(params[0]);
>         if (strMethod == "sendmany"               && n > 1)
>         {
>             string s = params[1].get_str();
>             Value v;
>             if (!read_string(s, v) || v.type() != obj_type)
>                 throw runtime_error("type mismatch");
>             params[1] = v.get_obj();
>         }
>         if (strMethod == "sendmany"                && n > 2) ConvertTo(params[2]);
>
> Well, there are comments throughout, so that's good, I really get annoyed by spaghetti code.

Are you looking for this list? https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list
