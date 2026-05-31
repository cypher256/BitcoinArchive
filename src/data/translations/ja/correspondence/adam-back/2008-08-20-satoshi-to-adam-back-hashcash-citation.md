---
title: "Hashcash 論文の引用について"
date: 2008-08-20T17:30:39Z
type: "correspondence"
source: "bitcoin-magazine"
sourceUrl: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
sourceNote: "Bitcoin Magazine が Adam Back の COPA 対 Wright 証拠 (2024 年 2 月) として公開したメール画像の書き起こし。"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
description: "サトシ・ナカモトの現存最古のメール。アダム・バックに Hashcash 引用の確認を求め、 「信頼できる第三者なしの電子キャッシュ」 と題したプレリリース草稿を共有。"
isSatoshi: true
tags:
  - "hashcash"
  - "earliest-correspondence"
  - "adam-back"
  - "ecash-pdf"
  - "whitepaper"
  - "origins"
translationStatus: complete
secondarySources:
  - name: "COPA 対 Wright 裁判証拠"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
    note: "ロンドンの COPA 対 Craig Wright 裁判 (2024 年 2 月) に証拠として提出。 Adam Back が証人陳述として完全なメールチェーンを提出した。"
relatedEntries:
  - "analysis/2026-05-31-satoshi-pre-release-period-what-can-be-said"
---

あなたの Hashcash 論文を参考文献として引用する論文をリリースする準備をしているのだが、 引用の表記が正しいか確認したい。 現在の表記はこちら:

[5] A. Back, "Hashcash - a denial of service counter-measure,"
http://www.hashcash.org/papers/hashcash.pdf, 2002.

ハッシュベースのプルーフ・オブ・ワークを電子キャッシュ実現の手段として使うので、 興味を持ってもらえると思う。 プレリリース版の草稿は http://www.upload.ae/file/6157/ecash-pdf.html からダウンロードできる。 興味を持ちそうな他の人にも自由に転送してくれてかまわない。 C++ 実装もほぼ完成しており、 オープンソースとしてリリース予定だ。

タイトル: 信頼できる第三者なしの電子キャッシュ

要旨: 純粋にピアツーピア型の電子キャッシュがあれば、 オンライン決済を金融機関を経由する負担なく、 一方の当事者から他方へ直接送ることができる。 デジタル署名は解決策の一部を提供するが、 二重支払いを防ぐために信頼できる第三者がなお必要であれば、 主な利点は失われる。 我々はピアツーピア・ネットワークを用いた二重支払い問題の解決策を提案する。 ネットワークはトランザクションをハッシュベースのプルーフ・オブ・ワークの継続的なチェーンへとハッシュ化することでタイムスタンプを付与し、 プルーフ・オブ・ワークをやり直さない限り変更できない記録を形成する。 最も長いチェーンは、 目撃された事象の順序を証明するだけでなく、 それが最大の CPU パワー・プールから生まれたことの証明にもなる。 ネットワーク上で最大の CPU パワーを正直なノードが支配する限り、 彼らは最長チェーンを生成し、 攻撃者を上回ることができる。 ネットワーク自体はほとんど構造を必要としない。 メッセージはベスト・エフォートでブロードキャストされ、 ノードは自由にネットワークから離脱・再参加でき、 不在中に何が起きたかの証明として最長のプルーフ・オブ・ワーク・チェーンを受け入れる。

satoshi@anonymousspeech.com
