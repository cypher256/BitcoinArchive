---
title: "Re: TOR and I2P"
date: 2010-02-01T21:36:47.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg191#msg191"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalkトピック22におけるBitcoinFXの文脈投稿。msg113の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

俺もTorのリレーと出口ノードを運用していて、BitcoinとTorの統合について同じようなアイデアを持っていた。

Torは設定を正しく編集すれば非常に高速になりうる。遅いサーバーへの接続を制限し、可能な限り最速のノードだけを使えばいい。俺はまた、「問題のある」インターネット国にあるノードもブロックするのが好きだ。そういう場所は接続も遅い傾向があり、全体的なプライバシーもいくぶん向上する。さらに、Unnamed、ididnteditheconfig、名前が気に入らないサーバー、不安定なサーバーもブロックしている。

この設定例はリレー／出口ノードではない個人利用にのみ適している。ただ、P2Pには最適だ 😊

AvoidDiskWrites 1

ExcludeNodes SlowServer,{sd},{pk},{tn},{ae},{by},{in},{bh},{th},{ye},{mm},{eg},{sg},{ma},{cu},{qa},{sa},{by},{md},{tm},{tr},{et},{jo},{sy},{om},{ir},{az},{uz},{kz},{kg},{af},{cn},{bd},{vn},{ng},{gh},{ro},{lb},{ru},{iq},{ly},{ve},{zw},{my},{mo},{kr},unnamed,ididnteditheconfig ...etc.

StrictEntryNodes 1

EntryNodes (http://trunk.torstatus.kgprog.com/index.php?Fast=0 から高速なエントリおよび権威サーバーを選択)

StrictExitNodes 1

ExitNodes (http://trunk.torstatus.kgprog.com/index.php?Fast=0 から高速な出口のみを選択)

Torが自動的に回路を切り替える時間や、その他のカスタム設定を変更するのもいい考えだ https://www.torproject.org/tor-manual.html

参考になれば幸いだ 😉
