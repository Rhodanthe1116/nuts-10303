---
title: 廢文產生器
slug: /
---

## 2021-03-20

<iframe
  src="https://trinket.io/embed/python3/3d4516a799"
  width="100%"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen
></iframe>

```py
print("歡迎使用廢文產生器")
print("請輸入主題")
x=input()
tenplate=f"""
每個人都不得不面對這些問題。
在面對這種問題時，務必詳細考慮{x}的各種可能。
{x}的存在，令我無法停止對他的思考。我們要學會站在別人的角度思考。
我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。
"""
template=f"""
每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮{x}的各種可能。

總而言之，老舊的想法已經過時了。
"""


import random
z=random.randint(1,2)

if z==1:
    print(tenplate)
if z==2:
    print(template)
```
