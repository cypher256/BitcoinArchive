---
title: "Re: JSON-RPC パスワード"
date: 2010-07-22T02:34:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4928#msg4928"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC パスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/254/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-22T01:11:26.000Z"
    sourceEntryId: "forum/bitcointalk/topic-461/2010-07-22-gavin-andresen-msg4908"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> TODO：rpc.user/rpc.password が設定されていない場合、ダイアログボックスまたは debug.log で設定方法を説明する警告を表示する。
<!-- /tone-skip -->

この RPC 関連の多くのコンテキストでは、fprintf(stdout でコンソールに出力できる。このように:

```cpp
#if defined(__WXMSW__) && wxUSE_GUI
        MyMessageBox("Warning: rpc password is blank, use -rpcpw=<password>
", "Bitcoin", wxOK | wxICON_EXCLAMATION);
#else
        fprintf(stdout, "Warning: rpc password is blank, use -rpcpw=<password>
");
#endif
```
