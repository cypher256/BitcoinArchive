---
title: "Re: OSXでのbitcoindデーモン"
date: 2010-09-06T21:52:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=992.msg12135#msg12135"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「OSXでのbitcoindデーモン」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/438/"
translationStatus: complete
---

ビルドできますか？

init.cppの78行目を以下から：
#ifdef __WXGTK__

以下に変更してみてください：
#ifndef __WXMSW__

動作するなら、ソースを変更します。動作するはずです。
