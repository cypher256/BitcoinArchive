---
title: "Re: Win7 64bit 前回のパッチ火曜日以降クラッシュする"
date: 2010-10-23T18:52:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1540.msg18246#msg18246"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Win7 64bit 前回のパッチ火曜日以降クラッシュする」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/495/"
threadId: "bt-win7-64bit-since-last-patch-tues-now-crashes"
translationStatus: complete
---

[Quote from: Odin on October 22, 2010, 09:24:38 PM](#msg18105)
> これは0.3.14-win32-setup.exeでの問題である。以前は（1時間前まで）2010年7月版のbitcoin.exeを実行していたが、それもクラッシュしており、クラッシュレポートは類似していた。そこで問題が修正されたか確認するためにアップグレードした。
>
> 明確にしておくと、EXEを起動するとすぐにクラッシュが報告される。ログインするとWin7のクラッシュレポートが表示され、手動で起動しようとしても同様である。クラッシュレポートの先に表示されるダイアログは「The application was unable to start correctly (0xc0000005). Click OK to close the application.」である。
>
> また、可能であればアプリケーションのEXEにバージョン情報を付与してほしい。現在は0.0.0.0となっている。
>
> Code:

これが重要な手がかりだ。そこでクラッシュしたということだと思う。他のバージョンを試してみることもできるかもしれない。mingwm10.dllはマルチスレッドアプリのコールバック要件を満たすための単純なプレースホルダーだ。

Windows 64ビットで問題なく動作している方は他にいるか？
