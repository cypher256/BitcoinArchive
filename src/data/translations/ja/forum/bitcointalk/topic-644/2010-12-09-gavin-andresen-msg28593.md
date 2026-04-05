---
title: "Re:（Gavin Andresenの文脈投稿）"
date: 2010-12-09T16:43:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=644.msg28593#msg28593"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック644におけるGavin Andresenの文脈投稿。msg28643の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: Cdecker on July 30, 2010, 06:31:48 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-644/2010-07-30-cdecker-msg6688/)
> ようやくopenSuse Build Service（OBS）でbitcoind（wxのGUIなしのクライアント）のナイトリーパッケージをビルドすることに成功した。openSuseとSLEも近日対応予定。
>
> Ubuntuパッケージをインストールするには、/etc/apt/sources.listに以下の行を追加する：
> Code:deb http://download.opensuse.org/repositories/home:/cdecker/xUbuntu_10.04/ ./次にアップデート：
> Code:sudo aptitude update
> sudo aptitude install bitcoindパッケージの正当性を検証できないという警告が出た場合は、無視してほしい。まだ公開鍵が見つかっていない :-)
>
> その後、~/.bitcoin/bitcoin.confに設定ファイルを作成してRPCパスワードを設定する：
> Code:rpcpassword=<yourpassword>
> あとはデーモンを起動するだけだ：
> Code:bitcoindそしてJSONインターフェースで制御する。
>
> openSuseとSLEのパッケージも作成しようとしている。Debianも可能だが、wx、boost、libdbのコンパイルは大がかりすぎる。誰か手伝ってくれないか？

ナイトリービルドは素晴らしいアイデアだ。Build Serviceは自動SVNアップデートを行うのだろうか？ GUIのBitcoinのビルドを手伝ってくれる人はいるか（またはwxWidgetsチームの誰かを知っている人は？）
