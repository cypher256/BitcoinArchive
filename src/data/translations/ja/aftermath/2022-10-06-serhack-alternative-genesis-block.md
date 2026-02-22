---
title: "代替ジェネシスブロック — 2008年9月のサトシのプレリリーステストブロック"
date: 2022-10-06T00:00:00Z
source: aftermath
sourceUrl: "https://serhack.me/articles/story-behind-alternative-genesis-block-bitcoin/"
author: "SerHack"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "SerHackが2008年9月10日のプレリリース版ビットコインジェネシスブロックの分析を発表した。サトシが2008年11月に非公開で共有したソースコードから発見されたもので、完全に異なるハッシュ、極めて容易な難易度、10,000ユニットのブロック報酬を持っていた。9月10日はLehman Brothersが39億ドルの損失を発表した日と一致する。"
isSatoshi: false
aftermathType: "blog"
tags:
  - "genesis-block"
  - "pre-release"
  - "alternative-genesis"
  - "ray-dillinger"
  - "lehman-brothers"
  - "source-code"
secondarySources:
  - name: "BitcoinTalk — 'Bitcoin source from November 2008' by Cryddit (December 23, 2013)"
    url: "https://bitcointalk.org/index.php?topic=382374.0"
  - name: "Bitcoin Wiki — Genesis block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
translationStatus: complete
---

2022年10月6日、セキュリティ研究者SerHackが「The Story Behind the Alternative Genesis Block of Bitcoin」を発表し、公式ローンチの約4か月前のプレリリース版ビットコインジェネシスブロックを分析した。

**発見の経緯：**
2013年12月23日、BitcoinTalkユーザー「Cryddit」（Ray Dillinger、別名Bear）が、2008年11月にサトシ・ナカモトからセキュリティ監査のために非公開で共有されたソースコードを投稿した。Dillingerはブロックチェーンコードのレビューを、Hal Finneyはスクリプト言語のレビューを担当した。このコードには2009年1月3日にローンチされたものとは全く異なるパラメータのジェネシスブロックが含まれていた。

**プレリリース版ジェネシスブロック：**

| パラメータ | プレリリース版（2008年9月） | 公式版（2009年1月） |
|---|---|---|
| タイムスタンプ | `1221069728`（2008年9月10日 18:02:08 UTC） | `1231006505`（2009年1月3日 18:15:05 UTC） |
| ハッシュ | `0x000006b15d1327d67e...` | `0x000000000019d6689c...` |
| 難易度（nBits） | 20（テスト用の「ridiculously easy」） | `0x1d00ffff`（Difficulty 1） |
| ノンス | 141,755 | 2,083,236,893 |
| ブロック報酬 | 10,000ユニット（「cents」） | 50 BTC |

**金融危機との関連：**
プレリリース版ジェネシスブロックのタイムスタンプ2008年9月10日は、Lehman Brothersが約39億ドルの四半期損失を発表した日と一致する。Lehman Brothersはその5日後の9月15日に破産申請した。これはサトシが論文を2008年10月31日に公開する以前から、進行中の金融危機を直接の動機としてビットコインを開発していたことを示唆している。

**その他のプレリリース版の違い：**
2008年11月のコードには初期のIRCクライアントフレームワーク、P2Pマーケットプレイス、バーチャルポーカーゲームも含まれていた — いずれも2009年1月の公開リリース前に削除された機能である。プレリリース版のパラメータ（ブロックあたり10,000ユニット）での総供給量は約19.9億ビットコインになるはずだった。
