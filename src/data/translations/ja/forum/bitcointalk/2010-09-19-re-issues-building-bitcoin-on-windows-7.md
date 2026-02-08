---
title: "Re: Windows 7でのBitcoinビルドの問題"
date: 2010-09-19T18:46:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1034.msg13206#msg13206"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Windows 7でのBitcoinビルドの問題」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/453/"
translationStatus: complete
---

引っかかっている行：
Code:ERROR extern map<string, string> mapAddressBook;
ERROR extern CCriticalSection cs_mapAddressBook;
ERROR extern vector<unsigned char> vchDefaultKey;
OK extern bool fClient;
OK extern int nBestHeight;

OK extern unsigned int nWalletDBUpdated;
ERROR extern DbEnv dbenv;

つまり、mapやvectorさえも、何も定義されていないかのように振る舞っています。

しかし、db.hはheaders.h（そこだけで、他の場所からではない）によってインクルードされ、headers.hはdb.hの前にvector、map、util.hなどすべてをインクルードしています。

VCがプリコンパイル済みヘッダーを使おうとして台無しにしていますか？以前の失敗した試みからディレクトリに残ったプリコンパイル済みヘッダーファイルが見つかって使われている可能性はありますか？

MinGWのインストールを非常に簡単にするインストーラーパッケージが今あります。最新バージョンの4.5.0は使わず、4.4.1 (1.908.0)や1.812.0のような数バージョン前のものを使ってください。セットアッププログラムがすべてを完全にインストールします。以前のように難しくはありません。make*.exeをmake.exeにリネームするだけでよかったと思います。
[http://tdm-gcc.tdragon.net/](http://tdm-gcc.tdragon.net/)

話題外ですが：tcatmの4-way 128ビットSSE2コードをWindowsで動作させるためにハックしてくれる人がいると良いのですが。MinGWの最適化に何か問題があり、確信はありませんがスタック上の16バイトアライメントの問題かもしれず、セグフォルトが起きます。いじって、テストプログラムでは彼のコードを動作させることができましたが、何らかの理由でBitcoin自体では動作しませんでした。
