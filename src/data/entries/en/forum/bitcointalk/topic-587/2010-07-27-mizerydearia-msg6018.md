---
title: "Difficulty"
date: 2010-07-27T10:11:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg6018#msg6018"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Thread starter by mizerydearia in BitcoinTalk topic 587."
isSatoshi: false
tags: []
---

http://nullvoid.org/bitcoin/difficultiez.php

Code:<?
	header("Content-type: text/html");
	require_once 'jsonRPCClient.php';
	$data=new jsonRPCClient('http://127.0.0.1:8332');
	$blockcount = $data->getblockcount();
	$now = date("U");
	$blockfile = "blockdata";
	$data = file($blockfile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES); array_pop($data);
?><html>
 <head>
  <meta http-equiv="refresh" content="100000">
 </head>
 <body>
  <pre>
<?
	function humantime($secs) {
		if ($secs<0) return false;
		$m = (int)($secs / 60); $s = $secs % 60; $s = ($s <= 9) ? "0$s" : $s;
		$h = (int)($m / 60); $m = $m % 60; $m = ($m <= 9) ? "0$m" : $m;
		$d = (int)($h / 24); $h = $h % 24; $h = ($h <= 9) ? "0$h" : $h;
		$d = ($d <= 9) ? "0$d" : $d;
		return $d."d $h:$m:$s";
	}

	// Converted from ArtForz's python code http://bitcointalk.org/index.php?topic=464.msg4080#msg4080
	function uint256_from_compact($c) {
		$nbytes = ($c >> 24) & 0xFF;
		return bcmul($c & 0xFFFFFF,bcpow(2,8 * ($nbytes - 3)));
	}
	
	$tblock = 0;
	$nTargetTimespan = 60 * 60 * 24 * 14;
	bcscale(256);
	foreach ($data as $line) {
		$blocks = strtok($line, " ");
		$date = strtok(" ");
		$avghash = strtok(" ");
		$bits = strtok(" ");
		if ($blocks == 0 || $blocks == $tblock) {
			$tblock = $blocks + 2016;
			$blocknum = str_repeat(" ", 6 - strlen($blocks)).$blocks;
			echo "Block $blocknum was generated at $date (".date("r", $date).")";
			if ($blocks != 0) {
				$intervalnum = $date - $lastdate;
				$interval = str_repeat(" ", 9 - strlen($intervalnum)).$intervalnum;
				echo "    $interval seconds interval (".humantime($intervalnum).")";
				echo "   Difficulty: ".bcdiv(bcdiv(bcmul(uint256_from_compact(0x1D00FFFF),1000), uint256_from_compact($bits)), 1000);
				$lastdate = $date;
			}
			echo "<br>";
		}
	}
?>
  </pre>
 </body>
</html>
