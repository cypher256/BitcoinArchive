---
title: "Re: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-11-26T17:32:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg24662#msg24662"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリースtarballにブロックチェーン1-74000を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/513/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 2
translationStatus: complete
---

7年前の遅いドライブでテストしましたが、帯域幅とCPUは明らかにボトルネックではありませんでした。初回ダウンロードは1時間20分かかりました。

それよりはるかに長く、特に24時間もかかるなら、非常に遅いノードからダウンロードしているか、接続速度が約15KB/秒（120kbps）よりかなり遅いか、何か他に問題があるはずです。そのような場合にボトルネックが何であるように見えるかわかると良いのですが。

最新のブロックが送信される10分程度ごとに、より速いノードに切り替える機会があるはずです。最新のブロックがブロードキャストされると、他のノードに次の500ブロックを要求し、最も速く送信するノードからダウンロードを継続します。少なくとも、そのように動作するはずです。

[Quote from: jgarzik on November 26, 2010, 02:07:43 AM](https://bitcointalk.org/index.php?topic=1931.msg24522#msg24522)[Quote from: satoshi on November 25, 2010, 05:51:39 PM](https://bitcointalk.org/index.php?topic=1931.msg24438#msg24438)Berkeley DBの設定を調整して、キャッシュメモリを有効化または増加できるかもしれません。
ダウンロード中に、[ACID](http://en.wikipedia.org/wiki/ACID)プロパティのどれが必要ですか？
より多くの読み取りキャッシュが役立つかもしれません。インデックスを作成するためにblk0001.datとblkindex.dat全体をランダムに読み取る必要があります。ファイルがメモリより小さいと仮定することはできませんが、現在はまだそうです。ほとんどの依存関係が最近のものなので、キャッシュは効果的でしょう。

誰かが異なるBerkeley DB設定で実験して、ダウンロードを大幅に速くするものがないか確認すべきです。大幅な改善が見つかれば、詳細を詰めることができます。

引用：BDBレコードの追加は、チェックポイントを発行するまで、単にログファイルに追記するだけです。チェックポイントがメインデータベースファイルを更新します。500ブロックごとにチェックポイントしています。
