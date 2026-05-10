---
title: "バージョン 0.3.13、アップグレードしてください"
date: 2010-10-01T00:34:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg14788#msg14788"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"バージョン 0.3.13、アップグレードしてください\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/472/"
translationStatus: complete
---

バージョン 0.3.13 が利用可能になった。0/未承認トランザクションに関する潜在的な問題を防ぐためにアップグレードしてほしい。注意：0.3.13 は 0/未承認トランザクションをまだ使用していない場合の問題を防ぐが、すでに使用してしまった場合は 0.3.13.2 が必要だ。

変更点：
- 1回の承認があるまで支払いをカウントまたは使用しない。
- 内部バージョン番号を 312 から 31300 に変更。
- -allowreceivebyip が指定された場合のみ IP アドレスで送信されたトランザクションを受け入れる。
- DB_PRIVATE Berkeley DB フラグを廃止。
- 1 セント未満の端数のお釣りで最後の 1 セントを送金する際の問題を修正。
- Linux での 128 ビット 4-way SSE2 の自動検出。

ギャビン・アンドレセン:
- 別のマシンからの JSON-RPC 接続を受け入れるオプション -rpcallowip=。
- Linux での SIGTERM によるクリーンシャットダウン。

ダウンロード：
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/)

（Mac OSX ビルドをしてくれた Laszlo に感謝！）

注意：
Linux 64 ビット版の SSE2 自動検出は、64 ビットモードの AMD では動作しない。代わりにこちらを試して、正しく動作するか知らせてほしい：
[http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz)

-4way および-4way=0 で手動で SSE2 の使用を制御することもできる。

バージョン 0.3.13.2（SVN rev 161）には、すでに 0/未承認トランザクションがあり、それをすでに使用した可能性がある場合の改善が含まれている。Windows 版のビルドはこちらだ：
[http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe)
