---
title: "バージョン0.3.13、アップグレードしてください"
date: 2010-10-01T00:34:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg14788#msg14788"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"バージョン0.3.13、アップグレードしてください\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/472/"
threadId: "bt-version-0-3-13-please-upgrade"
threadTitle: "Version 0.3.13, please upgrade"
threadPosition: 1
translationStatus: complete
---

バージョン0.3.13が利用可能になりました。0/未承認トランザクションに関する潜在的な問題を防ぐためにアップグレードしてください。注意：0.3.13は0/未承認トランザクションをまだ使用していない場合の問題を防ぎますが、すでに使用してしまった場合は0.3.13.2が必要です。

変更点：
- 1回の承認があるまで支払いをカウントまたは使用しない。
- 内部バージョン番号を312から31300に変更。
- -allowreceivebyipが指定された場合のみIPアドレスで送信されたトランザクションを受け入れる。
- DB_PRIVATE Berkeley DBフラグを廃止。
- 1セント未満の端数のお釣りで最後の1セントを送金する際の問題を修正。
- Linuxでの128ビット4-way SSE2の自動検出。
Gavin Andresen:
- 別のマシンからのJSON-RPC接続を受け入れるオプション -rpcallowip=。
- LinuxでのSIGTERMによるクリーンシャットダウン。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/)

（Mac OSXビルドをしてくれたLaszloに感謝！）

注意：
Linux 64ビット版のSSE2自動検出は、64ビットモードのAMDでは動作しません。代わりにこちらを試して、正しく動作するかお知らせください：
[http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz)

-4wayおよび-4way=0で手動でSSE2の使用を制御することもできます。

バージョン0.3.13.2（SVN rev 161）には、すでに0/未承認トランザクションがあり、それをすでに使用した可能性がある場合の改善が含まれています。Windows版のビルドはこちらです：
[http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe)
