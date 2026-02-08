---
title: "wxWidgetsなしのbitcoind"
date: 2010-07-26T17:23:33.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=576.msg5904#msg5904"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"wxWidgetsなしのbitcoind\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/278/"
translationStatus: complete
---

bitcoindの残りわずかなwxBase依存を置き換えました。

bitcoindはSVNリビジョン112でwxWidgetsやwxBaseなしでコンパイルできるようになりました。

main(int argc, char* argv[])がinit.cppに追加されました。CMyAppとスタートアップフォルダ関連のコードはui.cppに移動されました。ui.cppとuibase.cppはbitcoindではリンクされません。

MakefileではGUIの使用を制御するために-DGUIを使用しています。

MinGW、VC、Ubuntuでテストコンパイルしました。Mac OS Xのビルドを壊していないかわかりませんので、誰かが確認する必要があります。
