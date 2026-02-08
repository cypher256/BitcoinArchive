---
title: "Re: Bitcoinに関する質問"
date: 2009-12-10T20:49:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=13.msg46#msg46"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoinに関する質問」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/17/"
threadId: "bt-questions-about-bitcoin"
threadTitle: "Questions about Bitcoin"
threadPosition: 1
translationStatus: complete
---

1-3:
そのレベルの匿名性を得るには、TOR経由で接続する必要があります。これはバージョン0.2で可能になり、あと数週間でリリースされます。その際にTORの使用方法を投稿します。

4:
バージョン0.1.5：%appdata%\Bitcoinディレクトリ全体をバックアップしてください。
バージョン0.2：wallet.datだけをバックアップすれば大丈夫です。

5:
いいえ。設計全体がそれを防ぐためのものです。

6:
それらのコインは二度と回復できず、総流通量は減少します。実効流通量が減少するため、残りのすべてのコインの価値はわずかに上昇します。政府が紙幣を増刷して既存の貨幣の価値が下がるのとは逆です。

7:
現在29,296ブロックです。流通量はブロック数×50なので、現在の流通量は1,464,800 BCです。

24,000ブロックしかないなら、初回ブロックダウンロードが完了していないのでしょう。Bitcoinを終了して再起動してください。バージョン0.2は初回ブロックダウンロードがより良く/速くなっています。

8:
現在は通常、数百程度です。今は簡単ですが、ネットワークが成長するにつれて難しくなっていきます。

9:
良い質問です。TCPです。ウェブサイトをTCPポート8333と記載するように更新する必要があります。

ポートフォワーディングは、他のノードがあなたに接続できるようにするためのものなので、より多くのノードと接続できるため、接続を維持するのに役立ちます。IPアドレスによる支払いを受け取るためにも必要です。

10:
いいえ、他のノードはそれを受け入れません。

オープンソースであるということは、誰でもコードを独立して確認できるということです。クローズドソースだったら、セキュリティを誰も検証できません。この種のプログラムにとって、オープンソースであることは不可欠だと思います。

11:
遅いマシンはより少ないコインを生成します。CPU速度に比例します。

12:
さらに追加されます。

13:
Berkeley DBと呼ばれるトランザクションデータベースを使用しています。システムクラッシュでもデータを失いません。トランザクションは受信時に即座にデータベースに書き込まれます。

14:
今のところ、総ブロック数に50を掛ければよいです。Bitcoinネットワークはほぼ1年間稼働しています。設計とコーディングは2007年に始まりました。
