---
title: "Re: バージョン0.3.13、アップグレードしてください"
date: 2010-10-03T20:02:24.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15116#msg15116"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「バージョン0.3.13、アップグレードしてください」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/476/"
threadId: "bt-version-0-3-13-please-upgrade"
threadTitle: "Version 0.3.13, please upgrade"
threadPosition: 4
translationStatus: complete
---

Code:diff -u old\main.cpp new\main.cpp
--- old\main.cpp Sun Oct 03 20:57:20 2010
+++ new\main.cpp Sun Oct 03 20:57:54 2010
@@ -2831,6 +2831,10 @@
     bool fUseSSE2 = ((fIntel && nFamily * 10000 + nModel >=  60026) ||
                      (fAMD   && nFamily * 10000 + nModel >= 160010));

+    // AMDは64ビットモードでより低いモデル番号を報告する
+    if (fAMD && sizeof(void*) > 4 && nFamily * 10000 + nModel >= 160004)
+        fUseSSE2 = true;
+
     static bool fPrinted;
     if (!fPrinted)
     {
@@ -2989,6 +2993,17 @@

                     // ブロックサイズに基づくトランザクション手数料
                     int64 nMinFee = tx.GetMinFee(nBlockSize);
+                    //////// 一時的なコード
+                    if (nBlockSize < MAX_BLOCK_SIZE_GEN / 10 && GetWarnings("statusbar") == "")
+                    {
+                        if (nBestHeight < 91000)
+                            nMinFee = 0;
+                        if (nBestHeight < 100000 && nTxSize < 2000)
+                            nMinFee = 0;
+                        if (nBestHeight < 110000 && nBestHeight % 10 == 0)
+                            nMinFee = 0;
+                    }
+                    //////// 一時的なコード

                     map<uint256, CTxIndex> mapTestPoolTmp(mapTestPool);
                     if (!tx.ConnectInputs(txdb, mapTestPoolTmp, CDiskTxPos(1,1,1), pindexPrev, nFees, false, true, nMinFee))
diff -u old\serialize.h new\serialize.h
--- old\serialize.h Sun Oct 03 20:57:45 2010
+++ new\serialize.h Sun Oct 03 20:57:54 2010
@@ -22,8 +22,8 @@
 class CAutoFile;
 static const unsigned int MAX_SIZE = 0x02000000;

-static const int VERSION = 31300;
-static const char* pszSubVer = "";
+static const int VERSION = 31301;
+static const char* pszSubVer = " test1";
