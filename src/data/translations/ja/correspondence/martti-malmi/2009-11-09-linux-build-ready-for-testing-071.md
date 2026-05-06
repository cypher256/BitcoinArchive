---
title: "Re: Linuxビルドのテスト準備完了"
date: 2009-11-09T19:30:53Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがWine上でのビットコイン実行はBerkeley DBの互換性問題でデータベース破損のリスクがあると警告。LinuxのGCC 4.3.3がSHA-256をより効率的に最適化する点にも言及。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
  - id: "q2"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
  - id: "q3"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
---

<!-- speaker: Satoshi Nakamoto -->
本当にWineでの実行を続けない方がいい。データベースエラーが出ている（db.log）。おそらく新規インストールに転送する儀式的な手順は、データベース破損に対処するために編み出したものだろう。未確認ブロックを失う方法があるとすれば、データベースエラーが原因だろう。Linuxビルドで見つかった問題は修正できる。Berkeley DBの深い部分にあるWineの非互換性は修正不可能だ。

LinuxビルドのGCC 4.3.3は、WindowsのGCC 3.4.5よりもSHA-256コードをうまく最適化したのだと思う。最適なSHA-256コードを探していた時、手動でチューニングされた高度に最適化されたSHA1コードはたくさんあったが、SHA-256についてはまだそれほど多くなかった。MinGWを4.3.xにアップグレードして同じ土俵に立てるか見てみるべきだな。

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> このLinuxビルドの制作に貢献してくれた皆さん、本当に素晴らしい仕事をしてくれました！
> 尽力に感謝します。ビットコインの熟成が始まったので、当面はLinuxクライアントを実行し
> 続けて、Wine上のWindows版と同等以上にコインを生成できるかどうか判断するつもりです。
>
>
> 2009年11月9日午前8:59、Liberty Standard
>
> <!-- quote: q2 -->
>> 複数のインスタンスを実行したいもう一つの場面は、ビットコインをアップグレード
>> する時です。古いビットコインでコイン生成のチェックボックスを外し、新しい
>> ビットコインを起動して別のデータディレクトリでコイン生成を開始し、古い
>> アプリケーションのコインが熟成したら新しいアプリケーションに送金して
>> 古いアプリケーションを閉じます。古いデータを維持しながら
>> アップグレードするよりも、クリーンインストールを好みます。
>>
>> 2009年11月9日午前7:42、Satoshi Nakamoto <satoshin@gmx.com
>
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q3 -->
>> ありがとう、何が起こったか分かった。最初のノードが
>> 遅かったため、他の全員にもブロックを要求してしまい、全体が
>> 詰まっただけだ。これは修正できる。正しいやり方を少し考える
>> 必要がある。
>>
>> 未確認の状態でシャットダウンしてもリスクはない。トランザクション
>> や新しいブロックを作成すると、すぐにネットワークにブロードキャスト
>> される。その後の確認数/#の増加は結果を監視しているだけだ。その間に
>> あなたのノードが承認を促進するために何かをすることはない。
<!-- /tone-skip -->
