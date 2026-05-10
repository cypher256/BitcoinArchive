---
title: "Re: Bitcoin クライアントとウェブサイトの翻訳"
date: 2010-02-17T19:19:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg389#msg389"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoin クライアントとウェブサイトの翻訳」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/62/"
translationStatus: complete
---

翻訳サポートのための変更を SVN に更新した。翻訳可能な文字列はすべて_("")で囲まれており、すべてのプラットフォームで UTF-8 を使用している。

プログラム実行時、EXE のディレクトリで以下のファイルを探す：locale\<langcode>\LC_MESSAGES\bitcoin.mo

<langcode>は OS に設定された言語の 2 文字コードで、「de」や「nl」のようなものだ。

Linux では以下も探す：
/usr/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
/usr/local/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
（Linux で他に探すべき標準的な場所はあるか？）

poedit を使って.po と.mo ファイルを作成する簡単な手順：

- SVN から Bitcoin のソースコードをダウンロード
- trunk ディレクトリで、mkdir locale\<lang>\LC_MESSAGES
- poedit で、File->New catalog->Paths タブ
- 「New item」の点線の四角ボタンをクリック
- 「../../..」を入力し、パスを追加するために必ず Enter を押す
- OK をクリック
- 作成した LC_MESSAGES ディレクトリに「bitcoin.po」として保存
- ソースコードをスキャンして約 170 の文字列が見つかるはず
- 何も見つからない場合は、Catalog->Settings->Path タブで「../../..」が追加されているか確認

翻訳が完了したら、bitcoin.po（編集可能なカタログファイル）と bitcoin.mo（プログラムが使用するコンパイル済みデータ）の両方をコミットしてほしい。
