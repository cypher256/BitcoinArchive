---
title: "ウェイ・ダイがDisperse/Collectを発表 ― 自作のCrypto++ライブラリを使用"
date: 1996-02-06T00:00:00Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://cypherpunks.venona.com/archive/1996/02/msg00444.html"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
description: "サイファーパンクメーリングリストでのDisperse/Collect 1.0発表。自作のCrypto++ライブラリ使用と明記し、ダイが理論家ではなく実装者であったことを示す。"
isSatoshi: false
tags:
  - "wei-dai"
  - "crypto-plus-plus"
  - "cypherpunks"
  - "coding"
  - "historic"
editorNote: "この投稿は、ウェイ・ダイが実際にコードを書き、リリースし、保守していた実践的なプログラマーであったことを示す証拠だ。彼が後にb-money（1998年）を実装しなかったのは、技術的能力の不足ではなかった ― 2014年のLessWrongでの本人の告白（「クリプト・アナーキーに幻滅を感じていた」）が裏付けるように、意図的な選択だった。「できなかった」と「しなかった」の区別は、ビットコインに至る知的歴史を理解する上で極めて重要だ。"
secondarySources:
  - name: "Crypto++ Library"
    url: "https://www.cryptopp.com/"
  - name: "Wei Dai — Crypto++ 2.0 announcement (Feb 21, 1996)"
    url: "http://cypherpunks.venona.com/archive/1996/02/msg01491.html"
  - name: "Wei Dai — Crypto++ 1.1 announcement (Nov 4, 1995)"
    url: "http://cypherpunks.venona.com/archive/1995/11/msg00070.html"
translationStatus: complete
---

*サイファーパンクメーリングリストより、1996年2月5-6日：*

「昨年の投稿で、ラビンの情報分散スキームが信頼性の低いリメイラーネットワークを経由して大きなファイルを送信するのに有用だと提案したことのフォローアップとして、 **自分のCrypto++ライブラリ** からDisperse/Collectというシェアウェアパッケージを作成した。Disperseはファイルを冗長なピースに分割し、base 64でエンコードする。Collectはそれらをデコードし、元のファイルを再構成する。このソフトウェアは私のホームページ http://www.eskimo.com/~weidai からダウンロードできる。」

*[補足：1996 年初頭までに [ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/) は Crypto++ 暗号ライブラリを含む複数のソフトウェアプロジェクトを公開していた。Crypto++ は後に [Bitcoin v0.3.7（2010 年 7 月）にサトシ自身がサブセットを取り込み](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-572/2010-07-27-blackeye-msg6093/)、SHA-256 と一般依存ファイルを SVN に追加してハッシュ計算を高速化した — つまりウェイ・ダイのコードは Bitcoin 本体の直接の依存関係としてコードベースに入っている。Crypto++ は Microsoft Office Groove や LastPass などの商用製品にも採用された。]*
