---
title: "ライトコインが「ビットコインの金に対する銀」としてローンチ — チャーリー・リーが Scrypt PoW でフォーク (2011 年 10 月)"
date: 2011-10-13T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Litecoin"
author: "Charlie Lee"
participants:
  - name: "Charlie Lee"
    slug: "charlie-lee"
description: "チャーリー・リーが 2011 年 10 月 13 日にライトコインをローンチ。Scrypt PoW、2.5 分ブロック、上限 8400 万枚で「ビットコインの金に対する銀」と位置づけた。"
isSatoshi: false
tags:
  - "altcoin"
  - "litecoin"
  - "fork"
  - "scrypt"
  - "proof-of-work"
secondarySources:
  - name: "Litecoin — official site"
    url: "https://litecoin.org/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-04-18-namecoin-launch
  - aftermath/2013-12-06-dogecoin-launch
  - aftermath/2011-08-01-jihan-wu-biography
inlineLinkKeywords:
  - "ライトコイン"
---

2011 年 10 月 13 日、当時 Google のソフトウェアエンジニアで BitcoinTalk のハンドル `coblee` で活動していたチャーリー・リーは、ライトコイン (LTC) のジェネシスブロックを採掘してチェーンをローンチした。その 6 日前 (10 月 7 日)、彼は BitcoinTalk でプロジェクトを発表し、litecoin.org でバイナリを公開していた。

ライトコインはビットコインのコードベースを四つのパラメーター変更でフォークしたものだった:

- **PoW**: SHA-256 ではなく Scrypt。ASIC 集中への対抗として、当面は消費者向け GPU や CPU でも採掘可能であり続けることを意図
- **ブロック時間**: 2.5 分 (ビットコインの 10 分の 1/4)。4 倍速い取引確認
- **ブロック報酬**: 初期 50 LTC、840,000 ブロックごとに半減 (ビットコインの 210,000 の 4 倍)
- **供給上限**: 8400 万 LTC (ビットコインの 2,100 万の 4 倍)

各パラメーターはビットコインに対して 4 倍でスケールされており、ブロック報酬・半減スケジュール・供給上限は内部的に整合する比例関係を保っていた。

リーはライトコインを公的に **「ビットコインの金に対する銀」** として位置づけた — この打ち出しは 2010 年代後半から 2020 年代に至るまで、チェーンのマーケティング文言として残り続けた。この比喩がリーの位置づけの意図を示している。ライトコインはビットコインの代替ではなく、日常取引向けの補完的・高速・低手数料のチェーンであり、ビットコインは価値保存用途のために残す、というものだった。

Scrypt の PoW 選択は、リーが期待した長期的な ASIC 耐性を生まなかった。Scrypt 対応 ASIC (代表的には KnCMiner、後の Bitmain Antminer L シリーズ) が 2014 年以降出荷され、ライトコインの採掘は 2015 ~ 2016 年までにビットコインと同程度に ASIC 支配下に入った。この Scrypt 機を手掛けた Bitmain の創業経緯とビットコイン向け SHA-256 ASIC 市場での支配については、[ジハン・ウーの伝記](/BitcoinArchive/ja/entries/aftermath/2011-08-01-jihan-wu-biography/)に詳しい。「ASIC 耐性」という売り文句は、明示的に取り下げられることなく姿を消した。チェーンは Scrypt のまま動作し続けた。

ライトコインは、当時の大半のアルトコイン (Solidcoin、IXCoin、Tenebrix) が消えた初期アルトコイン期を生き延びた。2013 年までに時価総額で第 2 位の暗号通貨となり、2017 年まで断続的にこの位置を保った。その後、より広範なアルトコイン乱立で順位は埋もれた。チャーリー・リーは 2017 年に Coinbase を辞してライトコイン財団の業務に集中し、同年、自身の発言が市場価格を不当に動かすことを理由に個人保有の LTC を売却したと公表した。

ライトコインが長期的に残した意義は、[ネームコイン](/BitcoinArchive/ja/entries/aftermath/2011-04-18-namecoin-launch/)に続くビットコインコードベースフォークの第二の雛形となったことと、2013 年 12 月にビットコインではなくライトコインをフォークした[ドージコイン](/BitcoinArchive/ja/entries/aftermath/2013-12-06-dogecoin-launch/)の直接の親であることの二点にある。全系譜は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/)に記録されている。
