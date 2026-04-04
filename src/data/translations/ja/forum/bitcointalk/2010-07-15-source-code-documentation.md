---
title: "ソースコードのドキュメント"
date: 2010-07-15T12:30:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3292#msg3292"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "AndrewBuckがスレッドを開始: ソースコードのドキュメント"
isSatoshi: false
tags: []
translationStatus: complete
---

他の開発者の皆さん、こんにちは。ようやくUbuntuマシン上でビルド環境を構築でき、ソースコードを少し読んでみました。今のところ気に入っています。プログラムは標準テンプレートライブラリを活用して煩雑なデータ構造コードを避けており、クラス構造もpublic/privateアクセスをうまく使ってモジュール性を促進しているようです。

しかし、本当に不足していると思われるのは、.hファイルと.cppファイル間の適切な構成、そして関数のドキュメントです。[Doxygen](http://www.doxygen.org)ドキュメントシステムを使って、関数のドキュメントを書き始めたいと思います。私が開発リーダーを務めているゲーム[OpenDungeons](http://sourceforge.net/projects/opendungeons/)でもこれを使用しており、大変役立っています。

Doxygenに馴染みのない方のために説明すると、Doxygenはソースファイルを読み取り、自動的に収集する情報（関数のパラメータ、クラスの構成と継承など）と、自分で追加する情報（関数の説明、変数の用途など）を抽出します。すべてのコードを解析した後、相互リンクが充実し閲覧しやすいHTMLファイル群を含むディレクトリを生成します。また、各関数からどのサブ関数が呼ばれるかを示すコールグラフの自動生成も設定できます（依存関係やバグの追跡に役立ちます）。

全体として、Doxygenは優れたシステムであり、セットアップして関数のドキュメント（少なくとも私が理解できるもの）を書き始め、パッチを提供してSVNにアップロードできるようにしたいと考えています。ただし、他の開発者が反対するのであればやりたくないので、始める前にここに投稿しました。やってほしいかどうか教えてください。

編集：既存システムのドキュメントがどのようなものか見たい方のために、OGRE 3Dレンダリングシステムのドキュメントへの[リンク](http://www.ogre3d.org/docs/api/html/)を掲載します。ドキュメントの雰囲気をつかむには、上部の「Classes」リンクをクリックして、いくつかのクラスのページを見るのが最良です。

-Buck
