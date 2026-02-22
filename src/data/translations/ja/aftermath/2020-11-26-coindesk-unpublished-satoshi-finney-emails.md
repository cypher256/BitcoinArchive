---
title: "サトシとFinneyの未公開メールが明らかに"
date: 2020-11-26T17:03:00Z
source: aftermath
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
author: "Michael Kapilkov"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Fran Finney"
    slug: "fran-finney"
description: "CoinDeskがサトシ・ナカモトとHal Finneyの間の未公開メールを公表した。Halの未亡人Fran Finneyを通じてHalのパーソナルコンピュータから入手されたもので、2008年11月のFinneyによるネットワーク拡張性の質問、2009年1月8日のサトシによるv0.1リリース個人通知、サトシが外部接続を受信できないと述べたフォローアップが含まれていた。"
isSatoshi: false
aftermathType: "media"
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

2020年11月26日、CoinDeskがMichael Kapilkov著「Previously Unpublished Emails of Satoshi Nakamoto Present a New Puzzle」を公表し、サトシ・ナカモトとHal Finneyの間の3通のメールを明らかにした。

**入手経路:** 2014年3月、Fran Finney（Halの未亡人）がジャーナリストNathaniel Popperに著書『Digital Gold』のためHalのパーソナルコンピュータからファイルを送付。PopperはそのメールファイルをKapilkovと共有した。CoinDeskはFran Finneyに直接確認した。

**メール1：2008年11月19日（Finney → サトシ）**
Finneyはサトシに修正への感謝を述べ、ネットワークの拡張性について質問した：
> 「どの程度の規模を想定していますか？数十ノード？数千？数百万？」

これはビットコイン公開ローンチの2か月前、プレリリースコードレビュー期間中のことだった。

**メール2：2009年1月8日（サトシ → Finney）**
件名：「Bitcoin v0.1」。2009年1月8日木曜日20:54:55 PST — 暗号学メーリングリストでの公開発表のわずか数時間後に送信：
> 「お知らせしておきたいと思いました。Bitcoin v0.1のEXEと完全なソースコードのリリースがSourceforgeにアップされています：http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar www.bitcoin.orgにリリースノートとスクリーンショットがあります。Satoshi」

このメールは`satoshi@vistomail.com`から送信された。

**メール3：2009年1月10日（または12日）（サトシ → Finney）**
ビットコインローンチ後のフォローアップ：
> 「残念ながら、今いる場所からは外部接続を受信できず、それが事態をより困難にしています。」

**タイムゾーンの謎：**
サトシの2009年1月のメールヘッダはGMTの**8時間先（UTC+8）**のタイムゾーンを示していた — 日本のUTC+9のオフセットとは不一致。これはサトシの所在地に関する推測を呼んだ。しかしChain BulletinのDoncho Karaivanovは、UTC+8のタイムスタンプはサトシのローカルマシンではなくAnonymousSpeech.comのメールサーバー（1996年以来東京に拠点）からのものだと主張した。ウェブメール使用時、Dateヘッダのタイムゾーンはユーザーの所在地ではなくサーバーの場所を反映する。
