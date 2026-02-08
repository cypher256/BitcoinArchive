---
title: "Re: Bitcoinクライアントとウェブサイトの翻訳"
date: 2010-02-17T19:19:43.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg389#msg389"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoinクライアントとウェブサイトの翻訳」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/62/"
threadId: "bt-bitcoin-client-and-website-translation"
threadTitle: "Bitcoin client and website translation"
threadPosition: 3
translationStatus: complete
---

翻訳サポートのための変更をSVNに更新しました。翻訳可能な文字列はすべて_("")で囲まれており、すべてのプラットフォームでUTF-8を使用しています。

プログラム実行時、EXEのディレクトリで以下のファイルを探します：locale\<langcode>\LC_MESSAGES\bitcoin.mo

<langcode>はOSに設定された言語の2文字コードで、「de」や「nl」のようなものです。

Linuxでは以下も探します：
/usr/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
/usr/local/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
（Linuxで他に探すべき標準的な場所はありますか？）

poeditを使って.poと.moファイルを作成する簡単な手順：

- SVNからBitcoinのソースコードをダウンロード
- trunkディレクトリで、mkdir locale\<lang>\LC_MESSAGES
- poeditで、File->New catalog->Pathsタブ
- 「New item」の点線の四角ボタンをクリック
- 「../../..」を入力し、パスを追加するために必ずEnterを押す
- OKをクリック
- 作成したLC_MESSAGESディレクトリに「bitcoin.po」として保存
- ソースコードをスキャンして約170の文字列が見つかるはず
- 何も見つからない場合は、Catalog->Settings->Pathタブで「../../..」が追加されているか確認

翻訳が完了したら、bitcoin.po（編集可能なカタログファイル）とbitcoin.mo（プログラムが使用するコンパイル済みデータ）の両方をコミットしてください。
