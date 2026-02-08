---
title: "0.3.13 RC1 Windows版、テストをお願いします"
date: 2010-09-30T17:04:15.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1322.msg14722#msg14722"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"0.3.13 RC1 Windows版、テストをお願いします\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/466/"
threadId: "bt-0-3-13-rc1-for-windows-please-test"
threadTitle: "0.3.13 RC1 for Windows, please test"
threadPosition: 1
translationStatus: complete
---

0.3.13リリース候補です。まもなくリリースされますので、テストをお願いします：
[http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe)

- 1回の承認があるまで支払いをカウントまたは使用しない
     [http://bitcointalk.org/index.php?topic=1306.0](http://bitcointalk.org/index.php?topic=1306.0)
- 内部バージョン番号を312から31300に変更
- -allowreceivebyipが指定された場合のみIPアドレスで送信されたトランザクションを受け入れる
- DB_PRIVATE Berkeley DBフラグを廃止
- 1セント未満の端数のお釣りで最後の1セントを送金する際の問題を修正
- Linuxでの128ビット4-way SSE2の自動検出
Gavin Andresen:
- 別のマシンからのJSON-RPC接続を受け入れるオプション -rpcallowip=
- LinuxでのSIGTERMによるクリーンシャットダウン
