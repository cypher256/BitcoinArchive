---
title: "Re: JSON-RPC password"
date: 2010-07-22T02:34:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4928#msg4928"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/254/"
---

[Quote from: gavinandresen on July 22, 2010, 01:11:26 AM](https://bitcointalk.org/index.php?topic=461.msg4908#msg4908)TODO: dialog box or debug.log warning if no rpc.user/rpc.password is set, explaining how to set.
In many of the contexts of this RPC stuff, you can print to the console with fprintf(stdout, like this:
#if defined(__WXMSW__) && wxUSE_GUI
        MyMessageBox("Warning: rpc password is blank, use -rpcpw=<password>
", "Bitcoin", wxOK | wxICON_EXCLAMATION);
#else
        fprintf(stdout, "Warning: rpc password is blank, use -rpcpw=<password>
");
#endif
