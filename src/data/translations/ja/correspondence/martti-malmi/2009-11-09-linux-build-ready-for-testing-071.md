---
title: "返信: Linuxビルドのテスト準備完了"
date: 2009-11-09T19:30:53Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Wine上での実行継続に対する警告。Berkeley DBの互換性問題とデータベース破損のリスク。GCC 4.3.3によるSHA-256コードの最適化についての考察。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 71
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

本当にWineでの実行を続けない方がいいです。データベースエラーが出ています（db.log）。おそらく新規インストールに転送する儀式的な手順は、データベース破損に対処するために編み出したものでしょう。未確認ブロックを失う方法があるとすれば、データベースエラーが原因でしょう。Linuxビルドで見つかった問題は修正できます。Berkeley DBの深い部分にあるWineの非互換性は修正不可能です。

LinuxビルドのGCC 4.3.3は、WindowsのGCC 3.4.5よりもSHA-256コードをうまく最適化したのだと思います。最適なSHA-256コードを探していた時、手動でチューニングされた高度に最適化されたSHA1コードはたくさんありましたが、SHA-256についてはまだそれほど多くありませんでした。MinGWを4.3.xにアップグレードして同じ土俵に立てるか見てみるべきですね。

Liberty Standardの書き込み：
> このLinuxビルドの制作に貢献してくれた皆さん、本当に素晴らしい仕事をしてくれました！
> 尽力に感謝します。Bitcoinの熟成が始まったので、当面はLinuxクライアントを実行し
> 続けて、Wine上のWindows版と同等以上にコインを生成できるかどうか判断するつもりです。
>
>
> 2009年11月9日 午前8:59、Liberty Standard
> <newlibertystandard@gmail.com <mailto:newlibertystandard@gmail.com>> の書き込み：
>
>     複数のインスタンスを実行したいもう一つの場面は、Bitcoinをアップグレード
>     する時です。古いBitcoinでコイン生成のチェックボックスを外し、新しい
>     Bitcoinを起動して別のデータディレクトリでコイン生成を開始し、古い
>     アプリケーションのコインが熟成したら新しいアプリケーションに送金して
>     古いアプリケーションを閉じます。古いデータを維持しながら
>     アップグレードするよりも、クリーンインストールを好みます。
>
>
>
>     2009年11月9日 午前7:42、Satoshi Nakamoto <satoshin@gmx.com
>     <mailto:satoshin@gmx.com>> の書き込み：
>
>         ありがとうございます、何が起こったか分かりました。最初のノードが
>         遅かったため、他の全員にもブロックを要求してしまい、全体が
>         詰まっただけです。これは修正できます。正しいやり方を少し考える
>         必要があります。
>
>         未確認の状態でシャットダウンしてもリスクはありません。トランザクション
>         や新しいブロックを作成すると、すぐにネットワークにブロードキャスト
>         されます。その後の確認数/#の増加は結果を監視しているだけです。その間に
>         あなたのノードが承認を促進するために何かをすることはありません。
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
