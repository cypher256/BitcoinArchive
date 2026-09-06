---
title: "ステファン・トーマス 7,002 BTC IronKey ロックアウト ― 残り 2 回でロック確定、数億ドルが凍結"
date: 2021-01-12T00:00:00Z
type: "article"
source: "new-york-times"
sourceUrl: "https://www.nytimes.com/2021/01/12/technology/bitcoin-passwords-wallets-fortunes.html"
author: "Bitcoin Institute"
participants:
  - name: "Stefan Thomas"
    slug: "stefan-thomas"
description: "トーマスが 2011 年に 7,002 BTC を解説動画の制作料として受領。 10 回ミスで自動消去の IronKey に保管しパスワード忘失。 2021 年 NYT 報道時点で残り 2 回。"
isSatoshi: false
tags:
  - "lost-bitcoin"
  - "lost-keys"
  - "ironkey"
secondarySources:
  - name: "Trakx — Stefan Thomas locked out of 7,002 BTC"
    url: "https://trakx.io/resources/insights/stefan-thomas-locked-out-of-7002-btc/"
  - name: "Bitcoin.com News — Stefan Thomas has two password guesses left before $840 million deletes itself forever"
    url: "https://news.bitcoin.com/he-still-has-two-password-guesses-left-before-840-million-deletes-itself-forever-49201/"
  - name: "Wired / Unciphered — トーマスの IronKey 復旧を公開提案 (2023 年)"
    url: "https://www.wired.com/story/unciphered-ironkey-password-cracking-bitcoin/"
relatedEntries:
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
inlineLinkKeywords:
  - "IronKey"
translationStatus: complete
---

![暗い背景に、金属製の USB キー状のオブジェクトが光る琥珀色の試行回数リングの中心に浮かび、周囲には南京錠のアイコン、くしゃくしゃの紙切れ、ガラス越しに封じられた硬貨の山が配置されたイラスト。](/BitcoinArchive/images/analysis/2021-01-12-stefan-thomas-7002-btc-ironkey-lockout-hero.png)

2011 年初頭、プログラマで IRC 文化に熱心だった **ステファン・トーマス** は、ビットコイン解説アニメ動画『What is Bitcoin?』を制作した報酬として、初期ビットコイン利用者からおよそ 7,002 BTC を受け取った。そのウォレットの秘密鍵を、トーマスは **IronKey** 暗号化 USB ドライブに保管した。 IronKey は法人向けの高保証鍵保管デバイスで、 **パスワードを連続 10 回間違えるとデバイス内蔵のコントローラが保護領域を自動消去する** 性質を持つ。一度消去されれば、中身は暗号学的に取り戻せない。

トーマスは IronKey のマスターパスワードを紙に書き留めた。その紙を、後年なくした。

```mermaid
flowchart LR
    A["IronKey: 10 回試行可"]
    B["8 回使用済<br/>(NYT 2021 時点)"]
    C["残り 2 回"]
    D["10 回目で自動暗号化"]
    E["7,002 BTC 恒久回収不能"]
    A --> B
    B --> C
    C -.10 回目失敗.-> D
    D --> E
    classDef warn fill:#ffff99,stroke:#c80
    class C,D,E warn
```

**2021 年 NYT による公表。** 2021 年 1 月 12 日、ニューヨーク・タイムズの記者ナサニエル・ポッパーが「失われたパスワードが何百万人ものビットコイン資産家を締め出している」と題する記事でトーマスの状況を取り上げた。その時点でトーマスは **10 回の試行のうち 8 回を使い切っていた**。残り 2 回。当時の BTC 価格は 3 万 3,000 ドル前後で、ロックされた資産の時価はおよそ 2 億 2,000 万ドル超。その後の BTC 高騰でこの数字は数億ドル、時期によっては 7 億ドル超にまで膨らんだ。

**トーマス本人の職業上の立場。** ロックアウト期間を通じて、トーマスは暗号通貨エンジニアリングの世界で第一線に立ち続けている。[リップル・ラボ](/BitcoinArchive/ja/entries/currency/2026-07-27-xrp-currency-overview/)の初期エンジニアとして 2018 年まで CTO を務め、後にマイクロペイメント / ウェブ収益化のスタートアップ Coil を創業した。 IronKey の件が彼のキャリアを傷つけたわけではない。本人の語り口でも、これは金銭的危機ではなく個人的な人生上の出来事として位置づけられている。

**復旧の公開提案。** 2023 年後半、サイバーセキュリティ企業の Unciphered がトーマスの IronKey と同系列モデルを解読する手法を編み出したと公表し、復旧を公的に提案した。トーマスはこの提案を公に断り、先行する 2 つの復旧チームと既に契約上の取り決めがあり、一存で 3 つ目を割り込ませられない、と説明した。 2026 年中盤の時点でも、デバイスはロックされたまま、復旧成功を伝える公開報告はない。トーマス本人は IronKey を「安全な場所」に保管し、これ以上パスワードを試みないと明言している。

**この話が語り継がれる理由。** トーマスの件は、 **ビットコインの不可逆性** を具体的に示す事例として頻繁に引用される。復旧代理人もいない、サポートによるリセットもない、秘密鍵が失われた UTXO を動かせる裁判所命令も存在しない。 IronKey の側は「保護対象を、正規所有者であっても明け渡さない」という法人向けセキュリティ設計をそのまま実行しているにすぎず、ビットコインのプロトコルも「未使用出力は秘密鍵にだけ不変に縛られる」というサトシの設計をそのまま実行しているにすぎない。結果として、きちんと働いた工学的システムが、およそ 7,002 BTC を恒久的に手の届かない場所へ置いたことになる。

この物語は[ジェームズ・ハウエルズが廃棄したハードディスク](/BitcoinArchive/ja/entries/aftermath/2024-12-03-james-howells-7500-btc-newport-landfill/)や[ジェラルド・コットンの死去に伴う QuadrigaCX 崩壊](/BitcoinArchive/ja/entries/aftermath/2019-04-08-quadrigacx-gerald-cotten-death/)とあわせて「失われたビットコイン」のまとめ記事で登場することが多い。ただし 3 件は機構的にまったく別物 (パスワード忘却 / 物理廃棄 / 取引所側の鍵管理崩壊)。 [失われたビットコイン横断ページ](/BitcoinArchive/ja/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/)は、この 3 件を他の記録済み損失事例と並べて、根底にある不可逆性の論点と一緒に整理している。
