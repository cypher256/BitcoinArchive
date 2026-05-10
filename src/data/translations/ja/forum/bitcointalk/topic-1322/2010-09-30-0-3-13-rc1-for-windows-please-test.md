---
title: "0.3.13 RC1 Windows 版、テストをお願いします"
date: 2010-09-30T17:04:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1322.msg14722#msg14722"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"0.3.13 RC1 Windows 版、テストをお願いします\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/466/"
translationStatus: complete
---

0.3.13 リリース候補だ。まもなくリリースされるので、テストしてほしい：
[http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe)

- 1回の承認があるまで支払いをカウントまたは使用しない
     [topic 1306](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1306/2010-09-30-sni465-re-i-broke-my-wallet-sends-never-confirm-now/)
- 内部バージョン番号を 312 から 31300 に変更
- -allowreceivebyip が指定された場合のみ IP アドレスで送信されたトランザクションを受け入れる
- DB_PRIVATE Berkeley DB フラグを廃止
- 1 セント未満の端数のお釣りで最後の 1 セントを送金する際の問題を修正
- Linux での 128 ビット 4-way SSE2 の自動検出

ギャビン・アンドレセン:
- 別のマシンからの JSON-RPC 接続を受け入れるオプション -rpcallowip=
- Linux での SIGTERM によるクリーンシャットダウン
