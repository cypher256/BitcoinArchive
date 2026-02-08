---
title: "Re: JSON-RPCパスワード"
date: 2010-07-22T02:34:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4928#msg4928"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/254/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 8
translationStatus: complete
---

[Quote from: gavinandresen on July 22, 2010, 01:11:26 AM](https://bitcointalk.org/index.php?topic=461.msg4908#msg4908)TODO: rpc.user/rpc.passwordが設定されていない場合、設定方法を説明するダイアログボックスまたはdebug.logの警告。
このRPC関連の多くのコンテキストでは、fprintf(stdoutでコンソールに出力できます。このように:
#if defined(__WXMSW__) && wxUSE_GUI
        MyMessageBox("Warning: rpc password is blank, use -rpcpw=<password>
", "Bitcoin", wxOK | wxICON_EXCLAMATION);
#else
        fprintf(stdout, "Warning: rpc password is blank, use -rpcpw=<password>
");
#endif
