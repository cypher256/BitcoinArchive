---
title: "Re: Difficulty"
date: 2010-08-04T14:45:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg7495#msg7495"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Context post by mizerydearia in BitcoinTalk topic 587. after msg6301."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "ArtForz"
    personSlug: "artforz"
    date: "2010-08-04T14:21:22.000Z"
---

Thanks ArtForz! ^_^

<!-- quote: q1 -->
> Code:import struct
> 
> def SetCompact(nCompact):
> 	"""convert bc compact uint to number"""
> 	nSize = (nCompact >> 24) & 0xFF
> 	tbuf = "\x00\x00\x00" + chr(nSize)
> 	if nSize >= 1:
> 		tbuf += chr((nCompact >> 16) & 0xFF)
> 	if nSize >= 2:
> 		tbuf += chr((nCompact >> 8) & 0xFF)
> 	if nSize >= 3:
> 		tbuf += chr((nCompact >> 0) & 0xFF)
> 		tbuf += "\x00" * (nSize - 3)
> 	return mpi2num(tbuf)

Code:def uint256_from_compact(c):
	nbytes = (c >> 24) & 0xFF
	v = (c & 0xFFFFFFL) << (8 * (nbytes - 3))
	return v
I confirmed again that both of these produce same output when using 0x1d00ffff
