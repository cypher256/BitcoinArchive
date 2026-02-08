---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T05:51:34.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4646#msg4646"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/251/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 5
translationStatus: complete
---

設定ファイル形式を調査していました。比較を以下に示します。

YAMLは巨大です。プロジェクトに統合できる軽量で簡単にビルドできるライブラリがあるかどうかわかりません。過剰に思えます。

JSONは魅力的で好む傾向にありますが、2つの主要な問題点があります:
1) コメントがない！行をコメントアウトして無効にできない設定ファイルなんてどうやって使うのですか？
2) キーを含むすべての文字列を"クォート"で囲む必要があり、行末のカンマも忘れずに付けなければならないのは、あまりユーザーフレンドリーではありません。
{
    "key" : "value",
}

設定ファイルを1行ずつ読み込んで、#文字（および/または"//"？）の位置で行を切り詰め、文字列に連結してJSONに渡すことで、簡単にJSONを前処理できるでしょう:
# コメント
"key" : "value",   # カンマは忘れずに
"key2" : "value",   // このようなコメントや両方

Boostにはboost::program_optionsがあります。

行を自分で読み取ってmap<string, string> mapConfigに入れることもできます。

while (!eof)
  行を読み込む
  '#'が見つかったら行を切り詰める
  最初の':'で行を分割 -> key, value
  mapConfig.insert(key, value)

構文として:
# コメント
key : value

を使い、キーの前に空白インデントを許可しなければ、YAMLのサブセットとなり、より複雑な機能が必要になった時にYAMLに切り替えることができるでしょう。

自前パースにした場合でも、必要に応じて特定のパラメータ値にJSONを使用できないわけではありません。オプションがリストやより構造化されたデータを必要とする場合、その値をJSONとしてパースできます:
key : ["item1", "item2", "item3"]

ただし、すべて1行に収める必要があります。

自前パースのmapConfigに傾いています:
# コメント
key : value
