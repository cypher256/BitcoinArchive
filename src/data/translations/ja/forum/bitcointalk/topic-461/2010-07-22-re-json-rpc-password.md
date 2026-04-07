---
title: "Re: JSON-RPCパスワード"
date: 2010-07-22T02:34:23.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-21T16:11:26.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> この実装を自分から引き受けて、今日かなり進捗があった。サトシ：明日にはパッチを送れるはずだ。
<!-- /tone-skip -->

このRPC関連の多くのコンテキストでは、fprintf(stdoutでコンソールに出力できる。このように:

```cpp
#if defined(__WXMSW__) && wxUSE_GUI
        MyMessageBox("Warning: rpc password is blank, use -rpcpw=<password>
", "Bitcoin", wxOK | wxICON_EXCLAMATION);
#else
        fprintf(stdout, "Warning: rpc password is blank, use -rpcpw=<password>
");
#endif
```
