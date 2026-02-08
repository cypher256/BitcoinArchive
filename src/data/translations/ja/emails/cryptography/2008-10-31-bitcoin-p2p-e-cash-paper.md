---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-10-31T18:10:00Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが暗号学メーリングリストでビットコインを初めて公表。信頼できる第三者を必要としない、完全なP2P電子キャッシュシステムを紹介した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 1
isSatoshi: true
tags:
  - "announcement"
  - "whitepaper"
  - "proof-of-work"
  - "p2p"
translationStatus: complete
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/1/"
---

新しい電子キャッシュシステムに取り組んできました。完全なピアツーピア方式で、信頼できる第三者を必要としません。

論文はこちらで公開しています：
http://www.bitcoin.org/bitcoin.pdf

主な特性：
 - 二重支払いはピアツーピアネットワークによって防止されます。
 - 造幣局やその他の信頼できる第三者は不要です。
 - 参加者は匿名でいられます。
 - 新しいコインは Hashcash 方式のプルーフ・オブ・ワークから生成されます。
 - 新しいコイン生成のためのプルーフ・オブ・ワークが、二重支払いを防止するネットワークの動力にもなります。

**ビットコイン：ピアツーピア電子キャッシュシステム**

概要：完全なピアツーピア版の電子キャッシュは、金融機関を経由する負担なしに、オンライン決済を当事者間で直接送金することを可能にする。デジタル署名はソリューションの一部を提供するが、信頼できる第三者が二重支払いの防止に依然として必要であれば、主要な利点は失われる。我々は、ピアツーピアネットワークを用いた二重支払い問題の解決策を提案する。ネットワークは、トランザクションをハッシュベースのプルーフ・オブ・ワークの継続的なチェーンにハッシュ化することでタイムスタンプを付与し、プルーフ・オブ・ワークをやり直さない限り変更できない記録を形成する。最長のチェーンは、目撃されたイベントの順序の証明としてだけでなく、それが最大のCPUパワーのプールから生まれたことの証明としても機能する。正直なノードがネットワーク上のCPUパワーの過半数を支配する限り、彼らは最長のチェーンを生成し、いかなる攻撃者をも凌駕できる。ネットワーク自体は最小限の構造しか必要としない。メッセージはベストエフォートベースでブロードキャストされ、ノードは自由にネットワークを離脱・再参加でき、不在中に何が起きたかの証明として最長のプルーフ・オブ・ワークチェーンを受け入れる。

完全な論文はこちら：
http://www.bitcoin.org/bitcoin.pdf

サトシ・ナカモト
