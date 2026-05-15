---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-29T04:08:10Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Boost の mutex はここで役に立ちますか？"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    sourceEntryId: "correspondence/martti-malmi/2009-10-29-bitcoinsourceforgenet-046"
---

<!-- speaker: Satoshi Nakamoto -->
<!-- quote: q1 -->
<!-- tone-skip -->
> CriticalSection のコードを wxCriticalSection に変換して SVN にアップロードするよ（少しトリッキーだけど）。TryEnterCriticalSection をどうするかはまだわからない。もうすぐすべてチェックインできる状態になると思う。
<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
Boost の mutex はここで役に立ちますか？

http://www.boost.org/doc/libs/1_40_0/doc/html/thread/synchronization.html#thread.synchronization.mutex_concepts
