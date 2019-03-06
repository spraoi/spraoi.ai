---
datePublished: 2019-03-06
dateModified: 2019-03-06
title: How Did We Fix Python Interpretor’s Readline Issue In Mojave?
author: santoash-rajaram
banner: /images/social-banner-1200x628.png
description: >-
  How I fixed python interpretor’s readline issue in macOS Mojave.
---

If you upgraded to Mojave and realized that the up arrow to go to the previous
command in your history stopped working and it’s printing escape characters like
bellow, then it means your are running into a readline issue.

```
Python 3.7.0 (default, Jun 29 2018, 20:13:13)
[Clang 9.1.0 (clang-902.0.39.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> ^D
```

Apparently
[the readline module conflicts with the standard module](https://pypi.org/project/readline/)—so
it has been renamed to gnureadline. Bellow are the steps I needed to take to fix
the issue:

### Step 1: Install gnureadline.

```shell
pip install gnureadline
```

### Step 2: Create a python startup script.

I created it at `~/.pystartup` with the following content:

```python
# Add auto-completion and a stored history file of commands to your Python
# interactive interpreter. Requires Python 2.0+, readline. Autocomplete is
# bound to the Esc key by default (you can change it - see readline docs).

import atexit
import os
import gnureadline
import rlcompleter

historyPath = os.path.expanduser("~/bin/.pyhistory")

def save_history(historyPath=historyPath):
    import gnureadline
    gnureadline.write_history_file(historyPath)

if os.path.exists(historyPath):
    gnureadline.read_history_file(historyPath)

atexit.register(save_history)
del os, atexit, gnureadline, rlcompleter, save_history, historyPath
```

### Step 3: Add the following line to your .bashrc or .zshrc (or whatever your shell uses).

```shell
export PYTHONSTARTUP=~/.pystartup
```

That should do it!
