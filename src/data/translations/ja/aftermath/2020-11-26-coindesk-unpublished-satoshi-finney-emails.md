---
title: "サトシとフィニーの未公開メールが明らかに"
date: 2020-11-26T17:03:00Z
type: "article"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
author: "Michael Kapilkov"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Fran Finney"
    slug: "fran-finney"
description: "CoinDeskがサトシ・ナカモトとハル・フィニーの間の未公開メールを公表した。ハルの未亡人フラン・フィニーを通じてハルのパーソナルコンピュータから入手されたもので、2008年11月のフィニーによるネットワーク拡張性の質問、2009年1月8日のサトシによるv0.1リリース個人通知、サトシが外部接続を受信できないと述べたフォローアップが含まれていた。"
isSatoshi: false
tags:
  - "satoshi-finney-emails"
  - "unpublished"
  - "hal-finney"
  - "fran-finney"
  - "timezone-mystery"
  - "v0.1-release"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Email to Hal Finney (Jan 8, 2009)"
    url: "https://www.bitcoin.com/satoshi-archive/emails/hal-finney/1/"
  - name: "Bitcoin News — Researcher Publishes Never-Before-Seen Emails Between Satoshi and Hal Finney"
    url: "https://news.bitcoin.com/researcher-publishes-never-before-seen-emails-between-satoshi-nakamoto-and-hal-finney/"
  - name: "Chain Bulletin — 'No, CoinDesk, Satoshi's local time zone wasn't UTC+8'"
    url: "https://chainbulletin.com/no-coindesk-satoshis-local-time-zone-wasnt-utc8"
translationStatus: complete
---

2020年11月26日、CoinDeskがマイケル・カピルコフ著「Previously Unpublished Emails of Satoshi Nakamoto Present a New Puzzle」を公表し、サトシ・ナカモトとハル・フィニーの間の3通のメールを明らかにした。

**入手経路:** 2014年3月、フラン・フィニー（ハルの未亡人）がジャーナリストのナサニエル・ポッパーに著書『Digital Gold』のためハルのパーソナルコンピュータからファイルを送付。ポッパーはそのメールファイルをカピルコフと共有した。CoinDeskはフラン・フィニーに直接確認した。

**メール1：[2008年11月19日](/BitcoinArchive/ja/entries/correspondence/hal-finney/2008-11-19-finney-to-satoshi-scalability/)（フィニー → サトシ）**
フィニーはサトシに修正への感謝を述べ、ネットワークの拡張性について質問した：
> 「どのくらいの規模になると想定しているんだい？数十ノード？数千？数百万？」

これはビットコイン公開ローンチの2か月前、プレリリースコードレビュー期間中のことだった。

**メール2：[2009年1月8日](/BitcoinArchive/ja/entries/correspondence/hal-finney/2009-01-08-satoshi-to-finney-release/)（サトシ → フィニー）**
件名：「Bitcoin v0.1」。2009年1月8日木曜日20:54:55 PST — [暗号学メーリングリストでの公開発表](/BitcoinArchive/ja/entries/emails/cryptography/2009-01-08-bitcoin-v0-1-released/)のわずか数時間後に送信：
> 「お知らせしておこうと思った。EXEと完全なソースコード付きのBitcoin v0.1リリースがSourceforgeに公開された：http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar www.bitcoin.org にリリースノートとスクリーンショットがある。Satoshi」

このメールは`satoshi@vistomail.com`から送信された。

**メール3：[2009年1月10日（または12日）](/BitcoinArchive/ja/entries/correspondence/hal-finney/2009-01-10-satoshi-to-finney-connections/)（サトシ → フィニー）**
ビットコインローンチ後のフォローアップ：
> 「残念ながら、今いる場所からは外部からの接続を受け付けることができず、そのせいで作業がより困難になっている。」

**タイムゾーンの謎：**
サトシの2009年1月のメールヘッダはGMTの **8時間先（UTC+8）** のタイムゾーンを示していた — 日本のUTC+9のオフセットとは不一致。これはサトシの所在地に関する推測を呼んだ。しかしChain Bulletinのドンチョ・カライヴァノフは、UTC+8のタイムスタンプはサトシのローカルマシンではなくAnonymousSpeech.comのメールサーバー（1996年以来東京に拠点）からのものだと主張した。ウェブメール使用時、Dateヘッダのタイムゾーンはユーザーの所在地ではなくサーバーの場所を反映する。
