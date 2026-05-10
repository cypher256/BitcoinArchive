---
title: "Re: Windows 7 で Bitcoin のビルドに問題がある"
date: 2010-09-19T18:46:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1034.msg13206#msg13206"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Windows 7 での Bitcoin ビルドの問題」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/453/"
translationStatus: complete
---

引っかかっている行：

```cpp
ERROR extern map<string, string> mapAddressBook;
ERROR extern CCriticalSection cs_mapAddressBook;
ERROR extern vector<unsigned char> vchDefaultKey;
OK extern bool fClient;
OK extern int nBestHeight;

OK extern unsigned int nWalletDBUpdated;
ERROR extern DbEnv dbenv;
```

つまり、map や vector さえも、何も定義されていないかのように振る舞っている。

しかし、db.h は headers.h（そこだけで、他の場所からではない）によってインクルードされ、headers.h は db.h の前に vector、map、util.h などすべてをインクルードしている。

VC がプリコンパイル済みヘッダーを使おうとして台無しにしているのか？以前の失敗した試みからディレクトリに残ったプリコンパイル済みヘッダーファイルが見つかって使われている可能性はあるか？

MinGW のインストールを非常に簡単にするインストーラーパッケージが今ある。最新バージョンの 4.5.0 は使わず、4.4.1 (1.908.0)や 1.812.0 のような数バージョン前のものを使ってくれ。セットアッププログラムがすべてを完全にインストールする。以前のように難しくはない。make*.exe を make.exe にリネームするだけでよかったと思う。
[http://tdm-gcc.tdragon.net/](http://tdm-gcc.tdragon.net/)

話題外だが：tcatm の 4-way 128 ビット SSE2 コードを Windows で動作させるためにハックしてくれる人がいると良いのだが。MinGW の最適化に何か問題があり、確信はないがスタック上の 16 バイトアライメントの問題かもしれず、セグフォルトが起きる。いじって、テストプログラムでは彼のコードを動作させることができたが、何らかの理由で Bitcoin 自体では動作しなかった。
