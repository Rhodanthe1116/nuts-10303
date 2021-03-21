---
title: 廢文產生器
slug: /
---

## 2021-03-20

<iframe
  src="https://trinket.io/embed/python3/8d36a1ec28"
  width="100%"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen
></iframe>

```py
print('歡迎使用廢文產生器')

name = input("請輸入主題:")


template1 = f"""
      我認為{name}開發者的哲學是
     「用一種方法，最好是只有一種方法來做一件事」，
     顯著不同於擁有「不止一種方法去做一件事」風格的語言例如Perl。
     在設計{name}語言時，如果面臨多種選擇，
     {name}開發者一般會拒絕花俏的語法，
     而選擇明確沒有或者很少有歧義的語法。
     """

template2 = f"""
     范羅蘇姆認為{name}非常優美和強大，
     並沒有成功的原因是非開放造成的，
     故而將{name}本身設計為可擴充的。
     {name}並不把所有的特性和功能都整合到語言核心，
     而是提供了豐富的API和工具，
     以便程式設計師能夠輕鬆地使用C、Cython來編寫擴充模組，
     因此很多人使用{name}將其他語言編寫的程式進行整合和封裝。
     {name}編譯器本身也可以被整合到其它需要手稿語言的程式內。
     """

import random

num = random.randint(1, 2)


if num == 2:
    print(template1)

else:
    print(template2)
```
