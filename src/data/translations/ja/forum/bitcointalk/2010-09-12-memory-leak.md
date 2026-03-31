---
title: "メモリリーク"
date: 2010-09-12T20:51:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg12522#msg12522"
author: "eurekafag"
participants:
  - name: "eurekafag"
    slug: "eurekafag"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "eurekafagがスレッドを開始: メモリリーク"
isSatoshi: false
threadId: "bt-memory-leak"
tags: []
translationStatus: complete
---

私は特殊な構成を使用している。ヘッドレスのゲートウェイではbitcoindが動作しており、デスクトップでは標準のbitcoinクライアントが動作している（両方ともLinux OpenSuSE、ゲートウェイは11.1、デスクトップは11.3、bitcoinは両方とも0.3.12）。TCPポート8333はゲートウェイからデスクトップに転送されている（そのためゲートウェイのクライアントは着信接続を受けられない）。原因は不明だが、ゲートウェイの後にデスクトップのクライアントを起動すると、デスクトップのクライアントが接続できず、長時間にわたって接続数が0と2の間を行き来する。最終的には接続できることもあるが、接続できない間はメモリが大量にリークする。約200KB/秒（0-2の切り替えのたびに）。クライアントが即座に接続できれば気づかない程度かもしれないが、私のケースではそうならない。デスクトップを先に起動し、その後ヘッドレスクライアントを（デスクトップが接続した後に）起動すれば、すべて正常に動作し、リークは発生しない（あるいは無視できる程度である）。ブートストラップ関数またはブートストラッププロセスのどこかで解放されていないメモリがあるのではないかと推測している。
