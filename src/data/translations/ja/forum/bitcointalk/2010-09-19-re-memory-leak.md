---
title: "Re: メモリリーク"
date: 2010-09-19T17:22:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg13201#msg13201"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「メモリリーク」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/452/"
threadId: "bt-memory-leak"
threadTitle: "Memory leak"
threadPosition: 1
translationStatus: complete
---

0と2の間で接続が行き来しているのは、自分自身に接続している場合かもしれません。「-connect」スイッチを使っていますか？

自分でコンパイルしたものですか、それともリリースビルドですか？バージョンは何ですか？

200Kb/秒がどうなっているかわかりません。接続試行の間に少なくとも0.5秒待つはずです。0と2の接続間でどれくらい速く点滅していますか？1秒に2回より速いですか？

Linuxでのwait関数は：

inline void Sleep(int64 n)
{
    boost::thread::sleep(boost::get_system_time() + boost::posix_time::milliseconds(n));
}

これが正しく動作しなければ、ループを最速で回り続けることが可能です。
