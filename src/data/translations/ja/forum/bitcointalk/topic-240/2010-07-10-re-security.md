---
title: "Re: セキュリティ"
date: 2010-07-10T12:58:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=240.msg2132#msg2132"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「セキュリティ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/176/"
translationStatus: complete
---

これをどうやるか考え始める。

現時点では、-connect をある程度使える。-connect を使って LAN 上のローカルコンピューターに接続させることができる。例えば-connect=192.168.0.100 のように。空白の状態から始めてメインネットワークに接続させなければ、難易度は元の低い難易度のままだ。ただし、ポートフォワーディングをしている場合は、外部のノードがまだあなたにインバウンドで接続してくる可能性がある。

-connect を使ってもまだ IRC は使用されるが、-connect で特定のノードにのみ接続するよう指示している時は IRC に接続しないようにすべきだと思うか？-connect の主なシナリオは、サーバーファームがあり、2 台がネットワークに接続し、残りが最初の 2 台に接続するケースだ。その場合、-connect のコンピューターを IRC に接続させたくないだろう。

```cpp
void ThreadIRCSeed(void* parg)
{
    if (mapArgs.count("-connect"))
        return;
```
