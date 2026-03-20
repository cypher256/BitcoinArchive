---
title: "python OpenCL bitcoin miner"
date: 2010-10-01T09:21:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg14875#msg14875"
author: "m0mchil"
participants:
  - name: "m0mchil"
    slug: "m0mchil"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "m0mchil starts a discussion: python OpenCL bitcoin miner."
isSatoshi: false
threadId: "bt-opencl-miner-for-the-masses"
threadPosition: 1
tags: []
---

**Latest miner**

[poclbm_py2exe_20120920](http://github.com/downloads/m0mchil/poclbm/poclbm_py2exe_20120920.7z)

[mirror](http://debian.fmi.uni-sofia.bg/~maurice/bitcoin/poclbm_py2exe_20120920.7z)

Sources for poclbm are at [http://github.com/m0mchil/poclbm](http://github.com/m0mchil/poclbm)

**GUI**

Created by Kiv, see [http://bitcointalk.org/index.php?topic=3878.0](http://bitcointalk.org/index.php?topic=3878.0)

**Guides**

Windows - [http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows](http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows)

Ubuntu - [http://bitcointalk.org/index.php?topic=2636](http://bitcointalk.org/index.php?topic=2636)

Mac - [https://bitcointalk.org/index.php?topic=12360](https://bitcointalk.org/index.php?topic=12360)

**Known best settings**
(please PM better/best settings for your platform)

*AMD 5xxx and up*
use '-v -w 128'

**Frequently asked questions**

*Q: Does my video card / driver supports OpenCL?*

AMD - 4xxx and up. Nvidia - 8xxx and up. On Windows you can use 'GPU Caps Viewer' or similar.

*Q: I am seeing 'pyopencl.LogicError: clGetPlatformIDs failed', what is this?
Q: It says 'ImportError: DLL load failed: The specified module could not be found'?
Q: Or 'ImportError: DLL load failed: The specified procedure could not be found'?*

You don't have proper OpenCL support. The reasons may vary. Be sure to remove any old drivers and SDK from different vendors you may have used. Use web search to see how to make it work for your combination of GPU and OS.

*Q: When I try to run it with the following parameters: '--host=http://mining.bitcoin.cz:8332' miner errors out with  'nonnumeric port'*

Remove 'http://', it's intended for browsers (becames '--host=mining.bitcoin.cz'). Use '--port' to specify port (default is 8332 so you don't need to specify it if the pool you use is at same port).

*Q: Why it uses 100% CPU?*

You probably selected the CPU as OpenCL device. Or you are using it on Linux with AMD Stream SDK 2.2. Use 2.1 instead.

*Q: What does 'invalid or stale' means?*

The block last submitted was either invalid or stale.

*Q: How a block becomes stale?*

You submited solution for a block which was just solved by someone else.

*Q: Why a block is invalid?*

Don't overclock too much. And switch crossfire off. Or may be I screwed the search again?  It's good if you see more 'accepted's than 'invalid's.

*When I try to run the miner a new CMD window flashes on my screen too rapidly to read anything, or even see if it says anything.*

It's console application. You use that ugly black thing called 'Command Prompt' to run it.
