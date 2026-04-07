---
title: "Re: CLIビットコイン生成"
date: 2010-05-26T20:09:34.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1256#msg1256"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「CLIビットコイン生成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/109/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "molybdenum"
    personSlug: "molybdenum"
    date: "2010-05-22T09:44:20.000Z"
    sourceEntryId: "forum/bitcointalk/topic-145/2010-05-22-molybdenum-msg1194"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> シンプルなbitcoin用ウェブインターフェースを作ろうとしていて（本格的なwx/GTK GUIよりも軽量でステートレスなもの）、検証中の生成ブロックのステータスを確認する方法が見当たらない…残高が50ジャンプするのは見たが、もちろんそれはgetallreceivedには表示されない。
<!-- /tone-skip -->
ああ、実際にそういう仕組みだ。getallreceived 0で望むことができるはずだ。（現在はlistreceivedbyaddress 0に名前が変更されている）デフォルトは1確認だが、実際にはほとんどのデジタル商品やサービスは0確認で問題ないと思う。その通り、0確認以上が必要な場合は、未確認と利用可能残高の2つの数字を表示すれば、トランザクションが通ったことをすぐに確認できる。

listreceivedbyaddress [minconf=1] [includeempty=false]<br>
[minconf]は支払いが含まれる前の最小確認数だ。<br>
[includeempty]はまだ支払いを受けていないアドレスを含めるかどうかだ。<br>
以下を含むオブジェクトの配列を返す:<br>
  "address" : 受取アドレス<br>
  "label" : 受取アドレスのラベル<br>
  "amount" : アドレスが受け取った合計金額<br>
  "confirmations" : 含まれる最新トランザクションの確認数

アドレスにユーザー名でラベルを付けている場合はlistreceivedbylabelも使える。

今のところ、ウェブ加盟店向けの機能に集中しており、ヘッドレスコイン生成器のリモート管理用の機能にはまだあまり取り組んでいない。
